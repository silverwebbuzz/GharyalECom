(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqdetails-faqdetails-module"],{

/***/ "./src/app/faqdetails/faqdetails.module.ts":
/*!*************************************************!*\
  !*** ./src/app/faqdetails/faqdetails.module.ts ***!
  \*************************************************/
/*! exports provided: FaqdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqdetailsPageModule", function() { return FaqdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faqdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faqdetails.page */ "./src/app/faqdetails/faqdetails.page.ts");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/fesm5/angular2-collapsible.js");








var routes = [
    {
        path: '',
        component: _faqdetails_page__WEBPACK_IMPORTED_MODULE_6__["FaqdetailsPage"]
    }
];
var FaqdetailsPageModule = /** @class */ (function () {
    function FaqdetailsPageModule() {
    }
    FaqdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_7__["CollapsibleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_faqdetails_page__WEBPACK_IMPORTED_MODULE_6__["FaqdetailsPage"]]
        })
    ], FaqdetailsPageModule);
    return FaqdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/faqdetails/faqdetails.page.html":
/*!*************************************************!*\
  !*** ./src/app/faqdetails/faqdetails.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{catName}} - FAQS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-item style=\"color: #cead65\" lines=\"full\">\n      FREQUENTLY ASKED QUESTIONS\n  </ion-item> -->\n\n  <ion-card style=\"box-shadow: 0px 0px 0px 0px; border-radius: 0px;\">\n    <collapsible-list [type]=\"'accordion'\">\n      <collapsible-list-item *ngFor=\"let faq of faqList; let i = index;\">\n        <collapsible-header class=\"waves-effect\">\n          <ion-item class=\"desc-head\" lines=\"none\">\n            {{faq.title}}\n            <ion-icon name=\"arrow-down\" slot=\"end\" mode=\"ios\"></ion-icon>\n          </ion-item>\n        </collapsible-header>\n        <collapsible-body [expanded]=\"i == 0 ?true:false\" class=\"body-spc\">\n          <ion-row class=\"detail-spc\">\n            <div class=\"description-value\" [innerHTML]='faq.content'></div>\n          </ion-row>\n        </collapsible-body>\n      </collapsible-list-item>\n    </collapsible-list>\n  </ion-card>\n\n  <!-- <ion-item style=\"color: #cead65\" lines=\"full\">\n      LATEST QUESTIONS\n  </ion-item> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/faqdetails/faqdetails.page.scss":
/*!*************************************************!*\
  !*** ./src/app/faqdetails/faqdetails.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0px !important; }\n\ncollapsible-header {\n  padding-left: 0px;\n  line-height: 2rem;\n  padding-right: 0px; }\n\ncollapsible-list {\n  margin: 0px; }\n\ncollapsible-body {\n  padding: 0px 16px 0px 16px;\n  background: #f1f1f1;\n  box-shadow: 0px 0px 0px 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvZmFxZGV0YWlscy9mYXFkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQixFQUFBOztBQUV6QjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixzQ0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZhcWRldGFpbHMvZmFxZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBtYXJnaW46MHB4ICFpbXBvcnRhbnQ7XG59XG5jb2xsYXBzaWJsZS1oZWFkZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuY29sbGFwc2libGUtbGlzdHtcbiAgICBtYXJnaW46IDBweDtcbn1cbmNvbGxhcHNpYmxlLWJvZHl7XG4gICAgcGFkZGluZzogMHB4IDE2cHggMHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/faqdetails/faqdetails.page.ts":
/*!***********************************************!*\
  !*** ./src/app/faqdetails/faqdetails.page.ts ***!
  \***********************************************/
/*! exports provided: FaqdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqdetailsPage", function() { return FaqdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");







var FaqdetailsPage = /** @class */ (function () {
    function FaqdetailsPage(navCtrl, route, rest, service, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.rest = rest;
        this.service = service;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.hideMe = false;
        this.buttonIcon = "add";
        this.catId = 0;
        this.catName = '';
        this.faqList = [];
        this.route.queryParams.subscribe(function (params) {
            _this.catId = params.catId;
            _this.catName = params.catName;
            _this.service.getfaqList(_this.catId).subscribe(function (val) {
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
                _this.faqList = val;
                console.log(_this.faqList);
            }, function (err) {
                console.log(err);
            });
        });
    }
    FaqdetailsPage.prototype.ngOnInit = function () {
    };
    FaqdetailsPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    FaqdetailsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    FaqdetailsPage.prototype.hide = function () {
        if (this.hideMe == true) {
            this.hideMe = false;
            this.buttonIcon = "remove";
        }
        else {
            this.hideMe = true;
            this.buttonIcon = "add";
        }
    };
    FaqdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faqdetails',
            template: __webpack_require__(/*! ./faqdetails.page.html */ "./src/app/faqdetails/faqdetails.page.html"),
            styles: [__webpack_require__(/*! ./faqdetails.page.scss */ "./src/app/faqdetails/faqdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__["MagentoServiceService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], FaqdetailsPage);
    return FaqdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=faqdetails-faqdetails-module.js.map