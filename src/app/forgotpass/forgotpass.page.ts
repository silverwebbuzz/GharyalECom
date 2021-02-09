import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../api/rest.service';
import { MagentoServiceService } from '../api/magento-service.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  forgot_form: FormGroup;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private api:RestService,
    private service:MagentoServiceService,
    private statusBar: StatusBar) {
      this.forgotpass_fb();
     }

  ngOnInit() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#090809');
  }

  forgotpass_fb() {
    this.forgot_form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])]
    });
  };

  forgotPassword(){
    for (let v in this.forgot_form.controls) {
      this.forgot_form.controls[v].markAsTouched();
    }
    if (this.forgot_form.valid) {
      this.api.presentLoading();
      var body = {
        "email": this.forgot_form.value.email,
        "template": "email_reset",
        "websiteId": 1
      };
      var email = this.forgot_form.value.email;
      this.service.forgotPassword(body)
        .subscribe((data)=>{
          var msg = 'If there is an account associated with ' + email + ' you will receive an email with a link to reset your password.';
          this.api.dismissLoading();
          this.api.presentToastWithOptions(msg, '', 'top');
        },err =>{
          this.api.dismissLoading();
          this.api.presentToastWithOptions('Something Wrong Please try again.');
        });
    }
  }

}
