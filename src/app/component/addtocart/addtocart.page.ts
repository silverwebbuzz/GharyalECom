import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CartService } from '../../api/cart.service';
import { RestService } from '../../api/rest.service';
import { MagentoServiceService } from '../../api/magento-service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.page.html',
  styleUrls: ['./addtocart.page.scss'],
})
export class AddtocartPage implements OnInit {
 
  qty: number = 1;
  minqty: number = 1;
  maxqty: number = 1;
  product: any;
  quoteId: number;
  constructor(private navParam: NavParams,
    private rest:RestService,
    private statusBar: StatusBar,
    private cart:CartService,
    private modal:ModalController,
    private service: MagentoServiceService) {
      this.product = this.navParam.get('products');
      this.qty = this.product.basic.min_qty_order;
      this.minqty = this.product.basic.min_qty_order;
      this.maxqty = this.product.basic.max_qty_order;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  removeqty(){
    if(this.qty > this.minqty){
      this.qty = this.qty - 1;
    }
  }

  addqty(){
    if(this.qty <= this.maxqty){
      this.qty = this.qty + 1;
    }
  }

  async addToCartProducts(){
    this.rest.presentLoading();
    await this.cart.getCartId();
    var productbody =
    {
      qty: this.qty,
      id: this.product.basic.id,
      sku: this.product.basic.sku,
      name: this.product.basic.name,
      product_type: this.product.basic.typeid,
      product: this.product
    }
    this.cart.addCartItem(productbody);
  }

}
