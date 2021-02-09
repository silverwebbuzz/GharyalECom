import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from '../api/rest.service';
import { CartService } from '../api/cart.service';
import { MagentoServiceService } from '../api/magento-service.service';
import { ShippingAddressPage } from '../component/shipping-address/shipping-address.page';
import { AuthenticationService } from '../services/authentication.service';
import { AddnewaddressPage } from '../component/addnewaddress/addnewaddress.page';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {
  cartShippingInfo: any;
  CustomerInformation: any;
  defaultBillingAddress: any;
  defaultShippingAddress: any;
  AllCustomerAddress: any;
  shippingMethod:any;
  selectedshippingMethod: any;
  constructor(private router: Router,
    private navCtrl: NavController,
    private cart:CartService,
    private auth:AuthenticationService,
    private modalCtrl:ModalController,
    private rest: RestService,
    private service: MagentoServiceService,
    private statusBar: StatusBar) {
      this.auth.set_login_back_url('/billing');
      this.getCartShippingDetails();

     }

    ngOnInit() {
    }
    ionViewWillEnter() {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#5d5e5e');
    }
  
    getCartShippingDetails(){
      const cartId = this.cart.cartId;
      this.service.getCartShippingDetails(cartId).subscribe(val =>{
        this.cartShippingInfo = val;
        this.CustomerInformation = val.customer;
        this.AllCustomerAddress = val.customer.addresses;
        console.log('cartShoppingInfo:', this.cartShippingInfo);
        if(val.customer.addresses.length > 0){
          for(let i =0;i < val.customer.addresses.length;i++){
            if(val.customer.addresses[i].default_shipping){
              this.defaultShippingAddress = val.customer.addresses[i];
            }
            if(val.customer.addresses[i].default_billing){
              this.defaultBillingAddress = val.customer.addresses[i];
            }
          }
          this.auth.getToken().then(token=>{
            const body ={
              addressId : this.defaultShippingAddress.id
            }
            this.service.getShippingMethod(body, token).subscribe(val=>{
              this.shippingMethod = val;
              this.selectedshippingMethod = val[0];
              console.log(this.selectedshippingMethod);
              if(this.rest.isLoading){
                this.rest.dismissLoading();
              }
            },err=>{
              if(err.status == 401){
                if(this.rest.isLoading){
                  this.rest.dismissLoading();
                }
                const stateURL = this.router.routerState.snapshot.url;
                this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
              }
              console.log('Shipping Method Err:', err);
            });
          });
        }else{
          this.defaultShippingAddress = null;
          this.defaultBillingAddress = null;
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
        }
        
      },err =>{
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
        console.log('Billing Error:',err);
        this.rest.presentToastWithOptions('Something Wrong Try Please again.');
        this.navCtrl.navigateBack(['/tabs/mycart']);
      })
      
      
    }
  goToCheckout(){
    const cartId = this.cart.cartId;
    if(!this.defaultBillingAddress){
      this.rest.presentToastWithOptions('Please Select Billing Address');
      return false;
    }

    if(!this.defaultShippingAddress){
      this.rest.presentToastWithOptions('Please Select Shipping Address');
      return false;
    }
    if(!this.selectedshippingMethod){
      this.rest.presentToastWithOptions('Please Select One Shipping Method');
      return false;
    }

    this.rest.presentLoading();
    var companyName = null;
    if(this.defaultBillingAddress.company){
      companyName = this.defaultBillingAddress.company;
    }
    var billingbody ={
      address: {
        region: this.defaultBillingAddress.region.region,
        region_id: this.defaultBillingAddress.region_id,
        region_code: this.defaultBillingAddress.region.region_code,
        country_id: this.defaultBillingAddress.country_id,
        street: this.defaultBillingAddress.street,
        company: companyName,
        telephone: this.defaultBillingAddress.telephone,
        postcode: this.defaultBillingAddress.postcode,
        city: this.defaultBillingAddress.city,
        firstname: this.defaultBillingAddress.firstname,
        lastname: this.defaultBillingAddress.lastname,
        customer_id: this.CustomerInformation.id,
        email: this.CustomerInformation.email,
        customer_address_id: this.defaultBillingAddress.id,
        save_in_address_book: 1
      },
      useForShipping:false
    }
    console.log('billingbody:',billingbody);
      this.service.createbillingManagement(cartId, billingbody).subscribe(val =>{
        var body ={
          addressInformation:{
            shipping_address:{
              city: this.defaultShippingAddress.city,
              country_id: this.defaultShippingAddress.country_id,
              firstname: this.defaultShippingAddress.firstname,
              lastname: this.defaultShippingAddress.lastname,
              postcode: this.defaultShippingAddress.postcode,
              street: this.defaultShippingAddress.street,
              region: this.defaultShippingAddress.region.region,
              region_id: this.defaultShippingAddress.region_id,
              telephone: this.defaultShippingAddress.telephone,
              customer_id: this.CustomerInformation.id,
              email: this.CustomerInformation.email
            },
            billing_address:{
              city: this.defaultBillingAddress.city,
              country_id: this.defaultBillingAddress.country_id,
              firstname: this.defaultBillingAddress.firstname,
              lastname: this.defaultBillingAddress.lastname,
              postcode: this.defaultBillingAddress.postcode,
              street: this.defaultBillingAddress.street,
              region: this.defaultBillingAddress.region.region,
              region_id: this.defaultBillingAddress.region_id,
              telephone: this.defaultBillingAddress.telephone,
              customer_id: this.CustomerInformation.id,
              email: this.CustomerInformation.email
            },
            shippingCarrierCode: this.selectedshippingMethod.carrier_code,
            shippingMethodCode: this.selectedshippingMethod.method_code,
          }
        }
        this.service.getPaymentMethod(cartId,body).subscribe(val =>{
          let navigationExtras: NavigationExtras = {
            queryParams: {
              paymentMethod: JSON.stringify(val),
              shipping_address: JSON.stringify(this.defaultShippingAddress)
            }
          };
          this.router.navigate(['/checkout'], navigationExtras);
        },err =>{
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          this.rest.presentToastWithOptions('Something Wrong Payment method not getting try again.');
          console.log('Payment Mehtod Err:',err);
        })
      },err=>{
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
        this.rest.presentToastWithOptions('Billing Agreement Issue.Please try again.');
        console.log('billingManagement Err:', err);
      })
    
  }

  changeShippingOption(method){
    this.selectedshippingMethod = method
  }

  async ChangeBillingAddress(){
    const changeshippingModal = await this.modalCtrl.create({
      component: ShippingAddressPage,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
        defaultAddress : this.defaultBillingAddress,
        address: this.AllCustomerAddress
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal'
    });

    changeshippingModal.onWillDismiss().then((data)=>{
      if(data.role == 'billing'){
        this.defaultBillingAddress = data.data;
      }else if(data.role == "backdrop"){

      }
    });
    
    return await changeshippingModal.present();
  }
  async ChangeShippingAddress(){
    const changeshippingModal = await this.modalCtrl.create({
      component: ShippingAddressPage,
      componentProps: {
        title: 'Shipping Address',
        type:'shipping',
        defaultAddress : this.defaultShippingAddress,
        address: this.AllCustomerAddress
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal'
    });

    changeshippingModal.onWillDismiss().then((data)=>{
      
      if(data.role == 'shipping'){
        this.defaultShippingAddress = data.data;
        this.rest.presentLoading();
        this.onChangeShippingAddress(this.defaultShippingAddress.id);
      }else if(data.role == "backdrop"){

      }
    });
    
    return await changeshippingModal.present();
  }

  back(){
    this.navCtrl.navigateBack(['/tabs/mycart']);
  }

  async onChangeShippingAddress(addressId){
    this.auth.getToken().then(token=>{
      const body ={
        addressId : addressId
      }
      this.service.getShippingMethod(body, token).subscribe(val=>{
        
        this.shippingMethod = val;
        this.selectedshippingMethod = null;
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
      },err=>{
        if(err.status == 401){
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          this.router.navigate(['/signin']);
        }
        console.log('Shipping Method Err:', err);
      });
    });
  }

  async addNewAddress(){
    const addnewaddress = await this.modalCtrl.create({
      component: AddnewaddressPage,
      componentProps: {
        customerInfo : this.CustomerInformation
      },
      showBackdrop: true,
      mode:	"ios"
    });

    addnewaddress.onWillDismiss().then((data)=>{
      if(data.role != 'backdrop'){
        this.getCartShippingDetails();
      }
    });
    
    return await addnewaddress.present();
  }

}
