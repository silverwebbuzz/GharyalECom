import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { UserResponse } from '../interfaces/user-response.models';
import { Currency } from '../interfaces/currency.models';
import { concatMap } from 'rxjs/operators';
import { Categories } from '../interfaces/categories.models';
import { CategoryProducts } from '../interfaces/categoryProducts.models';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MagentoServiceService {
	customer_token:any;
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http:HttpClient,
  private auth:AuthenticationService) { 
    
  }

  public getAppVersion():Observable<any>{
	const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
	return this.http
	.get(this.config.apiBase + 'V1/getAppversion/',{headers:myHeaders})
	.concatMap(data=>{
		return Observable.of(data);
	})
}

  public getMobileAppSlider():Observable<any>{
	const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
	return this.http
		.get<any>(this.config.apiBase + 'V1/cmsBlock/33', {headers: myHeaders})
		.concatMap(data =>{
			return Observable.of(data);
		})
  }

  public getHomePagePopularProducts():Observable<any>{
	const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
	return this.http
		.get<any>(this.config.apiBase + 'V1/mma/popularproduct', {headers: myHeaders})
		.concatMap(data =>{
			return Observable.of(data);
		})
  }


  	public getUser(adminToken: string): Observable<UserResponse> {
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + adminToken });
		return this.http
			.get<UserResponse>(this.config.apiBase + 'V1/customers/me', { headers: myHeaders })
			.concatMap(data => {
				return Observable.of(data);
			});
	}

	public getUserDetailbyId(customerId:any): Observable<UserResponse> {
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get<UserResponse>(this.config.apiBase + 'V1/customers/' + customerId, { headers: myHeaders })
			.concatMap(data => {
				return Observable.of(data);
			});
	}

	public getMobileCateogy():Observable<Categories> {
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get<Categories>(this.config.apiBase + 'V1/mma/categories', {headers : myHeaders})
			.concatMap(data =>{
				return Observable.of(data);
			})
	}

	public getProductsByCategoryId(catId: number, pageNum: number):Observable<CategoryProducts> {
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get<CategoryProducts>(this.config.apiBase + 'all/V1/mma/productcollection/category/' + catId + '?pagesize=' + this.config.perPage + '&pagenum=' + pageNum, {headers : myHeaders})
			.concatMap(data =>{
				return Observable.of(data);
			})
	}

	public getProductsDetailsByProductId(PID: number):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get<any>(this.config.apiBase + 'all/V1/mma/productdetails/getproductbyid/' + PID, {headers: myHeaders})
			.concatMap(data =>{
				return Observable.of(data);
			})
	}

	public getCurrency(): Observable<Currency> {
		const myHeaders = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http
			.get<Currency>(this.config.apiBase + 'V1/directory/currency', {headers:myHeaders})
			.concatMap(data => {
				return Observable.of(data);
			})
	}

	public createUser(Body: any): Observable<UserResponse>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
		return this.http
			.post<UserResponse>(this.config.apiBase + 'V1/customers', Body, {headers:myHeaders})
			.concatMap(data => {
				return Observable.of(data);
			})
	}

	public forgotPassword(Body: any): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
		return this.http
			.put(this.config.apiBase + 'V1/customers/password', Body, {headers:myHeaders})
			.concatMap(data =>{
				return Observable.of(data);
			})
	}

	public getProductReviews(ProductSKU: any): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get(this.config.apiBase + 'V1/products/' + ProductSKU + '/reviews', {headers:myHeaders})
			.concatMap(data =>{
				return Observable.of(data);	
			});
	}

	public getRatingOptions(): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get(this.config.apiBase + 'V1/mma/getRatingOption', {headers:myHeaders})
			.concatMap(data =>{
				return Observable.of(data);	
			});
	}

	public postRatings(Body: any): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.post(this.config.apiBase + 'V1/reviews/', Body, {headers:myHeaders})
			.concatMap(data =>{
				return Observable.of(data);
			})
	}
	
	public getCartId(): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.post(this.config.apiBase + 'V1/carts/','',{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public getCartDetails(cartId: any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get(this.config.apiBase + 'V1/carts/'+ cartId +'/totals',{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public setProductInCart(cartId: any, body: any): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.post(this.config.apiBase + 'V1/carts/'+ cartId +'/items',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public getCartItems(cartId:any):  Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get(this.config.apiBase + 'V1/carts/'+ cartId +'/items',{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public updateCart(Body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		let observableBatch = [];
		for (let i = 0; i < Body.length; i++) {
			const element = Body[i];
			observableBatch.push(this.http
				.put(this.config.apiBase + element.url, element.body,{headers:myHeaders}));
		}
		return forkJoin(observableBatch);
	}

	public emptyCart(Body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		let observableBatch = [];
		for (let i = 0; i < Body.length; i++) {
			const element = Body[i];
			observableBatch.push(this.http
				.delete(this.config.apiBase + element.url,{headers:myHeaders}));
		}
		return forkJoin(observableBatch);
	} 

	public deleteProductInCart(cartId:any, itemId:any): Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.delete(this.config.apiBase + 'V1/carts/'+ cartId +'/items/' + itemId,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}


	public applyCouponCode(cartId:any, CouponCode:any): Observable<any>{
		const body = '';
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.put(this.config.apiBase + 'V1/carts/'+ cartId +'/coupons/' + CouponCode,body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}


	public deleteCouponCode(CartId: any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.delete(this.config.apiBase + 'V1/carts/'+ CartId +'/coupons',{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public mergeGuestToCustomerCart(Body:any, Token:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + Token });
		return this.http
			.put(this.config.apiBase + 'V1/carts/mine',Body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})

	}

	public getCartShippingDetails(cartId: any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get(this.config.apiBase + 'V1/carts/'+ cartId,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public getShippingMethod(body:any,Token:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + Token });
		return this.http
			.post(this.config.apiBase + 'V1/carts/mine/estimate-shipping-methods-by-address-id',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public getCountryList():Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.get(this.config.apiBase + 'V1/directory/countries',{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public insertCustomerAddress(body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.post(this.config.apiBase + 'V1/mma/addNewCustomerAddress',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public getPaymentMethod(CartId:any,body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.post(this.config.apiBase + 'V1/carts/' + CartId + '/shipping-information',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public createOrder(CartId:any, body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.put(this.config.apiBase + 'V1/carts/' + CartId + '/order',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public createbillingManagement(CartId:any, body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
			.post(this.config.apiBase + 'V1/carts/' + CartId + '/billing-address',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public addProductToWishlist(Token:any, body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + Token });
		return this.http
			.post(this.config.apiBase + 'V1/wishlist/add',body,{headers:myHeaders})
			.concatMap(data=>{
				return Observable.of(data);
			})
	}

	public getWishlistProducts(Token:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + Token });return this.http
		.get(this.config.apiBase + 'V1/wishlist',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}
	public removeProductFromWishlist(Token:any, itemId:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + Token });
		return this.http
		.delete(this.config.apiBase + 'V1/wishlist/remove/' + itemId,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getStoreListing():Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/mma/storeaddress',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getfaqCategories():Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/mma/faq',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getfaqList(CatId:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/mma/getquestion/' + CatId,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getUserOrder(userId:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/orders?searchCriteria[filterGroups][0][filters][0][field]=customer_id&searchCriteria[filterGroups][0][filters][0][value]=' + userId,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getUserOrderDetail(orderId:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/orders/' + orderId,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getProductMediaImage(SKU:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/products/' + SKU + '/media',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public updateCustomerAddress(body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.post(this.config.apiBase + 'V1/address/update',body,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public deleteCustomerAddress(addressId:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.delete(this.config.apiBase + 'V1/addresses/' + addressId,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public serachProductListing(searchTerms:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/products?searchCriteria[filterGroups][0][filters][0][field]=name&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25' + searchTerms + '%25',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getAllNotification():Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/getallnotification',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getProductImage(sku:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.get(this.config.apiBase + 'V1/products/' + sku + '/media',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public getProductReward(Body:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.post(this.config.apiBase + 'V1/rewards/product/points/',Body,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}
	public updateCartRewardPoints(cartId:any):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.config.adminAccessToken });
		return this.http
		.post(this.config.apiBase + 'V1/rewards/' + cartId + '/apply/10000','',{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

	public updateCustomerInformation(Body:any,adminToken: string):Observable<any>{
		const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + adminToken });
		return this.http
		.put(this.config.apiBase + 'V1/customers/me',Body,{headers:myHeaders})
		.concatMap(data=>{
			return Observable.of(data);
		})
	}

}
