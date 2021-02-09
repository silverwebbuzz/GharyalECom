(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");







var routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]
    }
];
var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.html":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"clr\" text-center>\n      <ion-buttons slot=\"start\">\n          <ion-button fill=\"clear\" (click)=\"back()\">\n              <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n            </ion-button>\n      </ion-buttons>\n      <ion-title>\n        My Wish List\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding class=\"wishlist-page\">\n\n    <ion-card class=\"empty-card\" *ngIf=\"isEmpty\">\n        <img src=\"../../assets/icon/empty-heart.png\" style=\"height: 150px; width: 150px; margin: auto;\" />\n        <ion-label style=\"display: block; font-weight: bold; text-align: center; margin-top: 15px;\">NO ITEMS</ion-label>\n        <ion-label style=\"display: block; text-align: center; margin-top: 8px; color: grey;\">You didn't added anything to wishlist yet\n        </ion-label>\n        <ion-button expand=\"full\"\n          style=\"color: #fff; width: fit-content; margin: auto; margin-top: 15px; margin-bottom: 15px;\"\n          (click)=\"goToHomePage()\">CONTINUE SHOPPING</ion-button>\n      </ion-card>\n\n  <div class=\"clr-back\" *ngIf=\"!isEmpty\">\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n    <ion-card class=\"card-2\" *ngFor=\"let item of wishlist_items\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img [src]=\"productImgURL + item.product.base_img\" class=\"wishlist-pic\"/>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-row class=\"spc no-spc\">\n            <ion-item text-wrap lines=\"none\" style=\"--padding-start: 0px;\">\n              <ion-label>{{item.product.name | titlecase}}</ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row class=\"spc no-spc\" *ngIf=\"!item.product.special_price\">\n            <ion-text>\n              {{currencySymbol}} {{item.product.price | number}}\n            </ion-text>\n          </ion-row>\n          <ion-row class=\"spc no-spc\" *ngIf=\"item.product.special_price != null\">\n            <ion-text>\n              {{currencySymbol}} {{item.product.special_price | number}}\n            </ion-text>\n          </ion-row>\n          <ion-row class=\"spc clr-spc\">\n            <ion-text>\n              <del *ngIf=\"item.product.special_price != null\" class=\"first-price\">{{currencySymbol}} {{item.product.special_price | number}}</del>\n            </ion-text>\n          </ion-row>\n          <ion-row class=\"spc ex-spc\" (click)=gotoProduct(item)>\n            <ion-button size=\"small\" extend=\"full\" shape=\"round\" class=\"btn-view\">\n              QUICK VIEW\n            </ion-button>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button fill=\"clear\" class=\"btn-cancel\" (click)=\"revmovefromWishlist(item)\">\n            <ion-icon name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- <div *ngIf=\"isEmpty\" class=\"no-data-found\">\n        No Products Found.\n      </div> -->\n      \n  </ng-container>\n\n\n  <ng-template #elseTemplate>\n\n      <ion-card class=\"card-2\" *ngFor=\"let item of arrayOne(5)\">\n          <ion-row>\n            <ion-col size=\"4\">\n                <ion-skeleton-text animated style=\"width: 100%;height:110px;\" class=\"title\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-row class=\"spc\">\n                <ion-text style=\"width: 100%;\">\n                    <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n                </ion-text>\n              </ion-row>\n              <ion-row class=\"spc\">\n                <ion-text style=\"width: 100%;\">\n                    <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n                </ion-text>\n              </ion-row>\n              <ion-row class=\"spc\">\n                <ion-text style=\"width: 100%;\">\n                    <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n                </ion-text>\n              </ion-row>\n              <ion-row class=\"spc\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n  </ng-template>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wishlist-page .wishlist-pic {\n  height: 130px;\n  width: 110px; }\n\n.wishlist-page .btn-view {\n  color: white;\n  font-size: 15px;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  position: absolute;\n  bottom: 5px; }\n\n.wishlist-page .btn-cancel {\n  color: black;\n  position: absolute;\n  top: 0px;\n  right: -10px; }\n\n.wishlist-page .btn-fav {\n  color: #cead65;\n  position: absolute;\n  padding: 0px;\n  bottom: 8px;\n  right: 2px; }\n\n.card-2 {\n  box-shadow: 0px 0px 0px 0px;\n  margin: 5px;\n  color: #000;\n  border-radius: 0px;\n  background: #fff; }\n\nion-label {\n  font-weight: bold;\n  margin: 0px; }\n\n.no-spc {\n  padding: 0px; }\n\n.clr-spc {\n  color: grey;\n  padding: 5px 0px; }\n\n.ex-spc {\n  padding: 5px 0px; }\n\n.clr-back {\n  background: #f1f1f1; }\n\n.empty-card {\n  box-shadow: 0px 0px 0px 0px;\n  color: #000;\n  margin: 0px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVEsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFMcEI7RUFTUSxZQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFibkI7RUFpQlEsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQXBCcEI7RUF3QlEsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXNobGlzdC1wYWdle1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gICAgLndpc2hsaXN0LXBpY3tcbiAgICAgICAgaGVpZ2h0OiAxMzBweDsgXG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICB9XG5cbiAgICAuYnRuLXZpZXd7XG4gICAgICAgIGNvbG9yOndoaXRlOyBcbiAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5idG4tY2FuY2Vse1xuICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgIH1cblxuICAgIC5idG4tZmF2e1xuICAgICAgICBjb2xvcjogI2NlYWQ2NTsgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICByaWdodDogMnB4O1xuICAgIH1cbn1cbi5jYXJkLTJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4OyBcbiAgICBtYXJnaW46IDVweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgXG4gIC5uby1zcGN7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuY2xyLXNwY3tcbiAgICBjb2xvcjogZ3JleTtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICB9XG5cbiAgLmV4LXNwY3tcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICB9XG5cbiAgLmNsci1iYWNre1xuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuXG4gIC5lbXB0eS1jYXJke1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDsgXG4gICAgY29sb3I6ICMwMDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");









