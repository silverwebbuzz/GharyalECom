(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <img src=\"../assets/img/logo.png\" class=\"logo\" />\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <img src=\"../../assets/icon/dots.png\" *ngIf=\"newNotify\" style=\"height: 10px; width: 10px; position: absolute; top: 3px; right: 6px;\"/>\n        <ion-icon name=\"ios-notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home-page\">\n  <ng-container *ngIf=\"isLoaded; else elseSliderTemplate\">\n    <ion-slides pager=\"true\" loop=\"true\" [options]=\"sliderOptions\" class=\"home-slides\">\n      <ion-slide>\n        <img src=\"http://gharyal.com/pub/media/Moving1.png\" class=\"slide-pic\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"http://gharyal.com/pub/media/Moving2.png\" class=\"slide-pic\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"http://gharyal.com/pub/media/Moving3.png\" class=\"slide-pic\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"http://gharyal.com/pub/media/Moving4.png\" class=\"slide-pic\">\n      </ion-slide>\n    </ion-slides>\n  </ng-container>\n  <ng-template #elseSliderTemplate>\n    <ion-skeleton-text animated class=\"home-slides\"></ion-skeleton-text>\n  </ng-template>\n  <ion-item lines=\"none\" class=\"item-spc\">\n    <ion-label class=\"dark\">\n      Popular Watches\n    </ion-label>\n    <!-- <ion-button fill=\"clear\" class=\"more\" routerLink=\"/categoryproduct\">\n          MORE\n        </ion-button> -->\n  </ion-item>\n\n\n  <ng-container *ngIf=\"isLoaded; else elsePopularItems\">\n    <ion-grid class=\"grid\">\n      <ion-row style=\"padding: 5px;\">\n        <ion-col size=\"6\" *ngFor=\"let p of popularProducts\" class=\"grid\">\n          <ion-card class=\"box-card\">\n            <ion-row>\n              <ion-col size=\"7\" no-padding>\n                <div class=\"rating-summary\">\n                  <div class=\"rating-result\" title=\"{{p.rating}}%\">\n                    <span [ngStyle]=\"{'width': p.rating + '%'}\"><span><span itemprop=\"ratingValue\">{{p.rating}}</span>%\n                        of\n                        <span itemprop=\"bestRating\">100</span></span></span>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"5\" no-padding *ngIf=\"!p.isWishList\">\n                <ion-button fill=\"clear\" class=\"fav\" (click)=\"addtoFav(p)\">\n                  <ion-icon name=\"heart-empty\" class=\"clr-icon-heart\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"5\" no-padding *ngIf=\"p.isWishList\">\n                  <ion-button fill=\"clear\" class=\"fav\" (click)=\"remvoeFav(p)\">\n                    <ion-icon name=\"heart\" class=\"clr-icon-heart\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n            </ion-row>\n            <div class=\"img-div\" (click)=\"gotoProductPage(p.id, p.name)\">\n              <img *ngIf=\"p.base_img\" src=\"{{productBaseURL + p.base_img}}\" class=\"product-pic\" />\n              <img *ngIf=\"!p.base_img\" src=\"../../assets/img/no-image-icon-4.png\" class=\"product-pic\" />\n              <ion-badge *ngIf=\"p.rewardPoint > 0\">EARN {{p.rewardPoint}}</ion-badge>\n            </div>\n            <div class=\"hr\"></div>\n            <div class=\"product-footer\">\n              <ion-item text-wrap lines=\"none\" style=\"--padding-start: 0px;\">\n                <ion-label class=\"title\" (click)=\"gotoProductPage(p.id, p.name)\">{{p.name | titlecase}}</ion-label>\n              </ion-item>\n              <ion-text class=\"first-price-container\">\n                <del *ngIf=\"p.special_price != null\" class=\"first-price\">PKR {{p.price | number}}</del>\n              </ion-text>\n              <ion-text class=\"usd-price\">\n                {{p.usd_price}}\n              </ion-text>\n              <ion-text class=\"final-price\" *ngIf=\"!p.special_price\">\n                PKR {{p.price | number}}\n              </ion-text>\n              <ion-text class=\"final-price\" *ngIf=\"p.special_price != null\">\n                PKR {{p.special_price | number}}\n              </ion-text>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n  <ng-template #elsePopularItems>\n    <ion-grid class=\"grid\">\n      <ion-row style=\"padding: 5px;\">\n        <ion-col size=\"6\" class=\"grid\">\n          <ion-card class=\"box-card\">\n            <ion-row>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-row>\n            <div class=\"img-div\" style=\"height: 150px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div class=\"hr\"></div>\n            <div class=\"product-footer\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\" class=\"grid\">\n            <ion-card class=\"box-card\">\n              <ion-row>\n                  <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-row>\n              <div class=\"img-div\" style=\"height: 150px;\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div class=\"hr\"></div>\n              <div class=\"product-footer\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                  <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </ion-card>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n\n  <ion-item lines=\"none\" class=\"item-spc\">\n    <ion-label class=\"dark\">\n      Top Tranding Watch\n    </ion-label>\n  </ion-item>\n\n<ng-container *ngIf=\"isLoaded; else elseTreandingItems\">\n  <ion-grid class=\"grid\">\n    <ion-row style=\"padding: 5px;\">\n      <ion-col size=\"6\" *ngFor=\"let p of treandingProducts\" class=\"grid\">\n        <ion-card class=\"box-card\">\n          <ion-row>\n            <ion-col size=\"7\" no-padding>\n              <div class=\"rating-summary\">\n                <div class=\"rating-result\" title=\"{{p.rating}}%\">\n                  <span [ngStyle]=\"{'width': p.rating + '%'}\"><span><span itemprop=\"ratingValue\">{{p.rating}}</span>% of\n                      <span itemprop=\"bestRating\">100</span></span></span>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"5\" no-padding *ngIf=\"!p.isWishList\">\n              <ion-button fill=\"clear\" class=\"fav\" (click)=\"addtoFav(p)\">\n                <ion-icon name=\"heart-empty\" class=\"clr-icon-heart\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"5\" no-padding *ngIf=\"p.isWishList\">\n                <ion-button fill=\"clear\" class=\"fav\" (click)=\"remvoeFav(p)\">\n                  <ion-icon name=\"heart\" class=\"clr-icon-heart\"></ion-icon>\n                </ion-button>\n              </ion-col>\n          </ion-row>\n          <div class=\"img-div\" (click)=\"gotoProductPage(p.id, p.name)\">\n            <img *ngIf=\"p.base_img\" src=\"{{productBaseURL + p.base_img}}\" class=\"product-pic\" />\n            <img *ngIf=\"!p.base_img\" src=\"../../assets/img/no-image-icon-4.png\" class=\"product-pic\" />\n            <ion-badge *ngIf=\"p.rewardPoint > 0\">EARN {{p.rewardPoint}}</ion-badge>\n          </div>\n          <div class=\"hr\"></div>\n          <div class=\"product-footer\">\n            <ion-item text-wrap lines=\"none\" style=\"--padding-start: 0px;\">\n              <ion-label class=\"title\" (click)=\"gotoProductPage(p.id, p.name)\">{{p.name | titlecase}}</ion-label>\n            </ion-item>\n            <ion-text class=\"first-price-container\">\n              <del *ngIf=\"p.special_price != null\" class=\"first-price\">PKR {{p.price | number}}</del>\n            </ion-text>\n            <ion-text class=\"usd-price\">\n              {{p.usd_price}}\n            </ion-text>\n            <ion-text class=\"final-price\" *ngIf=\"!p.special_price\">\n              PKR {{p.price | number}}\n            </ion-text>\n            <ion-text class=\"final-price\" *ngIf=\"p.special_price != null\">\n              PKR {{p.special_price | number}}\n            </ion-text>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ng-container>\n<ng-template #elseTreandingItems>\n    <ion-grid class=\"grid\">\n      <ion-row style=\"padding: 5px;\">\n        <ion-col size=\"6\" class=\"grid\">\n          <ion-card class=\"box-card\">\n            <ion-row>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-row>\n            <div class=\"img-div\" style=\"height: 150px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div class=\"hr\"></div>\n            <div class=\"product-footer\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\" class=\"grid\">\n            <ion-card class=\"box-card\">\n              <ion-row>\n                  <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-row>\n              <div class=\"img-div\" style=\"height: 150px;\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div class=\"hr\"></div>\n              <div class=\"product-footer\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                  <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </ion-card>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page {\n  --background: #f1f1f1; }\n  .home-page .home-slides {\n    height: 170px;\n    width: 100%; }\n  .home-page .home-slides .slide-pic {\n      height: 170px;\n      width: 100%;\n      margin: 0px;\n      object-fit: cover; }\n  .home-page .item-spc {\n    padding-bottom: 0px;\n    margin-bottom: 0px; }\n  .img-div {\n  width: 100%;\n  float: left; }\n  .box-card {\n  box-shadow: 0px 0px 0px 0px;\n  border-radius: 0px;\n  margin: 5px;\n  background: #fff; }\n  .final-price {\n  font-weight: bold;\n  text-align: right;\n  width: 100%;\n  display: block;\n  font-size: 14px;\n  color: #CEAD65;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n  .first-price-container {\n  width: 100%;\n  display: block;\n  height: 18px; }\n  .first-price-container .first-price {\n    font-size: 14px;\n    color: grey; }\n  .header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0 0; }\n  ion-badge {\n  border-radius: 0px;\n  position: absolute;\n  bottom: 115px;\n  right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7RUFEakI7SUFJUSxhQUFhO0lBQ2IsV0FBVyxFQUFBO0VBTG5CO01BUVksYUFBYTtNQUNiLFdBQVc7TUFDWCxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUFYN0I7SUFnQlEsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTtFQUdmO0VBRUksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWUsRUFBQTtFQUVqQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWSxFQUFBO0VBSGQ7SUFNSSxlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBSWpCO0VBQ0ksdUJBQWUsRUFBQTtFQUduQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdle1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcblxuICAgIC5ob21lLXNsaWRlc3tcbiAgICAgICAgaGVpZ2h0OiAxNzBweDsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5zbGlkZS1waWN7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3MHB4OyBcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1zcGN7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxufVxuXG4uaW1nLWRpdntcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5ib3gtY2FyZHtcbiAgICAvL2JveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNWQ1ZTVlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICB9XG4gIC5maW5hbC1wcmljZXtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICBjb2xvcjogI0NFQUQ2NTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cblxuICAuZmlyc3QtcHJpY2UtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMThweDtcblxuICAuZmlyc3QtcHJpY2V7XG4gICAgICBmb250LXNpemU6IDE0cHg7IFxuICAgICAgY29sb3I6IGdyZXk7XG4gIH1cbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG5cbmlvbi1iYWRnZXtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTE1cHg7XG4gICAgcmlnaHQ6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _component_search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/search/search.page */ "./src/app/component/search/search.page.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");













var HomePage = /** @class */ (function () {
    function HomePage(config, router, statusBar, auth, alertCtrl, notify, platform, appVersion, market, modal, rest, service) {
        var _this = this;
        this.config = config;
        this.router = router;
        this.statusBar = statusBar;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.notify = notify;
        this.platform = platform;
        this.appVersion = appVersion;
        this.market = market;
        this.modal = modal;
        this.rest = rest;
        this.service = service;
        this.isLoaded = false;
        this.newNotify = false;
        this.sliderOptions = {
            zoom: false,
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loopFillGroupWithBlank: true,
        };
        this.SliderArray = [];
        this.popularProducts = [];
        this.treandingProducts = [];
        this.currencySymbol = 'PKR';
        this.productBaseURL = this.config.productImageURL;
        this.wishlistItems = [];
        this.isWishList = false;
        this.appVersion.getVersionCode().then(function (val) { _this.currentVersion = val; });
        console.log('currentVersion:', this.currentVersion);
        this.service.getAppVersion().subscribe(function (val) {
            var appUdateData = val[0];
            if (_this.platform.is('ios')) {
                if (_this.currentVersion < appUdateData.ios.ios_version) {
                    _this.presentUpdateAlert(appUdateData.ios.ios_package, appUdateData.ios.ios_message);
                }
            }
            else {
                if (_this.currentVersion < appUdateData.android.android_version) {
                    _this.presentUpdateAlert(appUdateData.android.android_package, appUdateData.android.android_message);
                }
            }
        });
        this.wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
        this.service.getHomePagePopularProducts().subscribe(function (val) {
            var popularVal = val[0].product_popular;
            var popularlstData = popularVal.map(function (x) { x.isWishList = false; return x; });
            if (_this.wishlistItems && _this.wishlistItems.length > 0) {
                var finalArray = [];
                var _loop_1 = function (i) {
                    var element = popularlstData[i];
                    var hasElement = _this.wishlistItems.find(function (x) { return x.product.id == element.id; });
                    if (hasElement) {
                        element.isWishList = true;
                    }
                    ;
                    finalArray.push(element);
                };
                for (var i = 0; i < popularlstData.length; i++) {
                    _loop_1(i);
                }
                ;
                _this.popularProducts = finalArray;
            }
            else {
                _this.popularProducts = popularlstData;
            }
            console.log('popular product:', _this.popularProducts);
            var tandingVal = val[0].product_treanding;
            console.log('tandingVal:', tandingVal);
            var trandinglstData = tandingVal.map(function (x) { x.isWishList = false; return x; });
            if (_this.wishlistItems && _this.wishlistItems.length > 0) {
                var finalArray = [];
                var _loop_2 = function (i) {
                    var element = trandinglstData[i];
                    var hasElement = _this.wishlistItems.find(function (x) { return x.product.id == element.id; });
                    if (hasElement) {
                        element.isWishList = true;
                    }
                    ;
                    finalArray.push(element);
                };
                for (var i = 0; i < trandinglstData.length; i++) {
                    _loop_2(i);
                }
                ;
                _this.treandingProducts = finalArray;
            }
            else {
                _this.treandingProducts = trandinglstData;
            }
            _this.service.getMobileAppSlider().subscribe(function (val) {
                var imgArray = val.content;
                var imgReplace = imgArray.replace(/<\/?[^>]+(>|$)/g, "");
                _this.SliderArray = imgReplace.split(',');
                _this.isLoaded = true;
            }, function (err) {
                console.log('HomePage Banner Slider Error', err);
            });
        }, function (err) {
            console.log('HomePage Product Error :', err);
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.unReadCount.subscribe(function (val) {
            console.log(val);
            if (val > 0) {
                _this.newNotify = true;
            }
            else if (val == 0) {
                _this.newNotify = false;
            }
        });
    };
    HomePage.prototype.presentUpdateAlert = function (packageName, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Update Available!',
                            message: message,
                            backdropDismiss: false,
                            buttons: [{
                                    text: 'UPDATE',
                                    handler: function () {
                                        _this.market.open(packageName);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    HomePage.prototype.openNotification = function () {
        this.router.navigate(['/notifications']);
    };
    HomePage.prototype.openSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _component_search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.gotoProductPage = function (PId, PName) {
        var navigationExtras = {
            queryParams: {
                product_id: JSON.stringify(PId),
                product_name: JSON.stringify(PName)
            }
        };
        this.router.navigate(['/productdetail'], navigationExtras);
    };
    HomePage.prototype.addtoFav = function (product) {
        var _this = this;
        var LoggedIn = this.auth.isAuthenticated();
        if (LoggedIn) {
            console.log('product:', product);
            this.auth.getToken().then(function (token) {
                var body = {
                    "sku": product.sku
                };
                _this.service.addProductToWishlist(token, body).subscribe(function (val) {
                    product.isWishList = true;
                    _this.rest.presentToastOptionsWithOutClose('Added into wishlist.', 'top');
                    _this.rest.wishlist();
                }, function (err) {
                    if (err.status == 401) {
                        var stateURL = _this.router.routerState.snapshot.url;
                        _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                    }
                    else {
                        _this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
                    }
                    console.log('wishlist Err', err);
                });
            }, function (err) {
                var stateURL = _this.router.routerState.snapshot.url;
                _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
            });
        }
        else {
            console.log('test');
            this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
        }
    };
    HomePage.prototype.remvoeFav = function (product) {
        var _this = this;
        var LoggedIn = this.auth.isAuthenticated();
        if (LoggedIn) {
            console.log('product:', product);
            this.auth.getToken().then(function (token) {
                var lstwishData = _this.wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
                var itemWish = lstwishData.find(function (x) { x = x.product.id == product.id; return x; });
                _this.service.removeProductFromWishlist(token, itemWish.item_id).subscribe(function (val) {
                    product.isWishList = false;
                    _this.rest.presentToastOptionsWithOutClose('This Product remove from wishlist.', 'top');
                    _this.rest.wishlist();
                }, function (err) {
                    if (err.status == 401) {
                        var stateURL = _this.router.routerState.snapshot.url;
                        console.log('stateURL:', stateURL);
                        _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                    }
                    else {
                        _this.rest.presentToastOptionsWithOutClose('We can\'t remove this product into wishlist.', 'top');
                    }
                    console.log('wishlist Err', err);
                });
            }, function (err) {
                _this.router.navigate(['singin']);
            });
        }
        else {
            console.log('test');
            this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"],
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__["Market"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__["MagentoServiceService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map