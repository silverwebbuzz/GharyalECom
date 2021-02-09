(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-sell-module"],{

/***/ "./src/app/sell/sell.module.ts":
/*!*************************************!*\
  !*** ./src/app/sell/sell.module.ts ***!
  \*************************************/
/*! exports provided: SellPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPageModule", function() { return SellPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sell_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sell.page */ "./src/app/sell/sell.page.ts");







var routes = [
    {
        path: '',
        component: _sell_page__WEBPACK_IMPORTED_MODULE_6__["SellPage"]
    }
];
var SellPageModule = /** @class */ (function () {
    function SellPageModule() {
    }
    SellPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sell_page__WEBPACK_IMPORTED_MODULE_6__["SellPage"]]
        })
    ], SellPageModule);
    return SellPageModule;
}());



/***/ }),

/***/ "./src/app/sell/sell.page.html":
/*!*************************************!*\
  !*** ./src/app/sell/sell.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>SELL YOUR WATCH</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"sell_form\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input formControlName=\"firstname\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.firstname.hasError('required') && sell_form.controls.firstname.touched\">\n      <p>Please Enter Valid First Name!</p>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input formControlName=\"lastname\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.lastname.hasError('required') && sell_form.controls.lastname.touched\">\n      <p>Please Enter Valid Last Name!</p>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.email.hasError('required') && sell_form.controls.email.touched\">\n      <p>Email Address is required!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.email.hasError('pattern') && sell_form.controls.email.touched\">\n      <p>Please Enter a Valid Email Address!</p>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input formControlName=\"phone\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.phone.hasError('required') && sell_form.controls.phone.touched\">\n      <p>Please Enter Valid Phone Number!</p>\n    </ion-item>\n\n    <ion-item class=\"dropdown\" lines=\"full\">\n      <ion-label>Brand</ion-label>\n      <ion-select formControlName=\"brand\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <!-- <ion-select-option value=\"brown\">Brown</ion-select-option> -->\n        <ion-select-option value=\"abc\">abc</ion-select-option>\n        <ion-select-option value=\"xyz\">xyz</ion-select-option>\n        <ion-select-option value=\"aaa\">aaa</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.brand.hasError('required') && sell_form.controls.brand.touched\">\n      <p>Please Select Brand!</p>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Referance</ion-label>\n      <ion-input formControlName=\"reference\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.reference.hasError('required') && sell_form.controls.reference.touched\">\n      <p>Please Enter Referance!</p>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Desired Amount</ion-label>\n      <ion-input formControlName=\"amount\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.amount.hasError('required') && sell_form.controls.amount.touched\">\n      <p>Please Enter Desired Amount!</p>\n    </ion-item>\n\n    <ion-item class=\"dropdown\" lines=\"full\">\n      <ion-label>Document</ion-label>\n      <ion-select formControlName=\"document\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"boxes/papers\">Boxes/Papers</ion-select-option>\n        <ion-select-option value=\"box\">Box Only</ion-select-option>\n        <ion-select-option value=\"papers\">Papers Only</ion-select-option>\n        <ion-select-option value=\"other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.document.hasError('required') && sell_form.controls.document.touched\">\n      <p>Please Select Document!</p>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Comment</ion-label>\n      <ion-textarea formControlName=\"comment\" rows=\"2\"></ion-textarea>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"sell_form.controls.comment.hasError('required') && sell_form.controls.comment.touched\">\n      <p>Please Enter Comment!</p>\n    </ion-item>\n\n    <input type=\"file\" name=\"myFile\" formControlName=\"myfile\" class=\"spc\">\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n    *ngIf=\"sell_form.controls.myfile.hasError('required') && sell_form.controls.myfile.touched\">\n    <p>Please Select Doc!</p>\n  </ion-item>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button class=\"next\" expand=\"full\" size=\"large\" (click)=\"onFormSubmit()\">Submit</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/sell/sell.page.scss":
/*!*************************************!*\
  !*** ./src/app/sell/sell.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validator-error {\n  --background: transparent;\n  color: #d44848;\n  margin-left: 16px;\n  font-size: 14px; }\n  .validator-error p {\n    margin: 0px; }\n  .spc {\n  padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvc2VsbC9zZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFKbkI7SUFPUSxXQUFXLEVBQUE7RUFJakI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxsL3NlbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbGlkYXRvci1lcnJvcntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZDQ0ODQ4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zcGN7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sell/sell.page.ts":
/*!***********************************!*\
  !*** ./src/app/sell/sell.page.ts ***!
  \***********************************/
/*! exports provided: SellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPage", function() { return SellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SellPage = /** @class */ (function () {
    function SellPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.sell_fb();
    }
    SellPage.prototype.ngOnInit = function () {
    };
    SellPage.prototype.sell_fb = function () {
        this.sell_form = this.formBuilder.group({
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brand: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            document: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            myfile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ;
    SellPage.prototype.onFormSubmit = function () {
        for (var v in this.sell_form.controls) {
            this.sell_form.controls[v].markAsTouched();
        }
        if (this.sell_form.valid) {
            // let body = {
            //   "firstname": this.sell_form.value.firstname,
            //   "lastname": this.sell_form.value.lastname,
            //   "email": this.sell_form.value.email,
            //   "phone": this.sell_form.value.phone,
            //   "brand": this.sell_form.value.brand,
            //   "reference": this.sell_form.value.reference,
            //   "amount": this.sell_form.value.amount,
            //   "document": this.sell_form.value.document,
            //   "comment": this.sell_form.value.comment,
            // };
        }
    };
    SellPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.page.html */ "./src/app/sell/sell.page.html"),
            styles: [__webpack_require__(/*! ./sell.page.scss */ "./src/app/sell/sell.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SellPage);
    return SellPage;
}());



/***/ })

}]);
//# sourceMappingURL=sell-sell-module.js.map