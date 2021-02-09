import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ProductreviewPage } from '../productreview/productreview.page';
import { MagentoServiceService } from '../api/magento-service.service';
import * as _ from 'lodash';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.page.html',
  styleUrls: ['./product-review.page.scss'],
})
export class ProductReviewPage implements OnInit {

  productSKU: any;
  productAvgRatings: any;
  countRatings: any = 0;
  noOfRating: any;
  isLoaded = false;
  allReviews: any;
  ratingColor = '#000';
  products: any;

  rating_summary = 0;

  constructor(private modalCtrl: ModalController,
     private navParam: NavParams, 
     private service: MagentoServiceService,
     private statusBar: StatusBar) {

    this.productSKU = this.navParam.get('productSKU');
    this.productAvgRatings = this.navParam.get('productAvgRating');
    this.noOfRating = this.productAvgRatings / 20;
    this.products = this.navParam.get('products');

    this.service.getProductReviews(this.productSKU).subscribe(val => {
      this.countRatings = val.length;
      this.allReviews = val.map(x => {
        const sumrating = _.sumBy(x.ratings, 'value') / x.ratings.length;
        x.rating_summary = sumrating;
        switch (true) {
          case (sumrating <= 1):
            x.ratingColor = '#ff0000';
            break;
          case (sumrating <= 2):
            x.ratingColor = '#8b0000';
            break;
          case (sumrating <= 3):
            x.ratingColor = '#008000';
            break;
          case (sumrating <= 4):
            x.ratingColor = '#ffa500';
            break;
          case (sumrating <= 5):
            x.ratingColor = '#cead65';
            break;

          default:
            x.ratingColor = '#000';
            break;
        }
        return x;
      });

      console.log(this.allReviews);
      this.isLoaded = true;

    }, err => {
      console.log('Err Ratings:', err);
    });


  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async addReview() {
    const modal = await this.modalCtrl.create({
      component: ProductreviewPage,
      componentProps: {products: this.products}
    });
    return await modal.present();
  }

}
