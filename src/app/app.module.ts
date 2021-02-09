import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './component/location/location.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, BaseAppConfig } from './app.config';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleModule } from 'angular2-collapsible';
import { ProductReviewPage } from './product-review/product-review.page';
import { ProductreviewPage } from './productreview/productreview.page';
import { IonicRatingModule } from 'ionic4-rating';
import { AddtocartPage } from './component/addtocart/addtocart.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShippingAddressPage } from './component/shipping-address/shipping-address.page';
import { AddnewaddressPage } from './component/addnewaddress/addnewaddress.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { EditaddressPage } from './component/editaddress/editaddress.page';
import { EditaddressPageModule } from './component/editaddress/editaddress.module';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { CartPage } from './cart/cart.page';
import { CartPageModule } from './cart/cart.module';
import { SearchPage } from './component/search/search.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FilterComponent } from './component/filter/filter.component';
import { Network } from '@ionic-native/network/ngx';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@NgModule({
  declarations: [AppComponent, 
    LocationComponent, 
    ProductReviewPage, 
    ProductreviewPage, 
    AddtocartPage, 
    ShippingAddressPage, 
    AddnewaddressPage, 
    EditaddressPage,
    SearchPage,
    FilterComponent
  ],
  entryComponents: [LocationComponent, 
    ProductReviewPage, 
    ProductreviewPage, 
    AddtocartPage, 
    ShippingAddressPage, 
    AddnewaddressPage, 
    EditaddressPage, 
    CartPage,
    SearchPage,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CollapsibleModule,
    IonicRatingModule,
    FormsModule,
    IonicSelectableModule,
    ReactiveFormsModule,
    CartPageModule,
    LazyLoadImageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    CallNumber,
    Market,
    Network,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    {provide: APP_CONFIG, useValue: BaseAppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
