import { Component, OnInit, Inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationComponent } from '../component/location/location.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MagentoServiceService } from '../api/magento-service.service';
import { RestService } from '../api/rest.service';
import { AppConfig, APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-storelocator',
  templateUrl: './storelocator.page.html',
  styleUrls: ['./storelocator.page.scss'],
})
export class StorelocatorPage implements OnInit {

  isLoaded = false;
  AllStore: any = [];
  mediaURL = this.config.mediaURL;
  constructor(@Inject(APP_CONFIG) private config: AppConfig,
    private modalCtrl: ModalController,
    private service: MagentoServiceService,
    private rest: RestService,
    private statusBar: StatusBar) {
   
    this.service.getStoreListing().subscribe(val => {
      this.isLoaded = true;
      this.AllStore = val;
      console.log(this.AllStore);
    }, err => {
      this.isLoaded = true;
      this.rest.presentToastOptionsWithOutClose('Something Wrong try again.');
      console.log('Store listing Err:', err);
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //this.statusBar.overlaysWebView(false);
    //this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  image(URL){
    return URL;
  }

  async viewMap(store: any) {
    const modal = await this.modalCtrl.create({
      component: LocationComponent,
      componentProps: {
        storeDetail: store
      }
    });
    return await modal.present();
  }
}
