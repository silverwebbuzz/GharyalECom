import { Component, OnInit, Inject } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { Categories } from '../interfaces/categories.models';
import { Constants } from '../interfaces/constants.models';
import * as _ from 'lodash';
import { AppConfig, APP_CONFIG } from '../app.config';
import { MagentoServiceService } from '../api/magento-service.service';
import { CartService } from '../api/cart.service';
import { ModalController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';
import { SearchPage } from '../component/search/search.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  CategoryBaseImageURL = this.config.categoryImageURL;
  isLoaded = false;
  ByCatArray: any = [];
  catListing = new Array<Array<Categories>>();
  cartItemsCount = 0;

  constructor(private statusBar: StatusBar,
    private router: Router,
    private modal: ModalController,
    private cart: CartService,
    @Inject(APP_CONFIG) private config: AppConfig, private service:MagentoServiceService) { 
    this.loadCategory();
    this.cart.numberOfCartItems().then(v =>{
      this.cartItemsCount = v;
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }
  loadCategory(){
    
    let Category = JSON.parse(window.localStorage.getItem(Constants.PRODUCT_CATEGORIES));
    let SubCategory = Category.children_data;
    this.catListing = _.sortBy(SubCategory, 'position');
    this.isLoaded = true;
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

  productLising(cat : Categories){
    if(cat.id){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          category: JSON.stringify(cat)
        }
      };
      this.router.navigate(['/categoryproduct'], navigationExtras);
    }
  }

  async gotoMycart(){
    //this.router.navigate(['/tabs/mycart']);
    const modal = await this.modal.create({
      component: CartPage
    });
    return await modal.present();
  }


  async RefreshCategories(event){
    this.isLoaded = false;
    this.service.getMobileCateogy().subscribe(v =>{
      let SubCategory: Categories = v.children_data;
    this.catListing = _.sortBy(SubCategory, 'position');
      window.localStorage.setItem(Constants.PRODUCT_CATEGORIES, JSON.stringify(v));
      this.isLoaded = true;
      event.target.complete();
    },err =>{
      console.log('Parent Category error');
      event.target.complete();
    });
  }

}
