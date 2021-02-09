(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My Account\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"account-page\">\n\n  <ion-card>\n    <img src=\"../assets/img/Avatar.png\" class=\"profile\" />\n    <ion-text class=\"header\">{{userDetails.firstname | titlecase}} {{userDetails.lastname | titlecase}}</ion-text>\n  </ion-card>\n\n  <div class=\"hr\"></div>\n\n    <!-- <ion-item lines=\"full\" routerLink=\"/product-review\" mode=\"md\">\n      <ion-label>\n        My Product Reviews\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item> -->\n    \n    <ion-item lines=\"full\" routerLink=\"/newsletter\" mode=\"md\">\n      <ion-label>\n        Newsletter Subscriptions\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" routerLink=\"/wishlist\" mode=\"md\">\n      <ion-label>\n        My Wish List\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" routerLink=\"/rewards\" mode=\"md\">\n      <ion-label>\n        My Reward Points\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" routerLink=\"/account-info\" mode=\"md\">\n      <ion-label>\n        Account Information\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" routerLink=\"/address\" mode=\"md\">\n      <ion-label>\n        Address Book\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" mode=\"md\" (click)=\"logout()\">\n      <ion-label>\n        Logout\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\" color=\"black;\"></ion-icon>\n    </ion-item>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-page ion-item {\n  display: inline; }\n\n.account-page ion-card {\n  text-align: center;\n  box-shadow: 0px 0px 0px 0px; }\n\n.account-page .profile {\n  height: 70px;\n  width: 70px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n.account-page .header {\n  color: black;\n  font-weight: bold;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGVBQWUsRUFBQTs7QUFGdkI7RUFLUSxrQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBTm5DO0VBVVEsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBYjNCO0VBaUJRLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LXBhZ2V7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbiAgICAucHJvZmlsZXtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDsgXG4gICAgICAgIG1hcmdpbjogYXV0bzsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXJ7XG4gICAgICAgIGNvbG9yOiBibGFjazsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var AccountPage = /** @class */ (function () {
    function AccountPage(statusBar, router, route, auth, rest, alertCtrl) {
        this.statusBar = statusBar;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.auth.set_login_back_url('/tabs/myaccount');
    }
    AccountPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.params.subscribe(function (url) {
                    _this.getUserDetails();
                });
                return [2 /*return*/];
            });
        });
    };
    AccountPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.statusBar.styleLightContent();
                        this.statusBar.backgroundColorByHexString('#5d5e5e');
                        return [4 /*yield*/, this.getUserDetails()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.getUserDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_KEY)) {
                            this.router.navigate(['signin']);
                        }
                        this.userDetails = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_KEY));
                        this.route.params.subscribe(function (val) {
                        });
                        return [4 /*yield*/, true];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AccountPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm !',
                            message: 'Are you sure you want to logout ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                }, {
                                    text: 'Logout',
                                    handler: function () {
                                        window.localStorage.removeItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_KEY);
                                        _this.auth.logout();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map