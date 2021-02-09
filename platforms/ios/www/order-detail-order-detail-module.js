(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-detail-order-detail-module"],{

/***/ "./src/app/order-detail/order-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/order-detail/order-detail.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");








var routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]
    }
];
var OrderDetailPageModule = /** @class */ (function () {
    function OrderDetailPageModule() {
    }
    OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
        })
    ], OrderDetailPageModule);
    return OrderDetailPageModule;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.page.html":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n    <ion-card class=\"order_id\">\n      <ion-row class=\"row-block\">\n        <ion-label>Order #{{order.increment_id}}</ion-label>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_status\">\n      <ion-row class=\"row-status\">\n        <ion-col size=\"6\">\n          <div class=\"order_date_div\">\n            <ion-text>Placed On</ion-text>\n          </div>\n          <div class=\"order_date\">\n            <ion-text>{{order.created_at | date}}</ion-text>\n          </div>\n\n        </ion-col>\n        <ion-col size=\"6\" class=\"order_badge\">\n          <ion-badge color=\"primary\" mode=\"md\">{{order.status | uppercase}}</ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_items\">\n      <ion-row class=\"order_items_count\" class=\"row-block\">\n        {{order.total_item_count}} ITEM(S) ORDERED\n      </ion-row>\n      <ion-row *ngFor=\"let item of order.items\" class=\"order_item\">\n        <ion-col size=\"4\" class=\"product_img\">\n          <img [defaultImage]=\"'../../assets/img/no-image-icon-4.png'\"  [lazyLoad]=\"getimage(item.sku)\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"product_name\" (click)=\"gotoProductDetails(item.product_id,item.name)\">\n            <ion-label>{{item.name}}</ion-label>\n          </div>\n          <ion-row class=\"product_qty\">\n            <ion-col size=\"5\" class=\"product_left_col\">\n              Qty :\n            </ion-col>\n            <ion-col size=\"7\" class=\"product_right_col\">\n              Ordered : {{item.qty_ordered}}\n              Shipped : {{item.qty_shipped}}\n              Canceled : {{item.qty_canceled}}\n              Refunded : {{item.qty_refunded}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" class=\"product_left_col\">\n              Price :\n            </ion-col>\n            <ion-col size=\"7\" class=\"product_right_col\">\n              {{order.order_currency_code}} {{item.price}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" class=\"product_left_col\">\n              Subtotal :\n            </ion-col>\n            <ion-col size=\"7\" class=\"product_right_col\">\n              {{order.order_currency_code}} {{item.row_total}}\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_price\">\n      <ion-row class=\"card_title row-block\">\n        <ion-label>PRICE DETAILS</ion-label>\n      </ion-row>\n      <ion-row class=\"order_price_row\">\n        <ion-col size=\"8\" class=\"order_price_left\">\n          Subtotal\n        </ion-col>\n        <ion-col size=\"4\" class=\"order_price_right\">\n          {{order.order_currency_code}} {{order.subtotal}}\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"order_shipping_row\">\n        <ion-col size=\"8\" class=\"order_shipping_left\">\n          Shipping & Handling\n        </ion-col>\n        <ion-col size=\"4\" class=\"order_shipping_right\">\n          {{order.order_currency_code}} {{order.shipping_amount}}\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"order_discount_row\">\n        <ion-col size=\"8\" class=\"order_discount_left\">\n          Discount\n        </ion-col>\n        <ion-col size=\"4\" class=\"order_discount_right\">\n          {{order.order_currency_code}} {{order.discount_amount}}\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"order_tax_row\">\n        <ion-col size=\"8\" class=\"order_tax_left\">\n          Tax\n        </ion-col>\n        <ion-col size=\"4\" class=\"order_tax_right\">\n          {{order.order_currency_code}} {{order.tax_amount}}\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"order_grand_total_row\">\n        <ion-col size=\"8\" class=\"order_grand_total_left\">\n          Grand Total\n        </ion-col>\n        <ion-col size=\"4\" class=\"order_grand_total_right\">\n          {{order.order_currency_code}} {{order.grand_total}}\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_shipping_payment\">\n      <ion-row class=\"card_title row-block\">\n        <ion-label>SHIPPING AND PAYMENT INFO</ion-label>\n      </ion-row>\n      <ion-row class=\"card_sub_title row-block\">\n        <ion-label>SHIPPING ADDRESS</ion-label>\n      </ion-row>\n      <ion-row class=\"order_shipping_address\">\n        <h6>{{order.extension_attributes.shipping_assignments[0].shipping.address.firstname | titlecase}}\n          {{order.extension_attributes.shipping_assignments[0].shipping.address.lastname | titlecase}}</h6>\n        <p>{{order.extension_attributes.shipping_assignments[0].shipping.address.street.join(', ')}}</p>\n        <p>{{order.extension_attributes.shipping_assignments[0].shipping.address.city}},</p>\n        <p>{{order.extension_attributes.shipping_assignments[0].shipping.address.region}} -\n          {{order.extension_attributes.shipping_assignments[0].shipping.address.postcode}}</p>\n        <p>{{order.extension_attributes.shipping_assignments[0].shipping.address.country_id}}</p>\n      </ion-row>\n\n      <ion-row class=\"card_sub_title row-block\">\n        <ion-label>BILLING ADDRESS</ion-label>\n      </ion-row>\n      <ion-row class=\"order_billing_payment\">\n        <h6>{{order.billing_address.firstname | titlecase}} {{order.billing_address.lastname | titlecase}}</h6>\n        <p>{{order.billing_address.street.join(', ')}}</p>\n        <p>{{order.billing_address.city}},</p>\n        <p>{{order.billing_address.region}} - {{order.billing_address.postcode}}</p>\n        <p>{{order.billing_address.country_id}}</p>\n      </ion-row>\n\n      <ion-row class=\"card_sub_title row-block\">\n        <ion-label>SHIPPING METHOD</ion-label>\n      </ion-row>\n      <ion-row class=\"order_shipping_method\">\n        {{order.shipping_description}}\n      </ion-row>\n      <ion-row class=\"card_sub_title row-block\">\n        <ion-label>PAYMENT METHOD</ion-label>\n      </ion-row>\n      <ion-row class=\"order_payment_method\">\n        {{order.payment.additional_information.join(',')}}\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n  <ng-template #elseTemplate>\n    <ion-card class=\"order_id\">\n      <ion-row>\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_status\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"order_date_div\">\n            <ion-text>Placed On</ion-text>\n          </div>\n          <div class=\"order_date\">\n              <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </div>\n\n        </ion-col>\n        <ion-col size=\"6\" class=\"order_badge\">\n            <ion-skeleton-text animated style=\"width: 100%;height: 100%;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_items\">\n      <ion-row class=\"order_items_count\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row class=\"order_item\">\n        <ion-col size=\"4\" class=\"product_img\">\n            <ion-skeleton-text animated style=\"width: 100%;height: 150px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"product_name\">\n              <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </div>\n          <ion-row class=\"product_qty\">\n              <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n              <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n              <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"order_item\">\n          <ion-col size=\"4\" class=\"product_img\">\n              <ion-skeleton-text animated style=\"width: 100%;height: 150px;\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"product_name\">\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </div>\n            <ion-row class=\"product_qty\">\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </ion-row>\n            <ion-row>\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </ion-row>\n            <ion-row>\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_price\">\n      <ion-row class=\"card_title\">\n        <ion-label>PRICE DETAILS</ion-label>\n      </ion-row>\n      <ion-row class=\"order_price_row\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row class=\"order_shipping_row\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row class=\"order_discount_row\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row class=\"order_tax_row\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row class=\"order_grand_total_row\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"order_shipping_payment\">\n      <ion-row class=\"card_title\">\n        <ion-label>SHIPPING AND PAYMENT INFO</ion-label>\n      </ion-row>\n      <ion-row class=\"card_sub_title\">\n        <ion-label>SHIPPING ADDRESS</ion-label>\n      </ion-row>\n      <ion-row class=\"order_shipping_address\">\n          <h6><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></h6>\n          <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n      </ion-row>\n\n      <ion-row class=\"card_sub_title\">\n        <ion-label>BILLING ADDRESS</ion-label>\n      </ion-row>\n      <ion-row class=\"order_billing_payment\">\n        <h6><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></h6>\n        <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text></p>\n      </ion-row>\n\n      <ion-row class=\"card_sub_title\">\n        <ion-label>SHIPPING METHOD</ion-label>\n      </ion-row>\n      <ion-row class=\"order_shipping_method\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row class=\"card_sub_title\">\n        <ion-label>PAYMENT METHOD</ion-label>\n      </ion-row>\n      <ion-row class=\"order_payment_method\">\n          <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n      </ion-row>\n    </ion-card>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/order-detail/order-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f1f1f1; }\n\nion-card {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  border-radius: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  background: #fff;\n  box-shadow: 0px 0px 0px 0px; }\n\n.order_id ion-label {\n  font-size: 16px;\n  font-weight: bold;\n  color: #000; }\n\n.order_status .order_date_div {\n  font-size: 12px;\n  margin-bottom: 5px; }\n\n.order_status .order_date {\n  font-size: 13px;\n  color: #000; }\n\n.order_status .order_badge {\n  text-align: right; }\n\n.order_status .order_badge ion-badge {\n    padding: 10px;\n    border-radius: 0px; }\n\n.order_items .order_items_count {\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: #000; }\n\n.order_items .product_name {\n  color: #000;\n  font-weight: bold; }\n\n.order_items .product_right_col {\n  color: #000; }\n\n.order_price .card_title {\n  font-weight: 600;\n  margin-bottom: 0px;\n  color: #000; }\n\n.order_price .order_price_right {\n  color: #000; }\n\n.order_price .order_shipping_right {\n  color: #000; }\n\n.order_price .order_tax_right {\n  color: #000; }\n\n.order_price .order_grand_total_right {\n  color: #000;\n  font-weight: bold; }\n\n.order_shipping_payment .card_title {\n  margin-bottom: 0px;\n  color: #000; }\n\n.order_shipping_payment .order_shipping_address {\n  color: #000;\n  margin-bottom: 0px;\n  padding: 0px 10px 10px 10px; }\n\n.order_shipping_payment .order_shipping_address h6 {\n    width: 100%; }\n\n.order_shipping_payment .order_shipping_address p {\n    width: 100%;\n    margin: 0; }\n\n.order_shipping_payment .card_sub_title {\n  font-weight: 600;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  color: #000;\n  padding: 10px; }\n\n.order_shipping_payment .order_billing_payment {\n  color: #000;\n  margin-bottom: 0px;\n  padding: 0px 10px 10px 10px; }\n\n.order_shipping_payment .order_billing_payment h6 {\n    width: 100%; }\n\n.order_shipping_payment .order_billing_payment p {\n    width: 100%;\n    margin: 0; }\n\n.order_shipping_payment .order_shipping_method {\n  color: #000;\n  margin-bottom: 0px;\n  padding: 10px 10px 10px 10px; }\n\n.order_shipping_payment .order_payment_method {\n  color: #000;\n  margin-bottom: 0px;\n  padding: 10px 10px 10px 10px; }\n\n.order_price_right,\n.order_shipping_right,\n.order_discount_right,\n.order_tax_right,\n.order_grand_total_right {\n  text-align: right; }\n\n.order_price_row,\n.order_shipping_row,\n.order_discount_row,\n.order_tax_row,\n.order_grand_total_row {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.row-status {\n  padding: 5px; }\n\n.row-block {\n  background: #f1f1f1 !important;\n  color: #000 !important;\n  padding: 10px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUV0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBRVEsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR25CO0VBRVEsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUgxQjtFQU1RLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBUG5CO0VBVVEsaUJBQWlCLEVBQUE7O0FBVnpCO0lBWVksYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQUk5QjtFQUVRLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUpuQjtFQU9RLFdBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFSekI7RUFXUSxXQUFVLEVBQUE7O0FBR2xCO0VBRVEsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBSm5CO0VBT1EsV0FBVSxFQUFBOztBQVBsQjtFQVVRLFdBQVUsRUFBQTs7QUFWbEI7RUFhUSxXQUFVLEVBQUE7O0FBYmxCO0VBZ0JRLFdBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHekI7RUFHUSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUpuQjtFQU9RLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBVG5DO0lBV1ksV0FBVyxFQUFBOztBQVh2QjtJQWNZLFdBQVc7SUFDWCxTQUFTLEVBQUE7O0FBZnJCO0VBbUJRLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBdkJyQjtFQTBCUSxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDJCQUEyQixFQUFBOztBQTVCbkM7SUE4QlksV0FBVyxFQUFBOztBQTlCdkI7SUFpQ1ksV0FBVztJQUNYLFNBQVMsRUFBQTs7QUFsQ3JCO0VBc0NRLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsNEJBQTRCLEVBQUE7O0FBeENwQztFQTJDUSxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDRCQUE0QixFQUFBOztBQUlwQzs7Ozs7RUFLSSxpQkFBaUIsRUFBQTs7QUFHckI7Ozs7O0VBS0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuaW9uLWNhcmR7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgLy9wYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbn1cbi5vcmRlcl9pZHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cbi5vcmRlcl9zdGF0dXN7XG4gICAgLm9yZGVyX2RhdGVfZGl2e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLm9yZGVyX2RhdGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC5vcmRlcl9iYWRnZXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ub3JkZXJfaXRlbXN7XG4gICAgLm9yZGVyX2l0ZW1zX2NvdW50e1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgIFxuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgLnByb2R1Y3RfbmFtZXtcbiAgICAgICAgY29sb3I6IzAwMDsgICBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5wcm9kdWN0X3JpZ2h0X2NvbHtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG59XG4ub3JkZXJfcHJpY2V7XG4gICAgLmNhcmRfdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC5vcmRlcl9wcmljZV9yaWdodHtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG4gICAgLm9yZGVyX3NoaXBwaW5nX3JpZ2h0e1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgIH1cbiAgICAub3JkZXJfdGF4X3JpZ2h0e1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgIH1cbiAgICAub3JkZXJfZ3JhbmRfdG90YWxfcmlnaHR7XG4gICAgICAgIGNvbG9yOiMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5vcmRlcl9zaGlwcGluZ19wYXltZW50e1xuICAgIC5jYXJkX3RpdGxle1xuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC5vcmRlcl9zaGlwcGluZ19hZGRyZXNze1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgaDZ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfc3ViX3RpdGxle1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5vcmRlcl9iaWxsaW5nX3BheW1lbnR7XG4gICAgICAgIGNvbG9yOiMwMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBoNntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAub3JkZXJfc2hpcHBpbmdfbWV0aG9ke1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgfVxuICAgIC5vcmRlcl9wYXltZW50X21ldGhvZHtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIH1cbn1cblxuLm9yZGVyX3ByaWNlX3JpZ2h0LCBcbi5vcmRlcl9zaGlwcGluZ19yaWdodCwgXG4ub3JkZXJfZGlzY291bnRfcmlnaHQsIFxuLm9yZGVyX3RheF9yaWdodCwgXG4ub3JkZXJfZ3JhbmRfdG90YWxfcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5vcmRlcl9wcmljZV9yb3csXG4ub3JkZXJfc2hpcHBpbmdfcm93LFxuLm9yZGVyX2Rpc2NvdW50X3Jvdyxcbi5vcmRlcl90YXhfcm93LFxuLm9yZGVyX2dyYW5kX3RvdGFsX3Jvd3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cblxuLnJvdy1zdGF0dXN7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucm93LWJsb2Nre1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/order-detail/order-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.ts ***!
  \***************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");








