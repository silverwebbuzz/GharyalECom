(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productdetail-productdetail-module"],{

/***/ "./src/app/productdetail/productdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/productdetail/productdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageModule", function() { return ProductdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productdetail.page */ "./src/app/productdetail/productdetail.page.ts");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/fesm5/angular2-collapsible.js");








var routes = [
    {
        path: '',
        component: _productdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProductdetailPage"]
    }
];
var ProductdetailPageModule = /** @class */ (function () {
    function ProductdetailPageModule() {
    }
    ProductdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_7__["CollapsibleModule"]
            ],
            declarations: [_productdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProductdetailPage"]]
        })
    ], ProductdetailPageModule);
    return ProductdetailPageModule;
}());



/***/ }),

/***/ "./src/app/productdetail/productdetail.page.html":
/*!*******************************************************!*\
  !*** ./src/app/productdetail/productdetail.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{productName}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"gotoMycart()\">\n        <ion-icon name=\"cart\" mode=\"md\"></ion-icon>\n        <ion-badge class=\"cart-item-count\" color=\"primary\" fill=\"clear\">{{cartItemsCount}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product-detail-page\">\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n    <ion-card class=\"card-2\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div *ngIf=\"productData.images.length > 0\">\n            <ion-slides pager=\"true\" [options]=\"SlideOption\" #Slides_banner class=\"slide-preview\">\n              <ion-slide *ngFor=\"let img of productData.images\">\n                <img src=\"{{productImgBaseURL + img.file}}\" class=\"preview-pic\" />\n              </ion-slide>\n            </ion-slides>\n          </div>\n          <div *ngIf=\"productData.images.length == 0\">\n              <img src=\"../../assets/img/no-image-icon-4.png\" class=\"preview-pic\" />\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <img src=\"../assets/img/watch.jpg\" style=\"height: 200px; width:auto; margin: auto;\"/> -->\n    </ion-card>\n\n    <ion-card class=\"card-2\">\n      <ion-row class=\"header\">\n        <ion-item class=\"heading\" lines=\"none\">\n          <ion-label class=\"product-title\">\n            {{productData.basic.name}}\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"clear\" (click)=\"sharePicker()\" class=\"btn-share\">\n            <ion-icon name=\"share\" mode=\"md\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-row>\n      <ion-row class=\"desc\">\n        <ion-text>\n          {{productData.basic.short_description}}\n        </ion-text>\n      </ion-row>\n      <ion-row class=\"price-detail\">\n        <ion-col size=\"6\">\n          <ion-text class=\"usd-price\">\n              {{productData.basic.usd_price}}\n          </ion-text>\n          <ion-text color=\"primary\" class=\"final-price\" *ngIf=\"!productData.basic.special_price\">\n            {{currencySymbol}} {{productData.basic.price | number}}\n          </ion-text>\n          <ion-text color=\"primary\" class=\"final-price\" *ngIf=\"productData.basic.special_price\">\n            {{currencySymbol}} {{productData.basic.special_price | number}}\n          </ion-text><br />\n          <ion-text class=\"first-price\" *ngIf=\"productData.basic.special_price != null\">\n            <del>{{currencySymbol}} {{productData.basic.price | number}}</del>\n          </ion-text>\n        </ion-col>\n\n        <ion-col size=\"6\" style=\"text-align: right;\">\n          <ion-badge class=\"reward\">EARN {{productReward}}</ion-badge>\n          <div class=\"rating\" (click)=\"getProductRating()\">\n          <div class=\"ratings\" title=\"{{productData.basic.rating}}%\">\n            <div class=\"empty-stars\"></div>\n            <div class=\"full-stars\" [ngStyle]=\"{'width': productData.basic.rating + '%'}\">></div>\n          </div>\n          </div>\n          <!-- <div class=\"rating-summary\">\n                <div class=\"rating-result\" title=\"{{productData.rating}}%\">\n                  <span [ngStyle]=\"{'width': productData.rating + '%'}\"><span><span itemprop=\"ratingValue\">{{productData.rating}}</span>% of <span\n                        itemprop=\"bestRating\">100</span></span></span>\n                </div>\n              </div> -->\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"icon-logo\">\n        <ion-col size=\"8\" class=\"space\">\n          <ion-item lines=\"none\">\n            <img src=\"../assets/icon/bus.png\" class=\"icon-bus\" />\n            <ion-label>\n              Free Shipping\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\" class=\"space\">\n          <img *ngIf=\"productData.watch_delivery == 'Yes'\" src=\"../assets/img/delivery.png\" class=\"logo-24\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <collapsible-list [type]=\"'accordion'\">\n          <collapsible-list-item>\n            <collapsible-header class=\"waves-effect\">\n              <ion-item class=\"desc-head\" lines=\"none\">\n                Description\n                <ion-icon name=\"arrow-down\" slot=\"end\" mode=\"ios\"></ion-icon>\n              </ion-item>\n            </collapsible-header>\n            <collapsible-body [expanded]=\"true\" class=\"body-spc\">\n              <ion-row class=\"detail-spc\">\n                <div class=\"description-value\" [innerHTML]='productData.basic.description'></div>\n              </ion-row>\n            </collapsible-body>\n          </collapsible-list-item>\n          <collapsible-list-item *ngFor=\"let attr of productData.attributes | keyvalue\">\n            <collapsible-header class=\"waves-effect\">\n              <ion-item class=\"desc-head\" lines=\"none\">\n                {{attr.key | titlecase}}\n                <ion-icon name=\"arrow-down\" slot=\"end\" mode=\"ios\"></ion-icon>\n              </ion-item>\n            </collapsible-header>\n            <collapsible-body [expanded]=\"false\" class=\"body-spc\">\n              <ion-row class=\"detail-spc\" *ngFor=\"let valattr of attr.value\">\n                <ion-item lines=\"full\" class=\"item-list\" *ngIf=\"valattr.attribitue_value\">\n                  <ion-col size=\"6\" class=\"desc\">{{valattr.attribitue_label}}</ion-col>\n                  <ion-col size=\"6\" class=\"desc-detail\">{{valattr.attribitue_value}}</ion-col>\n                </ion-item>\n              </ion-row>\n            </collapsible-body>\n          </collapsible-list-item>\n        </collapsible-list>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <ion-card class=\"card-2\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-skeleton-text animated style=\"width: 100%;height:350px;\" class=\"title\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <!-- <img src=\"../assets/img/watch.jpg\" style=\"height: 200px; width:auto; margin: auto;\"/> -->\n    </ion-card>\n    <ion-card class=\"card-2\">\n      <ion-row class=\"header\">\n        <ion-item class=\"heading\" lines=\"none\">\n          <ion-label class=\"product-title\">\n            <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"clear\" (click)=\"sharePicker()\" class=\"btn-share\">\n            <ion-icon name=\"share\" mode=\"md\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-row>\n      <ion-row class=\"desc\">\n        <ion-text style=\"width:100%;\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n        </ion-text>\n      </ion-row>\n      <ion-row class=\"price-detail\">\n        <ion-col size=\"4\">\n          <ion-text color=\"primary\" class=\"final-price\">\n            <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text class=\"first-price\">\n            <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"rating\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"icon-logo\">\n        <ion-col size=\"8\" class=\"space\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\" class=\"space\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"desc-head\">\n        <ion-col size=\"11\">\n          <ion-label>\n            Description\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"arrow-down\" mode=\"ios\" class=\"arrow\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"detail-spc\">\n        <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row>\n        <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row>\n        <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row>\n        <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row>\n        <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n\n    </ion-card>\n\n  </ng-template>\n</ion-content>\n\n<ion-footer class=\"product-detail-footer\">\n  <ng-container *ngIf=\"isLoaded; else elseFooter\">\n    <ion-row style=\"background: #f1f1f1;\">\n      <ion-col size=\"6\" *ngIf=\"!productData.isWishList\" class=\"btn-fix\">\n        <ion-button expand=\"full\" size=\"large\" (click)=\"addtoFav()\" class=\"wish\">\n        <ion-icon name=\"heart-empty\" color=\"primary\"></ion-icon>\n        WISH LIST\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"productData.isWishList\" class=\"btn-fix\">\n          <ion-button expand=\"full\" size=\"large\" (click)=\"removeFav()\" class=\"wish\">\n        <ion-icon name=\"heart\" color=\"primary\"></ion-icon>\n        WISH LIST\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"productData.basic.salable\" class=\"btn-buy\">\n          <ion-button expand=\"full\" size=\"large\" (click)=\"addtoCart()\" class=\"buy\">\n        <ion-icon name=\"cart\" mode=\"md\"></ion-icon>\n         ADD TO CART\n         </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"!productData.basic.salable\" class=\"btn-buy\">\n          <ion-button expand=\"full\" size=\"large\" class=\"buy\" style=\"--background-activated: #cead65;\"> \n              <ion-icon name=\"close-circle-outline\" mode=\"md\"></ion-icon>\n         OUT OF STOCK\n         </ion-button>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ng-template #elseFooter>\n    <ion-row>\n      <ion-col class=\"btn-fix\">\n        <ion-skeleton-text animated style=\"width: 100%; height: 2.8em;\"></ion-skeleton-text>\n      </ion-col>\n      <!-- <ion-col class=\"btn-fix\">\n        <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-col> -->\n      <ion-col class=\"btn-buy\">\n        <ion-skeleton-text animated style=\"width: 100%; height: 2.8em;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n</ion-footer>"

/***/ }),

