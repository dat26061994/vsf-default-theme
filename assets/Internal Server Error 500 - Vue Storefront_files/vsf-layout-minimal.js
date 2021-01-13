(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vsf-layout-minimal"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_mixins_currentPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme/mixins/currentPage */ "./src/themes/default/mixins/currentPage/index.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./core/build/config.json");
var config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! config */ "./core/build/config.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainFooter',
  computed: {
    multistoreEnabled: function multistoreEnabled() {
      return config__WEBPACK_IMPORTED_MODULE_1__.storeViews.multistore;
    }
  },
  mixins: [theme_mixins_currentPage__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_mixins_currentPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme/mixins/currentPage */ "./src/themes/default/mixins/currentPage/index.js");
/* harmony import */ var _vue_storefront_core_lib_multistore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-storefront/core/lib/multistore */ "./core/lib/multistore.ts");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./core/build/config.json");
var config__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! config */ "./core/build/config.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var storeView = Object(_vue_storefront_core_lib_multistore__WEBPACK_IMPORTED_MODULE_1__["currentStoreView"])();
    return {
      defaultTitle: storeView.seo.defaultTitle ? storeView.seo.defaultTitle : config__WEBPACK_IMPORTED_MODULE_2__.seo.defaultTitle
    };
  },
  mixins: [theme_mixins_currentPage__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/layouts/Minimal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/layouts/Minimal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var theme_components_core_blocks_Header_MinimalHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/core/blocks/Header/MinimalHeader.vue */ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue");
/* harmony import */ var theme_components_core_blocks_Footer_MinimalFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme/components/core/blocks/Footer/MinimalFooter.vue */ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue");
/* harmony import */ var theme_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme/head */ "./src/themes/default/head.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ordersData: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    overlayActive: function overlayActive(state) {
      return state.ui.overlay;
    }
  })),
  methods: {},
  beforeMount: function beforeMount() {},
  beforeDestroy: function beforeDestroy() {},
  metaInfo: theme_head__WEBPACK_IMPORTED_MODULE_3__["default"],
  components: {
    MinimalHeader: theme_components_core_blocks_Header_MinimalHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MinimalFooter: theme_components_core_blocks_Footer_MinimalFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon[data-v-819e3c00] {\n  -webkit-transition: 0.3s all;\n  -o-transition: 0.3s all;\n  transition: 0.3s all;\n}\n.social-icon[data-v-819e3c00] {\n  width: 40px;\n  height: 40px;\n}\n.social-icon:hover .icon[data-v-819e3c00], .social-icon:focus .icon[data-v-819e3c00], .social-icon:active .icon[data-v-819e3c00] {\n    fill: #828282;\n}\n.links[data-v-819e3c00] {\n  list-style-type: none;\n}\n@media (max-width: 767px) {\n.bottom-links[data-v-819e3c00] {\n    padding: 0;\n}\n}\n.underline[data-v-819e3c00]:hover {\n  color: #828282;\n}\n.underline[data-v-819e3c00]:hover:after {\n    background-color: #828282;\n}\n.legal-entity-link[data-v-819e3c00] {\n  text-align: center;\n}\n@media (min-width: 768px) {\n.legal-entity-link[data-v-819e3c00] {\n      display: none;\n}\n}\n.privacy-policy-link[data-v-819e3c00] {\n  text-align: right;\n}\n@media (min-width: 768px) {\n.privacy-policy-link[data-v-819e3c00] {\n      display: none;\n}\n}\n@media (max-width: 595px) {\n.no-mobile[data-v-819e3c00] {\n    display: none;\n}\n.social[data-v-819e3c00] {\n    margin-top: 0;\n}\n.footer-links[data-v-819e3c00] {\n    padding-bottom: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header[data-v-64d24b38] {\n  height: 54px;\n  top: -55px;\n  z-index: 3;\n  -webkit-transition: top 0.2s ease-in-out;\n  -o-transition: top 0.2s ease-in-out;\n  transition: top 0.2s ease-in-out;\n}\nheader.is-visible[data-v-64d24b38] {\n    top: 0;\n}\n.icon[data-v-64d24b38] {\n  opacity: 0.6;\n}\n.icon[data-v-64d24b38]:hover, .icon[data-v-64d24b38]:focus {\n    background-color: #f2f2f2;\n    opacity: 1;\n}\n.right-icons[data-v-64d24b38] {\n  float: right;\n}\n.header-placeholder[data-v-64d24b38] {\n  height: 54px;\n}\n.links[data-v-64d24b38] {\n  text-decoration: underline;\n}\n@media (max-width: 767px) {\n.row.middle-xs[data-v-64d24b38] {\n    margin: 0 -15px;\n}\n.row.middle-xs.py5[data-v-64d24b38] {\n      margin: 0;\n}\n.col-xs-2[data-v-64d24b38]:first-of-type {\n    padding-left: 0;\n}\n.col-xs-2[data-v-64d24b38]:last-of-type {\n    padding-right: 0;\n}\na[data-v-64d24b38],\n  span[data-v-64d24b38] {\n    font-size: 12px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "footer",
    { class: { "brdr-top-1 brdr-cl-secondary": _vm.isCheckoutPage } },
    [
      !_vm.isCheckoutPage
        ? _c(
            "div",
            { staticClass: "footer-links flex pt30 pb60 px40 bg-cl-secondary" },
            [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row m0 center-xs between-md" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "row m0 col-lg-7 col-md-8 col-xs-12 start-md between-md between-xs no-mobile"
                    },
                    [
                      _c("div", { staticClass: "start-md" }, [
                        _c("h3", { staticClass: "cl-accent weight-400" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("Departments")) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/women/women-20"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Women fashion")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/men/men-11"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Men's fashion")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Kidswear")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Home")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "start-md" }, [
                        _c("h3", { staticClass: "cl-accent weight-400" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("Orders")) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/my-account"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("My account")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/delivery"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Delivery")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/returns"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Return policy")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "start-md" }, [
                        _c("h3", { staticClass: "cl-accent weight-400" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("Help")) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/customer-service"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Customer service")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/size-guide"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Size guide")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/contact"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Contact us")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "start-md" }, [
                        _c("h3", { staticClass: "cl-accent weight-400" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("About us")) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/about-us"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("About us")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/store-locator"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Store locator")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/custom-cms-page"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Custom Cms Page")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt15" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "cl-secondary",
                                attrs: {
                                  to: _vm.localizedRoute("/cms-page-sync"),
                                  exact: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("Cms Page Sync")) +
                                    "\n              "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row social mt30" }, [
                    _c(
                      "a",
                      {
                        staticClass:
                          "social-icon mx10 brdr-circle no-underline",
                        attrs: {
                          href: "https://www.facebook.com/",
                          "aria-label": _vm.$t("Go to Facebook")
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "facebook icon",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "40",
                              height: "40",
                              viewBox: "0 0 40 40",
                              fill: "#BDBDBD"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M20,0 C8.9541,0 0,8.95435 0,20 C0,31.0457 8.9541,40 20,40 C31.0459,40 40,31.0457 40,20 C40,8.95435 31.0459,0 20,0 Z M22.085,20.8785 L22.085,31.7595 L17.5825,31.7595 L17.5825,20.8789 L15.3335,20.8789 L15.3335,17.1293 L17.5825,17.1293 L17.5825,14.8779 C17.5825,11.819 18.8525,10 22.4609,10 L25.4653,10 L25.4653,13.7501 L23.5874,13.7501 C22.1826,13.7501 22.0898,14.2742 22.0898,15.2521 L22.085,17.1288 L25.4863,17.1288 L25.0884,20.8785 L22.085,20.8785 Z"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "social-icon mx10 brdr-circle no-underline",
                        attrs: {
                          href: "https://www.instagram.com",
                          "aria-label": _vm.$t("Go to Instagram")
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "instagram icon",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "40",
                              height: "40",
                              viewBox: "0 0 40 40",
                              fill: "#BDBDBD"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M20,0 C8.9541,0 0,8.95435 0,20 C0,31.0457 8.9541,40 20,40 C31.0459,40 40,31.0457 40,20 C40,8.95435 31.0459,0 20,0 Z M15.603,9.39783 C16.7407,9.34607 17.104,9.33337 20.001,9.33337 C22.8955,9.33337 23.2578,9.34607 24.3955,9.39783 C25.5312,9.44983 26.3066,9.62964 26.9868,9.89343 C27.689,10.1656 28.2822,10.53 28.8755,11.1234 C29.4692,11.7163 29.8335,12.3114 30.1069,13.0129 C30.3691,13.6912 30.5488,14.4663 30.6025,15.6019 C30.6533,16.7396 30.667,17.1033 30.667,20.0001 C30.667,22.8971 30.6533,23.2598 30.6025,24.3976 C30.5488,25.5327 30.3691,26.308 30.1069,26.9865 C29.8335,27.6877 29.4692,28.283 28.8755,28.8759 C28.2832,29.4691 27.689,29.8345 26.9873,30.1069 C26.3086,30.3707 25.5327,30.5505 24.397,30.6025 C23.2593,30.6543 22.897,30.6669 20,30.6669 C17.103,30.6669 16.7397,30.6543 15.6021,30.6025 C14.4668,30.5505 13.6914,30.3707 13.0127,30.1069 C12.3115,29.8345 11.7163,29.4691 11.1235,28.8759 C10.5308,28.283 10.166,27.6877 9.89355,26.9862 C9.62988,26.308 9.4502,25.5328 9.39795,24.3973 C9.34619,23.2595 9.3335,22.8971 9.3335,20.0001 C9.3335,17.1033 9.34668,16.7395 9.39795,15.6017 C9.44873,14.4666 9.62891,13.6912 9.89307,13.0127 C10.1665,12.3114 10.5312,11.7163 11.1245,11.1234 C11.7173,10.5303 12.3125,10.1658 13.0142,9.89343 C13.6924,9.62964 14.4673,9.44983 15.603,9.39783 Z"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M7.7876,1.2868e-05 L8.74463,1.2868e-05 C11.5928,1.2868e-05 11.9302,0.0102668 13.0547,0.0612922 C14.0947,0.1089 14.6592,0.282606 15.0352,0.428724 C15.5332,0.621961 15.8882,0.853162 16.2612,1.22645 C16.6343,1.59974 16.8657,1.95534 17.0591,2.45314 C17.2051,2.82875 17.3794,3.3932 17.4268,4.43312 C17.4775,5.55763 17.4888,5.8954 17.4888,8.74208 C17.4888,11.5888 17.4775,11.9265 17.4268,13.051 C17.3789,14.0911 17.2051,14.6555 17.0591,15.031 C16.8657,15.5288 16.6343,15.8833 16.2612,16.2564 C15.8877,16.6298 15.5332,16.8609 15.0352,17.0542 C14.6597,17.2008 14.0947,17.3742 13.0547,17.4218 C11.9302,17.4728 11.5928,17.4839 8.74463,17.4839 C5.89648,17.4839 5.55859,17.4728 4.43408,17.4218 C3.39404,17.3738 2.82959,17.2 2.45361,17.054 C1.95557,16.8606 1.6001,16.6295 1.22705,16.2561 C0.853516,15.8828 0.622559,15.5282 0.428711,15.0302 C0.282715,14.6546 0.108887,14.0901 0.0615234,13.0502 C0.0102539,11.9257 0,11.5879 0,8.73939 C0,5.891 0.0102539,5.55494 0.0615234,4.43043 C0.108887,3.39052 0.282715,2.82606 0.428711,2.44996 C0.62207,1.95228 0.853516,1.59669 1.22705,1.22328 C1.6001,0.849988 1.95557,0.618909 2.45361,0.425062 C2.82959,0.278455 3.39404,0.105115 4.43408,0.0573859 C5.41846,0.0128303 5.7998,-0.000475413 7.7876,1.2868e-05 Z M14.438,1.77113 C13.7314,1.77113 13.1582,2.34376 13.1582,3.05067 C13.1582,3.75734 13.7314,4.3307 14.438,4.3307 C15.145,4.3307 15.7183,3.75734 15.7183,3.05067 C15.7183,2.34401 15.145,1.77064 14.438,1.77113 Z M3.2666,8.74452 C3.2666,5.71937 5.71924,3.26674 8.74463,3.26674 C11.7695,3.26674 14.2212,5.71937 14.2212,8.74452 C14.2212,11.7697 11.7695,14.2213 8.74463,14.2213 C5.71924,14.2213 3.2666,11.7697 3.2666,8.74452 Z",
                                transform: "translate(11.26 11.26)"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                stroke: "#FFF",
                                "stroke-width": "2",
                                d:
                                  "M4.55499342,0 C7.07049549,0 9.10999966,2.03920952 9.10999966,4.55499342 C9.10999966,7.07049549 7.07049549,9.10999966 4.55499342,9.10999966 C2.03920952,9.10999966 0,7.07049549 0,4.55499342 C0,2.03920952 2.03920952,2.02282451e-15 4.55499342,2.02282451e-15 L4.55499342,0 Z",
                                transform: "translate(15.45 15.44)"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "social-icon mx10 brdr-circle no-underline",
                        attrs: {
                          href: "https://www.pinterest.com",
                          "aria-label": _vm.$t("Go to Pinterest")
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "pinterest icon",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "40",
                              height: "40",
                              viewBox: "0 0 40 40",
                              fill: "#BDBDBD"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M0,19.9989 C0,31.0437 8.95264,40 20,40 C31.0454,40 40,31.0437 40,19.9989 C40,8.9541 31.0454,0 20,0 C8.95264,0 0,8.9541 0,19.9989 Z M13.3696,36.8771 C6.62793,34.2357 1.85059,27.6766 1.85059,19.9991 C1.85059,9.98682 9.96533,1.87463 19.9761,1.87463 C29.9868,1.87463 38.1016,9.98682 38.1016,19.9991 C38.1016,30.0094 29.9868,38.1238 19.9761,38.1238 C18.106,38.1238 16.3042,37.8409 14.6099,37.314 C15.3467,36.1101 16.4521,34.1372 16.8613,32.5627 C17.082,31.7145 17.9902,28.255 17.9902,28.255 C18.5815,29.3817 20.3081,30.3372 22.146,30.3372 C27.6108,30.3372 31.5508,25.3096 31.5508,19.0631 C31.5508,13.0758 26.6641,8.59448 20.3765,8.59448 C12.5552,8.59448 8.40137,13.847 8.40137,19.5643 C8.40137,22.2206 9.81543,25.5323 12.0776,26.5862 C12.4224,26.7448 12.6069,26.6741 12.686,26.342 L12.8516,25.6682 C12.9653,25.2057 13.1074,24.6292 13.1895,24.2877 C13.2324,24.1035 13.2109,23.9471 13.063,23.7672 C12.3135,22.8589 11.7158,21.1881 11.7158,19.6307 C11.7158,15.6335 14.7427,11.7649 19.8989,11.7649 C24.3525,11.7649 27.4697,14.7981 27.4697,19.1381 C27.4697,24.0414 24.9932,27.4388 21.7715,27.4388 C19.9932,27.4388 18.6606,25.9694 19.0869,24.1635 C19.272,23.3851 19.519,22.5848 19.7598,21.8065 C20.1851,20.4301 20.5889,19.1227 20.5889,18.1292 C20.5889,16.7367 19.8413,15.5757 18.2964,15.5757 C16.4756,15.5757 15.0166,17.4564 15.0166,19.9778 C15.0166,21.5823 15.5586,22.6683 15.5586,22.6683 C15.5586,22.6683 13.7612,30.2621 13.4336,31.6759 C13.0693,33.244 13.2109,35.444 13.3696,36.8771 Z"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "social-icon mx10 brdr-circle no-underline",
                        attrs: {
                          href: "https://www.youtube.com",
                          "aria-label": _vm.$t("Go to Youtube")
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "youtube icon",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "40",
                              height: "40",
                              viewBox: "0 0 40 40",
                              fill: "#BDBDBD"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M20,0 C8.9541,0 0,8.95435 0,20 C0,31.0457 8.9541,40 20,40 C31.0459,40 40,31.0457 40,20 C40,8.95435 31.0459,0 20,0 Z M28.335,13.1244 C29.2529,13.3763 29.9756,14.1185 30.2212,15.061 C30.667,16.7692 30.667,20.3333 30.667,20.3333 C30.667,20.3333 30.667,23.8973 30.2212,25.6056 C29.9756,26.5481 29.2529,27.2903 28.335,27.5424 C26.6714,28 20,28 20,28 C20,28 13.3291,28 11.6655,27.5424 C10.7476,27.2903 10.0244,26.5481 9.7793,25.6056 C9.3335,23.8973 9.3335,20.3333 9.3335,20.3333 C9.3335,20.3333 9.3335,16.7692 9.7793,15.061 C10.0244,14.1185 10.7476,13.3763 11.6655,13.1244 C13.3291,12.6666 20,12.6666 20,12.6666 C20,12.6666 26.6714,12.6666 28.335,13.1244 Z"
                              }
                            }),
                            _vm._v(" "),
                            _c("polygon", {
                              attrs: {
                                points: "0 6.667 0 0 5.333 3.333",
                                transform: "translate(18 17.33)"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row middle-xs px15 bottom-links" }, [
          _c("div", { staticClass: "col-xs col-sm-9 end-xs" }, [
            _c(
              "ul",
              {
                staticClass: "pl0 links",
                attrs: { "data-testid": "bottomLinks" }
              },
              [
                _c(
                  "li",
                  { staticClass: "inline-flex" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "cl-tertiary mr10 underline",
                        attrs: { to: "/legal", exact: "" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.$t("Legal notice")) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "inline-flex" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "cl-tertiary underline",
                        attrs: { to: "/privacy", exact: "" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.$t("Privacy policy")) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "header" }, [
    _c(
      "header",
      {
        staticClass:
          "fixed w-100 brdr-bottom-1 bg-cl-primary brdr-cl-secondary",
        class: { "is-visible": true }
      },
      [
        _c("div", { staticClass: "container px15" }, [
          _c("div", { staticClass: "row between-xs middle-xs" }, [
            _c("div", { staticClass: "col-sm-4 col-xs-2 middle-xs" }, [
              _c("div", [[_vm._m(0)]], 2)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-2 visible-xs" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4 col-xs-4 center-xs" }, [
              _c("div", [
                _c(
                  "a",
                  {
                    staticClass: "no-underline inline-flex",
                    attrs: { href: "/", "data-testid": "logo" }
                  },
                  [
                    _c("img", {
                      attrs: {
                        width: "auto",
                        height: "41px",
                        src: "/assets/logo.svg",
                        alt: _vm.$t(_vm.defaultTitle)
                      }
                    })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-2 visible-xs" }),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "header-placeholder" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "inline-flex brdr-none p15 icon bg-cl-secondary pointer",
        attrs: { href: "/", "data-testid": "returnButton" }
      },
      [
        _c("i", { staticClass: "material-icons" }, [
          _vm._v("keyboard_backspace")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-4 col-xs-2 end-xs" }, [
      _c("div", { staticClass: "inline-flex right-icons" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "minimal-layout" }, [
    _c(
      "div",
      { staticClass: "w-100 relative", attrs: { id: "viewport" } },
      [
        _c("minimal-header"),
        _vm._v(" "),
        _vm._t("default"),
        _vm._v(" "),
        _c("minimal-footer")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6a78b564", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("08fa018a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue":
/*!****************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true& */ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true&");
/* harmony import */ var _MinimalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinimalFooter.vue?vue&type=script&lang=js& */ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& */ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MinimalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "819e3c00",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./src/themes/default/node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('819e3c00')) {
      api.createRecord('819e3c00', component.options)
    } else {
      api.reload('819e3c00', component.options)
    }
    module.hot.accept(/*! ./MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true& */ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true& */ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true&");
(function () {
      api.rerender('819e3c00', {
        render: _MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/themes/default/components/core/blocks/Footer/MinimalFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=style&index=0&id=819e3c00&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_style_index_0_id_819e3c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Footer/MinimalFooter.vue?vue&type=template&id=819e3c00&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalFooter_vue_vue_type_template_id_819e3c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue":
/*!****************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Header/MinimalHeader.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true& */ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true&");
/* harmony import */ var _MinimalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinimalHeader.vue?vue&type=script&lang=js& */ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& */ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MinimalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64d24b38",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./src/themes/default/node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('64d24b38')) {
      api.createRecord('64d24b38', component.options)
    } else {
      api.reload('64d24b38', component.options)
    }
    module.hot.accept(/*! ./MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true& */ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true& */ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true&");
(function () {
      api.rerender('64d24b38', {
        render: _MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/themes/default/components/core/blocks/Header/MinimalHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??postcss!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=style&index=0&id=64d24b38&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_style_index_0_id_64d24b38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/components/core/blocks/Header/MinimalHeader.vue?vue&type=template&id=64d24b38&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinimalHeader_vue_vue_type_template_id_64d24b38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/themes/default/layouts/Minimal.vue":
/*!************************************************!*\
  !*** ./src/themes/default/layouts/Minimal.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Minimal.vue?vue&type=template&id=178ad301& */ "./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301&");
/* harmony import */ var _Minimal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Minimal.vue?vue&type=script&lang=js& */ "./src/themes/default/layouts/Minimal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var theme_css_main_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme/css/main.scss?vue&type=style&index=0&lang=scss& */ "./src/themes/default/css/main.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Minimal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./src/themes/default/node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('178ad301')) {
      api.createRecord('178ad301', component.options)
    } else {
      api.reload('178ad301', component.options)
    }
    module.hot.accept(/*! ./Minimal.vue?vue&type=template&id=178ad301& */ "./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Minimal.vue?vue&type=template&id=178ad301& */ "./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301&");
(function () {
      api.rerender('178ad301', {
        render: _Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/themes/default/layouts/Minimal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/themes/default/layouts/Minimal.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/themes/default/layouts/Minimal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Minimal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/layouts/Minimal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301&":
/*!*******************************************************************************!*\
  !*** ./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Minimal.vue?vue&type=template&id=178ad301& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/layouts/Minimal.vue?vue&type=template&id=178ad301&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimal_vue_vue_type_template_id_178ad301___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=vsf-layout-minimal.js.map