var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(config, location, rest, route, router, statusBar, service) {
        var _this = this;
        this.config = config;
        this.location = location;
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.service = service;
        this.isLoaded = false;
        this.isEmpty = false;
        this.dfImage = this.config.dfImage;
        this.productBaseURL = this.config.productImageURL;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.order_id) {
                _this.OrderId = params.order_id;
                console.log('cate:', _this.OrderId);
                _this.getOrderDetails();
            }
        });
        this.service.getProductImage('01 763 7723 4051-07 8 18 79').subscribe(function (val) {
            console.log(val[0].file);
        });
    }
    OrderDetailPage.prototype.ngOnInit = function () {
    };
    OrderDetailPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    OrderDetailPage.prototype.gotoProductDetails = function (PId, PName) {
        var navigationExtras = {
            queryParams: {
                product_id: JSON.stringify(PId),
                product_name: JSON.stringify(PName)
            }
        };
        this.router.navigate(['/productdetail'], navigationExtras);
    };
    OrderDetailPage.prototype.getOrderDetails = function () {
        var _this = this;
        this.service.getUserOrderDetail(this.OrderId).subscribe(function (val) {
            _this.order = val;
            _this.isLoaded = true;
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
    OrderDetailPage.prototype.getimage = function (sku) {
        return "../../assets/img/no-image-icon-4.png";
    };
    OrderDetailPage.prototype.goBack = function () {
        this.location.back();
    };
    OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.page.html */ "./src/app/order-detail/order-detail.page.html"),
            styles: [__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/order-detail/order-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_4__["MagentoServiceService"]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-detail-order-detail-module.js.map