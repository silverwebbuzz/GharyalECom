import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MagentoServiceService } from '../api/magento-service.service';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-faqdetails',
  templateUrl: './faqdetails.page.html',
  styleUrls: ['./faqdetails.page.scss'],
})
export class FaqdetailsPage implements OnInit {

  isLoaded = false;
  hideMe : boolean = false ;
  buttonIcon: string = "add";
  catId:any = 0;
  catName:any = '';
  faqList: any = [];

  constructor(private navCtrl: NavController,
    private route : ActivatedRoute,
    private rest: RestService,
    private service: MagentoServiceService,
    private statusBar: StatusBar) {
     
      this.route.queryParams.subscribe(params => {
        this.catId = params.catId;
        this.catName = params.catName;
        this.service.getfaqList(this.catId).subscribe(val=>{
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          this.faqList = val;
          console.log(this.faqList);
        },err=>{
          console.log(err);
        })
      });
   }

   ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  back(){
    this.navCtrl.pop();
  }

  hide() {
    if(this.hideMe == true){
    this.hideMe = false;
    this.buttonIcon= "remove";
    }
    else{
      this.hideMe = true;
      this.buttonIcon= "add";
    }
  }

}
