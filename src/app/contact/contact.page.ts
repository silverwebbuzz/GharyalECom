import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private statusBar: StatusBar,
    private callNumber: CallNumber) { }

  ngOnInit() {
    
  }

  contactNo(number){
    this.callNumber.callNumber(number, true)
  }

  EmailOpen(email){
    window.open('mailto:'+email);
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

}
