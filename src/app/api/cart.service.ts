import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cartItem.models';
import { Observable } from 'rxjs';
import { MagentoServiceService } from './magento-service.service';
import { RestService } from './rest.service';
import { ModalController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Array<CartItem>;
  public cartId: number;
  constructor(private service: MagentoServiceService,
              private modal:ModalController,
              private rest:RestService) {
                this.getCartId(); 

  }

  async numberOfCartItems(){
    this.checkCartItems();
    let itemsNumber:number = 0;
    for(let i=0; i<this.cartItems.length; i++){
      itemsNumber += this.cartItems[i].qty;
    }
    return await itemsNumber;
  }

  getCartItems(){
    let cartItem = JSON.parse(window.localStorage.getItem('cartItems'));
    
		return cartItem;
  }
  

  decrementCartItem(pro): boolean{
    this.checkCartItems();
    let decrement:boolean = false;
    let pos:number = -1;
    for(let i = 0; i < this.cartItems.length;i++){
      if(pro.sku == this.cartItems[i].sku){
        pos = i;
        break;
      }
    }
    if(pos != -1){
      if(this.cartItems[pos].qty > 1){
        this.cartItems[pos].qty = this.cartItems[pos].qty - 1;
        decrement = true;
      }
      window.localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
    return decrement;
  }

  async incrementCartItem(pro){
    this.checkCartItems();
    console.log('Product Items:',pro);
		let increment: boolean = false;
		let pos: number = -1;
		for (let i = 0; i < this.cartItems.length; i++) {
			if (pro.sku == this.cartItems[i].sku) {
				pos = i;
				break;
			}
		}
		if (pos != -1) {
        this.cartItems[pos].qty = this.cartItems[pos].qty + 1;
        window.localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
	}
  

  async addCartItem(pro){
    
    
    const body ={
        "cartItem": {
          "sku": pro.sku, 
          "qty": pro.qty,
          "name":pro.name,
          "product_type":pro.product_type,
          "quote_id": this.cartId
        }
      }
    return await this.service.setProductInCart(this.cartId,body)
    .subscribe(data =>{
      this.checkCartItems();
      let added: boolean = false;
      let pos: number = -1;
      for(let i=0; i<this.cartItems.length; i++){
        if(pro.sku == this.cartItems[i].sku){
          pos = i;
          break;
        }
      }
      if(pos != -1){
        this.cartItems[pos].qty = data.qty;
      }else{
        let cartItem = new CartItem();
        cartItem.item_id = data.item_id;
        cartItem.sku = data.sku;
        cartItem.id = pro.id;
        cartItem.qty = data.qty;
        cartItem.name = data.name;
        cartItem.product_type = data.product_type;
        cartItem.product = pro.product;
        cartItem.quote_id = data.quote_id;
        this.cartItems.push(cartItem);
        added = true;
      }
      this.service.updateCartRewardPoints(this.cartId).subscribe(val=>{
        window.localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.modal.dismiss();
        this.rest.dismissLoading();
        this.rest.presentToastWithOptions(added ? 'Added in cart' : 'Updated in cart','','top');
      },err=>{
        this.modal.dismiss();
        this.rest.dismissLoading();
        this.rest.presentToastWithOptions('Something Wrong try again.','','top');
        console.log('reward Point Err:',err);
      });
      
    },err =>{
      this.rest.dismissLoading();
      this.rest.presentToastWithOptions(err.error.message);
    });
  }

  removeCartItem(pro): boolean {
		this.checkCartItems();
		let removed: boolean = false;
		let pos: number = -1;
		for (let i = 0; i < this.cartItems.length; i++) {
			if (pro.sku == this.cartItems[i].sku) {
				pos = i;
				break;
			}
		}
		if (pos != -1) {
			this.cartItems.splice(pos, 1);
			window.localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
			removed = true;
		}
		return removed;
  }
  
  async getCartId(){
    var cartId: number = Number(window.localStorage.getItem('cartId'));
    if(cartId){
      this.cartId = cartId;
      return await Observable.of(cartId);
    }else{
      return await this.service.getCartId().subscribe(val=>{
        this.cartId = val;
        window.localStorage.setItem('cartId',val);
        return val;
      },err=>{
        console.log('cartItemId Err:',err);
      });
    }
  }

  async checkCartItems() {
    console.log('items:',this.cartItems);
		if (this.cartItems == null) {
			let cartItems: Array<CartItem> = JSON.parse(window.localStorage.getItem('cartItems'));
			if (cartItems != null) {
				this.cartItems = cartItems;
			} else {
				this.cartItems = new Array<CartItem>();
			}
    }
    return await this.cartItems;
	}
}
