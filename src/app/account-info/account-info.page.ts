import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../_helper/must-match.validator';
import { Constants } from '../interfaces/constants.models';
import { MagentoServiceService } from '../api/magento-service.service';
import { RestService } from '../api/rest.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserResponse } from '../interfaces/user-response.models';
import { Addresses } from '../interfaces/address.models';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {

  visabilityEmail :boolean = false;
  visabilityPass :boolean = false;
  isCheckedEmail : boolean = false;
  isCheckedPass : boolean = false;
  account_form: FormGroup;
  UserInfo: any;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder, 
    private service: MagentoServiceService, 
    private rest:RestService, 
    private auth:AuthenticationService,
    private router: Router) {
    
    this.UserInfo = JSON.parse(window.localStorage.getItem(Constants.USER_KEY));
    this.account_fb();
   }

  ngOnInit() {
  }

  account_fb() {
    this.account_form = this.formBuilder.group({
      firstname: [this.UserInfo.firstname, Validators.required],
      lastname: [this.UserInfo.lastname, Validators.required],
      email: [this.UserInfo.email],
      password: [null],
      confirmpassword: [null],
    },{validator: ConfirmPasswordValidator.MatchPassword});
  };

  back(){
    this.navCtrl.navigateBack(['/tabs/account']);
  }

  onChangeEmail(){

    if(this.isCheckedEmail  = !this.isCheckedEmail){
      this.visabilityEmail = true;
      this.account_form.get('email').setValidators([Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])]);
    }
    else if(this.isCheckedEmail  == this.isCheckedEmail){
      this.visabilityEmail = false;
      this.account_form.controls.email.setErrors(null);
      this.account_form.controls.email.setValidators(null);
    }
  }

  onChangePass(){


    if(this.isCheckedPass  = !this.isCheckedPass){
      this.visabilityPass = true;
      this.account_form.get('password').setValidators([Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),
        Validators.minLength(8)
      ])]);
      this.account_form.get('confirmpassword').setValidators([Validators.required]);
    }
    else if(this.isCheckedPass  == this.isCheckedPass){
      this.visabilityPass = false;
      this.account_form.controls.password.setErrors(null);
      this.account_form.controls.password.setValidators(null);

      this.account_form.controls.confirmpassword.setErrors(null);
      this.account_form.controls.confirmpassword.setValidators(null);
    }
  }

  updateInformation(){
    if(!this.visabilityEmail){
      this.account_form.controls.email.setErrors(null);
      this.account_form.controls.email.setValidators(null);
    }
    if(!this.visabilityPass){
      this.account_form.controls.password.setErrors(null);
      this.account_form.controls.password.setValidators(null);

      this.account_form.controls.confirmpassword.setErrors(null);
      this.account_form.controls.confirmpassword.setValidators(null);
    }
    for (let v in this.account_form.controls) {
      this.account_form.controls[v].markAsTouched();
    }
    var body = {};
    if(this.visabilityEmail && this.visabilityPass){
      body = {
        "customer":{
          "id":this.UserInfo.id,
          "firstname": this.account_form.value.firstname,
          "lastname": this.account_form.value.lastname,
          "email": this.account_form.value.email,
          "storeId": 1,
          "websiteId": 1
        },
        "passwordHash": this.account_form.value.password
      };
    }else if(this.visabilityEmail){
      body = {
        "customer":{
          "id":this.UserInfo.id,
          "firstname": this.account_form.value.firstname,
          "lastname": this.account_form.value.lastname,
          "email": this.account_form.value.email,
          "storeId": 1,
          "websiteId": 1
        }
      };
    }else if(this.visabilityPass){
      body = {
        "customer":{
          "id":this.UserInfo.id,
          "firstname": this.account_form.value.firstname,
          "lastname": this.account_form.value.lastname,
          "email": this.UserInfo.email,
          "storeId": 1,
          "websiteId": 1
        },
        "passwordHash": this.account_form.value.password
      };
    }else{
      body = {
        "customer":{
          "id":this.UserInfo.id,
          "firstname": this.account_form.value.firstname,
          "lastname": this.account_form.value.lastname,
          "email": this.UserInfo.email,
          "storeId": 1,
          "websiteId": 1
        }
      };
    }

    if (this.account_form.valid) {
      console.log('body:',body);
      this.rest.presentLoading();
      this.auth.getToken().then(token=>{
        this.service.updateCustomerInformation(body,token).subscribe(res=>{
          if(res){
            this.rest.dismissLoading();
            let userResponse: UserResponse = res;
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
            this.rest.presentToastWithOptions('Successfully Update Your Profile.');
          }else{
            this.rest.dismissLoading();
            this.rest.presentToastWithOptions('Something was wrong! Please try again.')
          }
        },err=>{
          console.log('err:',err);
          if(this.rest.isLoading){
            this.rest.dismissLoading();
          }
          if(err.status == 401){
            const stateURL = this.router.routerState.snapshot.url;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
            this.rest.presentToastWithOptions(' Please login and try again.')
          }else{
            this.rest.presentToastWithOptions(err.error.message)
          }
        });
      })
      
    }
  }

  userDetails(res){

  }

}
