import { Component, OnInit, Inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MagentoServiceService } from '../../api/magento-service.service';
import { APP_CONFIG, AppConfig } from '../../app.config';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searching = false;
  productItems:any = [];
  notFound = false;
  productBaseURL = this.config.productImageURL;
  constructor(@Inject(APP_CONFIG) private config: AppConfig,
      private modalCtrl: ModalController,
      private router: Router,
      private service: MagentoServiceService) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  searchProduct(event){
    const eventtext = event.detail.value;

    if(eventtext.length > 3){
      this.searching = true;
      this.notFound = false;
      this.service.serachProductListing(eventtext).subscribe(val =>{
        console.log('search result:', val);
        this.searching = false;
        if(val.items.length > 0){
          this.notFound = false;
          this.productItems = val.items;
        }else{
          this.productItems = [];
          this.notFound = true;
        }
        
      },err=>{
        console.log('search Err:', err);
      });
    }
    
  }

  gotoProduct(productId, productName){
    this.modalCtrl.dismiss();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product_id: JSON.stringify(productId),
        product_name: JSON.stringify(productName)
      }
    };
    this.router.navigate(['/productdetail'], navigationExtras);
  }

}