/***/ "./src/app/productdetail/productdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/productdetail/productdetail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-title {\n  white-space: unset; }\n\n.product-detail-page .slide-preview {\n  border: solid 2px #eee;\n  height: 100%; }\n\n.product-detail-page .slide-preview .preview-pic {\n    height: 100%;\n    width: 100%;\n    margin: auto;\n    object-fit: cover; }\n\n.product-detail-page .slide-thumb {\n  border: solid 2px #eee;\n  height: 200px; }\n\n.product-detail-page .slide-thumb .thumb-pic {\n    height: 50px;\n    width: 50px;\n    margin: auto; }\n\n.product-detail-page .header {\n  font-weight: bold;\n  color: black;\n  font-size: 16px;\n  padding: 0px 10px 0px 0px; }\n\n.product-detail-page .header .heading {\n    width: 100%;\n    font-weight: bold;\n    color: black; }\n\n.product-detail-page .header .heading .btn-share {\n      font-weight: bold;\n      color: black;\n      --padding-end: 0px;\n      margin-right: 0px; }\n\n.product-detail-page .desc {\n  font-weight: bold;\n  color: black;\n  font-size: 14px;\n  padding: 10px 10px 10px 15px;\n  width: 80%; }\n\n.product-detail-page .price-detail {\n  padding: 10px 10px 10px 12px; }\n\n.product-detail-page .price-detail .usd-price {\n    text-align: left;\n    margin-bottom: 5px; }\n\n.product-detail-page .price-detail .final-price {\n    font-weight: bold;\n    font-size: 16px; }\n\n.product-detail-page .price-detail .first-price {\n    font-size: 12px;\n    color: grey; }\n\n.product-detail-page .price-detail .rating {\n    font-size: 18px;\n    text-align: right; }\n\n.product-detail-page .icon-logo .space {\n  padding: 0px; }\n\n.product-detail-page .icon-logo .space .icon-bus {\n    height: 25px;\n    width: 25px;\n    margin-right: 10px; }\n\n.product-detail-page .icon-logo .space .logo-24 {\n    height: 40px; }\n\n.product-detail-page collapsible-list {\n  width: 100%;\n  margin: 0px;\n  border-top: 0px;\n  border-right: 0px;\n  border-left: 0px;\n  box-shadow: 0px 0px 0px 0px; }\n\n.product-detail-page collapsible-list collapsible-header {\n    padding: 0px; }\n\n.product-detail-page .body-spc {\n  padding: 0px;\n  border-bottom: 0px;\n  box-shadow: 0px 0px 0px 0px !important; }\n\n.product-detail-page .item-list {\n  width: 100%;\n  --padding-start: 0px; }\n\n.product-detail-page .desc-head {\n  font-weight: bold;\n  --background: #ccc;\n  color: black;\n  font-size: 16px; }\n\n.product-detail-page .detail-spc .desc-detail {\n  color: black; }\n\n.swiper-slide:before {\n  content: '';\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  top: 0;\n  width: 100%;\n  left: 0;\n  right: 0;\n  height: 100%; }\n\n.swiper-slide-active::before {\n  background-color: unset !important; }\n\n.icon-color {\n  color: black; }\n\n.product-detail-footer {\n  box-shadow: 4px 4px 4px 4px #ccc; }\n\n.product-detail-footer .btn-fix {\n    padding: 0px; }\n\n.product-detail-footer .btn-fix .wish {\n      margin: 0px;\n      color: #cead65;\n      font-size: 18px;\n      --padding-start: 0px;\n      --padding-end: 0px;\n      --background: #f1f1f1;\n      --background-activated: #ccc;\n      --color: none;\n      --color-activated: none; }\n\n.product-detail-footer .btn-buy {\n    color: #fff;\n    padding: 0px;\n    margin: auto;\n    text-align: center; }\n\n.product-detail-footer .btn-buy .buy {\n      margin: 0px;\n      color: #fff;\n      font-size: 18px;\n      --padding-start: 0px;\n      --padding-end: 0px; }\n\n.arrow {\n  float: right; }\n\n.rating-summary {\n  margin-top: 0px; }\n\n.ratings {\n  position: relative;\n  vertical-align: middle;\n  display: inline-block;\n  color: #c7c7c7;\n  overflow: hidden; }\n\n.full-stars {\n  position: absolute;\n  left: 0;\n  top: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  color: #cead65; }\n\n.empty-stars:before, .full-stars:before {\n  content: \"\\f005\\f005\\f005\\f005\\f005\";\n  font-family: 'Font Awesome 5 Free';\n  font-size: 14px;\n  letter-spacing: 1px; }\n\n.empty-stars:before {\n  -webkit-text-stroke: 1px #c7c7c7; }\n\n.full-stars:before {\n  -webkit-text-stroke: 1px #cead65; }\n\n.description-value {\n  padding: 0px 15px; }\n\n.reward {\n  border-radius: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvcHJvZHVjdGRldGFpbC9wcm9kdWN0ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQUFBOztBQUVyQjtFQUdRLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBSnBCO0lBT1ksWUFBWTtJQUNaLFdBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7O0FBVjdCO0VBZVEsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFoQnJCO0lBbUJZLFlBQVk7SUFDWixXQUFVO0lBQ1YsWUFBWSxFQUFBOztBQXJCeEI7RUEwQlEsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBN0JqQztJQWdDWSxXQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTs7QUFsQ3hCO01BcUNnQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGtCQUFjO01BQ2QsaUJBQWlCLEVBQUE7O0FBeENqQztFQThDUSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsVUFBVSxFQUFBOztBQWxEbEI7RUFzRFEsNEJBQTRCLEVBQUE7O0FBdERwQztJQXlEWSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBMUQ5QjtJQThEWSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQS9EM0I7SUFtRVksZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFwRXZCO0lBd0VZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUF6RTdCO0VBZ0ZZLFlBQVksRUFBQTs7QUFoRnhCO0lBbUZnQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQXJGbEM7SUF5RmdCLFlBQVksRUFBQTs7QUF6RjVCO0VBOEZRLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkJBQTJCLEVBQUE7O0FBbkduQztJQXNHWSxZQUFZLEVBQUE7O0FBdEd4QjtFQTJHUSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQyxFQUFBOztBQTdHOUM7RUFpSFEsV0FBVztFQUNYLG9CQUFnQixFQUFBOztBQWxIeEI7RUFzSFEsaUJBQWlCO0VBQ2pCLGtCQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUF6SHZCO0VBaUlZLFlBQVksRUFBQTs7QUFPeEI7RUFFUSxXQUFXO0VBQ1QsMENBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUl0QjtFQUVRLGtDQUFrQyxFQUFBOztBQUkxQztFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFEcEM7SUFRUSxZQUFZLEVBQUE7O0FBUnBCO01BV1ksV0FBVztNQUNYLGNBQWM7TUFDZCxlQUFlO01BQ2Ysb0JBQWdCO01BQ2hCLGtCQUFjO01BQ2QscUJBQWE7TUFDYiw0QkFBdUI7TUFDdkIsYUFBUTtNQUNSLHVCQUFrQixFQUFBOztBQW5COUI7SUE0QlEsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBL0IxQjtNQWtDWSxXQUFXO01BQ1gsV0FBVztNQUNYLGVBQWU7TUFDZixvQkFBZ0I7TUFDaEIsa0JBQWMsRUFBQTs7QUFNMUI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxvQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWwvcHJvZHVjdGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC10aXRsZXtcbiAgICB3aGl0ZS1zcGFjZTp1bnNldDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdle1xuXG4gICAgLnNsaWRlLXByZXZpZXd7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICNlZWU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAucHJldmlldy1waWN7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgd2lkdGg6MTAwJTsgXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZS10aHVtYntcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggI2VlZTsgXG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgLnRodW1iLXBpY3tcbiAgICAgICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgICAgICB3aWR0aDo1MHB4OyBcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcblxuICAgICAgICAuaGVhZGluZ3tcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7IFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuXG4gICAgICAgICAgICAuYnRuLXNoYXJle1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2N7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDsgXG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgLnByaWNlLWRldGFpbHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTJweDtcblxuICAgICAgICAudXNkLXByaWNle1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maW5hbC1wcmljZXtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maXJzdC1wcmljZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhdGluZ3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uLWxvZ297XG5cbiAgICAgICAgLnNwYWNle1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAgICAgICAuaWNvbi1idXN7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4OyBcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nby0yNHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29sbGFwc2libGUtbGlzdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG5cbiAgICAgICAgY29sbGFwc2libGUtaGVhZGVye1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvZHktc3Bje1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLml0ZW0tbGlzdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cblxuICAgIC5kZXNjLWhlYWR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjY2NjOyBcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICAgICAgLy9wYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXNwY3tcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgIC5kZXNjLWRldGFpbHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC8vdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgIH1cblxufVxuXG4uc3dpcGVyLXNsaWRle1xuICAgICY6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5zd2lwZXItc2xpZGUtYWN0aXZle1xuICAgICY6OmJlZm9yZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5pY29uLWNvbG9ye1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2R1Y3QtZGV0YWlsLWZvb3RlcntcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2NjYztcblxuICAgIC5idG4tZml4e1xuICAgICAgICAvL2JvcmRlcjpncmF5IHNvbGlkIDFweDsgXG4gICAgICAgIC8vcGFkZGluZzogMTBweDsgXG4gICAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICAud2lzaHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNjZWFkNjU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNjY2M7XG4gICAgICAgICAgICAtLWNvbG9yOiBub25lO1xuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWJ1eXtcbiAgICAgICAgLy8gYm9yZGVyOmdyYXkgc29saWQgMXB4OyBcbiAgICAgICAgLy8gcGFkZGluZzogMTBweDsgXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiAjY2VhZDY1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuYnV5e1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuLmFycm93e1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5yYXRpbmctc3VtbWFyeXtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ucmF0aW5ncyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjYzdjN2M3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZnVsbC1zdGFycyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogI2NlYWQ2NTtcbn1cbi5lbXB0eS1zdGFyczpiZWZvcmUsIC5mdWxsLXN0YXJzOmJlZm9yZSB7XG4gICAgY29udGVudDpcIlxcZjAwNVxcZjAwNVxcZjAwNVxcZjAwNVxcZjAwNVwiO1xuICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uZW1wdHktc3RhcnM6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggI2M3YzdjNztcbn1cbi5mdWxsLXN0YXJzOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICNjZWFkNjU7XG59XG4uZGVzY3JpcHRpb24tdmFsdWV7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5yZXdhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/productdetail/productdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/productdetail/productdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: ProductdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPage", function() { return ProductdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interfaces/constants.models */ "./src/app/interfaces/constants.models.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _product_review_product_review_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-review/product-review.page */ "./src/app/product-review/product-review.page.ts");
/* harmony import */ var _component_addtocart_addtocart_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/addtocart/addtocart.page */ "./src/app/component/addtocart/addtocart.page.ts");
/* harmony import */ var _api_cart_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/cart.service */ "./src/app/api/cart.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/cart/cart.page.ts");
















