(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"],{

/***/ "./src/app/address/address.module.ts":
/*!*******************************************!*\
  !*** ./src/app/address/address.module.ts ***!
  \*******************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/address/address.page.ts");







var routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }
];
var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
        })
    ], AddressPageModule);
    return AddressPageModule;
}());



/***/ }),

/***/ "./src/app/address/address.page.html":
/*!*******************************************!*\
  !*** ./src/app/address/address.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"clr\" text-center>\n      <ion-buttons slot=\"start\">\n          <ion-button fill=\"clear\" (click)=\"back()\">\n              <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n            </ion-button>\n      </ion-buttons>\n      <ion-title>\n        Address Book\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"address-page\">\n\n  <ion-card *ngFor=\"let add of addresses\">\n    <ion-row class=\"spc\"><b>Name :</b> <span>&nbsp;{{add.firstname}} {{add.lastname}}</span></ion-row>\n    <ion-row class=\"spc\"><b>Phone No :</b> <span>&nbsp;{{add.telephone}}</span></ion-row>\n    <ion-row class=\"spc\"><b> Address : </b> <span *ngFor=\"let s of add.street\">&nbsp;{{s}} </span></ion-row>\n    <ion-row class=\"spc\"><b> City :</b> <span>&nbsp;{{add.city}}</span></ion-row>\n    <ion-row class=\"spc\"><b> Region :</b> <span>&nbsp;{{add.region.region}}</span></ion-row>\n    <ion-row class=\"spc\"><b> Country :</b> <span>&nbsp;{{add.country_id}}</span></ion-row>\n    <ion-row *ngIf=\"add.default_billing\"><ion-badge color=\"primary\" class=\"address_label\" mode=\"md\">It's a default billing address.</ion-badge></ion-row>\n    <ion-row *ngIf=\"add.default_shipping\"><ion-badge color=\"primary\" class=\"address_label\" mode=\"md\">It's a default shipping address.</ion-badge></ion-row>\n    <ion-row text-center class=\"btn-group\">\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" class=\"btn\" (click)=\"editAddress(add)\">\n        <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n        Edit\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" class=\"btn\" (click)=\"deleteAddress(add)\">\n        <ion-icon name=\"trash\" mode=\"ios\"></ion-icon>\n        Delete\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button class=\"next\" expand=\"full\" size=\"large\" (click)=\"addNewAddress()\">\n    Add New Address\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/address/address.page.scss":
/*!*******************************************!*\
  !*** ./src/app/address/address.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-page {\n  --background: #f1f1f1; }\n  .address-page ion-card {\n    color: black;\n    margin: 5px;\n    box-shadow: 0px 0px 0px 0px;\n    padding: 8px;\n    background: #fff;\n    border-radius: 0px; }\n  .address-page ion-card .address_label {\n      width: 100%;\n      margin-bottom: 0px;\n      padding: 5px;\n      margin: 2px; }\n  .address-page .btn-group {\n    margin-top: 10px; }\n  .address-page .btn-group .btn {\n      box-shadow: 0px 0px 2px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7RUFEakI7SUFJUSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBVDFCO01BWVksV0FBVztNQUNYLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVyxFQUFBO0VBZnZCO0lBb0JRLGdCQUFnQixFQUFBO0VBcEJ4QjtNQXVCWSwyQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLXBhZ2V7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gICAgaW9uLWNhcmR7XG4gICAgICAgIGNvbG9yOiBibGFjazsgXG4gICAgICAgIG1hcmdpbjogNXB4OyBcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4OyBcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIFxuICAgICAgICAuYWRkcmVzc19sYWJlbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1ncm91cHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAuYnRue1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/address/address.page.ts":
/*!*****************************************!*\
  !*** ./src/app/address/address.page.ts ***!
  \*****************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var _component_editaddress_editaddress_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/editaddress/editaddress.page */ "./src/app/component/editaddress/editaddress.page.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _component_addnewaddress_addnewaddress_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/addnewaddress/addnewaddress.page */ "./src/app/component/addnewaddress/addnewaddress.page.ts");











