(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderlist-orderlist-module"],{

/***/ "./src/app/orderlist/orderlist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/orderlist/orderlist.module.ts ***!
  \***********************************************/
/*! exports provided: OrderlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPageModule", function() { return OrderlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orderlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderlist.page */ "./src/app/orderlist/orderlist.page.ts");







var routes = [
    {
        path: '',
        component: _orderlist_page__WEBPACK_IMPORTED_MODULE_6__["OrderlistPage"]
    }
];
var OrderlistPageModule = /** @class */ (function () {
    function OrderlistPageModule() {
    }
    OrderlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_orderlist_page__WEBPACK_IMPORTED_MODULE_6__["OrderlistPage"]]
        })
    ], OrderlistPageModule);
    return OrderlistPageModule;
}());



/***/ }),

/***/ "./src/app/orderlist/orderlist.page.html":
/*!***********************************************!*\
  !*** ./src/app/orderlist/orderlist.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding class=\"page-orderlist\">\n\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n  <div *ngIf=\"!isEmpty\">\n    <ion-card *ngFor=\"let order of orders\" class=\"order-card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../assets/img/no-image-icon-4.png\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"order_number\">\n            <ion-label>#{{order.increment_id}}</ion-label>\n          </div>\n          <div class=\"order_status\">\n            <ion-badge color=\"primary\" mode=\"md\" class=\"status-badge\">{{ order.status | uppercase}}</ion-badge>\n          </div>\n          <div class=\"order_date\">\n            <ion-text class=\"date-clr\">{{order.created_at | date}}</ion-text>\n          </div>\n          <div class=\"order_price\">\n            <ion-label class=\"price-clr\">{{order.order_currency_code}} {{order.grand_total}}</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"btn-col\">\n          <ion-button expand=\"full\" fill=\"outline\" (click)=\"gotoDetailspage(order.entity_id)\" class=\"btn-details\">\n            <ion-icon slot=\"end\" name=\"arrow-forward\" mode=\"ios\"></ion-icon> \n            DETAILS\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <div *ngIf=\"isEmpty\">\n      <ion-card class=\"empty-card\">\n          <img src=\"../../assets/img/bag.jpg\" style=\"height: 150px; width: 150px; margin: auto;\" />\n          <ion-label style=\"display: block; font-weight: bold; text-align: center; margin-top: 15px;\">No Orders Found</ion-label>\n          <ion-label style=\"display: block; text-align: center; margin-top: 8px; color: grey;\">You have no any Order found.\n          </ion-label>\n          <ion-button expand=\"full\"\n            style=\"color: #fff; width: fit-content; margin: auto; margin-top: 15px; margin-bottom: 15px;\"\n            routerLink=\"/tabs/mycategory\">CONTINUE SHOPPING</ion-button>\n        </ion-card>\n  </div>\n  </ng-container>\n\n  <ng-template #elseTemplate>\n\n      <ion-card *ngFor=\"let item of arrayOne(6)\" class=\"order-card\">\n          <ion-row>\n            <ion-col size=\"4\">\n                <ion-skeleton-text animated style=\"width: 100%;height: 100%;\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"8\">\n              <div class=\"order_number\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </div>\n              <div class=\"order_status\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </div>\n              <div class=\"order_date\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </div>\n              <div class=\"order_price\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button expand=\"full\" fill=\"outline\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n  </ng-template>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/orderlist/orderlist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/orderlist/orderlist.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-orderlist {\n  --background: #f1f1f1; }\n\n.order-card {\n  margin: 5px;\n  border-radius: 0px;\n  background: #fff;\n  box-shadow: 0px 0px 0px 0px; }\n\n.btn-col {\n  padding: 0px; }\n\n.btn-details {\n  margin: 0px;\n  font-weight: bold; }\n\n.status-badge {\n  border-radius: 0px; }\n\n.date-clr {\n  color: #808080; }\n\n.price-clr {\n  color: #000; }\n\n.order_number {\n  font-size: 16px;\n  font-weight: 800;\n  margin-bottom: 5px;\n  color: #000; }\n\n.order_status {\n  margin-bottom: 5px; }\n\n.order_date {\n  margin-bottom: 5px; }\n\n.order_price {\n  font-size: 16px;\n  font-weight: 800;\n  margin-bottom: 5px; }\n\n.empty-card {\n  box-shadow: 0px 0px 0px 0px;\n  color: #000;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvb3JkZXJsaXN0L29yZGVybGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNHLFdBQVcsRUFBQTs7QUFFZDtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTJCO0VBRTNCLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmRlcmxpc3Qvb3JkZXJsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW9yZGVybGlzdHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4ub3JkZXItY2FyZHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG59XG4uYnRuLWNvbHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uYnRuLWRldGFpbHN7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3RhdHVzLWJhZGdle1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5kYXRlLWNscntcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cbi5wcmljZS1jbHJ7XG4gICBjb2xvcjogIzAwMDtcbn1cbi5vcmRlcl9udW1iZXJ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLm9yZGVyX3N0YXR1c3tcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub3JkZXJfZGF0ZXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub3JkZXJfcHJpY2V7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZW1wdHktY2FyZHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7IFxuICAgIC8vbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/orderlist/orderlist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/orderlist/orderlist.page.ts ***!
  \*********************************************/
/*! exports provided: OrderlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPage", function() { return OrderlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







var OrderlistPage = /** @class */ (function () {
    function OrderlistPage(config, rest, router, service, statusBar) {
        this.config = config;
        this.rest = rest;
        this.router = router;
        this.service = service;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.orders = [];
        this.isEmpty = false;
        this.getOrderDetails();
    }
    OrderlistPage.prototype.ngOnInit = function () {
    };
    OrderlistPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    OrderlistPage.prototype.getOrderDetails = function () {
        var _this = this;
        this.userDetils = JSON.parse(window.localStorage.getItem('UserKey'));
        var userId = this.userDetils.id;
        console.log(userId);
        this.service.getUserOrder(userId).subscribe(function (val) {
            var ordersItems = val.items;
            _this.orders = ordersItems.reverse();
            _this.isLoaded = true;
            if (_this.orders.length == 0) {
                _this.isEmpty = true;
            }
            console.log('Order Val:', val);
        }, function (err) {
            if (err.status == 401) {
                var stateURL = _this.router.routerState.snapshot.url;
                _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
            }
            else {
                _this.rest.presentToastOptionsWithOutClose('We can\'t find any Order.');
                _this.isLoaded = true;
                _this.isEmpty = true;
            }
            console.log('Order Err:', err);
        });
    };
    OrderlistPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    OrderlistPage.prototype.gotoDetailspage = function (OrderId) {
        var navigationExtras = {
            queryParams: {
                order_id: OrderId
            }
        };
        this.router.navigate(['/order-detail'], navigationExtras);
    };
    OrderlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.page.html */ "./src/app/orderlist/orderlist.page.html"),
            styles: [__webpack_require__(/*! ./orderlist.page.scss */ "./src/app/orderlist/orderlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__["MagentoServiceService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])
    ], OrderlistPage);
    return OrderlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=orderlist-orderlist-module.js.map