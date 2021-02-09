(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.html":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" text-center>Sign In</ion-title>\n  </ion-toolbar>\n  <!-- <div class=\"hr\"></div> -->\n</ion-header>\n\n<ion-content class=\"grad\" fullscreen>\n\n\n\n  <!-- <ion-item class=\"head\">\n      <ion-toolbar color=\"transparent\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n          </ion-buttons>\n          <ion-title color=\"light\" text-center>Sign In</ion-title>\n        </ion-toolbar>\n    </ion-item> -->\n\n  <img src=\"../assets/img/logo.png\" class=\"logo-signin\" />\n\n  <br>\n  <form class=\"list-form\" [formGroup]=\"login_form\" autocomplete=\"off\">\n    <ion-item class=\"input-email\">\n      <ion-label position=\"floating\" color=\"light\">\n        <img src=\"../assets/icon/email-icon.png\" class=\"input-email-icon\" />\n        <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n        Email\n      </ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"login_form.controls.email.hasError('required') && login_form.controls.email.touched\">\n      <p>Email Address is required!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"login_form.controls.email.hasError('pattern') && login_form.controls.email.touched\">\n      <p>Please Enter a Valid Email Address!</p>\n    </ion-item>\n\n    <ion-item class=\"input-pass\">\n      <ion-label position=\"floating\" color=\"light\">\n        <img src=\"../assets/icon/key-icon.png\" class=\"input-email-icon\" />\n        <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n        Password\n      </ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\n      <p>Password is required!</p>\n    </ion-item>\n\n    <ion-button shape=\"round\" class=\"btn\" size=\"large\" expand=\"full\" (click)=\"doLogin()\">\n      SIGN IN\n    </ion-button>\n  </form>\n\n    <div class=\"text-forgot-main\">\n      <ion-button fill=\"clear\" routerLink=\"/forgotpass\" class=\"right\">Forgot Password ?\n      </ion-button>\n    </div>\n\n    <div class=\"home_main_or\">\n      <div class=\"home_or\"><span>OR</span></div>\n    </div>\n\n    <ion-button class=\"btn-fb\" expand=\"block\">\n      Sign in with facebook\n    </ion-button>\n\n    <ion-button expand=\"block\" class=\"btn-google\">\n      Sign in with Google\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"light\" class=\"btn-text\" routerLink=\"/signup\">Don't have an\n      account? &nbsp;\n      <ion-text color=\"primary\"> Sign Up</ion-text>\n    </ion-button>\n  \n\n</ion-content>"

/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  --background: #cead65;\n  text-transform: none;\n  font-size: 16px;\n  color: #fff;\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-bottom: 25px;\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIC0tYmFja2dyb3VuZDogI2NlYWQ2NTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6NDBweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4OyBcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyBcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");









var SigninPage = /** @class */ (function () {
    function SigninPage(statusBar, formBuilder, rest, auth, router, route, service) {
        var _this = this;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.rest = rest;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.service = service;
        this.login_back_url = '/tabs/account';
        this.login_fb();
        this.route.queryParams.subscribe(function (params) {
            if (params && params.returnUrl) {
                _this.login_back_url = params.returnUrl;
            }
        });
    }
    SigninPage.prototype.login_fb = function () {
        this.login_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ;
    SigninPage.prototype.ngOnInit = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#090809');
    };
    SigninPage.prototype.doLogin = function () {
        var _this = this;
        for (var v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
        }
        if (this.login_form.valid) {
            this.rest.presentLoading();
            var body = {
                "username": this.login_form.value.email,
                "password": this.login_form.value.password
            };
            this.rest.post('integration/customer/token', body)
                .subscribe(function (res) {
                if (res) {
                    _this.userDetails(res);
                }
                else {
                    _this.rest.dismissLoading();
                    _this.rest.presentToastWithOptions('Something was wrong! Please try again.');
                }
            }, function (err) {
                _this.rest.dismissLoading();
                _this.rest.presentToastWithOptions(err.message);
            });
        }
    };
    SigninPage.prototype.userDetails = function (res) {
        var _this = this;
        this.auth.login(res).then(function (v) {
            _this.service.getUser(res).subscribe(function (data) {
                _this.rest.wishlist();
                _this.rest.dismissLoading();
                var userResponse = data;
                window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].USER_KEY, JSON.stringify(userResponse));
                if (userResponse.addresses) {
                    userResponse.addresses.id = -100;
                    var addresse = new Array();
                    addresse.push(userResponse.addresses);
                    if (userResponse.default_billing) {
                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].SELECTED_ADDRESS_BILLING, JSON.stringify(userResponse.default_billing));
                    }
                    if (userResponse.default_shipping) {
                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].SELECTED_ADDRESS_SHIPPING, JSON.stringify(userResponse.default_shipping));
                    }
                    window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].SELECTED_ADDRESS_LIST, JSON.stringify(addresse));
                }
                console.log('login Back Url:', _this.login_back_url);
                _this.router.navigate([_this.login_back_url]);
            }, function (err) {
                _this.rest.dismissLoading();
                _this.rest.presentToastWithOptions(err.error.message);
            });
        });
    };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_7__["MagentoServiceService"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module.js.map