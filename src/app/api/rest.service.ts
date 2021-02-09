import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { MagentoServiceService } from './magento-service.service';

const httpOptions = {
  headers: new HttpHeaders()
};

const API_URL = "http://gharyal.com/index.php/rest/V1/";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  isLoading = false;
  toast: any;
  wishlist_items = new Array<any>();
  constructor(private http: HttpClient, 
    public toastCtrl: ToastController, 
    public loadingController: LoadingController, 
    private alertCtrl: AlertController, 
    private auth:AuthenticationService,
    private service: MagentoServiceService,
    private router: Router) { }

  private handleError(error: HttpErrorResponse) {
    console.log('log : ',error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  post(URL:string, Body): Observable<any>{
    let url = `${API_URL}${URL}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(url, Body, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  async presentAlertLogin(msg:any){
    const alert = await this.alertCtrl.create({
      header: 'Login Required',
      message: msg,
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'LOGIN',
          handler: () => {
            const stateURL = this.router.routerState.snapshot.url;
            console.log('stateURL:', stateURL);
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
          }
        }
      ]
    });

    alert.present();
  }

  
  async presentToastWithOptions(message?, cssClass?, position?) {
    if(this.toast){
      this.toast.dismiss();
    }
    this.toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 10000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    this.toast.present();
  }

  async presentToastOptionsWithOutClose(message?, position?) {
    if(this.toast){
      this.toast.dismiss();
    }
    this.toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 5000,
      position: position ? position : 'bottom',
      cssClass: 'dark-trans',
      showCloseButton: false
    });
    this.toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      spinner: 'crescent',
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading(){
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }


  async wishlist(){
    return this.auth.getToken().then(token=>{
      this.service.getWishlistProducts(token).subscribe(val=>{
        
        this.wishlist_items = val[0].wishlist_items;
        window.localStorage.setItem('wishListItems', JSON.stringify(this.wishlist_items));
      },err=>{
        if(err.status == 401){
          const stateURL = this.router.routerState.snapshot.url;
            console.log('stateURL:', stateURL);
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
        }
      });
    },err=>{
      const stateURL = this.router.routerState.snapshot.url;
            console.log('stateURL:', stateURL);
            this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
    })
  }

}
