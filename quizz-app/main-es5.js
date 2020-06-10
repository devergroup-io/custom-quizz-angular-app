function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./level-detail/level-detail.component */
    "./src/app/level-detail/level-detail.component.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/result/result.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'level/:id',
      component: _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_3__["LevelDetailComponent"]
    }, {
      path: 'result',
      component: _result_result_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  font-family: \"-apple-system\", \"BlinkMacSystemFont\", \"Hiragino Sans\", \"Hiragino Kaku Gothic ProN\", \"segoe ui\", \"\u6E38\u30B4\u30B7\u30C3\u30AF  Medium\", \"\u30E1\u30A4\u30EA\u30AA\", \"Meiryo\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"MS PGothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGV2ZXJwaGFtL3Byb2plY3RzL3F1aXp6LWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxxTEFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIi1hcHBsZS1zeXN0ZW1cIiwgXCJCbGlua01hY1N5c3RlbUZvbnRcIiwgXCJIaXJhZ2lubyBTYW5zXCIsIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlwiLCBcInNlZ29lIHVpXCIsIFwi5ri444K044K344OD44KvICBNZWRpdW1cIiwgXCLjg6HjgqTjg6rjgqpcIiwgXCJNZWlyeW9cIiwgXCLvvK3vvLMg77yw44K044K344OD44KvXCIsIFwiTVMgUEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xufSIsImJvZHkge1xuICBmb250LWZhbWlseTogXCItYXBwbGUtc3lzdGVtXCIsIFwiQmxpbmtNYWNTeXN0ZW1Gb250XCIsIFwiSGlyYWdpbm8gU2Fuc1wiLFxuICAgIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlwiLCBcInNlZ29lIHVpXCIsIFwi5ri444K044K344OD44KvICBNZWRpdW1cIiwgXCLjg6HjgqTjg6rjgqpcIixcbiAgICBcIk1laXJ5b1wiLCBcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIiwgXCJNUyBQR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./level-detail/level-detail.component */
    "./src/app/level-detail/level-detail.component.ts");
    /* harmony import */


    var _level_detail_question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./level-detail/question/question.component */
    "./src/app/level-detail/question/question.component.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/result/result.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_6__["LevelDetailComponent"], _level_detail_question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_6__["LevelDetailComponent"], _level_detail_question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var level_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onClickLevel(level_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var level_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r1, " ");
      }
    }

    var csvToArr = function csvToArr(csv) {
      var allTextLines = csv.split(/\r|\n|\r/);
      var headers = allTextLines[0].split(',');
      var lines = []; // tslint:disable-next-line:prefer-for-of

      for (var i = 0; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');

        if (data.length === headers.length) {
          var tarr = [];

          for (var j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }

          lines.push(tarr);
        }
      }

      return lines;
    };

    var serializeCsvData = function serializeCsvData(rows) {
      var quesDict = {};
      rows.forEach(function (row) {
        if (!quesDict[row[0]]) {
          quesDict[row[0]] = [];
        }

        quesDict[row[0]].push({
          level: row[0],
          en: row[1].trim(),
          meanings: [row[2].trim(), row[3].trim()]
        });
      });
      return quesDict;
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http, dataService, router) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.dataService = dataService;
        this.router = router;
        this.csvURL = 'assets/data/data.csv';
        this.levels = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.http.get(this.csvURL, {
            responseType: 'text'
          }).subscribe(function (data) {
            var serializeData = serializeCsvData(csvToArr(data));

            _this.dataService.setQuesDictFromHome(serializeData);

            _this.levels = Object.keys(serializeData);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onClickLevel",
        value: function onClickLevel(level) {
          this.dataService.setQuestionsFromHome(level);
          this.router.navigate(["level/".concat(level)], {
            skipLocationChange: true
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 1,
      consts: [["id", "container"], ["id", "start"], ["class", "level", 3, "click", 4, "ngFor", "ngForOf"], [1, "level", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u306A\u3093\u305F\u3093\u3054");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levels);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["#container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  background-color: white;\n  height: 550px;\n  width: 800px;\n  border-radius: 5px;\n  box-shadow: 0px 5px 15px 0px;\n  position: relative;\n}\n\n#start[_ngcontent-%COMP%] {\n  font-size: 80px;\n  padding-top: 30px;\n  font-weight: bolder;\n  word-break: break-all;\n  margin: auto;\n  width: 700px;\n  height: 150px;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  color: lightgrey;\n  margin-bottom: 40px;\n}\n\n#start[_ngcontent-%COMP%]:hover {\n  color: #e23a6e;\n}\n\n.clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.level[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  border-radius: 50px;\n  text-align: center;\n  vertical-align: middle;\n  background-color: lightgrey;\n  margin: 10px;\n  margin-left: 20px;\n  float: left;\n  cursor: pointer;\n}\n\n.level[_ngcontent-%COMP%]:hover {\n  background-color: #e23a6e;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVycGhhbS9wcm9qZWN0cy9xdWl6ei1hcHAvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgd2lkdGg6IDgwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3N0YXJ0IHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbiNzdGFydDpob3ZlciB7XG4gIGNvbG9yOiAjZTIzYTZlO1xufVxuXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmxldmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxldmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyM2E2ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgd2lkdGg6IDgwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3N0YXJ0IHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuI3N0YXJ0OmhvdmVyIHtcbiAgY29sb3I6ICNlMjNhNmU7XG59XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ubGV2ZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZXZlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjNhNmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/level-detail/level-detail.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/level-detail/level-detail.component.ts ***!
    \********************************************************/

  /*! exports provided: LevelDetailComponent */

  /***/
  function srcAppLevelDetailLevelDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevelDetailComponent", function () {
      return LevelDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/level-detail/question/question.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var talkify = window.talkify;
    var voice = new talkify.Html5Player();
    voice.forceLanguage('en');
    voice.setRate(1);

    var LevelDetailComponent = /*#__PURE__*/function () {
      function LevelDetailComponent(dataService, router) {
        _classCallCheck(this, LevelDetailComponent);

        this.dataService = dataService;
        this.router = router;
        this.questions = [];
        this.totalChoices = [];
        this.QUESTION_NUMBER_PER_LEVEL = 50;
        this.choices = [];
        this.currentIndex = 0;
        this.question = null;
        this.valueProcessBar = 0;
      }

      _createClass(LevelDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questions = this.dataService.getQuestions();
          this.question = this.questions[this.currentIndex];
          voice.playText(this.question.en);
          this.totalChoices = this.dataService.getTotalChoices();
          this.choices = this.getChoices();
        }
      }, {
        key: "getChoices",
        value: function getChoices() {
          var _this2 = this;

          if (this.questions[this.currentIndex]) {
            var opts = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.take(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.shuffle(this.totalChoices.filter(function (choice) {
              return choice !== _this2.questions[_this2.currentIndex].meanings[1];
            } // the 4th position in record
            )), 2);
            opts.push(this.questions[this.currentIndex].meanings[1]); // the 4th position in record

            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.shuffle(opts);
          }

          return [];
        }
      }, {
        key: "onNextQuestion",
        value: function onNextQuestion() {
          if (this.currentIndex >= this.QUESTION_NUMBER_PER_LEVEL - 1) {
            return this.router.navigate(['result'], {
              skipLocationChange: true
            });
          }

          this.currentIndex = this.currentIndex + 1;
          this.question = this.questions[this.currentIndex];
          voice.playText(this.question.en);
          this.choices = this.getChoices();
          this.valueProcessBar = Math.round(this.currentIndex / this.QUESTION_NUMBER_PER_LEVEL * 100);
        }
      }]);

      return LevelDetailComponent;
    }();

    LevelDetailComponent.ɵfac = function LevelDetailComponent_Factory(t) {
      return new (t || LevelDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LevelDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LevelDetailComponent,
      selectors: [["app-level-detail"]],
      decls: 7,
      vars: 6,
      consts: [["id", "container"], [3, "question", "choices", "nextQuestion"], [1, "process-container"], ["type", "danger", "height", "10px", 3, "value", "striped", "animated"], [1, "process-number"]],
      template: function LevelDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-question", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nextQuestion", function LevelDetailComponent_Template_app_question_nextQuestion_1_listener() {
            return ctx.onNextQuestion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-progressbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", ctx.question)("choices", ctx.choices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.valueProcessBar)("striped", true)("animated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Progess ", ctx.valueProcessBar, " %");
        }
      },
      directives: [_question_question_component__WEBPACK_IMPORTED_MODULE_4__["QuestionComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbar"]],
      styles: ["#container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  background-color: white;\n  height: 550px;\n  width: 800px;\n  border-radius: 5px;\n  box-shadow: 0px 5px 15px 0px;\n  position: relative;\n}\n\n.process-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 95%;\n}\n\n.process-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.process-container[_ngcontent-%COMP%]   div.process-number[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVycGhhbS9wcm9qZWN0cy9xdWl6ei1hcHAvc3JjL2FwcC9sZXZlbC1kZXRhaWwvbGV2ZWwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZXZlbC1kZXRhaWwvbGV2ZWwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xldmVsLWRldGFpbC9sZXZlbC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvY2Vzcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA5NSU7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgZGl2LnByb2Nlc3MtbnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG59XG4iLCIjY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvY2Vzcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA5NSU7XG59XG4ucHJvY2Vzcy1jb250YWluZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucHJvY2Vzcy1jb250YWluZXIgZGl2LnByb2Nlc3MtbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-level-detail',
          templateUrl: './level-detail.component.html',
          styleUrls: ['./level-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/level-detail/question/question.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/level-detail/question/question.component.ts ***!
    \*************************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppLevelDetailQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function QuestionComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var choice_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onClickAnswer(choice_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var choice_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", choice_r1, " ");
      }
    }

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent(dataService) {
        _classCallCheck(this, QuestionComponent);

        this.dataService = dataService;
        this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timer = null;
      }

      _createClass(QuestionComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this3 = this;

          if (this.timer) {
            clearTimeout(this.timer);
          }

          this.timer = setTimeout(function () {
            return _this3.onClickAnswer('');
          }, 5000);
        }
      }, {
        key: "onClickAnswer",
        value: function onClickAnswer(answer) {
          this.nextQuestion.emit();

          if (answer !== this.question.meanings[1]) {
            this.dataService.setAnswersIncorrect(this.question);
          }
        }
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
      return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionComponent,
      selectors: [["app-question"]],
      inputs: {
        question: "question",
        choices: "choices"
      },
      outputs: {
        nextQuestion: "nextQuestion"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 2,
      consts: [["id", "question"], ["id", "choices"], ["class", "choice", 3, "click", 4, "ngFor", "ngForOf"], [1, "choice", 3, "click"]],
      template: function QuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question.en);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.choices);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["#container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  background-color: white;\n  height: 550px;\n  width: 800px;\n  border-radius: 5px;\n  box-shadow: 0px 5px 15px 0px;\n  position: relative;\n}\n\n#qImg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n}\n\n#qImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-top-left-radius: 5px;\n}\n\n#question[_ngcontent-%COMP%] {\n  font-size: 25px;\n  width: 100%;\n  height: 130px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#question[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n  font-size: 3em;\n  text-align: center;\n}\n\n#choices[_ngcontent-%COMP%] {\n  font-size: 23px;\n  width: 100%;\n  height: 130px;\n  position: absolute;\n  right: 0;\n  top: 120px;\n  margin-top: 5px;\n  \n}\n\n.choice[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  height: 100px;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 5px;\n  margin-top: 5px;\n  margin-left: 30px;\n  font-weight: bold;\n}\n\n\n\n.choice[_ngcontent-%COMP%]:active {\n  background-color: #e23a6e;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVycGhhbS9wcm9qZWN0cy9xdWl6ei1hcHAvc3JjL2FwcC9sZXZlbC1kZXRhaWwvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xldmVsLWRldGFpbC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUVBOzs7Ozs7O0tBQUE7QUNTRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7Ozs7O0NBQUE7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9sZXZlbC1kZXRhaWwvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcUltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuI3FJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbiNxdWVzdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jcXVlc3Rpb24gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Nob2ljZXMge1xuICBmb250LXNpemU6IDIzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgLypcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgd2lkdGggOiA4MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0IDogMDtcbiAgICB0b3AgOiAxMDBweDtcbiAgICBwYWRkaW5nIDogMTBweFxuICAgICovXG59XG4uY2hvaWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLypcbi5jaG9pY2U6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuKi9cbi5jaG9pY2U6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyM2E2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcUltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4jcUltZyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuI3F1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3F1ZXN0aW9uIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjaG9pY2VzIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICAvKlxuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB3aWR0aCA6IDgwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQgOiAwO1xuICAgIHRvcCA6IDEwMHB4O1xuICAgIHBhZGRpbmcgOiAxMHB4XG4gICAgKi9cbn1cblxuLmNob2ljZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2hvaWNlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiovXG4uY2hvaWNlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjNhNmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-question',
          templateUrl: './question.component.html',
          styleUrls: ['./question.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        question: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['question']
        }],
        choices: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['choices']
        }],
        nextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/result/result.component.ts":
  /*!********************************************!*\
    !*** ./src/app/result/result.component.ts ***!
    \********************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResultComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r3.en);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r3.meanings[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r3.meanings[0]);
      }
    }

    function ResultComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_div_15_div_1_Template, 8, 3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.answersIncorrect);
      }
    }

    function ResultComponent_h3_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Congratulations, you are super! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(dataService) {
        _classCallCheck(this, ResultComponent);

        this.dataService = dataService;
        this.answersIncorrect = [];
        this.time = '';
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var now = new Date();
          this.answersIncorrect = this.dataService.getAnswersIncorrect();
          this.time = "".concat(now.getFullYear(), "\u5E74").concat(now.getMonth() + 1, "\u6708").concat(now.getDate(), "\u65E5");
        }
      }, {
        key: "onClickPrint",
        value: function onClickPrint() {
          window.print();
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      decls: 17,
      vars: 3,
      consts: [[1, "result-wrapper"], [1, "result-time"], ["type", "text"], [3, "click"], [4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["id", "review", 4, "ngFor", "ngForOf"], ["id", "review"], [1, "sentence"], [1, "word_en"], [1, "word_ja"], [1, "word_sound"], [1, "success-message"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u82F1\u5358\u8A9E\u88DC\u5F37\u30D7\u30EA\u30F3\u30C8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u65E5\u6642\uFF1A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u540D\u524D\uFF1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_13_listener() {
            return ctx.onClickPrint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u5370\u5237");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResultComponent_div_15_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResultComponent_h3_16_Template, 2, 0, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answersIncorrect.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answersIncorrect.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".result-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-left: 25px;\n}\n.result-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2em;\n  -webkit-margin-before: 0.67em;\n          margin-block-start: 0.67em;\n  -webkit-margin-after: 0.67em;\n          margin-block-end: 0.67em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  font-weight: bold;\n}\n.result-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px dotted;\n  outline: none;\n  font-size: 22px;\n}\n.result-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n#review[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-left: 60px;\n}\n.sentence[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  \n  flex-wrap: wrap;\n}\n.word_en[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 120px;\n  height: 25px;\n  flex-shrink: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: left;\n}\n.word_ja[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 250px;\n  height: 25px;\n  flex-shrink: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: left;\n}\n.word_sound[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 150px;\n  height: 25px;\n  flex-shrink: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVycGhhbS9wcm9qZWN0cy9xdWl6ei1hcHAvc3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7VUFBQSwwQkFBQTtFQUNBLDRCQUFBO1VBQUEsd0JBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFDRixxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0VGO0FEQ0k7RUFDRSxlQUFBO0FDQ047QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0LXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwLjY3ZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0cGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRcdGNvbG9yOiAjMjEyNTI5O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjZjhmOWZhO1xuXHR9XG4gIC5yZXN1bHQtdGltZSB7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICB9XG59XG5cbiNyZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5zZW50ZW5jZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLndvcmRfZW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLndvcmRfamEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLndvcmRfc291bmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIi5yZXN1bHQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5yZXN1bHQtd3JhcHBlciBoMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjY3ZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuNjdlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yZXN1bHQtd3JhcHBlciBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnJlc3VsdC13cmFwcGVyIGJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhO1xufVxuLnJlc3VsdC13cmFwcGVyIC5yZXN1bHQtdGltZSBzcGFuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4uc2VudGVuY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi53b3JkX2VuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi53b3JkX2phIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi53b3JkX3NvdW5kIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

    var QUESTION_NUMBER_PER_LEVEL = 50;

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.quesDict = {};
        this.totalQuestions = []; // by level

        this.questions = []; // 50 question per level

        this.totalChoices = [];
        this.answersIncorrect = [];
      }

      _createClass(DataService, [{
        key: "getQuestions",
        value: function getQuestions() {
          return this.questions;
        }
      }, {
        key: "getTotalChoices",
        value: function getTotalChoices() {
          return this.totalChoices;
        }
      }, {
        key: "getAnswersIncorrect",
        value: function getAnswersIncorrect() {
          return this.answersIncorrect;
        }
      }, {
        key: "setQuesDictFromHome",
        value: function setQuesDictFromHome(data) {
          this.quesDict = data;
        }
      }, {
        key: "setQuestionsFromHome",
        value: function setQuestionsFromHome(level) {
          this.totalQuestions = this.quesDict[level];
          this.questions = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.take(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.shuffle(this.totalQuestions), QUESTION_NUMBER_PER_LEVEL);
          this.totalChoices = this.totalQuestions.map(function (question) {
            return question.meanings[1];
          });
        }
      }, {
        key: "setAnswersIncorrect",
        value: function setAnswersIncorrect(answer) {
          this.answersIncorrect = [].concat(_toConsumableArray(this.answersIncorrect), [answer]);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /home/deverpham/projects/quizz-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map