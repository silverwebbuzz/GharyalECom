import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {


  OrderId:any;
  constructor(private navCtrl: NavController,
    private plateform: Platform,
    private route: ActivatedRoute,
    private rest:RestService,
    private router: Router,
    private statusBar: StatusBar) {
      this.route.queryParams.subscribe(params => {
        if (params) {
          this.OrderId = JSON.parse(params.OrderId);
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
        }else{
          this.router.navigate(['/tabs/home']);
        }
      });
      this.plateform.ready().then(()=>{
        this.plateform.backButton.subscribeWithPriority(99999,()=>{
          this.router.navigate(['/tabs/home']);
        });
      });
     }

  ngOnInit() {
   
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

}
