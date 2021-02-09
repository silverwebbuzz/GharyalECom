(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/signin\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" text-center>Sign Up</ion-title>\n  </ion-toolbar>\n  <!-- <div class=\"hr\"></div> -->\n</ion-header>\n\n<ion-content class=\"grad\" fullscreen>\n\n  <!-- <ion-item class=\"head\">\n      <ion-toolbar color=\"transparent\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n          </ion-buttons>\n          <ion-title color=\"light\" text-center>Sign Up</ion-title>\n        </ion-toolbar>\n    </ion-item> -->\n\n  <img src=\"../assets/img/logo.png\" class=\"logo-signup\" />\n\n  <br>\n  <form class=\"list-form\" [formGroup]=\"registration_form\" autocomplete=\"off\">\n  <ion-item class=\"input-email\">\n    <ion-label position=\"floating\" color=\"light\">\n      <img src=\"../assets/icon/user-icon.png\" class=\"input-email-icon\" />\n      <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n      First Name\n    </ion-label>\n    <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\n  </ion-item>\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.firstname.hasError('required') && registration_form.controls.firstname.touched\">\n      <p>Please Enter First Name!</p>\n    </ion-item>\n\n  <ion-item class=\"input-email\">\n    <ion-label position=\"floating\" color=\"light\">\n      <img src=\"../assets/icon/user-icon.png\" class=\"input-email-icon\" />\n      <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n      Last Name\n    </ion-label>\n    <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n  </ion-item>\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.lastname.hasError('required') && registration_form.controls.lastname.touched\">\n      <p>Please Enter a Last Name!</p>\n    </ion-item>\n\n  <ion-item class=\"input-email\">\n    <ion-label position=\"floating\" color=\"light\">\n      <img src=\"../assets/icon/email-icon.png\" class=\"input-email-icon\" />\n      <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n      Email\n    </ion-label>\n    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n  </ion-item>\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.email.hasError('required') && registration_form.controls.email.touched\">\n      <p>Email Address is required!</p>\n    </ion-item>\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.email.hasError('pattern') && registration_form.controls.email.touched\">\n      <p>Please Enter a Valid Email Address!</p>\n    </ion-item>\n\n  <ion-item class=\"input-email\">\n    <ion-label position=\"floating\" color=\"light\">\n      <img src=\"../assets/icon/key-icon.png\" class=\"input-email-icon\" />\n      <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n      Password\n    </ion-label>\n    <ion-input [type]=\"passwordType\" formControlName=\"password\"></ion-input>\n    <ion-icon name=\"eye\" [color]=\"passwordShown === true ? 'primary' : 'light'\" slot=\"end\" (click)=\"togglePassword()\"></ion-icon>\n  </ion-item>\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.password.hasError('required') && registration_form.controls.password.touched\">\n      <p>Please Enter a Password!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.password.hasError('minlength') && registration_form.controls.password.touched\">\n      <p>The password needs at least 8 characters.</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.password.hasError('pattern') && registration_form.controls.password.touched\">\n      <p>Please Enter One Upper Case and One Lower Case, One Spacial Characters and One Number</p>\n    </ion-item>\n\n  <ion-item class=\"input-pass\">\n    <ion-label position=\"floating\" color=\"light\">\n      <img src=\"../assets/icon/key-icon.png\" class=\"input-email-icon\" />\n      <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n      Confirm Password\n    </ion-label>\n    <ion-input type=\"password\" formControlName=\"confirmpassword\"></ion-input>\n  </ion-item>\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"registration_form.controls.confirmpassword.hasError('required') && registration_form.controls.confirmpassword.touched\">\n      <p>Please Enter a Confirm Password!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n    *ngIf=\"registration_form.get('confirmpassword').errors && registration_form.get('confirmpassword').errors.confirmpassword\">\n    <p>Passwords must match!</p>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"check\">\n      <ion-checkbox mode=\"md\" class=\"check-icon\" formControlName=\"subscribefield\" (ionChange)=\"toggleCheckbox()\" checked></ion-checkbox>\n      <ion-label color=\"light\">Subscribe Our News</ion-label>\n  </ion-item>\n\n  <ion-button shape=\"round\" class=\"btn\" size=\"large\" expand=\"full\" (click)=\"submitRegister()\">\n    SIGN UP\n  </ion-button>\n  </form>\n  <ion-button fill=\"clear\" color=\"light\" class=\"btn-text\" routerLink=\"/signin\">Already have an account? &nbsp; <ion-text\n      color=\"primary\"> Sign In</ion-text>\n  </ion-button>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  --background: #cead65;\n  text-transform: none;\n  font-size: 16px;\n  color: #fff;\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-bottom: 15px;\n  margin-top: 0px; }\n\n.check {\n  --background: transparent;\n  margin-bottom: 20px;\n  margin-right: 40px;\n  margin-left: 40px; }\n\n.check .check-icon {\n    margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFFbkI7RUFDRSx5QkFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBSm5CO0lBT0ksaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XG4gICAgLS1iYWNrZ3JvdW5kOiAjY2VhZDY1O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDo0MHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IFxuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuLmNoZWNre1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXG4gIC5jaGVjay1pY29ue1xuICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helper/must-match.validator */ "./src/app/_helper/must-match.validator.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SignupPage = /** @class */ (function () {
    function SignupPage(statusBar, service, api, router, formBuilder) {
        this.statusBar = statusBar;
        this.service = service;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.login_back_url = '/signin';
        this.passwordShown = false;
        this.passwordType = 'password';
        this.subscribeCheckbox = true;
        this.registration_fb();
    }
    SignupPage.prototype.ngOnInit = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#090809');
    };
    SignupPage.prototype.registration_fb = function () {
        this.registration_form = this.formBuilder.group({
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subscribefield: [null]
        }, { validator: _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["ConfirmPasswordValidator"].MatchPassword });
    };
    ;
    SignupPage.prototype.submitRegister = function () {
        var _this = this;
        for (var v in this.registration_form.controls) {
            this.registration_form.controls[v].markAsTouched();
        }
        if (this.registration_form.valid) {
            this.api.presentLoading();
            var body = {
                "customer": {
                    "email": this.registration_form.value.email,
                    "firstname": this.registration_form.value.firstname,
                    "lastname": this.registration_form.value.lastname
                },
                "password": this.registration_form.value.password,
                "extension_attributes": {
                    "is_subscribed": this.subscribeCheckbox
                }
            };
            this.service.createUser(body).subscribe(function (data) {
                _this.api.dismissLoading();
                _this.api.presentToastWithOptions('Thank you for Regsitration! Please login and countinue.', '', 'top');
                _this.router.navigate([_this.login_back_url]);
            }, function (err) {
                console.log(err.error.message);
                _this.api.dismissLoading();
                _this.api.presentToastWithOptions(err.error.message);
            });
        }
    };
    SignupPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    SignupPage.prototype.toggleCheckbox = function () {
        if (this.subscribeCheckbox) {
            this.subscribeCheckbox = false;
        }
        else {
            this.subscribeCheckbox = true;
        }
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__["MagentoServiceService"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map