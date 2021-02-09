import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MagentoServiceService } from '../api/magento-service.service';
import * as _ from 'lodash';
import { AppConfig, APP_CONFIG } from '../app.config';
import { Constants } from '../interfaces/constants.models';
import { Currency } from '../interfaces/currency.models';
import { AuthenticationService } from '../services/authentication.service';
import { RestService } from '../api/rest.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AlertController, Platform, ModalController } from '@ionic/angular';
import { Market } from '@ionic-native/market/ngx';
import { SearchPage } from '../component/search/search.page';
import { NotificationService } from '../services/notification.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLoaded = false;
  newNotify = false;
  sliderOptions = {
    zoom: false,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
  };

  SliderArray: any = [];
  popularProducts: any = [];
  treandingProducts: any = [];
  currencySymbol = 'PKR';
  productBaseURL = this.config.productImageURL;
  wishlistItems = [];
  isWishList = false;
  currentVersion: any;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private router: Router,
    private statusBar: StatusBar,
    private auth:AuthenticationService,
    private alertCtrl: AlertController,
    private notify: NotificationService,
    private platform: Platform,
    private appVersion: AppVersion,
    private market: Market,
    private modal: ModalController,
    private rest:RestService,
    private service: MagentoServiceService) {

      

      this.appVersion.getVersionCode().then(val => {this.currentVersion = val;});
      console.log('currentVersion:',this.currentVersion);
      this.service.getAppVersion().subscribe(val =>{
        const appUdateData = val[0];
        if(this.platform.is('ios')){
          if(this.currentVersion < appUdateData.ios.ios_version ){
            this.presentUpdateAlert(appUdateData.ios.ios_package,appUdateData.ios.ios_message);
          }
        }else{
          if(this.currentVersion < appUdateData.android.android_version ){
            this.presentUpdateAlert(appUdateData.android.android_package,appUdateData.android.android_message);
          }
        }
      });
      
    this.wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
      this.service.getHomePagePopularProducts().subscribe(val => {
        
        const popularVal = val[0].product_popular;
        
        const popularlstData = popularVal.map(function (x){ x.isWishList = false; return x; });
        if (this.wishlistItems && this.wishlistItems.length > 0) {
          let finalArray = [];
            
            for (let i = 0; i < popularlstData.length; i++) {
              const element = popularlstData[i];
              const hasElement = this.wishlistItems.find(x => x.product.id == element.id);
              if (hasElement) {
                element.isWishList = true;
              };
              finalArray.push(element);
            };
            this.popularProducts = finalArray;
        }else{
          this.popularProducts= popularlstData;
        }
        console.log('popular product:', this.popularProducts);
        const tandingVal = val[0].product_treanding;
        console.log('tandingVal:',tandingVal);
        const trandinglstData = tandingVal.map(function (x){ x.isWishList = false; return x; });
        if (this.wishlistItems && this.wishlistItems.length > 0) {
          let finalArray = [];
            
            for (let i = 0; i < trandinglstData.length; i++) {
              const element = trandinglstData[i];
              const hasElement = this.wishlistItems.find(x => x.product.id == element.id);
              if (hasElement) {
                element.isWishList = true;
              };
              finalArray.push(element);
            };
            this.treandingProducts = finalArray;
        }else{
          this.treandingProducts= trandinglstData;
        }
        
        this.service.getMobileAppSlider().subscribe(val => {
          let imgArray = val.content;
          let imgReplace = imgArray.replace(/<\/?[^>]+(>|$)/g, "");
          this.SliderArray = imgReplace.split(',');
          this.isLoaded = true;
        }, err => {
          console.log('HomePage Banner Slider Error', err);
        })
      }, err => {
        console.log('HomePage Product Error :', err);
      });
  }

  ngOnInit() {
    this.notify.unReadCount.subscribe(val =>{
      console.log(val);
      if(val > 0){
        this.newNotify = true;
      }else if(val == 0){
        this.newNotify = false;
      }
    })
  }

  async presentUpdateAlert(packageName, message) {
  
    const alert = await this.alertCtrl.create({
      header: 'Update Available!',
      message: message,
      backdropDismiss: false,
      buttons: [{
          text: 'UPDATE',
          handler: () => {
            this.market.open(packageName);
          }
        }]
    });
    return await alert.present();
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  openNotification(){
    this.router.navigate(['/notifications']);
  }

  async openSearch(){
    const modal = await this.modal.create({
      component: SearchPage
    });
    return await modal.present();
  }

  gotoProductPage(PId: number, PName: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product_id: JSON.stringify(PId),
        product_name: JSON.stringify(PName)
      }
    };
    this.router.navigate(['/productdetail'], navigationExtras);
  }

  addtoFav(product:any){
    let LoggedIn = this.auth.isAuthenticated();
    if(LoggedIn){
      console.log('product:',product);
      this.auth.getToken().then(token =>{
        var body = {
          "sku": product.sku
        }
       
        this.service.addProductToWishlist(token,body).subscribe(val=>{
          product.isWishList = true;
          this.rest.presentToastOptionsWithOutClose('Added into wishlist.', 'top');
          this.rest.wishlist();
        },err=>{
          if(err.status == 401){
            const stateURL = this.router.routerState.snapshot.url;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
          }else{
            this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
          }
          console.log('wishlist Err', err);
        });
      },err =>{
        const stateURL = this.router.routerState.snapshot.url;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
      })
    }else{
      console.log('test');
      this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
    }
  }

  remvoeFav(product:any){

    let LoggedIn = this.auth.isAuthenticated();
    if(LoggedIn){
      console.log('product:',product);
      this.auth.getToken().then(token =>{
        const lstwishData = this.wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
        const itemWish = lstwishData.find(x=>{ x = x.product.id == product.id; return x;});
        this.service.removeProductFromWishlist(token,itemWish.item_id).subscribe(val=>{
          product.isWishList = false;
          this.rest.presentToastOptionsWithOutClose('This Product remove from wishlist.', 'top');
          this.rest.wishlist();
        },err=>{
          if(err.status == 401){
            const stateURL = this.router.routerState.snapshot.url;
            console.log('stateURL:', stateURL);
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
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
