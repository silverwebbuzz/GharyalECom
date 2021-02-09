(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storelocator-storelocator-module"],{

/***/ "./src/app/storelocator/storelocator.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/storelocator/storelocator.module.ts ***!
  \*****************************************************/
/*! exports provided: StorelocatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorelocatorPageModule", function() { return StorelocatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storelocator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storelocator.page */ "./src/app/storelocator/storelocator.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");








var routes = [
    {
        path: '',
        component: _storelocator_page__WEBPACK_IMPORTED_MODULE_6__["StorelocatorPage"]
    }
];
var StorelocatorPageModule = /** @class */ (function () {
    function StorelocatorPageModule() {
    }
    StorelocatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_storelocator_page__WEBPACK_IMPORTED_MODULE_6__["StorelocatorPage"]]
        })
    ], StorelocatorPageModule);
    return StorelocatorPageModule;
}());



/***/ }),

/***/ "./src/app/storelocator/storelocator.page.html":
/*!*****************************************************!*\
  !*** ./src/app/storelocator/storelocator.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Store Locator\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding style=\"--background: #f1f1f1;\">\n\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\n  <ion-card *ngFor=\"let store of AllStore\" style=\"margin:0px; border-radius: 0px; margin: 5px; --background: #fff; box-shadow: 0px 0px 0px 0px;\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <img [defaultImage]=\"'../../assets/img/no-image-icon-4.png'\" [lazyLoad]=\"image(mediaURL + store.image)\" style=\"height: 75px; width: 75px;\"/>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-row style=\"font-weight: bolder; color: black; font-size: 18px;\">\n          {{store.name}}\n        </ion-row>\n        <ion-row style=\"color: black; font-size: 12px;\">\n            {{store.street_address | titlecase}} {{store.city | titlecase}}, {{store.state | titlecase}}, Zip Code: {{store.zipcode}} {{store.country | titlecase}}\n        </ion-row>\n        <ion-row style=\"color: black; font-size: 12px;\">\n          Phone: {{store.phone_number}}\n        </ion-row>\n        <ion-row>\n          <ion-button expand=\"full\" size=\"small\" style=\"text-transform: none; width: 100%; margin-left: 50px; margin-right: 50px; color: #FFF;\" (click)=\"viewMap(store)\">\n            VIEW MAP\n          </ion-button>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ng-container>\n\n<!-- <ng-template #elseTemplate>\n\n    <ion-card *ngFor=\"let item of arrayOne(6)\" style=\"margin:0px; border-radius: 0px; margin: 5px; --background: #fff;\">\n        <ion-row>\n          <ion-col size=\"3\">\n              <ion-skeleton-text animated  style=\"height: 75px; width: 75px;\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-row style=\"font-weight: bolder; color: black; font-size: 18px;\">\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </ion-row>\n            <ion-row style=\"color: black; font-size: 12px;\">\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </ion-row>\n            <ion-row style=\"color: black; font-size: 12px;\">\n                <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n            </ion-row>\n            <ion-row>\n              <ion-button expand=\"full\" size=\"small\" style=\"text-transform: none; width: 100%; margin-left: 50px; margin-right: 50px; color: #FFF;\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n              </ion-button>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n</ng-template> -->\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-button expand=\"full\" size=\"large\" style=\"margin: 0px; color: #fff;\" (click)=\"viewMap()\">\n    VIEW ALL STORE\n  </ion-button>\n</ion-footer> -->\n"

/***/ }),

/***/ "./src/app/storelocator/storelocator.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/storelocator/storelocator.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbG9jYXRvci9zdG9yZWxvY2F0b3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/storelocator/storelocator.page.ts":
/*!***************************************************!*\
  !*** ./src/app/storelocator/storelocator.page.ts ***!
  \***************************************************/
/*! exports provided: StorelocatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorelocatorPage", function() { return StorelocatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_location_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/location/location.component */ "./src/app/component/location/location.component.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/magento-service.service */ "./src/app/api/magento-service.service.ts");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");








var StorelocatorPage = /** @class */ (function () {
    function StorelocatorPage(config, modalCtrl, service, rest, statusBar) {
        var _this = this;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.rest = rest;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.AllStore = [];
        this.mediaURL = this.config.mediaURL;
        this.service.getStoreListing().subscribe(function (val) {
            _this.isLoaded = true;
            _this.AllStore = val;
            console.log(_this.AllStore);
        }, function (err) {
            _this.isLoaded = true;
            _this.rest.presentToastOptionsWithOutClose('Something Wrong try again.');
            console.log('Store listing Err:', err);
        });
    }
    StorelocatorPage.prototype.ngOnInit = function () {
    };
    StorelocatorPage.prototype.ionViewWillEnter = function () {
        //this.statusBar.overlaysWebView(false);
        //this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#5d5e5e');
    };
    StorelocatorPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    StorelocatorPage.prototype.image = function (URL) {
        return URL;
    };
    StorelocatorPage.prototype.viewMap = function (store) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _component_location_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"],
                            componentProps: {
                                storeDetail: store
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorelocatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-storelocator',
            template: __webpack_require__(/*! ./storelocator.page.html */ "./src/app/storelocator/storelocator.page.html"),
            styles: [__webpack_require__(/*! ./storelocator.page.scss */ "./src/app/storelocator/storelocator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _api_magento_service_service__WEBPACK_IMPORTED_MODULE_5__["MagentoServiceService"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], StorelocatorPage);
    return StorelocatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=storelocator-storelocator-module.js.map