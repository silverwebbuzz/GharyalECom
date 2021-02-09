import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  map:any;
  @ViewChild('mapElement') mapElement: ElementRef;

  storeDetails: any = '';
  constructor(private modalCtrl: ModalController,
    private navParam: NavParams,
    private statusBar: StatusBar) {
        
     }

  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }
  ngAfterViewInit() {
    this.storeDetails = this.navParam.get('storeDetail');
      console.log(this.storeDetails);

      const map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat:  Number(this.storeDetails.lat), lng: Number(this.storeDetails.lng)},
        zoom: 14
      });
      const pos = {
        lat: Number(this.storeDetails.lat),
        lng: Number(this.storeDetails.lng)
      };
      map.setCenter(pos);
      const icon = {
        url: './assets/icon/location-marker.png', // image url
        scaledSize: new google.maps.Size(35, 35), // scaled size
      };
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: icon
      });
      
      const contentString = '<div class="map-short-info">'+
      '<h3>'+this.storeDetails.name+'</h3><p>' +
      this.storeDetails.street_address + ' ' + this.storeDetails.city + ', ' + this.storeDetails.state + ' ' + this.storeDetails.zipcode  + ' ' + this.storeDetails.country +
      '</p><p>Phone: ' +
      '<a href="tel:' + this.storeDetails.phone_number + '">' + this.storeDetails.phone_number + '</a>' +
      '</p>' +
      '</div>';

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
      });
      infowindow.open(map, marker);
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

  }

  close(){
    this.modalCtrl.dismiss();
  }

}
