(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");







var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
    }
];
var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/category/category.page.html":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">\n      Categories\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/wishlist\">\n        <ion-icon name=\"heart-empty\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"gotoMycart()\">\n        <ion-icon name=\"cart\" mode=\"md\"></ion-icon>\n        <ion-badge class=\"cart-item-count\" color=\"primary\" fill=\"clear\">{{cartItemsCount}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"category-page\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"RefreshCategories($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n    <ion-grid class=\"grid\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let cat of catListing\" class=\"col\" (click)=\"productLising(cat)\">\n          <ion-card class=\"box-card\">\n            <img *ngIf=\"!cat.image\" src=\"../../assets/img/no-image-icon-4.png\" class=\"cat-pic\" style=\"width: auto;height:auto;\" />\n            <img *ngIf=\"cat.image\" src=\"{{CategoryBaseImageURL + cat.image}}\"  class=\"cat-pic\" />\n            <!-- <div class=\"hr\"></div> -->\n            <div class=\"spc\">\n              <ion-text class=\"title\">{{cat.name | titlecase}}\n              </ion-text>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-template #elseTemplate>\n    \n    <ion-grid class=\"grid\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of arrayOne(12)\" class=\"col\">\n          <ion-card class=\"box-card\">\n            <ion-skeleton-text animated  class=\"cat-pic\"></ion-skeleton-text>\n            <!-- <div class=\"hr\"></div> -->\n            <div class=\"spc\">\n              <ion-skeleton-text animated style=\"width: 100px;\" class=\"title\"></ion-skeleton-text>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-item *ngFor=\"let item of arrayOne(18)\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h2><ion-skeleton-text animated style=\"width: 100px;\"></ion-skeleton-text></h2>\n        <p><ion-skeleton-text animated style=\"width: 180px;\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-item> -->\n \n  </ng-template>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/category/category.page.scss":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-page {\n  --background: #f1f1f1; }\n  .category-page .grid {\n    padding: 5px; }\n  .category-page .grid .col {\n      padding: 0px; }\n  .category-page .grid .col .cat-pic {\n        padding-bottom: 0px;\n        height: 150px;\n        width: 100%;\n        margin: 0 auto;\n        object-fit: cover; }\n  .category-page .grid .col .title {\n        font-size: 12px;\n        color: #000; }\n  .box-card {\n  box-shadow: 0px 0px 0px 0px;\n  border-radius: 0px;\n  margin: 5px;\n  background: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTtFQURqQjtJQUlRLFlBQVcsRUFBQTtFQUpuQjtNQU9ZLFlBQVcsRUFBQTtFQVB2QjtRQVVvQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFdBQVc7UUFDWCxjQUFjO1FBQ2QsaUJBQWlCLEVBQUE7RUFkckM7UUFrQm9CLGVBQWM7UUFDZCxXQUFXLEVBQUE7RUFNL0I7RUFFSSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LXBhZ2V7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gICAgLmdyaWR7XG4gICAgICAgIHBhZGRpbmc6NXB4O1xuXG4gICAgICAgIC5jb2x7XG4gICAgICAgICAgICBwYWRkaW5nOjBweDtcblxuICAgICAgICAgICAgICAgIC5jYXQtcGlje1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7IFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib3gtY2FyZHtcbiAgICAvL2JveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNWQ1ZTVlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/category/category.page.ts":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/cart.service */ "./src/app/api/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _component_search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/search/search.page */ "./src/app/component/search/search.page.ts");












var CategoryPage = /** @class */ (function () {
    function CategoryPage(statusBar, router, modal, cart, config, service) {
        var _this = this;
        this.statusBar = statusBar;
        this.router = router;
        this.modal = modal;
        this.cart = cart;
        this.config = config;
        this.service = service;
        this.CategoryBaseImageURL = this.config.categoryImageURL;
        this.isLoaded = false;
        this.ByCatArray = [];
        this.catListing = new Array();
        this.cartItemsCount = 0;
        this.loadCategory();
        this.cart.numberOfCartItems().then(function (v) {
            _this.cartItemsCount = v;
        });
    }
    CategoryPage.prototype.ngOnInit = function () {
    };
    CategoryPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    CategoryPage.prototype.loadCategory = function () {
        var Category = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].PRODUCT_CATEGORIES));
        var SubCategory = Category.children_data;
        this.catListing = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](SubCategory, 'position');
        this.isLoaded = true;
    };
    CategoryPage.prototype.openSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _component_search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    CategoryPage.prototype.productLising = function (cat) {
        if (cat.id) {
            var navigationExtras = {
                queryParams: {
                    category: JSON.stringify(cat)
                }
            };
            this.router.navigate(['/categoryproduct'], navigationExtras);
        }
    };
    CategoryPage.prototype.gotoMycart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__["CartPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryPage.prototype.RefreshCategories = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoaded = false;
                this.service.getMobileCateogy().subscribe(function (v) {
                    var SubCategory = v.children_data;
                    _this.catListing = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](SubCategory, 'position');
                    window.localStorage.setItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].PRODUCT_CATEGORIES, JSON.stringify(v));
                    _this.isLoaded = true;
                    event.target.complete();
                }, function (err) {
                    console.log('Parent Category error');
                    event.target.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.page.html */ "./src/app/category/category.page.html"),
            styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/category/category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _api_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"], Object, _api_magento_service_service__WEBPACK_IMPORTED_MODULE_7__["MagentoServiceService"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=category-category-module.js.map