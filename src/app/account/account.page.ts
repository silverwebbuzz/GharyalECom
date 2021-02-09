import { Component, OnInit, Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { RestService } from '../api/rest.service';
import { UserInterface } from '../interfaces/User.interface';
import { UserResponse } from '../interfaces/user-response.models';
import { Constants } from '../interfaces/constants.models';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
@Injectable()
export class AccountPage implements OnInit {

  userDetails: UserResponse;
  constructor(private statusBar: StatusBar,
    private router: Router, private route:ActivatedRoute, 
    private auth: AuthenticationService, private rest:RestService,
    private alertCtrl: AlertController) {
      this.auth.set_login_back_url('/tabs/myaccount');
     }

  async ngOnInit() {
    this.route.params.subscribe(url => {
      this.getUserDetails();
    });
  }

  async ionViewWillEnter(){
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
    await this.getUserDetails();
  }

  async getUserDetails(){
    if(!window.localStorage.getItem(Constants.USER_KEY)){
      this.router.navigate(['signin']);
    }
    this.userDetails = JSON.parse(window.localStorage.getItem(Constants.USER_KEY));
    this.route.params.subscribe(val => {
    });

    return await true;

  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Logout',
          handler: () => {
            window.localStorage.removeItem(Constants.USER_KEY);
            this.auth.logout();
          }
        }
      ]
    });

    await alert.present();
  }
}
