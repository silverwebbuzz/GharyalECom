import { Component, OnInit, Inject } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppConfig, APP_CONFIG } from '../app.config';
import { MagentoServiceService } from '../api/magento-service.service';
import * as _ from 'lodash';
import { RestService } from '../api/rest.service';
@Component({
  selector: 'app-productreview',
  templateUrl: './productreview.page.html',
  styleUrls: ['./productreview.page.scss'],
})
export class ProductreviewPage implements OnInit {

  reviewForm: FormGroup;
  isLoaded = false;
  products: any;
  productBaseURL: any;
  selectionValue = 0;
  numberOfRatings: any;

  constructor(@Inject(APP_CONFIG) private config: AppConfig,private modalCtrl: ModalController,
    private formBuilder: FormBuilder, 
    private service: MagentoServiceService,
    private navParam: NavParams,
    private rest:RestService,
    private statusBar: StatusBar) {
      this.productBaseURL = this.config.productImageURL;
      this.products = this.navParam.get('products');

      this.service.getRatingOptions().subscribe(v =>{
        this.numberOfRatings = v;
        this.numberOfRatings.forEach(element => {
            this.reviewForm.addControl(element.code, this.formBuilder.control(null));
        });
        this.numberOfRatings.map(x =>{ x.selectionValue = 0; return x;})
        this.isLoaded = true;
      },err=>{
        console.log('ratingOption Err:', err)
      })

      this.form_validation();
     }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  form_validation() {
    this.reviewForm = this.formBuilder.group({
      nickname: [null, Validators.required],
      summary: [null, Validators.required],
      comment: [null, Validators.required]
    });
  };

  back(){
    this.modalCtrl.dismiss();
  }

  onRateChange(event, code){
    const c = code;
    const array = this.numberOfRatings.find(x =>{ x = x.code == c; return x;});
    const index = event - 1;
    const finalValue = array.option[index].value;   
    array.selectionValue = finalValue;
   
  }

  doSubmit() {
    for (let v in this.reviewForm.controls) {
      this.reviewForm.controls[v].markAsTouched();
    }
    if (this.reviewForm.valid) {
      console.log('Price:', this.reviewForm.value);
      let ratingsArray = [];
      let ratings = this.numberOfRatings.forEach(element => {
        let code = element.code;
          const vari = {
              "id": element.id,
              "value": element.selectionValue
          }
          ratingsArray.push(vari);
      });
      console.log('ratingsArray:', ratingsArray)
      let body = {
        "review": {
          "entity_pk_value": this.products.basic.id,
          "title": this.reviewForm.value.summary,
          "detail": this.reviewForm.value.comment,
          "nickname": this.reviewForm.value.nickname,
          "review_entity": "product",
          "review_status": 2,
          "ratings": ratingsArray         
        }
        
      };
      this.service.postRatings(body).subscribe(v=>{
        this.rest.presentToastWithOptions('Your Review has been accepted for approval.','','top');
        this.modalCtrl.dismiss();
      },err=>{
        console.log('Rating Post Err:', err);
      })
    }
  }

}
