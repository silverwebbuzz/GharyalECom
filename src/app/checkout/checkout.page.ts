import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from '../api/rest.service';
import { MagentoServiceService } from '../api/magento-service.service';
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  paymentMethod: any;
  totals:any;
  shippingAddress: any;
  selectedPaymentMethod:any = '';
  constructor(private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private rest: RestService,
    private service: MagentoServiceService,
    private cart:CartService,
    private statusBar: StatusBar) { 

      this.route.queryParams.subscribe(params => {
        if (params) {
          let dataparams = JSON.parse(params.paymentMethod);
          this.shippingAddress = JSON.parse(params.shipping_address);
          console.log('data:',dataparams);
          this.paymentMethod = dataparams.payment_methods;
          this.totals = dataparams.totals;
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
        }else{
          this.router.navigate(['/billing']);
        }
      });

    }

    ngOnInit() {
      
    }
    ionViewWillEnter() {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#5d5e5e');
    }

  summary(){
    if(this.selectedPaymentMethod == ''){
      this.rest.presentToastWithOptions('Please Select Payment Method.');
      return false;
    }
    this.rest.presentLoading();
    const cartId = this.cart.cartId;
    var body = {
      paymentMethod:{
        method: this.selectedPaymentMethod
      }
    };
    this.service.createOrder(cartId,body).subscribe(val =>{
      console.log('create Order Val:', val);
      window.localStorage.removeItem('cartId');
      window.localStorage.removeItem('cartItems');
      let navigationExtras: NavigationExtras = {
        queryParams: {
          OrderId: JSON.stringify(val)
        }
      };
      this.router.navigate(['/summary'],navigationExtras);
    },err=>{
      if(this.rest.isLoading){
        this.rest.dismissLoading();
      }
      if(err.status == 404){
        this.rest.presentToastWithOptions('Your Cart is empty.');
        this.router.navigate(['/tabs/mycart']);
      }else{
        this.rest.presentToastWithOptions(err.error.message);
      }
      console.log('Order Creating Err:',err);
    })
    //this.router.navigate(['/summary']);
  }

  changePaymentMothod(value){
    this.selectedPaymentMethod = value;
  }

  back(){
    
    this.navCtrl.navigateBack(['/billing']);
  }

}
