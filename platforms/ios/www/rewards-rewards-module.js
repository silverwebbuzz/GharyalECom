(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rewards-rewards-module"],{

/***/ "./src/app/rewards/rewards.module.ts":
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.module.ts ***!
  \*******************************************/
/*! exports provided: RewardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards.page */ "./src/app/rewards/rewards.page.ts");







var routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]
    }
];
var RewardsPageModule = /** @class */ (function () {
    function RewardsPageModule() {
    }
    RewardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]]
        })
    ], RewardsPageModule);
    return RewardsPageModule;
}());



/***/ }),

/***/ "./src/app/rewards/rewards.page.html":
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      My Reward Points\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\">\n    Points Summary\n  </ion-item>\n  <ion-card>\n    <ion-label>\n      You have <b>&nbsp; 0 &nbsp;</b> in your account.\n    </ion-label>\n  </ion-card>\n  <ion-item lines=\"none\">\n    How To Earn Points\n  </ion-item>\n  <ion-card>\n    <ion-label>\n        EARN 10,000\n    </ion-label>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/rewards/rewards.page.scss":
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #f1f1f1;\n  font-weight: bold; }\n\nion-card {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px 0px;\n  padding: 10px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXdhcmRzL3Jld2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuaW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/rewards/rewards.page.ts":
/*!*****************************************!*\
  !*** ./src/app/rewards/rewards.page.ts ***!
  \*****************************************/
/*! exports provided: RewardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPage", function() { return RewardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var RewardsPage = /** @class */ (function () {
    function RewardsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RewardsPage.prototype.ngOnInit = function () {
    };
    RewardsPage.prototype.back = function () {
        this.navCtrl.navigateBack(['/tabs/account']);
    };
    RewardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rewards',
            template: __webpack_require__(/*! ./rewards.page.html */ "./src/app/rewards/rewards.page.html"),
            styles: [__webpack_require__(/*! ./rewards.page.scss */ "./src/app/rewards/rewards.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], RewardsPage);
    return RewardsPage;
}());



/***/ })

}]);
//# sourceMappingURL=rewards-rewards-module.js.map