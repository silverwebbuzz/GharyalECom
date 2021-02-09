(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "./src/app/faq/faq.module.ts":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/faq/faq.page.ts");







var routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]
    }
];
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());



/***/ }),

/***/ "./src/app/faq/faq.page.html":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>FAQ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding class=\"page-faq\">\n    <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n    <ion-grid class=\"grid\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let faq of faqCategories\" class=\"col\" (click)=\"faqDetails(faq.category_id, faq.title)\">\n            <ion-card class=\"box-card\">\n              <img *ngIf=\"faq.image\" [src]=\"mediaURL + faq.image\" class=\"faq-pic\"/>\n              <img *ngIf=\"!faq.image\" src=\"../../assets/img/faq.png\" class=\"faq-pic\"/>\n              <!-- <div class=\"hr\"></div> -->\n              <div class=\"spc\">\n                <ion-text class=\"title\">{{faq.title | titlecase}}\n                </ion-text>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ng-container>\n    <ng-template #elseTemplate>\n        <ion-grid class=\"grid\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let item of arrayOne(12)\" class=\"col\">\n                <ion-card class=\"box-card\">\n                    <ion-skeleton-text animated style=\"width: 100%;height:130px;\"></ion-skeleton-text>\n                  <!-- <div class=\"hr\"></div> -->\n                  <div class=\"spc\">\n                      <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n                  </div>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n    </ng-template>\n\n      <!-- <ion-item style=\"color: #cead65\" lines=\"full\">\n        FREQUENTLY ASKED QUESTIONS\n    </ion-item>\n  \n    <ion-card style=\"box-shadow: 0px 0px 0px 0px\">\n  \n      <ion-item lines=\"full\" style=\"--padding-start: 0px;\" (click)=\"hide()\">\n          <ion-icon name=\"add\"></ion-icon>\n          Can I cancel/edit my order ?\n      </ion-item>\n            <ion-card-content *ngIf=\"hideMe\">\n                At Gharyal.com, your satisfaction is our utmost priority; hence you can become our ‘Loyal customer’ by doing the following:\n  \n                On your first purchase, you can get 10 points worth 0000 PKR and redeem it on your next purchase and so on.\n                Please note you can become our loyal customer on purchase above 0000 PKR.\n  \n                <ion-item lines=\"none\">\n                <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" style=\"text-transform: none;\">\n                    READ MORE >\n                  </ion-button>\n                </ion-item>\n  \n            </ion-card-content>\n    </ion-card> -->\n  \n    <!-- <ion-item style=\"color: #cead65\" lines=\"full\">\n        LATEST QUESTIONS\n    </ion-item> -->\n\n    <!-- <ion-card style=\"box-shadow: 0px 0px 0px 0px\">\n  \n      <ion-item lines=\"full\" style=\"--padding-start: 0px;\" (click)=\"hide()\">\n          <ion-icon name=\"add\"></ion-icon>\n          Can I cancel/edit my order ?\n      </ion-item>\n            <ion-card-content *ngIf=\"hideMe\">\n                At Gharyal.com, your satisfaction is our utmost priority; hence you can become our ‘Loyal customer’ by doing the following:\n  \n                On your first purchase, you can get 10 points worth 0000 PKR and redeem it on your next purchase and so on.\n                Please note you can become our loyal customer on purchase above 0000 PKR.\n  \n                <ion-item lines=\"none\">\n                <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" style=\"text-transform: none;\">\n                    READ MORE >\n                  </ion-button>\n                </ion-item>\n  \n            </ion-card-content>\n    </ion-card> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/faq/faq.page.scss":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  -webkit-margin-start: 5px;\n          margin-inline-start: 5px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px; }\n\n.page-faq {\n  --background: #f1f1f1; }\n\n.page-faq .grid {\n    padding: 0px; }\n\n.page-faq .grid .col {\n      padding: 0 !important; }\n\n.page-faq .grid .col .title {\n        font-size: 12px;\n        color: #000; }\n\n.faq-pic {\n  padding-bottom: 0px;\n  height: 150px;\n  width: 100%;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQ0o7VUFESSxzQkFDSixFQUFBOztBQUNBO0VBQ0kscUJBQWEsRUFBQTs7QUFEakI7SUFJUSxZQUFXLEVBQUE7O0FBSm5CO01BT1kscUJBQW9CLEVBQUE7O0FBUGhDO1FBVW9CLGVBQWM7UUFDZCxXQUFXLEVBQUE7O0FBSy9CO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNXB4XG59XG4ucGFnZS1mYXF7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gICAgLmdyaWR7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuXG4gICAgICAgIC5jb2x7XG4gICAgICAgICAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7IFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uZmFxLXBpY3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4OyBcbiAgICBoZWlnaHQ6IDE1MHB4OyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/faq/faq.page.ts":
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");







var FaqPage = /** @class */ (function () {
    function FaqPage(config, navCtrl, service, rest, statusBar) {
        var _this = this;
        this.config = config;
        this.navCtrl = navCtrl;
        this.service = service;
        this.rest = rest;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.ByFAQArray = [];
        this.hideMe = false;
        this.buttonIcon = "add";
        this.faqCategories = [];
        this.mediaURL = this.config.mediaURL;
        this.service.getfaqCategories().subscribe(function (val) {
            _this.isLoaded = true;
            _this.faqCategories = val;
            console.log(_this.faqCategories);
        }, function (err) {
            _this.isLoaded = true;
            _this.rest.presentToastOptionsWithOutClose('Something Wrong try again.');
            console.log('faq Cat Err:', err);
        });
    }
    FaqPage.prototype.ngOnInit = function () {
    };
    FaqPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    FaqPage.prototype.back = function () {
        this.navCtrl.navigateRoot(['/tabs/home']);
    };
    FaqPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    FaqPage.prototype.faqDetails = function (catId, catName) {
        this.rest.presentLoading();
        this.navCtrl.navigateForward(['/faqdetails'], { queryParams: { catId: catId, catName: catName } });
    };
    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.page.html */ "./src/app/faq/faq.page.html"),
            styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/faq/faq.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__["MagentoServiceService"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], FaqPage);
    return FaqPage;
}());



/***/ })

}]);
//# sourceMappingURL=faq-faq-module.js.map