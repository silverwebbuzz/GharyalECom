import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { MagentoServiceService } from '../../api/magento-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { RestService } from '../../api/rest.service';
import { UserResponse } from '../../interfaces/user-response.models';
import { Constants } from '../../interfaces/constants.models';
import { Addresses } from '../../interfaces/address.models';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.page.html',
  styleUrls: ['./editaddress.page.scss'],
})
export class EditaddressPage implements OnInit {

  address_form: FormGroup;
  country_list: any =[];
  available_regions: any = [];
  selectedCountry: any;
  address:any;
  constructor(private modalCtrl:ModalController,
    private navParam: NavParams,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private rest:RestService,
    private service: MagentoServiceService,
    ) {
      this.address = this.navParam.get('address');
      this.selectedCountry = this.navParam.get('selectedCountry');
      this.service.getCountryList().subscribe(val =>{
        this.country_list = val;
      },err=>{
        console.log('Country List Err:',err)
      });
      console.log('selectedCountry:', this.selectedCountry)
      console.log('Address:', this.address);
      this.addressform_fb();
      if(this.selectedCountry.available_regions){
        this.available_regions = this.selectedCountry.available_regions;
        const finalArray = {
          id: this.address.region.region_id.toString(),code: this.address.region.region_code, name: this.address.region.region
        }
        this.address_form.controls['state'].setValue(finalArray);
      }else{
        this.address_form.controls['state'].setValue(this.address.region.region);
      }
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  addressform_fb() {
    this.address_form = this.formBuilder.group({
      firstname: [this.address.firstname, Validators.required],
      lastname: [this.address.lastname, Validators.required],
      company: [this.address.company],
      street:[this.address.street.join(', '), Validators.required],
      phone: [this.address.telephone, Validators.required],
      country: [this.selectedCountry, Validators.required],
      state: [null, Validators.required],
      city: [this.address.city, Validators.required],
      zip: [this.address.postcode, Validators.required],
      default_billing: [null],
      default_shipping: [null]
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

  back(){
    this.modalCtrl.dismiss();
  }


  submitEditAdrress(){
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
        "params":{
          CustomerId: this.address.customer_id,
          AddressId: this.address.id,
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
          default_shipping: this.address_form.value.default_shipping?this.address_form.value.default_shipping:false,
          default_billing: this.address_form.value.default_billing?this.address_form.value.default_billing:false
        }
      }
      this.service.updateCustomerAddress(body).subscribe(val=>{
        this.service.getUserDetailbyId(this.address.customer_id).subscribe(val=>{
          let userResponse: UserResponse = val;
          window.localStorage.setItem(Constants.USER_KEY, JSON.stringify(userResponse));
          if(userResponse.addresses){
            userResponse.addresses.id = -100;
            let addresse = new Array<Addresses>();
            addresse.push(userResponse.addresses);
            if(userResponse.default_billing){
              window.localStorage.setItem(Constants.SELECTED_ADDRESS_BILLING, JSON.stringify(userResponse.default_billing));
            }
            if(userResponse.default_shipping){
              window.localStorage.setItem(Constants.SELECTED_ADDRESS_SHIPPING, JSON.stringify(userResponse.default_shipping));
            }
            window.localStorage.setItem(Constants.SELECTED_ADDRESS_LIST, JSON.stringify(addresse));
          }
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          this.rest.presentToastWithOptions('You saved the address.','','top');
          this.modalCtrl.dismiss();
        },err =>{
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          this.rest.presentToastWithOptions('We can\'t Fetch addresses. Try to logout and login.');
          console.log('Update Address Fetch User Err:',err);
        });
      },err =>{
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
        this.rest.presentToastWithOptions('We can\'t update this address. Please try again.');
        console.log('Update Address Err:',err);
      });
    }
  }

}
