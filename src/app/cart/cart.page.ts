import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationExtras, NavigationStart, NavigationEnd } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Constants } from '../interfaces/constants.models';
import { CartService } from '../api/cart.service';
import { RestService } from '../api/rest.service';
import { AppConfig, APP_CONFIG } from '../app.config';
import { AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MagentoServiceService } from '../api/magento-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  isEmpty = false;
  isLoaded = false;
  countItems = 0;
  cartItems = [];
  prodcutImgURL: any;
  total: number = 0;
  subtotal: number = 0;
  discount: number = 0;
  currencySymbol: any;
  CouponCode: any = null;
  coupon_form: FormGroup;
  Coupon_successMessage: any = 'Successfully applied this Coupon Code.';
  Coupon_successMessagebool: boolean = false;
  Coupon_errorMessage: any;
  Coupon_errorMessagebool: boolean = false;
  CartDetils: any;
  isModal = false;
  constructor(@Inject(APP_CONFIG) private config: AppConfig,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private rest: RestService,
    private cart: CartService,
    private modalCtrl: ModalController,
    private auth: AuthenticationService,
    private actionCtrl: ActionSheetController,
    private service: MagentoServiceService,
    private statusBar: StatusBar) {
      const modalelement = this.modalCtrl.getTop().then(val =>{
        if(val){
          this.isModal = true;
        }
      });

      this.router.events.subscribe((event) => {
        console.log('event cart:',event);
        if (event instanceof NavigationEnd && event.url === '/tabs/mycart') {
            this.getCartDetails();
        }
    });
      this.auth.set_login_back_url('/tabs/mycart');

      this.prodcutImgURL = this.config.productImageURL;
      let currency = JSON.parse(window.localStorage.getItem(Constants.CURRENCY));
      if(currency.base_currency_symbol){
        this.currencySymbol = currency.base_currency_symbol;
      }else{
        this.currencySymbol = currency.default_display_currency_code;
      }
      this.coupon_form_validation();
     }

  ngOnInit() {
    
  }

  ionViewWillEnter(): void{
    this.isLoaded = false;
    this.getCartDetails();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#5d5e5e');
  }
  getCartDetails(){
    const cartId = this.cart.cartId;
    if(cartId){
      this.service.getCartItems(cartId).subscribe(val =>{
        console.log('item Val:',val);
        window.localStorage.setItem('cartItems', JSON.stringify(val));
        this.cartItems = val;
        if(val){
          this.service.getCartDetails(cartId).subscribe(val =>{
            this.CartDetils = val;
            console.log('cart Val:', val);
            if(val.items.length > 0){
              this.isLoaded = true;

              if(this.rest.isLoading){
                this.rest.dismissLoading();
              }
            }else{
              this.isEmpty = true;
              if(this.rest.isLoading){
                this.rest.dismissLoading();
              }
            }
          },err=>{
            this.isEmpty = true;
            if(err.status == 404){
              window.localStorage.setItem('cartId',null);
              window.localStorage.setItem('cartItems',JSON.stringify([]));
              this.rest.presentToastWithOptions('We have no any Cart Found!');
            }else{
              this.rest.presentToastWithOptions('Something Wrong! Please re-open app.');
            }
            
          });
        }else{
          this.isEmpty = true;
        }
      });
    }else{
      this.isEmpty = true;
    }
  }
  coupon_form_validation(){
    this.coupon_form = this.formBuilder.group({
      coupon: [null, Validators.required]
    });
  }

  updateCart(){
    const cartId = this.cart.cartId;
    this.rest.presentLoading();
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    const forkBody = [];
    for(let i=0;i < cartItems.length; i++){
      var varBody = {
        "cartItem":{
          "item_id": cartItems[i].item_id,
          "sku": cartItems[i].sku,
          "qty": cartItems[i].qty,
          "quote_id": cartId
        }
        
      }
      var varFork ={
        url: 'V1/carts/'+ cartId +'/items/' + cartItems[i].item_id,
        body: varBody
      }
      forkBody.push(varFork);
    }
    console.log('varFork',forkBody);

    this.service.updateCart(forkBody).subscribe(val=>{
      this.getCartDetails();
    },err=>{
      console.log('udateCart Err:',err);
      if(this.rest.isLoading){
        this.rest.dismissLoading();
      }
      this.rest.presentToastWithOptions('We can\'t update cart. Try again.');
    })
  }

  ionViewDidEnter(){
  }

  async removeCouponCode(){
    this.rest.presentLoading();
    const cartId = this.cart.cartId;
    this.service.deleteCouponCode(cartId).subscribe(val=>{
      this.getCartDetails();
    },err=>{
      this.rest.presentToastWithOptions('Something Wrong Try Again.');
      if(this.rest.isLoading){
        this.rest.dismissLoading();
      }
      console.log('remove coupon err:',err);
    })
  }

  async applyCouponCode(){
    for (let v in this.coupon_form.controls) {
      this.coupon_form.controls[v].markAsTouched();
    }
    if (this.coupon_form.valid) {
      this.rest.presentLoading();
      const cartId = this.cart.cartId;
      const CouponCode = this.coupon_form.value.coupon;
      this.service.applyCouponCode(cartId, CouponCode).subscribe(val=>{
        this.Coupon_errorMessagebool = false;
        this.Coupon_successMessagebool = true;
        this.Coupon_successMessage = 'Successfully applied this Coupon Code.';
        this.getCartDetails();
      },err=>{
        if(err.status == 401){
          this.rest.presentToastWithOptions(err.error.message);
        }else{
          this.Coupon_errorMessagebool = true;
          this.Coupon_errorMessage = 'Coupon code is not valid.';
        }
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
        console.log('remove coupon err:',err);
      })
    }

  }

  async getCartItems(){
    const cartItems = await this.cart.getCartItems();
    
    if (cartItems != null) {
      this.cartItems = cartItems;
      this.countItems = cartItems.length;
    }
    this.calculateTotal();
    if(this.countItems == 0){
      this.isEmpty = true;
    }
  }

  decrementItem(product){
    this.cart.decrementCartItem(product);
    this.getCartItems();
  }

  goToHomePage(){
    if(this.isModal){
      this.modalCtrl.dismiss();
    }
    this.router.navigate(['/tabs/home']);
  }

  incrementItem(product) {
    this.cart.incrementCartItem(product);
		this.getCartItems();
    //this.rest.presentToastWithOptions(incremented? 'Item updated': 'Item max limit reached');
  }
  
  async emptyCart(){ 
    const alert = await this.alertCtrl.create({
      header: 'Empty Shopping Cart',
      message: 'All the products from your cart will be removed',
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'YES, EMPTY IT',
          handler: () => {
            this.emptyCartItems();
          }
        }
      ]
    });

    await alert.present();

  }
  calculateTotal() {
		let sum: number = 0;
		for (let item of this.cartItems) {
      sum = sum + Number(item.price) * item.qty;
		}
    this.subtotal = sum;
    this.total = this.subtotal - this.discount;
	}

  emptyCartItems(){
    const cartId = this.cart.cartId;
    this.rest.presentLoading();
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    const forkBody = [];
    for(let i=0;i < cartItems.length; i++){
      var varFork ={
        url: 'V1/carts/'+ cartId +'/items/' + cartItems[i].item_id
      }
      forkBody.push(varFork);
    }
    console.log('varFork',forkBody);

    this.service.emptyCart(forkBody).subscribe(val=>{
      this.getCartDetails();
      if(this.rest.isLoading){
        this.rest.dismissLoading();
      }
      let cartItems = null;
      this.isEmpty = true;
      window.localStorage.setItem('cartItems', cartItems);
    },err=>{
      console.log('EmptyCart Err:',err);
      if(this.rest.isLoading){
        this.rest.dismissLoading();
      }
      this.rest.presentToastWithOptions('We can\'t empty cart. Try again.');
    })
    
  }


  getProductSubTotal(product, qty){
    let sum: number = 0;
    
      sum = sum + Number(product.price) * qty;

    return sum;
  }
  gotoProductPage(PId: number, PName: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product_id: JSON.stringify(PId),
        product_name: JSON.stringify(PName)
      }
    };
    if(this.isModal){
      this.modalCtrl.dismiss();
    }
    this.router.navigate(['/productdetail'], navigationExtras);
  }

  async removeItem(product){
    const alertRemove = await this.alertCtrl.create({
      header: 'Remove Item',
      message: 'This item will bw removed form your cart.',
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'YES, REMOVE IT',
          handler: () => {
            this.removeCartItem(product);
          }
        }
      ]
    });

    await alertRemove.present();
    
  }
  async removeCartItem(product){
    this.rest.presentLoading();
    const cartId = this.cart.cartId;
    this.service.deleteProductInCart(cartId, product.item_id).subscribe(val=>{
      this.cart.removeCartItem(product);
      this.getCartDetails();
    },err=>{
      console.log('cart Product Delete Err:',err);
      if(this.rest.isLoading){
        this.rest.dismissLoading();
      }
      this.rest.presentToastWithOptions('Item Can\'t delete from cart.');
    });
  }

  async goToBilling(){
    if(this.auth.isAuthenticated()){
      this.rest.presentLoading();
      const cartId = this.cart.cartId;
      const Customer = JSON.parse(window.localStorage.getItem(Constants.USER_KEY));
      var body = {
        "quote": {
          "id": cartId,
          "customer": {
            "id": Customer.id
          }
        }
      }
      console.log('Merge Bdoy:', body);
      this.auth.getToken().then(token=>{
        console.log('token:', token);
        this.service.mergeGuestToCustomerCart(body,token).subscribe(val=>{
          if(this.isModal){
            this.modalCtrl.dismiss();
          }
          this.router.navigate(['/billing']);
        },err =>{
          console.log('merge Cart err:',err);
          if(err.status == 401){
            if(this.rest.isLoading){
              this.rest.dismissLoading();
            }
            if(this.isModal){
              this.modalCtrl.dismiss();
            }
            const stateURL = this.router.routerState.snapshot.url;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
          }else{
            if(this.rest.isLoading){
              this.rest.dismissLoading();
            }
            this.rest.presentToastWithOptions('Customer not assign Cart. Please Restart app and try again.');
          }
          
        })
      });
      
    }else{
      const actionSheet = await this.actionCtrl.create({
        header: 'SELECT CHECKOUT METHOD',
        cssClass: 'footer-btn',
        buttons: [
          {
            text: 'LOGIN',
            cssClass : 'btn-login',
            handler: () => {
              if(this.isModal){
                this.modalCtrl.dismiss();
              }
              const stateURL = '/tabs/mycart';
              this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
            }
          }, {
            text: 'REGISTER AND CHECKOUT',
            cssClass : 'btn-reg',
            handler: () => {
              if(this.isModal){
                this.modalCtrl.dismiss();
              }
              this.router.navigate(['signup']);
            }
          }]
      });

      actionSheet.present();
    }
    
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
