(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <!-- <footer-cmp></footer-cmp> -->\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\" class=\"mt-md-5\">\n    <form [formGroup] = \"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <h1>Login Form</h1>\n        <div>\n            <input type=\"text\" formControlName=\"username\" placeholder=\"Username\" required=\"\" id=\"username\" />\n        </div>\n        <div>\n            <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" required=\"\" id=\"password\" />\n        </div>\n        <div>\n            <input type=\"submit\" [disabled]=\"!loginForm.valid\" value=\"Log in\" />\n            <!-- <a href=\"#\">Lost your password?</a>\n            <a href=\"#\">Register</a> -->\n        </div>\n    </form><!-- form -->\n    \n</section><!-- content -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\n            <i class=\"nc-icon nc-bell-55\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a class=\"simple-text logo-normal ml-md-5\">\n      Njeek\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");


















function tokenGetter() {
    return localStorage.getItem('token');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__["AngularFontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutes"], {
                useHash: true
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter
                }
            }),
            _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__["FixedPluginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");



const AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];


/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' // <- ADD THIS
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



let AuthService = class AuthService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    // ...
    isAuthenticated() {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
], AuthService);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminLayoutComponent = class AdminLayoutComponent {
    ngOnInit() { }
};
AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
        styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
    })
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  background: #DCDDDF url(https://cssdeck.com/uploads/media/items/7/7AF2Qzt.png);\n  color: #000;\n  font: 14px Arial;\n  margin: 0 auto;\n  padding: 0;\n  position: relative;\n}\n\nh1 {\n  font-size: 28px;\n}\n\nh2 {\n  font-size: 26px;\n}\n\nh3 {\n  font-size: 18px;\n}\n\nh4 {\n  font-size: 16px;\n}\n\nh5 {\n  font-size: 14px;\n}\n\nh6 {\n  font-size: 12px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #563D64;\n}\n\nsmall {\n  font-size: 10px;\n}\n\nb, strong {\n  font-weight: bold;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.alignleft {\n  float: left;\n  margin-right: 15px;\n}\n\n.alignright {\n  float: right;\n  margin-left: 15px;\n}\n\n.clearfix:after,\nform:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.container {\n  margin: 25px auto;\n  position: relative;\n  width: 900px;\n}\n\n#content {\n  background: #f9f9f9;\n  background: linear-gradient(top, #f8f8f8 0%, #f9f9f9 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#f8f8f8\", endColorstr=\"#f9f9f9\",GradientType=0 );\n  -ms-box-shadow: 0 1px 0 #fff inset;\n  -o-box-shadow: 0 1px 0 #fff inset;\n  box-shadow: 0 1px 0 #fff inset;\n  border: 1px solid #c4c6ca;\n  margin: 0 auto;\n  padding: 25px 0 0;\n  position: relative;\n  text-align: center;\n  text-shadow: 0 1px 0 #fff;\n  width: 400px;\n}\n\n#content h1 {\n  color: #7E7E7E;\n  font: bold 25px Helvetica, Arial, sans-serif;\n  letter-spacing: -0.05em;\n  line-height: 20px;\n  margin: 10px 0 30px;\n}\n\n#content h1:before,\n#content h1:after {\n  content: \"\";\n  height: 1px;\n  position: absolute;\n  top: 10px;\n  width: 27%;\n}\n\n#content h1:after {\n  background: #7e7e7e;\n  background: linear-gradient(left, #7e7e7e 0%, white 100%);\n  right: 0;\n}\n\n#content h1:before {\n  background: #7e7e7e;\n  background: linear-gradient(right, #7e7e7e 0%, white 100%);\n  left: 0;\n}\n\n#content:after,\n#content:before {\n  background: #f9f9f9;\n  background: linear-gradient(top, #f8f8f8 0%, #f9f9f9 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#f8f8f8\", endColorstr=\"#f9f9f9\",GradientType=0 );\n  border: 1px solid #c4c6ca;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: -1px;\n  position: absolute;\n  width: 100%;\n}\n\n#content:after {\n  -webkit-transform: rotate(2deg);\n  transform: rotate(2deg);\n  top: 0;\n  z-index: -1;\n}\n\n#content:before {\n  -webkit-transform: rotate(-3deg);\n  transform: rotate(-3deg);\n  top: 0;\n  z-index: -2;\n}\n\n#content form {\n  margin: 0 20px;\n  position: relative;\n}\n\n#content form input[type=text],\n#content form input[type=password] {\n  border-radius: 3px;\n  -ms-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;\n  -o-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;\n  box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;\n  transition: all 0.5s ease;\n  background: #eae7e7 url(https://cssdeck.com/uploads/media/items/8/8bcLQqF.png) no-repeat;\n  border: 1px solid #c8c8c8;\n  color: #777;\n  font: 13px Helvetica, Arial, sans-serif;\n  margin: 0 0 10px;\n  padding: 15px 10px 15px 40px;\n  width: 80%;\n}\n\n#content form input[type=text]:focus,\n#content form input[type=password]:focus {\n  -ms-box-shadow: 0 0 2px #ed1c24 inset;\n  -o-box-shadow: 0 0 2px #ed1c24 inset;\n  box-shadow: 0 0 2px #ed1c24 inset;\n  background-color: #fff;\n  border: 1px solid #ed1c24;\n  outline: none;\n}\n\n#username {\n  background-position: 10px 10px !important;\n}\n\n#password {\n  background-position: 10px -53px !important;\n}\n\n#content form input[type=submit] {\n  background: #fee79a;\n  background: linear-gradient(top, #fee79a 0%, #fec151 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#fee79a\", endColorstr=\"#fec151\",GradientType=0 );\n  border-radius: 30px;\n  -ms-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  -o-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  border: 1px solid #D69E31;\n  color: #85592e;\n  cursor: pointer;\n  float: left;\n  font: bold 15px Helvetica, Arial, sans-serif;\n  height: 35px;\n  margin: 20px 0 35px 15px;\n  position: relative;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  width: 120px;\n}\n\n#content form input[type=submit]:hover {\n  background: #fec151;\n  background: linear-gradient(top, #fec151 0%, #fee79a 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#fec151\", endColorstr=\"#fee79a\",GradientType=0 );\n}\n\n#content form div a {\n  color: #004a80;\n  float: right;\n  font-size: 12px;\n  margin: 30px 15px 0 0;\n  text-decoration: underline;\n}\n\n.button {\n  background: #f7f9fa;\n  background: linear-gradient(top, #f7f9fa 0%, #f0f0f0 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#f7f9fa\", endColorstr=\"#f0f0f0\",GradientType=0 );\n  -ms-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;\n  -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;\n  border-radius: 0 0 5px 5px;\n  border-top: 1px solid #CFD5D9;\n  padding: 15px 0;\n}\n\n.button a {\n  background: url(https://cssdeck.com/uploads/media/items/8/8bcLQqF.png) 0 -112px no-repeat;\n  color: #7E7E7E;\n  font-size: 17px;\n  padding: 2px 0 2px 40px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.button a:hover {\n  background-position: 0 -135px;\n  color: #00aeef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWFkc3VmeWFuL0Rlc2t0b3AvbmFqZWVrLWFkbWluL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7RUFTSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUNJLDhFQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQUksZUFBQTtBQ0lKOztBREhBO0VBQUksZUFBQTtBQ09KOztBRE5BO0VBQUksZUFBQTtBQ1VKOztBRFRBO0VBQUksZUFBQTtBQ2FKOztBRFpBO0VBQUksZUFBQTtBQ2dCSjs7QURmQTtFQUFJLGVBQUE7QUNtQko7O0FEbEJBO0VBQW1CLGNBQUE7QUNzQm5COztBRHJCQTtFQUFPLGVBQUE7QUN5QlA7O0FEeEJBO0VBQVcsaUJBQUE7QUM0Qlg7O0FEM0JBO0VBQUcscUJBQUE7QUMrQkg7O0FEOUJBO0VBQVMsMEJBQUE7QUNrQ1Q7O0FEakNBO0VBQVEsV0FBQTtBQ3FDUjs7QURwQ0E7RUFBUyxZQUFBO0FDd0NUOztBRHZDQTtFQUFhLFdBQUE7RUFBYSxrQkFBQTtBQzRDMUI7O0FEM0NBO0VBQWMsWUFBQTtFQUFjLGlCQUFBO0FDZ0Q1Qjs7QUQvQ0E7O0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDa0RKOztBRGhEQTtFQUFhLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLFlBQUE7QUNzRHBEOztBRHJEQTtFQUNJLG1CQUFBO0VBS0EsMERBQUE7RUFDQSxtSEFBQTtFQUdBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ3dESjs7QUR0REE7RUFDSSxjQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUN5REo7O0FEdkRBOztFQUVJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzBESjs7QUR4REE7RUFDSSxtQkFBQTtFQUtBLHlEQUFBO0VBQ0EsUUFBQTtBQzJESjs7QUR6REE7RUFDSSxtQkFBQTtFQUtBLDBEQUFBO0VBQ0EsT0FBQTtBQzRESjs7QUQxREE7O0VBRUksbUJBQUE7RUFLQSwwREFBQTtFQUNBLG1IQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDNkRKOztBRDNEQTtFQUNJLCtCQUFBO0VBSUEsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQzhESjs7QUQ1REE7RUFDSSxnQ0FBQTtFQUlBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUMrREo7O0FEN0RBO0VBQWdCLGNBQUE7RUFBZ0Isa0JBQUE7QUNrRWhDOztBRGpFQTs7RUFNSSxrQkFBQTtFQUdBLGtFQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUtBLHlCQUFBO0VBQ0Esd0ZBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FDb0VKOztBRGxFQTs7RUFJSSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ3FFSjs7QURuRUE7RUFBWSx5Q0FBQTtBQ3VFWjs7QUR0RUE7RUFBWSwwQ0FBQTtBQzBFWjs7QUR6RUE7RUFDSSxtQkFBQTtFQUtBLDBEQUFBO0VBQ0EsbUhBQUE7RUFLQSxtQkFBQTtFQUdBLHNEQUFBO0VBQ0EscURBQUE7RUFDQSxrREFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtBQzRFSjs7QUQxRUE7RUFDSSxtQkFBQTtFQUtBLDBEQUFBO0VBQ0EsbUhBQUE7QUM2RUo7O0FEM0VBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQzhFSjs7QUQ1RUE7RUFDSSxtQkFBQTtFQUtBLDBEQUFBO0VBQ0EsbUhBQUE7RUFHQSxrREFBQTtFQUNBLGlEQUFBO0VBQ0EsOENBQUE7RUFLQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQytFSjs7QUQ3RUE7RUFDSSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUtBLHlCQUFBO0FDZ0ZKOztBRDlFQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtBQ2lGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBmb250LCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogI0RDRERERiB1cmwoaHR0cHM6Ly9jc3NkZWNrLmNvbS91cGxvYWRzL21lZGlhL2l0ZW1zLzcvN0FGMlF6dC5wbmcpO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQ6IDE0cHggQXJpYWw7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oMXsgZm9udC1zaXplOjI4cHg7fVxuaDJ7IGZvbnQtc2l6ZToyNnB4O31cbmgzeyBmb250LXNpemU6MThweDt9XG5oNHsgZm9udC1zaXplOjE2cHg7fVxuaDV7IGZvbnQtc2l6ZToxNHB4O31cbmg2eyBmb250LXNpemU6MTJweDt9XG5oMSxoMixoMyxoNCxoNSxoNnsgY29sb3I6IzU2M0Q2NDt9XG5zbWFsbHsgZm9udC1zaXplOjEwcHg7fVxuYiwgc3Ryb25neyBmb250LXdlaWdodDpib2xkO31cbmF7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuYTpob3ZlcnsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbi5sZWZ0IHsgZmxvYXQ6bGVmdDsgfVxuLnJpZ2h0IHsgZmxvYXQ6cmlnaHQ7IH1cbi5hbGlnbmxlZnQgeyBmbG9hdDogbGVmdDsgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XG4uYWxpZ25yaWdodCB7IGZsb2F0OiByaWdodDsgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cbi5jbGVhcmZpeDphZnRlcixcbmZvcm06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiLlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY29udGFpbmVyIHsgbWFyZ2luOiAyNXB4IGF1dG87IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDkwMHB4OyB9XG4jY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLCByZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ4LDI0OCwyNDgsMSkgMCUscmdiYSgyNDksMjQ5LDI0OSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSxyZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSxyZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLHJnYmEoMjQ5LDI0OSwyNDksMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmOGY4ZjgnLCBlbmRDb2xvcnN0cj0nI2Y5ZjlmOScsR3JhZGllbnRUeXBlPTAgKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAxcHggMCAjZmZmIGluc2V0O1xuICAgIC1vLWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwICNmZmYgaW5zZXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzZjYTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyNXB4IDAgMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuI2NvbnRlbnQgaDEge1xuICAgIGNvbG9yOiAjN0U3RTdFO1xuICAgIGZvbnQ6IGJvbGQgMjVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XG59XG4jY29udGVudCBoMTpiZWZvcmUsXG4jY29udGVudCBoMTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyNyU7XG59XG4jY29udGVudCBoMTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyNiwxMjYsMTI2KTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgIHJnYmEoMTI2LDEyNiwxMjYsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgIHJnYmEoMTI2LDEyNiwxMjYsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcbiAgICByaWdodDogMDtcbn1cbiNjb250ZW50IGgxOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyNiwxMjYsMTI2KTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIHJnYmEoMTI2LDEyNiwxMjYsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICByZ2JhKDEyNiwxMjYsMTI2LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQocmlnaHQsICByZ2JhKDEyNiwxMjYsMTI2LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgIGxlZnQ6IDA7XG59XG4jY29udGVudDphZnRlcixcbiNjb250ZW50OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLCByZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ4LDI0OCwyNDgsMSkgMCUscmdiYSgyNDksMjQ5LDI0OSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSxyZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSxyZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLHJnYmEoMjQ5LDI0OSwyNDksMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmOGY4ZjgnLCBlbmRDb2xvcnN0cj0nI2Y5ZjlmOScsR3JhZGllbnRUeXBlPTAgKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNmNhO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuI2NvbnRlbnQ6YWZ0ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuI2NvbnRlbnQ6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0yO1xufVxuI2NvbnRlbnQgZm9ybSB7IG1hcmdpbjogMCAyMHB4OyBwb3NpdGlvbjogcmVsYXRpdmUgfVxuI2NvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiNjb250ZW50IGZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwICNmZmYsIDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjA4KSBpbnNldDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiwgMCAtMnB4IDVweCByZ2JhKDAsMCwwLDAuMDgpIGluc2V0O1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDFweCAwICNmZmYsIDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjA4KSBpbnNldDtcbiAgICAtby1ib3gtc2hhZG93OiAwIDFweCAwICNmZmYsIDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjA4KSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwICNmZmYsIDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjA4KSBpbnNldDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlN2U3IHVybChodHRwczovL2Nzc2RlY2suY29tL3VwbG9hZHMvbWVkaWEvaXRlbXMvOC84YmNMUXFGLnBuZykgbm8tcmVwZWF0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udDogMTNweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggNDBweDtcbiAgICB3aWR0aDogODAlO1xufVxuI2NvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbiNjb250ZW50IGZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggI2VkMWMyNCBpbnNldDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAycHggI2VkMWMyNCBpbnNldDtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAwIDJweCAjZWQxYzI0IGluc2V0O1xuICAgIC1vLWJveC1zaGFkb3c6IDAgMCAycHggI2VkMWMyNCBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNlZDFjMjQgaW5zZXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQxYzI0O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4jdXNlcm5hbWUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHggIWltcG9ydGFudCB9XG4jcGFzc3dvcmQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IC01M3B4ICFpbXBvcnRhbnQgfVxuI2NvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU0LDIzMSwxNTQpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjU0LDIzMSwxNTQsMSkgMCUsIHJnYmEoMjU0LDE5Myw4MSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NCwyMzEsMTU0LDEpIDAlLHJnYmEoMjU0LDE5Myw4MSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMjMxLDE1NCwxKSAwJSxyZ2JhKDI1NCwxOTMsODEsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NCwyMzEsMTU0LDEpIDAlLHJnYmEoMjU0LDE5Myw4MSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMjMxLDE1NCwxKSAwJSxyZ2JhKDI1NCwxOTMsODEsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZWU3OWEnLCBlbmRDb2xvcnN0cj0nI2ZlYzE1MScsR3JhZGllbnRUeXBlPTAgKTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIGluc2V0O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgaW5zZXQ7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIGluc2V0O1xuICAgIC1vLWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIGluc2V0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENjlFMzE7XG4gICAgY29sb3I6ICM4NTU5MmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQ6IGJvbGQgMTVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDIwcHggMCAzNXB4IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICB3aWR0aDogMTIwcHg7XG59XG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTQsMTkzLDgxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NCwxOTMsODEsMSkgMCUsIHJnYmEoMjU0LDIzMSwxNTQsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMTkzLDgxLDEpIDAlLHJnYmEoMjU0LDIzMSwxNTQsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjU0LDE5Myw4MSwxKSAwJSxyZ2JhKDI1NCwyMzEsMTU0LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMTkzLDgxLDEpIDAlLHJnYmEoMjU0LDIzMSwxNTQsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjU0LDE5Myw4MSwxKSAwJSxyZ2JhKDI1NCwyMzEsMTU0LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmVjMTUxJywgZW5kQ29sb3JzdHI9JyNmZWU3OWEnLEdyYWRpZW50VHlwZT0wICk7XG59XG4jY29udGVudCBmb3JtIGRpdiBhIHtcbiAgICBjb2xvcjogIzAwNGE4MDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMzBweCAxNXB4IDAgMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDcsMjQ5LDI1MCk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDcsMjQ5LDI1MCwxKSAwJSwgcmdiYSgyNDAsMjQwLDI0MCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0NywyNDksMjUwLDEpIDAlLHJnYmEoMjQwLDI0MCwyNDAsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ3LDI0OSwyNTAsMSkgMCUscmdiYSgyNDAsMjQwLDI0MCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ3LDI0OSwyNTAsMSkgMCUscmdiYSgyNDAsMjQwLDI0MCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDcsMjQ5LDI1MCwxKSAwJSxyZ2JhKDI0MCwyNDAsMjQwLDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZjdmOWZhJywgZW5kQ29sb3JzdHI9JyNmMGYwZjAnLEdyYWRpZW50VHlwZT0wICk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpIGluc2V0O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKSBpbnNldDtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKSBpbnNldDtcbiAgICAtby1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSkgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGRDVEOTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uYnV0dG9uIGEge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2Nzc2RlY2suY29tL3VwbG9hZHMvbWVkaWEvaXRlbXMvOC84YmNMUXFGLnBuZykgMCAtMTEycHggbm8tcmVwZWF0O1xuICAgIGNvbG9yOiAjN0U3RTdFO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiAycHggMCAycHggNDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uYnV0dG9uIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzNXB4O1xuICAgIGNvbG9yOiAjMDBhZWVmO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgZm9udCwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRENERERGIHVybChodHRwczovL2Nzc2RlY2suY29tL3VwbG9hZHMvbWVkaWEvaXRlbXMvNy83QUYyUXp0LnBuZyk7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250OiAxNHB4IEFyaWFsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICM1NjNENjQ7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5iLCBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hbGlnbmxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYWxpZ25yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jbGVhcmZpeDphZnRlcixcbmZvcm06YWZ0ZXIge1xuICBjb250ZW50OiBcIi5cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuI2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmOGY4ZjggMCUsICNmOWY5ZjkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZjhmOCAwJSwgI2Y5ZjlmOSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y4ZjhmOCAwJSwgI2Y5ZjlmOSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmOGY4ZjggMCUsICNmOWY5ZjkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmOGY4ZjggMCUsICNmOWY5ZjkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2Y4ZjhmOFwiLCBlbmRDb2xvcnN0cj1cIiNmOWY5ZjlcIixHcmFkaWVudFR5cGU9MCApO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwICNmZmYgaW5zZXQ7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDFweCAwICNmZmYgaW5zZXQ7XG4gIC1vLWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAjZmZmIGluc2V0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNmNhO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjVweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiNjb250ZW50IGgxIHtcbiAgY29sb3I6ICM3RTdFN0U7XG4gIGZvbnQ6IGJvbGQgMjVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwIDMwcHg7XG59XG5cbiNjb250ZW50IGgxOmJlZm9yZSxcbiNjb250ZW50IGgxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMjclO1xufVxuXG4jY29udGVudCBoMTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICM3ZTdlN2U7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICM3ZTdlN2UgMCUsIHdoaXRlIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjN2U3ZTdlIDAlLCB3aGl0ZSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICM3ZTdlN2UgMCUsIHdoaXRlIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICM3ZTdlN2UgMCUsIHdoaXRlIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgIzdlN2U3ZSAwJSwgd2hpdGUgMTAwJSk7XG4gIHJpZ2h0OiAwO1xufVxuXG4jY29udGVudCBoMTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjN2U3ZTdlO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzdlN2U3ZSAwJSwgd2hpdGUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjN2U3ZTdlIDAlLCB3aGl0ZSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjN2U3ZTdlIDAlLCB3aGl0ZSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChyaWdodCwgIzdlN2U3ZSAwJSwgd2hpdGUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyaWdodCwgIzdlN2U3ZSAwJSwgd2hpdGUgMTAwJSk7XG4gIGxlZnQ6IDA7XG59XG5cbiNjb250ZW50OmFmdGVyLFxuI2NvbnRlbnQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhmOGY4IDAlLCAjZjlmOWY5IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmOGY4ZjggMCUsICNmOWY5ZjkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmOGY4ZjggMCUsICNmOWY5ZjkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhmOGY4IDAlLCAjZjlmOWY5IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjhmOGY4IDAlLCAjZjlmOWY5IDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmOGY4ZjhcIiwgZW5kQ29sb3JzdHI9XCIjZjlmOWY5XCIsR3JhZGllbnRUeXBlPTAgKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzZjYTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRlbnQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuI2NvbnRlbnQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMjtcbn1cblxuI2NvbnRlbnQgZm9ybSB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb250ZW50IGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcbiNjb250ZW50IGZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiwgMCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpIGluc2V0O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiwgMCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpIGluc2V0O1xuICAtbXMtYm94LXNoYWRvdzogMCAxcHggMCAjZmZmLCAwIC0ycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgaW5zZXQ7XG4gIC1vLWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiwgMCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAwICNmZmYsIDAgLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KSBpbnNldDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiAjZWFlN2U3IHVybChodHRwczovL2Nzc2RlY2suY29tL3VwbG9hZHMvbWVkaWEvaXRlbXMvOC84YmNMUXFGLnBuZykgbm8tcmVwZWF0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xuICBjb2xvcjogIzc3NztcbiAgZm9udDogMTNweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCA0MHB4O1xuICB3aWR0aDogODAlO1xufVxuXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMnB4ICNlZDFjMjQgaW5zZXQ7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDJweCAjZWQxYzI0IGluc2V0O1xuICAtbXMtYm94LXNoYWRvdzogMCAwIDJweCAjZWQxYzI0IGluc2V0O1xuICAtby1ib3gtc2hhZG93OiAwIDAgMnB4ICNlZDFjMjQgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2VkMWMyNCBpbnNldDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkMWMyNDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI3VzZXJuYW1lIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNwYXNzd29yZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggLTUzcHggIWltcG9ydGFudDtcbn1cblxuI2NvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kOiAjZmVlNzlhO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZWU3OWEgMCUsICNmZWMxNTEgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZlZTc5YSAwJSwgI2ZlYzE1MSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZlZTc5YSAwJSwgI2ZlYzE1MSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZWU3OWEgMCUsICNmZWMxNTEgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmZWU3OWEgMCUsICNmZWMxNTEgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZlZTc5YVwiLCBlbmRDb2xvcnN0cj1cIiNmZWMxNTFcIixHcmFkaWVudFR5cGU9MCApO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgaW5zZXQ7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgaW5zZXQ7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSBpbnNldDtcbiAgLW8tYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIGluc2V0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDY5RTMxO1xuICBjb2xvcjogIzg1NTkyZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udDogYm9sZCAxNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAyMHB4IDAgMzVweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZWMxNTE7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZlYzE1MSAwJSwgI2ZlZTc5YSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmVjMTUxIDAlLCAjZmVlNzlhIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmVjMTUxIDAlLCAjZmVlNzlhIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZlYzE1MSAwJSwgI2ZlZTc5YSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZlYzE1MSAwJSwgI2ZlZTc5YSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjZmVjMTUxXCIsIGVuZENvbG9yc3RyPVwiI2ZlZTc5YVwiLEdyYWRpZW50VHlwZT0wICk7XG59XG5cbiNjb250ZW50IGZvcm0gZGl2IGEge1xuICBjb2xvcjogIzAwNGE4MDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMzBweCAxNXB4IDAgMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjdmOWZhO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmN2Y5ZmEgMCUsICNmMGYwZjAgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y3ZjlmYSAwJSwgI2YwZjBmMCAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y3ZjlmYSAwJSwgI2YwZjBmMCAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmN2Y5ZmEgMCUsICNmMGYwZjAgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmN2Y5ZmEgMCUsICNmMGYwZjAgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2Y3ZjlmYVwiLCBlbmRDb2xvcnN0cj1cIiNmMGYwZjBcIixHcmFkaWVudFR5cGU9MCApO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcbiAgLW1zLWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XG4gIC1vLWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGRDVEOTtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4uYnV0dG9uIGEge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jc3NkZWNrLmNvbS91cGxvYWRzL21lZGlhL2l0ZW1zLzgvOGJjTFFxRi5wbmcpIDAgLTExMnB4IG5vLXJlcGVhdDtcbiAgY29sb3I6ICM3RTdFN0U7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZzogMnB4IDAgMnB4IDQwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYnV0dG9uIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMzVweDtcbiAgY29sb3I6ICMwMGFlZWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/login/login.service */ "./src/app/services/login/login.service.ts");





