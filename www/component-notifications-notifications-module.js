(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-notifications-notifications-module"],{

/***/ "./src/app/component/notifications/notifications.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/notifications/notifications.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/component/notifications/notifications.page.ts");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/fesm5/angular2-collapsible.js");








var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_7__["CollapsibleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/component/notifications/notifications.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/notifications/notifications.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-card>\n      <collapsible-list [type]=\"'accordion'\">\n        <collapsible-list-item *ngFor=\"let item of notificationArray;let i = index;\">\n          <collapsible-header class=\"waves-effect\" (click)=\"markAsRead(i)\">\n            <ion-item class=\"desc-head\" lines=\"none\"  [ngClass]=\"item.IsRead?'isread':'unread'\">\n              {{item.title}}\n              <img src=\"../../../assets/icon/iconbag.png\" slot=\"start\" style=\"height: 50px; width: 50px;\"/>\n              \n              <ion-icon name=\"arrow-down\" slot=\"end\"></ion-icon>\n            </ion-item>\n          </collapsible-header>\n          <collapsible-body [expanded]=\"false\" class=\"body-spc\">\n            <ion-row class=\"detail-spc\">\n              <div class=\"description-value\" [innerHTML]=\"item.content\">\n              </div>\n            </ion-row>\n          </collapsible-body>\n        </collapsible-list-item>\n      </collapsible-list>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/component/notifications/notifications.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/component/notifications/notifications.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  background: #fff;\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px 0px; }\n  ion-content ion-card collapsible-list {\n    margin: 0px; }\n  ion-content ion-card collapsible-list collapsible-header {\n      padding: 0px; }\n  ion-content ion-card collapsible-list collapsible-header ion-item {\n        --padding-start: 5px;\n        font-weight: bold; }\n  ion-content ion-card collapsible-list collapsible-body {\n      padding: 0px 10px 0px 10px;\n      background: #f1f1f1;\n      box-shadow: 0px 0px 0px 0px !important; }\n  ion-content ion-card collapsible-list .isread {\n      --background: #fff; }\n  ion-content ion-card collapsible-list .unread {\n      --background: #f9efd9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZ2hhcnlhbC1lY29tbWVyY2UtYXBwL3NyYy9hcHAvY29tcG9uZW50L25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJUSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkIsRUFBQTtFQVBuQztJQVVZLFdBQVcsRUFBQTtFQVZ2QjtNQWFnQixZQUFZLEVBQUE7RUFiNUI7UUFnQm9CLG9CQUFnQjtRQUNoQixpQkFBaUIsRUFBQTtFQWpCckM7TUFxQmdCLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsc0NBQXNDLEVBQUE7RUF2QnREO01BMEJnQixrQkFBYSxFQUFBO0VBMUI3QjtNQTZCZ0IscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLy8tLWJhY2tncm91bmQ6ICNmMWYxZjE7XG5cbiAgICBpb24tY2FyZHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLWxpc3R7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAgICAgY29sbGFwc2libGUtaGVhZGVye1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sbGFwc2libGUtYm9keXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlzcmVhZHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudW5yZWFke1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2Y5ZWZkOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/notifications/notifications.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/notifications/notifications.page.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");




var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(location, notify) {
        var _this = this;
        this.location = location;
        this.notify = notify;
        this.notificationArray = [];
        this.notify.notification.subscribe(function (val) {
            if (val) {
                var reverseArray = val.reverse();
                _this.notificationArray = reverseArray;
            }
        });
    }
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage.prototype.markAsRead = function (index) {
        this.notificationArray[index].IsRead = true;
        var notificationId = this.notificationArray[index].notification_id;
        var localStorage = JSON.parse(window.localStorage.getItem('readNotification'));
        if (localStorage) {
            if (!localStorage.includes(notificationId)) {
                localStorage.push(notificationId);
                window.localStorage.setItem('readNotification', JSON.stringify(localStorage));
            }
        }
        else {
            window.localStorage.setItem('readNotification', JSON.stringify([notificationId]));
        }
        if (this.notificationArray) {
            var countUnread = this.notificationArray.filter(function (x) { return !x.IsRead; }).length;
            this.notify.unReadCount.next(countUnread);
        }
    };
    NotificationsPage.prototype.goBack = function () {
        this.location.back();
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/component/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/component/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=component-notifications-notifications-module.js.map