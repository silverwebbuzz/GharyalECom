import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { IonSlides, Platform, ModalController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MagentoServiceService } from '../api/magento-service.service';
import { RestService } from '../api/rest.service';
import { Constants } from '../interfaces/constants.models';
import { AppConfig, APP_CONFIG } from '../app.config';
import { ProductReviewPage } from '../product-review/product-review.page';
import { AddtocartPage } from '../component/addtocart/addtocart.page';
import { isoStringToDate } from '@angular/common/src/i18n/format_date';
import { CartService } from '../api/cart.service';
import { AuthenticationService } from '../services/authentication.service';
import { Location } from '@angular/common';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage {

  message = 'Check out the Gharyal!';
  url = 'http://gharyal.com/';
  current_slider_index : number = 0;
  total_slider_number : number = 6;
  productId: any;
  productName: any;
  isWishList = false;
  isLoaded = false;
  productData: any;
  currencySymbol: any;
  productImgBaseURL = this.config.productImageURL;
  cartItemsCount = 0;
  productReward = 0;

  @ViewChild('Slides_banner') slider: IonSlides;
  @ViewChild('Slides_banner_thumb') slider_thumb: IonSlides;


  SliderArray: any = [];
  

  SlideOption = {
    loop: true,
    centeredSlides: false,
    slidesPerView: 1,
    speed: 100,
    zoom: true,
    effect: 'fade',
    spaceBetween: 0
  };

  constructor(@Inject(APP_CONFIG) private config: AppConfig,private router: Router,
    private platform: Platform,
    private route: ActivatedRoute,
    private cart: CartService,
    private rest: RestService,
    private auth: AuthenticationService,
    private service: MagentoServiceService,
    private modal: ModalController,
    private socialSharing: SocialSharing,
    private location: Location,
    private statusBar: StatusBar) {
      this.cart.numberOfCartItems().then(v =>{
        this.cartItemsCount = v;
      });
      let currency = JSON.parse(window.localStorage.getItem(Constants.CURRENCY));
      if(currency.base_currency_symbol){
        this.currencySymbol = currency.base_currency_symbol;
      }else{
        this.currencySymbol = currency.default_display_currency_code;
      }
      this.route.queryParams.subscribe(params => {
        if (params && params.product_id) {
          this.productId = JSON.parse(params.product_id);
          this.productName = JSON.parse(params.product_name);
          console.log('cate:', this.productId);
          this.loadDetails();
        }
      });
  }

  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }
  async loadDetails(){
    await this.service.getProductsDetailsByProductId(this.productId)
      .subscribe(data => {
        const productDetails = data.map(x => { x.isWishList = false; return x; });
        const wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
        if (wishlistItems && wishlistItems.length > 0) {
                const element = productDetails[0];
                const hasElement = wishlistItems.find(x => x.product.id == element.basic.id);
                if (hasElement) {
                  element.isWishList = true;
                };
              this.productData = productDetails[0];
        }else{
          this.productData = productDetails[0];
        }
        const body = {
          "sku": this.productData.basic.sku,
          "price": this.productData.basic.price,
          "customerId": 0,
          "websiteId": 1,
          "tierId": 0
        }
        this.service.getProductReward(body).subscribe(val=>{
          if(val){
            this.productReward = val;
          }
          console.log('reward Points:', val);
          this.isLoaded = true;
        },err=>{
          this.isLoaded = true;

        console.log('Err Reward Points :',err);
        })

        console.log('Product Details:',this.productData);
      },err =>{
        this.rest.presentToastWithOptions('Something Wrong! Go Back try Again.');
        console.log('Product Err:', err);
      })
  }

  async getProductRating(){
    const modal = await this.modal.create({
      component: ProductReviewPage,
      componentProps: {productId : this.productId, 
        productSKU: this.productData.basic.sku, 
        productAvgRating: this.productData.basic.rating,
        products: this.productData}
    });
    return await modal.present();
  }

  clickThumbFunction(i) {
   this.slider.slideTo(i);
   this.slider_thumb.slideTo(i);
  }
  SlideDidChange(){
    this.slider.getActiveIndex().then(
      (index)=>{
        this.slider_thumb.slideTo(index);
        this.current_slider_index = (index + 1);
     });
    //this.slider_thumb.slideTo(i + 1);
  }
  SlideThumbDidChange(){
    this.slider_thumb.getActiveIndex().then(
      (index)=>{
        this.slider.slideTo(index);
        this.current_slider_index = (index + 1);
     });
  }

  goToBilling(){
    this.router.navigate(['/billing']);
  } 

  async sharePicker()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.share(this.message, null, null, this.url)
         .then((data) =>
         {
            console.log('Shared via SharePicker');
         })
         .catch((err) =>
         {
            console.log('Was not shared via SharePicker');
         });

      });
   }

   next() {
    this.slider_thumb.slideNext();
  }

  prev() {
    this.slider_thumb.slidePrev();
  }

  async addtoCart() {
    
    const addtocartModal = await this.modal.create({
      component: AddtocartPage,
      componentProps: {
        products: this.productData
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'add-to-cart-modal'
    });

    addtocartModal.onWillDismiss().then((data)=>{
      this.cart.numberOfCartItems().then(v =>{
        this.cartItemsCount = v;
      });
    });
    
    return await addtocartModal.present();
  }

  async gotoMycart(){
    //this.router.navigate(['/tabs/mycart']);
    const modal = await this.modal.create({
      component: CartPage
    });
    return await modal.present();
  }

  goBack(){
    this.location.back();
  }

  addtoFav(){
    let LoggedIn = this.auth.isAuthenticated();
    console.log('LoggedIn:', LoggedIn);
    if(LoggedIn){
      this.auth.getToken().then(token =>{
        var body = {
          "sku": this.productData.basic.sku
        }
        this.service.addProductToWishlist(token,body).subscribe(val=>{
          this.productData.isWishList = true;
          this.rest.presentToastOptionsWithOutClose('Added into wishlist.', 'top');
        },err=>{
          if(err.status == 401){
            this.router.navigate(['singin']);
          }
          this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
          console.log('wishlist Err', err);
        });
      },err =>{
        this.router.navigate(['singin']);
      })
    }else{
      console.log('test');
      this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
    }
  }

  removeFav(){
    let LoggedIn = this.auth.isAuthenticated();
    if(LoggedIn){
      this.auth.getToken().then(token =>{
        const lstwishData = JSON.parse(window.localStorage.getItem('wishListItems'));
        const itemWish = lstwishData.find(x=>{ x = x.product.id == this.productData.basic.id; return x;});
        this.service.removeProductFromWishlist(token,itemWish.item_id).subscribe(val=>{
          this.productData.isWishList = false;
          this.rest.presentToastOptionsWithOutClose('This Product remove from wishlist.', 'top');
          this.rest.wishlist();
        },err=>{
          if(err.status == 401){
            const stateURL = this.router.routerState.snapshot.url;
            console.log('stateURL:', stateURL);
            this.router.navigate(['/signin']);
          }else{
            this.rest.presentToastOptionsWithOutClose('We can\'t remove this product into wishlist.', 'top');
          }
          console.log('wishlist Err', err);
        });
      },err =>{
        this.router.navigate(['singin']);
      })
    }else{
      console.log('test');
      this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
    }
  }

}
