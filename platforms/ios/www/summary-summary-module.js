(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["summary-summary-module"],{

/***/ "./src/app/summary/summary.module.ts":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/summary/summary.page.ts");







var routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]
    }
];
var SummaryPageModule = /** @class */ (function () {
    function SummaryPageModule() {
    }
    SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
                    swipeBackEnabled: false
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
        })
    ], SummaryPageModule);
    return SummaryPageModule;
}());



/***/ }),

/***/ "./src/app/summary/summary.page.html":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-title>\n        Order Received\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"summary-page\">\n\n  <ion-card class=\"main-card\">\n    <ion-label class=\"main-label\">THANK YOU FOR YOUR PURCHASE !</ion-label>\n    <ion-label class=\"order-label\">Your order number is : <b>{{OrderId | number}}</b></ion-label>\n    <ion-label class=\"track-label\">We'll you email you an order confirmation with details and tracking info.</ion-label>\n    <!-- <ion-button expand=\"full\" class=\"btn\">Print Receipt</ion-button> -->\n    <ion-button expand=\"full\" class=\"btn\" routerLink=\"/tabs/home\">Continue Shopping</ion-button>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/summary/summary.page.scss":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summary-page .main-card {\n  margin: 0px;\n  padding: 12px;\n  box-shadow: 0px 0px 0px 0px;\n  position: absolute;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  top: 50%;\n  background: #fff;\n  border-radius: 0px; }\n  .summary-page .main-card .main-label {\n    display: block;\n    font-weight: bold;\n    font-size: 16px;\n    color: black;\n    text-align: center;\n    margin-bottom: 25px; }\n  .summary-page .main-card .order-label {\n    display: block;\n    text-align: center;\n    margin-bottom: 5px; }\n  .summary-page .main-card .track-label {\n    display: block;\n    text-align: center;\n    margin-bottom: 25px; }\n  .summary-page .main-card .btn {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto; }\n  ion-header .title-ios {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFWMUI7SUFhWSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBbEIvQjtJQXFCWSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBdkI5QjtJQTBCWSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBNUIvQjtJQStCWSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUFNeEI7RUFFTSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeS1wYWdle1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIC5tYWluLWNhcmR7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgICAgIC5tYWluLWxhYmVse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9yZGVyLWxhYmVse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYWNrLWxhYmVse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG57XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAvL21hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgLnRpdGxlLWlvcyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/summary/summary.page.ts":
/*!*****************************************!*\
  !*** ./src/app/summary/summary.page.ts ***!
  \*****************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");






var SummaryPage = /** @class */ (function () {
    function SummaryPage(navCtrl, plateform, route, rest, router, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plateform = plateform;
        this.route = route;
        this.rest = rest;
        this.router = router;
        this.statusBar = statusBar;
        this.route.queryParams.subscribe(function (params) {
            if (params) {
                _this.OrderId = JSON.parse(params.OrderId);
                if (_this.rest.isLoading) {
                    _this.rest.dismissLoading();
                }
            }
            else {
                _this.router.navigate(['/tabs/home']);
            }
        });
        this.plateform.ready().then(function () {
            _this.plateform.backButton.subscribeWithPriority(99999, function () {
                _this.router.navigate(['/tabs/home']);
            });
        });
    }
    SummaryPage.prototype.ngOnInit = function () {
    };
    SummaryPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.page.html */ "./src/app/summary/summary.page.html"),
            styles: [__webpack_require__(/*! ./summary.page.scss */ "./src/app/summary/summary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], SummaryPage);
    return SummaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=summary-summary-module.js.map