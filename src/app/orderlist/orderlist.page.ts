import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { RestService } from '../api/rest.service';
import { MagentoServiceService } from '../api/magento-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {

  isLoaded = false;
  userDetils: any;
  orders: any = [];
  isEmpty = false;
  constructor(@Inject(APP_CONFIG) private config:AppConfig,
              private rest:RestService,
              private router:Router,
              private service:MagentoServiceService,
              private statusBar:StatusBar
              ) {
                this.getOrderDetails();
               }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  getOrderDetails(){
    this.userDetils = JSON.parse(window.localStorage.getItem('UserKey'));
    const userId = this.userDetils.id;
    console.log(userId);
    this.service.getUserOrder(userId).subscribe(val=>{
      let ordersItems = val.items;
      this.orders = ordersItems.reverse();
      this.isLoaded = true;
      if(this.orders.length == 0){
        this.isEmpty = true;
      }
      console.log('Order Val:',val);
    },err=>{
      if(err.status == 401){
        const stateURL = this.router.routerState.snapshot.url;
          this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
      }else{
        this.rest.presentToastOptionsWithOutClose('We can\'t find any Order.');
        this.isLoaded = true;
        this.isEmpty = true;
       
      }
      console.log('Order Err:',err);
    })

  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  gotoDetailspage(OrderId: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        order_id: OrderId
      }
    };
    this.router.navigate(['/order-detail'], navigationExtras);
  }

}