let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        // let body = new HttpParams({
        //   fromObject: {
        //     username: this.loginForm.get('username').value,
        //     password: this.loginForm.get('password').value
        //   }
        // });
        // body.set('username', this.loginForm.get('username').value)
        // body.set('password', this.loginForm.get('password').value);
        const body = 'username=' + this.loginForm.get('username').value + '&password=' + this.loginForm.get('password').value;
        console.log('body ', body);
        this.loginService.loginUser(body).subscribe((res) => {
            if (res.access_key) {
                localStorage.setItem('token', res.access_key);
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    loginUser(body) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/users/signin-admin`, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            })
        });
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FixedPluginComponent = class FixedPluginComponent {
    constructor() {
        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
    }
    changeSidebarColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    }
    changeSidebarActiveColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarActiveColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
        }
    }
    ngOnInit() { }
};
FixedPluginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let FixedPluginModule = class FixedPluginModule {
};
FixedPluginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })
], FixedPluginModule);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html")
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");





let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavbarComponent = class NavbarComponent {
    constructor(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("navbar-cmp", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let NavbarModule = class NavbarModule {
};
NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/category', title: 'Main Category', icon: 'nc-bank', class: '' },
    { path: '/categories', title: 'Categories', icon: 'nc-bank', class: '' },
    { path: '/sub-category', title: 'Sub Categories', icon: 'nc-bank', class: '' },
    { path: '/service-provider', title: 'Service Providers', icon: 'nc-bank', class: '' },
    { path: '/customers-list', title: 'Customer List', icon: 'nc-bank', class: '' },
];
let SidebarComponent = class SidebarComponent {
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");





let SidebarModule = class SidebarModule {
};
SidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    baseUrl: 'https://najeek.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Paper Dashboard Angular - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saadsufyan/Desktop/najeek-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map