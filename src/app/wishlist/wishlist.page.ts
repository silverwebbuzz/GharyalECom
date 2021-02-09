import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from '../api/rest.service';
import { AuthenticationService } from '../services/authentication.service';
import { MagentoServiceService } from '../api/magento-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  isLoaded = false;
  wishlist_items:any = [];
  productImgURL = this.config.productImageURL;
  currencySymbol: any = 'PKR';
  isEmpty = false;
  constructor(@Inject(APP_CONFIG) private config: AppConfig,private navCtrl: NavController,
    private rest: RestService,
    private auth: AuthenticationService,
    private service: MagentoServiceService,
    private router: Router,
    private statusBar: StatusBar) {
      this.getWishlist();
     }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  getWishlist(){
    this.auth.getToken().then(token=>{
      this.service.getWishlistProducts(token).subscribe(val=>{
        
        this.wishlist_items = val[0].wishlist_items;
        window.localStorage.setItem('wishListItems', JSON.stringify(this.wishlist_items));
        if(this.wishlist_items.length == 0){
          this.isEmpty = true;
        }
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
        if(!this.isLoaded){
          this.isLoaded = true;
        }
      },err=>{
        if(err.status == 401){
          const stateURL = this.router.routerState.snapshot.url;
          this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
        }
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
      });
    },err=>{
      const stateURL = this.router.routerState.snapshot.url;
          this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
    })
  }

  revmovefromWishlist(item){
    this.rest.presentLoading();
    this.auth.getToken().then(token=>{
      this.service.removeProductFromWishlist(token, item.item_id).subscribe(val =>{
        this.getWishlist();
      },err=>{
        console.log('wishlist remove Err:',err);
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
      });
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  gotoProduct(item:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product_id: JSON.stringify(item.product.id),
        product_name: JSON.stringify(item.product.name)
      }
    };
    this.router.navigate(['/productdetail'], navigationExtras);
  }

  back(){
    this.navCtrl.navigateBack(['/tabs/account']);
  }

  goToHomePage(){
    this.router.navigate(['/tabs/home']);
  }

}
