import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { MagentoServiceService } from './api/magento-service.service';
import { Currency } from './interfaces/currency.models';
import { Constants } from './interfaces/constants.models';
import { Categories } from './interfaces/categories.models';
import { CartService } from './api/cart.service';
import { constant } from 'lodash';
import { Network } from '@ionic-native/network/ngx';
import { NotificationService } from './services/notification.service';

const ADMIN_TOKEN = 'pk2bl6nx0cvqnvotimbzpjfb88p5kosf';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  isLoggedIn = false;
  public appPages = [
    
    {
      title: 'HOME',
      url: '/tabs/home',
      icon: ''
    },
    {
      title: 'STORE LOCATOR',
      url: '/storelocator',
      icon: ''
    },
    {
      title: 'WISHLIST',
      url: '/wishlist',
      icon: ''
    },
    {
      title: 'ORDERS',
      url: '/orderlist',
      icon: ''
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: ''
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private notification: NotificationService,
    private cart:CartService,
    private service: MagentoServiceService,
    private network: Network,
    public alertController: AlertController,
  ) {
    this.network.onDisconnect().subscribe(() => {
      this.presentAlertOffline();
    });
    this.authenticationService.authenticationState.subscribe(val=>{
      if(val){
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
      }
    });
   
    this.authenticationService.checkToken();
    this.loadCategories();
    this.initializeApp();
  }

  ngOnInit() {
    
    

    // this.network.onConnect().subscribe(() => {
    //   this.presentAlertOnline();
    // });

  }

  async presentAlertOnline() {
    const alert = await this.alertController.create({
      header: 'Great!',
      message: ' Back to online',
      backdropDismiss: false,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertOffline() {
    const alert = await this.alertController.create({
      header: 'Connection lost!',
      message: '  You are not connected to internet',
      backdropDismiss: false,
      buttons: [{
        text: 'Retry',
        handler: () => {
          this.splashScreen.show();
          location.reload();
        }
      }]
    });

    await alert.present();
  }

  initializeApp() {
    var currencyStatic = {
      "base_currency_code":"PKR",
      "base_currency_symbol":null,
      "default_display_currency_code":"PKR",
      "default_display_currency_symbol":null,
      "available_currency_codes":["GBP","EUR","PKR","USD","AED"],
      "exchange_rates":[
        {"currency_to":"GBP","rate":0.0053},
        {"currency_to":"EUR","rate":0.0059},
        {"currency_to":"PKR","rate":1},
        {"currency_to":"USD","rate":0.006641},
        {"currency_to":"AED","rate":0.024}
      ]
    }
    window.localStorage.setItem(Constants.CURRENCY,JSON.stringify(currencyStatic));
    
      this.platform.ready().then(() => {
        this.splashScreen.hide();
        if(this.network.type == 'none' || !this.network.type){
          //this.presentAlertOffline();
         }
      });
  }


  async loadCategories(){
    await this.service.getMobileCateogy().subscribe(data =>{
     
      window.localStorage.setItem(Constants.PRODUCT_CATEGORIES, JSON.stringify(data));
    },err =>{
      console.log('Parent Category error');
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Logout',
          handler: () => {
            window.localStorage.removeItem(Constants.USER_KEY);
            this.authenticationService.logout();
          }
        }
      ]
    });

    await alert.present();
  }
}
