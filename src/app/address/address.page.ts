import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Addresses } from '../interfaces/address.models';
import { Constants } from '../interfaces/constants.models';
import { EditaddressPage } from '../component/editaddress/editaddress.page';
import { MagentoServiceService } from '../api/magento-service.service';
import { RestService } from '../api/rest.service';
import { UserResponse } from '../interfaces/user-response.models';
import { AddnewaddressPage } from '../component/addnewaddress/addnewaddress.page';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  private addresses: Array<Addresses>;

  public SelectedBillingAddress = window.localStorage.getItem('SelectedAddressBilling');
  public SelectedShippingAddress = window.localStorage.getItem('SelectedAddressShipping');

  public country_list: any = [];

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private auth: AuthenticationService,
    private router: Router,
    private rest:RestService,
    private alertCtrl: AlertController, 
    private service: MagentoServiceService,
    private modalCtrl:ModalController,
    private route: ActivatedRoute) {

      this.route.params.subscribe(url => {
        if(!this.auth.isAuthenticated()){
          this.router.navigate(['signin']);
          return false;
        }
        this.service.getCountryList().subscribe(val =>{
          this.country_list = val;
        },err=>{
          console.log('Country List Err:',err)
        })
        let getAddress = JSON.parse(window.localStorage.getItem(Constants.SELECTED_ADDRESS_LIST));
        this.addresses = getAddress[0].reverse();
        console.log(this.addresses);
      });

     }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#5d5e5e');
  }

  back(){
    this.navCtrl.navigateBack(['/tabs/account']);
  }

  async editAddress(address:any){
    const selectedCountry = this.country_list.find(x=>{ if(x.id == address.country_id){ return x;} });
    const editAddressModal = await this.modalCtrl.create({
      component: EditaddressPage,
      componentProps: {
        address: address,
        selectedCountry: selectedCountry
      },
      showBackdrop: true,
      mode:	"ios",
    });

    editAddressModal.onWillDismiss().then((data)=>{
      let getAddress = JSON.parse(window.localStorage.getItem(Constants.SELECTED_ADDRESS_LIST));
      this.addresses = getAddress[0].reverse();
    });
    
    return await editAddressModal.present();
  }

  async deleteAddress(address:any){
    const customerId = address.customer_id;
    const addressId = address.id;

      const alert = await this.alertCtrl.create({
        header: 'Confirmation',
        message: 'Are you sure you want to delete this address?',
        buttons: [
          {
            text: 'CANCEL',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              
            }
          }, {
            text: 'OK',
            handler: () => {
              this.rest.presentLoading();
              this.service.deleteCustomerAddress(addressId).subscribe(val=>{
                this.service.getUserDetailbyId(customerId).subscribe(val=>{
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
                  this.rest.presentToastWithOptions('You deleted the address.','','top');
                  let getAddress = JSON.parse(window.localStorage.getItem(Constants.SELECTED_ADDRESS_LIST));
                  this.addresses = getAddress[0].reverse();
                },err =>{
                  if(this.rest.isLoading){
                    this.rest.dismissLoading();
                  }
                  this.rest.presentToastWithOptions('We can\'t Fetch addresses. Try to logout and login.');
                  console.log('Update Address Fetch User Err:',err);
                });
              },err=>{
                if(this.rest.isLoading){
                  this.rest.dismissLoading();
                }
                this.rest.presentToastWithOptions('We can\'t Delete this address. Please try again.');
                console.log('Update Address Err:',err);
              })
              
            }
          }
        ]
      });
  
      return await alert.present();
  }

  async addNewAddress(){
    const customerInformation = JSON.parse(window.localStorage.getItem(Constants.USER_KEY));
    const addnewaddress = await this.modalCtrl.create({
      component: AddnewaddressPage,
      componentProps: {
        customerInfo : customerInformation
      },
      showBackdrop: true,
      mode:	"ios"
    });

    addnewaddress.onWillDismiss().then((data)=>{
      this.service.getUserDetailbyId(customerInformation.id).subscribe(val=>{
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
        let getAddress = JSON.parse(window.localStorage.getItem(Constants.SELECTED_ADDRESS_LIST));
        this.addresses = getAddress[0].reverse();
      },err =>{
        if(this.rest.isLoading){
          this.rest.dismissLoading();
        }
        this.rest.presentToastWithOptions('We can\'t Fetch addresses. Try to logout and login.');
        console.log('Update Address Fetch User Err:',err);
      });
    });
    
    return await addnewaddress.present();
  }

}
