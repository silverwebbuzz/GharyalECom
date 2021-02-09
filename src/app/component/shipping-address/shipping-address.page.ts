import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.page.html',
  styleUrls: ['./shipping-address.page.scss'],
})
export class ShippingAddressPage implements OnInit {
  title: any;
  address: any;
  type:any;
  defaultAddressid: any;
  constructor(private navParam:NavParams,
    private statusBar:StatusBar,
              private modalCtrl: ModalController) {
    this.title = this.navParam.get('title');
    this.address = this.navParam.get('address');
    this.defaultAddressid = this.navParam.get('defaultAddress');
    this.type = this.navParam.get('type');
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  changeShippingAddress(address){
    this.modalCtrl.dismiss(address,this.type);
  }

}
