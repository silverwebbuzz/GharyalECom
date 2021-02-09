(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoryproduct-categoryproduct-module"],{

/***/ "./src/app/categoryproduct/categoryproduct.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/categoryproduct/categoryproduct.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryproductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryproductPageModule", function() { return CategoryproductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categoryproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoryproduct.page */ "./src/app/categoryproduct/categoryproduct.page.ts");







var routes = [
    {
        path: '',
        component: _categoryproduct_page__WEBPACK_IMPORTED_MODULE_6__["CategoryproductPage"]
    }
];
var CategoryproductPageModule = /** @class */ (function () {
    function CategoryproductPageModule() {
    }
    CategoryproductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_categoryproduct_page__WEBPACK_IMPORTED_MODULE_6__["CategoryproductPage"]]
        })
    ], CategoryproductPageModule);
    return CategoryproductPageModule;
}());



/***/ }),

/***/ "./src/app/categoryproduct/categoryproduct.page.html":
/*!***********************************************************!*\
  !*** ./src/app/categoryproduct/categoryproduct.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{categoryData.name}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/wishlist\">\n        <ion-icon name=\"heart-empty\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"gotoMycart()\">\n        <ion-icon name=\"cart\" mode=\"md\"></ion-icon>\n        <ion-badge class=\"cart-item-count\" color=\"primary\" fill=\"clear\">{{cartItemsCount}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"category-product-page\">\n\n\n  <ion-item lines=\"none\"  class=\"item-header\">\n    <ion-label class=\"items\">{{categoryData.product_count}} Items</ion-label>\n\n    <!-- <ion-button fill=\"clear\" class=\"btn-sorting\" (click)=\"filter()\">\n      <ion-icon name=\"options\" class=\"icon\"></ion-icon>\n      Filter\n    </ion-button> -->\n\n    <ion-button fill=\"clear\" class=\"btn-sorting\" (click)=\"sort()\">\n      <ion-icon name=\"swap\" class=\"icon\"></ion-icon>\n      Sort By\n    </ion-button>\n  </ion-item>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"RefreshProducts($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n    <ion-grid class=\"grid\">\n      <ion-row style=\"padding: 5px;\">\n        <ion-col size=\"6\" *ngFor=\"let p of productsData\" class=\"grid\">\n          <ion-card class=\"box-card\">\n            <ion-row>\n              <ion-col size=\"7\" no-padding>\n                <div class=\"rating-summary\">\n                  <div class=\"rating-result\" title=\"{{p.rating}}%\">\n                    <span [ngStyle]=\"{'width': p.rating + '%'}\"><span><span itemprop=\"ratingValue\">{{p.rating}}</span>% of <span\n                          itemprop=\"bestRating\">100</span></span></span>\n                  </div>\n                </div>\n              </ion-col>\n              <!-- <ion-button fill=\"clear\" class=\"rating\">\n              <ion-icon name=\"star\" class=\"clr-icon\"></ion-icon>\n            </ion-button> -->\n              <ion-col size=\"5\" no-padding *ngIf=\"!p.isWishList\">\n                <ion-button fill=\"clear\" class=\"fav\" (click)=\"addtoFav(p)\">\n                  <ion-icon name=\"heart-empty\" class=\"clr-icon-heart\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"5\" no-padding *ngIf=\"p.isWishList\">\n                <ion-button fill=\"clear\" class=\"fav\" (click)=\"removeFav(p)\">\n                  <ion-icon name=\"heart\" class=\"clr-icon-heart\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <div class=\"img-div\" (click)=\"gotoProductPage(p.id, p.name)\">\n              <img *ngIf=\"p.base_img\" src=\"{{p.base_img}}\" class=\"product-pic\" />\n              <img *ngIf=\"!p.base_img\" src=\"../../assets/img/no-image-icon-4.png\" class=\"product-pic\" />\n              <ion-badge *ngIf=\"p.rewardPoint > 0\" class=\"reward\">EARN {{p.rewardPoint}}</ion-badge>\n            </div>\n            <div class=\"hr\"></div>\n            <div class=\"product-footer\" (click)=\"gotoProductPage(p.id, p.name)\">\n                <ion-item text-wrap lines=\"none\" style=\"--padding-start: 0px;\">\n                    <ion-label class=\"title\">{{p.name | titlecase}}\n                    </ion-label>\n                    </ion-item>\n              <ion-text class=\"cat-title\">{{categoryData.name}}</ion-text><br>\n              <div class=\"price-container\">\n              <ion-label  class=\"first-price-container\">\n                <del *ngIf=\"p.special_price != null\" class=\"first-price\">{{currencySymbol}} {{p.price | number}}</del>\n              </ion-label>\n              <ion-text class=\"usd-price\">\n                {{p.usd_price}}\n              </ion-text>\n              <ion-label class=\"final-price\" *ngIf=\"!p.special_price\">\n                {{currencySymbol}} {{p.price | number}}\n              </ion-label>\n              <ion-label class=\"final-price\" *ngIf=\"p.special_price != null\">\n                {{currencySymbol}} {{p.special_price | number}}\n              </ion-label>\n              </div>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-template #elseTemplate>\n    <ion-grid class=\"grid\">\n      <ion-row style=\"padding: 5px;\">\n        <ion-col size=\"6\" *ngFor=\"let item of arrayOne(12)\" class=\"grid\">\n          <ion-card class=\"box-card\">\n            <ion-row>\n              <ion-skeleton-text animated style=\"width: 100%;\" class=\"title\"></ion-skeleton-text>\n            </ion-row>\n            <ion-row>\n              <div class=\"img-div\">\n                <ion-skeleton-text animated class=\"product-pic\" style=\"width: 100%;height: 150px;\"></ion-skeleton-text>\n              </div>\n            </ion-row>\n            <div class=\"hr\"></div>\n            <ion-row class=\"footer-skeleton-row\">\n              <div class=\"product-footer\">\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </div>\n            </ion-row>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf=\"noProducts\" class=\"no-data-found\">\n    No Products Found.\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/categoryproduct/categoryproduct.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/categoryproduct/categoryproduct.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left;\n  display: inherit;\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  -webkit-padding-end: 0;\n  padding-inline-end: 0; }\n\n.category-product-page {\n  --background: #f1f1f1; }\n\n.category-product-page .item-header .items {\n    font-size: 14px;\n    font-weight: bold; }\n\n.category-product-page .item-header .btn-sorting {\n    color: #000;\n    text-transform: none;\n    box-shadow: 0px 0px 0px 0px;\n    background: #f1f1f1;\n    margin-left: 10px;\n    font-weight: bold; }\n\n.category-product-page .item-header .btn-sorting .icon {\n      margin-right: 5px; }\n\n.footer-skeleton-row {\n  display: inline-block;\n  width: 100%; }\n\n.img-div {\n  width: 100%;\n  float: left;\n  margin-bottom: 5px; }\n\n.box-card {\n  box-shadow: 0px 0px 0px 0px;\n  border-radius: 0px;\n  margin: 5px;\n  background: #fff; }\n\n.reward {\n  border-radius: 0px;\n  position: absolute;\n  bottom: 135px;\n  right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvY2F0ZWdvcnlwcm9kdWN0L2NhdGVnb3J5cHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFhLEVBQUE7O0FBRGpCO0lBUVksZUFBZTtJQUNmLGlCQUNKLEVBQUE7O0FBVlI7SUFhWSxXQUFXO0lBQ1gsb0JBQW9CO0lBRXBCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQW5CN0I7TUFzQmdCLGlCQUFpQixFQUFBOztBQU9qQztFQUNJLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUVJLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFlLEVBQUE7O0FBU25CO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnlwcm9kdWN0L2NhdGVnb3J5cHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0LXBhZ2V7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gICAgLml0ZW0taGVhZGVye1xuICAgICAgICAvL21hcmdpbi10b3A6IDEwcHg7IFxuICAgICAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIFxuICAgICAgICAuaXRlbXN7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4tc29ydGluZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAvL2JveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjN2I3YzdjO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbi5mb290ZXItc2tlbGV0b24tcm93e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmltZy1kaXZ7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJveC1jYXJke1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICM1ZDVlNWU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gIH1cbi8vICAgLmdyaWR7XG4vLyAgICAgLy8gLnByb2R1Y3QtcGlje1xuLy8gICAgIC8vICAgaGVpZ2h0OiBhdXRvO1xuLy8gICAgIC8vICAgb2JqZWN0LWZpdDogY29udGFpbjtcbi8vICAgICAvLyB9XG4vLyAgIH1cblxuLnJld2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTM1cHg7XG4gICAgcmlnaHQ6IDhweDtcbn1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/categoryproduct/categoryproduct.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/categoryproduct/categoryproduct.page.ts ***!
  \*********************************************************/
