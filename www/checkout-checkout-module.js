(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.page.html":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"clr\" text-center>\n      <ion-buttons slot=\"start\">\n          <ion-button fill=\"clear\" (click)=\"back()\">\n              <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n            </ion-button>\n      </ion-buttons>\n      <ion-title>\n        Checkout\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-item lines=\"none\" class=\"dark clr-head\">\n        <ion-label>\n          Select Payment Methods\n        </ion-label>\n      </ion-item>\n\n      <!-- <ion-card class=\"card-2\"> -->\n        <ion-radio-group>\n          <ion-item lines=\"full\" *ngFor=\"let method of paymentMethod;\">\n            <ion-label>\n              {{method.title | titlecase}}\n            </ion-label>\n            <ion-radio (ionSelect)=\"changePaymentMothod(method.code)\" slot=\"end\" mode=\"md\">\n            </ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      <!-- </ion-card> -->\n\n      <ion-item lines=\"none\" class=\"dark clr-head\">\n          <ion-label>Order Summary</ion-label>\n        </ion-item>\n\n      <ion-card class=\"card-1\">\n        <ion-row class=\"spc\">\n          <ion-col size=\"8\" class=\"spc-col\">Cart Subtotal</ion-col>\n          <ion-col size=\"4\" class=\"spc-col1\">{{totals.quote_currency_code}} {{totals.subtotal}}</ion-col>\n        </ion-row>\n        <ion-row class=\"spc\" *ngIf=\"totals.total_segments[0].code == 'rewards-total' && totals.total_segments[0].value\">\n          <ion-col size=\"8\" class=\"spc-col1\">{{totals.total_segments[0].title}} :</ion-col>\n          <ion-col size=\"4\" class=\"spc-col1\">{{totals.total_segments[0].value | number}}</ion-col>\n        </ion-row>\n        <ion-row class=\"spc\" *ngIf=\"totals.discount_amount != 0\">\n          <ion-col size=\"8\" class=\"spc-col\">Discount</ion-col>\n          <ion-col size=\"4\" class=\"spc-col1\">{{totals.discount_amount}}</ion-col>\n        </ion-row>\n        <ion-row class=\"spc\">\n          <ion-col size=\"8\" class=\"spc-col\">Shipping</ion-col>\n          <ion-col size=\"4\" class=\"spc-col1\">{{totals.quote_currency_code}} {{totals.shipping_amount}}</ion-col>\n        </ion-row>\n        <ion-row class=\"spc flat-label\">Flat Rate - Fixed</ion-row>\n      </ion-card>\n    \n      <ion-item lines=\"none\" class=\"dark\">\n        <ion-label>Order Total</ion-label>\n        <ion-label style=\"text-align: right;\">{{totals.quote_currency_code}} {{totals.grand_total}}</ion-label>\n      </ion-item>\n    \n      <ion-item lines=\"none\" class=\"dark clr-head\">\n        <ion-label>{{totals.items_qty}} Items in Cart</ion-label>\n      </ion-item>\n\n        <ion-card class=\"card-2\">\n          <ion-row *ngFor=\"let item of totals.items\">\n            <!-- <ion-col size=\"4\"><img src=\"../../assets/img/manwatch.jpg\" class=\"pic\" /></ion-col> -->\n            <ion-col size=\"12\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text><b>{{item.name}}</b></ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"amount\">\n                <ion-text color=\"primary\" class=\"final-price\">{{totals.quote_currency_code}} {{item.row_total}}</ion-text>\n              </ion-row>\n              <ion-text class=\"txt-qty\">Qty : {{item.qty}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-item lines=\"none\" class=\"dark clr-head\">\n          <ion-label>Ship To :</ion-label>\n        </ion-item>\n\n        <ion-card class=\"card-1\">\n          <ion-row class=\"spc\"><b>{{shippingAddress.firstname}} {{shippingAddress.lastname}}</b> </ion-row>\n          <ion-row class=\"spc\">{{shippingAddress.street.join(', ')}} ,{{shippingAddress.city}},\n              {{shippingAddress.region.region}}, {{shippingAddress.postcode}}</ion-row>\n          <ion-row class=\"spc\">{{shippingAddress.country_id}}</ion-row>\n          <ion-row class=\"spc\"><span><b>T: </b></span> {{shippingAddress.telephone}}</ion-row>\n        </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" class=\"next\" (click)=\"summary()\">\n    PLACE ORDER\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spc-col {\n  padding: 0px; }\n\n.spc-col1 {\n  padding: 0px;\n  font-weight: bold;\n  font-size: 13px; }\n\n.flat-label {\n  padding: 0px 0px 0px 5px;\n  color: grey; }\n\n.pic {\n  height: 100px;\n  width: 100px;\n  object-fit: cover; }\n\n.amount {\n  padding: 5px;\n  color: #CEAD65; }\n\n.final-price {\n  color: #CEAD65;\n  font-weight: bold; }\n\n.txt-qty {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  height: 25px !important;\n  margin: 0px;\n  width: 30px;\n  padding: 0px 5px;\n  color: black; }\n\n.clr-head {\n  --background: #f1f1f1;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsWUFBWSxFQUFBOztBQUVaO0VBQ0EsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWY7RUFDSSx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSwrQkFBZ0I7RUFDaEIsNkJBQWM7RUFDZCx1QkFBdUI7RUFDdkIsV0FBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHFCQUFhO0VBQ2IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYy1jb2x7XG5wYWRkaW5nOiAwcHg7XG59XG4uc3BjLWNvbDF7XG5wYWRkaW5nOiAwcHg7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogMTNweDtcbn1cbi5mbGF0LWxhYmVse1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cbi5waWN7XG4gICAgaGVpZ2h0OiAxMDBweDsgXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYW1vdW50e1xuICAgIHBhZGRpbmc6IDVweDsgXG4gICAgY29sb3I6ICNDRUFENjU7XG59XG4uZmluYWwtcHJpY2V7XG4gICAgY29sb3I6ICNDRUFENjU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udHh0LXF0eXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjowcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcGFkZGluZzogMHB4IDVweDsgXG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmNsci1oZWFke1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBjb2xvcjogIzAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/cart.service */ "./src/app/api/cart.service.ts");








var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(router, route, navCtrl, rest, service, cart, statusBar) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.service = service;
        this.cart = cart;
        this.statusBar = statusBar;
        this.selectedPaymentMethod = '';
        this.route.queryParams.subscribe(function (params) {
            if (params) {
                var dataparams = JSON.parse(params.paymentMethod);
                _this.shippingAddress = JSON.parse(params.shipping_address);
                console.log('data:', dataparams);
                _this.paymentMethod = dataparams.payment_methods;
                _this.totals = dataparams.totals;
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
            }
            else {
                _this.router.navigate(['/billing']);
            }
        });
    }
    CheckoutPage.prototype.ngOnInit = function () {
    };
    CheckoutPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    CheckoutPage.prototype.summary = function () {
        var _this = this;
        if (this.selectedPaymentMethod == '') {
            this.rest.presentToastWithOptions('Please Select Payment Method.');
            return false;
        }
        this.rest.presentLoading();
        var cartId = this.cart.cartId;
        var body = {
            paymentMethod: {
                method: this.selectedPaymentMethod
            }
        };
        this.service.createOrder(cartId, body).subscribe(function (val) {
            console.log('create Order Val:', val);
            window.localStorage.removeItem('cartId');
            window.localStorage.removeItem('cartItems');
            var navigationExtras = {
                queryParams: {
                    OrderId: JSON.stringify(val)
                }
            };
            _this.router.navigate(['/summary'], navigationExtras);
        }, function (err) {
            if (_this.rest.isLoading) {
                _this.rest.dismissLoading();
            }
            if (err.status == 404) {
                _this.rest.presentToastWithOptions('Your Cart is empty.');
                _this.router.navigate(['/tabs/mycart']);
            }
            else {
                _this.rest.presentToastWithOptions(err.error.message);
            }
            console.log('Order Creating Err:', err);
        });
        //this.router.navigate(['/summary']);
    };
    CheckoutPage.prototype.changePaymentMothod = function (value) {
        this.selectedPaymentMethod = value;
    };
    CheckoutPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/billing']);
    };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__["MagentoServiceService"],
            _api_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map