webpackJsonp([1],{

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("aurelia-framework"), __webpack_require__("aurelia-bootstrapper-webpack"), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, aurelia_framework_1, aurelia_bootstrapper_webpack_1) {
    "use strict";
    Promise.config({
        longStackTraces: false,
        warnings: false
    });
    window.Promise = Promise;
    aurelia_bootstrapper_webpack_1.bootstrap(function (aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-google-analytics', function (config) {
            config.init('UA-74794817-1');
            config.attach({
                logging: {
                    enabled: true
                },
                pageTracking: {
                    enabled: true
                },
                clickTracking: {
                    enabled: true
                }
            });
        });
        if (window.location.href.indexOf("code-chris.github.io") === -1) {
            aurelia.use.developmentLogging();
        }
        aurelia_framework_1.LogManager.setLevel(3);
        aurelia.start().then(function () { return aurelia.setRoot("App", document.body); });
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ })

},[39]);
//# sourceMappingURL=main.map