function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-page/add-page.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-page/add-page.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAddPageAddPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n\n    <h2 class=\"text-center\">Add product</h2>\n\n    <div class=\"form-control\">\n        <label for=\"type\">Type</label>\n        <select formControlName=\"type\">\n            <option value=\"Phone\">Phone</option>\n            <option value=\"Tablet\">Tablet</option>\n            <option value=\"Laptop\">Laptop</option>\n        </select>\n        <div *ngIf=\"form.get('type').touched && form.get('type').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('type').errors.required\">Chose product type</small>\n        </div>\n    </div>\n    <div class=\"form-control\">\n        <label for=\"title\">Name</label>\n        <input id=\"title\" type=\"title\" formControlName=\"title\">\n        <div *ngIf=\"form.get('title').touched && form.get('title').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('title').errors.required\">Enter product name</small>\n        </div>\n    </div>\n    <div class=\"form-control\">\n        <label for=\"type\">Photo:</label>\n        <quill-editor formControlName=\"photo\"></quill-editor>\n       \n    </div>\n    <div class=\"form-control\">\n        <label for=\"type\">Information:</label>\n        <quill-editor formControlName=\"info\"></quill-editor>\n      \n    </div>\n    <div class=\"form-control\">\n        <label for=\"price\">Price</label>\n        <input id=\"price\" type=\"price\" formControlName=\"price\">\n        <div *ngIf=\"form.get('price').touched && form.get('price').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('price').errors.required\">Enter product price</small>\n        </div>\n    </div>\n\n\n    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"form.invalid || submitted\">Add</button>\n    \n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard-page/dashboard-page.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard-page/dashboard-page.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardPageDashboardPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"products.length; else loading\">\n    <h2 class=\"text-center\">Dashboard of products</h2>\n\n    <div class=\"form-control\">\n        <input type=\"text\" placeholder=\"Find a product...\" [(ngModel)]=\"productName\">\n    </div>\n\n    <table>\n        <thead>\n            <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Price</th>\n                <th>Date of creation</th>\n                <th>Open</th>\n                <th>Delete</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let product of products | search : productName ; let idx = index\">\n                <td>{{ idx + 1 }}</td>\n                <td>{{ product.title }}</td>\n                <td>{{ product.price }}</td>\n                <td>{{ product.date | date : 'short'}}</td>\n                <td>\n                    <button class=\"btn btn-dark\" [routerLink]=\"['/admin','product',product.id,'edit']\">Open</button>\n                </td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"remove(product.id)\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<ng-template #loading>\n    <p class=\"text-center\">Loading...</p>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-page/edit-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-page/edit-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEditPageEditPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"form; else loading\">\n<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n\n    <h2 class=\"text-center\">Update product</h2>\n\n    <div class=\"form-control\">\n        <label for=\"type\">Type</label>\n        <select formControlName=\"type\">\n            <option value=\"Phone\">Phone</option>\n            <option value=\"Tablet\">Tablet</option>\n            <option value=\"Laptop\">Laptop</option>\n        </select>\n        <div *ngIf=\"form.get('type').touched && form.get('type').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('type').errors.required\">Chose product type</small>\n        </div>\n    </div>\n    <div class=\"form-control\">\n        <label for=\"title\">Name</label>\n        <input id=\"title\" type=\"title\" formControlName=\"title\">\n        <div *ngIf=\"form.get('title').touched && form.get('title').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('title').errors.required\">Enter product name</small>\n        </div>\n    </div>\n    <div class=\"form-control\">\n        <label for=\"type\">Photo:</label>\n        <quill-editor formControlName=\"photo\"></quill-editor>\n       \n    </div>\n    <div class=\"form-control\">\n        <label for=\"type\">Information:</label>\n        <quill-editor formControlName=\"info\"></quill-editor>\n      \n    </div>\n    <div class=\"form-control\">\n        <label for=\"price\">Price</label>\n        <input id=\"price\" type=\"price\" formControlName=\"price\">\n        <div *ngIf=\"form.get('price').touched && form.get('price').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('price').errors.required\">Enter product price</small>\n        </div>\n    </div>\n\n\n    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"form.invalid || submitted\">Update</button>\n    \n\n</form>\n</div>\n\n<ng-template #loading>\n    <p class=\"text-center\">Loading...</p>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login-page/login-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login-page/login-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLoginPageLoginPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n\n    <h2>Login as administrator</h2>\n\n    <div class=\"form-control\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"email\" formControlName=\"email\">\n        <div *ngIf=\"form.get('email').touched && form.get('email').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('email').errors.required\">Enter Email</small>\n            <small *ngIf=\"form.get('email').errors.email\">Enter valid Email</small>\n        </div>\n    </div>\n\n    <div class=\"form-control\">\n        <label for=\"password\">Password</label>\n        <input id=\"password\" type=\"password\" formControlName=\"password\">\n        <div *ngIf=\"form.get('password').touched && form.get('password').invalid\" class=\"validation\">\n            <small *ngIf=\"form.get('password').errors.required\">Enter Password</small>\n            <small *ngIf=\"form.get('password').errors.minlength\">\n                Passwor must be at least  {{form.get('password').errors.minlength.requiredLength}} characters. \n                Now he {{form.get('password').errors.minlength.actualLength}}\n            </small>\n        </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"form.inalid || submitted\">Logon</button>\n    \n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders-page/orders-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders-page/orders-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminOrdersPageOrdersPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"orders.length; else noOrders\">\n    <h2 class=\"text-center\">Table of orders:</h2>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Date</th>\n                <th>Phone</th>\n                <th>Name</th>\n                <th>Address</th>\n                <th>Products</th>\n                <th>Price</th>\n                <th>Status</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let order of orders\">\n                <td>{{ order.date | date : 'medium' }}</td>\n                <td>{{ order.phone }}</td>\n                <td>{{ order.name }}</td>\n                <td>{{ order.address }}</td>\n                <td>\n                    <div *ngFor=\"let product of order.orders\">{{ product.title }}</div>\n                </td>\n                <td>\n                    <div class=\"text-center\">{{ order.price }}$</div>\n                    <div class=\"text-center\">{{ order.payment }}</div>\n                </td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"remove(order.id)\">Complited</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<ng-template #noOrders>\n    <p class=\"text-center\">No orders...</p>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/shared/admin-layout/admin-layout.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/shared/admin-layout/admin-layout.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSharedAdminLayoutAdminLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar bg-dark\">\n    <h1>\n        <a routerLink=\"/\">Online Shop</a>\n    </h1>\n\n    <ul *ngIf=\"auth.isAuthenticated(); else login\">\n        <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/admin','dashboard']\">Dashboard</a>\n        </li>\n        <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/admin','add']\">Add product</a>\n        </li>\n        <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/admin','orders']\">Orders</a>\n        </li>\n        <li routerLinkActive=\"active\">\n            <a href=\"#\" (click)=\"logout($event)\">Logout</a>\n        </li>\n    </ul>\n\n    <ng-template #login>\n        <ul>\n            <li routerLinkActive=\"active\">\n                <a [routerLink]=\"['/admin','login']\">Login</a>\n            </li>\n        </ul>\n    </ng-template>\n\n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/admin/add-page/add-page.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/admin/add-page/add-page.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAddPageAddPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1wYWdlL2FkZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/add-page/add-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/add-page/add-page.component.ts ***!
    \******************************************************/

  /*! exports provided: AddPageComponent */

  /***/
  function srcAppAdminAddPageAddPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPageComponent", function () {
      return AddPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/product.service */
    "./src/app/shared/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddPageComponent =
    /*#__PURE__*/
    function () {
      function AddPageComponent(productServ, router) {
        _classCallCheck(this, AddPageComponent);

        this.productServ = productServ;
        this.router = router;
        this.submitted = false;
      }

      _createClass(AddPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            info: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          var product = {
            type: this.form.value.type,
            title: this.form.value.title,
            photo: this.form.value.photo,
            info: this.form.value.info,
            price: this.form.value.price,
            date: new Date()
          };
          console.log(this.form);
          this.productServ.create(product).subscribe(function (res) {
            _this.form.reset();

            _this.submitted = false;

            _this.router.navigate(['/']);
          });
        }
      }]);

      return AddPageComponent;
    }();

    AddPageComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AddPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-page/add-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-page.component.scss */
      "./src/app/admin/add-page/add-page.component.scss")).default]
    })], AddPageComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/admin-layout/admin-layout.component */
    "./src/app/admin/shared/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/admin/login-page/login-page.component.ts");
    /* harmony import */


    var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-page/dashboard-page.component */
    "./src/app/admin/dashboard-page/dashboard-page.component.ts");
    /* harmony import */


    var _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-page/add-page.component */
    "./src/app/admin/add-page/add-page.component.ts");
    /* harmony import */


    var _orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./orders-page/orders-page.component */
    "./src/app/admin/orders-page/orders-page.component.ts");
    /* harmony import */


    var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-page/edit-page.component */
    "./src/app/admin/edit-page/edit-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/auth.guard */
    "./src/app/shared/auth.guard.ts");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
    /* harmony import */


    var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/search.pipe */
    "./src/app/shared/search.pipe.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_6__["DashboardPageComponent"], _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_7__["AddPageComponent"], _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_9__["EditPageComponent"], _orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_8__["OrdersPageComponent"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_12__["QuillModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
          path: '',
          redirectTo: '/admin/login',
          pathMatch: 'full'
        }, {
          path: 'login',
          component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]
        }, {
          path: 'dashboard',
          component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_6__["DashboardPageComponent"],
          canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
        }, {
          path: 'add',
          component: _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_7__["AddPageComponent"],
          canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
        }, {
          path: 'orders',
          component: _orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_8__["OrdersPageComponent"],
          canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
        }, {
          path: 'product/:id/edit',
          component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_9__["EditPageComponent"],
          canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
        }]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard-page/dashboard-page.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/admin/dashboard-page/dashboard-page.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDashboardPageDashboardPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/dashboard-page/dashboard-page.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/dashboard-page/dashboard-page.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardPageComponent */

  /***/
  function srcAppAdminDashboardPageDashboardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function () {
      return DashboardPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/product.service */
    "./src/app/shared/product.service.ts");

    var DashboardPageComponent =
    /*#__PURE__*/
    function () {
      function DashboardPageComponent(productServ) {
        _classCallCheck(this, DashboardPageComponent);

        this.productServ = productServ;
        this.products = [];
      }

      _createClass(DashboardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.pSub = this.productServ.getAll().subscribe(function (products) {
            console.log(products);
            _this2.products = products;
          });
        }
      }, {
        key: "ngOnDesroy",
        value: function ngOnDesroy() {
          if (this.pSub) {
            this.pSub.unsubscribe();
          }

          if (this.rSub) {
            this.rSub.unsubscribe();
          }
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this3 = this;

          this.rSub = this.productServ.remove(id).subscribe(function () {
            _this3.products = _this3.products.filter(function (product) {
              return product.id !== id;
            });
          });
        }
      }]);

      return DashboardPageComponent;
    }();

    DashboardPageComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    DashboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard-page/dashboard-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-page.component.scss */
      "./src/app/admin/dashboard-page/dashboard-page.component.scss")).default]
    })], DashboardPageComponent);
    /***/
  },

  /***/
  "./src/app/admin/edit-page/edit-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/edit-page/edit-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEditPageEditPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/edit-page/edit-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/edit-page/edit-page.component.ts ***!
    \********************************************************/

  /*! exports provided: EditPageComponent */

  /***/
  function srcAppAdminEditPageEditPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageComponent", function () {
      return EditPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/product.service */
    "./src/app/shared/product.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EditPageComponent =
    /*#__PURE__*/
    function () {
      function EditPageComponent(route, productServ, router) {
        _classCallCheck(this, EditPageComponent);

        this.route = route;
        this.productServ = productServ;
        this.router = router;
        this.submitted = false;
      }

      _createClass(EditPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this4.productServ.getById(params['id']);
          })).subscribe(function (product) {
            _this4.product = product;
            _this4.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this4.product.type, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this4.product.title, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this4.product.photo, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              info: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this4.product.info, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this4.product.price, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this5 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          this.productServ.update(Object.assign({}, this.product, {
            type: this.form.value.type,
            title: this.form.value.title,
            photo: this.form.value.photo,
            info: this.form.value.info,
            price: this.form.value.price,
            date: new Date()
          })).subscribe(function (res) {
            _this5.submitted = false;

            _this5.router.navigate(['/admin', 'dashboard']);
          });
        }
      }]);

      return EditPageComponent;
    }();

    EditPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EditPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-page/edit-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-page.component.scss */
      "./src/app/admin/edit-page/edit-page.component.scss")).default]
    })], EditPageComponent);
    /***/
  },

  /***/
  "./src/app/admin/login-page/login-page.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/admin/login-page/login-page.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLoginPageLoginPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4tcGFnZS9EOlxcQW5ndWxhX2FwcFxcMVxcT25saW5lLXNob3Avc3JjXFxhcHBcXGFkbWluXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59IiwiZm9ybSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/login-page/login-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/login-page/login-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppAdminLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(auth, router) {
        _classCallCheck(this, LoginPageComponent);

        this.auth = auth;
        this.router = router;
        this.submitted = false;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this6 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          var user = {
            email: this.form.value.email,
            password: this.form.value.password,
            returnSecureToken: true
          };
          this.auth.login(user).subscribe(function (res) {
            console.log(res);
            _this6.form.reset;

            _this6.router.navigate(['/admin', 'dashboard']);

            _this6.submitted = false;
          }, function () {
            _this6.submitted = false;
          });
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login-page/login-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-page.component.scss */
      "./src/app/admin/login-page/login-page.component.scss")).default]
    })], LoginPageComponent);
    /***/
  },

  /***/
  "./src/app/admin/orders-page/orders-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/admin/orders-page/orders-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminOrdersPageOrdersPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVycy1wYWdlL29yZGVycy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/orders-page/orders-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/orders-page/orders-page.component.ts ***!
    \************************************************************/

  /*! exports provided: OrdersPageComponent */

  /***/
  function srcAppAdminOrdersPageOrdersPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageComponent", function () {
      return OrdersPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/order.service */
    "./src/app/shared/order.service.ts");

    var OrdersPageComponent =
    /*#__PURE__*/
    function () {
      function OrdersPageComponent(orderServ) {
        _classCallCheck(this, OrdersPageComponent);

        this.orderServ = orderServ;
        this.orders = [];
      }

      _createClass(OrdersPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.pSub = this.orderServ.getAll().subscribe(function (orders) {
            _this7.orders = orders;
          });
        }
      }, {
        key: "ngOnDesroy",
        value: function ngOnDesroy() {
          if (this.pSub) {
            this.pSub.unsubscribe();
          }

          if (this.rSub) {
            this.rSub.unsubscribe();
          }
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this8 = this;

          this.rSub = this.orderServ.remove(id).subscribe(function () {
            _this8.orders = _this8.orders.filter(function (order) {
              return order.id !== id;
            });
          });
        }
      }]);

      return OrdersPageComponent;
    }();

    OrdersPageComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    OrdersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders-page/orders-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders-page.component.scss */
      "./src/app/admin/orders-page/orders-page.component.scss")).default]
    })], OrdersPageComponent);
    /***/
  },

  /***/
  "./src/app/admin/shared/admin-layout/admin-layout.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/shared/admin-layout/admin-layout.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSharedAdminLayoutAdminLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/shared/admin-layout/admin-layout.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/shared/admin-layout/admin-layout.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppAdminSharedAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent(auth, router) {
        _classCallCheck(this, AdminLayoutComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout($event) {
          event.preventDefault();
          this.auth.logout();
          this.router.navigate(['/admin', 'login']);
        }
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/shared/admin-layout/admin-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-layout.component.scss */
      "./src/app/admin/shared/admin-layout/admin-layout.component.scss")).default]
    })], AdminLayoutComponent);
    /***/
  },

  /***/
  "./src/app/shared/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.auth.isAuthenticated()) {
            return true;
          } else {
            this.auth.logout();
            this.router.navigate(['/admin', 'login']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/search.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/search.pipe.ts ***!
    \***************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppSharedSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchPipe =
    /*#__PURE__*/
    function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(products) {
          var productName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!productName.trim()) {
            return products;
          }

          return products.filter(function (product) {
            return product.title.toLowerCase().includes(productName.toLowerCase());
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'search'
    })], SearchPipe);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map