(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vsf-search-adapter-api-searchAdapter"],{

/***/ "./core/lib/search/adapter/api/searchAdapter.ts":
/*!******************************************************!*\
  !*** ./core/lib/search/adapter/api/searchAdapter.ts ***!
  \******************************************************/
/*! exports provided: SearchAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdapter", function() { return SearchAdapter; });
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash-es/map.js");
/* harmony import */ var storefront_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storefront-query-builder */ "./node_modules/storefront-query-builder/lib/index.js");
/* harmony import */ var storefront_query_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storefront_query_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vue_storefront_core_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue-storefront/core/helpers */ "./core/helpers/index.ts");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vue_storefront_core_lib_multistore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue-storefront/core/lib/multistore */ "./core/lib/multistore.ts");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config */ "./core/build/config.json");
var config__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! config */ "./core/build/config.json", 1);
/* harmony import */ var _vue_storefront_core_helpers_getApiEndpointUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue-storefront/core/helpers/getApiEndpointUrl */ "./core/helpers/getApiEndpointUrl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SearchAdapter = /** @class */ (function () {
    function SearchAdapter() {
        this.entities = [];
        this.initBaseTypes();
    }
    SearchAdapter.prototype.search = function (Request) {
        return __awaiter(this, void 0, void 0, function () {
            var ElasticsearchQueryBody, bodybuilder_1, storeView, _a, url, httpQuery;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.entities[Request.type]) {
                            throw new Error('No entity type registered for ' + Request.type);
                        }
                        ElasticsearchQueryBody = {};
                        if (!(Request.searchQuery instanceof storefront_query_builder__WEBPACK_IMPORTED_MODULE_1__["SearchQuery"])) return [3 /*break*/, 3];
                        return [4 /*yield*/, __webpack_require__.e(/*! import() | bodybuilder */ "vendors~bodybuilder").then(__webpack_require__.t.bind(null, /*! bodybuilder */ "./node_modules/bodybuilder/lib/index.js", 7))];
                    case 1:
                        bodybuilder_1 = _b.sent();
                        return [4 /*yield*/, storefront_query_builder__WEBPACK_IMPORTED_MODULE_1__["elasticsearch"].buildQueryBodyFromSearchQuery({ config: config__WEBPACK_IMPORTED_MODULE_6__, queryChain: bodybuilder_1.default(), searchQuery: Request.searchQuery })];
                    case 2:
                        ElasticsearchQueryBody = _b.sent();
                        if (Request.searchQuery.getSearchText() !== '') {
                            ElasticsearchQueryBody['min_score'] = config__WEBPACK_IMPORTED_MODULE_6__.elasticsearch.min_score;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        // backward compatibility for old themes uses bodybuilder
                        ElasticsearchQueryBody = Request.searchQuery;
                        _b.label = 4;
                    case 4:
                        if (Request.hasOwnProperty('groupId') && Request.groupId !== null) {
                            ElasticsearchQueryBody['groupId'] = Request.groupId;
                        }
                        if (Request.hasOwnProperty('groupToken') && Request.groupToken !== null) {
                            ElasticsearchQueryBody['groupToken'] = Request.groupToken;
                        }
                        if (!(Request.store === null)) return [3 /*break*/, 5];
                        _a = Object(_vue_storefront_core_lib_multistore__WEBPACK_IMPORTED_MODULE_5__["currentStoreView"])();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, Object(_vue_storefront_core_lib_multistore__WEBPACK_IMPORTED_MODULE_5__["prepareStoreView"])(Request.store)];
                    case 6:
                        _a = _b.sent();
                        _b.label = 7;
                    case 7:
                        storeView = _a;
                        Request.index = storeView.elasticsearch.index;
                        url = Object(_vue_storefront_core_helpers__WEBPACK_IMPORTED_MODULE_3__["processURLAddress"])(Object(_vue_storefront_core_helpers_getApiEndpointUrl__WEBPACK_IMPORTED_MODULE_7__["default"])(storeView.elasticsearch, 'host'));
                        if (this.entities[Request.type].url) {
                            url = Object(_vue_storefront_core_helpers_getApiEndpointUrl__WEBPACK_IMPORTED_MODULE_7__["default"])(this.entities[Request.type], 'url');
                        }
                        httpQuery = {
                            size: Request.size,
                            from: Request.from,
                            sort: Request.sort
                        };
                        if (Request._sourceExclude) {
                            httpQuery._source_exclude = Request._sourceExclude.join(',');
                        }
                        if (Request._sourceInclude) {
                            httpQuery._source_include = Request._sourceInclude.join(',');
                        }
                        if (Request.q) {
                            httpQuery.q = Request.q;
                        }
                        if (!Request.index || !Request.type) {
                            throw new Error('Query.index and Query.type are required arguments for executing ElasticSearch query');
                        }
                        if (config__WEBPACK_IMPORTED_MODULE_6__.elasticsearch.queryMethod === 'GET') {
                            httpQuery.request = JSON.stringify(ElasticsearchQueryBody);
                        }
                        url = url + '/' + encodeURIComponent(Request.index) + '/' + encodeURIComponent(Request.type) + '/_search';
                        url = url + '?' + query_string__WEBPACK_IMPORTED_MODULE_4___default.a.stringify(httpQuery);
                        return [2 /*return*/, isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
                                method: config__WEBPACK_IMPORTED_MODULE_6__.elasticsearch.queryMethod,
                                mode: 'cors',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: config__WEBPACK_IMPORTED_MODULE_6__.elasticsearch.queryMethod === 'POST' ? JSON.stringify(ElasticsearchQueryBody) : null
                            })
                                .then(function (resp) { return resp.json(); })
                                .catch(function (error) {
                                throw new Error('FetchError in request to ES: ' + error.toString());
                            })];
                }
            });
        });
    };
    SearchAdapter.prototype.handleResult = function (resp, type, start, size) {
        if (start === void 0) { start = 0; }
        if (size === void 0) { size = 50; }
        if (resp === null) {
            throw new Error('Invalid ES result - null not exepcted');
        }
        if (resp.hasOwnProperty('hits')) {
            return {
                items: Object(lodash_es_map__WEBPACK_IMPORTED_MODULE_0__["default"])(resp.hits.hits, function (hit) {
                    return Object.assign(hit._source, { _score: hit._score, slug: hit._source.slug ? hit._source.slug : ((hit._source.hasOwnProperty('url_key') && config__WEBPACK_IMPORTED_MODULE_6__.products.useMagentoUrlKeys) ? hit._source.url_key : (hit._source.hasOwnProperty('name') ? Object(_vue_storefront_core_helpers__WEBPACK_IMPORTED_MODULE_3__["slugify"])(hit._source.name) + '-' + hit._source.id : '')) }); // TODO: assign slugs server side
                }),
                total: resp.hits.total,
                start: start,
                perPage: size,
                aggregations: resp.aggregations,
                attributeMetadata: resp.attribute_metadata,
                suggestions: resp.suggest
            };
        }
        else {
            var isErrorObject = (resp && resp.code) >= 400 ? resp : null;
            if (resp.error || isErrorObject) {
                throw new Error(JSON.stringify(resp.error || resp));
            }
            else {
                throw new Error('Unknown error with elasticsearch result in resultProcessor for entity type \'' + type + '\'');
            }
        }
    };
    SearchAdapter.prototype.registerEntityType = function (entityType, _a) {
        var _b = _a.url, url = _b === void 0 ? '' : _b, _c = _a.url_ssr, url_ssr = _c === void 0 ? '' : _c, queryProcessor = _a.queryProcessor, resultProcessor = _a.resultProcessor;
        this.entities[entityType] = {
            queryProcessor: queryProcessor,
            resultProcessor: resultProcessor
        };
        if (url !== '') {
            this.entities[entityType]['url'] = url;
        }
        if (url_ssr !== '') {
            this.entities[entityType]['url_ssr'] = url_ssr;
        }
        return this;
    };
    SearchAdapter.prototype.initBaseTypes = function () {
        var _this = this;
        this.registerEntityType('product', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'product', start, size);
            }
        });
        this.registerEntityType('attribute', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'attribute', start, size);
            }
        });
        this.registerEntityType('category', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'category', start, size);
            }
        });
        this.registerEntityType('taxrule', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'taxrule', start, size);
            }
        });
        this.registerEntityType('review', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'review', start, size);
            }
        });
        this.registerEntityType('cms_page', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'cms_page', start, size);
            }
        });
        this.registerEntityType('cms_block', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'cms_block', start, size);
            }
        });
        this.registerEntityType('cms_hierarchy', {
            queryProcessor: function (query) {
                // function that can modify the query each time before it's being executed
                return query;
            },
            resultProcessor: function (resp, start, size) {
                return _this.handleResult(resp, 'cms_hierarchy', start, size);
            }
        });
    };
    return SearchAdapter;
}());



/***/ }),

/***/ "./node_modules/lodash-es/_baseMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ "./node_modules/lodash-es/_baseEach.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection) ? Array(collection.length) : [];

  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMap);


/***/ }),

/***/ "./node_modules/lodash-es/map.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/map.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMap.js */ "./node_modules/lodash-es/_baseMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 3));
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ })

}]);
//# sourceMappingURL=vsf-search-adapter-api-searchAdapter.js.map