function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _car_order_car_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./car-order/car-order.component */
    "./src/app/car-order/car-order.component.ts");

    function AppComponent_car_order_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "car-order");
      }
    } // import { CarStateService } from './car-state.service';


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.cars = [];
      }

      _createClass(AppComponent, [{
        key: "addOne",
        value: function addOne() {
          this.cars.push({});
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [[3, "click"], [4, "ngFor", "ngForOf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fleet Ordering Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener($event) {
            return ctx.addOne();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add another car");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_car_order_5_Template, 1, 0, "car-order", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cars);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _car_order_car_order_component__WEBPACK_IMPORTED_MODULE_2__["CarOrderComponent"]],
      styles: [".car-order[_ngcontent-%COMP%] {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXItb3JkZXIge1xuICBmbG9hdDogbGVmdDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'] // ,providers: [CarStateService]

      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _axle_selector_axle_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./axle-selector/axle-selector.component */
    "./src/app/axle-selector/axle-selector.component.ts");
    /* harmony import */


    var _car_order_car_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./car-order/car-order.component */
    "./src/app/car-order/car-order.component.ts");
    /* harmony import */


    var _validity_display_validity_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./validity-display/validity-display.component */
    "./src/app/validity-display/validity-display.component.ts");
    /* harmony import */


    var _wheel_selector_wheel_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wheel-selector/wheel-selector.component */
    "./src/app/wheel-selector/wheel-selector.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _car_order_car_order_component__WEBPACK_IMPORTED_MODULE_4__["CarOrderComponent"], _axle_selector_axle_selector_component__WEBPACK_IMPORTED_MODULE_3__["AxleSelectorComponent"], _wheel_selector_wheel_selector_component__WEBPACK_IMPORTED_MODULE_6__["WheelSelectorComponent"], _validity_display_validity_display_component__WEBPACK_IMPORTED_MODULE_5__["ValidityDisplayComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _car_order_car_order_component__WEBPACK_IMPORTED_MODULE_4__["CarOrderComponent"], _axle_selector_axle_selector_component__WEBPACK_IMPORTED_MODULE_3__["AxleSelectorComponent"], _wheel_selector_wheel_selector_component__WEBPACK_IMPORTED_MODULE_6__["WheelSelectorComponent"], _validity_display_validity_display_component__WEBPACK_IMPORTED_MODULE_5__["ValidityDisplayComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/axle-selector/axle-selector.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/axle-selector/axle-selector.component.ts ***!
    \**********************************************************/

  /*! exports provided: AxleSelectorComponent */

  /***/
  function srcAppAxleSelectorAxleSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AxleSelectorComponent", function () {
      return AxleSelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _car_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../car-state.service */
    "./src/app/car-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AxleSelectorComponent =
    /*#__PURE__*/
    function () {
      function AxleSelectorComponent(carStateService) {
        _classCallCheck(this, AxleSelectorComponent);

        this.carStateService = carStateService;
        this.n = this.carStateService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (carState) {
          return carState.nAxles;
        }));
      }

      _createClass(AxleSelectorComponent, [{
        key: "more",
        value: function more() {
          this.carStateService.changeAxles(1);
        }
      }, {
        key: "less",
        value: function less() {
          this.carStateService.changeAxles(-1);
        }
      }]);

      return AxleSelectorComponent;
    }();

    AxleSelectorComponent.ɵfac = function AxleSelectorComponent_Factory(t) {
      return new (t || AxleSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_car_state_service__WEBPACK_IMPORTED_MODULE_2__["CarStateService"]));
    };

    AxleSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AxleSelectorComponent,
      selectors: [["axle-selector"]],
      decls: 7,
      vars: 3,
      consts: [[3, "click"]],
      template: function AxleSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AxleSelectorComponent_Template_button_click_3_listener($event) {
            return ctx.more();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AxleSelectorComponent_Template_button_click_5_listener($event) {
            return ctx.less();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Number of Axles: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.n), " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AxleSelectorComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'axle-selector',
        templateUrl: './axle-selector.component.html'
      }]
    }], function () {
      return [{
        type: _car_state_service__WEBPACK_IMPORTED_MODULE_2__["CarStateService"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/car-order/car-order.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/car-order/car-order.component.ts ***!
    \**************************************************/

  /*! exports provided: CarOrderComponent */

  /***/
  function srcAppCarOrderCarOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarOrderComponent", function () {
      return CarOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _car_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../car-state.service */
    "./src/app/car-state.service.ts");
    /* harmony import */


    var _axle_selector_axle_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../axle-selector/axle-selector.component */
    "./src/app/axle-selector/axle-selector.component.ts");
    /* harmony import */


    var _wheel_selector_wheel_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../wheel-selector/wheel-selector.component */
    "./src/app/wheel-selector/wheel-selector.component.ts");
    /* harmony import */


    var _validity_display_validity_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../validity-display/validity-display.component */
    "./src/app/validity-display/validity-display.component.ts");

    var CarOrderComponent = function CarOrderComponent() {
      _classCallCheck(this, CarOrderComponent);
    };

    CarOrderComponent.ɵfac = function CarOrderComponent_Factory(t) {
      return new (t || CarOrderComponent)();
    };

    CarOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarOrderComponent,
      selectors: [["car-order"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_car_state_service__WEBPACK_IMPORTED_MODULE_1__["CarStateService"]])],
      decls: 5,
      vars: 0,
      template: function CarOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Configure a car:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "axle-selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "wheel-selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "validity-display");
        }
      },
      directives: [_axle_selector_axle_selector_component__WEBPACK_IMPORTED_MODULE_2__["AxleSelectorComponent"], _wheel_selector_wheel_selector_component__WEBPACK_IMPORTED_MODULE_3__["WheelSelectorComponent"], _validity_display_validity_display_component__WEBPACK_IMPORTED_MODULE_4__["ValidityDisplayComponent"]],
      styles: ["[_nghost-%COMP%] {\n  width: 250px;\n  height: 600px;\n  border: 2px solid black;\n  margin: 10px;\n  padding: 8px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLW9yZGVyL2Nhci1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYXItb3JkZXIvY2FyLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarOrderComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'car-order',
        templateUrl: './car-order.component.html',
        styleUrls: ['./car-order.component.css'],
        providers: [_car_state_service__WEBPACK_IMPORTED_MODULE_1__["CarStateService"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/car-state.service.ts":
  /*!**************************************!*\
    !*** ./src/app/car-state.service.ts ***!
    \**************************************/

  /*! exports provided: CarState, wheelTypes, CarStateService */

  /***/
  function srcAppCarStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarState", function () {
      return CarState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wheelTypes", function () {
      return wheelTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarStateService", function () {
      return CarStateService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Here is the essential shape of the state of this example
    // system, including the "business rules".


    var CarState = function CarState() {
      _classCallCheck(this, CarState);

      this.nAxles = 0;
      this.wheelQtys = [];
      this.ok = true;
      this.message = '';
    };

    function calculateValidity(state) {
      state.ok = true;
      state.message = '';

      if (state.nAxles === 0) {
        state.ok = false;
        state.message = 'must have at least one axle';
        return;
      }

      var totalWheels = state.wheelQtys.reduce(function (prev, q) {
        return prev + q;
      }, 0);

      if (totalWheels === 0) {
        state.ok = false;
        state.message = 'must have at least one wheel';
        return;
      }

      if (state.nAxles * 2 !== totalWheels) {
        state.ok = false;
        state.message = 'total wheels must be 2x total axles';
        return;
      }

      var oddWheels = state.wheelQtys.reduce(function (prev, q) {
        return prev + q % 2;
      }, 0);

      if (oddWheels !== 0) {
        state.ok = false;
        state.message = 'all wheels must be used in pairs';
        return;
      }
    }

    var wheelTypes = ['Wide Slicks', 'Cheap Trailer', 'Skinny', 'Mars Rover', 'Stone']; // This class has no real dependency on Angular; by skipping the
    // unnecessary Injectable decorator, that is made obvious when looking
    // at the imports.
    // @Injectable()

    var CarStateService =
    /*#__PURE__*/
    function () {
      function CarStateService() {
        _classCallCheck(this, CarStateService);

        var state = new CarState();
        state.nAxles = 0;
        state.wheelQtys = Array(wheelTypes.length).fill(0);
        calculateValidity(state);
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](state);
      }

      _createClass(CarStateService, [{
        key: "changeAxles",
        value: function changeAxles(delta) {
          this.updateState(function (s) {
            return s.nAxles = Math.max(s.nAxles + delta, 0);
          });
        }
      }, {
        key: "changeWheelQty",
        value: function changeWheelQty(i, delta) {
          this.updateState(function (s) {
            return s.wheelQtys[i] = Math.max(s.wheelQtys[i] + delta, 0);
          });
        }
      }, {
        key: "updateState",
        value: function updateState(f) {
          var newState = Object.assign({}, this.state.getValue());
          f(newState);
          calculateValidity(newState);
          this.state.next(newState);
        }
      }]);

      return CarStateService;
    }();
    /***/

  },

  /***/
  "./src/app/validity-display/validity-display.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/validity-display/validity-display.component.ts ***!
    \****************************************************************/

  /*! exports provided: ValidityDisplayComponent */

  /***/
  function srcAppValidityDisplayValidityDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidityDisplayComponent", function () {
      return ValidityDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _car_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../car-state.service */
    "./src/app/car-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ValidityDisplayComponent = function ValidityDisplayComponent(carStateService) {
      _classCallCheck(this, ValidityDisplayComponent);

      this.ok = carStateService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (carState) {
        return carState.ok;
      }));
      this.message = carStateService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (carState) {
        return carState.message ? carState.message : 'ok!';
      }));
    };

    ValidityDisplayComponent.ɵfac = function ValidityDisplayComponent_Factory(t) {
      return new (t || ValidityDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_car_state_service__WEBPACK_IMPORTED_MODULE_2__["CarStateService"]));
    };

    ValidityDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValidityDisplayComponent,
      selectors: [["validity-display"]],
      decls: 4,
      vars: 6,
      template: function ValidityDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("red", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.ok));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.message));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".red[_ngcontent-%COMP%] {\n  border: solid red 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRpdHktZGlzcGxheS92YWxpZGl0eS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC92YWxpZGl0eS1kaXNwbGF5L3ZhbGlkaXR5LWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQge1xuICBib3JkZXI6IHNvbGlkIHJlZCAycHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidityDisplayComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'validity-display',
        templateUrl: './validity-display.component.html',
        styleUrls: ['./validity-display.component.css']
      }]
    }], function () {
      return [{
        type: _car_state_service__WEBPACK_IMPORTED_MODULE_2__["CarStateService"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/wheel-selector/wheel-selector.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/wheel-selector/wheel-selector.component.ts ***!
    \************************************************************/

  /*! exports provided: WheelSelectorComponent */

  /***/
  function srcAppWheelSelectorWheelSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WheelSelectorComponent", function () {
      return WheelSelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _car_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../car-state.service */
    "./src/app/car-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WheelSelectorComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WheelSelectorComponent_tr_9_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.more(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WheelSelectorComponent_tr_9_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.less(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var wt_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wt_r3.wt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wt_r3.q);
      }
    }

    var WheelSelectorComponent =
    /*#__PURE__*/
    function () {
      function WheelSelectorComponent(carStateService) {
        _classCallCheck(this, WheelSelectorComponent);

        this.carStateService = carStateService; // If you need to combine synchronous and asynchronous data
        // in the template, do it in the typescript

        this.typesAndQtys = this.carStateService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (carState) {
          return carState.wheelQtys.map(function (q, index) {
            return {
              wt: _car_state_service__WEBPACK_IMPORTED_MODULE_2__["wheelTypes"][index],
              q: q
            };
          });
        }));
      }

      _createClass(WheelSelectorComponent, [{
        key: "more",
        value: function more(i) {
          this.carStateService.changeWheelQty(i, 1);
        }
      }, {
        key: "less",
        value: function less(i) {
          this.carStateService.changeWheelQty(i, -1);
        }
      }]);

      return WheelSelectorComponent;
    }();

    WheelSelectorComponent.ɵfac = function WheelSelectorComponent_Factory(t) {
      return new (t || WheelSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_car_state_service__WEBPACK_IMPORTED_MODULE_2__["CarStateService"]));
    };

    WheelSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WheelSelectorComponent,
      selectors: [["wheel-selector"]],
      decls: 11,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], [3, "click"]],
      template: function WheelSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Wheels: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wheel Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Adjust");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WheelSelectorComponent_tr_9_Template, 10, 2, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 1, ctx.typesAndQtys));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WheelSelectorComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'wheel-selector',
        templateUrl: './wheel-selector.component.html'
      }]
    }], function () {
      return [{
        type: _car_state_service__WEBPACK_IMPORTED_MODULE_2__["CarStateService"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map