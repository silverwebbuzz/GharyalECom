(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-info-account-info-module"],{

/***/ "./src/app/account-info/account-info.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/account-info/account-info.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInfoPageModule", function() { return AccountInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-info.page */ "./src/app/account-info/account-info.page.ts");







var routes = [
    {
        path: '',
        component: _account_info_page__WEBPACK_IMPORTED_MODULE_6__["AccountInfoPage"]
    }
];
var AccountInfoPageModule = /** @class */ (function () {
    function AccountInfoPageModule() {
    }
    AccountInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_info_page__WEBPACK_IMPORTED_MODULE_6__["AccountInfoPage"]]
        })
    ], AccountInfoPageModule);
    return AccountInfoPageModule;
}());



/***/ }),

/***/ "./src/app/account-info/account-info.page.html":
/*!*****************************************************!*\
  !*** ./src/app/account-info/account-info.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Account Information\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"account-info\" [formGroup]=\"account_form\" autocomplete=\"off\">\n    <ion-item lines=\"none\" class=\"header\">\n      Basic Information\n    </ion-item>\n    <ion-item lines=\"none\" class=\"input-container\">\n      <ion-label position=\"floating\" class=\"input-label\">\n        First Name\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"firstname\" class=\"input-box\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"account_form.controls.firstname.hasError('required') && account_form.controls.firstname.touched\">\n      <p>First Name is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"input-container bottom-spc\">\n      <ion-label position=\"floating\" class=\"input-label\">\n        Last Name\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\" class=\"input-box\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"account_form.controls.lastname.hasError('required') && account_form.controls.lastname.touched\">\n      <p>Last Name is required!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"header\" (ionChange)=\"onChangeEmail()\">\n      <ion-checkbox mode=\"md\"></ion-checkbox>\n      <ion-label>\n        Change Email\n      </ion-label>\n    </ion-item>\n    <div *ngIf=\"visabilityEmail\">\n      <ion-item lines=\"none\" class=\"input-container bottom-spc\">\n        <ion-label position=\"floating\" class=\"input-label\">\n          Email\n        </ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" class=\"input-box\"></ion-input>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"account_form.controls.email.hasError('required') && account_form.controls.email.touched\">\n        <p>Email Address is required!</p>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"account_form.controls.email.hasError('pattern') && account_form.controls.email.touched\">\n        <p>Please Enter a Valid Email Address!</p>\n      </ion-item>\n    </div>\n\n    <ion-item lines=\"none\" class=\"header\" (ionChange)=\"onChangePass()\">\n      <ion-checkbox mode=\"md\"></ion-checkbox>\n      <ion-label>\n        Change Password\n      </ion-label>\n    </ion-item>\n    <div *ngIf=\"visabilityPass\">\n      <ion-item lines=\"none\" class=\"input-container\">\n        <ion-label position=\"floating\" class=\"input-label\">\n          New Password\n        </ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" class=\"input-box\"></ion-input>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"account_form.controls.password.hasError('minlength') && account_form.controls.password.touched\">\n        <p>The password needs at least 8 characters.</p>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"account_form.controls.password.hasError('pattern') && account_form.controls.password.touched\">\n        <p>Please Enter One Upper Case and One Lower Case, One Spacial Characters and One Number</p>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"input-container bottom-spc\">\n        <ion-label position=\"floating\" class=\"input-label\">\n          Confirm New Password\n        </ion-label>\n        <ion-input type=\"password\" formControlName=\"confirmpassword\" class=\"input-box\"></ion-input>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"account_form.controls.confirmpassword.hasError('required') && account_form.controls.confirmpassword.touched\">\n        <p>Please Enter a Confirm Password!</p>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"account_form.get('confirmpassword').errors && account_form.get('confirmpassword').errors.confirmpassword\">\n        <p>Passwords must match!</p>\n      </ion-item>\n\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" (click)=\"updateInformation()\">\n    SAVE\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/account-info/account-info.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account-info/account-info.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  --background: #f1f1f1;\n  font-weight: bold; }\n\nion-button {\n  margin: 0px; }\n\nion-checkbox {\n  margin-right: 10px; }\n\n.input-container {\n  --padding-start: 8px; }\n\n.input-container .input-label {\n    padding-left: 8px; }\n\n.input-container .input-box {\n    border: 1px solid #000;\n    --padding-start: 8px; }\n\n.bottom-spc {\n  padding-bottom: 15px; }\n\n.validator-error {\n  --background: transparent;\n  color: #d44848;\n  margin-left: 8px; }\n\n.validator-error p {\n    margin-bottom: 0px;\n    margin-top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvYWNjb3VudC1pbmZvL2FjY291bnQtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLG9CQUFnQixFQUFBOztBQURwQjtJQUlRLGlCQUFpQixFQUFBOztBQUp6QjtJQVFRLHNCQUFzQjtJQUN0QixvQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSx5QkFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFIcEI7SUFNUSxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC1pbmZvL2FjY291bnQtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLy0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cbmlvbi1idXR0b257XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tY2hlY2tib3h7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmlucHV0LWNvbnRhaW5lcntcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcblxuICAgIC5pbnB1dC1sYWJlbHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgLmlucHV0LWJveHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgfVxufVxuLmJvdHRvbS1zcGN7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi52YWxpZGF0b3ItZXJyb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2Q0NDg0ODtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuXG4gICAgcHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/account-info/account-info.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account-info/account-info.page.ts ***!
  \***************************************************/
