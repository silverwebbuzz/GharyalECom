import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../_helper/must-match.validator';
import { MagentoServiceService } from '../api/magento-service.service';
import { RestService } from '../api/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registration_form: FormGroup;
  login_back_url : any = '/signin';
  passwordShown: boolean = false;
  passwordType : string = 'password';
  subscribeCheckbox: boolean = true;
  constructor(private statusBar: StatusBar,
    private service: MagentoServiceService,
    private api: RestService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.registration_fb();
     }

  ngOnInit() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#090809');
    
  }

  registration_fb() {
    this.registration_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),
        Validators.minLength(8)
      ])],
      confirmpassword: [null, Validators.required],
      subscribefield: [null]
    },{validator: ConfirmPasswordValidator.MatchPassword});
  };

  submitRegister(){
    for (let v in this.registration_form.controls) {
      this.registration_form.controls[v].markAsTouched();
    }
    if (this.registration_form.valid) {
      this.api.presentLoading();
      const body = {
        "customer": {
          "email": this.registration_form.value.email,
          "firstname": this.registration_form.value.firstname,
          "lastname": this.registration_form.value.lastname
          
           },
          "password": this.registration_form.value.password,
          "extension_attributes":{
            "is_subscribed": this.subscribeCheckbox
          }
      };
      this.service.createUser(body).subscribe(data =>{
        this.api.dismissLoading();
        this.api.presentToastWithOptions('Thank you for Regsitration! Please login and countinue.', '', 'top');
        this.router.navigate([this.login_back_url]);
      }, err =>{
        console.log(err.error.message);
        this.api.dismissLoading();
        this.api.presentToastWithOptions(err.error.message);
      });
      
    }
  }

  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  toggleCheckbox(){
    if(this.subscribeCheckbox){
      this.subscribeCheckbox = false;
    }else{
      this.subscribeCheckbox = true;
    }
  }

}
