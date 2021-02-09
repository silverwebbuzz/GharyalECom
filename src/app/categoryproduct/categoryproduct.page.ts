import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ActionSheetController, IonInfiniteScroll, ModalController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MagentoServiceService } from '../api/magento-service.service';
import { AppConfig, APP_CONFIG } from '../app.config';
import { Constants } from '../interfaces/constants.models';
import { RestService } from '../api/rest.service';
import * as _ from 'lodash';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../api/cart.service';
import { CartPage } from '../cart/cart.page';
import { SearchPage } from '../component/search/search.page';
import { FilterComponent } from '../component/filter/filter.component';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.page.html',
  styleUrls: ['./categoryproduct.page.scss'],
})
export class CategoryproductPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  isLoaded = false;
  pageNum: number = 1;
  categoryData: any;
  isWishList = false;
  productsData: any;
  productBaseURL = this.config.productImageURL;
  cartItemsCount = 0;
  
  noProducts = false;
  currencySymbol: any;

  constructor(@Inject(APP_CONFIG) private config: AppConfig,private router: Router,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private rest: RestService,
    private auth: AuthenticationService,
    private statusBar: StatusBar,
    private modal: ModalController,
    private cart: CartService,
    private service: MagentoServiceService,
    private navCtrl: NavController) {
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
      if (params && params.category) {
        this.categoryData = JSON.parse(params.category);
        this.loadproducts();
      }
    });
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  async loadproducts(pageNumber: number = null){

    
    if(pageNumber){
      this.pageNum = pageNumber;
    }
    await this.service.getProductsByCategoryId(this.categoryData.id, this.pageNum).subscribe(data =>{
     
      let productArray = _.map(data, function(x){
        return _.assign(x,{
          isWishList: false
        })
      });
      const wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));

      if (wishlistItems && wishlistItems.length > 0) {
        let finalArray = [];
              
              for (let i = 0; i < productArray.length; i++) {
                const element = productArray[i];
                const hasElement = wishlistItems.find(x => x.product.id == element.id);
                if (hasElement) {
                  element.isWishList = true;
                };
                finalArray.push(element);
              };
              this.productsData = _.sortBy(finalArray, 'position');
      }else{
        this.productsData = _.sortBy(productArray, 'position');
      }
      this.isLoaded = true;
      if(this.productsData.length === this.categoryData.product_count){
        this.infiniteScroll.disabled = true;
      }
      if(this.productsData.length == 0){
        this.noProducts = true;
      }
    },err =>{
      this.noProducts = true;
      this.isLoaded = true;
      this.rest.presentToastWithOptions('Something Wrong! Please Try Again');
      console.log('Product Error:', err)
    });
  }

  RefreshProducts(event){
    this.isLoaded = false;
    this.infiniteScroll.disabled = null;
    let pageNumber = 1;
    this.loadproducts(pageNumber).then(()=>{
      event.target.complete();
    });
    
  }

  ngOnInit() {
    
  }

  back(){
    this.navCtrl.pop();
  }

  navigate() {
    this.router.navigate(['/productdetail']);
  }
  gotoProductPage(PId: number, PName: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product_id: JSON.stringify(PId),
        product_name: JSON.stringify(PName)
      }
    };
    this.router.navigate(['/productdetail'], navigationExtras);
  }

  async openSearch(){
    const modal = await this.modal.create({
      component: SearchPage
    });
    return await modal.present();
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  async loadData(event){
    this.pageNum = this.pageNum + 1;
    await this.service.getProductsByCategoryId(this.categoryData.id, this.pageNum).subscribe(val=>{
      let loadproducts = val;
      let productArray = _.map(val, function(x){
        return _.assign(x,{
          isWishList: false
        })
      });
      const wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));

      if (wishlistItems && wishlistItems.length > 0) {
        let finalArray = [];
              
              for (let i = 0; i < productArray.length; i++) {
                const element = productArray[i];
                const hasElement = wishlistItems.find(x => x.product.id == element.id);
                if (hasElement) {
                  element.isWishList = true;
                };
                finalArray.push(element);
              };
              this.productsData = _.sortBy(finalArray, 'position');
      }else{
        this.productsData = _.sortBy(productArray, 'position');
      }
      if(loadproducts){
          this.productsData = _.union(this.productsData,loadproducts);
      }
      event.target.complete();
      if(this.productsData.length === this.categoryData.product_count){
        this.infiniteScroll.disabled = true;
      }

    },err=>{
      console.log('err load :',err);
    });
  }

  async gotoMycart(){
    //this.router.navigate(['/tabs/mycart']);
    const modal = await this.modal.create({
      component: CartPage
    });
    return await modal.present();
  }

  async filter(){
    const modal = await this.modal.create({
      component: FilterComponent
    });
    return await modal.present();
  }

  async sort() {
    const actionSheet = await this.actionSheetController.create({
      header: 'SORT BY',
      buttons: [
        {
          text: 'Popularity',
          handler: () => {
            let productArray = _.sortBy(this.productsData, 'rating');
            this.productsData = productArray.reverse();
          }
        }, {
          text: 'Price -- Low to High',
          handler: () => {
            this.productsData = _.sortBy(this.productsData, 'price');
          }
        }, {
          text: 'Price -- High to Low',
          handler: () => {
            let productarray =  _.sortBy(this.productsData, 'price');
            this.productsData = productarray.reverse();
          }
        }, {
          text: 'Newest First',
          handler: () => {
            let productarray =  _.sortBy(this.productsData, 'id');
            this.productsData = productarray.reverse();
          }
        }]
    });
    await actionSheet.present();
  }

  addtoFav(product:any){

    let LoggedIn = this.auth.isAuthenticated();
    if(LoggedIn){
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
        });
      },err =>{
        const stateURL = this.router.routerState.snapshot.url;
        this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
      })
    }else{
      this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
    }

  }

  removeFav(product:any){
    let LoggedIn = this.auth.isAuthenticated();
    if(LoggedIn){
      this.auth.getToken().then(token =>{
        const lstwishData = JSON.parse(window.localStorage.getItem('wishListItems'));
        const itemWish = lstwishData.find(x=>{ x = x.product.id == product.id; return x;});
        this.service.removeProductFromWishlist(token,itemWish.item_id).subscribe(val=>{
          product.isWishList = false;
          this.rest.presentToastOptionsWithOutClose('This Product remove from wishlist.', 'top');
          this.rest.wishlist();
        },err=>{
          if(err.status == 401){
            const stateURL = this.router.routerState.snapshot.url;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
          }else{
            this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
          }
        });
      },err =>{
        const stateURL = this.router.routerState.snapshot.url;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
      })
    }else{
      this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
    }

  }
}