/*! exports provided: AccountInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInfoPage", function() { return AccountInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helper/must-match.validator */ "./src/app/_helper/must-match.validator.ts");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var AccountInfoPage = /** @class */ (function () {
    function AccountInfoPage(navCtrl, formBuilder, service, rest, auth, router) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.rest = rest;
        this.auth = auth;
        this.router = router;
        this.visabilityEmail = false;
        this.visabilityPass = false;
        this.isCheckedEmail = false;
        this.isCheckedPass = false;
        this.UserInfo = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_KEY));
        this.account_fb();
    }
    AccountInfoPage.prototype.ngOnInit = function () {
    };
    AccountInfoPage.prototype.account_fb = function () {
        this.account_form = this.formBuilder.group({
            firstname: [this.UserInfo.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: [this.UserInfo.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.UserInfo.email],
            password: [null],
            confirmpassword: [null],
        }, { validator: _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["ConfirmPasswordValidator"].MatchPassword });
    };
    ;
    AccountInfoPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/tabs/account']);
    };
    AccountInfoPage.prototype.onChangeEmail = function () {
        if (this.isCheckedEmail = !this.isCheckedEmail) {
            this.visabilityEmail = true;
            this.account_form.get('email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])]);
        }
        else if (this.isCheckedEmail == this.isCheckedEmail) {
            this.visabilityEmail = false;
            this.account_form.controls.email.setErrors(null);
            this.account_form.controls.email.setValidators(null);
        }
    };
    AccountInfoPage.prototype.onChangePass = function () {
        if (this.isCheckedPass = !this.isCheckedPass) {
            this.visabilityPass = true;
            this.account_form.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])]);
            this.account_form.get('confirmpassword').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        }
        else if (this.isCheckedPass == this.isCheckedPass) {
            this.visabilityPass = false;
            this.account_form.controls.password.setErrors(null);
            this.account_form.controls.password.setValidators(null);
            this.account_form.controls.confirmpassword.setErrors(null);
            this.account_form.controls.confirmpassword.setValidators(null);
        }
    };
    AccountInfoPage.prototype.updateInformation = function () {
        var _this = this;
        if (!this.visabilityEmail) {
            this.account_form.controls.email.setErrors(null);
            this.account_form.controls.email.setValidators(null);
        }
        if (!this.visabilityPass) {
            this.account_form.controls.password.setErrors(null);
            this.account_form.controls.password.setValidators(null);
            this.account_form.controls.confirmpassword.setErrors(null);
            this.account_form.controls.confirmpassword.setValidators(null);
        }
        for (var v in this.account_form.controls) {
            this.account_form.controls[v].markAsTouched();
        }
        var body = {};
        if (this.visabilityEmail && this.visabilityPass) {
            body = {
                "customer": {
                    "id": this.UserInfo.id,
                    "firstname": this.account_form.value.firstname,
                    "lastname": this.account_form.value.lastname,
                    "email": this.account_form.value.email,
                    "storeId": 1,
                    "websiteId": 1
                },
                "passwordHash": this.account_form.value.password
            };
        }
        else if (this.visabilityEmail) {
            body = {
                "customer": {
                    "id": this.UserInfo.id,
                    "firstname": this.account_form.value.firstname,
                    "lastname": this.account_form.value.lastname,
                    "email": this.account_form.value.email,
                    "storeId": 1,
                    "websiteId": 1
                }
            };
        }
        else if (this.visabilityPass) {
            body = {
                "customer": {
                    "id": this.UserInfo.id,
                    "firstname": this.account_form.value.firstname,
                    "lastname": this.account_form.value.lastname,
                    "email": this.UserInfo.email,
                    "storeId": 1,
                    "websiteId": 1
                },
                "passwordHash": this.account_form.value.password
            };
        }
        else {
            body = {
                "customer": {
                    "id": this.UserInfo.id,
                    "firstname": this.account_form.value.firstname,
                    "lastname": this.account_form.value.lastname,
                    "email": this.UserInfo.email,
                    "storeId": 1,
                    "websiteId": 1
                }
            };
        }
        if (this.account_form.valid) {
            console.log('body:', body);
            this.rest.presentLoading();
            this.auth.getToken().then(function (token) {
                _this.service.updateCustomerInformation(body, token).subscribe(function (res) {
                    if (res) {
                        _this.rest.dismissLoading();
                        var userResponse = res;
                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_KEY, JSON.stringify(userResponse));
                        if (userResponse.addresses) {
                            userResponse.addresses.id = -100;
                            var addresse = new Array();
                            addresse.push(userResponse.addresses);
                            if (userResponse.default_billing) {
                                window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].SELECTED_ADDRESS_BILLING, JSON.stringify(userResponse.default_billing));
                            }
                            if (userResponse.default_shipping) {
                                window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].SELECTED_ADDRESS_SHIPPING, JSON.stringify(userResponse.default_shipping));
                            }
                            window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].SELECTED_ADDRESS_LIST, JSON.stringify(addresse));
                        }
                        _this.rest.presentToastWithOptions('Successfully Update Your Profile.');
                    }
                    else {
                        _this.rest.dismissLoading();
                        _this.rest.presentToastWithOptions('Something was wrong! Please try again.');
                    }
                }, function (err) {
                    console.log('err:', err);
                    if (_this.rest.isLoading) {
                        _this.rest.dismissLoading();
                    }
                    if (err.status == 401) {
                        var stateURL = _this.router.routerState.snapshot.url;
                        _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                        _this.rest.presentToastWithOptions(' Please login and try again.');
                    }
                    else {
                        _this.rest.presentToastWithOptions(err.error.message);
                    }
                });
            });
        }
    };
    AccountInfoPage.prototype.userDetails = function (res) {
    };
    AccountInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-info',
            template: __webpack_require__(/*! ./account-info.page.html */ "./src/app/account-info/account-info.page.html"),
            styles: [__webpack_require__(/*! ./account-info.page.scss */ "./src/app/account-info/account-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__["MagentoServiceService"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], AccountInfoPage);
    return AccountInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-info-account-info-module.js.map