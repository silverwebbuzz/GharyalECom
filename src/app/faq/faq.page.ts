import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MagentoServiceService } from '../api/magento-service.service';
import { RestService } from '../api/rest.service';
import { AppConfig, APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  isLoaded = false;
  ByFAQArray: any = [];
  hideMe : boolean = false ;
  buttonIcon: string = "add";
  faqCategories: any = [];
  mediaURL = this.config.mediaURL;
  constructor(@Inject(APP_CONFIG) private config: AppConfig,private navCtrl: NavController,
    private service: MagentoServiceService,
    private rest: RestService,
    private statusBar: StatusBar) {
    
    this.service.getfaqCategories().subscribe(val =>{
      this.isLoaded = true;
      this.faqCategories = val;
      console.log(this.faqCategories);
    },err=>{
      this.isLoaded = true;
      this.rest.presentToastOptionsWithOutClose('Something Wrong try again.');
      console.log('faq Cat Err:', err);
    });

   }

   ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  back(){
    this.navCtrl.navigateRoot(['/tabs/home']);
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
  faqDetails(catId:any,catName:any){
    this.rest.presentLoading();
    this.navCtrl.navigateForward(['/faqdetails'], {queryParams:{catId: catId, catName: catName}});
  }

}