var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, statusBar, auth, router, rest, alertCtrl, service, modalCtrl, route) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.auth = auth;
        this.router = router;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.SelectedBillingAddress = window.localStorage.getItem('SelectedAddressBilling');
        this.SelectedShippingAddress = window.localStorage.getItem('SelectedAddressShipping');
        this.country_list = [];
        this.route.params.subscribe(function (url) {
            if (!_this.auth.isAuthenticated()) {
                _this.router.navigate(['signin']);
                return false;
            }
            _this.service.getCountryList().subscribe(function (val) {
                _this.country_list = val;
            }, function (err) {
                console.log('Country List Err:', err);
            });
            var getAddress = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_LIST));
            _this.addresses = getAddress[0].reverse();
            console.log(_this.addresses);
        });
    }
    AddressPage.prototype.ngOnInit = function () {
    };
    AddressPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    AddressPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/tabs/account']);
    };
    AddressPage.prototype.editAddress = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectedCountry, editAddressModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedCountry = this.country_list.find(function (x) { if (x.id == address.country_id) {
                            return x;
                        } });
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _component_editaddress_editaddress_page__WEBPACK_IMPORTED_MODULE_7__["EditaddressPage"],
                                componentProps: {
                                    address: address,
                                    selectedCountry: selectedCountry
                                },
                                showBackdrop: true,
                                mode: "ios",
                            })];
                    case 1:
                        editAddressModal = _a.sent();
                        editAddressModal.onWillDismiss().then(function (data) {
                            var getAddress = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_LIST));
                            _this.addresses = getAddress[0].reverse();
                        });
                        return [4 /*yield*/, editAddressModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddressPage.prototype.deleteAddress = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var customerId, addressId, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerId = address.customer_id;
                        addressId = address.id;
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Confirmation',
                                message: 'Are you sure you want to delete this address?',
                                buttons: [
                                    {
                                        text: 'CANCEL',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                        }
                                    }, {
                                        text: 'OK',
                                        handler: function () {
                                            _this.rest.presentLoading();
                                            _this.service.deleteCustomerAddress(addressId).subscribe(function (val) {
                                                _this.service.getUserDetailbyId(customerId).subscribe(function (val) {
                                                    var userResponse = val;
                                                    window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_KEY, JSON.stringify(userResponse));
                                                    if (userResponse.addresses) {
                                                        userResponse.addresses.id = -100;
                                                        var addresse = new Array();
                                                        addresse.push(userResponse.addresses);
                                                        if (userResponse.default_billing) {
                                                            window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_BILLING, JSON.stringify(userResponse.default_billing));
                                                        }
                                                        if (userResponse.default_shipping) {
                                                            window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_SHIPPING, JSON.stringify(userResponse.default_shipping));
                                                        }
                                                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_LIST, JSON.stringify(addresse));
                                                    }
                                                    if (_this.rest.isLoading) {
                                                        _this.rest.dismissLoading();
                                                    }
                                                    _this.rest.presentToastWithOptions('You deleted the address.', '', 'top');
                                                    var getAddress = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_LIST));
                                                    _this.addresses = getAddress[0].reverse();
                                                }, function (err) {
                                                    if (_this.rest.isLoading) {
                                                        _this.rest.dismissLoading();
                                                    }
                                                    _this.rest.presentToastWithOptions('We can\'t Fetch addresses. Try to logout and login.');
                                                    console.log('Update Address Fetch User Err:', err);
                                                });
                                            }, function (err) {
                                                if (_this.rest.isLoading) {
                                                    _this.rest.dismissLoading();
                                                }
                                                _this.rest.presentToastWithOptions('We can\'t Delete this address. Please try again.');
                                                console.log('Update Address Err:', err);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddressPage.prototype.addNewAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var customerInformation, addnewaddress;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerInformation = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_KEY));
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _component_addnewaddress_addnewaddress_page__WEBPACK_IMPORTED_MODULE_10__["AddnewaddressPage"],
                                componentProps: {
                                    customerInfo: customerInformation
                                },
                                showBackdrop: true,
                                mode: "ios"
                            })];
                    case 1:
                        addnewaddress = _a.sent();
                        addnewaddress.onWillDismiss().then(function (data) {
                            _this.service.getUserDetailbyId(customerInformation.id).subscribe(function (val) {
                                var userResponse = val;
                                window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_KEY, JSON.stringify(userResponse));
                                if (userResponse.addresses) {
                                    userResponse.addresses.id = -100;
                                    var addresse = new Array();
                                    addresse.push(userResponse.addresses);
                                    if (userResponse.default_billing) {
                                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_BILLING, JSON.stringify(userResponse.default_billing));
                                    }
                                    if (userResponse.default_shipping) {
                                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_SHIPPING, JSON.stringify(userResponse.default_shipping));
                                    }
                                    window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_LIST, JSON.stringify(addresse));
                                }
                                if (_this.rest.isLoading) {
                                    _this.rest.dismissLoading();
                                }
                                var getAddress = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].SELECTED_ADDRESS_LIST));
                                _this.addresses = getAddress[0].reverse();
                            }, function (err) {
                                if (_this.rest.isLoading) {
                                    _this.rest.dismissLoading();
                                }
                                _this.rest.presentToastWithOptions('We can\'t Fetch addresses. Try to logout and login.');
                                console.log('Update Address Fetch User Err:', err);
                            });
                        });
                        return [4 /*yield*/, addnewaddress.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.page.html */ "./src/app/address/address.page.html"),
            styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/address/address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_9__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_8__["MagentoServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddressPage);
    return AddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=address-address-module.js.map