import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MagentoServiceService } from '../../api/magento-service.service';
import { AuthenticationService } from '../../services/authentication.service';
import { RestService } from '../../api/rest.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-addnewaddress',
  templateUrl: './addnewaddress.page.html',
  styleUrls: ['./addnewaddress.page.scss'],
})
export class AddnewaddressPage implements OnInit {
  isLoaded = false;
  address_form: FormGroup;
  current_customer: any;
  country_list:any;
  available_regions: any = [];
  addresses: any;
  constructor(private modalCtrl:ModalController,
    private navParam: NavParams,
    private statusBar:StatusBar,
    private router: Router,
    private rest: RestService,
    private auth: AuthenticationService,
    private service: MagentoServiceService,
    private formBuilder: FormBuilder) {
      this.addressform_fb();
      this.service.getCountryList().subscribe(val =>{
        this.country_list = val;
      },err=>{
        console.log('Country List Err:',err)
      })
      this.current_customer = this.navParam.get('customerInfo');
      this.addresses = this.current_customer.addresses;
      console.log('customer:',this.current_customer);
      this.address_form.controls['firstname'].setValue(this.current_customer.firstname);
      this.address_form.controls['lastname'].setValue(this.current_customer.lastname);
     }

  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  back(){
    const data = '';
    this.modalCtrl.dismiss(data,'backdrop');
  }

  addressform_fb() {
    this.address_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      company: [null],
      street:[null, Validators.required],
      phone: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      zip: [null, Validators.required]
    });
  };

  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    if(event.value.available_regions){
      this.available_regions = event.value.available_regions;
    }else{
      this.available_regions = [];
      this.address_form.controls['state'].setValue('');
    }
    console.log('countryChange event:', event);
    console.log('countryChange:', event.value);
  }

  onFormSubmit(){
    for (let v in this.address_form.controls) {
      this.address_form.controls[v].markAsTouched();
    }
    if(this.address_form.valid){
      this.rest.presentLoading();
      let region_name = '';
      let region_id = 0;
      if(this.available_regions.length > 0){
        region_name = this.address_form.value.state.name;
        region_id = this.address_form.value.state.id;
      }else{
        region_name = this.address_form.value.state;
        region_id = 0;
      }
      var body ={
        customer:{
          id: this.current_customer.id,
          region: region_name,
          region_id:region_id,
          country_id: this.address_form.value.country.id,
          street:[this.address_form.value.street],
          firstname: this.address_form.value.firstname,
          lastname: this.address_form.value.lastname,
          company: this.address_form.value.company,
          telephone: this.address_form.value.phone,
          city: this.address_form.value.city,
          postcode: this.address_form.value.zip,
          default_shipping: true,
          default_billing: true
        }
      }
        this.service.insertCustomerAddress(body).subscribe(val =>{
          console.log('val:',val);
          this.modalCtrl.dismiss();
        },err =>{
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          if(err.status == 401){
            this.modalCtrl.dismiss();
            this.router.navigate(['/signin']);
          }else{
            
            this.rest.presentToastWithOptions('Something Wrong Please try again.');
          }
          console.log('Insert New Address Err:', err);
        });
      
      
    }
  }

}