var ProductdetailPage = /** @class */ (function () {
    function ProductdetailPage(config, router, platform, route, cart, rest, auth, service, modal, socialSharing, location, statusBar) {
        var _this = this;
        this.config = config;
        this.router = router;
        this.platform = platform;
        this.route = route;
        this.cart = cart;
        this.rest = rest;
        this.auth = auth;
        this.service = service;
        this.modal = modal;
        this.socialSharing = socialSharing;
        this.location = location;
        this.statusBar = statusBar;
        this.message = 'Check out the Gharyal!';
        this.url = 'http://gharyal.com/';
        this.current_slider_index = 0;
        this.total_slider_number = 6;
        this.isWishList = false;
        this.isLoaded = false;
        this.productImgBaseURL = this.config.productImageURL;
        this.cartItemsCount = 0;
        this.productReward = 0;
        this.SliderArray = [];
        this.SlideOption = {
            loop: true,
            centeredSlides: false,
            slidesPerView: 1,
            speed: 100,
            zoom: true,
            effect: 'fade',
            spaceBetween: 0
        };
        this.cart.numberOfCartItems().then(function (v) {
            _this.cartItemsCount = v;
        });
        var currency = JSON.parse(window.localStorage.getItem(_interfaces_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].CURRENCY));
        if (currency.base_currency_symbol) {
            this.currencySymbol = currency.base_currency_symbol;
        }
        else {
            this.currencySymbol = currency.default_display_currency_code;
        }
        this.route.queryParams.subscribe(function (params) {
            if (params && params.product_id) {
                _this.productId = JSON.parse(params.product_id);
                _this.productName = JSON.parse(params.product_name);
                console.log('cate:', _this.productId);
                _this.loadDetails();
            }
        });
    }
    ProductdetailPage.prototype.ngOnInit = function () {
    };
    ProductdetailPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    ProductdetailPage.prototype.loadDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getProductsDetailsByProductId(this.productId)
                            .subscribe(function (data) {
                            var productDetails = data.map(function (x) { x.isWishList = false; return x; });
                            var wishlistItems = JSON.parse(window.localStorage.getItem('wishListItems'));
                            if (wishlistItems && wishlistItems.length > 0) {
                                var element_1 = productDetails[0];
                                var hasElement = wishlistItems.find(function (x) { return x.product.id == element_1.basic.id; });
                                if (hasElement) {
                                    element_1.isWishList = true;
                                }
                                ;
                                _this.productData = productDetails[0];
                            }
                            else {
                                _this.productData = productDetails[0];
                            }
                            var body = {
                                "sku": _this.productData.basic.sku,
                                "price": _this.productData.basic.price,
                                "customerId": 0,
                                "websiteId": 1,
                                "tierId": 0
                            };
                            _this.service.getProductReward(body).subscribe(function (val) {
                                if (val) {
                                    _this.productReward = val;
                                }
                                console.log('reward Points:', val);
                                _this.isLoaded = true;
                            }, function (err) {
                                _this.isLoaded = true;
                                console.log('Err Reward Points :', err);
                            });
                            console.log('Product Details:', _this.productData);
                        }, function (err) {
                            _this.rest.presentToastWithOptions('Something Wrong! Go Back try Again.');
                            console.log('Product Err:', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductdetailPage.prototype.getProductRating = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _product_review_product_review_page__WEBPACK_IMPORTED_MODULE_10__["ProductReviewPage"],
                            componentProps: { productId: this.productId,
                                productSKU: this.productData.basic.sku,
                                productAvgRating: this.productData.basic.rating,
                                products: this.productData }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductdetailPage.prototype.clickThumbFunction = function (i) {
        this.slider.slideTo(i);
        this.slider_thumb.slideTo(i);
    };
    ProductdetailPage.prototype.SlideDidChange = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (index) {
            _this.slider_thumb.slideTo(index);
            _this.current_slider_index = (index + 1);
        });
        //this.slider_thumb.slideTo(i + 1);
    };
    ProductdetailPage.prototype.SlideThumbDidChange = function () {
        var _this = this;
        this.slider_thumb.getActiveIndex().then(function (index) {
            _this.slider.slideTo(index);
            _this.current_slider_index = (index + 1);
        });
    };
    ProductdetailPage.prototype.goToBilling = function () {
        this.router.navigate(['/billing']);
    };
    ProductdetailPage.prototype.sharePicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.platform.ready()
                    .then(function () {
                    _this.socialSharing.share(_this.message, null, null, _this.url)
                        .then(function (data) {
                        console.log('Shared via SharePicker');
                    })
                        .catch(function (err) {
                        console.log('Was not shared via SharePicker');
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ProductdetailPage.prototype.next = function () {
        this.slider_thumb.slideNext();
    };
    ProductdetailPage.prototype.prev = function () {
        this.slider_thumb.slidePrev();
    };
    ProductdetailPage.prototype.addtoCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var addtocartModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _component_addtocart_addtocart_page__WEBPACK_IMPORTED_MODULE_11__["AddtocartPage"],
                            componentProps: {
                                products: this.productData
                            },
                            showBackdrop: true,
                            mode: "ios",
                            cssClass: 'add-to-cart-modal'
                        })];
                    case 1:
                        addtocartModal = _a.sent();
                        addtocartModal.onWillDismiss().then(function (data) {
                            _this.cart.numberOfCartItems().then(function (v) {
                                _this.cartItemsCount = v;
                            });
                        });
                        return [4 /*yield*/, addtocartModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductdetailPage.prototype.gotoMycart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_15__["CartPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductdetailPage.prototype.goBack = function () {
        this.location.back();
    };
    ProductdetailPage.prototype.addtoFav = function () {
        var _this = this;
        var LoggedIn = this.auth.isAuthenticated();
        console.log('LoggedIn:', LoggedIn);
        if (LoggedIn) {
            this.auth.getToken().then(function (token) {
                var body = {
                    "sku": _this.productData.basic.sku
                };
                _this.service.addProductToWishlist(token, body).subscribe(function (val) {
                    _this.productData.isWishList = true;
                    _this.rest.presentToastOptionsWithOutClose('Added into wishlist.', 'top');
                }, function (err) {
                    if (err.status == 401) {
                        _this.router.navigate(['singin']);
                    }
                    _this.rest.presentToastOptionsWithOutClose('We can\'t add this product into wishlist.', 'top');
                    console.log('wishlist Err', err);
                });
            }, function (err) {
                _this.router.navigate(['singin']);
            });
        }
        else {
            console.log('test');
            this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
        }
    };
    ProductdetailPage.prototype.removeFav = function () {
        var _this = this;
        var LoggedIn = this.auth.isAuthenticated();
        if (LoggedIn) {
            this.auth.getToken().then(function (token) {
                var lstwishData = JSON.parse(window.localStorage.getItem('wishListItems'));
                var itemWish = lstwishData.find(function (x) { x = x.product.id == _this.productData.basic.id; return x; });
                _this.service.removeProductFromWishlist(token, itemWish.item_id).subscribe(function (val) {
                    _this.productData.isWishList = false;
                    _this.rest.presentToastOptionsWithOutClose('This Product remove from wishlist.', 'top');
                    _this.rest.wishlist();
                }, function (err) {
                    if (err.status == 401) {
                        var stateURL = _this.router.routerState.snapshot.url;
                        console.log('stateURL:', stateURL);
                        _this.router.navigate(['/signin']);
                    }
                    else {
                        _this.rest.presentToastOptionsWithOutClose('We can\'t remove this product into wishlist.', 'top');
                    }
                    console.log('wishlist Err', err);
                });
            }, function (err) {
                _this.router.navigate(['singin']);
            });
        }
        else {
            console.log('test');
            this.rest.presentAlertLogin('Please login to add this product to your wishlist.');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], ProductdetailPage.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner_thumb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], ProductdetailPage.prototype, "slider_thumb", void 0);
    ProductdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetail',
            template: __webpack_require__(/*! ./productdetail.page.html */ "./src/app/productdetail/productdetail.page.html"),
            styles: [__webpack_require__(/*! ./productdetail.page.scss */ "./src/app/productdetail/productdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _api_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_6__["MagentoServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], ProductdetailPage);
    return ProductdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=productdetail-productdetail-module.js.map