/*! exports provided: CategoryproductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryproductPage", function() { return CategoryproductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _api_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/cart.service */ "./src/app/api/cart.service.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _component_search_search_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/search/search.page */ "./src/app/component/search/search.page.ts");
/* harmony import */ var _component_filter_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/filter/filter.component */ "./src/app/component/filter/filter.component.ts");















var CategoryproductPage = /** @class */ (function () {
    function CategoryproductPage(config, router, route, actionSheetController, rest, auth, statusBar, modal, cart, service, navCtrl) {
        var _this = this;
        this.config = config;
        this.router = router;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.rest = rest;
        this.auth = auth;
        this.statusBar = statusBar;
        this.modal = modal;
        this.cart = cart;
        this.service = service;
        this.navCtrl = navCtrl;
        this.isLoaded = false;
        this.pageNum = 1;
        this.isWishList = false;
        this.productBaseURL = this.config.productImageURL;
        this.cartItemsCount = 0;
        this.noProducts = false;
        this.cart.numberOfCartItems().then(function (v) {
            _this.cartItemsCount = v;
        });
        var currency = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].CURRENCY));
        if (currency.base_currency_symbol) {
            this.currencySymbol = currency.base_currency_symbol;
        }
        else {
            this.currencySymbol = currency.default_display_currency_code;
        }
        this.route.queryParams.subscribe(function (params) {
            if (params && params.category) {
                _this.categoryData = JSON.parse(params.category);
                _this.loadproducts();
            }
        });
    }
    CategoryproductPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    CategoryproductPage.prototype.loadproducts = function (pageNumber) {
        if (pageNumber === void 0) { pageNumber = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (pageNumber) {
                            this.pageNum = pageNumber;
                        }
                        return [4 /*yield*/, this.service.getProductsByCategoryId(this.categoryData.id, this.pageNum).subscribe(function (data) {
                                var productArray = lodash__WEBPACK_IMPORTED_MODULE_9__["map"](data, function (x) {
                                    return lodash__WEBPACK_IMPORTED_MODULE_9__["assign"](x, {
                                        isWishList: false
                                    });
                                });
                                var wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
                                if (wishlistItems && wishlistItems.length > 0) {
                                    var finalArray = [];
                                    var _loop_1 = function (i) {
                                        var element = productArray[i];
                                        var hasElement = wishlistItems.find(function (x) { return x.product.id == element.id; });
                                        if (hasElement) {
                                            element.isWishList = true;
                                        }
                                        ;
                                        finalArray.push(element);
                                    };
                                    for (var i = 0; i < productArray.length; i++) {
                                        _loop_1(i);
                                    }
                                    ;
                                    _this.productsData = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](finalArray, 'position');
                                }
                                else {
                                    _this.productsData = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](productArray, 'position');
                                }
                                _this.isLoaded = true;
                                if (_this.productsData.length === _this.categoryData.product_count) {
                                    _this.infiniteScroll.disabled = true;
                                }
                                if (_this.productsData.length == 0) {
                                    _this.noProducts = true;
                                }
                            }, function (err) {
                                _this.noProducts = true;
                                _this.isLoaded = true;
                                _this.rest.presentToastWithOptions('Something Wrong! Please Try Again');
                                console.log('Product Error:', err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryproductPage.prototype.RefreshProducts = function (event) {
        this.isLoaded = false;
        this.infiniteScroll.disabled = null;
        var pageNumber = 1;
        this.loadproducts(pageNumber).then(function () {
            event.target.complete();
        });
    };
    CategoryproductPage.prototype.ngOnInit = function () {
    };
    CategoryproductPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CategoryproductPage.prototype.navigate = function () {
        this.router.navigate(['/productdetail']);
    };
    CategoryproductPage.prototype.gotoProductPage = function (PId, PName) {
        var navigationExtras = {
            queryParams: {
                product_id: JSON.stringify(PId),
                product_name: JSON.stringify(PName)
            }
        };
        this.router.navigate(['/productdetail'], navigationExtras);
    };
    CategoryproductPage.prototype.openSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _component_search_search_page__WEBPACK_IMPORTED_MODULE_13__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryproductPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    CategoryproductPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pageNum = this.pageNum + 1;
                        return [4 /*yield*/, this.service.getProductsByCategoryId(this.categoryData.id, this.pageNum).subscribe(function (val) {
                                var loadproducts = val;
                                var productArray = lodash__WEBPACK_IMPORTED_MODULE_9__["map"](val, function (x) {
                                    return lodash__WEBPACK_IMPORTED_MODULE_9__["assign"](x, {
                                        isWishList: false
                                    });
                                });
                                var wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
                                if (wishlistItems && wishlistItems.length > 0) {
                                    var finalArray = [];
                                    var _loop_2 = function (i) {
                                        var element = productArray[i];
                                        var hasElement = wishlistItems.find(function (x) { return x.product.id == element.id; });
                                        if (hasElement) {
                                            element.isWishList = true;
                                        }
                                        ;
                                        finalArray.push(element);
                                    };
                                    for (var i = 0; i < productArray.length; i++) {
                                        _loop_2(i);
                                    }
                                    ;
                                    _this.productsData = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](finalArray, 'position');
                                }
                                else {
                                    _this.productsData = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](productArray, 'position');
                                }
                                if (loadproducts) {
                                    _this.productsData = lodash__WEBPACK_IMPORTED_MODULE_9__["union"](_this.productsData, loadproducts);
                                }
                                event.target.complete();
                                if (_this.productsData.length === _this.categoryData.product_count) {
                                    _this.infiniteScroll.disabled = true;
                                }
                            }, function (err) {
                                console.log('err load :', err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryproductPage.prototype.gotoMycart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_12__["CartPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryproductPage.prototype.filter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _component_filter_filter_component__WEBPACK_IMPORTED_MODULE_14__["FilterComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryproductPage.prototype.sort = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'SORT BY',
                            buttons: [
                                {
                                    text: 'Popularity',
                                    handler: function () {
                                        var productArray = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](_this.productsData, 'rating');
                                        _this.productsData = productArray.reverse();
                                    }
                                }, {
                                    text: 'Price -- Low to High',
                                    handler: function () {
                                        _this.productsData = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](_this.productsData, 'price');
                                    }
                                }, {
                                    text: 'Price -- High to Low',
                                    handler: function () {
                                        var productarray = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](_this.productsData, 'price');
                                        _this.productsData = productarray.reverse();
                                    }
                                }, {
                                    text: 'Newest First',
                                    handler: function () {
                                        var productarray = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](_this.productsData, 'id');
                                        _this.productsData = productarray.reverse();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryproductPage.prototype.addtoFav = function (product) {
        var _this = this;
        var LoggedIn = this.auth.isAuthenticated();
        if (LoggedIn) {
            this.auth.getToken().then(function (token) {
                var body = {
                    "sku": product.sku
                };
                _this.service.addProductToWishlist(token, body).subscribe(function (val) {
                    product.isWishList = true;
                    _this.rest.presentToastOptionsWithOutClose('Added into wishlist.', 'top');
                    _this.rest.wishlist();
                }, function (err) {
                    if (err.status == 401) {
                        var stateURL = _this.router.routerState.snapshot.url;
                        _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                    }
                    else {
                        _this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
                    }
                });
            }, function (err) {
                var stateURL = _this.router.routerState.snapshot.url;
                _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
            });
        }
        else {
            this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
        }
    };
    CategoryproductPage.prototype.removeFav = function (product) {
        var _this = this;
        var LoggedIn = this.auth.isAuthenticated();
        if (LoggedIn) {
            this.auth.getToken().then(function (token) {
                var lstwishData = JSON.parse(window.localStorage.getItem('wishListItems'));
                var itemWish = lstwishData.find(function (x) { x = x.product.id == product.id; return x; });
                _this.service.removeProductFromWishlist(token, itemWish.item_id).subscribe(function (val) {
                    product.isWishList = false;
                    _this.rest.presentToastOptionsWithOutClose('This Product remove from wishlist.', 'top');
                    _this.rest.wishlist();
                }, function (err) {
                    if (err.status == 401) {
                        var stateURL = _this.router.routerState.snapshot.url;
                        _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
                    }
                    else {
                        _this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
                    }
                });
            }, function (err) {
                var stateURL = _this.router.routerState.snapshot.url;
                _this.router.navigate(['/signin'], { queryParams: { returnUrl: stateURL } });
            });
        }
        else {
            this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], CategoryproductPage.prototype, "infiniteScroll", void 0);
    CategoryproductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoryproduct',
            template: __webpack_require__(/*! ./categoryproduct.page.html */ "./src/app/categoryproduct/categoryproduct.page.html"),
            styles: [__webpack_require__(/*! ./categoryproduct.page.scss */ "./src/app/categoryproduct/categoryproduct.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _api_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__["MagentoServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], CategoryproductPage);
    return CategoryproductPage;
}());



/***/ })

}]);
//# sourceMappingURL=categoryproduct-categoryproduct-module.js.map