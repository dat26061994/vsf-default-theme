(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vsf-error"],{

/***/ "./core/pages/Error.js":
/*!*****************************!*\
  !*** ./core/pages/Error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_storefront_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-storefront/i18n */ "./core/i18n/index.ts");
/* harmony import */ var _vue_storefront_core_lib_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-storefront/core/lib/logger */ "./core/lib/logger.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Error',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        route = _ref.route,
        context = _ref.context;
    // this is for SSR purposes to prefetch data
    return new Promise(function (resolve, reject) {
      _vue_storefront_core_lib_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Calling asyncData for Error page ' + new Date())();

      if (context) {
        context.output.cacheTags.add("error");
      }

      resolve();
    });
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$route.meta.title || _vue_storefront_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Internal Server Error 500'),
      meta: this.$route.meta.description ? [{
        vmid: 'description',
        name: 'description',
        content: this.$route.meta.description
      }] : []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/pages/Error.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_storefront_core_pages_Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-storefront/core/pages/Error */ "./core/pages/Error.js");
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
  name: 'Error',
  mixins: [_vue_storefront_core_pages_Error__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-c1568e3a] {\n  text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "page_not_found" } }, [
    _c("section", { staticClass: "bg-cl-secondary py35 px20" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", [
          _vm._v(
            "\n        " +
              _vm._s(_vm.$t("Something went wrong ...")) +
              "\n      "
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "bg-cl-primary py35 px20" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "lh16 h5 weight-400" }, [
          _c("p", [
            _vm._v(
              "\n          " +
                _vm._s(
                  _vm.$t(
                    "We've noticed Internal Server Error while rendering this request."
                  )
                ) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n          " +
                _vm._s(
                  _vm.$t("If you need an assistance you can drop us a line on")
                ) +
                "\n          "
            ),
            _c(
              "a",
              {
                staticClass: "cl-secondary no-underline",
                attrs: { href: "mailto:contributors@vuestorefront.io" }
              },
              [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("a contact page")) +
                    "\n          "
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("579edda1", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/themes/default/pages/Error.vue":
/*!********************************************!*\
  !*** ./src/themes/default/pages/Error.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=c1568e3a&scoped=true& */ "./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true&");
/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ "./src/themes/default/pages/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& */ "./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c1568e3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./src/themes/default/node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c1568e3a')) {
      api.createRecord('c1568e3a', component.options)
    } else {
      api.reload('c1568e3a', component.options)
    }
    module.hot.accept(/*! ./Error.vue?vue&type=template&id=c1568e3a&scoped=true& */ "./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=c1568e3a&scoped=true& */ "./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true&");
(function () {
      api.rerender('c1568e3a', {
        render: _Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/themes/default/pages/Error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/themes/default/pages/Error.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/themes/default/pages/Error.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=style&index=0&id=c1568e3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_c1568e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=c1568e3a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/themes/default/pages/Error.vue?vue&type=template&id=c1568e3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_c1568e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=vsf-error.js.map