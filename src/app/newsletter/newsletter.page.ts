import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Constants } from '../interfaces/constants.models';
import { UserResponse } from '../interfaces/user-response.models';
import { Addresses } from '../interfaces/address.models';
import { RestService } from '../api/rest.service';
import { MagentoServiceService } from '../api/magento-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
  UserInfo: any;
  isSubscribe = false;
  constructor(private navCtrl: NavController,
    private rest: RestService,
    private service: MagentoServiceService,
    private auth: AuthenticationService,
    private router:Router) { }

  ngOnInit() {
    this.UserInfo = JSON.parse(window.localStorage.getItem(Constants.USER_KEY));
    if(this.UserInfo.extension_attributes.is_subscribed){
      this.isSubscribe = true;
    }
  }

  back(){
    this.navCtrl.navigateBack(['/tabs/account']);
  }

  updateUserInformation(){
    const body = {
      "customer":{
        "id":this.UserInfo.id,
        "firstname": this.UserInfo.firstname,
        "lastname": this.UserInfo.lastname,
        "extension_attributes":{
          "is_subscribed":this.isSubscribe
        },
        "email": this.UserInfo.email,
        "storeId": 1,
        "websiteId": 1
      }
    };

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

  toggleCheckbox(){
    if(this.isSubscribe){
      this.isSubscribe = false;
    }else{
      this.isSubscribe = true;
    }
  }

}
