(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"],{

/***/ "./src/app/billing/billing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/billing/billing.module.ts ***!
  \*******************************************/
/*! exports provided: BillingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPageModule", function() { return BillingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _billing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing.page */ "./src/app/billing/billing.page.ts");







var routes = [
    {
        path: '',
        component: _billing_page__WEBPACK_IMPORTED_MODULE_6__["BillingPage"]
    }
];
var BillingPageModule = /** @class */ (function () {
    function BillingPageModule() {
    }
    BillingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_billing_page__WEBPACK_IMPORTED_MODULE_6__["BillingPage"]]
        })
    ], BillingPageModule);
    return BillingPageModule;
}());



/***/ }),

/***/ "./src/app/billing/billing.page.html":
/*!*******************************************!*\
  !*** ./src/app/billing/billing.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Shipping Information\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"billing-page\">\n\n  <ng-container *ngIf=\"defaultBillingAddress\">\n    <ion-item mode=\"md\" lines=\"none\" class=\"dark\">\n      <ion-label>\n        Billing Address\n      </ion-label>\n      <ion-button fill=\"clear\" (click)=\"ChangeBillingAddress()\" class=\"btn-change\">\n        Change\n        <ion-icon mode=\"ios\" name=\"arrow-forward\" class=\"btn-icon\"></ion-icon>\n      </ion-button>\n\n    </ion-item>\n\n    <ion-card class=\"card-1\">\n      <ion-row class=\"spc\"><b>{{defaultBillingAddress.firstname | titlecase}}\n          {{defaultBillingAddress.lastname | titlecase}}</b> </ion-row>\n      <ion-row class=\"spc\">{{defaultBillingAddress.street.join(', ')}} ,{{defaultBillingAddress.city}},\n        {{defaultBillingAddress.region.region}}, {{defaultBillingAddress.postcode}}</ion-row>\n      <ion-row class=\"spc\">{{defaultBillingAddress.country_id}}</ion-row>\n      <ion-row class=\"spc\"><b>T: </b> {{defaultBillingAddress.telephone}}</ion-row>\n    </ion-card>\n  </ng-container>\n  <ng-container *ngIf=\"!defaultBillingAddress\">\n    <ion-item mode=\"md\" lines=\"none\" class=\"dark\">\n      <ion-label>\n        Billing Address\n      </ion-label>\n    </ion-item>\n    <ion-card class=\"card-1\">\n      <ion-row class=\"spc\"><b>No any addresses found.</b> </ion-row>\n\n    </ion-card>\n  </ng-container>\n  <ng-container *ngIf=\"defaultShippingAddress\">\n    <ion-item mode=\"md\" lines=\"none\" class=\"dark\">\n      <ion-label>\n        Shipping Address\n      </ion-label>\n      <ion-button fill=\"clear\" (click)=\"ChangeShippingAddress()\" class=\"btn-change\"> \n        Change\n        <ion-icon mode=\"ios\" name=\"arrow-forward\" class=\"btn-icon\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <ion-card class=\"card-1\">\n      <ion-row class=\"spc\"><b>{{defaultShippingAddress.firstname | titlecase}}\n          {{defaultShippingAddress.lastname | titlecase}}</b></ion-row>\n      <ion-row class=\"spc\">{{defaultShippingAddress.street.join(', ')}} ,{{defaultShippingAddress.city}},\n        {{defaultShippingAddress.region.region}}, {{defaultShippingAddress.postcode}}</ion-row>\n      <ion-row class=\"spc\">{{defaultBillingAddress.country_id}}</ion-row>\n      <ion-row class=\"spc\"><b>T: </b>{{defaultShippingAddress.telephone}}</ion-row>\n    </ion-card>\n  </ng-container>\n  <ng-container *ngIf=\"!defaultShippingAddress\">\n    <ion-item mode=\"md\" lines=\"none\" class=\"dark\">\n      <ion-label>\n        Shipping Address\n      </ion-label>\n    </ion-item>\n    <ion-card class=\"card-1\">\n      <ion-row class=\"spc\"><b>No any addresses found.</b> </ion-row>\n\n    </ion-card>\n  </ng-container>\n  <ion-card class=\"card-2\">\n    <ion-button expand=\"full\" (click)=\"addNewAddress()\">\n      <ion-icon name=\"add\" ></ion-icon>\n      <ion-label>Add New Address</ion-label>\n    </ion-button>\n  </ion-card>\n  <!-- <ion-card class=\"card-2\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item class=\"dropdown\" lines=\"full\">\n      <ion-label>Country</ion-label>\n      <ion-select okText=\"Select\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"brown\">India</ion-select-option>\n        <ion-select-option value=\"blonde\">US</ion-select-option>\n        <ion-select-option value=\"black\">UK</ion-select-option>\n        <ion-select-option value=\"red\">UAE</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Pin code</ion-label>\n      <ion-input type=\"number\"></ion-input>\n    </ion-item>\n  </ion-card> -->\n\n  <ion-item lines=\"none\" class=\"dark\">\n    <ion-label>\n      Shipping Methods\n    </ion-label>\n  </ion-item>\n\n  <ion-card class=\"card-1\">\n    <ion-radio-group>\n      <ion-item lines=\"none\" *ngFor=\"let method of shippingMethod;let i = index;\" class=\"btn-radio\">\n        <ion-label>{{method.carrier_title | titlecase}} - {{method.method_title | titlecase}}</ion-label>\n        <ion-radio slot=\"start\" value=\"biff\" mode=\"md\" (ionSelect)=\"changeShippingOption(method)\" [checked]=\"i === 0\"></ion-radio>\n        <ion-text slot=\"end\">{{cartShippingInfo.currency.quote_currency_code}} {{method.amount | number}}</ion-text>\n      </ion-item>\n    </ion-radio-group>\n  </ion-card>\n\n  <ion-card class=\"card-1\" *ngIf=\"!shippingMethod\">\n      <ion-radio-group>\n        <ion-item lines=\"none\">\n          Please select shipping address.\n        </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-button class=\"next\" expand=\"full\" size=\"large\" (click)=\"goToCheckout()\">\n        NEXT\n      </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/billing/billing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/billing/billing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billing-page .dropdown {\n  margin-top: 20px; }\n\n.btn-change {\n  margin: 0px;\n  font-weight: bold;\n  font-size: 14px;\n  --padding-end: 0px; }\n\n.btn-change .btn-icon {\n    color: #cead65; }\n\n.btn-radio {\n  --padding-start: 5px; }\n\n.dark {\n  font-weight: bold;\n  -webkit-padding-end: 0px;\n  padding-inline-end: 0px;\n  --background: #f1f1f1; }\n\n.card-1 {\n  color: black;\n  margin: 0px;\n  box-shadow: 0px 0px 0px 0px;\n  padding: 0px 10px 5px 10px;\n  background: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvYmlsbGluZy9iaWxsaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFjLEVBQUE7O0FBSmxCO0lBT1EsY0FBYyxFQUFBOztBQUl0QjtFQUNJLG9CQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy9iaWxsaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLXBhZ2V7XG5cbiAgICAuZHJvcGRvd257XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuXG4uYnRuLWNoYW5nZXtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgLmJ0bi1pY29ue1xuICAgICAgICBjb2xvcjogI2NlYWQ2NTtcbiAgICB9XG59XG5cbi5idG4tcmFkaW97XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG5cbi5kYXJre1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4uY2FyZC0xe1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDsgXG4gICAgcGFkZGluZzogMHB4IDEwcHggNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/billing/billing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/billing/billing.page.ts ***!
  \*****************************************/
