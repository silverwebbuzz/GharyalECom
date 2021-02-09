(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");







var routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]
    }
];
var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"2\" class=\"col-icon\">\n      <ion-icon name=\"pin\" size=\"large\" color=\"primary\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-row>\n        <ion-label class=\"header\">Visit our location</ion-label>\n      </ion-row>\n      <ion-row>\n          <ion-label class=\"body\">\n              8C, Lane 6, Zamzama, Boulevard, Phase V, Karachi, Pakistan\n            </ion-label>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"2\" class=\"col-icon\">\n        <ion-icon name=\"mail\" size=\"large\" color=\"primary\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-row>\n          <ion-label class=\"header\">Send us a message</ion-label>\n      </ion-row>\n      <ion-row>\n          <ion-label class=\"body clr-desc\" (click)=\"EmailOpen('info@gharyal.com')\">info@gharyal.com</ion-label>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col size=\"2\" class=\"col-icon\">\n          <ion-icon name=\"call\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n            <ion-label class=\"header\">Give us a call</ion-label>\n        </ion-row>\n        <ion-row>\n            <ion-label class=\"body clr-desc\" (click)=\"contactNo('+922135877559')\">+92 21 35877559</ion-label>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  <!-- <ion-item>\n    <ion-icon name=\"call\"></ion-icon>\n    &nbsp;\n    <ion-label>\n      <b>Address :</b>\n      8C, Lane 6, Zamzama, Boulevard, Phase V, Karachi, Pakistan\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"contactNo('+922135877559')\">\n    <ion-icon name=\"call\"></ion-icon>\n    &nbsp;\n    <ion-label>\n      <b>Phone :</b>\n      +92 21 35877559\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"EmailOpen('info@gharyal.com')\">\n    <ion-icon name=\"call\"></ion-icon>\n    &nbsp;\n    <ion-label>\n      <b>Email :</b>\n      info@gharyal.com\n    </ion-label>\n  </ion-item> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-weight: bold;\n  color: #000;\n  font-size: 20px;\n  padding: 5px; }\n\n.body {\n  color: grey;\n  font-size: 16px;\n  padding-left: 5px; }\n\n.col-icon {\n  margin: auto;\n  text-align: center; }\n\n.clr-desc {\n  color: #cead65;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmJvZHl7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNvbC1pY29ue1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2xyLWRlc2N7XG4gICAgY29sb3I6ICNjZWFkNjU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");




var ContactPage = /** @class */ (function () {
    function ContactPage(statusBar, callNumber) {
        this.statusBar = statusBar;
        this.callNumber = callNumber;
    }
    ContactPage.prototype.ngOnInit = function () {
    };
    ContactPage.prototype.contactNo = function (number) {
        this.callNumber.callNumber(number, true);
    };
    ContactPage.prototype.EmailOpen = function (email) {
        window.open('mailto:' + email);
    };
    ContactPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map