(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsletter-newsletter-module"],{

/***/ "./src/app/newsletter/newsletter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.module.ts ***!
  \*************************************************/
/*! exports provided: NewsletterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterPageModule", function() { return NewsletterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsletter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter.page */ "./src/app/newsletter/newsletter.page.ts");







var routes = [
    {
        path: '',
        component: _newsletter_page__WEBPACK_IMPORTED_MODULE_6__["NewsletterPage"]
    }
];
var NewsletterPageModule = /** @class */ (function () {
    function NewsletterPageModule() {
    }
    NewsletterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsletter_page__WEBPACK_IMPORTED_MODULE_6__["NewsletterPage"]]
        })
    ], NewsletterPageModule);
    return NewsletterPageModule;
}());



/***/ }),

/***/ "./src/app/newsletter/newsletter.page.html":
/*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n        Newsletter Subscriptions\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item lines=\"none\" class=\"header\">\n    Subscription Option\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-checkbox mode=\"md\" (ionChange)=\"toggleCheckbox()\" [checked]=\"isSubscribe\"></ion-checkbox>\n    <ion-label>\n      General Subscription\n    </ion-label>\n  </ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" (click)=\"updateUserInformation()\">\n    SAVE\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/newsletter/newsletter.page.scss":
/*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  --background: #f1f1f1;\n  font-weight: bold; }\n\nion-checkbox {\n  margin-right: 10px; }\n\nion-button {\n  margin: 0px; }\n\nion-card {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px 0px;\n  padding: 10px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvbmV3c2xldHRlci9uZXdzbGV0dGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZXdzbGV0dGVyL25ld3NsZXR0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8tLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5pb24tY2hlY2tib3h7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1jYXJke1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/newsletter/newsletter.page.ts":
/*!***********************************************!*\
  !*** ./src/app/newsletter/newsletter.page.ts ***!
  \***********************************************/
/*! exports provided: NewsletterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterPage", function() { return NewsletterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var NewsletterPage = /** @class */ (function () {
    function NewsletterPage(navCtrl, rest, service, auth, router) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.isSubscribe = false;
    }
    NewsletterPage.prototype.ngOnInit = function () {
        this.UserInfo = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_KEY));
        if (this.UserInfo.extension_attributes.is_subscribed) {
            this.isSubscribe = true;
        }
    };
    NewsletterPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/tabs/account']);
    };
    NewsletterPage.prototype.updateUserInformation = function () {
        var _this = this;
        var body = {
            "customer": {
                "id": this.UserInfo.id,
                "firstname": this.UserInfo.firstname,
                "lastname": this.UserInfo.lastname,
                "extension_attributes": {
                    "is_subscribed": this.isSubscribe
                },
                "email": this.UserInfo.email,
                "storeId": 1,
                "websiteId": 1
            }
        };
        this.rest.presentLoading();
        this.auth.getToken().then(function (token) {
            _this.service.updateCustomerInformation(body, token).subscribe(function (res) {
                if (res) {
                    _this.rest.dismissLoading();
                    var userResponse = res;
                    window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_KEY, JSON.stringify(userResponse));
                    if (userResponse.addresses) {
                        userResponse.addresses.id = -100;
                        var addresse = new Array();
                        addresse.push(userResponse.addresses);
                        if (userResponse.default_billing) {
                            window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].SELECTED_ADDRESS_BILLING, JSON.stringify(userResponse.default_billing));
                        }
                        if (userResponse.default_shipping) {
                            window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].SELECTED_ADDRESS_SHIPPING, JSON.stringify(userResponse.default_shipping));
                        }
                        window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].SELECTED_ADDRESS_LIST, JSON.stringify(addresse));
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
    };
    NewsletterPage.prototype.toggleCheckbox = function () {
        if (this.isSubscribe) {
            this.isSubscribe = false;
        }
        else {
            this.isSubscribe = true;
        }
    };
    NewsletterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! ./newsletter.page.html */ "./src/app/newsletter/newsletter.page.html"),
            styles: [__webpack_require__(/*! ./newsletter.page.scss */ "./src/app/newsletter/newsletter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__["MagentoServiceService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], NewsletterPage);
    return NewsletterPage;
}());



/***/ })

}]);
//# sourceMappingURL=newsletter-newsletter-module.js.map