import { Component, OnInit, Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../api/rest.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

import { MagentoServiceService } from '../api/magento-service.service';
import { UserResponse } from '../interfaces/user-response.models';
import { Addresses } from '../interfaces/address.models';
import { Constants } from '../interfaces/constants.models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
@Injectable()
export class SigninPage implements OnInit {
  login_form: FormGroup;
  login_back_url : any = '/tabs/account';
  constructor(private statusBar: StatusBar, 
    private formBuilder: FormBuilder,
    private rest:RestService, 
    private auth:AuthenticationService, 
    private router: Router,
    private route: ActivatedRoute,
    private service: MagentoServiceService) {
    this.login_fb();
    this.route.queryParams.subscribe(params => {
      if (params && params.returnUrl) {
        this.login_back_url = params.returnUrl;
      }
    });
  }

  login_fb() {
    this.login_form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.required]
    });
  };
  ngOnInit() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#090809');
  }

  doLogin() {
    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if (this.login_form.valid) {
      this.rest.presentLoading();
      let body = {
        "username": this.login_form.value.email,
        "password": this.login_form.value.password
      };

      this.rest.post('integration/customer/token', body)
        .subscribe(res=>{
          if(res){
            this.userDetails(res);
          }else{
            this.rest.dismissLoading();
            this.rest.presentToastWithOptions('Something was wrong! Please try again.')
          }
        },(err)=>{
          this.rest.dismissLoading();
          this.rest.presentToastWithOptions(err.message);
        });
    }
  }


  userDetails(res: any){
    this.auth.login(res).then((v)=>{
      this.service.getUser(res).subscribe(data =>{
        this.rest.wishlist();
        this.rest.dismissLoading();
        let userResponse: UserResponse = data;
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
        console.log('login Back Url:', this.login_back_url);
        this.router.navigate([this.login_back_url]);
      },err =>{
        this.rest.dismissLoading();
        this.rest.presentToastWithOptions(err.error.message);
      });
    });
  }
}
