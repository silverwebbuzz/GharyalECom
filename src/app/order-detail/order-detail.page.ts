import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { RestService } from '../api/rest.service';
import { MagentoServiceService } from '../api/magento-service.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  OrderId: any;
  isLoaded = false;
  isEmpty = false;
  order: any;
  dfImage = this.config.dfImage;
  productBaseURL = this.config.productImageURL;
  constructor(@Inject(APP_CONFIG) private config: AppConfig,
  private location: Location,
    private rest:RestService,
    private route: ActivatedRoute,
    private router: Router,
    private statusBar: StatusBar,
    private service: MagentoServiceService) {
      this.route.queryParams.subscribe(params => {
        if (params && params.order_id) {
          this.OrderId = params.order_id;
          console.log('cate:', this.OrderId);
          this.getOrderDetails();
        }
      });
      this.service.getProductImage('01 763 7723 4051-07 8 18 79').subscribe(val=>{
        console.log(val[0].file);
      });
     }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  gotoProductDetails(PId: number, PName: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product_id: JSON.stringify(PId),
        product_name: JSON.stringify(PName)
      }
    };
    this.router.navigate(['/productdetail'], navigationExtras);
  }

  getOrderDetails(){
    this.service.getUserOrderDetail(this.OrderId).subscribe(val=>{
      this.order = val;
      this.isLoaded = true;
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

  getimage(sku){
    return "../../assets/img/no-image-icon-4.png";
  }
  goBack(){
    this.location.back();
  }

}