var WishlistPage = /** @class */ (function () {
    function WishlistPage(config, navCtrl, rest, auth, service, router, statusBar) {
        this.config = config;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.wishlist_items = [];
        this.productImgURL = this.config.productImageURL;
        this.currencySymbol = 'PKR';
        this.isEmpty = false;
        this.getWishlist();
    }
    WishlistPage.prototype.ngOnInit = function () {
    };
    WishlistPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    WishlistPage.prototype.getWishlist = function () {
        var _this = this;
        this.auth.getToken().then(function (token) {
            _this.service.getWishlistProducts(token).subscribe(function (val) {
                _this.wishlist_items = val[0].wishlist_items;
                window.localStorage.setItem('wishListItems', JSON.stringify(_this.wishlist_items));
                if (_this.wishlist_items.length == 0) {
                    _this.isEmpty = true;
                }
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
                if (!_this.isLoaded) {
                    _this.isLoaded = true;
                }
            }, function (err) {
                if (err.status == 401) {
                    var stateURL = _this.router.routerState.snapshot.url;
                    _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                }
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
            });
        }, function (err) {
            var stateURL = _this.router.routerState.snapshot.url;
            _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
        });
    };
    WishlistPage.prototype.revmovefromWishlist = function (item) {
        var _this = this;
        this.rest.presentLoading();
        this.auth.getToken().then(function (token) {
            _this.service.removeProductFromWishlist(token, item.item_id).subscribe(function (val) {
                _this.getWishlist();
            }, function (err) {
                console.log('wishlist remove Err:', err);
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
            });
        });
    };
    WishlistPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    WishlistPage.prototype.gotoProduct = function (item) {
        var navigationExtras = {
            queryParams: {
                product_id: JSON.stringify(item.product.id),
                product_name: JSON.stringify(item.product.name)
            }
        };
        this.router.navigate(['/productdetail'], navigationExtras);
    };
    WishlistPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/tabs/account']);
    };
    WishlistPage.prototype.goToHomePage = function () {
        this.router.navigate(['/tabs/home']);
    };
    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.page.html */ "./src/app/wishlist/wishlist.page.html"),
            styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__["MagentoServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module.js.map