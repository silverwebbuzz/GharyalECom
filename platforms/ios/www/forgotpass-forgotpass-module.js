(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpass-forgotpass-module"],{

/***/ "./src/app/forgotpass/forgotpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]
    }
];
var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.html":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/signin\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" text-center>Forgot Password</ion-title>\n  </ion-toolbar>\n  <!-- <div class=\"hr\"></div> -->\n</ion-header>\n\n<ion-content class=\"grad\" fullscreen>\n\n  <!-- <ion-item class=\"head\">\n    <ion-toolbar color=\"transparent\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title color=\"light\" text-center>Forgot Password</ion-title>\n      </ion-toolbar>\n  </ion-item> -->\n\n  <img src=\"../assets/img/key.png\" class=\"circle-pic\" />\n\n  <br>\n\n  <ion-text color=\"light\">YO ! Forgot your password?</ion-text>\n  <form [formGroup]=\"forgot_form\" autocomplete=\"off\">\n    <ion-item class=\"fp-input-email\">\n      <ion-label position=\"floating\" color=\"light\">\n        <img src=\"../assets/icon/email-icon.png\" class=\"fp-input-email-icon\" />\n        <!-- <ion-icon name=\"mail\" mode=\"ios\" color=\"primary\" \"></ion-icon> -->\n        Email address\n      </ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"forgot_form.controls.email.hasError('required') && forgot_form.controls.email.touched\">\n      <p>Email Address is required!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"forgot_form.controls.email.hasError('pattern') && forgot_form.controls.email.touched\">\n      <p>Please Enter a Valid Email Address!</p>\n    </ion-item>\n\n    <ion-button shape=\"round\" class=\"btn\" size=\"large\" expand=\"full\" (click)=\"forgotPassword()\">\n      RESET MY PASSWORD\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  --background: #cead65;\n  text-transform: none;\n  font-size: 16px;\n  color: #fff;\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIC0tYmFja2dyb3VuZDogI2NlYWQ2NTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6NDBweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4OyBcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");







var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(navCtrl, formBuilder, api, service, statusBar) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.service = service;
        this.statusBar = statusBar;
        this.forgotpass_fb();
    }
    ForgotpassPage.prototype.ngOnInit = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#090809');
    };
    ForgotpassPage.prototype.forgotpass_fb = function () {
        this.forgot_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])]
        });
    };
    ;
    ForgotpassPage.prototype.forgotPassword = function () {
        var _this = this;
        for (var v in this.forgot_form.controls) {
            this.forgot_form.controls[v].markAsTouched();
        }
        if (this.forgot_form.valid) {
            this.api.presentLoading();
            var body = {
                "email": this.forgot_form.value.email,
                "template": "email_reset",
                "websiteId": 1
            };
            var email = this.forgot_form.value.email;
            this.service.forgotPassword(body)
                .subscribe(function (data) {
                var msg = 'If there is an account associated with ' + email + ' you will receive an email with a link to reset your password.';
                _this.api.dismissLoading();
                _this.api.presentToastWithOptions(msg, '', 'top');
            }, function (err) {
                _this.api.dismissLoading();
                _this.api.presentToastWithOptions('Something Wrong Please try again.');
            });
        }
    };
    ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.page.html */ "./src/app/forgotpass/forgotpass.page.html"),
            styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/forgotpass/forgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__["MagentoServiceService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpass-forgotpass-module.js.map