/*! exports provided: BillingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPage", function() { return BillingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _api_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/cart.service */ "./src/app/api/cart.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _component_shipping_address_shipping_address_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/shipping-address/shipping-address.page */ "./src/app/component/shipping-address/shipping-address.page.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _component_addnewaddress_addnewaddress_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/addnewaddress/addnewaddress.page */ "./src/app/component/addnewaddress/addnewaddress.page.ts");











var BillingPage = /** @class */ (function () {
    function BillingPage(router, navCtrl, cart, auth, modalCtrl, rest, service, statusBar) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.rest = rest;
        this.service = service;
        this.statusBar = statusBar;
        this.auth.set_login_back_url('/billing');
        this.getCartShippingDetails();
    }
    BillingPage.prototype.ngOnInit = function () {
    };
    BillingPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    BillingPage.prototype.getCartShippingDetails = function () {
        var _this = this;
        var cartId = this.cart.cartId;
        this.service.getCartShippingDetails(cartId).subscribe(function (val) {
            _this.cartShippingInfo = val;
            _this.CustomerInformation = val.customer;
            _this.AllCustomerAddress = val.customer.addresses;
            console.log('cartShoppingInfo:', _this.cartShippingInfo);
            if (val.customer.addresses.length > 0) {
                for (var i = 0; i < val.customer.addresses.length; i++) {
                    if (val.customer.addresses[i].default_shipping) {
                        _this.defaultShippingAddress = val.customer.addresses[i];
                    }
                    if (val.customer.addresses[i].default_billing) {
                        _this.defaultBillingAddress = val.customer.addresses[i];
                    }
                }
                _this.auth.getToken().then(function (token) {
                    var body = {
                        addressId: _this.defaultShippingAddress.id
                    };
                    _this.service.getShippingMethod(body, token).subscribe(function (val) {
                        _this.shippingMethod = val;
                        _this.selectedshippingMethod = val[0];
                        console.log(_this.selectedshippingMethod);
                        if (_this.rest.isLoading) {
                            _this.rest.dismissLoading();
                        }
                    }, function (err) {
                        if (err.status == 401) {
                            if (_this.rest.isLoading) {
                                _this.rest.dismissLoading();
                            }
                            var stateURL = _this.router.routerState.snapshot.url;
                            _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                        }
                        console.log('Shipping Method Err:', err);
                    });
                });
            }
            else {
                _this.defaultShippingAddress = null;
                _this.defaultBillingAddress = null;
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
            }
        }, function (err) {
            if (_this.rest.isLoading) {
                _this.rest.dismissLoading();
            }
            console.log('Billing Error:', err);
            _this.rest.presentToastWithOptions('Something Wrong Try Please again.');
            _this.navCtrl.navigateBack(['/tabs/mycart']);
        });
    };
    BillingPage.prototype.goToCheckout = function () {
        var _this = this;
        var cartId = this.cart.cartId;
        if (!this.defaultBillingAddress) {
            this.rest.presentToastWithOptions('Please Select Billing Address');
            return false;
        }
        if (!this.defaultShippingAddress) {
            this.rest.presentToastWithOptions('Please Select Shipping Address');
            return false;
        }
        if (!this.selectedshippingMethod) {
            this.rest.presentToastWithOptions('Please Select One Shipping Method');
            return false;
        }
        this.rest.presentLoading();
        var companyName = null;
        if (this.defaultBillingAddress.company) {
            companyName = this.defaultBillingAddress.company;
        }
        var billingbody = {
            address: {
                region: this.defaultBillingAddress.region.region,
                region_id: this.defaultBillingAddress.region_id,
                region_code: this.defaultBillingAddress.region.region_code,
                country_id: this.defaultBillingAddress.country_id,
                street: this.defaultBillingAddress.street,
                company: companyName,
                telephone: this.defaultBillingAddress.telephone,
                postcode: this.defaultBillingAddress.postcode,
                city: this.defaultBillingAddress.city,
                firstname: this.defaultBillingAddress.firstname,
                lastname: this.defaultBillingAddress.lastname,
                customer_id: this.CustomerInformation.id,
                email: this.CustomerInformation.email,
                customer_address_id: this.defaultBillingAddress.id,
                save_in_address_book: 1
            },
            useForShipping: false
        };
        console.log('billingbody:', billingbody);
        this.service.createbillingManagement(cartId, billingbody).subscribe(function (val) {
            var body = {
                addressInformation: {
                    shipping_address: {
                        city: _this.defaultShippingAddress.city,
                        country_id: _this.defaultShippingAddress.country_id,
                        firstname: _this.defaultShippingAddress.firstname,
                        lastname: _this.defaultShippingAddress.lastname,
                        postcode: _this.defaultShippingAddress.postcode,
                        street: _this.defaultShippingAddress.street,
                        region: _this.defaultShippingAddress.region.region,
                        region_id: _this.defaultShippingAddress.region_id,
                        telephone: _this.defaultShippingAddress.telephone,
                        customer_id: _this.CustomerInformation.id,
                        email: _this.CustomerInformation.email
                    },
                    billing_address: {
                        city: _this.defaultBillingAddress.city,
                        country_id: _this.defaultBillingAddress.country_id,
                        firstname: _this.defaultBillingAddress.firstname,
                        lastname: _this.defaultBillingAddress.lastname,
                        postcode: _this.defaultBillingAddress.postcode,
                        street: _this.defaultBillingAddress.street,
                        region: _this.defaultBillingAddress.region.region,
                        region_id: _this.defaultBillingAddress.region_id,
                        telephone: _this.defaultBillingAddress.telephone,
                        customer_id: _this.CustomerInformation.id,
                        email: _this.CustomerInformation.email
                    },
                    shippingCarrierCode: _this.selectedshippingMethod.carrier_code,
                    shippingMethodCode: _this.selectedshippingMethod.method_code,
                }
            };
            _this.service.getPaymentMethod(cartId, body).subscribe(function (val) {
                var navigationExtras = {
                    queryParams: {
                        paymentMethod: JSON.stringify(val),
                        shipping_address: JSON.stringify(_this.defaultShippingAddress)
                    }
                };
                _this.router.navigate(['/checkout'], navigationExtras);
            }, function (err) {
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
                _this.rest.presentToastWithOptions('Something Wrong Payment method not getting try again.');
                console.log('Payment Mehtod Err:', err);
            });
        }, function (err) {
            if (_this.rest.isLoading) {
                _this.rest.dismissLoading();
            }
            _this.rest.presentToastWithOptions('Billing Agreement Issue.Please try again.');
            console.log('billingManagement Err:', err);
        });
    };
    BillingPage.prototype.changeShippingOption = function (method) {
        this.selectedshippingMethod = method;
    };
    BillingPage.prototype.ChangeBillingAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changeshippingModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _component_shipping_address_shipping_address_page__WEBPACK_IMPORTED_MODULE_8__["ShippingAddressPage"],
                            componentProps: {
                                title: 'Billing Address',
                                type: 'billing',
                                defaultAddress: this.defaultBillingAddress,
                                address: this.AllCustomerAddress
                            },
                            showBackdrop: true,
                            mode: "ios",
                            cssClass: 'change-address-shipping-modal'
                        })];
                    case 1:
                        changeshippingModal = _a.sent();
                        changeshippingModal.onWillDismiss().then(function (data) {
                            if (data.role == 'billing') {
                                _this.defaultBillingAddress = data.data;
                            }
                            else if (data.role == "backdrop") {
                            }
                        });
                        return [4 /*yield*/, changeshippingModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BillingPage.prototype.ChangeShippingAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changeshippingModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _component_shipping_address_shipping_address_page__WEBPACK_IMPORTED_MODULE_8__["ShippingAddressPage"],
                            componentProps: {
                                title: 'Shipping Address',
                                type: 'shipping',
                                defaultAddress: this.defaultShippingAddress,
                                address: this.AllCustomerAddress
                            },
                            showBackdrop: true,
                            mode: "ios",
                            cssClass: 'change-address-shipping-modal'
                        })];
                    case 1:
                        changeshippingModal = _a.sent();
                        changeshippingModal.onWillDismiss().then(function (data) {
                            if (data.role == 'shipping') {
                                _this.defaultShippingAddress = data.data;
                                _this.rest.presentLoading();
                                _this.onChangeShippingAddress(_this.defaultShippingAddress.id);
                            }
                            else if (data.role == "backdrop") {
                            }
                        });
                        return [4 /*yield*/, changeshippingModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BillingPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/tabs/mycart']);
    };
    BillingPage.prototype.onChangeShippingAddress = function (addressId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.auth.getToken().then(function (token) {
                    var body = {
                        addressId: addressId
                    };
                    _this.service.getShippingMethod(body, token).subscribe(function (val) {
                        _this.shippingMethod = val;
                        _this.selectedshippingMethod = null;
                        if (_this.rest.isLoading) {
                            _this.rest.dismissLoading();
                        }
                    }, function (err) {
                        if (err.status == 401) {
                            if (_this.rest.isLoading) {
                                _this.rest.dismissLoading();
                            }
                            _this.router.navigate(['/signin']);
                        }
                        console.log('Shipping Method Err:', err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    BillingPage.prototype.addNewAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var addnewaddress;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _component_addnewaddress_addnewaddress_page__WEBPACK_IMPORTED_MODULE_10__["AddnewaddressPage"],
                            componentProps: {
                                customerInfo: this.CustomerInformation
                            },
                            showBackdrop: true,
                            mode: "ios"
                        })];
                    case 1:
                        addnewaddress = _a.sent();
                        addnewaddress.onWillDismiss().then(function (data) {
                            if (data.role != 'backdrop') {
                                _this.getCartShippingDetails();
                            }
                        });
                        return [4 /*yield*/, addnewaddress.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BillingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.page.html */ "./src/app/billing/billing.page.html"),
            styles: [__webpack_require__(/*! ./billing.page.scss */ "./src/app/billing/billing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _api_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_7__["MagentoServiceService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], BillingPage);
    return BillingPage;
}());



/***/ })

}]);
//# sourceMappingURL=billing-billing-module.js.map