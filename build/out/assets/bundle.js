/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(14), __webpack_require__(120)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, aurelia_framework_1, aurelia_bootstrapper_webpack_1) {
	    "use strict";
	    aurelia_bootstrapper_webpack_1.bootstrap(function (aurelia) {
	        aurelia.use
	            .standardConfiguration()
	            .globalResources("infrastructure/image");
	        if (window.location.href.indexOf("code-chris.github.io") === -1) {
	            aurelia.use.developmentLogging();
	        }
	        aurelia_framework_1.LogManager.setLevel(3);
	        aurelia.start().then(function () { return aurelia.setRoot("App", document.body); });
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LogManager = exports.FrameworkConfiguration = exports.Aurelia = undefined;

	var _aureliaDependencyInjection = __webpack_require__(5);

	Object.keys(_aureliaDependencyInjection).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaDependencyInjection[key];
	    }
	  });
	});

	var _aureliaBinding = __webpack_require__(8);

	Object.keys(_aureliaBinding).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaBinding[key];
	    }
	  });
	});

	var _aureliaMetadata = __webpack_require__(6);

	Object.keys(_aureliaMetadata).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaMetadata[key];
	    }
	  });
	});

	var _aureliaTemplating = __webpack_require__(11);

	Object.keys(_aureliaTemplating).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaTemplating[key];
	    }
	  });
	});

	var _aureliaLoader = __webpack_require__(13);

	Object.keys(_aureliaLoader).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaLoader[key];
	    }
	  });
	});

	var _aureliaTaskQueue = __webpack_require__(10);

	Object.keys(_aureliaTaskQueue).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaTaskQueue[key];
	    }
	  });
	});

	var _aureliaPath = __webpack_require__(12);

	Object.keys(_aureliaPath).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaPath[key];
	    }
	  });
	});

	var _aureliaPal = __webpack_require__(7);

	Object.keys(_aureliaPal).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaPal[key];
	    }
	  });
	});

	var _aureliaLogging = __webpack_require__(9);

	var TheLogManager = _interopRequireWildcard(_aureliaLogging);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function preventActionlessFormSubmit() {
	  _aureliaPal.DOM.addEventListener('submit', function (evt) {
	    var target = evt.target;
	    var action = target.action;

	    if (target.tagName.toLowerCase() === 'form' && !action) {
	      evt.preventDefault();
	    }
	  });
	}

	var Aurelia = exports.Aurelia = function () {
	  function Aurelia(loader, container, resources) {
	    _classCallCheck(this, Aurelia);

	    this.loader = loader || new _aureliaPal.PLATFORM.Loader();
	    this.container = container || new _aureliaDependencyInjection.Container().makeGlobal();
	    this.resources = resources || new _aureliaTemplating.ViewResources();
	    this.use = new FrameworkConfiguration(this);
	    this.logger = TheLogManager.getLogger('aurelia');
	    this.hostConfigured = false;
	    this.host = null;

	    this.use.instance(Aurelia, this);
	    this.use.instance(_aureliaLoader.Loader, this.loader);
	    this.use.instance(_aureliaTemplating.ViewResources, this.resources);
	  }

	  Aurelia.prototype.start = function start() {
	    var _this = this;

	    if (this.started) {
	      return Promise.resolve(this);
	    }

	    this.started = true;
	    this.logger.info('Aurelia Starting');

	    return this.use.apply().then(function () {
	      preventActionlessFormSubmit();

	      if (!_this.container.hasResolver(_aureliaTemplating.BindingLanguage)) {
	        var message = 'You must configure Aurelia with a BindingLanguage implementation.';
	        _this.logger.error(message);
	        throw new Error(message);
	      }

	      _this.logger.info('Aurelia Started');
	      var evt = _aureliaPal.DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
	      _aureliaPal.DOM.dispatchEvent(evt);
	      return _this;
	    });
	  };

	  Aurelia.prototype.enhance = function enhance() {
	    var _this2 = this;

	    var bindingContext = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    this._configureHost(applicationHost || _aureliaPal.DOM.querySelectorAll('body')[0]);

	    return new Promise(function (resolve) {
	      var engine = _this2.container.get(_aureliaTemplating.TemplatingEngine);
	      _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
	      _this2.root.attached();
	      _this2._onAureliaComposed();
	      return _this2;
	    });
	  };

	  Aurelia.prototype.setRoot = function setRoot() {
	    var _this3 = this;

	    var root = arguments.length <= 0 || arguments[0] === undefined ? 'app' : arguments[0];
	    var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    var instruction = {};

	    if (this.root && this.root.viewModel && this.root.viewModel.router) {
	      this.root.viewModel.router.deactivate();
	      this.root.viewModel.router.reset();
	    }

	    this._configureHost(applicationHost);

	    var engine = this.container.get(_aureliaTemplating.TemplatingEngine);
	    var transaction = this.container.get(_aureliaTemplating.CompositionTransaction);
	    delete transaction.initialComposition;

	    instruction.viewModel = root;
	    instruction.container = instruction.childContainer = this.container;
	    instruction.viewSlot = this.hostSlot;
	    instruction.host = this.host;

	    return engine.compose(instruction).then(function (r) {
	      _this3.root = r;
	      instruction.viewSlot.attached();
	      _this3._onAureliaComposed();
	      return _this3;
	    });
	  };

	  Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
	    if (this.hostConfigured) {
	      return;
	    }
	    applicationHost = applicationHost || this.host;

	    if (!applicationHost || typeof applicationHost === 'string') {
	      this.host = _aureliaPal.DOM.getElementById(applicationHost || 'applicationHost');
	    } else {
	      this.host = applicationHost;
	    }

	    if (!this.host) {
	      throw new Error('No applicationHost was specified.');
	    }

	    this.hostConfigured = true;
	    this.host.aurelia = this;
	    this.hostSlot = new _aureliaTemplating.ViewSlot(this.host, true);
	    this.hostSlot.transformChildNodesIntoView();
	    this.container.registerInstance(_aureliaPal.DOM.boundary, this.host);
	  };

	  Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
	    var evt = _aureliaPal.DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
	    setTimeout(function () {
	      return _aureliaPal.DOM.dispatchEvent(evt);
	    }, 1);
	  };

	  return Aurelia;
	}();

	var logger = TheLogManager.getLogger('aurelia');
	var extPattern = /\.[^/.]+$/;

	function runTasks(config, tasks) {
	  var current = void 0;
	  var next = function next() {
	    if (current = tasks.shift()) {
	      return Promise.resolve(current(config)).then(next);
	    }

	    return Promise.resolve();
	  };

	  return next();
	}

	function loadPlugin(config, loader, info) {
	  logger.debug('Loading plugin ' + info.moduleId + '.');
	  config.resourcesRelativeTo = info.resourcesRelativeTo;

	  var id = info.moduleId;

	  if (info.resourcesRelativeTo.length > 1) {
	    return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
	      return _loadPlugin(normalizedId);
	    });
	  }

	  return _loadPlugin(id);

	  function _loadPlugin(moduleId) {
	    return loader.loadModule(moduleId).then(function (m) {
	      if ('configure' in m) {
	        return Promise.resolve(m.configure(config, info.config || {})).then(function () {
	          config.resourcesRelativeTo = null;
	          logger.debug('Configured plugin ' + info.moduleId + '.');
	        });
	      }

	      config.resourcesRelativeTo = null;
	      logger.debug('Loaded plugin ' + info.moduleId + '.');
	    });
	  }
	}

	function loadResources(aurelia, resourcesToLoad, appResources) {
	  var viewEngine = aurelia.container.get(_aureliaTemplating.ViewEngine);

	  return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
	    return _normalize(resourcesToLoad[n]);
	  })).then(function (loads) {
	    var names = [];
	    var importIds = [];

	    loads.forEach(function (l) {
	      names.push(undefined);
	      importIds.push(l.importId);
	    });

	    return viewEngine.importViewResources(importIds, names, appResources);
	  });

	  function _normalize(load) {
	    var moduleId = load.moduleId;
	    var ext = getExt(moduleId);

	    if (isOtherResource(moduleId)) {
	      moduleId = removeExt(moduleId);
	    }

	    return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
	      return {
	        name: load.moduleId,
	        importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
	      };
	    });
	  }

	  function isOtherResource(name) {
	    var ext = getExt(name);
	    if (!ext) return false;
	    if (ext === '') return false;
	    if (ext === '.js' || ext === '.ts') return false;
	    return true;
	  }

	  function removeExt(name) {
	    return name.replace(extPattern, '');
	  }

	  function addOriginalExt(normalized, ext) {
	    return removeExt(normalized) + '.' + ext;
	  }
	}

	function getExt(name) {
	  var match = name.match(extPattern);
	  if (match && match.length > 0) {
	    return match[0].split('.')[1];
	  }
	}

	function assertProcessed(plugins) {
	  if (plugins.processed) {
	    throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
	  }
	}

	var FrameworkConfiguration = function () {
	  function FrameworkConfiguration(aurelia) {
	    var _this4 = this;

	    _classCallCheck(this, FrameworkConfiguration);

	    this.aurelia = aurelia;
	    this.container = aurelia.container;
	    this.info = [];
	    this.processed = false;
	    this.preTasks = [];
	    this.postTasks = [];
	    this.resourcesToLoad = {};
	    this.preTask(function () {
	      return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
	        return _this4.bootstrapperName = name;
	      });
	    });
	    this.postTask(function () {
	      return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
	    });
	  }

	  FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
	    this.container.registerInstance(type, _instance);
	    return this;
	  };

	  FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
	    this.container.registerSingleton(type, implementation);
	    return this;
	  };

	  FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
	    this.container.registerTransient(type, implementation);
	    return this;
	  };

	  FrameworkConfiguration.prototype.preTask = function preTask(task) {
	    assertProcessed(this);
	    this.preTasks.push(task);
	    return this;
	  };

	  FrameworkConfiguration.prototype.postTask = function postTask(task) {
	    assertProcessed(this);
	    this.postTasks.push(task);
	    return this;
	  };

	  FrameworkConfiguration.prototype.feature = function feature(plugin, config) {
	    if (getExt(plugin)) {
	      return this.plugin({ moduleId: plugin, resourcesRelativeTo: [plugin, ''], config: config || {} });
	    }

	    return this.plugin({ moduleId: plugin + '/index', resourcesRelativeTo: [plugin, ''], config: config || {} });
	  };

	  FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
	    assertProcessed(this);

	    var toAdd = Array.isArray(resources) ? resources : arguments;
	    var resource = void 0;
	    var path = void 0;
	    var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

	    for (var i = 0, ii = toAdd.length; i < ii; ++i) {
	      resource = toAdd[i];
	      if (typeof resource !== 'string') {
	        throw new Error('Invalid resource path [' + resource + ']. Resources must be specified as relative module IDs.');
	      }

	      var parent = resourcesRelativeTo[0];
	      var grandParent = resourcesRelativeTo[1];
	      var name = resource;

	      if (resource.startsWith('./') && parent !== '') {
	        name = parent + resource.substr(1);
	      }

	      this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
	    }

	    return this;
	  };

	  FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
	    assertProcessed(this);
	    this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
	    return this;
	  };

	  FrameworkConfiguration.prototype.plugin = function plugin(_plugin, config) {
	    assertProcessed(this);

	    if (typeof _plugin === 'string') {
	      return this.plugin({ moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: config || {} });
	    }

	    this.info.push(_plugin);
	    return this;
	  };

	  FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
	    var _this5 = this;

	    var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
	    this.plugin(plugin);

	    this.preTask(function () {
	      var relativeTo = [name, _this5.bootstrapperName];
	      plugin.moduleId = name;
	      plugin.resourcesRelativeTo = relativeTo;
	      return Promise.resolve();
	    });

	    return this;
	  };

	  FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
	    return this._addNormalizedPlugin('aurelia-templating-binding');
	  };

	  FrameworkConfiguration.prototype.router = function router() {
	    return this._addNormalizedPlugin('aurelia-templating-router');
	  };

	  FrameworkConfiguration.prototype.history = function history() {
	    return this._addNormalizedPlugin('aurelia-history-browser');
	  };

	  FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
	    return this._addNormalizedPlugin('aurelia-templating-resources');
	  };

	  FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
	    return this._addNormalizedPlugin('aurelia-event-aggregator');
	  };

	  FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
	    return this.defaultBindingLanguage().defaultResources().history().router().eventAggregator();
	  };

	  FrameworkConfiguration.prototype.developmentLogging = function developmentLogging() {
	    var _this6 = this;

	    this.preTask(function () {
	      return _this6.aurelia.loader.normalize('aurelia-logging-console', _this6.bootstrapperName).then(function (name) {
	        return _this6.aurelia.loader.loadModule(name).then(function (m) {
	          TheLogManager.addAppender(new m.ConsoleAppender());
	          TheLogManager.setLevel(TheLogManager.logLevel.debug);
	        });
	      });
	    });

	    return this;
	  };

	  FrameworkConfiguration.prototype.apply = function apply() {
	    var _this7 = this;

	    if (this.processed) {
	      return Promise.resolve();
	    }

	    return runTasks(this, this.preTasks).then(function () {
	      var loader = _this7.aurelia.loader;
	      var info = _this7.info;
	      var current = void 0;

	      var next = function next() {
	        if (current = info.shift()) {
	          return loadPlugin(_this7, loader, current).then(next);
	        }

	        _this7.processed = true;
	        return Promise.resolve();
	      };

	      return next().then(function () {
	        return runTasks(_this7, _this7.postTasks);
	      });
	    });
	  };

	  return FrameworkConfiguration;
	}();

	exports.FrameworkConfiguration = FrameworkConfiguration;
	var LogManager = exports.LogManager = TheLogManager;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, Promise, global, setImmediate) {/* @preserve
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2013-2015 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	/**
	 * bluebird build version 3.3.4
	 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
	*/
	!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}

	Promise.any = function (promises) {
	    return any(promises);
	};

	Promise.prototype.any = function () {
	    return any(this);
	};

	};

	},{}],2:[function(_dereq_,module,exports){
	"use strict";
	var firstLineError;
	try {throw new Error(); } catch (e) {firstLineError = e;}
	var schedule = _dereq_("./schedule");
	var Queue = _dereq_("./queue");
	var util = _dereq_("./util");

	function Async() {
	    this._isTickUsed = false;
	    this._lateQueue = new Queue(16);
	    this._normalQueue = new Queue(16);
	    this._haveDrainedQueues = false;
	    this._trampolineEnabled = true;
	    var self = this;
	    this.drainQueues = function () {
	        self._drainQueues();
	    };
	    this._schedule = schedule;
	}

	Async.prototype.enableTrampoline = function() {
	    this._trampolineEnabled = true;
	};

	Async.prototype.disableTrampolineIfNecessary = function() {
	    if (util.hasDevTools) {
	        this._trampolineEnabled = false;
	    }
	};

	Async.prototype.haveItemsQueued = function () {
	    return this._isTickUsed || this._haveDrainedQueues;
	};


	Async.prototype.fatalError = function(e, isNode) {
	    if (isNode) {
	        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
	            "\n");
	        process.exit(2);
	    } else {
	        this.throwLater(e);
	    }
	};

	Async.prototype.throwLater = function(fn, arg) {
	    if (arguments.length === 1) {
	        arg = fn;
	        fn = function () { throw arg; };
	    }
	    if (typeof setTimeout !== "undefined") {
	        setTimeout(function() {
	            fn(arg);
	        }, 0);
	    } else try {
	        this._schedule(function() {
	            fn(arg);
	        });
	    } catch (e) {
	        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	};

	function AsyncInvokeLater(fn, receiver, arg) {
	    this._lateQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncInvoke(fn, receiver, arg) {
	    this._normalQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncSettlePromises(promise) {
	    this._normalQueue._pushOne(promise);
	    this._queueTick();
	}

	if (!util.hasDevTools) {
	    Async.prototype.invokeLater = AsyncInvokeLater;
	    Async.prototype.invoke = AsyncInvoke;
	    Async.prototype.settlePromises = AsyncSettlePromises;
	} else {
	    Async.prototype.invokeLater = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvokeLater.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                setTimeout(function() {
	                    fn.call(receiver, arg);
	                }, 100);
	            });
	        }
	    };

	    Async.prototype.invoke = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvoke.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                fn.call(receiver, arg);
	            });
	        }
	    };

	    Async.prototype.settlePromises = function(promise) {
	        if (this._trampolineEnabled) {
	            AsyncSettlePromises.call(this, promise);
	        } else {
	            this._schedule(function() {
	                promise._settlePromises();
	            });
	        }
	    };
	}

	Async.prototype.invokeFirst = function (fn, receiver, arg) {
	    this._normalQueue.unshift(fn, receiver, arg);
	    this._queueTick();
	};

	Async.prototype._drainQueue = function(queue) {
	    while (queue.length() > 0) {
	        var fn = queue.shift();
	        if (typeof fn !== "function") {
	            fn._settlePromises();
	            continue;
	        }
	        var receiver = queue.shift();
	        var arg = queue.shift();
	        fn.call(receiver, arg);
	    }
	};

	Async.prototype._drainQueues = function () {
	    this._drainQueue(this._normalQueue);
	    this._reset();
	    this._haveDrainedQueues = true;
	    this._drainQueue(this._lateQueue);
	};

	Async.prototype._queueTick = function () {
	    if (!this._isTickUsed) {
	        this._isTickUsed = true;
	        this._schedule(this.drainQueues);
	    }
	};

	Async.prototype._reset = function () {
	    this._isTickUsed = false;
	};

	module.exports = Async;
	module.exports.firstLineError = firstLineError;

	},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
	var calledBind = false;
	var rejectThis = function(_, e) {
	    this._reject(e);
	};

	var targetRejected = function(e, context) {
	    context.promiseRejectionQueued = true;
	    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	};

	var bindingResolved = function(thisArg, context) {
	    if (((this._bitField & 50397184) === 0)) {
	        this._resolveCallback(context.target);
	    }
	};

	var bindingRejected = function(e, context) {
	    if (!context.promiseRejectionQueued) this._reject(e);
	};

	Promise.prototype.bind = function (thisArg) {
	    if (!calledBind) {
	        calledBind = true;
	        Promise.prototype._propagateFrom = debug.propagateFromFunction();
	        Promise.prototype._boundValue = debug.boundValueFunction();
	    }
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 1);
	    var target = this._target();
	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        var context = {
	            promiseRejectionQueued: false,
	            promise: ret,
	            target: target,
	            bindingPromise: maybePromise
	        };
	        target._then(INTERNAL, targetRejected, undefined, ret, context);
	        maybePromise._then(
	            bindingResolved, bindingRejected, undefined, ret, context);
	        ret._setOnCancel(maybePromise);
	    } else {
	        ret._resolveCallback(target);
	    }
	    return ret;
	};

	Promise.prototype._setBoundTo = function (obj) {
	    if (obj !== undefined) {
	        this._bitField = this._bitField | 2097152;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~2097152);
	    }
	};

	Promise.prototype._isBound = function () {
	    return (this._bitField & 2097152) === 2097152;
	};

	Promise.bind = function (thisArg, value) {
	    return Promise.resolve(value).bind(thisArg);
	};
	};

	},{}],4:[function(_dereq_,module,exports){
	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict() {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	var bluebird = _dereq_("./promise")();
	bluebird.noConflict = noConflict;
	module.exports = bluebird;

	},{"./promise":22}],5:[function(_dereq_,module,exports){
	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}

	module.exports = function(Promise) {
	var util = _dereq_("./util");
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;

	var getMethodCaller;
	var getGetter;
	if (false) {
	var makeMethodCaller = function (methodName) {
	    return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	};

	var makeGetter = function (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	};

	var getCompiled = function(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	};

	getMethodCaller = function(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	};

	getGetter = function(name) {
	    return getCompiled(name, makeGetter, getterCache);
	};
	}

	function ensureMethod(obj, methodName) {
	    var fn;
	    if (obj != null) fn = obj[methodName];
	    if (typeof fn !== "function") {
	        var message = "Object " + util.classString(obj) + " has no method '" +
	            util.toString(methodName) + "'";
	        throw new Promise.TypeError(message);
	    }
	    return fn;
	}

	function caller(obj) {
	    var methodName = this.pop();
	    var fn = ensureMethod(obj, methodName);
	    return fn.apply(obj, this);
	}
	Promise.prototype.call = function (methodName) {
	    var args = [].slice.call(arguments, 1);;
	    if (false) {
	        if (canEvaluate) {
	            var maybeCaller = getMethodCaller(methodName);
	            if (maybeCaller !== null) {
	                return this._then(
	                    maybeCaller, undefined, undefined, args, undefined);
	            }
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, undefined, undefined, args, undefined);
	};

	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    var index = +this;
	    if (index < 0) index = Math.max(0, index + obj.length);
	    return obj[index];
	}
	Promise.prototype.get = function (propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, undefined, undefined, propertyName, undefined);
	};
	};

	},{"./util":36}],6:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, PromiseArray, apiRejection, debug) {
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var async = Promise._async;

	Promise.prototype["break"] = Promise.prototype.cancel = function() {
	    if (!debug.cancellation()) return this._warn("cancellation is disabled");

	    var promise = this;
	    var child = promise;
	    while (promise.isCancellable()) {
	        if (!promise._cancelBy(child)) {
	            if (child._isFollowing()) {
	                child._followee().cancel();
	            } else {
	                child._cancelBranched();
	            }
	            break;
	        }

	        var parent = promise._cancellationParent;
	        if (parent == null || !parent.isCancellable()) {
	            if (promise._isFollowing()) {
	                promise._followee().cancel();
	            } else {
	                promise._cancelBranched();
	            }
	            break;
	        } else {
	            if (promise._isFollowing()) promise._followee().cancel();
	            child = promise;
	            promise = parent;
	        }
	    }
	};

	Promise.prototype._branchHasCancelled = function() {
	    this._branchesRemainingToCancel--;
	};

	Promise.prototype._enoughBranchesHaveCancelled = function() {
	    return this._branchesRemainingToCancel === undefined ||
	           this._branchesRemainingToCancel <= 0;
	};

	Promise.prototype._cancelBy = function(canceller) {
	    if (canceller === this) {
	        this._branchesRemainingToCancel = 0;
	        this._invokeOnCancel();
	        return true;
	    } else {
	        this._branchHasCancelled();
	        if (this._enoughBranchesHaveCancelled()) {
	            this._invokeOnCancel();
	            return true;
	        }
	    }
	    return false;
	};

	Promise.prototype._cancelBranched = function() {
	    if (this._enoughBranchesHaveCancelled()) {
	        this._cancel();
	    }
	};

	Promise.prototype._cancel = function() {
	    if (!this.isCancellable()) return;

	    this._setCancelled();
	    async.invoke(this._cancelPromises, this, undefined);
	};

	Promise.prototype._cancelPromises = function() {
	    if (this._length() > 0) this._settlePromises();
	};

	Promise.prototype._unsetOnCancel = function() {
	    this._onCancelField = undefined;
	};

	Promise.prototype.isCancellable = function() {
	    return this.isPending() && !this.isCancelled();
	};

	Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
	    if (util.isArray(onCancelCallback)) {
	        for (var i = 0; i < onCancelCallback.length; ++i) {
	            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
	        }
	    } else if (onCancelCallback !== undefined) {
	        if (typeof onCancelCallback === "function") {
	            if (!internalOnly) {
	                var e = tryCatch(onCancelCallback).call(this._boundValue());
	                if (e === errorObj) {
	                    this._attachExtraTrace(e.e);
	                    async.throwLater(e.e);
	                }
	            }
	        } else {
	            onCancelCallback._resultCancelled(this);
	        }
	    }
	};

	Promise.prototype._invokeOnCancel = function() {
	    var onCancelCallback = this._onCancel();
	    this._unsetOnCancel();
	    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
	};

	Promise.prototype._invokeInternalOnCancel = function() {
	    if (this.isCancellable()) {
	        this._doInvokeOnCancel(this._onCancel(), true);
	        this._unsetOnCancel();
	    }
	};

	Promise.prototype._resultCancelled = function() {
	    this.cancel();
	};

	};

	},{"./util":36}],7:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = _dereq_("./util");
	var getKeys = _dereq_("./es5").keys;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	function catchFilter(instances, cb, promise) {
	    return function(e) {
	        var boundTo = promise._boundValue();
	        predicateLoop: for (var i = 0; i < instances.length; ++i) {
	            var item = instances[i];

	            if (item === Error ||
	                (item != null && item.prototype instanceof Error)) {
	                if (e instanceof item) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (typeof item === "function") {
	                var matchesPredicate = tryCatch(item).call(boundTo, e);
	                if (matchesPredicate === errorObj) {
	                    return matchesPredicate;
	                } else if (matchesPredicate) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (util.isObject(e)) {
	                var keys = getKeys(item);
	                for (var j = 0; j < keys.length; ++j) {
	                    var key = keys[j];
	                    if (item[key] != e[key]) {
	                        continue predicateLoop;
	                    }
	                }
	                return tryCatch(cb).call(boundTo, e);
	            }
	        }
	        return NEXT_FILTER;
	    };
	}

	return catchFilter;
	};

	},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var longStackTraces = false;
	var contextStack = [];

	Promise.prototype._promiseCreated = function() {};
	Promise.prototype._pushContext = function() {};
	Promise.prototype._popContext = function() {return null;};
	Promise._peekContext = Promise.prototype._peekContext = function() {};

	function Context() {
	    this._trace = new Context.CapturedTrace(peekContext());
	}
	Context.prototype._pushContext = function () {
	    if (this._trace !== undefined) {
	        this._trace._promiseCreated = null;
	        contextStack.push(this._trace);
	    }
	};

	Context.prototype._popContext = function () {
	    if (this._trace !== undefined) {
	        var trace = contextStack.pop();
	        var ret = trace._promiseCreated;
	        trace._promiseCreated = null;
	        return ret;
	    }
	    return null;
	};

	function createContext() {
	    if (longStackTraces) return new Context();
	}

	function peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return undefined;
	}
	Context.CapturedTrace = null;
	Context.create = createContext;
	Context.deactivateLongStackTraces = function() {};
	Context.activateLongStackTraces = function() {
	    var Promise_pushContext = Promise.prototype._pushContext;
	    var Promise_popContext = Promise.prototype._popContext;
	    var Promise_PeekContext = Promise._peekContext;
	    var Promise_peekContext = Promise.prototype._peekContext;
	    var Promise_promiseCreated = Promise.prototype._promiseCreated;
	    Context.deactivateLongStackTraces = function() {
	        Promise.prototype._pushContext = Promise_pushContext;
	        Promise.prototype._popContext = Promise_popContext;
	        Promise._peekContext = Promise_PeekContext;
	        Promise.prototype._peekContext = Promise_peekContext;
	        Promise.prototype._promiseCreated = Promise_promiseCreated;
	        longStackTraces = false;
	    };
	    longStackTraces = true;
	    Promise.prototype._pushContext = Context.prototype._pushContext;
	    Promise.prototype._popContext = Context.prototype._popContext;
	    Promise._peekContext = Promise.prototype._peekContext = peekContext;
	    Promise.prototype._promiseCreated = function() {
	        var ctx = this._peekContext();
	        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
	    };
	};
	return Context;
	};

	},{}],9:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, Context) {
	var getDomain = Promise._getDomain;
	var async = Promise._async;
	var Warning = _dereq_("./errors").Warning;
	var util = _dereq_("./util");
	var canAttachTrace = util.canAttachTrace;
	var unhandledRejectionHandled;
	var possiblyUnhandledRejection;
	var bluebirdFramePattern =
	    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
	var stackFramePattern = null;
	var formatStack = null;
	var indentStackFrames = false;
	var printWarning;
	var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
	                        (true ||
	                         util.env("BLUEBIRD_DEBUG") ||
	                         util.env("NODE_ENV") === "development"));

	var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
	    (debugging || util.env("BLUEBIRD_WARNINGS")));

	var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
	    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

	var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
	    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

	Promise.prototype.suppressUnhandledRejections = function() {
	    var target = this._target();
	    target._bitField = ((target._bitField & (~1048576)) |
	                      524288);
	};

	Promise.prototype._ensurePossibleRejectionHandled = function () {
	    if ((this._bitField & 524288) !== 0) return;
	    this._setRejectionIsUnhandled();
	    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
	};

	Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	    fireRejectionEvent("rejectionHandled",
	                                  unhandledRejectionHandled, undefined, this);
	};

	Promise.prototype._setReturnedNonUndefined = function() {
	    this._bitField = this._bitField | 268435456;
	};

	Promise.prototype._returnedNonUndefined = function() {
	    return (this._bitField & 268435456) !== 0;
	};

	Promise.prototype._notifyUnhandledRejection = function () {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._settledValue();
	        this._setUnhandledRejectionIsNotified();
	        fireRejectionEvent("unhandledRejection",
	                                      possiblyUnhandledRejection, reason, this);
	    }
	};

	Promise.prototype._setUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField | 262144;
	};

	Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField & (~262144);
	};

	Promise.prototype._isUnhandledRejectionNotified = function () {
	    return (this._bitField & 262144) > 0;
	};

	Promise.prototype._setRejectionIsUnhandled = function () {
	    this._bitField = this._bitField | 1048576;
	};

	Promise.prototype._unsetRejectionIsUnhandled = function () {
	    this._bitField = this._bitField & (~1048576);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};

	Promise.prototype._isRejectionUnhandled = function () {
	    return (this._bitField & 1048576) > 0;
	};

	Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
	    return warn(message, shouldUseOwnTrace, promise || this);
	};

	Promise.onPossiblyUnhandledRejection = function (fn) {
	    var domain = getDomain();
	    possiblyUnhandledRejection =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	Promise.onUnhandledRejectionHandled = function (fn) {
	    var domain = getDomain();
	    unhandledRejectionHandled =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	var disableLongStackTraces = function() {};
	Promise.longStackTraces = function () {
	    if (async.haveItemsQueued() && !config.longStackTraces) {
	        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    if (!config.longStackTraces && longStackTracesIsSupported()) {
	        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
	        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
	        config.longStackTraces = true;
	        disableLongStackTraces = function() {
	            if (async.haveItemsQueued() && !config.longStackTraces) {
	                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	            }
	            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
	            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
	            Context.deactivateLongStackTraces();
	            async.enableTrampoline();
	            config.longStackTraces = false;
	        };
	        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
	        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
	        Context.activateLongStackTraces();
	        async.disableTrampolineIfNecessary();
	    }
	};

	Promise.hasLongStackTraces = function () {
	    return config.longStackTraces && longStackTracesIsSupported();
	};

	var fireDomEvent = (function() {
	    try {
	        var event = document.createEvent("CustomEvent");
	        event.initCustomEvent("testingtheevent", false, true, {});
	        util.global.dispatchEvent(event);
	        return function(name, event) {
	            var domEvent = document.createEvent("CustomEvent");
	            domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
	            return !util.global.dispatchEvent(domEvent);
	        };
	    } catch (e) {}
	    return function() {
	        return false;
	    };
	})();

	var fireGlobalEvent = (function() {
	    if (util.isNode) {
	        return function() {
	            return process.emit.apply(process, arguments);
	        };
	    } else {
	        if (!util.global) {
	            return function() {
	                return false;
	            };
	        }
	        return function(name) {
	            var methodName = "on" + name.toLowerCase();
	            var method = util.global[methodName];
	            if (!method) return false;
	            method.apply(util.global, [].slice.call(arguments, 1));
	            return true;
	        };
	    }
	})();

	function generatePromiseLifecycleEventObject(name, promise) {
	    return {promise: promise};
	}

	var eventToObjectGenerator = {
	    promiseCreated: generatePromiseLifecycleEventObject,
	    promiseFulfilled: generatePromiseLifecycleEventObject,
	    promiseRejected: generatePromiseLifecycleEventObject,
	    promiseResolved: generatePromiseLifecycleEventObject,
	    promiseCancelled: generatePromiseLifecycleEventObject,
	    promiseChained: function(name, promise, child) {
	        return {promise: promise, child: child};
	    },
	    warning: function(name, warning) {
	        return {warning: warning};
	    },
	    unhandledRejection: function (name, reason, promise) {
	        return {reason: reason, promise: promise};
	    },
	    rejectionHandled: generatePromiseLifecycleEventObject
	};

	var activeFireEvent = function (name) {
	    var globalEventFired = false;
	    try {
	        globalEventFired = fireGlobalEvent.apply(null, arguments);
	    } catch (e) {
	        async.throwLater(e);
	        globalEventFired = true;
	    }

	    var domEventFired = false;
	    try {
	        domEventFired = fireDomEvent(name,
	                    eventToObjectGenerator[name].apply(null, arguments));
	    } catch (e) {
	        async.throwLater(e);
	        domEventFired = true;
	    }

	    return domEventFired || globalEventFired;
	};

	Promise.config = function(opts) {
	    opts = Object(opts);
	    if ("longStackTraces" in opts) {
	        if (opts.longStackTraces) {
	            Promise.longStackTraces();
	        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
	            disableLongStackTraces();
	        }
	    }
	    if ("warnings" in opts) {
	        var warningsOption = opts.warnings;
	        config.warnings = !!warningsOption;
	        wForgottenReturn = config.warnings;

	        if (util.isObject(warningsOption)) {
	            if ("wForgottenReturn" in warningsOption) {
	                wForgottenReturn = !!warningsOption.wForgottenReturn;
	            }
	        }
	    }
	    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
	        if (async.haveItemsQueued()) {
	            throw new Error(
	                "cannot enable cancellation after promises are in use");
	        }
	        Promise.prototype._clearCancellationData =
	            cancellationClearCancellationData;
	        Promise.prototype._propagateFrom = cancellationPropagateFrom;
	        Promise.prototype._onCancel = cancellationOnCancel;
	        Promise.prototype._setOnCancel = cancellationSetOnCancel;
	        Promise.prototype._attachCancellationCallback =
	            cancellationAttachCancellationCallback;
	        Promise.prototype._execute = cancellationExecute;
	        propagateFromFunction = cancellationPropagateFrom;
	        config.cancellation = true;
	    }
	    if ("monitoring" in opts) {
	        if (opts.monitoring && !config.monitoring) {
	            config.monitoring = true;
	            Promise.prototype._fireEvent = activeFireEvent;
	        } else if (!opts.monitoring && config.monitoring) {
	            config.monitoring = false;
	            Promise.prototype._fireEvent = defaultFireEvent;
	        }
	    }
	};

	function defaultFireEvent() { return false; }

	Promise.prototype._fireEvent = defaultFireEvent;
	Promise.prototype._execute = function(executor, resolve, reject) {
	    try {
	        executor(resolve, reject);
	    } catch (e) {
	        return e;
	    }
	};
	Promise.prototype._onCancel = function () {};
	Promise.prototype._setOnCancel = function (handler) { ; };
	Promise.prototype._attachCancellationCallback = function(onCancel) {
	    ;
	};
	Promise.prototype._captureStackTrace = function () {};
	Promise.prototype._attachExtraTrace = function () {};
	Promise.prototype._clearCancellationData = function() {};
	Promise.prototype._propagateFrom = function (parent, flags) {
	    ;
	    ;
	};

	function cancellationExecute(executor, resolve, reject) {
	    var promise = this;
	    try {
	        executor(resolve, reject, function(onCancel) {
	            if (typeof onCancel !== "function") {
	                throw new TypeError("onCancel must be a function, got: " +
	                                    util.toString(onCancel));
	            }
	            promise._attachCancellationCallback(onCancel);
	        });
	    } catch (e) {
	        return e;
	    }
	}

	function cancellationAttachCancellationCallback(onCancel) {
	    if (!this.isCancellable()) return this;

	    var previousOnCancel = this._onCancel();
	    if (previousOnCancel !== undefined) {
	        if (util.isArray(previousOnCancel)) {
	            previousOnCancel.push(onCancel);
	        } else {
	            this._setOnCancel([previousOnCancel, onCancel]);
	        }
	    } else {
	        this._setOnCancel(onCancel);
	    }
	}

	function cancellationOnCancel() {
	    return this._onCancelField;
	}

	function cancellationSetOnCancel(onCancel) {
	    this._onCancelField = onCancel;
	}

	function cancellationClearCancellationData() {
	    this._cancellationParent = undefined;
	    this._onCancelField = undefined;
	}

	function cancellationPropagateFrom(parent, flags) {
	    if ((flags & 1) !== 0) {
	        this._cancellationParent = parent;
	        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
	        if (branchesRemainingToCancel === undefined) {
	            branchesRemainingToCancel = 0;
	        }
	        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
	    }
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}

	function bindingPropagateFrom(parent, flags) {
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}
	var propagateFromFunction = bindingPropagateFrom;

	function boundValueFunction() {
	    var ret = this._boundTo;
	    if (ret !== undefined) {
	        if (ret instanceof Promise) {
	            if (ret.isFulfilled()) {
	                return ret.value();
	            } else {
	                return undefined;
	            }
	        }
	    }
	    return ret;
	}

	function longStackTracesCaptureStackTrace() {
	    this._trace = new CapturedTrace(this._peekContext());
	}

	function longStackTracesAttachExtraTrace(error, ignoreSelf) {
	    if (canAttachTrace(error)) {
	        var trace = this._trace;
	        if (trace !== undefined) {
	            if (ignoreSelf) trace = trace._parent;
	        }
	        if (trace !== undefined) {
	            trace.attachExtraTrace(error);
	        } else if (!error.__stackCleaned__) {
	            var parsed = parseStackAndMessage(error);
	            util.notEnumerableProp(error, "stack",
	                parsed.message + "\n" + parsed.stack.join("\n"));
	            util.notEnumerableProp(error, "__stackCleaned__", true);
	        }
	    }
	}

	function checkForgottenReturns(returnValue, promiseCreated, name, promise,
	                               parent) {
	    if (returnValue === undefined && promiseCreated !== null &&
	        wForgottenReturn) {
	        if (parent !== undefined && parent._returnedNonUndefined()) return;
	        var bitField = promise._bitField;
	        if ((bitField & 65535) === 0) return;

	        if (name) name = name + " ";
	        var msg = "a promise was created in a " + name +
	            "handler but was not returned from it";
	        promise._warn(msg, true, promiseCreated);
	    }
	}

	function deprecated(name, replacement) {
	    var message = name +
	        " is deprecated and will be removed in a future version.";
	    if (replacement) message += " Use " + replacement + " instead.";
	    return warn(message);
	}

	function warn(message, shouldUseOwnTrace, promise) {
	    if (!config.warnings) return;
	    var warning = new Warning(message);
	    var ctx;
	    if (shouldUseOwnTrace) {
	        promise._attachExtraTrace(warning);
	    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
	        ctx.attachExtraTrace(warning);
	    } else {
	        var parsed = parseStackAndMessage(warning);
	        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	    }

	    if (!activeFireEvent("warning", warning)) {
	        formatAndLogError(warning, "", true);
	    }
	}

	function reconstructStack(message, stacks) {
	    for (var i = 0; i < stacks.length - 1; ++i) {
	        stacks[i].push("From previous event:");
	        stacks[i] = stacks[i].join("\n");
	    }
	    if (i < stacks.length) {
	        stacks[i] = stacks[i].join("\n");
	    }
	    return message + "\n" + stacks.join("\n");
	}

	function removeDuplicateOrEmptyJumps(stacks) {
	    for (var i = 0; i < stacks.length; ++i) {
	        if (stacks[i].length === 0 ||
	            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
	            stacks.splice(i, 1);
	            i--;
	        }
	    }
	}

	function removeCommonRoots(stacks) {
	    var current = stacks[0];
	    for (var i = 1; i < stacks.length; ++i) {
	        var prev = stacks[i];
	        var currentLastIndex = current.length - 1;
	        var currentLastLine = current[currentLastIndex];
	        var commonRootMeetPoint = -1;

	        for (var j = prev.length - 1; j >= 0; --j) {
	            if (prev[j] === currentLastLine) {
	                commonRootMeetPoint = j;
	                break;
	            }
	        }

	        for (var j = commonRootMeetPoint; j >= 0; --j) {
	            var line = prev[j];
	            if (current[currentLastIndex] === line) {
	                current.pop();
	                currentLastIndex--;
	            } else {
	                break;
	            }
	        }
	        current = prev;
	    }
	}

	function cleanStack(stack) {
	    var ret = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        var isTraceLine = "    (No stack trace)" === line ||
	            stackFramePattern.test(line);
	        var isInternalFrame = isTraceLine && shouldIgnore(line);
	        if (isTraceLine && !isInternalFrame) {
	            if (indentStackFrames && line.charAt(0) !== " ") {
	                line = "    " + line;
	            }
	            ret.push(line);
	        }
	    }
	    return ret;
	}

	function stackFramesAsArray(error) {
	    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	            break;
	        }
	    }
	    if (i > 0) {
	        stack = stack.slice(i);
	    }
	    return stack;
	}

	function parseStackAndMessage(error) {
	    var stack = error.stack;
	    var message = error.toString();
	    stack = typeof stack === "string" && stack.length > 0
	                ? stackFramesAsArray(error) : ["    (No stack trace)"];
	    return {
	        message: message,
	        stack: cleanStack(stack)
	    };
	}

	function formatAndLogError(error, title, isSoft) {
	    if (typeof console !== "undefined") {
	        var message;
	        if (util.isObject(error)) {
	            var stack = error.stack;
	            message = title + formatStack(stack, error);
	        } else {
	            message = title + String(error);
	        }
	        if (typeof printWarning === "function") {
	            printWarning(message, isSoft);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	}

	function fireRejectionEvent(name, localHandler, reason, promise) {
	    var localEventFired = false;
	    try {
	        if (typeof localHandler === "function") {
	            localEventFired = true;
	            if (name === "rejectionHandled") {
	                localHandler(promise);
	            } else {
	                localHandler(reason, promise);
	            }
	        }
	    } catch (e) {
	        async.throwLater(e);
	    }

	    if (name === "unhandledRejection") {
	        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
	            formatAndLogError(reason, "Unhandled rejection ");
	        }
	    } else {
	        activeFireEvent(name, promise);
	    }
	}

	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj && typeof obj.toString === "function"
	            ? obj.toString() : util.toString(obj);
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {

	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}

	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}

	function longStackTracesIsSupported() {
	    return typeof captureStackTrace === "function";
	}

	var shouldIgnore = function() { return false; };
	var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	function parseLineInfo(line) {
	    var matches = line.match(parseLineInfoRegex);
	    if (matches) {
	        return {
	            fileName: matches[1],
	            line: parseInt(matches[2], 10)
	        };
	    }
	}

	function setBounds(firstLineError, lastLineError) {
	    if (!longStackTracesIsSupported()) return;
	    var firstStackLines = firstLineError.stack.split("\n");
	    var lastStackLines = lastLineError.stack.split("\n");
	    var firstIndex = -1;
	    var lastIndex = -1;
	    var firstFileName;
	    var lastFileName;
	    for (var i = 0; i < firstStackLines.length; ++i) {
	        var result = parseLineInfo(firstStackLines[i]);
	        if (result) {
	            firstFileName = result.fileName;
	            firstIndex = result.line;
	            break;
	        }
	    }
	    for (var i = 0; i < lastStackLines.length; ++i) {
	        var result = parseLineInfo(lastStackLines[i]);
	        if (result) {
	            lastFileName = result.fileName;
	            lastIndex = result.line;
	            break;
	        }
	    }
	    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
	        firstFileName !== lastFileName || firstIndex >= lastIndex) {
	        return;
	    }

	    shouldIgnore = function(line) {
	        if (bluebirdFramePattern.test(line)) return true;
	        var info = parseLineInfo(line);
	        if (info) {
	            if (info.fileName === firstFileName &&
	                (firstIndex <= info.line && info.line <= lastIndex)) {
	                return true;
	            }
	        }
	        return false;
	    };
	}

	function CapturedTrace(parent) {
	    this._parent = parent;
	    this._promisesCreated = 0;
	    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	    captureStackTrace(this, CapturedTrace);
	    if (length > 32) this.uncycle();
	}
	util.inherits(CapturedTrace, Error);
	Context.CapturedTrace = CapturedTrace;

	CapturedTrace.prototype.uncycle = function() {
	    var length = this._length;
	    if (length < 2) return;
	    var nodes = [];
	    var stackToIndex = {};

	    for (var i = 0, node = this; node !== undefined; ++i) {
	        nodes.push(node);
	        node = node._parent;
	    }
	    length = this._length = i;
	    for (var i = length - 1; i >= 0; --i) {
	        var stack = nodes[i].stack;
	        if (stackToIndex[stack] === undefined) {
	            stackToIndex[stack] = i;
	        }
	    }
	    for (var i = 0; i < length; ++i) {
	        var currentStack = nodes[i].stack;
	        var index = stackToIndex[currentStack];
	        if (index !== undefined && index !== i) {
	            if (index > 0) {
	                nodes[index - 1]._parent = undefined;
	                nodes[index - 1]._length = 1;
	            }
	            nodes[i]._parent = undefined;
	            nodes[i]._length = 1;
	            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

	            if (index < length - 1) {
	                cycleEdgeNode._parent = nodes[index + 1];
	                cycleEdgeNode._parent.uncycle();
	                cycleEdgeNode._length =
	                    cycleEdgeNode._parent._length + 1;
	            } else {
	                cycleEdgeNode._parent = undefined;
	                cycleEdgeNode._length = 1;
	            }
	            var currentChildLength = cycleEdgeNode._length + 1;
	            for (var j = i - 2; j >= 0; --j) {
	                nodes[j]._length = currentChildLength;
	                currentChildLength++;
	            }
	            return;
	        }
	    }
	};

	CapturedTrace.prototype.attachExtraTrace = function(error) {
	    if (error.__stackCleaned__) return;
	    this.uncycle();
	    var parsed = parseStackAndMessage(error);
	    var message = parsed.message;
	    var stacks = [parsed.stack];

	    var trace = this;
	    while (trace !== undefined) {
	        stacks.push(cleanStack(trace.stack.split("\n")));
	        trace = trace._parent;
	    }
	    removeCommonRoots(stacks);
	    removeDuplicateOrEmptyJumps(stacks);
	    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	    util.notEnumerableProp(error, "__stackCleaned__", true);
	};

	var captureStackTrace = (function stackDetection() {
	    var v8stackFramePattern = /^\s*at\s*/;
	    var v8stackFormatter = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if (error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        Error.stackTraceLimit += 6;
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        var captureStackTrace = Error.captureStackTrace;

	        shouldIgnore = function(line) {
	            return bluebirdFramePattern.test(line);
	        };
	        return function(receiver, ignoreUntil) {
	            Error.stackTraceLimit += 6;
	            captureStackTrace(receiver, ignoreUntil);
	            Error.stackTraceLimit -= 6;
	        };
	    }
	    var err = new Error();

	    if (typeof err.stack === "string" &&
	        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	        stackFramePattern = /@/;
	        formatStack = v8stackFormatter;
	        indentStackFrames = true;
	        return function captureStackTrace(o) {
	            o.stack = new Error().stack;
	        };
	    }

	    var hasStackAfterThrow;
	    try { throw new Error(); }
	    catch(e) {
	        hasStackAfterThrow = ("stack" in e);
	    }
	    if (!("stack" in err) && hasStackAfterThrow &&
	        typeof Error.stackTraceLimit === "number") {
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        return function captureStackTrace(o) {
	            Error.stackTraceLimit += 6;
	            try { throw new Error(); }
	            catch(e) { o.stack = e.stack; }
	            Error.stackTraceLimit -= 6;
	        };
	    }

	    formatStack = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if ((typeof error === "object" ||
	            typeof error === "function") &&
	            error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    return null;

	})([]);

	if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	    printWarning = function (message) {
	        console.warn(message);
	    };
	    if (util.isNode && process.stderr.isTTY) {
	        printWarning = function(message, isSoft) {
	            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
	            console.warn(color + message + "\u001b[0m\n");
	        };
	    } else if (!util.isNode && typeof (new Error().stack) === "string") {
	        printWarning = function(message, isSoft) {
	            console.warn("%c" + message,
	                        isSoft ? "color: darkorange" : "color: red");
	        };
	    }
	}

	var config = {
	    warnings: warnings,
	    longStackTraces: false,
	    cancellation: false,
	    monitoring: false
	};

	if (longStackTraces) Promise.longStackTraces();

	return {
	    longStackTraces: function() {
	        return config.longStackTraces;
	    },
	    warnings: function() {
	        return config.warnings;
	    },
	    cancellation: function() {
	        return config.cancellation;
	    },
	    monitoring: function() {
	        return config.monitoring;
	    },
	    propagateFromFunction: function() {
	        return propagateFromFunction;
	    },
	    boundValueFunction: function() {
	        return boundValueFunction;
	    },
	    checkForgottenReturns: checkForgottenReturns,
	    setBounds: setBounds,
	    warn: warn,
	    deprecated: deprecated,
	    CapturedTrace: CapturedTrace,
	    fireDomEvent: fireDomEvent,
	    fireGlobalEvent: fireGlobalEvent
	};
	};

	},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	function returner() {
	    return this.value;
	}
	function thrower() {
	    throw this.reason;
	}

	Promise.prototype["return"] =
	Promise.prototype.thenReturn = function (value) {
	    if (value instanceof Promise) value.suppressUnhandledRejections();
	    return this._then(
	        returner, undefined, undefined, {value: value}, undefined);
	};

	Promise.prototype["throw"] =
	Promise.prototype.thenThrow = function (reason) {
	    return this._then(
	        thrower, undefined, undefined, {reason: reason}, undefined);
	};

	Promise.prototype.catchThrow = function (reason) {
	    if (arguments.length <= 1) {
	        return this._then(
	            undefined, thrower, undefined, {reason: reason}, undefined);
	    } else {
	        var _reason = arguments[1];
	        var handler = function() {throw _reason;};
	        return this.caught(reason, handler);
	    }
	};

	Promise.prototype.catchReturn = function (value) {
	    if (arguments.length <= 1) {
	        if (value instanceof Promise) value.suppressUnhandledRejections();
	        return this._then(
	            undefined, returner, undefined, {value: value}, undefined);
	    } else {
	        var _value = arguments[1];
	        if (_value instanceof Promise) _value.suppressUnhandledRejections();
	        var handler = function() {return _value;};
	        return this.caught(value, handler);
	    }
	};
	};

	},{}],11:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;
	var PromiseAll = Promise.all;

	function promiseAllThis() {
	    return PromiseAll(this);
	}

	function PromiseMapSeries(promises, fn) {
	    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
	}

	Promise.prototype.each = function (fn) {
	    return this.mapSeries(fn)
	            ._then(promiseAllThis, undefined, undefined, this, undefined);
	};

	Promise.prototype.mapSeries = function (fn) {
	    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
	};

	Promise.each = function (promises, fn) {
	    return PromiseMapSeries(promises, fn)
	            ._then(promiseAllThis, undefined, undefined, promises, undefined);
	};

	Promise.mapSeries = PromiseMapSeries;
	};

	},{}],12:[function(_dereq_,module,exports){
	"use strict";
	var es5 = _dereq_("./es5");
	var Objectfreeze = es5.freeze;
	var util = _dereq_("./util");
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;

	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        notEnumerableProp(this, "message",
	            typeof message === "string" ? message : defaultMessage);
	        notEnumerableProp(this, "name", nameProperty);
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            Error.call(this);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}

	var _TypeError, _RangeError;
	var Warning = subError("Warning", "warning");
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}

	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}

	es5.defineProperty(AggregateError.prototype, "length", {
	    value: 0,
	    configurable: false,
	    writable: true,
	    enumerable: true
	});
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};

	function OperationalError(message) {
	    if (!(this instanceof OperationalError))
	        return new OperationalError(message);
	    notEnumerableProp(this, "name", "OperationalError");
	    notEnumerableProp(this, "message", message);
	    this.cause = message;
	    this["isOperational"] = true;

	    if (message instanceof Error) {
	        notEnumerableProp(this, "message", message.message);
	        notEnumerableProp(this, "stack", message.stack);
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }

	}
	inherits(OperationalError, Error);

	var errorTypes = Error["__BluebirdErrorTypes__"];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
	        value: errorTypes,
	        writable: false,
	        enumerable: false,
	        configurable: false
	    });
	}

	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    Warning: Warning
	};

	},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
	var isES5 = (function(){
	    "use strict";
	    return this === undefined;
	})();

	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        getDescriptor: Object.getOwnPropertyDescriptor,
	        keys: Object.keys,
	        names: Object.getOwnPropertyNames,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5,
	        propertyIsWritable: function(obj, prop) {
	            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	            return !!(!descriptor || descriptor.writable || descriptor.set);
	        }
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;

	    var ObjectKeys = function (o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    };

	    var ObjectGetDescriptor = function(o, key) {
	        return {value: o[key]};
	    };

	    var ObjectDefineProperty = function (o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    };

	    var ObjectFreeze = function (obj) {
	        return obj;
	    };

	    var ObjectGetPrototypeOf = function (obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    };

	    var ArrayIsArray = function (obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    };

	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        names: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        getDescriptor: ObjectGetDescriptor,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5,
	        propertyIsWritable: function() {
	            return true;
	        }
	    };
	}

	},{}],14:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;

	Promise.prototype.filter = function (fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};

	Promise.filter = function (promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};

	},{}],15:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, tryConvertToPromise) {
	var util = _dereq_("./util");
	var CancellationError = Promise.CancellationError;
	var errorObj = util.errorObj;

	function PassThroughHandlerContext(promise, type, handler) {
	    this.promise = promise;
	    this.type = type;
	    this.handler = handler;
	    this.called = false;
	    this.cancelPromise = null;
	}

	PassThroughHandlerContext.prototype.isFinallyHandler = function() {
	    return this.type === 0;
	};

	function FinallyHandlerCancelReaction(finallyHandler) {
	    this.finallyHandler = finallyHandler;
	}

	FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
	    checkCancel(this.finallyHandler);
	};

	function checkCancel(ctx, reason) {
	    if (ctx.cancelPromise != null) {
	        if (arguments.length > 1) {
	            ctx.cancelPromise._reject(reason);
	        } else {
	            ctx.cancelPromise._cancel();
	        }
	        ctx.cancelPromise = null;
	        return true;
	    }
	    return false;
	}

	function succeed() {
	    return finallyHandler.call(this, this.promise._target()._settledValue());
	}
	function fail(reason) {
	    if (checkCancel(this, reason)) return;
	    errorObj.e = reason;
	    return errorObj;
	}
	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;

	    if (!this.called) {
	        this.called = true;
	        var ret = this.isFinallyHandler()
	            ? handler.call(promise._boundValue())
	            : handler.call(promise._boundValue(), reasonOrValue);
	        if (ret !== undefined) {
	            promise._setReturnedNonUndefined();
	            var maybePromise = tryConvertToPromise(ret, promise);
	            if (maybePromise instanceof Promise) {
	                if (this.cancelPromise != null) {
	                    if (maybePromise.isCancelled()) {
	                        var reason =
	                            new CancellationError("late cancellation observer");
	                        promise._attachExtraTrace(reason);
	                        errorObj.e = reason;
	                        return errorObj;
	                    } else if (maybePromise.isPending()) {
	                        maybePromise._attachCancellationCallback(
	                            new FinallyHandlerCancelReaction(this));
	                    }
	                }
	                return maybePromise._then(
	                    succeed, fail, undefined, this, undefined);
	            }
	        }
	    }

	    if (promise.isRejected()) {
	        checkCancel(this);
	        errorObj.e = reasonOrValue;
	        return errorObj;
	    } else {
	        checkCancel(this);
	        return reasonOrValue;
	    }
	}

	Promise.prototype._passThrough = function(handler, type, success, fail) {
	    if (typeof handler !== "function") return this.then();
	    return this._then(success,
	                      fail,
	                      undefined,
	                      new PassThroughHandlerContext(this, type, handler),
	                      undefined);
	};

	Promise.prototype.lastly =
	Promise.prototype["finally"] = function (handler) {
	    return this._passThrough(handler,
	                             0,
	                             finallyHandler,
	                             finallyHandler);
	};

	Promise.prototype.tap = function (handler) {
	    return this._passThrough(handler, 1, finallyHandler);
	};

	return PassThroughHandlerContext;
	};

	},{"./util":36}],16:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          apiRejection,
	                          INTERNAL,
	                          tryConvertToPromise,
	                          Proxyable,
	                          debug) {
	var errors = _dereq_("./errors");
	var TypeError = errors.TypeError;
	var util = _dereq_("./util");
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	var yieldHandlers = [];

	function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	    for (var i = 0; i < yieldHandlers.length; ++i) {
	        traceParent._pushContext();
	        var result = tryCatch(yieldHandlers[i])(value);
	        traceParent._popContext();
	        if (result === errorObj) {
	            traceParent._pushContext();
	            var ret = Promise.reject(errorObj.e);
	            traceParent._popContext();
	            return ret;
	        }
	        var maybePromise = tryConvertToPromise(result, traceParent);
	        if (maybePromise instanceof Promise) return maybePromise;
	    }
	    return null;
	}

	function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	    var promise = this._promise = new Promise(INTERNAL);
	    promise._captureStackTrace();
	    promise._setOnCancel(this);
	    this._stack = stack;
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = undefined;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	    this._yieldedPromise = null;
	}
	util.inherits(PromiseSpawn, Proxyable);

	PromiseSpawn.prototype._isResolved = function() {
	    return this._promise === null;
	};

	PromiseSpawn.prototype._cleanup = function() {
	    this._promise = this._generator = null;
	};

	PromiseSpawn.prototype._promiseCancelled = function() {
	    if (this._isResolved()) return;
	    var implementsReturn = typeof this._generator["return"] !== "undefined";

	    var result;
	    if (!implementsReturn) {
	        var reason = new Promise.CancellationError(
	            "generator .return() sentinel");
	        Promise.coroutine.returnSentinel = reason;
	        this._promise._attachExtraTrace(reason);
	        this._promise._pushContext();
	        result = tryCatch(this._generator["throw"]).call(this._generator,
	                                                         reason);
	        this._promise._popContext();
	        if (result === errorObj && result.e === reason) {
	            result = null;
	        }
	    } else {
	        this._promise._pushContext();
	        result = tryCatch(this._generator["return"]).call(this._generator,
	                                                          undefined);
	        this._promise._popContext();
	    }
	    var promise = this._promise;
	    this._cleanup();
	    if (result === errorObj) {
	        promise._rejectCallback(result.e, false);
	    } else {
	        promise.cancel();
	    }
	};

	PromiseSpawn.prototype._promiseFulfilled = function(value) {
	    this._yieldedPromise = null;
	    this._promise._pushContext();
	    var result = tryCatch(this._generator.next).call(this._generator, value);
	    this._promise._popContext();
	    this._continue(result);
	};

	PromiseSpawn.prototype._promiseRejected = function(reason) {
	    this._yieldedPromise = null;
	    this._promise._attachExtraTrace(reason);
	    this._promise._pushContext();
	    var result = tryCatch(this._generator["throw"])
	        .call(this._generator, reason);
	    this._promise._popContext();
	    this._continue(result);
	};

	PromiseSpawn.prototype._resultCancelled = function() {
	    if (this._yieldedPromise instanceof Promise) {
	        var promise = this._yieldedPromise;
	        this._yieldedPromise = null;
	        this._promiseCancelled();
	        promise.cancel();
	    }
	};

	PromiseSpawn.prototype.promise = function () {
	    return this._promise;
	};

	PromiseSpawn.prototype._run = function () {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = undefined;
	    this._promiseFulfilled(undefined);
	};

	PromiseSpawn.prototype._continue = function (result) {
	    var promise = this._promise;
	    if (result === errorObj) {
	        this._cleanup();
	        return promise._rejectCallback(result.e, false);
	    }

	    var value = result.value;
	    if (result.done === true) {
	        this._cleanup();
	        return promise._resolveCallback(value);
	    } else {
	        var maybePromise = tryConvertToPromise(value, this._promise);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise,
	                                        this._yieldHandlers,
	                                        this._promise);
	            if (maybePromise === null) {
	                this._promiseRejected(
	                    new TypeError(
	                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", value) +
	                        "From coroutine:\u000a" +
	                        this._stack.split("\n").slice(1, -7).join("\n")
	                    )
	                );
	                return;
	            }
	        }
	        maybePromise = maybePromise._target();
	        var bitField = maybePromise._bitField;
	        ;
	        if (((bitField & 50397184) === 0)) {
	            this._yieldedPromise = maybePromise;
	            maybePromise._proxy(this, null);
	        } else if (((bitField & 33554432) !== 0)) {
	            this._promiseFulfilled(maybePromise._value());
	        } else if (((bitField & 16777216) !== 0)) {
	            this._promiseRejected(maybePromise._reason());
	        } else {
	            this._promiseCancelled();
	        }
	    }
	};

	Promise.coroutine = function (generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    var stack = new Error().stack;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
	                                      stack);
	        var ret = spawn.promise();
	        spawn._generator = generator;
	        spawn._promiseFulfilled(undefined);
	        return ret;
	    };
	};

	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    yieldHandlers.push(fn);
	};

	Promise.spawn = function (generatorFunction) {
	    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};

	},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
	var util = _dereq_("./util");
	var canEvaluate = util.canEvaluate;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var reject;

	if (false) {
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };

	    var promiseSetter = function(i) {
	        return new Function("promise", "holder", "                           \n\
	            'use strict';                                                    \n\
	            holder.pIndex = promise;                                         \n\
	            ".replace(/Index/g, i));
	    };

	    var generateHolderClass = function(total) {
	        var props = new Array(total);
	        for (var i = 0; i < props.length; ++i) {
	            props[i] = "this.p" + (i+1);
	        }
	        var assignment = props.join(" = ") + " = null;";
	        var cancellationCode= "var promise;\n" + props.map(function(prop) {
	            return "                                                         \n\
	                promise = " + prop + ";                                      \n\
	                if (promise instanceof Promise) {                            \n\
	                    promise.cancel();                                        \n\
	                }                                                            \n\
	            ";
	        }).join("\n");
	        var passedArguments = props.join(", ");
	        var name = "Holder$" + total;


	        var code = "return function(tryCatch, errorObj, Promise) {           \n\
	            'use strict';                                                    \n\
	            function [TheName](fn) {                                         \n\
	                [TheProperties]                                              \n\
	                this.fn = fn;                                                \n\
	                this.now = 0;                                                \n\
	            }                                                                \n\
	            [TheName].prototype.checkFulfillment = function(promise) {       \n\
	                var now = ++this.now;                                        \n\
	                if (now === [TheTotal]) {                                    \n\
	                    promise._pushContext();                                  \n\
	                    var callback = this.fn;                                  \n\
	                    var ret = tryCatch(callback)([ThePassedArguments]);      \n\
	                    promise._popContext();                                   \n\
	                    if (ret === errorObj) {                                  \n\
	                        promise._rejectCallback(ret.e, false);               \n\
	                    } else {                                                 \n\
	                        promise._resolveCallback(ret);                       \n\
	                    }                                                        \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype._resultCancelled = function() {              \n\
	                [CancellationCode]                                           \n\
	            };                                                               \n\
	                                                                             \n\
	            return [TheName];                                                \n\
	        }(tryCatch, errorObj, Promise);                                      \n\
	        ";

	        code = code.replace(/\[TheName\]/g, name)
	            .replace(/\[TheTotal\]/g, total)
	            .replace(/\[ThePassedArguments\]/g, passedArguments)
	            .replace(/\[TheProperties\]/g, assignment)
	            .replace(/\[CancellationCode\]/g, cancellationCode);

	        return new Function("tryCatch", "errorObj", "Promise", code)
	                           (tryCatch, errorObj, Promise);
	    };

	    var holderClasses = [];
	    var thenCallbacks = [];
	    var promiseSetters = [];

	    for (var i = 0; i < 8; ++i) {
	        holderClasses.push(generateHolderClass(i + 1));
	        thenCallbacks.push(thenCallback(i + 1));
	        promiseSetters.push(promiseSetter(i + 1));
	    }

	    reject = function (reason) {
	        this._reject(reason);
	    };
	}}

	Promise.join = function () {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (false) {
	            if (last <= 8 && canEvaluate) {
	                var ret = new Promise(INTERNAL);
	                ret._captureStackTrace();
	                var HolderClass = holderClasses[last - 1];
	                var holder = new HolderClass(fn);
	                var callbacks = thenCallbacks;

	                for (var i = 0; i < last; ++i) {
	                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                    if (maybePromise instanceof Promise) {
	                        maybePromise = maybePromise._target();
	                        var bitField = maybePromise._bitField;
	                        ;
	                        if (((bitField & 50397184) === 0)) {
	                            maybePromise._then(callbacks[i], reject,
	                                               undefined, ret, holder);
	                            promiseSetters[i](maybePromise, holder);
	                        } else if (((bitField & 33554432) !== 0)) {
	                            callbacks[i].call(ret,
	                                              maybePromise._value(), holder);
	                        } else if (((bitField & 16777216) !== 0)) {
	                            ret._reject(maybePromise._reason());
	                        } else {
	                            ret._cancel();
	                        }
	                    } else {
	                        callbacks[i].call(ret, maybePromise, holder);
	                    }
	                }
	                if (!ret._isFateSealed()) {
	                    ret._setAsyncGuaranteed();
	                    ret._setOnCancel(holder);
	                }
	                return ret;
	            }
	        }
	    }
	    var args = [].slice.call(arguments);;
	    if (fn) args.pop();
	    var ret = new PromiseArray(args).promise();
	    return fn !== undefined ? ret.spread(fn) : ret;
	};

	};

	},{"./util":36}],18:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var EMPTY_ARRAY = [];

	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    var domain = getDomain();
	    this._callback = domain === null ? fn : domain.bind(fn);
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
	    this._init$(undefined, -2);
	}
	util.inherits(MappingPromiseArray, PromiseArray);

	MappingPromiseArray.prototype._init = function () {};

	MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;

	    if (index < 0) {
	        index = (index * -1) - 1;
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return true;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return false;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;

	        var promise = this._promise;
	        var callback = this._callback;
	        var receiver = promise._boundValue();
	        promise._pushContext();
	        var ret = tryCatch(callback).call(receiver, value, index, length);
	        var promiseCreated = promise._popContext();
	        debug.checkForgottenReturns(
	            ret,
	            promiseCreated,
	            preservedValues !== null ? "Promise.filter" : "Promise.map",
	            promise
	        );
	        if (ret === errorObj) {
	            this._reject(ret.e);
	            return true;
	        }

	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            var bitField = maybePromise._bitField;
	            ;
	            if (((bitField & 50397184) === 0)) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = maybePromise;
	                maybePromise._proxy(this, (index + 1) * -1);
	                return false;
	            } else if (((bitField & 33554432) !== 0)) {
	                ret = maybePromise._value();
	            } else if (((bitField & 16777216) !== 0)) {
	                this._reject(maybePromise._reason());
	                return true;
	            } else {
	                this._cancel();
	                return true;
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }
	        return true;
	    }
	    return false;
	};

	MappingPromiseArray.prototype._drainQueue = function () {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        if (this._isResolved()) return;
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};

	MappingPromiseArray.prototype._filter = function (booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};

	MappingPromiseArray.prototype.preservedValues = function () {
	    return this._preservedValues;
	};

	function map(promises, fn, options, _filter) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var limit = typeof options === "object" && options !== null
	        ? options.concurrency
	        : 0;
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
	}

	Promise.prototype.map = function (fn, options) {
	    return map(this, fn, options, null);
	};

	Promise.map = function (promises, fn, options, _filter) {
	    return map(promises, fn, options, _filter);
	};


	};

	},{"./util":36}],19:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;

	Promise.method = function (fn) {
	    if (typeof fn !== "function") {
	        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return function () {
	        var ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._pushContext();
	        var value = tryCatch(fn).apply(this, arguments);
	        var promiseCreated = ret._popContext();
	        debug.checkForgottenReturns(
	            value, promiseCreated, "Promise.method", ret);
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};

	Promise.attempt = Promise["try"] = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._pushContext();
	    var value;
	    if (arguments.length > 1) {
	        debug.deprecated("calling Promise.try with more than 1 argument");
	        var arg = arguments[1];
	        var ctx = arguments[2];
	        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
	                                  : tryCatch(fn).call(ctx, arg);
	    } else {
	        value = tryCatch(fn)();
	    }
	    var promiseCreated = ret._popContext();
	    debug.checkForgottenReturns(
	        value, promiseCreated, "Promise.try", ret);
	    ret._resolveFromSyncValue(value);
	    return ret;
	};

	Promise.prototype._resolveFromSyncValue = function (value) {
	    if (value === util.errorObj) {
	        this._rejectCallback(value.e, false);
	    } else {
	        this._resolveCallback(value, true);
	    }
	};
	};

	},{"./util":36}],20:[function(_dereq_,module,exports){
	"use strict";
	var util = _dereq_("./util");
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = _dereq_("./errors");
	var OperationalError = errors.OperationalError;
	var es5 = _dereq_("./es5");

	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}

	var rErrorKey = /^(?:name|message|stack|cause)$/;
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	        ret.name = obj.name;
	        ret.message = obj.message;
	        ret.stack = obj.stack;
	        var keys = es5.keys(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!rErrorKey.test(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    util.markAsOriginatingFromRejection(obj);
	    return obj;
	}

	function nodebackForPromise(promise, multiArgs) {
	    return function(err, value) {
	        if (promise === null) return;
	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (!multiArgs) {
	            promise._fulfill(value);
	        } else {
	            var args = [].slice.call(arguments, 1);;
	            promise._fulfill(args);
	        }
	        promise = null;
	    };
	}

	module.exports = nodebackForPromise;

	},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var util = _dereq_("./util");
	var async = Promise._async;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	function spreadAdapter(val, nodeback) {
	    var promise = this;
	    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	    var ret =
	        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	function successAdapter(val, nodeback) {
	    var promise = this;
	    var receiver = promise._boundValue();
	    var ret = val === undefined
	        ? tryCatch(nodeback).call(receiver, null)
	        : tryCatch(nodeback).call(receiver, null, val);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	function errorAdapter(reason, nodeback) {
	    var promise = this;
	    if (!reason) {
	        var newReason = new Error(reason + "");
	        newReason.cause = reason;
	        reason = newReason;
	    }
	    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
	                                                                     options) {
	    if (typeof nodeback == "function") {
	        var adapter = successAdapter;
	        if (options !== undefined && Object(options).spread) {
	            adapter = spreadAdapter;
	        }
	        this._then(
	            adapter,
	            errorAdapter,
	            undefined,
	            this,
	            nodeback
	        );
	    }
	    return this;
	};
	};

	},{"./util":36}],22:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function() {
	var makeSelfResolutionError = function () {
	    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var reflectHandler = function() {
	    return new Promise.PromiseInspection(this._target());
	};
	var apiRejection = function(msg) {
	    return Promise.reject(new TypeError(msg));
	};
	function Proxyable() {}
	var UNDEFINED_BINDING = {};
	var util = _dereq_("./util");

	var getDomain;
	if (util.isNode) {
	    getDomain = function() {
	        var ret = process.domain;
	        if (ret === undefined) ret = null;
	        return ret;
	    };
	} else {
	    getDomain = function() {
	        return null;
	    };
	}
	util.notEnumerableProp(Promise, "_getDomain", getDomain);

	var es5 = _dereq_("./es5");
	var Async = _dereq_("./async");
	var async = new Async();
	es5.defineProperty(Promise, "_async", {value: async});
	var errors = _dereq_("./errors");
	var TypeError = Promise.TypeError = errors.TypeError;
	Promise.RangeError = errors.RangeError;
	var CancellationError = Promise.CancellationError = errors.CancellationError;
	Promise.TimeoutError = errors.TimeoutError;
	Promise.OperationalError = errors.OperationalError;
	Promise.RejectionError = errors.OperationalError;
	Promise.AggregateError = errors.AggregateError;
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {};
	var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
	var PromiseArray =
	    _dereq_("./promise_array")(Promise, INTERNAL,
	                               tryConvertToPromise, apiRejection, Proxyable);
	var Context = _dereq_("./context")(Promise);
	 /*jshint unused:false*/
	var createContext = Context.create;
	var debug = _dereq_("./debuggability")(Promise, Context);
	var CapturedTrace = debug.CapturedTrace;
	var PassThroughHandlerContext =
	    _dereq_("./finally")(Promise, tryConvertToPromise);
	var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
	var nodebackForPromise = _dereq_("./nodeback");
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	function check(self, executor) {
	    if (typeof executor !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(executor));
	    }
	    if (self.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	}

	function Promise(executor) {
	    this._bitField = 0;
	    this._fulfillmentHandler0 = undefined;
	    this._rejectionHandler0 = undefined;
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    if (executor !== INTERNAL) {
	        check(this, executor);
	        this._resolveFromExecutor(executor);
	    }
	    this._promiseCreated();
	    this._fireEvent("promiseCreated", this);
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (util.isObject(item)) {
	                catchInstances[j++] = item;
	            } else {
	                return apiRejection("expecting an object but got " + util.classString(item));
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	        return this.then(undefined, catchFilter(catchInstances, fn, this));
	    }
	    return this.then(undefined, fn);
	};

	Promise.prototype.reflect = function () {
	    return this._then(reflectHandler,
	        reflectHandler, undefined, this, undefined);
	};

	Promise.prototype.then = function (didFulfill, didReject) {
	    if (debug.warnings() && arguments.length > 0 &&
	        typeof didFulfill !== "function" &&
	        typeof didReject !== "function") {
	        var msg = ".then() only accepts functions but was passed: " +
	                util.classString(didFulfill);
	        if (arguments.length > 1) {
	            msg += ", " + util.classString(didReject);
	        }
	        this._warn(msg);
	    }
	    return this._then(didFulfill, didReject, undefined, undefined, undefined);
	};

	Promise.prototype.done = function (didFulfill, didReject) {
	    var promise =
	        this._then(didFulfill, didReject, undefined, undefined, undefined);
	    promise._setIsFinal();
	};

	Promise.prototype.spread = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
	};

	Promise.prototype.toJSON = function () {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: undefined,
	        rejectionReason: undefined
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this.value();
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this.reason();
	        ret.isRejected = true;
	    }
	    return ret;
	};

	Promise.prototype.all = function () {
	    if (arguments.length > 0) {
	        this._warn(".all() was passed arguments but it does not take any");
	    }
	    return new PromiseArray(this).promise();
	};

	Promise.prototype.error = function (fn) {
	    return this.caught(util.originatesFromRejection, fn);
	};

	Promise.is = function (val) {
	    return val instanceof Promise;
	};

	Promise.fromNode = Promise.fromCallback = function(fn) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
	                                         : false;
	    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
	    if (result === errorObj) {
	        ret._rejectCallback(result.e, true);
	    }
	    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
	    return ret;
	};

	Promise.all = function (promises) {
	    return new PromiseArray(promises).promise();
	};

	Promise.cast = function (obj) {
	    var ret = tryConvertToPromise(obj);
	    if (!(ret instanceof Promise)) {
	        ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._setFulfilled();
	        ret._rejectionHandler0 = obj;
	    }
	    return ret;
	};

	Promise.resolve = Promise.fulfilled = Promise.cast;

	Promise.reject = Promise.rejected = function (reason) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._rejectCallback(reason, true);
	    return ret;
	};

	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    var prev = async._schedule;
	    async._schedule = fn;
	    return prev;
	};

	Promise.prototype._then = function (
	    didFulfill,
	    didReject,
	    _,    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== undefined;
	    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
	    var target = this._target();
	    var bitField = target._bitField;

	    if (!haveInternalData) {
	        promise._propagateFrom(this, 3);
	        promise._captureStackTrace();
	        if (receiver === undefined &&
	            ((this._bitField & 2097152) !== 0)) {
	            if (!((bitField & 50397184) === 0)) {
	                receiver = this._boundValue();
	            } else {
	                receiver = target === this ? undefined : this._boundTo;
	            }
	        }
	        this._fireEvent("promiseChained", this, promise);
	    }

	    var domain = getDomain();
	    if (!((bitField & 50397184) === 0)) {
	        var handler, value, settler = target._settlePromiseCtx;
	        if (((bitField & 33554432) !== 0)) {
	            value = target._rejectionHandler0;
	            handler = didFulfill;
	        } else if (((bitField & 16777216) !== 0)) {
	            value = target._fulfillmentHandler0;
	            handler = didReject;
	            target._unsetRejectionIsUnhandled();
	        } else {
	            settler = target._settlePromiseLateCancellationObserver;
	            value = new CancellationError("late cancellation observer");
	            target._attachExtraTrace(value);
	            handler = didReject;
	        }

	        async.invoke(settler, target, {
	            handler: domain === null ? handler
	                : (typeof handler === "function" && domain.bind(handler)),
	            promise: promise,
	            receiver: receiver,
	            value: value
	        });
	    } else {
	        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
	    }

	    return promise;
	};

	Promise.prototype._length = function () {
	    return this._bitField & 65535;
	};

	Promise.prototype._isFateSealed = function () {
	    return (this._bitField & 117506048) !== 0;
	};

	Promise.prototype._isFollowing = function () {
	    return (this._bitField & 67108864) === 67108864;
	};

	Promise.prototype._setLength = function (len) {
	    this._bitField = (this._bitField & -65536) |
	        (len & 65535);
	};

	Promise.prototype._setFulfilled = function () {
	    this._bitField = this._bitField | 33554432;
	    this._fireEvent("promiseFulfilled", this);
	};

	Promise.prototype._setRejected = function () {
	    this._bitField = this._bitField | 16777216;
	    this._fireEvent("promiseRejected", this);
	};

	Promise.prototype._setFollowing = function () {
	    this._bitField = this._bitField | 67108864;
	    this._fireEvent("promiseResolved", this);
	};

	Promise.prototype._setIsFinal = function () {
	    this._bitField = this._bitField | 4194304;
	};

	Promise.prototype._isFinal = function () {
	    return (this._bitField & 4194304) > 0;
	};

	Promise.prototype._unsetCancelled = function() {
	    this._bitField = this._bitField & (~65536);
	};

	Promise.prototype._setCancelled = function() {
	    this._bitField = this._bitField | 65536;
	    this._fireEvent("promiseCancelled", this);
	};

	Promise.prototype._setAsyncGuaranteed = function() {
	    this._bitField = this._bitField | 134217728;
	};

	Promise.prototype._receiverAt = function (index) {
	    var ret = index === 0 ? this._receiver0 : this[
	            index * 4 - 4 + 3];
	    if (ret === UNDEFINED_BINDING) {
	        return undefined;
	    } else if (ret === undefined && this._isBound()) {
	        return this._boundValue();
	    }
	    return ret;
	};

	Promise.prototype._promiseAt = function (index) {
	    return this[
	            index * 4 - 4 + 2];
	};

	Promise.prototype._fulfillmentHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 0];
	};

	Promise.prototype._rejectionHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 1];
	};

	Promise.prototype._boundValue = function() {};

	Promise.prototype._migrateCallback0 = function (follower) {
	    var bitField = follower._bitField;
	    var fulfill = follower._fulfillmentHandler0;
	    var reject = follower._rejectionHandler0;
	    var promise = follower._promise0;
	    var receiver = follower._receiverAt(0);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};

	Promise.prototype._migrateCallbackAt = function (follower, index) {
	    var fulfill = follower._fulfillmentHandlerAt(index);
	    var reject = follower._rejectionHandlerAt(index);
	    var promise = follower._promiseAt(index);
	    var receiver = follower._receiverAt(index);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};

	Promise.prototype._addCallbacks = function (
	    fulfill,
	    reject,
	    promise,
	    receiver,
	    domain
	) {
	    var index = this._length();

	    if (index >= 65535 - 4) {
	        index = 0;
	        this._setLength(0);
	    }

	    if (index === 0) {
	        this._promise0 = promise;
	        this._receiver0 = receiver;
	        if (typeof fulfill === "function") {
	            this._fulfillmentHandler0 =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this._rejectionHandler0 =
	                domain === null ? reject : domain.bind(reject);
	        }
	    } else {
	        var base = index * 4 - 4;
	        this[base + 2] = promise;
	        this[base + 3] = receiver;
	        if (typeof fulfill === "function") {
	            this[base + 0] =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this[base + 1] =
	                domain === null ? reject : domain.bind(reject);
	        }
	    }
	    this._setLength(index + 1);
	    return index;
	};

	Promise.prototype._proxy = function (proxyable, arg) {
	    this._addCallbacks(undefined, undefined, arg, proxyable, null);
	};

	Promise.prototype._resolveCallback = function(value, shouldBind) {
	    if (((this._bitField & 117506048) !== 0)) return;
	    if (value === this)
	        return this._rejectCallback(makeSelfResolutionError(), false);
	    var maybePromise = tryConvertToPromise(value, this);
	    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

	    if (shouldBind) this._propagateFrom(maybePromise, 2);

	    var promise = maybePromise._target();

	    if (promise === this) {
	        this._reject(makeSelfResolutionError());
	        return;
	    }

	    var bitField = promise._bitField;
	    if (((bitField & 50397184) === 0)) {
	        var len = this._length();
	        if (len > 0) promise._migrateCallback0(this);
	        for (var i = 1; i < len; ++i) {
	            promise._migrateCallbackAt(this, i);
	        }
	        this._setFollowing();
	        this._setLength(0);
	        this._setFollowee(promise);
	    } else if (((bitField & 33554432) !== 0)) {
	        this._fulfill(promise._value());
	    } else if (((bitField & 16777216) !== 0)) {
	        this._reject(promise._reason());
	    } else {
	        var reason = new CancellationError("late cancellation observer");
	        promise._attachExtraTrace(reason);
	        this._reject(reason);
	    }
	};

	Promise.prototype._rejectCallback =
	function(reason, synchronous, ignoreNonErrorWarnings) {
	    var trace = util.ensureErrorObject(reason);
	    var hasStack = trace === reason;
	    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
	        var message = "a promise was rejected with a non-error: " +
	            util.classString(reason);
	        this._warn(message, true);
	    }
	    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	    this._reject(reason);
	};

	Promise.prototype._resolveFromExecutor = function (executor) {
	    var promise = this;
	    this._captureStackTrace();
	    this._pushContext();
	    var synchronous = true;
	    var r = this._execute(executor, function(value) {
	        promise._resolveCallback(value);
	    }, function (reason) {
	        promise._rejectCallback(reason, synchronous);
	    });
	    synchronous = false;
	    this._popContext();

	    if (r !== undefined) {
	        promise._rejectCallback(r, true);
	    }
	};

	Promise.prototype._settlePromiseFromHandler = function (
	    handler, receiver, value, promise
	) {
	    var bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;
	    promise._pushContext();
	    var x;
	    if (receiver === APPLY) {
	        if (!value || typeof value.length !== "number") {
	            x = errorObj;
	            x.e = new TypeError("cannot .spread() a non-array: " +
	                                    util.classString(value));
	        } else {
	            x = tryCatch(handler).apply(this._boundValue(), value);
	        }
	    } else {
	        x = tryCatch(handler).call(receiver, value);
	    }
	    var promiseCreated = promise._popContext();
	    bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;

	    if (x === NEXT_FILTER) {
	        promise._reject(value);
	    } else if (x === errorObj) {
	        promise._rejectCallback(x.e, false);
	    } else {
	        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
	        promise._resolveCallback(x);
	    }
	};

	Promise.prototype._target = function() {
	    var ret = this;
	    while (ret._isFollowing()) ret = ret._followee();
	    return ret;
	};

	Promise.prototype._followee = function() {
	    return this._rejectionHandler0;
	};

	Promise.prototype._setFollowee = function(promise) {
	    this._rejectionHandler0 = promise;
	};

	Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
	    var isPromise = promise instanceof Promise;
	    var bitField = this._bitField;
	    var asyncGuaranteed = ((bitField & 134217728) !== 0);
	    if (((bitField & 65536) !== 0)) {
	        if (isPromise) promise._invokeInternalOnCancel();

	        if (receiver instanceof PassThroughHandlerContext &&
	            receiver.isFinallyHandler()) {
	            receiver.cancelPromise = promise;
	            if (tryCatch(handler).call(receiver, value) === errorObj) {
	                promise._reject(errorObj.e);
	            }
	        } else if (handler === reflectHandler) {
	            promise._fulfill(reflectHandler.call(receiver));
	        } else if (receiver instanceof Proxyable) {
	            receiver._promiseCancelled(promise);
	        } else if (isPromise || promise instanceof PromiseArray) {
	            promise._cancel();
	        } else {
	            receiver.cancel();
	        }
	    } else if (typeof handler === "function") {
	        if (!isPromise) {
	            handler.call(receiver, value, promise);
	        } else {
	            if (asyncGuaranteed) promise._setAsyncGuaranteed();
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (receiver instanceof Proxyable) {
	        if (!receiver._isResolved()) {
	            if (((bitField & 33554432) !== 0)) {
	                receiver._promiseFulfilled(value, promise);
	            } else {
	                receiver._promiseRejected(value, promise);
	            }
	        }
	    } else if (isPromise) {
	        if (asyncGuaranteed) promise._setAsyncGuaranteed();
	        if (((bitField & 33554432) !== 0)) {
	            promise._fulfill(value);
	        } else {
	            promise._reject(value);
	        }
	    }
	};

	Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
	    var handler = ctx.handler;
	    var promise = ctx.promise;
	    var receiver = ctx.receiver;
	    var value = ctx.value;
	    if (typeof handler === "function") {
	        if (!(promise instanceof Promise)) {
	            handler.call(receiver, value, promise);
	        } else {
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (promise instanceof Promise) {
	        promise._reject(value);
	    }
	};

	Promise.prototype._settlePromiseCtx = function(ctx) {
	    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
	};

	Promise.prototype._settlePromise0 = function(handler, value, bitField) {
	    var promise = this._promise0;
	    var receiver = this._receiverAt(0);
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._settlePromise(promise, handler, receiver, value);
	};

	Promise.prototype._clearCallbackDataAtIndex = function(index) {
	    var base = index * 4 - 4;
	    this[base + 2] =
	    this[base + 3] =
	    this[base + 0] =
	    this[base + 1] = undefined;
	};

	Promise.prototype._fulfill = function (value) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._reject(err);
	    }
	    this._setFulfilled();
	    this._rejectionHandler0 = value;

	    if ((bitField & 65535) > 0) {
	        if (((bitField & 134217728) !== 0)) {
	            this._settlePromises();
	        } else {
	            async.settlePromises(this);
	        }
	    }
	};

	Promise.prototype._reject = function (reason) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    this._setRejected();
	    this._fulfillmentHandler0 = reason;

	    if (this._isFinal()) {
	        return async.fatalError(reason, util.isNode);
	    }

	    if ((bitField & 65535) > 0) {
	        async.settlePromises(this);
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};

	Promise.prototype._fulfillPromises = function (len, value) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._fulfillmentHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, value);
	    }
	};

	Promise.prototype._rejectPromises = function (len, reason) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._rejectionHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, reason);
	    }
	};

	Promise.prototype._settlePromises = function () {
	    var bitField = this._bitField;
	    var len = (bitField & 65535);

	    if (len > 0) {
	        if (((bitField & 16842752) !== 0)) {
	            var reason = this._fulfillmentHandler0;
	            this._settlePromise0(this._rejectionHandler0, reason, bitField);
	            this._rejectPromises(len, reason);
	        } else {
	            var value = this._rejectionHandler0;
	            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
	            this._fulfillPromises(len, value);
	        }
	        this._setLength(0);
	    }
	    this._clearCancellationData();
	};

	Promise.prototype._settledValue = function() {
	    var bitField = this._bitField;
	    if (((bitField & 33554432) !== 0)) {
	        return this._rejectionHandler0;
	    } else if (((bitField & 16777216) !== 0)) {
	        return this._fulfillmentHandler0;
	    }
	};

	function deferResolve(v) {this.promise._resolveCallback(v);}
	function deferReject(v) {this.promise._rejectCallback(v, false);}

	Promise.defer = Promise.pending = function() {
	    debug.deprecated("Promise.defer", "new Promise");
	    var promise = new Promise(INTERNAL);
	    return {
	        promise: promise,
	        resolve: deferResolve,
	        reject: deferReject
	    };
	};

	util.notEnumerableProp(Promise,
	                       "_makeSelfResolutionError",
	                       makeSelfResolutionError);

	_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
	    debug);
	_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
	_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
	_dereq_("./direct_resolve")(Promise);
	_dereq_("./synchronous_inspection")(Promise);
	_dereq_("./join")(
	    Promise, PromiseArray, tryConvertToPromise, INTERNAL, debug);
	Promise.Promise = Promise;
	_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
	_dereq_('./timers.js')(Promise, INTERNAL, debug);
	_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
	_dereq_('./nodeify.js')(Promise);
	_dereq_('./call_get.js')(Promise);
	_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	_dereq_('./settle.js')(Promise, PromiseArray, debug);
	_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
	_dereq_('./promisify.js')(Promise, INTERNAL);
	_dereq_('./any.js')(Promise);
	_dereq_('./each.js')(Promise, INTERNAL);
	_dereq_('./filter.js')(Promise, INTERNAL);
	                                                         
	    util.toFastProperties(Promise);                                          
	    util.toFastProperties(Promise.prototype);                                
	    function fillTypes(value) {                                              
	        var p = new Promise(INTERNAL);                                       
	        p._fulfillmentHandler0 = value;                                      
	        p._rejectionHandler0 = value;                                        
	        p._promise0 = value;                                                 
	        p._receiver0 = value;                                                
	    }                                                                        
	    // Complete slack tracking, opt out of field-type tracking and           
	    // stabilize map                                                         
	    fillTypes({a: 1});                                                       
	    fillTypes({b: 2});                                                       
	    fillTypes({c: 3});                                                       
	    fillTypes(1);                                                            
	    fillTypes(function(){});                                                 
	    fillTypes(undefined);                                                    
	    fillTypes(false);                                                        
	    fillTypes(new Promise(INTERNAL));                                        
	    debug.setBounds(Async.firstLineError, util.lastLineError);               
	    return Promise;                                                          

	};

	},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise,
	    apiRejection, Proxyable) {
	var util = _dereq_("./util");
	var isArray = util.isArray;

	function toResolutionValue(val) {
	    switch(val) {
	    case -2: return [];
	    case -3: return {};
	    }
	}

	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    if (values instanceof Promise) {
	        promise._propagateFrom(values, 3);
	    }
	    promise._setOnCancel(this);
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(undefined, -2);
	}
	util.inherits(PromiseArray, Proxyable);

	PromiseArray.prototype.length = function () {
	    return this._length;
	};

	PromiseArray.prototype.promise = function () {
	    return this._promise;
	};

	PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	    var values = tryConvertToPromise(this._values, this._promise);
	    if (values instanceof Promise) {
	        values = values._target();
	        var bitField = values._bitField;
	        ;
	        this._values = values;

	        if (((bitField & 50397184) === 0)) {
	            this._promise._setAsyncGuaranteed();
	            return values._then(
	                init,
	                this._reject,
	                undefined,
	                this,
	                resolveValueIfEmpty
	           );
	        } else if (((bitField & 33554432) !== 0)) {
	            values = values._value();
	        } else if (((bitField & 16777216) !== 0)) {
	            return this._reject(values._reason());
	        } else {
	            return this._cancel();
	        }
	    }
	    values = util.asArray(values);
	    if (values === null) {
	        var err = apiRejection(
	            "expecting an array or an iterable object but got " + util.classString(values)).reason();
	        this._promise._rejectCallback(err, false);
	        return;
	    }

	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    this._iterate(values);
	};

	PromiseArray.prototype._iterate = function(values) {
	    var len = this.getActualLength(values.length);
	    this._length = len;
	    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	    var result = this._promise;
	    var isResolved = false;
	    var bitField = null;
	    for (var i = 0; i < len; ++i) {
	        var maybePromise = tryConvertToPromise(values[i], result);

	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            bitField = maybePromise._bitField;
	        } else {
	            bitField = null;
	        }

	        if (isResolved) {
	            if (bitField !== null) {
	                maybePromise.suppressUnhandledRejections();
	            }
	        } else if (bitField !== null) {
	            if (((bitField & 50397184) === 0)) {
	                maybePromise._proxy(this, i);
	                this._values[i] = maybePromise;
	            } else if (((bitField & 33554432) !== 0)) {
	                isResolved = this._promiseFulfilled(maybePromise._value(), i);
	            } else if (((bitField & 16777216) !== 0)) {
	                isResolved = this._promiseRejected(maybePromise._reason(), i);
	            } else {
	                isResolved = this._promiseCancelled(i);
	            }
	        } else {
	            isResolved = this._promiseFulfilled(maybePromise, i);
	        }
	    }
	    if (!isResolved) result._setAsyncGuaranteed();
	};

	PromiseArray.prototype._isResolved = function () {
	    return this._values === null;
	};

	PromiseArray.prototype._resolve = function (value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};

	PromiseArray.prototype._cancel = function() {
	    if (this._isResolved() || !this._promise.isCancellable()) return;
	    this._values = null;
	    this._promise._cancel();
	};

	PromiseArray.prototype._reject = function (reason) {
	    this._values = null;
	    this._promise._rejectCallback(reason, false);
	};

	PromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};

	PromiseArray.prototype._promiseCancelled = function() {
	    this._cancel();
	    return true;
	};

	PromiseArray.prototype._promiseRejected = function (reason) {
	    this._totalResolved++;
	    this._reject(reason);
	    return true;
	};

	PromiseArray.prototype._resultCancelled = function() {
	    if (this._isResolved()) return;
	    var values = this._values;
	    this._cancel();
	    if (values instanceof Promise) {
	        values.cancel();
	    } else {
	        for (var i = 0; i < values.length; ++i) {
	            if (values[i] instanceof Promise) {
	                values[i].cancel();
	            }
	        }
	    }
	};

	PromiseArray.prototype.shouldCopyValues = function () {
	    return true;
	};

	PromiseArray.prototype.getActualLength = function (len) {
	    return len;
	};

	return PromiseArray;
	};

	},{"./util":36}],24:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = _dereq_("./util");
	var nodebackForPromise = _dereq_("./nodeback");
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = _dereq_("./errors").TypeError;
	var defaultSuffix = "Async";
	var defaultPromisified = {__isPromisified__: true};
	var noCopyProps = [
	    "arity",    "length",
	    "name",
	    "arguments",
	    "caller",
	    "callee",
	    "prototype",
	    "__isPromisified__"
	];
	var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

	var defaultFilter = function(name) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        name !== "constructor";
	};

	function propsFilter(key) {
	    return !noCopyPropsPattern.test(key);
	}

	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}

	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
	                        .replace("%s", suffix));
	                }
	            }
	        }
	    }
	}

	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        var passesDefaultFilter = filter === defaultFilter
	            ? true : defaultFilter(key, value, obj);
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj, passesDefaultFilter)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}

	var escapeIdentRegex = function(str) {
	    return str.replace(/([$])/, "\\$");
	};

	var makeNodePromisifiedEval;
	if (false) {
	var switchCaseArgumentOrder = function(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 3);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
	        ret.push(i);
	    }
	    return ret;
	};

	var argumentSequence = function(argumentCount) {
	    return util.filledRange(argumentCount, "_arg", "");
	};

	var parameterDeclaration = function(parameterCount) {
	    return util.filledRange(
	        Math.max(parameterCount, 3), "_arg", "");
	};

	var parameterCount = function(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	};

	makeNodePromisifiedEval =
	function(callback, receiver, originalName, fn, _, multiArgs) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (shouldProxyThis) {
	            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	        } else {
	            ret = receiver === undefined
	                ? "ret = callback({{args}}, nodeback); break;\n"
	                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }

	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for (var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }

	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", (shouldProxyThis
	                                ? "ret = callback.apply(this, args);\n"
	                                : "ret = callback.apply(receiver, args);\n"));
	        return ret;
	    }

	    var getFunctionCode = typeof callback === "string"
	                                ? ("this != null ? this['"+callback+"'] : fn")
	                                : "fn";
	    var body = "'use strict';                                                \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
	        .replace("[GetFunctionCode]", getFunctionCode);
	    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
	    return new Function("Promise",
	                        "fn",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "tryCatch",
	                        "errorObj",
	                        "notEnumerableProp",
	                        "INTERNAL",
	                        body)(
	                    Promise,
	                    fn,
	                    receiver,
	                    withAppended,
	                    maybeWrapAsError,
	                    nodebackForPromise,
	                    util.tryCatch,
	                    util.errorObj,
	                    util.notEnumerableProp,
	                    INTERNAL);
	};
	}

	function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
	    var defaultThis = (function() {return this;})();
	    var method = callback;
	    if (typeof method === "string") {
	        callback = fn;
	    }
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        var promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	        var cb = typeof method === "string" && this !== defaultThis
	            ? this[method] : callback;
	        var fn = nodebackForPromise(promise, multiArgs);
	        try {
	            cb.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            promise._rejectCallback(maybeWrapAsError(e), true, true);
	        }
	        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
	        return promise;
	    }
	    util.notEnumerableProp(promisified, "__isPromisified__", true);
	    return promisified;
	}

	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;

	function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);

	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        if (promisifier === makeNodePromisified) {
	            obj[promisifiedKey] =
	                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
	        } else {
	            var promisified = promisifier(fn, function() {
	                return makeNodePromisified(key, THIS, key,
	                                           fn, suffix, multiArgs);
	            });
	            util.notEnumerableProp(promisified, "__isPromisified__", true);
	            obj[promisifiedKey] = promisified;
	        }
	    }
	    util.toFastProperties(obj);
	    return obj;
	}

	function promisify(callback, receiver, multiArgs) {
	    return makeNodePromisified(callback, receiver, undefined,
	                                callback, null, multiArgs);
	}

	Promise.promisify = function (fn, options) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    options = Object(options);
	    var receiver = options.context === undefined ? THIS : options.context;
	    var multiArgs = !!options.multiArgs;
	    var ret = promisify(fn, receiver, multiArgs);
	    util.copyDescriptors(fn, ret, propsFilter);
	    return ret;
	};

	Promise.promisifyAll = function (target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    options = Object(options);
	    var multiArgs = !!options.multiArgs;
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }

	    var keys = util.inheritedDataKeys(target);
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier,
	                multiArgs);
	            promisifyAll(value, suffix, filter, promisifier, multiArgs);
	        }
	    }

	    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
	};
	};


	},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(
	    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	var util = _dereq_("./util");
	var isObject = util.isObject;
	var es5 = _dereq_("./es5");
	var Es6Map;
	if (typeof Map === "function") Es6Map = Map;

	var mapToEntries = (function() {
	    var index = 0;
	    var size = 0;

	    function extractEntry(value, key) {
	        this[index] = value;
	        this[index + size] = key;
	        index++;
	    }

	    return function mapToEntries(map) {
	        size = map.size;
	        index = 0;
	        var ret = new Array(map.size * 2);
	        map.forEach(extractEntry, ret);
	        return ret;
	    };
	})();

	var entriesToMap = function(entries) {
	    var ret = new Es6Map();
	    var length = entries.length / 2 | 0;
	    for (var i = 0; i < length; ++i) {
	        var key = entries[length + i];
	        var value = entries[i];
	        ret.set(key, value);
	    }
	    return ret;
	};

	function PropertiesPromiseArray(obj) {
	    var isMap = false;
	    var entries;
	    if (Es6Map !== undefined && obj instanceof Es6Map) {
	        entries = mapToEntries(obj);
	        isMap = true;
	    } else {
	        var keys = es5.keys(obj);
	        var len = keys.length;
	        entries = new Array(len * 2);
	        for (var i = 0; i < len; ++i) {
	            var key = keys[i];
	            entries[i] = obj[key];
	            entries[i + len] = key;
	        }
	    }
	    this.constructor$(entries);
	    this._isMap = isMap;
	    this._init$(undefined, -3);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);

	PropertiesPromiseArray.prototype._init = function () {};

	PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val;
	        if (this._isMap) {
	            val = entriesToMap(this._values);
	        } else {
	            val = {};
	            var keyOffset = this.length();
	            for (var i = 0, len = this.length(); i < len; ++i) {
	                val[this._values[i + keyOffset]] = this._values[i];
	            }
	        }
	        this._resolve(val);
	        return true;
	    }
	    return false;
	};

	PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};

	PropertiesPromiseArray.prototype.getActualLength = function (len) {
	    return len >> 1;
	};

	function props(promises) {
	    var ret;
	    var castValue = tryConvertToPromise(promises);

	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(
	            Promise.props, undefined, undefined, undefined, undefined);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }

	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 2);
	    }
	    return ret;
	}

	Promise.prototype.props = function () {
	    return props(this);
	};

	Promise.props = function (promises) {
	    return props(promises);
	};
	};

	},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
	"use strict";
	function arrayMove(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	        src[j + srcIndex] = void 0;
	    }
	}

	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	}

	Queue.prototype._willBeOverCapacity = function (size) {
	    return this._capacity < size;
	};

	Queue.prototype._pushOne = function (arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};

	Queue.prototype._unshiftOne = function(value) {
	    var capacity = this._capacity;
	    this._checkCapacity(this.length() + 1);
	    var front = this._front;
	    var i = (((( front - 1 ) &
	                    ( capacity - 1) ) ^ capacity ) - capacity );
	    this[i] = value;
	    this._front = i;
	    this._length = this.length() + 1;
	};

	Queue.prototype.unshift = function(fn, receiver, arg) {
	    this._unshiftOne(arg);
	    this._unshiftOne(receiver);
	    this._unshiftOne(fn);
	};

	Queue.prototype.push = function (fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};

	Queue.prototype.shift = function () {
	    var front = this._front,
	        ret = this[front];

	    this[front] = undefined;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};

	Queue.prototype.length = function () {
	    return this._length;
	};

	Queue.prototype._checkCapacity = function (size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 1);
	    }
	};

	Queue.prototype._resizeTo = function (capacity) {
	    var oldCapacity = this._capacity;
	    this._capacity = capacity;
	    var front = this._front;
	    var length = this._length;
	    var moveItemsCount = (front + length) & (oldCapacity - 1);
	    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	};

	module.exports = Queue;

	},{}],27:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(
	    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var util = _dereq_("./util");

	var raceLater = function (promise) {
	    return promise.then(function(array) {
	        return race(array, promise);
	    });
	};

	function race(promises, parent) {
	    var maybePromise = tryConvertToPromise(promises);

	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else {
	        promises = util.asArray(promises);
	        if (promises === null)
	            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
	    }

	    var ret = new Promise(INTERNAL);
	    if (parent !== undefined) {
	        ret._propagateFrom(parent, 3);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];

	        if (val === undefined && !(i in promises)) {
	            continue;
	        }

	        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	    }
	    return ret;
	}

	Promise.race = function (promises) {
	    return race(promises, undefined);
	};

	Promise.prototype.race = function () {
	    return race(this, undefined);
	};

	};

	},{"./util":36}],28:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;

	function ReductionPromiseArray(promises, fn, initialValue, _each) {
	    this.constructor$(promises);
	    var domain = getDomain();
	    this._fn = domain === null ? fn : domain.bind(fn);
	    if (initialValue !== undefined) {
	        initialValue = Promise.resolve(initialValue);
	        initialValue._attachCancellationCallback(this);
	    }
	    this._initialValue = initialValue;
	    this._currentCancellable = null;
	    this._eachValues = _each === INTERNAL ? [] : undefined;
	    this._promise._captureStackTrace();
	    this._init$(undefined, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);

	ReductionPromiseArray.prototype._gotAccum = function(accum) {
	    if (this._eachValues !== undefined && accum !== INTERNAL) {
	        this._eachValues.push(accum);
	    }
	};

	ReductionPromiseArray.prototype._eachComplete = function(value) {
	    this._eachValues.push(value);
	    return this._eachValues;
	};

	ReductionPromiseArray.prototype._init = function() {};

	ReductionPromiseArray.prototype._resolveEmptyArray = function() {
	    this._resolve(this._eachValues !== undefined ? this._eachValues
	                                                 : this._initialValue);
	};

	ReductionPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};

	ReductionPromiseArray.prototype._resolve = function(value) {
	    this._promise._resolveCallback(value);
	    this._values = null;
	};

	ReductionPromiseArray.prototype._resultCancelled = function(sender) {
	    if (sender === this._initialValue) return this._cancel();
	    if (this._isResolved()) return;
	    this._resultCancelled$();
	    if (this._currentCancellable instanceof Promise) {
	        this._currentCancellable.cancel();
	    }
	    if (this._initialValue instanceof Promise) {
	        this._initialValue.cancel();
	    }
	};

	ReductionPromiseArray.prototype._iterate = function (values) {
	    this._values = values;
	    var value;
	    var i;
	    var length = values.length;
	    if (this._initialValue !== undefined) {
	        value = this._initialValue;
	        i = 0;
	    } else {
	        value = Promise.resolve(values[0]);
	        i = 1;
	    }

	    this._currentCancellable = value;

	    if (!value.isRejected()) {
	        for (; i < length; ++i) {
	            var ctx = {
	                accum: null,
	                value: values[i],
	                index: i,
	                length: length,
	                array: this
	            };
	            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
	        }
	    }

	    if (this._eachValues !== undefined) {
	        value = value
	            ._then(this._eachComplete, undefined, undefined, this, undefined);
	    }
	    value._then(completed, completed, undefined, value, this);
	};

	Promise.prototype.reduce = function (fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};

	Promise.reduce = function (promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};

	function completed(valueOrReason, array) {
	    if (this.isFulfilled()) {
	        array._resolve(valueOrReason);
	    } else {
	        array._reject(valueOrReason);
	    }
	}

	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}

	function gotAccum(accum) {
	    this.accum = accum;
	    this.array._gotAccum(accum);
	    var value = tryConvertToPromise(this.value, this.array._promise);
	    if (value instanceof Promise) {
	        this.array._currentCancellable = value;
	        return value._then(gotValue, undefined, undefined, this, undefined);
	    } else {
	        return gotValue.call(this, value);
	    }
	}

	function gotValue(value) {
	    var array = this.array;
	    var promise = array._promise;
	    var fn = tryCatch(array._fn);
	    promise._pushContext();
	    var ret;
	    if (array._eachValues !== undefined) {
	        ret = fn.call(promise._boundValue(), value, this.index, this.length);
	    } else {
	        ret = fn.call(promise._boundValue(),
	                              this.accum, value, this.index, this.length);
	    }
	    if (ret instanceof Promise) {
	        array._currentCancellable = ret;
	    }
	    var promiseCreated = promise._popContext();
	    debug.checkForgottenReturns(
	        ret,
	        promiseCreated,
	        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
	        promise
	    );
	    return ret;
	}
	};

	},{"./util":36}],29:[function(_dereq_,module,exports){
	"use strict";
	var util = _dereq_("./util");
	var schedule;
	var noAsyncScheduler = function() {
	    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	if (util.isNode && typeof MutationObserver === "undefined") {
	    var GlobalSetImmediate = global.setImmediate;
	    var ProcessNextTick = process.nextTick;
	    schedule = util.isRecentNode
	                ? function(fn) { GlobalSetImmediate.call(global, fn); }
	                : function(fn) { ProcessNextTick.call(process, fn); };
	} else if ((typeof MutationObserver !== "undefined") &&
	          !(typeof window !== "undefined" &&
	            window.navigator &&
	            window.navigator.standalone)) {
	    schedule = (function() {
	        var div = document.createElement("div");
	        var opts = {attributes: true};
	        var toggleScheduled = false;
	        var div2 = document.createElement("div");
	        var o2 = new MutationObserver(function() {
	            div.classList.toggle("foo");
	          toggleScheduled = false;
	        });
	        o2.observe(div2, opts);

	        var scheduleToggle = function() {
	            if (toggleScheduled) return;
	          toggleScheduled = true;
	          div2.classList.toggle("foo");
	        };

	        return function schedule(fn) {
	          var o = new MutationObserver(function() {
	            o.disconnect();
	            fn();
	          });
	          o.observe(div, opts);
	          scheduleToggle();
	        };
	    })();
	} else if (typeof setImmediate !== "undefined") {
	    schedule = function (fn) {
	        setImmediate(fn);
	    };
	} else if (typeof setTimeout !== "undefined") {
	    schedule = function (fn) {
	        setTimeout(fn, 0);
	    };
	} else {
	    schedule = noAsyncScheduler;
	}
	module.exports = schedule;

	},{"./util":36}],30:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	    function(Promise, PromiseArray, debug) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = _dereq_("./util");

	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);

	SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};

	SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 33554432;
	    ret._settledValueField = value;
	    return this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 16777216;
	    ret._settledValueField = reason;
	    return this._promiseResolved(index, ret);
	};

	Promise.settle = function (promises) {
	    debug.deprecated(".settle()", ".reflect()");
	    return new SettledPromiseArray(promises).promise();
	};

	Promise.prototype.settle = function () {
	    return Promise.settle(this);
	};
	};

	},{"./util":36}],31:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = _dereq_("./util");
	var RangeError = _dereq_("./errors").RangeError;
	var AggregateError = _dereq_("./errors").AggregateError;
	var isArray = util.isArray;
	var CANCELLATION = {};


	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);

	SomePromiseArray.prototype._init = function () {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(undefined, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};

	SomePromiseArray.prototype.init = function () {
	    this._initialized = true;
	    this._init();
	};

	SomePromiseArray.prototype.setUnwrap = function () {
	    this._unwrap = true;
	};

	SomePromiseArray.prototype.howMany = function () {
	    return this._howMany;
	};

	SomePromiseArray.prototype.setHowMany = function (count) {
	    this._howMany = count;
	};

	SomePromiseArray.prototype._promiseFulfilled = function (value) {
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	        return true;
	    }
	    return false;

	};
	SomePromiseArray.prototype._promiseRejected = function (reason) {
	    this._addRejected(reason);
	    return this._checkOutcome();
	};

	SomePromiseArray.prototype._promiseCancelled = function () {
	    if (this._values instanceof Promise || this._values == null) {
	        return this._cancel();
	    }
	    this._addRejected(CANCELLATION);
	    return this._checkOutcome();
	};

	SomePromiseArray.prototype._checkOutcome = function() {
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            if (this._values[i] !== CANCELLATION) {
	                e.push(this._values[i]);
	            }
	        }
	        if (e.length > 0) {
	            this._reject(e);
	        } else {
	            this._cancel();
	        }
	        return true;
	    }
	    return false;
	};

	SomePromiseArray.prototype._fulfilled = function () {
	    return this._totalResolved;
	};

	SomePromiseArray.prototype._rejected = function () {
	    return this._values.length - this.length();
	};

	SomePromiseArray.prototype._addRejected = function (reason) {
	    this._values.push(reason);
	};

	SomePromiseArray.prototype._addFulfilled = function (value) {
	    this._values[this._totalResolved++] = value;
	};

	SomePromiseArray.prototype._canPossiblyFulfill = function () {
	    return this.length() - this._rejected();
	};

	SomePromiseArray.prototype._getRangeError = function (count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};

	SomePromiseArray.prototype._resolveEmptyArray = function () {
	    this._reject(this._getRangeError(0));
	};

	function some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}

	Promise.some = function (promises, howMany) {
	    return some(promises, howMany);
	};

	Promise.prototype.some = function (howMany) {
	    return some(this, howMany);
	};

	Promise._SomePromiseArray = SomePromiseArray;
	};

	},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== undefined) {
	        promise = promise._target();
	        this._bitField = promise._bitField;
	        this._settledValueField = promise._isFateSealed()
	            ? promise._settledValue() : undefined;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValueField = undefined;
	    }
	}

	PromiseInspection.prototype._settledValue = function() {
	    return this._settledValueField;
	};

	var value = PromiseInspection.prototype.value = function () {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};

	var reason = PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason = function () {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};

	var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
	    return (this._bitField & 33554432) !== 0;
	};

	var isRejected = PromiseInspection.prototype.isRejected = function () {
	    return (this._bitField & 16777216) !== 0;
	};

	var isPending = PromiseInspection.prototype.isPending = function () {
	    return (this._bitField & 50397184) === 0;
	};

	var isResolved = PromiseInspection.prototype.isResolved = function () {
	    return (this._bitField & 50331648) !== 0;
	};

	PromiseInspection.prototype.isCancelled =
	Promise.prototype._isCancelled = function() {
	    return (this._bitField & 65536) === 65536;
	};

	Promise.prototype.isCancelled = function() {
	    return this._target()._isCancelled();
	};

	Promise.prototype.isPending = function() {
	    return isPending.call(this._target());
	};

	Promise.prototype.isRejected = function() {
	    return isRejected.call(this._target());
	};

	Promise.prototype.isFulfilled = function() {
	    return isFulfilled.call(this._target());
	};

	Promise.prototype.isResolved = function() {
	    return isResolved.call(this._target());
	};

	Promise.prototype.value = function() {
	    return value.call(this._target());
	};

	Promise.prototype.reason = function() {
	    var target = this._target();
	    target._unsetRejectionIsUnhandled();
	    return reason.call(target);
	};

	Promise.prototype._value = function() {
	    return this._settledValue();
	};

	Promise.prototype._reason = function() {
	    this._unsetRejectionIsUnhandled();
	    return this._settledValue();
	};

	Promise.PromiseInspection = PromiseInspection;
	};

	},{}],33:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = _dereq_("./util");
	var errorObj = util.errorObj;
	var isObject = util.isObject;

	function tryConvertToPromise(obj, context) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) return obj;
	        var then = getThen(obj);
	        if (then === errorObj) {
	            if (context) context._pushContext();
	            var ret = Promise.reject(then.e);
	            if (context) context._popContext();
	            return ret;
	        } else if (typeof then === "function") {
	            if (isAnyBluebirdPromise(obj)) {
	                var ret = new Promise(INTERNAL);
	                obj._then(
	                    ret._fulfill,
	                    ret._reject,
	                    undefined,
	                    ret,
	                    null
	                );
	                return ret;
	            }
	            return doThenable(obj, then, context);
	        }
	    }
	    return obj;
	}

	function doGetThen(obj) {
	    return obj.then;
	}

	function getThen(obj) {
	    try {
	        return doGetThen(obj);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}

	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    return hasProp.call(obj, "_promise0");
	}

	function doThenable(x, then, context) {
	    var promise = new Promise(INTERNAL);
	    var ret = promise;
	    if (context) context._pushContext();
	    promise._captureStackTrace();
	    if (context) context._popContext();
	    var synchronous = true;
	    var result = util.tryCatch(then).call(x, resolve, reject);
	    synchronous = false;

	    if (promise && result === errorObj) {
	        promise._rejectCallback(result.e, true, true);
	        promise = null;
	    }

	    function resolve(value) {
	        if (!promise) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }

	    function reject(reason) {
	        if (!promise) return;
	        promise._rejectCallback(reason, synchronous, true);
	        promise = null;
	    }
	    return ret;
	}

	return tryConvertToPromise;
	};

	},{"./util":36}],34:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, debug) {
	var util = _dereq_("./util");
	var TimeoutError = Promise.TimeoutError;

	function HandleWrapper(handle)  {
	    this.handle = handle;
	}

	HandleWrapper.prototype._resultCancelled = function() {
	    clearTimeout(this.handle);
	};

	var afterValue = function(value) { return delay(+this).thenReturn(value); };
	var delay = Promise.delay = function (ms, value) {
	    var ret;
	    var handle;
	    if (value !== undefined) {
	        ret = Promise.resolve(value)
	                ._then(afterValue, null, null, ms, undefined);
	        if (debug.cancellation() && value instanceof Promise) {
	            ret._setOnCancel(value);
	        }
	    } else {
	        ret = new Promise(INTERNAL);
	        handle = setTimeout(function() { ret._fulfill(); }, +ms);
	        if (debug.cancellation()) {
	            ret._setOnCancel(new HandleWrapper(handle));
	        }
	    }
	    ret._setAsyncGuaranteed();
	    return ret;
	};

	Promise.prototype.delay = function (ms) {
	    return delay(ms, this);
	};

	var afterTimeout = function (promise, message, parent) {
	    var err;
	    if (typeof message !== "string") {
	        if (message instanceof Error) {
	            err = message;
	        } else {
	            err = new TimeoutError("operation timed out");
	        }
	    } else {
	        err = new TimeoutError(message);
	    }
	    util.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._reject(err);

	    if (parent != null) {
	        parent.cancel();
	    }
	};

	function successClear(value) {
	    clearTimeout(this.handle);
	    return value;
	}

	function failureClear(reason) {
	    clearTimeout(this.handle);
	    throw reason;
	}

	Promise.prototype.timeout = function (ms, message) {
	    ms = +ms;
	    var ret, parent;

	    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
	        if (ret.isPending()) {
	            afterTimeout(ret, message, parent);
	        }
	    }, ms));

	    if (debug.cancellation()) {
	        parent = this.then();
	        ret = parent._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	        ret._setOnCancel(handleWrapper);
	    } else {
	        ret = this._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	    }

	    return ret;
	};

	};

	},{"./util":36}],35:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function (Promise, apiRejection, tryConvertToPromise,
	    createContext, INTERNAL, debug) {
	    var util = _dereq_("./util");
	    var TypeError = _dereq_("./errors").TypeError;
	    var inherits = _dereq_("./util").inherits;
	    var errorObj = util.errorObj;
	    var tryCatch = util.tryCatch;

	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }

	    function castPreservingDisposable(thenable) {
	        var maybePromise = tryConvertToPromise(thenable);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = new Promise(INTERNAL);
	        function iterator() {
	            if (i >= len) return ret._fulfill();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = tryConvertToPromise(
	                        maybePromise._getDisposer().tryDispose(inspection),
	                        resources.promise);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret;
	    }

	    function Disposer(data, promise, context) {
	        this._data = data;
	        this._promise = promise;
	        this._context = context;
	    }

	    Disposer.prototype.data = function () {
	        return this._data;
	    };

	    Disposer.prototype.promise = function () {
	        return this._promise;
	    };

	    Disposer.prototype.resource = function () {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return null;
	    };

	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var context = this._context;
	        if (context !== undefined) context._pushContext();
	        var ret = resource !== null
	            ? this.doDispose(resource, inspection) : null;
	        if (context !== undefined) context._popContext();
	        this._promise._unsetDisposable();
	        this._data = null;
	        return ret;
	    };

	    Disposer.isDisposer = function (d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };

	    function FunctionDisposer(fn, promise, context) {
	        this.constructor$(fn, promise, context);
	    }
	    inherits(FunctionDisposer, Disposer);

	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };

	    function maybeUnwrapDisposer(value) {
	        if (Disposer.isDisposer(value)) {
	            this.resources[this.index]._setDisposable(value);
	            return value.promise();
	        }
	        return value;
	    }

	    function ResourceList(length) {
	        this.length = length;
	        this.promise = null;
	        this[length-1] = null;
	    }

	    ResourceList.prototype._resultCancelled = function() {
	        var len = this.length;
	        for (var i = 0; i < len; ++i) {
	            var item = this[i];
	            if (item instanceof Promise) {
	                item.cancel();
	            }
	        }
	    };

	    Promise.using = function () {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") {
	            return apiRejection("expecting a function but got " + util.classString(fn));
	        }
	        var input;
	        var spreadArgs = true;
	        if (len === 2 && Array.isArray(arguments[0])) {
	            input = arguments[0];
	            len = input.length;
	            spreadArgs = false;
	        } else {
	            input = arguments;
	            len--;
	        }
	        var resources = new ResourceList(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = input[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            } else {
	                var maybePromise = tryConvertToPromise(resource);
	                if (maybePromise instanceof Promise) {
	                    resource =
	                        maybePromise._then(maybeUnwrapDisposer, null, null, {
	                            resources: resources,
	                            index: i
	                    }, undefined);
	                }
	            }
	            resources[i] = resource;
	        }

	        var reflectedResources = new Array(resources.length);
	        for (var i = 0; i < reflectedResources.length; ++i) {
	            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
	        }

	        var resultPromise = Promise.all(reflectedResources)
	            .then(function(inspections) {
	                for (var i = 0; i < inspections.length; ++i) {
	                    var inspection = inspections[i];
	                    if (inspection.isRejected()) {
	                        errorObj.e = inspection.error();
	                        return errorObj;
	                    } else if (!inspection.isFulfilled()) {
	                        resultPromise.cancel();
	                        return;
	                    }
	                    inspections[i] = inspection.value();
	                }
	                promise._pushContext();

	                fn = tryCatch(fn);
	                var ret = spreadArgs
	                    ? fn.apply(undefined, inspections) : fn(inspections);
	                var promiseCreated = promise._popContext();
	                debug.checkForgottenReturns(
	                    ret, promiseCreated, "Promise.using", promise);
	                return ret;
	            });

	        var promise = resultPromise.lastly(function() {
	            var inspection = new Promise.PromiseInspection(resultPromise);
	            return dispose(resources, inspection);
	        });
	        resources.promise = promise;
	        promise._setOnCancel(resources);
	        return promise;
	    };

	    Promise.prototype._setDisposable = function (disposer) {
	        this._bitField = this._bitField | 131072;
	        this._disposer = disposer;
	    };

	    Promise.prototype._isDisposable = function () {
	        return (this._bitField & 131072) > 0;
	    };

	    Promise.prototype._getDisposer = function () {
	        return this._disposer;
	    };

	    Promise.prototype._unsetDisposable = function () {
	        this._bitField = this._bitField & (~131072);
	        this._disposer = undefined;
	    };

	    Promise.prototype.disposer = function (fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this, createContext());
	        }
	        throw new TypeError();
	    };

	};

	},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
	"use strict";
	var es5 = _dereq_("./es5");
	var canEvaluate = typeof navigator == "undefined";

	var errorObj = {e: {}};
	var tryCatchTarget;
	var globalObject = typeof self !== "undefined" ? self :
	    typeof window !== "undefined" ? window :
	    typeof global !== "undefined" ? global :
	    this !== undefined ? this : null;

	function tryCatcher() {
	    try {
	        var target = tryCatchTarget;
	        tryCatchTarget = null;
	        return target.apply(this, arguments);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}

	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;

	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};


	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";

	}

	function isObject(value) {
	    return typeof value === "function" ||
	           typeof value === "object" && value !== null;
	}

	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;

	    return new Error(safeToString(maybeError));
	}

	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}

	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);

	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	    }
	}

	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}

	function thrower(r) {
	    throw r;
	}

	var inheritedDataKeys = (function() {
	    var excludedPrototypes = [
	        Array.prototype,
	        Object.prototype,
	        Function.prototype
	    ];

	    var isExcludedProto = function(val) {
	        for (var i = 0; i < excludedPrototypes.length; ++i) {
	            if (excludedPrototypes[i] === val) {
	                return true;
	            }
	        }
	        return false;
	    };

	    if (es5.isES5) {
	        var getKeys = Object.getOwnPropertyNames;
	        return function(obj) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            while (obj != null && !isExcludedProto(obj)) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        var hasProp = {}.hasOwnProperty;
	        return function(obj) {
	            if (isExcludedProto(obj)) return [];
	            var ret = [];

	            /*jshint forin:false */
	            enumeration: for (var key in obj) {
	                if (hasProp.call(obj, key)) {
	                    ret.push(key);
	                } else {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (hasProp.call(excludedPrototypes[i], key)) {
	                            continue enumeration;
	                        }
	                    }
	                    ret.push(key);
	                }
	            }
	            return ret;
	        };
	    }

	})();

	var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.names(fn.prototype);

	            var hasMethods = es5.isES5 && keys.length > 1;
	            var hasMethodsOtherThanConstructor = keys.length > 0 &&
	                !(keys.length === 1 && keys[0] === "constructor");
	            var hasThisAssignmentAndStaticMethods =
	                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

	            if (hasMethods || hasMethodsOtherThanConstructor ||
	                hasThisAssignmentAndStaticMethods) {
	                return true;
	            }
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}

	function toFastProperties(obj) {
	    /*jshint -W027,-W055,-W031*/
	    function FakeConstructor() {}
	    FakeConstructor.prototype = obj;
	    var l = 8;
	    while (l--) new FakeConstructor();
	    return obj;
	    eval(obj);
	}

	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}

	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}

	function safeToString(obj) {
	    try {
	        return obj + "";
	    } catch (e) {
	        return "[no string representation]";
	    }
	}

	function isError(obj) {
	    return obj !== null &&
	           typeof obj === "object" &&
	           typeof obj.message === "string" &&
	           typeof obj.name === "string";
	}

	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}

	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
	        e["isOperational"] === true);
	}

	function canAttachTrace(obj) {
	    return isError(obj) && es5.propertyIsWritable(obj, "stack");
	}

	var ensureErrorObject = (function() {
	    if (!("stack" in new Error())) {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            try {throw new Error(safeToString(value));}
	            catch(err) {return err;}
	        };
	    } else {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            return new Error(safeToString(value));
	        };
	    }
	})();

	function classString(obj) {
	    return {}.toString.call(obj);
	}

	function copyDescriptors(from, to, filter) {
	    var keys = es5.names(from);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        if (filter(key)) {
	            try {
	                es5.defineProperty(to, key, es5.getDescriptor(from, key));
	            } catch (ignore) {}
	        }
	    }
	}

	var asArray = function(v) {
	    if (es5.isArray(v)) {
	        return v;
	    }
	    return null;
	};

	if (typeof Symbol !== "undefined" && Symbol.iterator) {
	    var ArrayFrom = typeof Array.from === "function" ? function(v) {
	        return Array.from(v);
	    } : function(v) {
	        var ret = [];
	        var it = v[Symbol.iterator]();
	        var itResult;
	        while (!((itResult = it.next()).done)) {
	            ret.push(itResult.value);
	        }
	        return ret;
	    };

	    asArray = function(v) {
	        if (es5.isArray(v)) {
	            return v;
	        } else if (v != null && typeof v[Symbol.iterator] === "function") {
	            return ArrayFrom(v);
	        }
	        return null;
	    };
	}

	var isNode = typeof process !== "undefined" &&
	        classString(process).toLowerCase() === "[object process]";

	function env(key, def) {
	    return isNode ? process.env[key] : def;
	}

	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    asArray: asArray,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    isError: isError,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch: tryCatch,
	    inherits: inherits,
	    withAppended: withAppended,
	    maybeWrapAsError: maybeWrapAsError,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange,
	    toString: safeToString,
	    canAttachTrace: canAttachTrace,
	    ensureErrorObject: ensureErrorObject,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    classString: classString,
	    copyDescriptors: copyDescriptors,
	    hasDevTools: typeof chrome !== "undefined" && chrome &&
	                 typeof chrome.loadTimes === "function",
	    isNode: isNode,
	    env: env,
	    global: globalObject
	};
	ret.isRecentNode = ret.isNode && (function() {
	    var version = process.versions.node.split(".").map(Number);
	    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
	})();

	if (ret.isNode) ret.toFastProperties(process);

	try {throw new Error(); } catch (e) {ret.lastLineError = e;}
	module.exports = ret;

	},{"./es5":13}]},{},[4])(4)
	});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2), (function() { return this; }()), __webpack_require__(4).setImmediate))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate, __webpack_require__(4).clearImmediate))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = exports.InvocationHandler = exports._emptyParameters = exports.SingletonRegistration = exports.TransientRegistration = exports.FactoryInvoker = exports.Factory = exports.StrategyResolver = exports.Parent = exports.Optional = exports.All = exports.Lazy = exports.resolver = undefined;

	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6, _classInvokers;

	exports.invoker = invoker;
	exports.factory = factory;
	exports.registration = registration;
	exports.transient = transient;
	exports.singleton = singleton;
	exports.autoinject = autoinject;
	exports.inject = inject;

	var _aureliaMetadata = __webpack_require__(6);

	var _aureliaPal = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var resolver = exports.resolver = _aureliaMetadata.protocol.create('aurelia:resolver', function (target) {
	  if (!(typeof target.get === 'function')) {
	    return 'Resolvers must implement: get(container: Container, key: any): any';
	  }

	  return true;
	});

	var Lazy = exports.Lazy = (_dec = resolver(), _dec(_class = function () {
	  function Lazy(key) {
	    _classCallCheck(this, Lazy);

	    this._key = key;
	  }

	  Lazy.prototype.get = function get(container) {
	    var _this = this;

	    return function () {
	      return container.get(_this._key);
	    };
	  };

	  Lazy.of = function of(key) {
	    return new Lazy(key);
	  };

	  return Lazy;
	}()) || _class);
	var All = exports.All = (_dec2 = resolver(), _dec2(_class2 = function () {
	  function All(key) {
	    _classCallCheck(this, All);

	    this._key = key;
	  }

	  All.prototype.get = function get(container) {
	    return container.getAll(this._key);
	  };

	  All.of = function of(key) {
	    return new All(key);
	  };

	  return All;
	}()) || _class2);
	var Optional = exports.Optional = (_dec3 = resolver(), _dec3(_class3 = function () {
	  function Optional(key) {
	    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    _classCallCheck(this, Optional);

	    this._key = key;
	    this._checkParent = checkParent;
	  }

	  Optional.prototype.get = function get(container) {
	    if (container.hasResolver(this._key, this._checkParent)) {
	      return container.get(this._key);
	    }

	    return null;
	  };

	  Optional.of = function of(key) {
	    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    return new Optional(key, checkParent);
	  };

	  return Optional;
	}()) || _class3);
	var Parent = exports.Parent = (_dec4 = resolver(), _dec4(_class4 = function () {
	  function Parent(key) {
	    _classCallCheck(this, Parent);

	    this._key = key;
	  }

	  Parent.prototype.get = function get(container) {
	    return container.parent ? container.parent.get(this._key) : null;
	  };

	  Parent.of = function of(key) {
	    return new Parent(key);
	  };

	  return Parent;
	}()) || _class4);
	var StrategyResolver = exports.StrategyResolver = (_dec5 = resolver(), _dec5(_class5 = function () {
	  function StrategyResolver(strategy, state) {
	    _classCallCheck(this, StrategyResolver);

	    this.strategy = strategy;
	    this.state = state;
	  }

	  StrategyResolver.prototype.get = function get(container, key) {
	    switch (this.strategy) {
	      case 0:
	        return this.state;
	      case 1:
	        var singleton = container.invoke(this.state);
	        this.state = singleton;
	        this.strategy = 0;
	        return singleton;
	      case 2:
	        return container.invoke(this.state);
	      case 3:
	        return this.state(container, key, this);
	      case 4:
	        return this.state[0].get(container, key);
	      case 5:
	        return container.get(this.state);
	      default:
	        throw new Error('Invalid strategy: ' + this.strategy);
	    }
	  };

	  return StrategyResolver;
	}()) || _class5);
	var Factory = exports.Factory = (_dec6 = resolver(), _dec6(_class6 = function () {
	  function Factory(key) {
	    _classCallCheck(this, Factory);

	    this._key = key;
	  }

	  Factory.prototype.get = function get(container) {
	    var _this2 = this;

	    return function () {
	      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	        rest[_key] = arguments[_key];
	      }

	      return container.invoke(_this2._key, rest);
	    };
	  };

	  Factory.of = function of(key) {
	    return new Factory(key);
	  };

	  return Factory;
	}()) || _class6);
	function invoker(value) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, value, target);
	  };
	}

	function factory(potentialTarget) {
	  var deco = function deco(target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, FactoryInvoker.instance, target);
	  };

	  return potentialTarget ? deco(potentialTarget) : deco;
	}

	var FactoryInvoker = exports.FactoryInvoker = function () {
	  function FactoryInvoker() {
	    _classCallCheck(this, FactoryInvoker);
	  }

	  FactoryInvoker.prototype.invoke = function invoke(container, fn, dependencies) {
	    var i = dependencies.length;
	    var args = new Array(i);

	    while (i--) {
	      args[i] = container.get(dependencies[i]);
	    }

	    return fn.apply(undefined, args);
	  };

	  FactoryInvoker.prototype.invokeWithDynamicDependencies = function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
	    var i = staticDependencies.length;
	    var args = new Array(i);

	    while (i--) {
	      args[i] = container.get(staticDependencies[i]);
	    }

	    if (dynamicDependencies !== undefined) {
	      args = args.concat(dynamicDependencies);
	    }

	    return fn.apply(undefined, args);
	  };

	  return FactoryInvoker;
	}();

	FactoryInvoker.instance = new FactoryInvoker();

	function registration(value) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.registration, value, target);
	  };
	}

	function transient(key) {
	  return registration(new TransientRegistration(key));
	}

	function singleton(keyOrRegisterInChild) {
	  var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
	}

	var TransientRegistration = exports.TransientRegistration = function () {
	  function TransientRegistration(key) {
	    _classCallCheck(this, TransientRegistration);

	    this._key = key;
	  }

	  TransientRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
	    var resolver = new StrategyResolver(2, fn);
	    container.registerResolver(this._key || key, resolver);
	    return resolver;
	  };

	  return TransientRegistration;
	}();

	var SingletonRegistration = exports.SingletonRegistration = function () {
	  function SingletonRegistration(keyOrRegisterInChild) {
	    var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    _classCallCheck(this, SingletonRegistration);

	    if (typeof keyOrRegisterInChild === 'boolean') {
	      this._registerInChild = keyOrRegisterInChild;
	    } else {
	      this._key = keyOrRegisterInChild;
	      this._registerInChild = registerInChild;
	    }
	  }

	  SingletonRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
	    var resolver = new StrategyResolver(1, fn);

	    if (this._registerInChild) {
	      container.registerResolver(this._key || key, resolver);
	    } else {
	      container.root.registerResolver(this._key || key, resolver);
	    }

	    return resolver;
	  };

	  return SingletonRegistration;
	}();

	var badKeyError = 'key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?';
	var _emptyParameters = exports._emptyParameters = Object.freeze([]);

	_aureliaMetadata.metadata.registration = 'aurelia:registration';
	_aureliaMetadata.metadata.invoker = 'aurelia:invoker';

	var resolverDecorates = resolver.decorates;

	var InvocationHandler = exports.InvocationHandler = function () {
	  function InvocationHandler(fn, invoker, dependencies) {
	    _classCallCheck(this, InvocationHandler);

	    this.fn = fn;
	    this.invoker = invoker;
	    this.dependencies = dependencies;
	  }

	  InvocationHandler.prototype.invoke = function invoke(container, dynamicDependencies) {
	    return dynamicDependencies !== undefined ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies) : this.invoker.invoke(container, this.fn, this.dependencies);
	  };

	  return InvocationHandler;
	}();

	function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
	  var i = staticDependencies.length;
	  var args = new Array(i);

	  while (i--) {
	    args[i] = container.get(staticDependencies[i]);
	  }

	  if (dynamicDependencies !== undefined) {
	    args = args.concat(dynamicDependencies);
	  }

	  return Reflect.construct(fn, args);
	}

	var classInvokers = (_classInvokers = {}, _classInvokers[0] = {
	  invoke: function invoke(container, Type) {
	    return new Type();
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[1] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[2] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[3] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[4] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[5] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers.fallback = {
	  invoke: invokeWithDynamicDependencies,
	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers);

	function getDependencies(f) {
	  if (!f.hasOwnProperty('inject')) {
	    return [];
	  }

	  if (typeof f.inject === 'function') {
	    return f.inject();
	  }

	  return f.inject;
	}

	var Container = exports.Container = function () {
	  function Container(configuration) {
	    _classCallCheck(this, Container);

	    if (configuration === undefined) {
	      configuration = {};
	    }

	    this._configuration = configuration;
	    this._onHandlerCreated = configuration.onHandlerCreated;
	    this._handlers = configuration.handlers || (configuration.handlers = new Map());
	    this._resolvers = new Map();
	    this.root = this;
	    this.parent = null;
	  }

	  Container.prototype.makeGlobal = function makeGlobal() {
	    Container.instance = this;
	    return this;
	  };

	  Container.prototype.setHandlerCreatedCallback = function setHandlerCreatedCallback(onHandlerCreated) {
	    this._onHandlerCreated = onHandlerCreated;
	    this._configuration.onHandlerCreated = onHandlerCreated;
	  };

	  Container.prototype.registerInstance = function registerInstance(key, instance) {
	    this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
	  };

	  Container.prototype.registerSingleton = function registerSingleton(key, fn) {
	    this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
	  };

	  Container.prototype.registerTransient = function registerTransient(key, fn) {
	    this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
	  };

	  Container.prototype.registerHandler = function registerHandler(key, handler) {
	    this.registerResolver(key, new StrategyResolver(3, handler));
	  };

	  Container.prototype.registerAlias = function registerAlias(originalKey, aliasKey) {
	    this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
	  };

	  Container.prototype.registerResolver = function registerResolver(key, resolver) {
	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    var allResolvers = this._resolvers;
	    var result = allResolvers.get(key);

	    if (result === undefined) {
	      allResolvers.set(key, resolver);
	    } else if (result.strategy === 4) {
	      result.state.push(resolver);
	    } else {
	      allResolvers.set(key, new StrategyResolver(4, [result, resolver]));
	    }
	  };

	  Container.prototype.autoRegister = function autoRegister(fn, key) {
	    var resolver = void 0;

	    if (typeof fn === 'function') {
	      var _registration = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.registration, fn);

	      if (_registration === undefined) {
	        resolver = new StrategyResolver(1, fn);
	        this.registerResolver(key === undefined ? fn : key, resolver);
	      } else {
	        resolver = _registration.registerResolver(this, key === undefined ? fn : key, fn);
	      }
	    } else {
	      resolver = new StrategyResolver(0, fn);
	      this.registerResolver(key === undefined ? fn : key, resolver);
	    }

	    return resolver;
	  };

	  Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
	    var i = fns.length;
	    while (i--) {
	      this.autoRegister(fns[i]);
	    }
	  };

	  Container.prototype.unregister = function unregister(key) {
	    this._resolvers.delete(key);
	  };

	  Container.prototype.hasResolver = function hasResolver(key) {
	    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    return this._resolvers.has(key) || checkParent && this.parent !== null && this.parent.hasResolver(key, checkParent);
	  };

	  Container.prototype.get = function get(key) {
	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    if (key === Container) {
	      return this;
	    }

	    if (resolverDecorates(key)) {
	      return key.get(this, key);
	    }

	    var resolver = this._resolvers.get(key);

	    if (resolver === undefined) {
	      if (this.parent === null) {
	        return this.autoRegister(key).get(this, key);
	      }

	      return this.parent._get(key);
	    }

	    return resolver.get(this, key);
	  };

	  Container.prototype._get = function _get(key) {
	    var resolver = this._resolvers.get(key);

	    if (resolver === undefined) {
	      if (this.parent === null) {
	        return this.autoRegister(key).get(this, key);
	      }

	      return this.parent._get(key);
	    }

	    return resolver.get(this, key);
	  };

	  Container.prototype.getAll = function getAll(key) {
	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    var resolver = this._resolvers.get(key);

	    if (resolver === undefined) {
	      if (this.parent === null) {
	        return _emptyParameters;
	      }

	      return this.parent.getAll(key);
	    }

	    if (resolver.strategy === 4) {
	      var state = resolver.state;
	      var i = state.length;
	      var results = new Array(i);

	      while (i--) {
	        results[i] = state[i].get(this, key);
	      }

	      return results;
	    }

	    return [resolver.get(this, key)];
	  };

	  Container.prototype.createChild = function createChild() {
	    var child = new Container(this._configuration);
	    child.root = this.root;
	    child.parent = this;
	    return child;
	  };

	  Container.prototype.invoke = function invoke(fn, dynamicDependencies) {
	    try {
	      var _handler = this._handlers.get(fn);

	      if (_handler === undefined) {
	        _handler = this._createInvocationHandler(fn);
	        this._handlers.set(fn, _handler);
	      }

	      return _handler.invoke(this, dynamicDependencies);
	    } catch (e) {
	      throw new _aureliaPal.AggregateError('Error invoking ' + fn.name + '. Check the inner error for details.', e, true);
	    }
	  };

	  Container.prototype._createInvocationHandler = function _createInvocationHandler(fn) {
	    var dependencies = void 0;

	    if (fn.inject === undefined) {
	      dependencies = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, fn) || _emptyParameters;
	    } else {
	      dependencies = [];
	      var ctor = fn;
	      while (typeof ctor === 'function') {
	        var _dependencies;

	        (_dependencies = dependencies).push.apply(_dependencies, getDependencies(ctor));
	        ctor = Object.getPrototypeOf(ctor);
	      }
	    }

	    var invoker = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.invoker, fn) || classInvokers[dependencies.length] || classInvokers.fallback;

	    var handler = new InvocationHandler(fn, invoker, dependencies);
	    return this._onHandlerCreated !== undefined ? this._onHandlerCreated(handler) : handler;
	  };

	  return Container;
	}();

	function autoinject(potentialTarget) {
	  var deco = function deco(target) {
	    target.inject = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, target) || _emptyParameters;
	  };

	  return potentialTarget ? deco(potentialTarget) : deco;
	}

	function inject() {
	  for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    rest[_key2] = arguments[_key2];
	  }

	  return function (target, key, descriptor) {
	    if (descriptor) {
	      var _fn = descriptor.value;
	      _fn.inject = rest;
	    } else {
	      target.inject = rest;
	    }
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Origin = exports.metadata = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.decorators = decorators;
	exports.deprecated = deprecated;
	exports.mixin = mixin;
	exports.protocol = protocol;

	var _aureliaPal = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var metadata = exports.metadata = {
	  resource: 'aurelia:resource',
	  paramTypes: 'design:paramtypes',
	  properties: 'design:properties',
	  get: function get(metadataKey, target, targetKey) {
	    if (!target) {
	      return undefined;
	    }
	    var result = metadata.getOwn(metadataKey, target, targetKey);
	    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
	  },
	  getOwn: function getOwn(metadataKey, target, targetKey) {
	    if (!target) {
	      return undefined;
	    }
	    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
	  },
	  define: function define(metadataKey, metadataValue, target, targetKey) {
	    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
	  },
	  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
	    var result = metadata.getOwn(metadataKey, target, targetKey);

	    if (result === undefined) {
	      result = new Type();
	      Reflect.defineMetadata(metadataKey, result, target, targetKey);
	    }

	    return result;
	  }
	};

	var originStorage = new Map();
	var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

	var Origin = exports.Origin = function () {
	  function Origin(moduleId, moduleMember) {
	    _classCallCheck(this, Origin);

	    this.moduleId = moduleId;
	    this.moduleMember = moduleMember;
	  }

	  Origin.get = function get(fn) {
	    var origin = originStorage.get(fn);

	    if (origin === undefined) {
	      _aureliaPal.PLATFORM.eachModule(function (key, value) {
	        for (var name in value) {
	          var exp = value[name];
	          if (exp === fn) {
	            originStorage.set(fn, origin = new Origin(key, name));
	            return true;
	          }
	        }

	        if (value === fn) {
	          originStorage.set(fn, origin = new Origin(key, 'default'));
	          return true;
	        }
	      });
	    }

	    return origin || unknownOrigin;
	  };

	  Origin.set = function set(fn, origin) {
	    originStorage.set(fn, origin);
	  };

	  return Origin;
	}();

	function decorators() {
	  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	    rest[_key] = arguments[_key];
	  }

	  var applicator = function applicator(target, key, descriptor) {
	    var i = rest.length;

	    if (key) {
	      descriptor = descriptor || {
	        value: target[key],
	        writable: true,
	        configurable: true,
	        enumerable: true
	      };

	      while (i--) {
	        descriptor = rest[i](target, key, descriptor) || descriptor;
	      }

	      Object.defineProperty(target, key, descriptor);
	    } else {
	      while (i--) {
	        target = rest[i](target) || target;
	      }
	    }

	    return target;
	  };

	  applicator.on = applicator;
	  return applicator;
	}

	function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
	  function decorator(target, key, descriptor) {
	    var methodSignature = target.constructor.name + '#' + key;
	    var options = maybeKey ? {} : optionsOrTarget || {};
	    var message = 'DEPRECATION - ' + methodSignature;

	    if (typeof descriptor.value !== 'function') {
	      throw new SyntaxError('Only methods can be marked as deprecated.');
	    }

	    if (options.message) {
	      message += ' - ' + options.message;
	    }

	    return _extends({}, descriptor, {
	      value: function deprecationWrapper() {
	        if (options.error) {
	          throw new Error(message);
	        } else {
	          console.warn(message);
	        }

	        return descriptor.value.apply(this, arguments);
	      }
	    });
	  }

	  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
	}

	function mixin(behavior) {
	  var instanceKeys = Object.keys(behavior);

	  function _mixin(possible) {
	    var decorator = function decorator(target) {
	      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

	      var i = instanceKeys.length;
	      while (i--) {
	        var property = instanceKeys[i];
	        Object.defineProperty(resolvedTarget, property, {
	          value: behavior[property],
	          writable: true
	        });
	      }
	    };

	    return possible ? decorator(possible) : decorator;
	  }

	  return _mixin;
	}

	function alwaysValid() {
	  return true;
	}
	function noCompose() {}

	function ensureProtocolOptions(options) {
	  if (options === undefined) {
	    options = {};
	  } else if (typeof options === 'function') {
	    options = {
	      validate: options
	    };
	  }

	  if (!options.validate) {
	    options.validate = alwaysValid;
	  }

	  if (!options.compose) {
	    options.compose = noCompose;
	  }

	  return options;
	}

	function createProtocolValidator(validate) {
	  return function (target) {
	    var result = validate(target);
	    return result === true;
	  };
	}

	function createProtocolAsserter(name, validate) {
	  return function (target) {
	    var result = validate(target);
	    if (result !== true) {
	      throw new Error(result || name + ' was not correctly implemented.');
	    }
	  };
	}

	function protocol(name, options) {
	  options = ensureProtocolOptions(options);

	  var result = function result(target) {
	    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

	    options.compose(resolvedTarget);
	    result.assert(resolvedTarget);

	    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
	      enumerable: false,
	      configurable: false,
	      writable: false,
	      value: true
	    });
	  };

	  result.validate = createProtocolValidator(options.validate);
	  result.assert = createProtocolAsserter(name, options.validate);

	  return result;
	}

	protocol.create = function (name, options) {
	  options = ensureProtocolOptions(options);
	  var hidden = 'protocol:' + name;
	  var result = function result(target) {
	    var decorator = protocol(name, options);
	    return target ? decorator(target) : decorator;
	  };

	  result.decorates = function (obj) {
	    return obj[hidden] === true;
	  };
	  result.validate = createProtocolValidator(options.validate);
	  result.assert = createProtocolAsserter(name, options.validate);

	  return result;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AggregateError = AggregateError;
	exports.initializePAL = initializePAL;
	function AggregateError(message, innerError, skipIfAlreadyAggregate) {
	  if (innerError) {
	    if (innerError.innerError && skipIfAlreadyAggregate) {
	      return innerError;
	    }

	    var separator = '\n------------------------------------------------\n';

	    message += separator + 'Inner Error:\n';

	    if (typeof innerError === 'string') {
	      message += 'Message: ' + innerError;
	    } else {
	      if (innerError.message) {
	        message += 'Message: ' + innerError.message;
	      } else {
	        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
	      }

	      if (innerError.stack) {
	        message += '\nInner Error Stack:\n' + innerError.stack;
	        message += '\nEnd Inner Error Stack';
	      }
	    }

	    message += separator;
	  }

	  var e = new Error(message);
	  if (innerError) {
	    e.innerError = innerError;
	  }

	  return e;
	}

	var FEATURE = exports.FEATURE = {};

	var PLATFORM = exports.PLATFORM = {
	  noop: function noop() {},
	  eachModule: function eachModule() {}
	};

	PLATFORM.global = function () {
	  if (typeof self !== 'undefined') {
	    return self;
	  }

	  if (typeof global !== 'undefined') {
	    return global;
	  }

	  return new Function('return this')();
	}();

	var DOM = exports.DOM = {};

	function initializePAL(callback) {
	  if (typeof Object.getPropertyDescriptor !== 'function') {
	    Object.getPropertyDescriptor = function (subject, name) {
	      var pd = Object.getOwnPropertyDescriptor(subject, name);
	      var proto = Object.getPrototypeOf(subject);
	      while (typeof pd === 'undefined' && proto !== null) {
	        pd = Object.getOwnPropertyDescriptor(proto, name);
	        proto = Object.getPrototypeOf(proto);
	      }
	      return pd;
	    };
	  }

	  callback(PLATFORM, FEATURE, DOM);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSetObserver = exports.BindingEngine = exports.NameExpression = exports.Listener = exports.ListenerExpression = exports.BindingBehaviorResource = exports.ValueConverterResource = exports.Call = exports.CallExpression = exports.Binding = exports.BindingExpression = exports.ObjectObservationAdapter = exports.ObserverLocator = exports.SVGAnalyzer = exports.presentationAttributes = exports.presentationElements = exports.elements = exports.ComputedExpression = exports.ClassObserver = exports.SelectValueObserver = exports.CheckedObserver = exports.ValueAttributeObserver = exports.StyleObserver = exports.DataAttributeObserver = exports.dataAttributeAccessor = exports.XLinkAttributeObserver = exports.SetterObserver = exports.PrimitiveObserver = exports.propertyAccessor = exports.DirtyCheckProperty = exports.DirtyChecker = exports.EventManager = exports.getMapObserver = exports.ParserImplementation = exports.Parser = exports.Scanner = exports.Lexer = exports.Token = exports.bindingMode = exports.ExpressionCloner = exports.Unparser = exports.LiteralObject = exports.LiteralArray = exports.LiteralString = exports.LiteralPrimitive = exports.PrefixNot = exports.Binary = exports.CallFunction = exports.CallMember = exports.CallScope = exports.AccessKeyed = exports.AccessMember = exports.AccessScope = exports.AccessThis = exports.Conditional = exports.Assign = exports.ValueConverter = exports.BindingBehavior = exports.Chain = exports.Expression = exports.getArrayObserver = exports.CollectionLengthObserver = exports.ModifyCollectionObserver = exports.ExpressionObserver = exports.sourceContext = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class11, _temp, _dec10, _class12, _class13, _temp2;

	exports.camelCase = camelCase;
	exports.createOverrideContext = createOverrideContext;
	exports.getContextFor = getContextFor;
	exports.createScopeForTest = createScopeForTest;
	exports.connectable = connectable;
	exports.enqueueBindingConnect = enqueueBindingConnect;
	exports.subscriberCollection = subscriberCollection;
	exports.calcSplices = calcSplices;
	exports.mergeSplice = mergeSplice;
	exports.projectArraySplices = projectArraySplices;
	exports.getChangeRecords = getChangeRecords;
	exports.cloneExpression = cloneExpression;
	exports.hasDeclaredDependencies = hasDeclaredDependencies;
	exports.declarePropertyDependencies = declarePropertyDependencies;
	exports.computedFrom = computedFrom;
	exports.createComputedObserver = createComputedObserver;
	exports.valueConverter = valueConverter;
	exports.bindingBehavior = bindingBehavior;
	exports.observable = observable;

	var _aureliaLogging = __webpack_require__(9);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaTaskQueue = __webpack_require__(10);

	var _aureliaMetadata = __webpack_require__(6);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var map = Object.create(null);

	function camelCase(name) {
	  if (name in map) {
	    return map[name];
	  }
	  var result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, function (_, x) {
	    return x.toUpperCase();
	  });
	  map[name] = result;
	  return result;
	}

	function createOverrideContext(bindingContext, parentOverrideContext) {
	  return {
	    bindingContext: bindingContext,
	    parentOverrideContext: parentOverrideContext || null
	  };
	}

	function getContextFor(name, scope, ancestor) {
	  var oc = scope.overrideContext;

	  if (ancestor) {
	    while (ancestor && oc) {
	      ancestor--;
	      oc = oc.parentOverrideContext;
	    }
	    if (ancestor || !oc) {
	      return undefined;
	    }
	    return name in oc ? oc : oc.bindingContext;
	  }

	  while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
	    oc = oc.parentOverrideContext;
	  }
	  if (oc) {
	    return name in oc ? oc : oc.bindingContext;
	  }

	  return scope.bindingContext || scope.overrideContext;
	}

	function createScopeForTest(bindingContext, parentBindingContext) {
	  if (parentBindingContext) {
	    return {
	      bindingContext: bindingContext,
	      overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
	    };
	  }
	  return {
	    bindingContext: bindingContext,
	    overrideContext: createOverrideContext(bindingContext)
	  };
	}

	var sourceContext = exports.sourceContext = 'Binding:source';
	var slotNames = [];
	var versionSlotNames = [];

	for (var i = 0; i < 100; i++) {
	  slotNames.push('_observer' + i);
	  versionSlotNames.push('_observerVersion' + i);
	}

	function addObserver(observer) {
	  var observerSlots = this._observerSlots === undefined ? 0 : this._observerSlots;
	  var i = observerSlots;
	  while (i-- && this[slotNames[i]] !== observer) {}
	  if (i === -1) {
	    i = 0;
	    while (this[slotNames[i]]) {
	      i++;
	    }
	    this[slotNames[i]] = observer;
	    observer.subscribe(sourceContext, this);

	    if (i === observerSlots) {
	      this._observerSlots = i + 1;
	    }
	  }

	  if (this._version === undefined) {
	    this._version = 0;
	  }
	  this[versionSlotNames[i]] = this._version;
	}

	function observeProperty(obj, propertyName) {
	  var observer = this.observerLocator.getObserver(obj, propertyName);
	  addObserver.call(this, observer);
	}

	function observeArray(array) {
	  var observer = this.observerLocator.getArrayObserver(array);
	  addObserver.call(this, observer);
	}

	function unobserve(all) {
	  var i = this._observerSlots;
	  while (i--) {
	    if (all || this[versionSlotNames[i]] !== this._version) {
	      var observer = this[slotNames[i]];
	      this[slotNames[i]] = null;
	      if (observer) {
	        observer.unsubscribe(sourceContext, this);
	      }
	    }
	  }
	}

	function connectable() {
	  return function (target) {
	    target.prototype.observeProperty = observeProperty;
	    target.prototype.observeArray = observeArray;
	    target.prototype.unobserve = unobserve;
	    target.prototype.addObserver = addObserver;
	  };
	}

	var bindings = new Map();
	var minimumImmediate = 100;
	var frameBudget = 15;

	var isFlushRequested = false;
	var immediate = 0;

	function flush(animationFrameStart) {
	  var i = 0;
	  var keys = bindings.keys();
	  var item = void 0;

	  while (item = keys.next()) {
	    if (item.done) {
	      break;
	    }

	    var binding = item.value;
	    bindings.delete(binding);
	    binding.connect(true);
	    i++;

	    if (i % 100 === 0 && _aureliaPal.PLATFORM.performance.now() - animationFrameStart > frameBudget) {
	      break;
	    }
	  }

	  if (bindings.size) {
	    _aureliaPal.PLATFORM.requestAnimationFrame(flush);
	  } else {
	    isFlushRequested = false;
	    immediate = 0;
	  }
	}

	function enqueueBindingConnect(binding) {
	  if (immediate < minimumImmediate) {
	    immediate++;
	    binding.connect(false);
	  } else {
	    bindings.set(binding);
	  }
	  if (!isFlushRequested) {
	    isFlushRequested = true;
	    _aureliaPal.PLATFORM.requestAnimationFrame(flush);
	  }
	}

	function addSubscriber(context, callable) {
	  if (this.hasSubscriber(context, callable)) {
	    return false;
	  }
	  if (!this._context0) {
	    this._context0 = context;
	    this._callable0 = callable;
	    return true;
	  }
	  if (!this._context1) {
	    this._context1 = context;
	    this._callable1 = callable;
	    return true;
	  }
	  if (!this._context2) {
	    this._context2 = context;
	    this._callable2 = callable;
	    return true;
	  }
	  if (!this._contextsRest) {
	    this._contextsRest = [context];
	    this._callablesRest = [callable];
	    return true;
	  }
	  this._contextsRest.push(context);
	  this._callablesRest.push(callable);
	  return true;
	}

	function removeSubscriber(context, callable) {
	  if (this._context0 === context && this._callable0 === callable) {
	    this._context0 = null;
	    this._callable0 = null;
	    return true;
	  }
	  if (this._context1 === context && this._callable1 === callable) {
	    this._context1 = null;
	    this._callable1 = null;
	    return true;
	  }
	  if (this._context2 === context && this._callable2 === callable) {
	    this._context2 = null;
	    this._callable2 = null;
	    return true;
	  }
	  var rest = this._contextsRest;
	  var index = void 0;
	  if (!rest || !rest.length || (index = rest.indexOf(context)) === -1 || this._callablesRest[index] !== callable) {
	    return false;
	  }
	  rest.splice(index, 1);
	  this._callablesRest.splice(index, 1);
	  return true;
	}

	var arrayPool1 = [];
	var arrayPool2 = [];
	var poolUtilization = [];

	function callSubscribers(newValue, oldValue) {
	  var context0 = this._context0;
	  var callable0 = this._callable0;
	  var context1 = this._context1;
	  var callable1 = this._callable1;
	  var context2 = this._context2;
	  var callable2 = this._callable2;
	  var length = this._contextsRest ? this._contextsRest.length : 0;
	  var contextsRest = void 0;
	  var callablesRest = void 0;
	  var poolIndex = void 0;
	  var i = void 0;
	  if (length) {
	    poolIndex = poolUtilization.length;
	    while (poolIndex-- && poolUtilization[poolIndex]) {}
	    if (poolIndex < 0) {
	      poolIndex = poolUtilization.length;
	      contextsRest = [];
	      callablesRest = [];
	      poolUtilization.push(true);
	      arrayPool1.push(contextsRest);
	      arrayPool2.push(callablesRest);
	    } else {
	      poolUtilization[poolIndex] = true;
	      contextsRest = arrayPool1[poolIndex];
	      callablesRest = arrayPool2[poolIndex];
	    }

	    i = length;
	    while (i--) {
	      contextsRest[i] = this._contextsRest[i];
	      callablesRest[i] = this._callablesRest[i];
	    }
	  }

	  if (context0) {
	    if (callable0) {
	      callable0.call(context0, newValue, oldValue);
	    } else {
	      context0(newValue, oldValue);
	    }
	  }
	  if (context1) {
	    if (callable1) {
	      callable1.call(context1, newValue, oldValue);
	    } else {
	      context1(newValue, oldValue);
	    }
	  }
	  if (context2) {
	    if (callable2) {
	      callable2.call(context2, newValue, oldValue);
	    } else {
	      context2(newValue, oldValue);
	    }
	  }
	  if (length) {
	    for (i = 0; i < length; i++) {
	      var callable = callablesRest[i];
	      var context = contextsRest[i];
	      if (callable) {
	        callable.call(context, newValue, oldValue);
	      } else {
	        context(newValue, oldValue);
	      }
	      contextsRest[i] = null;
	      callablesRest[i] = null;
	    }
	    poolUtilization[poolIndex] = false;
	  }
	}

	function hasSubscribers() {
	  return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
	}

	function hasSubscriber(context, callable) {
	  var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
	  if (has) {
	    return true;
	  }
	  var index = void 0;
	  var contexts = this._contextsRest;
	  if (!contexts || (index = contexts.length) === 0) {
	    return false;
	  }
	  var callables = this._callablesRest;
	  while (index--) {
	    if (contexts[index] === context && callables[index] === callable) {
	      return true;
	    }
	  }
	  return false;
	}

	function subscriberCollection() {
	  return function (target) {
	    target.prototype.addSubscriber = addSubscriber;
	    target.prototype.removeSubscriber = removeSubscriber;
	    target.prototype.callSubscribers = callSubscribers;
	    target.prototype.hasSubscribers = hasSubscribers;
	    target.prototype.hasSubscriber = hasSubscriber;
	  };
	}

	var ExpressionObserver = exports.ExpressionObserver = (_dec = connectable(), _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function () {
	  function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {
	    

	    this.scope = scope;
	    this.expression = expression;
	    this.observerLocator = observerLocator;
	    this.lookupFunctions = lookupFunctions;
	  }

	  ExpressionObserver.prototype.getValue = function getValue() {
	    return this.expression.evaluate(this.scope, this.lookupFunctions);
	  };

	  ExpressionObserver.prototype.setValue = function setValue(newValue) {
	    this.expression.assign(this.scope, newValue);
	  };

	  ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
	    var _this = this;

	    if (!this.hasSubscribers()) {
	      this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions);
	      this.expression.connect(this, this.scope);
	    }
	    this.addSubscriber(context, callable);
	    if (arguments.length === 1 && context instanceof Function) {
	      return {
	        dispose: function dispose() {
	          _this.unsubscribe(context, callable);
	        }
	      };
	    }
	  };

	  ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.unobserve(true);
	      this.oldValue = undefined;
	    }
	  };

	  ExpressionObserver.prototype.call = function call() {
	    var newValue = this.expression.evaluate(this.scope, this.lookupFunctions);
	    var oldValue = this.oldValue;
	    if (newValue !== oldValue) {
	      this.oldValue = newValue;
	      this.callSubscribers(newValue, oldValue);
	    }
	    this._version++;
	    this.expression.connect(this, this.scope);
	    this.unobserve(false);
	  };

	  return ExpressionObserver;
	}()) || _class) || _class);


	function isIndex(s) {
	  return +s === s >>> 0;
	}

	function toNumber(s) {
	  return +s;
	}

	function newSplice(index, removed, addedCount) {
	  return {
	    index: index,
	    removed: removed,
	    addedCount: addedCount
	  };
	}

	var EDIT_LEAVE = 0;
	var EDIT_UPDATE = 1;
	var EDIT_ADD = 2;
	var EDIT_DELETE = 3;

	function ArraySplice() {}

	ArraySplice.prototype = {
	  calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	    var rowCount = oldEnd - oldStart + 1;
	    var columnCount = currentEnd - currentStart + 1;
	    var distances = new Array(rowCount);
	    var north = void 0;
	    var west = void 0;

	    for (var _i = 0; _i < rowCount; ++_i) {
	      distances[_i] = new Array(columnCount);
	      distances[_i][0] = _i;
	    }

	    for (var j = 0; j < columnCount; ++j) {
	      distances[0][j] = j;
	    }

	    for (var _i2 = 1; _i2 < rowCount; ++_i2) {
	      for (var _j = 1; _j < columnCount; ++_j) {
	        if (this.equals(current[currentStart + _j - 1], old[oldStart + _i2 - 1])) {
	          distances[_i2][_j] = distances[_i2 - 1][_j - 1];
	        } else {
	          north = distances[_i2 - 1][_j] + 1;
	          west = distances[_i2][_j - 1] + 1;
	          distances[_i2][_j] = north < west ? north : west;
	        }
	      }
	    }

	    return distances;
	  },

	  spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
	    var i = distances.length - 1;
	    var j = distances[0].length - 1;
	    var current = distances[i][j];
	    var edits = [];
	    while (i > 0 || j > 0) {
	      if (i === 0) {
	        edits.push(EDIT_ADD);
	        j--;
	        continue;
	      }
	      if (j === 0) {
	        edits.push(EDIT_DELETE);
	        i--;
	        continue;
	      }
	      var northWest = distances[i - 1][j - 1];
	      var west = distances[i - 1][j];
	      var north = distances[i][j - 1];

	      var min = void 0;
	      if (west < north) {
	        min = west < northWest ? west : northWest;
	      } else {
	        min = north < northWest ? north : northWest;
	      }

	      if (min === northWest) {
	        if (northWest === current) {
	          edits.push(EDIT_LEAVE);
	        } else {
	          edits.push(EDIT_UPDATE);
	          current = northWest;
	        }
	        i--;
	        j--;
	      } else if (min === west) {
	        edits.push(EDIT_DELETE);
	        i--;
	        current = west;
	      } else {
	        edits.push(EDIT_ADD);
	        j--;
	        current = north;
	      }
	    }

	    edits.reverse();
	    return edits;
	  },

	  calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	    var prefixCount = 0;
	    var suffixCount = 0;

	    var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
	    if (currentStart === 0 && oldStart === 0) {
	      prefixCount = this.sharedPrefix(current, old, minLength);
	    }

	    if (currentEnd === current.length && oldEnd === old.length) {
	      suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
	    }

	    currentStart += prefixCount;
	    oldStart += prefixCount;
	    currentEnd -= suffixCount;
	    oldEnd -= suffixCount;

	    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
	      return [];
	    }

	    if (currentStart === currentEnd) {
	      var _splice = newSplice(currentStart, [], 0);
	      while (oldStart < oldEnd) {
	        _splice.removed.push(old[oldStart++]);
	      }

	      return [_splice];
	    } else if (oldStart === oldEnd) {
	      return [newSplice(currentStart, [], currentEnd - currentStart)];
	    }

	    var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

	    var splice = undefined;
	    var splices = [];
	    var index = currentStart;
	    var oldIndex = oldStart;
	    for (var _i3 = 0; _i3 < ops.length; ++_i3) {
	      switch (ops[_i3]) {
	        case EDIT_LEAVE:
	          if (splice) {
	            splices.push(splice);
	            splice = undefined;
	          }

	          index++;
	          oldIndex++;
	          break;
	        case EDIT_UPDATE:
	          if (!splice) {
	            splice = newSplice(index, [], 0);
	          }

	          splice.addedCount++;
	          index++;

	          splice.removed.push(old[oldIndex]);
	          oldIndex++;
	          break;
	        case EDIT_ADD:
	          if (!splice) {
	            splice = newSplice(index, [], 0);
	          }

	          splice.addedCount++;
	          index++;
	          break;
	        case EDIT_DELETE:
	          if (!splice) {
	            splice = newSplice(index, [], 0);
	          }

	          splice.removed.push(old[oldIndex]);
	          oldIndex++;
	          break;
	      }
	    }

	    if (splice) {
	      splices.push(splice);
	    }
	    return splices;
	  },

	  sharedPrefix: function sharedPrefix(current, old, searchLength) {
	    for (var _i4 = 0; _i4 < searchLength; ++_i4) {
	      if (!this.equals(current[_i4], old[_i4])) {
	        return _i4;
	      }
	    }

	    return searchLength;
	  },

	  sharedSuffix: function sharedSuffix(current, old, searchLength) {
	    var index1 = current.length;
	    var index2 = old.length;
	    var count = 0;
	    while (count < searchLength && this.equals(current[--index1], old[--index2])) {
	      count++;
	    }

	    return count;
	  },

	  calculateSplices: function calculateSplices(current, previous) {
	    return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
	  },

	  equals: function equals(currentValue, previousValue) {
	    return currentValue === previousValue;
	  }
	};

	var arraySplice = new ArraySplice();

	function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	  return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
	}

	function intersect(start1, end1, start2, end2) {
	  if (end1 < start2 || end2 < start1) {
	    return -1;
	  }

	  if (end1 === start2 || end2 === start1) {
	    return 0;
	  }

	  if (start1 < start2) {
	    if (end1 < end2) {
	      return end1 - start2;
	    }

	    return end2 - start2;
	  }

	  if (end2 < end1) {
	    return end2 - start1;
	  }

	  return end1 - start1;
	}

	function mergeSplice(splices, index, removed, addedCount) {
	  var splice = newSplice(index, removed, addedCount);

	  var inserted = false;
	  var insertionOffset = 0;

	  for (var _i5 = 0; _i5 < splices.length; _i5++) {
	    var current = splices[_i5];
	    current.index += insertionOffset;

	    if (inserted) {
	      continue;
	    }

	    var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

	    if (intersectCount >= 0) {

	      splices.splice(_i5, 1);
	      _i5--;

	      insertionOffset -= current.addedCount - current.removed.length;

	      splice.addedCount += current.addedCount - intersectCount;
	      var deleteCount = splice.removed.length + current.removed.length - intersectCount;

	      if (!splice.addedCount && !deleteCount) {
	        inserted = true;
	      } else {
	        var currentRemoved = current.removed;

	        if (splice.index < current.index) {
	          var prepend = splice.removed.slice(0, current.index - splice.index);
	          Array.prototype.push.apply(prepend, currentRemoved);
	          currentRemoved = prepend;
	        }

	        if (splice.index + splice.removed.length > current.index + current.addedCount) {
	          var append = splice.removed.slice(current.index + current.addedCount - splice.index);
	          Array.prototype.push.apply(currentRemoved, append);
	        }

	        splice.removed = currentRemoved;
	        if (current.index < splice.index) {
	          splice.index = current.index;
	        }
	      }
	    } else if (splice.index < current.index) {

	      inserted = true;

	      splices.splice(_i5, 0, splice);
	      _i5++;

	      var offset = splice.addedCount - splice.removed.length;
	      current.index += offset;
	      insertionOffset += offset;
	    }
	  }

	  if (!inserted) {
	    splices.push(splice);
	  }
	}

	function createInitialSplices(array, changeRecords) {
	  var splices = [];

	  for (var _i6 = 0; _i6 < changeRecords.length; _i6++) {
	    var record = changeRecords[_i6];
	    switch (record.type) {
	      case 'splice':
	        mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
	        break;
	      case 'add':
	      case 'update':
	      case 'delete':
	        if (!isIndex(record.name)) {
	          continue;
	        }

	        var index = toNumber(record.name);
	        if (index < 0) {
	          continue;
	        }

	        mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
	        break;
	      default:
	        console.error('Unexpected record type: ' + JSON.stringify(record));
	        break;
	    }
	  }

	  return splices;
	}

	function projectArraySplices(array, changeRecords) {
	  var splices = [];

	  createInitialSplices(array, changeRecords).forEach(function (splice) {
	    if (splice.addedCount === 1 && splice.removed.length === 1) {
	      if (splice.removed[0] !== array[splice.index]) {
	        splices.push(splice);
	      }

	      return;
	    }

	    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
	  });

	  return splices;
	}

	function newRecord(type, object, key, oldValue) {
	  return {
	    type: type,
	    object: object,
	    key: key,
	    oldValue: oldValue
	  };
	}

	function getChangeRecords(map) {
	  var entries = new Array(map.size);
	  var keys = map.keys();
	  var i = 0;
	  var item = void 0;

	  while (item = keys.next()) {
	    if (item.done) {
	      break;
	    }

	    entries[i] = newRecord('added', map, item.value);
	    i++;
	  }

	  return entries;
	}

	var ModifyCollectionObserver = exports.ModifyCollectionObserver = (_dec3 = subscriberCollection(), _dec3(_class2 = function () {
	  function ModifyCollectionObserver(taskQueue, collection) {
	    

	    this.taskQueue = taskQueue;
	    this.queued = false;
	    this.changeRecords = null;
	    this.oldCollection = null;
	    this.collection = collection;
	    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
	  }

	  ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
	    this.addSubscriber(context, callable);
	  };

	  ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
	    if (!this.hasSubscribers() && !this.lengthObserver) {
	      return;
	    }

	    if (changeRecord.type === 'splice') {
	      var index = changeRecord.index;
	      var arrayLength = changeRecord.object.length;
	      if (index > arrayLength) {
	        index = arrayLength - changeRecord.addedCount;
	      } else if (index < 0) {
	        index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
	      }
	      if (index < 0) {
	        index = 0;
	      }
	      changeRecord.index = index;
	    }

	    if (this.changeRecords === null) {
	      this.changeRecords = [changeRecord];
	    } else {
	      this.changeRecords.push(changeRecord);
	    }

	    if (!this.queued) {
	      this.queued = true;
	      this.taskQueue.queueMicroTask(this);
	    }
	  };

	  ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
	    if (this.changeRecords && this.changeRecords.length || this.oldCollection) {
	      this.call();
	    }
	  };

	  ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
	    this.oldCollection = oldCollection;

	    if (this.hasSubscribers() && !this.queued) {
	      this.queued = true;
	      this.taskQueue.queueMicroTask(this);
	    }
	  };

	  ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
	    return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
	  };

	  ModifyCollectionObserver.prototype.call = function call() {
	    var changeRecords = this.changeRecords;
	    var oldCollection = this.oldCollection;
	    var records = void 0;

	    this.queued = false;
	    this.changeRecords = [];
	    this.oldCollection = null;

	    if (this.hasSubscribers()) {
	      if (oldCollection) {
	        if (this.collection instanceof Map || this.collection instanceof Set) {
	          records = getChangeRecords(oldCollection);
	        } else {
	          records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
	        }
	      } else {
	        if (this.collection instanceof Map || this.collection instanceof Set) {
	          records = changeRecords;
	        } else {
	          records = projectArraySplices(this.collection, changeRecords);
	        }
	      }

	      this.callSubscribers(records);
	    }

	    if (this.lengthObserver) {
	      this.lengthObserver.call(this.collection[this.lengthPropertyName]);
	    }
	  };

	  return ModifyCollectionObserver;
	}()) || _class2);
	var CollectionLengthObserver = exports.CollectionLengthObserver = (_dec4 = subscriberCollection(), _dec4(_class3 = function () {
	  function CollectionLengthObserver(collection) {
	    

	    this.collection = collection;
	    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
	    this.currentValue = collection[this.lengthPropertyName];
	  }

	  CollectionLengthObserver.prototype.getValue = function getValue() {
	    return this.collection[this.lengthPropertyName];
	  };

	  CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
	    this.collection[this.lengthPropertyName] = newValue;
	  };

	  CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
	    this.addSubscriber(context, callable);
	  };

	  CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  CollectionLengthObserver.prototype.call = function call(newValue) {
	    var oldValue = this.currentValue;
	    this.callSubscribers(newValue, oldValue);
	    this.currentValue = newValue;
	  };

	  return CollectionLengthObserver;
	}()) || _class3);

	var pop = Array.prototype.pop;
	var push = Array.prototype.push;
	var reverse = Array.prototype.reverse;
	var shift = Array.prototype.shift;
	var sort = Array.prototype.sort;
	var splice = Array.prototype.splice;
	var unshift = Array.prototype.unshift;

	Array.prototype.pop = function () {
	  var notEmpty = this.length > 0;
	  var methodCallResult = pop.apply(this, arguments);
	  if (notEmpty && this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'delete',
	      object: this,
	      name: this.length,
	      oldValue: methodCallResult
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.push = function () {
	  var methodCallResult = push.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'splice',
	      object: this,
	      index: this.length - arguments.length,
	      removed: [],
	      addedCount: arguments.length
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.reverse = function () {
	  var oldArray = void 0;
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.flushChangeRecords();
	    oldArray = this.slice();
	  }
	  var methodCallResult = reverse.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.reset(oldArray);
	  }
	  return methodCallResult;
	};

	Array.prototype.shift = function () {
	  var notEmpty = this.length > 0;
	  var methodCallResult = shift.apply(this, arguments);
	  if (notEmpty && this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'delete',
	      object: this,
	      name: 0,
	      oldValue: methodCallResult
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.sort = function () {
	  var oldArray = void 0;
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.flushChangeRecords();
	    oldArray = this.slice();
	  }
	  var methodCallResult = sort.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.reset(oldArray);
	  }
	  return methodCallResult;
	};

	Array.prototype.splice = function () {
	  var methodCallResult = splice.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'splice',
	      object: this,
	      index: arguments[0],
	      removed: methodCallResult,
	      addedCount: arguments.length > 2 ? arguments.length - 2 : 0
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.unshift = function () {
	  var methodCallResult = unshift.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'splice',
	      object: this,
	      index: 0,
	      removed: [],
	      addedCount: arguments.length
	    });
	  }
	  return methodCallResult;
	};

	function _getArrayObserver(taskQueue, array) {
	  return ModifyArrayObserver.for(taskQueue, array);
	}

	exports.getArrayObserver = _getArrayObserver;

	var ModifyArrayObserver = function (_ModifyCollectionObse) {
	  _inherits(ModifyArrayObserver, _ModifyCollectionObse);

	  function ModifyArrayObserver(taskQueue, array) {
	    

	    return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
	  }

	  ModifyArrayObserver.for = function _for(taskQueue, array) {
	    if (!('__array_observer__' in array)) {
	      var observer = ModifyArrayObserver.create(taskQueue, array);
	      Reflect.defineProperty(array, '__array_observer__', { value: observer, enumerable: false, configurable: false });
	    }
	    return array.__array_observer__;
	  };

	  ModifyArrayObserver.create = function create(taskQueue, array) {
	    var observer = new ModifyArrayObserver(taskQueue, array);
	    return observer;
	  };

	  return ModifyArrayObserver;
	}(ModifyCollectionObserver);

	var Expression = exports.Expression = function () {
	  function Expression() {
	    

	    this.isChain = false;
	    this.isAssignable = false;
	  }

	  Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
	    throw new Error('Binding expression "' + this + '" cannot be evaluated.');
	  };

	  Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
	    throw new Error('Binding expression "' + this + '" cannot be assigned to.');
	  };

	  Expression.prototype.toString = function toString() {
	    return Unparser.unparse(this);
	  };

	  return Expression;
	}();

	var Chain = exports.Chain = function (_Expression) {
	  _inherits(Chain, _Expression);

	  function Chain(expressions) {
	    

	    var _this3 = _possibleConstructorReturn(this, _Expression.call(this));

	    _this3.expressions = expressions;
	    _this3.isChain = true;
	    return _this3;
	  }

	  Chain.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var result = void 0;
	    var expressions = this.expressions;
	    var last = void 0;

	    for (var _i7 = 0, length = expressions.length; _i7 < length; ++_i7) {
	      last = expressions[_i7].evaluate(scope, lookupFunctions);

	      if (last !== null) {
	        result = last;
	      }
	    }

	    return result;
	  };

	  Chain.prototype.accept = function accept(visitor) {
	    return visitor.visitChain(this);
	  };

	  return Chain;
	}(Expression);

	var BindingBehavior = exports.BindingBehavior = function (_Expression2) {
	  _inherits(BindingBehavior, _Expression2);

	  function BindingBehavior(expression, name, args) {
	    

	    var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));

	    _this4.expression = expression;
	    _this4.name = name;
	    _this4.args = args;
	    return _this4;
	  }

	  BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.expression.evaluate(scope, lookupFunctions);
	  };

	  BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
	    return this.expression.assign(scope, value, lookupFunctions);
	  };

	  BindingBehavior.prototype.accept = function accept(visitor) {
	    return visitor.visitBindingBehavior(this);
	  };

	  BindingBehavior.prototype.connect = function connect(binding, scope) {
	    this.expression.connect(binding, scope);
	  };

	  BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
	    if (this.expression.expression && this.expression.bind) {
	      this.expression.bind(binding, scope, lookupFunctions);
	    }
	    var behavior = lookupFunctions.bindingBehaviors(this.name);
	    if (!behavior) {
	      throw new Error('No BindingBehavior named "' + this.name + '" was found!');
	    }
	    var behaviorKey = 'behavior-' + this.name;
	    if (binding[behaviorKey]) {
	      throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
	    }
	    binding[behaviorKey] = behavior;
	    behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
	  };

	  BindingBehavior.prototype.unbind = function unbind(binding, scope) {
	    var behaviorKey = 'behavior-' + this.name;
	    binding[behaviorKey].unbind(binding, scope);
	    binding[behaviorKey] = null;
	    if (this.expression.expression && this.expression.unbind) {
	      this.expression.unbind(binding, scope);
	    }
	  };

	  return BindingBehavior;
	}(Expression);

	var ValueConverter = exports.ValueConverter = function (_Expression3) {
	  _inherits(ValueConverter, _Expression3);

	  function ValueConverter(expression, name, args, allArgs) {
	    

	    var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));

	    _this5.expression = expression;
	    _this5.name = name;
	    _this5.args = args;
	    _this5.allArgs = allArgs;
	    return _this5;
	  }

	  ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var converter = lookupFunctions.valueConverters(this.name);
	    if (!converter) {
	      throw new Error('No ValueConverter named "' + this.name + '" was found!');
	    }

	    if ('toView' in converter) {
	      return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
	    }

	    return this.allArgs[0].evaluate(scope, lookupFunctions);
	  };

	  ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
	    var converter = lookupFunctions.valueConverters(this.name);
	    if (!converter) {
	      throw new Error('No ValueConverter named "' + this.name + '" was found!');
	    }

	    if ('fromView' in converter) {
	      value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
	    }

	    return this.allArgs[0].assign(scope, value, lookupFunctions);
	  };

	  ValueConverter.prototype.accept = function accept(visitor) {
	    return visitor.visitValueConverter(this);
	  };

	  ValueConverter.prototype.connect = function connect(binding, scope) {
	    var expressions = this.allArgs;
	    var i = expressions.length;
	    while (i--) {
	      expressions[i].connect(binding, scope);
	    }
	  };

	  return ValueConverter;
	}(Expression);

	var Assign = exports.Assign = function (_Expression4) {
	  _inherits(Assign, _Expression4);

	  function Assign(target, value) {
	    

	    var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));

	    _this6.target = target;
	    _this6.value = value;
	    return _this6;
	  }

	  Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
	  };

	  Assign.prototype.accept = function accept(vistor) {
	    vistor.visitAssign(this);
	  };

	  Assign.prototype.connect = function connect(binding, scope) {};

	  return Assign;
	}(Expression);

	var Conditional = exports.Conditional = function (_Expression5) {
	  _inherits(Conditional, _Expression5);

	  function Conditional(condition, yes, no) {
	    

	    var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));

	    _this7.condition = condition;
	    _this7.yes = yes;
	    _this7.no = no;
	    return _this7;
	  }

	  Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return !!this.condition.evaluate(scope) ? this.yes.evaluate(scope) : this.no.evaluate(scope);
	  };

	  Conditional.prototype.accept = function accept(visitor) {
	    return visitor.visitConditional(this);
	  };

	  Conditional.prototype.connect = function connect(binding, scope) {
	    this.condition.connect(binding, scope);
	    if (this.condition.evaluate(scope)) {
	      this.yes.connect(binding, scope);
	    } else {
	      this.no.connect(binding, scope);
	    }
	  };

	  return Conditional;
	}(Expression);

	var AccessThis = exports.AccessThis = function (_Expression6) {
	  _inherits(AccessThis, _Expression6);

	  function AccessThis(ancestor) {
	    

	    var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));

	    _this8.ancestor = ancestor;
	    return _this8;
	  }

	  AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var oc = scope.overrideContext;
	    var i = this.ancestor;
	    while (i-- && oc) {
	      oc = oc.parentOverrideContext;
	    }
	    return i < 1 && oc ? oc.bindingContext : undefined;
	  };

	  AccessThis.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessThis(this);
	  };

	  AccessThis.prototype.connect = function connect(binding, scope) {};

	  return AccessThis;
	}(Expression);

	var AccessScope = exports.AccessScope = function (_Expression7) {
	  _inherits(AccessScope, _Expression7);

	  function AccessScope(name, ancestor) {
	    

	    var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));

	    _this9.name = name;
	    _this9.ancestor = ancestor;
	    _this9.isAssignable = true;
	    return _this9;
	  }

	  AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var context = getContextFor(this.name, scope, this.ancestor);
	    return context[this.name];
	  };

	  AccessScope.prototype.assign = function assign(scope, value) {
	    var context = getContextFor(this.name, scope, this.ancestor);
	    return context ? context[this.name] = value : undefined;
	  };

	  AccessScope.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessScope(this);
	  };

	  AccessScope.prototype.connect = function connect(binding, scope) {
	    var context = getContextFor(this.name, scope, this.ancestor);
	    binding.observeProperty(context, this.name);
	  };

	  return AccessScope;
	}(Expression);

	var AccessMember = exports.AccessMember = function (_Expression8) {
	  _inherits(AccessMember, _Expression8);

	  function AccessMember(object, name) {
	    

	    var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));

	    _this10.object = object;
	    _this10.name = name;
	    _this10.isAssignable = true;
	    return _this10;
	  }

	  AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var instance = this.object.evaluate(scope, lookupFunctions);
	    return instance === null || instance === undefined ? instance : instance[this.name];
	  };

	  AccessMember.prototype.assign = function assign(scope, value) {
	    var instance = this.object.evaluate(scope);

	    if (instance === null || instance === undefined) {
	      instance = {};
	      this.object.assign(scope, instance);
	    }

	    return instance[this.name] = value;
	  };

	  AccessMember.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessMember(this);
	  };

	  AccessMember.prototype.connect = function connect(binding, scope) {
	    this.object.connect(binding, scope);
	    var obj = this.object.evaluate(scope);
	    if (obj) {
	      binding.observeProperty(obj, this.name);
	    }
	  };

	  return AccessMember;
	}(Expression);

	var AccessKeyed = exports.AccessKeyed = function (_Expression9) {
	  _inherits(AccessKeyed, _Expression9);

	  function AccessKeyed(object, key) {
	    

	    var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));

	    _this11.object = object;
	    _this11.key = key;
	    _this11.isAssignable = true;
	    return _this11;
	  }

	  AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var instance = this.object.evaluate(scope, lookupFunctions);
	    var lookup = this.key.evaluate(scope, lookupFunctions);
	    return getKeyed(instance, lookup);
	  };

	  AccessKeyed.prototype.assign = function assign(scope, value) {
	    var instance = this.object.evaluate(scope);
	    var lookup = this.key.evaluate(scope);
	    return setKeyed(instance, lookup, value);
	  };

	  AccessKeyed.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessKeyed(this);
	  };

	  AccessKeyed.prototype.connect = function connect(binding, scope) {
	    this.object.connect(binding, scope);
	    var obj = this.object.evaluate(scope);
	    if (obj instanceof Object) {
	      this.key.connect(binding, scope);
	      var key = this.key.evaluate(scope);

	      if (key !== null && key !== undefined && !(Array.isArray(obj) && typeof key === 'number')) {
	        binding.observeProperty(obj, key);
	      }
	    }
	  };

	  return AccessKeyed;
	}(Expression);

	var CallScope = exports.CallScope = function (_Expression10) {
	  _inherits(CallScope, _Expression10);

	  function CallScope(name, args, ancestor) {
	    

	    var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));

	    _this12.name = name;
	    _this12.args = args;
	    _this12.ancestor = ancestor;
	    return _this12;
	  }

	  CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
	    var args = evalList(scope, this.args, lookupFunctions);
	    var context = getContextFor(this.name, scope, this.ancestor);
	    var func = getFunction(context, this.name, mustEvaluate);
	    if (func) {
	      return func.apply(context, args);
	    }
	    return undefined;
	  };

	  CallScope.prototype.accept = function accept(visitor) {
	    return visitor.visitCallScope(this);
	  };

	  CallScope.prototype.connect = function connect(binding, scope) {
	    var args = this.args;
	    var i = args.length;
	    while (i--) {
	      args[i].connect(binding, scope);
	    }
	  };

	  return CallScope;
	}(Expression);

	var CallMember = exports.CallMember = function (_Expression11) {
	  _inherits(CallMember, _Expression11);

	  function CallMember(object, name, args) {
	    

	    var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));

	    _this13.object = object;
	    _this13.name = name;
	    _this13.args = args;
	    return _this13;
	  }

	  CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
	    var instance = this.object.evaluate(scope, lookupFunctions);
	    var args = evalList(scope, this.args, lookupFunctions);
	    var func = getFunction(instance, this.name, mustEvaluate);
	    if (func) {
	      return func.apply(instance, args);
	    }
	    return undefined;
	  };

	  CallMember.prototype.accept = function accept(visitor) {
	    return visitor.visitCallMember(this);
	  };

	  CallMember.prototype.connect = function connect(binding, scope) {
	    this.object.connect(binding, scope);
	    var obj = this.object.evaluate(scope);
	    if (getFunction(obj, this.name, false)) {
	      var args = this.args;
	      var _i8 = args.length;
	      while (_i8--) {
	        args[_i8].connect(binding, scope);
	      }
	    }
	  };

	  return CallMember;
	}(Expression);

	var CallFunction = exports.CallFunction = function (_Expression12) {
	  _inherits(CallFunction, _Expression12);

	  function CallFunction(func, args) {
	    

	    var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));

	    _this14.func = func;
	    _this14.args = args;
	    return _this14;
	  }

	  CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
	    var func = this.func.evaluate(scope, lookupFunctions);
	    if (typeof func === 'function') {
	      return func.apply(null, evalList(scope, this.args, lookupFunctions));
	    }
	    if (!mustEvaluate && (func === null || func === undefined)) {
	      return undefined;
	    }
	    throw new Error(this.func + ' is not a function');
	  };

	  CallFunction.prototype.accept = function accept(visitor) {
	    return visitor.visitCallFunction(this);
	  };

	  CallFunction.prototype.connect = function connect(binding, scope) {
	    this.func.connect(binding, scope);
	    var func = this.func.evaluate(scope);
	    if (typeof func === 'function') {
	      var args = this.args;
	      var _i9 = args.length;
	      while (_i9--) {
	        args[_i9].connect(binding, scope);
	      }
	    }
	  };

	  return CallFunction;
	}(Expression);

	var Binary = exports.Binary = function (_Expression13) {
	  _inherits(Binary, _Expression13);

	  function Binary(operation, left, right) {
	    

	    var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));

	    _this15.operation = operation;
	    _this15.left = left;
	    _this15.right = right;
	    return _this15;
	  }

	  Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var left = this.left.evaluate(scope);

	    switch (this.operation) {
	      case '&&':
	        return left && this.right.evaluate(scope);
	      case '||':
	        return left || this.right.evaluate(scope);
	    }

	    var right = this.right.evaluate(scope);

	    switch (this.operation) {
	      case '==':
	        return left == right;
	      case '===':
	        return left === right;
	      case '!=':
	        return left != right;
	      case '!==':
	        return left !== right;
	    }

	    if (left === null || right === null || left === undefined || right === undefined) {
	      switch (this.operation) {
	        case '+':
	          if (left !== null && left !== undefined) return left;
	          if (right !== null && right !== undefined) return right;
	          return 0;
	        case '-':
	          if (left !== null && left !== undefined) return left;
	          if (right !== null && right !== undefined) return 0 - right;
	          return 0;
	      }

	      return null;
	    }

	    switch (this.operation) {
	      case '+':
	        return autoConvertAdd(left, right);
	      case '-':
	        return left - right;
	      case '*':
	        return left * right;
	      case '/':
	        return left / right;
	      case '%':
	        return left % right;
	      case '<':
	        return left < right;
	      case '>':
	        return left > right;
	      case '<=':
	        return left <= right;
	      case '>=':
	        return left >= right;
	      case '^':
	        return left ^ right;
	    }

	    throw new Error('Internal error [' + this.operation + '] not handled');
	  };

	  Binary.prototype.accept = function accept(visitor) {
	    return visitor.visitBinary(this);
	  };

	  Binary.prototype.connect = function connect(binding, scope) {
	    this.left.connect(binding, scope);
	    var left = this.left.evaluate(scope);
	    if (this.operation === '&&' && !left || this.operation === '||' && left) {
	      return;
	    }
	    this.right.connect(binding, scope);
	  };

	  return Binary;
	}(Expression);

	var PrefixNot = exports.PrefixNot = function (_Expression14) {
	  _inherits(PrefixNot, _Expression14);

	  function PrefixNot(operation, expression) {
	    

	    var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));

	    _this16.operation = operation;
	    _this16.expression = expression;
	    return _this16;
	  }

	  PrefixNot.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return !this.expression.evaluate(scope);
	  };

	  PrefixNot.prototype.accept = function accept(visitor) {
	    return visitor.visitPrefix(this);
	  };

	  PrefixNot.prototype.connect = function connect(binding, scope) {
	    this.expression.connect(binding, scope);
	  };

	  return PrefixNot;
	}(Expression);

	var LiteralPrimitive = exports.LiteralPrimitive = function (_Expression15) {
	  _inherits(LiteralPrimitive, _Expression15);

	  function LiteralPrimitive(value) {
	    

	    var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));

	    _this17.value = value;
	    return _this17;
	  }

	  LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.value;
	  };

	  LiteralPrimitive.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralPrimitive(this);
	  };

	  LiteralPrimitive.prototype.connect = function connect(binding, scope) {};

	  return LiteralPrimitive;
	}(Expression);

	var LiteralString = exports.LiteralString = function (_Expression16) {
	  _inherits(LiteralString, _Expression16);

	  function LiteralString(value) {
	    

	    var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));

	    _this18.value = value;
	    return _this18;
	  }

	  LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.value;
	  };

	  LiteralString.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralString(this);
	  };

	  LiteralString.prototype.connect = function connect(binding, scope) {};

	  return LiteralString;
	}(Expression);

	var LiteralArray = exports.LiteralArray = function (_Expression17) {
	  _inherits(LiteralArray, _Expression17);

	  function LiteralArray(elements) {
	    

	    var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));

	    _this19.elements = elements;
	    return _this19;
	  }

	  LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var elements = this.elements;
	    var result = [];

	    for (var _i10 = 0, length = elements.length; _i10 < length; ++_i10) {
	      result[_i10] = elements[_i10].evaluate(scope, lookupFunctions);
	    }

	    return result;
	  };

	  LiteralArray.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralArray(this);
	  };

	  LiteralArray.prototype.connect = function connect(binding, scope) {
	    var length = this.elements.length;
	    for (var _i11 = 0; _i11 < length; _i11++) {
	      this.elements[_i11].connect(binding, scope);
	    }
	  };

	  return LiteralArray;
	}(Expression);

	var LiteralObject = exports.LiteralObject = function (_Expression18) {
	  _inherits(LiteralObject, _Expression18);

	  function LiteralObject(keys, values) {
	    

	    var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));

	    _this20.keys = keys;
	    _this20.values = values;
	    return _this20;
	  }

	  LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var instance = {};
	    var keys = this.keys;
	    var values = this.values;

	    for (var _i12 = 0, length = keys.length; _i12 < length; ++_i12) {
	      instance[keys[_i12]] = values[_i12].evaluate(scope, lookupFunctions);
	    }

	    return instance;
	  };

	  LiteralObject.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralObject(this);
	  };

	  LiteralObject.prototype.connect = function connect(binding, scope) {
	    var length = this.keys.length;
	    for (var _i13 = 0; _i13 < length; _i13++) {
	      this.values[_i13].connect(binding, scope);
	    }
	  };

	  return LiteralObject;
	}(Expression);

	var evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];

	function evalList(scope, list, lookupFunctions) {
	  var length = list.length;

	  for (var cacheLength = evalListCache.length; cacheLength <= length; ++cacheLength) {
	    evalListCache.push([]);
	  }

	  var result = evalListCache[length];

	  for (var _i14 = 0; _i14 < length; ++_i14) {
	    result[_i14] = list[_i14].evaluate(scope, lookupFunctions);
	  }

	  return result;
	}

	function autoConvertAdd(a, b) {
	  if (a !== null && b !== null) {
	    if (typeof a === 'string' && typeof b !== 'string') {
	      return a + b.toString();
	    }

	    if (typeof a !== 'string' && typeof b === 'string') {
	      return a.toString() + b;
	    }

	    return a + b;
	  }

	  if (a !== null) {
	    return a;
	  }

	  if (b !== null) {
	    return b;
	  }

	  return 0;
	}

	function getFunction(obj, name, mustExist) {
	  var func = obj === null || obj === undefined ? null : obj[name];
	  if (typeof func === 'function') {
	    return func;
	  }
	  if (!mustExist && (func === null || func === undefined)) {
	    return null;
	  }
	  throw new Error(name + ' is not a function');
	}

	function getKeyed(obj, key) {
	  if (Array.isArray(obj)) {
	    return obj[parseInt(key, 10)];
	  } else if (obj) {
	    return obj[key];
	  } else if (obj === null || obj === undefined) {
	    return undefined;
	  }

	  return obj[key];
	}

	function setKeyed(obj, key, value) {
	  if (Array.isArray(obj)) {
	    var index = parseInt(key, 10);

	    if (obj.length <= index) {
	      obj.length = index + 1;
	    }

	    obj[index] = value;
	  } else {
	    obj[key] = value;
	  }

	  return value;
	}

	var Unparser = exports.Unparser = function () {
	  function Unparser(buffer) {
	    

	    this.buffer = buffer;
	  }

	  Unparser.unparse = function unparse(expression) {
	    var buffer = [];
	    var visitor = new Unparser(buffer);

	    expression.accept(visitor);

	    return buffer.join('');
	  };

	  Unparser.prototype.write = function write(text) {
	    this.buffer.push(text);
	  };

	  Unparser.prototype.writeArgs = function writeArgs(args) {
	    this.write('(');

	    for (var _i15 = 0, length = args.length; _i15 < length; ++_i15) {
	      if (_i15 !== 0) {
	        this.write(',');
	      }

	      args[_i15].accept(this);
	    }

	    this.write(')');
	  };

	  Unparser.prototype.visitChain = function visitChain(chain) {
	    var expressions = chain.expressions;

	    for (var _i16 = 0, length = expression.length; _i16 < length; ++_i16) {
	      if (_i16 !== 0) {
	        this.write(';');
	      }

	      expressions[_i16].accept(this);
	    }
	  };

	  Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
	    var args = behavior.args;

	    behavior.expression.accept(this);
	    this.write('&' + behavior.name);

	    for (var _i17 = 0, length = args.length; _i17 < length; ++_i17) {
	      this.write(':');
	      args[_i17].accept(this);
	    }
	  };

	  Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
	    var args = converter.args;

	    converter.expression.accept(this);
	    this.write('|' + converter.name);

	    for (var _i18 = 0, length = args.length; _i18 < length; ++_i18) {
	      this.write(':');
	      args[_i18].accept(this);
	    }
	  };

	  Unparser.prototype.visitAssign = function visitAssign(assign) {
	    assign.target.accept(this);
	    this.write('=');
	    assign.value.accept(this);
	  };

	  Unparser.prototype.visitConditional = function visitConditional(conditional) {
	    conditional.condition.accept(this);
	    this.write('?');
	    conditional.yes.accept(this);
	    this.write(':');
	    conditional.no.accept(this);
	  };

	  Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
	    if (access.ancestor === 0) {
	      this.write('$this');
	      return;
	    }
	    this.write('$parent');
	    var i = access.ancestor - 1;
	    while (i--) {
	      this.write('.$parent');
	    }
	  };

	  Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
	    var i = access.ancestor;
	    while (i--) {
	      this.write('$parent.');
	    }
	    this.write(access.name);
	  };

	  Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
	    access.object.accept(this);
	    this.write('.' + access.name);
	  };

	  Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
	    access.object.accept(this);
	    this.write('[');
	    access.key.accept(this);
	    this.write(']');
	  };

	  Unparser.prototype.visitCallScope = function visitCallScope(call) {
	    var i = call.ancestor;
	    while (i--) {
	      this.write('$parent.');
	    }
	    this.write(call.name);
	    this.writeArgs(call.args);
	  };

	  Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
	    call.func.accept(this);
	    this.writeArgs(call.args);
	  };

	  Unparser.prototype.visitCallMember = function visitCallMember(call) {
	    call.object.accept(this);
	    this.write('.' + call.name);
	    this.writeArgs(call.args);
	  };

	  Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
	    this.write('(' + prefix.operation);
	    prefix.expression.accept(this);
	    this.write(')');
	  };

	  Unparser.prototype.visitBinary = function visitBinary(binary) {
	    binary.left.accept(this);
	    this.write(binary.operation);
	    binary.right.accept(this);
	  };

	  Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
	    this.write('' + literal.value);
	  };

	  Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
	    var elements = literal.elements;

	    this.write('[');

	    for (var _i19 = 0, length = elements.length; _i19 < length; ++_i19) {
	      if (_i19 !== 0) {
	        this.write(',');
	      }

	      elements[_i19].accept(this);
	    }

	    this.write(']');
	  };

	  Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
	    var keys = literal.keys;
	    var values = literal.values;

	    this.write('{');

	    for (var _i20 = 0, length = keys.length; _i20 < length; ++_i20) {
	      if (_i20 !== 0) {
	        this.write(',');
	      }

	      this.write('\'' + keys[_i20] + '\':');
	      values[_i20].accept(this);
	    }

	    this.write('}');
	  };

	  Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
	    var escaped = literal.value.replace(/'/g, "\'");
	    this.write('\'' + escaped + '\'');
	  };

	  return Unparser;
	}();

	var ExpressionCloner = exports.ExpressionCloner = function () {
	  function ExpressionCloner() {
	    
	  }

	  ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
	    var clonedArray = [];
	    var i = array.length;
	    while (i--) {
	      clonedArray[i] = array[i].accept(this);
	    }
	    return clonedArray;
	  };

	  ExpressionCloner.prototype.visitChain = function visitChain(chain) {
	    return new Chain(this.cloneExpressionArray(chain.expressions));
	  };

	  ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
	    return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
	  };

	  ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
	    return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
	  };

	  ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
	    return new Assign(assign.target.accept(this), assign.value.accept(this));
	  };

	  ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
	    return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
	  };

	  ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
	    return new AccessThis(access.ancestor);
	  };

	  ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
	    return new AccessScope(access.name, access.ancestor);
	  };

	  ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
	    return new AccessMember(access.object.accept(this), access.name);
	  };

	  ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
	    return new AccessKeyed(access.object.accept(this), access.key.accept(this));
	  };

	  ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
	    return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
	  };

	  ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
	    return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
	  };

	  ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
	    return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
	  };

	  ExpressionCloner.prototype.visitPrefix = function visitPrefix(prefix) {
	    return new PrefixNot(prefix.operation, prefix.expression.accept(this));
	  };

	  ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
	    return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
	  };

	  ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
	    return new LiteralPrimitive(literal);
	  };

	  ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
	    return new LiteralArray(this.cloneExpressionArray(literal.elements));
	  };

	  ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
	    return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
	  };

	  ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
	    return new LiteralString(literal.value);
	  };

	  return ExpressionCloner;
	}();

	function cloneExpression(expression) {
	  var visitor = new ExpressionCloner();
	  return expression.accept(visitor);
	}

	var bindingMode = exports.bindingMode = {
	  oneTime: 0,
	  oneWay: 1,
	  twoWay: 2
	};

	var Token = exports.Token = function () {
	  function Token(index, text) {
	    

	    this.index = index;
	    this.text = text;
	  }

	  Token.prototype.withOp = function withOp(op) {
	    this.opKey = op;
	    return this;
	  };

	  Token.prototype.withGetterSetter = function withGetterSetter(key) {
	    this.key = key;
	    return this;
	  };

	  Token.prototype.withValue = function withValue(value) {
	    this.value = value;
	    return this;
	  };

	  Token.prototype.toString = function toString() {
	    return 'Token(' + this.text + ')';
	  };

	  return Token;
	}();

	var Lexer = exports.Lexer = function () {
	  function Lexer() {
	    
	  }

	  Lexer.prototype.lex = function lex(text) {
	    var scanner = new Scanner(text);
	    var tokens = [];
	    var token = scanner.scanToken();

	    while (token) {
	      tokens.push(token);
	      token = scanner.scanToken();
	    }

	    return tokens;
	  };

	  return Lexer;
	}();

	var Scanner = exports.Scanner = function () {
	  function Scanner(input) {
	    

	    this.input = input;
	    this.length = input.length;
	    this.peek = 0;
	    this.index = -1;

	    this.advance();
	  }

	  Scanner.prototype.scanToken = function scanToken() {
	    while (this.peek <= $SPACE) {
	      if (++this.index >= this.length) {
	        this.peek = $EOF;
	        return null;
	      }

	      this.peek = this.input.charCodeAt(this.index);
	    }

	    if (isIdentifierStart(this.peek)) {
	      return this.scanIdentifier();
	    }

	    if (isDigit(this.peek)) {
	      return this.scanNumber(this.index);
	    }

	    var start = this.index;

	    switch (this.peek) {
	      case $PERIOD:
	        this.advance();
	        return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, '.');
	      case $LPAREN:
	      case $RPAREN:
	      case $LBRACE:
	      case $RBRACE:
	      case $LBRACKET:
	      case $RBRACKET:
	      case $COMMA:
	      case $COLON:
	      case $SEMICOLON:
	        return this.scanCharacter(start, String.fromCharCode(this.peek));
	      case $SQ:
	      case $DQ:
	        return this.scanString();
	      case $PLUS:
	      case $MINUS:
	      case $STAR:
	      case $SLASH:
	      case $PERCENT:
	      case $CARET:
	      case $QUESTION:
	        return this.scanOperator(start, String.fromCharCode(this.peek));
	      case $LT:
	      case $GT:
	      case $BANG:
	      case $EQ:
	        return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), '=');
	      case $AMPERSAND:
	        return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
	      case $BAR:
	        return this.scanComplexOperator(start, $BAR, '|', '|');
	      case $NBSP:
	        while (isWhitespace(this.peek)) {
	          this.advance();
	        }

	        return this.scanToken();
	    }

	    var character = String.fromCharCode(this.peek);
	    this.error('Unexpected character [' + character + ']');
	    return null;
	  };

	  Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
	    assert(this.peek === text.charCodeAt(0));
	    this.advance();
	    return new Token(start, text);
	  };

	  Scanner.prototype.scanOperator = function scanOperator(start, text) {
	    assert(this.peek === text.charCodeAt(0));
	    assert(OPERATORS.indexOf(text) !== -1);
	    this.advance();
	    return new Token(start, text).withOp(text);
	  };

	  Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
	    assert(this.peek === one.charCodeAt(0));
	    this.advance();

	    var text = one;

	    if (this.peek === code) {
	      this.advance();
	      text += two;
	    }

	    if (this.peek === code) {
	      this.advance();
	      text += two;
	    }

	    assert(OPERATORS.indexOf(text) !== -1);

	    return new Token(start, text).withOp(text);
	  };

	  Scanner.prototype.scanIdentifier = function scanIdentifier() {
	    assert(isIdentifierStart(this.peek));
	    var start = this.index;

	    this.advance();

	    while (isIdentifierPart(this.peek)) {
	      this.advance();
	    }

	    var text = this.input.substring(start, this.index);
	    var result = new Token(start, text);

	    if (OPERATORS.indexOf(text) !== -1) {
	      result.withOp(text);
	    } else {
	      result.withGetterSetter(text);
	    }

	    return result;
	  };

	  Scanner.prototype.scanNumber = function scanNumber(start) {
	    assert(isDigit(this.peek));
	    var simple = this.index === start;
	    this.advance();

	    while (true) {
	      if (isDigit(this.peek)) {} else if (this.peek === $PERIOD) {
	          simple = false;
	        } else if (isExponentStart(this.peek)) {
	          this.advance();

	          if (isExponentSign(this.peek)) {
	            this.advance();
	          }

	          if (!isDigit(this.peek)) {
	            this.error('Invalid exponent', -1);
	          }

	          simple = false;
	        } else {
	          break;
	        }

	      this.advance();
	    }

	    var text = this.input.substring(start, this.index);
	    var value = simple ? parseInt(text, 10) : parseFloat(text);
	    return new Token(start, text).withValue(value);
	  };

	  Scanner.prototype.scanString = function scanString() {
	    assert(this.peek === $SQ || this.peek === $DQ);

	    var start = this.index;
	    var quote = this.peek;

	    this.advance();

	    var buffer = void 0;
	    var marker = this.index;

	    while (this.peek !== quote) {
	      if (this.peek === $BACKSLASH) {
	        if (!buffer) {
	          buffer = [];
	        }

	        buffer.push(this.input.substring(marker, this.index));
	        this.advance();

	        var _unescaped = void 0;

	        if (this.peek === $u) {
	          var hex = this.input.substring(this.index + 1, this.index + 5);

	          if (!/[A-Z0-9]{4}/.test(hex)) {
	            this.error('Invalid unicode escape [\\u' + hex + ']');
	          }

	          _unescaped = parseInt(hex, 16);

	          for (var _i21 = 0; _i21 < 5; ++_i21) {
	            this.advance();
	          }
	        } else {
	          _unescaped = unescape(this.peek);
	          this.advance();
	        }

	        buffer.push(String.fromCharCode(_unescaped));
	        marker = this.index;
	      } else if (this.peek === $EOF) {
	        this.error('Unterminated quote');
	      } else {
	        this.advance();
	      }
	    }

	    var last = this.input.substring(marker, this.index);
	    this.advance();
	    var text = this.input.substring(start, this.index);

	    var unescaped = last;

	    if (buffer !== null && buffer !== undefined) {
	      buffer.push(last);
	      unescaped = buffer.join('');
	    }

	    return new Token(start, text).withValue(unescaped);
	  };

	  Scanner.prototype.advance = function advance() {
	    if (++this.index >= this.length) {
	      this.peek = $EOF;
	    } else {
	      this.peek = this.input.charCodeAt(this.index);
	    }
	  };

	  Scanner.prototype.error = function error(message) {
	    var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    var position = this.index + offset;
	    throw new Error('Lexer Error: ' + message + ' at column ' + position + ' in expression [' + this.input + ']');
	  };

	  return Scanner;
	}();

	var OPERATORS = ['undefined', 'null', 'true', 'false', '+', '-', '*', '/', '%', '^', '=', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?'];

	var $EOF = 0;
	var $TAB = 9;
	var $LF = 10;
	var $VTAB = 11;
	var $FF = 12;
	var $CR = 13;
	var $SPACE = 32;
	var $BANG = 33;
	var $DQ = 34;
	var $$ = 36;
	var $PERCENT = 37;
	var $AMPERSAND = 38;
	var $SQ = 39;
	var $LPAREN = 40;
	var $RPAREN = 41;
	var $STAR = 42;
	var $PLUS = 43;
	var $COMMA = 44;
	var $MINUS = 45;
	var $PERIOD = 46;
	var $SLASH = 47;
	var $COLON = 58;
	var $SEMICOLON = 59;
	var $LT = 60;
	var $EQ = 61;
	var $GT = 62;
	var $QUESTION = 63;

	var $0 = 48;
	var $9 = 57;

	var $A = 65;
	var $E = 69;
	var $Z = 90;

	var $LBRACKET = 91;
	var $BACKSLASH = 92;
	var $RBRACKET = 93;
	var $CARET = 94;
	var $_ = 95;

	var $a = 97;
	var $e = 101;
	var $f = 102;
	var $n = 110;
	var $r = 114;
	var $t = 116;
	var $u = 117;
	var $v = 118;
	var $z = 122;

	var $LBRACE = 123;
	var $BAR = 124;
	var $RBRACE = 125;
	var $NBSP = 160;

	function isWhitespace(code) {
	  return code >= $TAB && code <= $SPACE || code === $NBSP;
	}

	function isIdentifierStart(code) {
	  return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
	}

	function isIdentifierPart(code) {
	  return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
	}

	function isDigit(code) {
	  return $0 <= code && code <= $9;
	}

	function isExponentStart(code) {
	  return code === $e || code === $E;
	}

	function isExponentSign(code) {
	  return code === $MINUS || code === $PLUS;
	}

	function unescape(code) {
	  switch (code) {
	    case $n:
	      return $LF;
	    case $f:
	      return $FF;
	    case $r:
	      return $CR;
	    case $t:
	      return $TAB;
	    case $v:
	      return $VTAB;
	    default:
	      return code;
	  }
	}

	function assert(condition, message) {
	  if (!condition) {
	    throw message || 'Assertion failed';
	  }
	}

	var EOF = new Token(-1, null);

	var Parser = exports.Parser = function () {
	  function Parser() {
	    

	    this.cache = {};
	    this.lexer = new Lexer();
	  }

	  Parser.prototype.parse = function parse(input) {
	    input = input || '';

	    return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
	  };

	  return Parser;
	}();

	var ParserImplementation = exports.ParserImplementation = function () {
	  function ParserImplementation(lexer, input) {
	    

	    this.index = 0;
	    this.input = input;
	    this.tokens = lexer.lex(input);
	  }

	  ParserImplementation.prototype.parseChain = function parseChain() {
	    var isChain = false;
	    var expressions = [];

	    while (this.optional(';')) {
	      isChain = true;
	    }

	    while (this.index < this.tokens.length) {
	      if (this.peek.text === ')' || this.peek.text === '}' || this.peek.text === ']') {
	        this.error('Unconsumed token ' + this.peek.text);
	      }

	      var expr = this.parseBindingBehavior();
	      expressions.push(expr);

	      while (this.optional(';')) {
	        isChain = true;
	      }

	      if (isChain) {
	        this.error('Multiple expressions are not allowed.');
	      }
	    }

	    return expressions.length === 1 ? expressions[0] : new Chain(expressions);
	  };

	  ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
	    var result = this.parseValueConverter();

	    while (this.optional('&')) {
	      var name = this.peek.text;
	      var args = [];

	      this.advance();

	      while (this.optional(':')) {
	        args.push(this.parseExpression());
	      }

	      result = new BindingBehavior(result, name, args);
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
	    var result = this.parseExpression();

	    while (this.optional('|')) {
	      var name = this.peek.text;
	      var args = [];

	      this.advance();

	      while (this.optional(':')) {
	        args.push(this.parseExpression());
	      }

	      result = new ValueConverter(result, name, args, [result].concat(args));
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseExpression = function parseExpression() {
	    var start = this.peek.index;
	    var result = this.parseConditional();

	    while (this.peek.text === '=') {
	      if (!result.isAssignable) {
	        var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
	        var _expression = this.input.substring(start, end);

	        this.error('Expression ' + _expression + ' is not assignable');
	      }

	      this.expect('=');
	      result = new Assign(result, this.parseConditional());
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseConditional = function parseConditional() {
	    var start = this.peek.index;
	    var result = this.parseLogicalOr();

	    if (this.optional('?')) {
	      var yes = this.parseExpression();

	      if (!this.optional(':')) {
	        var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
	        var _expression2 = this.input.substring(start, end);

	        this.error('Conditional expression ' + _expression2 + ' requires all 3 expressions');
	      }

	      var no = this.parseExpression();
	      result = new Conditional(result, yes, no);
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
	    var result = this.parseLogicalAnd();

	    while (this.optional('||')) {
	      result = new Binary('||', result, this.parseLogicalAnd());
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
	    var result = this.parseEquality();

	    while (this.optional('&&')) {
	      result = new Binary('&&', result, this.parseEquality());
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseEquality = function parseEquality() {
	    var result = this.parseRelational();

	    while (true) {
	      if (this.optional('==')) {
	        result = new Binary('==', result, this.parseRelational());
	      } else if (this.optional('!=')) {
	        result = new Binary('!=', result, this.parseRelational());
	      } else if (this.optional('===')) {
	        result = new Binary('===', result, this.parseRelational());
	      } else if (this.optional('!==')) {
	        result = new Binary('!==', result, this.parseRelational());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parseRelational = function parseRelational() {
	    var result = this.parseAdditive();

	    while (true) {
	      if (this.optional('<')) {
	        result = new Binary('<', result, this.parseAdditive());
	      } else if (this.optional('>')) {
	        result = new Binary('>', result, this.parseAdditive());
	      } else if (this.optional('<=')) {
	        result = new Binary('<=', result, this.parseAdditive());
	      } else if (this.optional('>=')) {
	        result = new Binary('>=', result, this.parseAdditive());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parseAdditive = function parseAdditive() {
	    var result = this.parseMultiplicative();

	    while (true) {
	      if (this.optional('+')) {
	        result = new Binary('+', result, this.parseMultiplicative());
	      } else if (this.optional('-')) {
	        result = new Binary('-', result, this.parseMultiplicative());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
	    var result = this.parsePrefix();

	    while (true) {
	      if (this.optional('*')) {
	        result = new Binary('*', result, this.parsePrefix());
	      } else if (this.optional('%')) {
	        result = new Binary('%', result, this.parsePrefix());
	      } else if (this.optional('/')) {
	        result = new Binary('/', result, this.parsePrefix());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parsePrefix = function parsePrefix() {
	    if (this.optional('+')) {
	      return this.parsePrefix();
	    } else if (this.optional('-')) {
	        return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
	      } else if (this.optional('!')) {
	        return new PrefixNot('!', this.parsePrefix());
	      }

	    return this.parseAccessOrCallMember();
	  };

	  ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
	    var result = this.parsePrimary();

	    while (true) {
	      if (this.optional('.')) {
	        var name = this.peek.text;

	        this.advance();

	        if (this.optional('(')) {
	          var args = this.parseExpressionList(')');
	          this.expect(')');
	          if (result instanceof AccessThis) {
	            result = new CallScope(name, args, result.ancestor);
	          } else {
	            result = new CallMember(result, name, args);
	          }
	        } else {
	          if (result instanceof AccessThis) {
	            result = new AccessScope(name, result.ancestor);
	          } else {
	            result = new AccessMember(result, name);
	          }
	        }
	      } else if (this.optional('[')) {
	        var key = this.parseExpression();
	        this.expect(']');
	        result = new AccessKeyed(result, key);
	      } else if (this.optional('(')) {
	        var _args = this.parseExpressionList(')');
	        this.expect(')');
	        result = new CallFunction(result, _args);
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parsePrimary = function parsePrimary() {
	    if (this.optional('(')) {
	      var result = this.parseExpression();
	      this.expect(')');
	      return result;
	    } else if (this.optional('null')) {
	      return new LiteralPrimitive(null);
	    } else if (this.optional('undefined')) {
	      return new LiteralPrimitive(undefined);
	    } else if (this.optional('true')) {
	      return new LiteralPrimitive(true);
	    } else if (this.optional('false')) {
	      return new LiteralPrimitive(false);
	    } else if (this.optional('[')) {
	      var elements = this.parseExpressionList(']');
	      this.expect(']');
	      return new LiteralArray(elements);
	    } else if (this.peek.text === '{') {
	      return this.parseObject();
	    } else if (this.peek.key !== null && this.peek.key !== undefined) {
	      return this.parseAccessOrCallScope();
	    } else if (this.peek.value !== null && this.peek.value !== undefined) {
	      var value = this.peek.value;
	      this.advance();
	      return value instanceof String || typeof value === 'string' ? new LiteralString(value) : new LiteralPrimitive(value);
	    } else if (this.index >= this.tokens.length) {
	      throw new Error('Unexpected end of expression: ' + this.input);
	    } else {
	      this.error('Unexpected token ' + this.peek.text);
	    }
	  };

	  ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
	    var name = this.peek.key;

	    this.advance();

	    if (name === '$this') {
	      return new AccessThis(0);
	    }

	    var ancestor = 0;
	    while (name === '$parent') {
	      ancestor++;
	      if (this.optional('.')) {
	        name = this.peek.key;
	        this.advance();
	      } else if (this.peek === EOF || this.peek.text === '(' || this.peek.text === '[' || this.peek.text === '}') {
	        return new AccessThis(ancestor);
	      } else {
	        this.error('Unexpected token ' + this.peek.text);
	      }
	    }

	    if (this.optional('(')) {
	      var args = this.parseExpressionList(')');
	      this.expect(')');
	      return new CallScope(name, args, ancestor);
	    }

	    return new AccessScope(name, ancestor);
	  };

	  ParserImplementation.prototype.parseObject = function parseObject() {
	    var keys = [];
	    var values = [];

	    this.expect('{');

	    if (this.peek.text !== '}') {
	      do {
	        var peek = this.peek;
	        var value = peek.value;
	        keys.push(typeof value === 'string' ? value : peek.text);

	        this.advance();
	        if (peek.key && (this.peek.text === ',' || this.peek.text === '}')) {
	          --this.index;
	          values.push(this.parseAccessOrCallScope());
	        } else {
	          this.expect(':');
	          values.push(this.parseExpression());
	        }
	      } while (this.optional(','));
	    }

	    this.expect('}');

	    return new LiteralObject(keys, values);
	  };

	  ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
	    var result = [];

	    if (this.peek.text !== terminator) {
	      do {
	        result.push(this.parseExpression());
	      } while (this.optional(','));
	    }

	    return result;
	  };

	  ParserImplementation.prototype.optional = function optional(text) {
	    if (this.peek.text === text) {
	      this.advance();
	      return true;
	    }

	    return false;
	  };

	  ParserImplementation.prototype.expect = function expect(text) {
	    if (this.peek.text === text) {
	      this.advance();
	    } else {
	      this.error('Missing expected ' + text);
	    }
	  };

	  ParserImplementation.prototype.advance = function advance() {
	    this.index++;
	  };

	  ParserImplementation.prototype.error = function error(message) {
	    var location = this.index < this.tokens.length ? 'at column ' + (this.tokens[this.index].index + 1) + ' in' : 'at the end of the expression';

	    throw new Error('Parser Error: ' + message + ' ' + location + ' [' + this.input + ']');
	  };

	  _createClass(ParserImplementation, [{
	    key: 'peek',
	    get: function get() {
	      return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
	    }
	  }]);

	  return ParserImplementation;
	}();

	var mapProto = Map.prototype;

	function _getMapObserver(taskQueue, map) {
	  return ModifyMapObserver.for(taskQueue, map);
	}

	exports.getMapObserver = _getMapObserver;

	var ModifyMapObserver = function (_ModifyCollectionObse2) {
	  _inherits(ModifyMapObserver, _ModifyCollectionObse2);

	  function ModifyMapObserver(taskQueue, map) {
	    

	    return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
	  }

	  ModifyMapObserver.for = function _for(taskQueue, map) {
	    if (!('__map_observer__' in map)) {
	      var observer = ModifyMapObserver.create(taskQueue, map);
	      Reflect.defineProperty(map, '__map_observer__', { value: observer, enumerable: false, configurable: false });
	    }
	    return map.__map_observer__;
	  };

	  ModifyMapObserver.create = function create(taskQueue, map) {
	    var observer = new ModifyMapObserver(taskQueue, map);

	    var proto = mapProto;
	    if (proto.add !== map.add || proto.delete !== map.delete || proto.clear !== map.clear) {
	      proto = {
	        add: map.add,
	        delete: map.delete,
	        clear: map.clear
	      };
	    }

	    map.set = function () {
	      var hasValue = map.has(arguments[0]);
	      var type = hasValue ? 'update' : 'add';
	      var oldValue = map.get(arguments[0]);
	      var methodCallResult = proto.set.apply(map, arguments);
	      if (!hasValue || oldValue !== map.get(arguments[0])) {
	        observer.addChangeRecord({
	          type: type,
	          object: map,
	          key: arguments[0],
	          oldValue: oldValue
	        });
	      }
	      return methodCallResult;
	    };

	    map.delete = function () {
	      var hasValue = map.has(arguments[0]);
	      var oldValue = map.get(arguments[0]);
	      var methodCallResult = proto.delete.apply(map, arguments);
	      if (hasValue) {
	        observer.addChangeRecord({
	          type: 'delete',
	          object: map,
	          key: arguments[0],
	          oldValue: oldValue
	        });
	      }
	      return methodCallResult;
	    };

	    map.clear = function () {
	      var methodCallResult = proto.clear.apply(map, arguments);
	      observer.addChangeRecord({
	        type: 'clear',
	        object: map
	      });
	      return methodCallResult;
	    };

	    return observer;
	  };

	  return ModifyMapObserver;
	}(ModifyCollectionObserver);

	function findOriginalEventTarget(event) {
	  return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
	}

	function handleDelegatedEvent(event) {
	  var target = findOriginalEventTarget(event);
	  var callback = void 0;

	  while (target && !callback) {
	    if (target.delegatedCallbacks) {
	      callback = target.delegatedCallbacks[event.type];
	    }

	    if (!callback) {
	      target = target.parentNode;
	    }
	  }

	  if (callback) {
	    callback(event);
	  }
	}

	var DelegateHandlerEntry = function () {
	  function DelegateHandlerEntry(eventName) {
	    

	    this.eventName = eventName;
	    this.count = 0;
	  }

	  DelegateHandlerEntry.prototype.increment = function increment() {
	    this.count++;

	    if (this.count === 1) {
	      _aureliaPal.DOM.addEventListener(this.eventName, handleDelegatedEvent, false);
	    }
	  };

	  DelegateHandlerEntry.prototype.decrement = function decrement() {
	    this.count--;

	    if (this.count === 0) {
	      _aureliaPal.DOM.removeEventListener(this.eventName, handleDelegatedEvent);
	    }
	  };

	  return DelegateHandlerEntry;
	}();

	var DefaultEventStrategy = function () {
	  function DefaultEventStrategy() {
	    

	    this.delegatedHandlers = [];
	  }

	  DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, delegate) {
	    var _this22 = this;

	    if (delegate) {
	      var _ret = function () {
	        var delegatedHandlers = _this22.delegatedHandlers;
	        var handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent));
	        var delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});

	        handlerEntry.increment();
	        delegatedCallbacks[targetEvent] = callback;

	        return {
	          v: function v() {
	            handlerEntry.decrement();
	            delegatedCallbacks[targetEvent] = null;
	          }
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    target.addEventListener(targetEvent, callback, false);

	    return function () {
	      target.removeEventListener(targetEvent, callback);
	    };
	  };

	  return DefaultEventStrategy;
	}();

	var EventManager = exports.EventManager = function () {
	  function EventManager() {
	    

	    this.elementHandlerLookup = {};
	    this.eventStrategyLookup = {};

	    this.registerElementConfig({
	      tagName: 'input',
	      properties: {
	        value: ['change', 'input'],
	        checked: ['change', 'input'],
	        files: ['change', 'input']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'textarea',
	      properties: {
	        value: ['change', 'input']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'select',
	      properties: {
	        value: ['change']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'content editable',
	      properties: {
	        value: ['change', 'input', 'blur', 'keyup', 'paste']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'scrollable element',
	      properties: {
	        scrollTop: ['scroll'],
	        scrollLeft: ['scroll']
	      }
	    });

	    this.defaultEventStrategy = new DefaultEventStrategy();
	  }

	  EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
	    var tagName = config.tagName.toLowerCase();
	    var properties = config.properties;
	    var propertyName = void 0;

	    this.elementHandlerLookup[tagName] = {};

	    for (propertyName in properties) {
	      if (properties.hasOwnProperty(propertyName)) {
	        this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
	      }
	    }
	  };

	  EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
	    this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
	  };

	  EventManager.prototype.createElementHandler = function createElementHandler(events) {
	    return {
	      subscribe: function subscribe(target, callback) {
	        events.forEach(function (changeEvent) {
	          target.addEventListener(changeEvent, callback, false);
	        });

	        return function () {
	          events.forEach(function (changeEvent) {
	            target.removeEventListener(changeEvent, callback);
	          });
	        };
	      }
	    };
	  };

	  EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
	    this.elementHandlerLookup[tagName.toLowerCase()] = handler;
	  };

	  EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
	    this.eventStrategyLookup[eventName] = strategy;
	  };

	  EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
	    var tagName = void 0;
	    var lookup = this.elementHandlerLookup;

	    if (target.tagName) {
	      tagName = target.tagName.toLowerCase();

	      if (lookup[tagName] && lookup[tagName][propertyName]) {
	        return lookup[tagName][propertyName];
	      }

	      if (propertyName === 'textContent' || propertyName === 'innerHTML') {
	        return lookup['content editable'].value;
	      }

	      if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
	        return lookup['scrollable element'][propertyName];
	      }
	    }

	    return null;
	  };

	  EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callback, delegate) {
	    return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
	  };

	  return EventManager;
	}();

	var DirtyChecker = exports.DirtyChecker = function () {
	  function DirtyChecker() {
	    

	    this.tracked = [];
	    this.checkDelay = 120;
	  }

	  DirtyChecker.prototype.addProperty = function addProperty(property) {
	    var tracked = this.tracked;

	    tracked.push(property);

	    if (tracked.length === 1) {
	      this.scheduleDirtyCheck();
	    }
	  };

	  DirtyChecker.prototype.removeProperty = function removeProperty(property) {
	    var tracked = this.tracked;
	    tracked.splice(tracked.indexOf(property), 1);
	  };

	  DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
	    var _this23 = this;

	    setTimeout(function () {
	      return _this23.check();
	    }, this.checkDelay);
	  };

	  DirtyChecker.prototype.check = function check() {
	    var tracked = this.tracked;
	    var i = tracked.length;

	    while (i--) {
	      var current = tracked[i];

	      if (current.isDirty()) {
	        current.call();
	      }
	    }

	    if (tracked.length) {
	      this.scheduleDirtyCheck();
	    }
	  };

	  return DirtyChecker;
	}();

	var DirtyCheckProperty = exports.DirtyCheckProperty = (_dec5 = subscriberCollection(), _dec5(_class5 = function () {
	  function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
	    

	    this.dirtyChecker = dirtyChecker;
	    this.obj = obj;
	    this.propertyName = propertyName;
	  }

	  DirtyCheckProperty.prototype.getValue = function getValue() {
	    return this.obj[this.propertyName];
	  };

	  DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
	    this.obj[this.propertyName] = newValue;
	  };

	  DirtyCheckProperty.prototype.call = function call() {
	    var oldValue = this.oldValue;
	    var newValue = this.getValue();

	    this.callSubscribers(newValue, oldValue);

	    this.oldValue = newValue;
	  };

	  DirtyCheckProperty.prototype.isDirty = function isDirty() {
	    return this.oldValue !== this.obj[this.propertyName];
	  };

	  DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.oldValue = this.getValue();
	      this.dirtyChecker.addProperty(this);
	    }
	    this.addSubscriber(context, callable);
	  };

	  DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.dirtyChecker.removeProperty(this);
	    }
	  };

	  return DirtyCheckProperty;
	}()) || _class5);


	var logger = LogManager.getLogger('property-observation');

	var propertyAccessor = exports.propertyAccessor = {
	  getValue: function getValue(obj, propertyName) {
	    return obj[propertyName];
	  },
	  setValue: function setValue(value, obj, propertyName) {
	    obj[propertyName] = value;
	  }
	};

	var PrimitiveObserver = exports.PrimitiveObserver = function () {
	  function PrimitiveObserver(primitive, propertyName) {
	    

	    this.doNotCache = true;

	    this.primitive = primitive;
	    this.propertyName = propertyName;
	  }

	  PrimitiveObserver.prototype.getValue = function getValue() {
	    return this.primitive[this.propertyName];
	  };

	  PrimitiveObserver.prototype.setValue = function setValue() {
	    var type = _typeof(this.primitive);
	    throw new Error('The ' + this.propertyName + ' property of a ' + type + ' (' + this.primitive + ') cannot be assigned.');
	  };

	  PrimitiveObserver.prototype.subscribe = function subscribe() {};

	  PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {};

	  return PrimitiveObserver;
	}();

	var SetterObserver = exports.SetterObserver = (_dec6 = subscriberCollection(), _dec6(_class7 = function () {
	  function SetterObserver(taskQueue, obj, propertyName) {
	    

	    this.taskQueue = taskQueue;
	    this.obj = obj;
	    this.propertyName = propertyName;
	    this.queued = false;
	    this.observing = false;
	  }

	  SetterObserver.prototype.getValue = function getValue() {
	    return this.obj[this.propertyName];
	  };

	  SetterObserver.prototype.setValue = function setValue(newValue) {
	    this.obj[this.propertyName] = newValue;
	  };

	  SetterObserver.prototype.getterValue = function getterValue() {
	    return this.currentValue;
	  };

	  SetterObserver.prototype.setterValue = function setterValue(newValue) {
	    var oldValue = this.currentValue;

	    if (oldValue !== newValue) {
	      if (!this.queued) {
	        this.oldValue = oldValue;
	        this.queued = true;
	        this.taskQueue.queueMicroTask(this);
	      }

	      this.currentValue = newValue;
	    }
	  };

	  SetterObserver.prototype.call = function call() {
	    var oldValue = this.oldValue;
	    var newValue = this.currentValue;

	    this.queued = false;

	    this.callSubscribers(newValue, oldValue);
	  };

	  SetterObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.observing) {
	      this.convertProperty();
	    }
	    this.addSubscriber(context, callable);
	  };

	  SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  SetterObserver.prototype.convertProperty = function convertProperty() {
	    this.observing = true;
	    this.currentValue = this.obj[this.propertyName];
	    this.setValue = this.setterValue;
	    this.getValue = this.getterValue;

	    if (!Reflect.defineProperty(this.obj, this.propertyName, {
	      configurable: true,
	      enumerable: this.propertyName in this.obj ? this.obj.propertyIsEnumerable(this.propertyName) : true,
	      get: this.getValue.bind(this),
	      set: this.setValue.bind(this)
	    })) {
	      logger.warn('Cannot observe property \'' + this.propertyName + '\' of object', this.obj);
	    }
	  };

	  return SetterObserver;
	}()) || _class7);

	var XLinkAttributeObserver = exports.XLinkAttributeObserver = function () {
	  function XLinkAttributeObserver(element, propertyName, attributeName) {
	    

	    this.element = element;
	    this.propertyName = propertyName;
	    this.attributeName = attributeName;
	  }

	  XLinkAttributeObserver.prototype.getValue = function getValue() {
	    return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
	  };

	  XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
	    return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
	  };

	  XLinkAttributeObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
	  };

	  return XLinkAttributeObserver;
	}();

	var dataAttributeAccessor = exports.dataAttributeAccessor = {
	  getValue: function getValue(obj, propertyName) {
	    return obj.getAttribute(propertyName);
	  },
	  setValue: function setValue(value, obj, propertyName) {
	    return obj.setAttribute(propertyName, value);
	  }
	};

	var DataAttributeObserver = exports.DataAttributeObserver = function () {
	  function DataAttributeObserver(element, propertyName) {
	    

	    this.element = element;
	    this.propertyName = propertyName;
	  }

	  DataAttributeObserver.prototype.getValue = function getValue() {
	    return this.element.getAttribute(this.propertyName);
	  };

	  DataAttributeObserver.prototype.setValue = function setValue(newValue) {
	    return this.element.setAttribute(this.propertyName, newValue);
	  };

	  DataAttributeObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
	  };

	  return DataAttributeObserver;
	}();

	var StyleObserver = exports.StyleObserver = function () {
	  function StyleObserver(element, propertyName) {
	    

	    this.element = element;
	    this.propertyName = propertyName;

	    this.styles = null;
	    this.version = 0;
	  }

	  StyleObserver.prototype.getValue = function getValue() {
	    return this.element.style.cssText;
	  };

	  StyleObserver.prototype.setValue = function setValue(newValue) {
	    var styles = this.styles || {};
	    var style = void 0;
	    var version = this.version;

	    if (newValue !== null && newValue !== undefined) {
	      if (newValue instanceof Object) {
	        for (style in newValue) {
	          if (newValue.hasOwnProperty(style)) {
	            styles[style] = version;
	            this.element.style[style] = newValue[style];
	          }
	        }
	      } else if (newValue.length) {
	        var pairs = newValue.split(/(?:;|:(?!\/))\s*/);
	        for (var _i22 = 0, length = pairs.length; _i22 < length; _i22++) {
	          style = pairs[_i22].trim();
	          if (!style) {
	            continue;
	          }

	          styles[style] = version;

	          this.element.style[style] = pairs[++_i22];
	        }
	      }
	    }

	    this.styles = styles;
	    this.version += 1;

	    if (version === 0) {
	      return;
	    }

	    version -= 1;
	    for (style in styles) {
	      if (!styles.hasOwnProperty(style) || styles[style] !== version) {
	        continue;
	      }

	      this.element.style[style] = '';
	    }
	  };

	  StyleObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
	  };

	  return StyleObserver;
	}();

	var ValueAttributeObserver = exports.ValueAttributeObserver = (_dec7 = subscriberCollection(), _dec7(_class8 = function () {
	  function ValueAttributeObserver(element, propertyName, handler) {
	    

	    this.element = element;
	    this.propertyName = propertyName;
	    this.handler = handler;
	    if (propertyName === 'files') {
	      this.setValue = function () {};
	    }
	  }

	  ValueAttributeObserver.prototype.getValue = function getValue() {
	    return this.element[this.propertyName];
	  };

	  ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
	    newValue = newValue === undefined || newValue === null ? '' : newValue;
	    if (this.element[this.propertyName] !== newValue) {
	      this.element[this.propertyName] = newValue;
	      this.notify();
	    }
	  };

	  ValueAttributeObserver.prototype.notify = function notify() {
	    var oldValue = this.oldValue;
	    var newValue = this.getValue();

	    this.callSubscribers(newValue, oldValue);

	    this.oldValue = newValue;
	  };

	  ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.oldValue = this.getValue();
	      this.disposeHandler = this.handler.subscribe(this.element, this.notify.bind(this));
	    }

	    this.addSubscriber(context, callable);
	  };

	  ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.disposeHandler();
	      this.disposeHandler = null;
	    }
	  };

	  return ValueAttributeObserver;
	}()) || _class8);


	var checkedArrayContext = 'CheckedObserver:array';
	var checkedValueContext = 'CheckedObserver:value';

	var CheckedObserver = exports.CheckedObserver = (_dec8 = subscriberCollection(), _dec8(_class9 = function () {
	  function CheckedObserver(element, handler, observerLocator) {
	    

	    this.element = element;
	    this.handler = handler;
	    this.observerLocator = observerLocator;
	  }

	  CheckedObserver.prototype.getValue = function getValue() {
	    return this.value;
	  };

	  CheckedObserver.prototype.setValue = function setValue(newValue) {
	    if (this.value === newValue) {
	      return;
	    }

	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(checkedArrayContext, this);
	      this.arrayObserver = null;
	    }

	    if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
	      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
	      this.arrayObserver.subscribe(checkedArrayContext, this);
	    }

	    this.oldValue = this.value;
	    this.value = newValue;
	    this.synchronizeElement();
	    this.notify();

	    if (!this.initialSync) {
	      this.initialSync = true;
	      this.observerLocator.taskQueue.queueMicroTask(this);
	    }
	  };

	  CheckedObserver.prototype.call = function call(context, splices) {
	    this.synchronizeElement();

	    if (!this.valueObserver && (this.valueObserver = this.element.__observers__.model || this.element.__observers__.value)) {
	      this.valueObserver.subscribe(checkedValueContext, this);
	    }
	  };

	  CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
	    var value = this.value;
	    var element = this.element;
	    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
	    var isRadio = element.type === 'radio';
	    var matcher = element.matcher || function (a, b) {
	      return a === b;
	    };

	    element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === true || !isRadio && Array.isArray(value) && !!value.find(function (item) {
	      return !!matcher(item, elementValue);
	    });
	  };

	  CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
	    var value = this.value;
	    var element = this.element;
	    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
	    var index = void 0;
	    var matcher = element.matcher || function (a, b) {
	      return a === b;
	    };

	    if (element.type === 'checkbox') {
	      if (Array.isArray(value)) {
	        index = value.findIndex(function (item) {
	          return !!matcher(item, elementValue);
	        });
	        if (element.checked && index === -1) {
	          value.push(elementValue);
	        } else if (!element.checked && index !== -1) {
	          value.splice(index, 1);
	        }

	        return;
	      }

	      value = element.checked;
	    } else if (element.checked) {
	      value = elementValue;
	    } else {
	      return;
	    }

	    this.oldValue = this.value;
	    this.value = value;
	    this.notify();
	  };

	  CheckedObserver.prototype.notify = function notify() {
	    var oldValue = this.oldValue;
	    var newValue = this.value;

	    this.callSubscribers(newValue, oldValue);
	  };

	  CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
	    }
	    this.addSubscriber(context, callable);
	  };

	  CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.disposeHandler();
	      this.disposeHandler = null;
	    }
	  };

	  CheckedObserver.prototype.unbind = function unbind() {
	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(checkedArrayContext, this);
	      this.arrayObserver = null;
	    }
	    if (this.valueObserver) {
	      this.valueObserver.unsubscribe(checkedValueContext, this);
	    }
	  };

	  return CheckedObserver;
	}()) || _class9);


	var selectArrayContext = 'SelectValueObserver:array';

	var SelectValueObserver = exports.SelectValueObserver = (_dec9 = subscriberCollection(), _dec9(_class10 = function () {
	  function SelectValueObserver(element, handler, observerLocator) {
	    

	    this.element = element;
	    this.handler = handler;
	    this.observerLocator = observerLocator;
	  }

	  SelectValueObserver.prototype.getValue = function getValue() {
	    return this.value;
	  };

	  SelectValueObserver.prototype.setValue = function setValue(newValue) {
	    if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
	      throw new Error('Only null or Array instances can be bound to a multi-select.');
	    }
	    if (this.value === newValue) {
	      return;
	    }

	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(selectArrayContext, this);
	      this.arrayObserver = null;
	    }

	    if (Array.isArray(newValue)) {
	      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
	      this.arrayObserver.subscribe(selectArrayContext, this);
	    }

	    this.oldValue = this.value;
	    this.value = newValue;
	    this.synchronizeOptions();
	    this.notify();

	    if (!this.initialSync) {
	      this.initialSync = true;
	      this.observerLocator.taskQueue.queueMicroTask(this);
	    }
	  };

	  SelectValueObserver.prototype.call = function call(context, splices) {
	    this.synchronizeOptions();
	  };

	  SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
	    var value = this.value;
	    var clear = void 0;
	    var isArray = void 0;

	    if (value === null || value === undefined) {
	      clear = true;
	    } else if (Array.isArray(value)) {
	      isArray = true;
	    }

	    var options = this.element.options;
	    var i = options.length;
	    var matcher = this.element.matcher || function (a, b) {
	      return a === b;
	    };

	    var _loop = function _loop() {
	      var option = options.item(i);
	      if (clear) {
	        option.selected = false;
	        return 'continue';
	      }
	      var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
	      if (isArray) {
	        option.selected = !!value.find(function (item) {
	          return !!matcher(optionValue, item);
	        });
	        return 'continue';
	      }
	      option.selected = !!matcher(optionValue, value);
	    };

	    while (i--) {
	      var _ret2 = _loop();

	      if (_ret2 === 'continue') continue;
	    }
	  };

	  SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
	    var _this24 = this;

	    var options = this.element.options;
	    var count = 0;
	    var value = [];

	    for (var _i23 = 0, ii = options.length; _i23 < ii; _i23++) {
	      var _option = options.item(_i23);
	      if (!_option.selected) {
	        continue;
	      }
	      value.push(_option.hasOwnProperty('model') ? _option.model : _option.value);
	      count++;
	    }

	    if (this.element.multiple) {
	      if (Array.isArray(this.value)) {
	        var _ret3 = function () {
	          var matcher = _this24.element.matcher || function (a, b) {
	            return a === b;
	          };

	          var i = 0;

	          var _loop2 = function _loop2() {
	            var a = _this24.value[i];
	            if (value.findIndex(function (b) {
	              return matcher(a, b);
	            }) === -1) {
	              _this24.value.splice(i, 1);
	            } else {
	              i++;
	            }
	          };

	          while (i < _this24.value.length) {
	            _loop2();
	          }

	          i = 0;

	          var _loop3 = function _loop3() {
	            var a = value[i];
	            if (_this24.value.findIndex(function (b) {
	              return matcher(a, b);
	            }) === -1) {
	              _this24.value.push(a);
	            }
	            i++;
	          };

	          while (i < value.length) {
	            _loop3();
	          }
	          return {
	            v: void 0
	          };
	        }();

	        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	      }
	    } else {
	        if (count === 0) {
	          value = null;
	        } else {
	          value = value[0];
	        }
	      }

	    if (value !== this.value) {
	      this.oldValue = this.value;
	      this.value = value;
	      this.notify();
	    }
	  };

	  SelectValueObserver.prototype.notify = function notify() {
	    var oldValue = this.oldValue;
	    var newValue = this.value;

	    this.callSubscribers(newValue, oldValue);
	  };

	  SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
	    }
	    this.addSubscriber(context, callable);
	  };

	  SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.disposeHandler();
	      this.disposeHandler = null;
	    }
	  };

	  SelectValueObserver.prototype.bind = function bind() {
	    var _this25 = this;

	    this.domObserver = _aureliaPal.DOM.createMutationObserver(function () {
	      _this25.synchronizeOptions();
	      _this25.synchronizeValue();
	    });
	    this.domObserver.observe(this.element, { childList: true, subtree: true });
	  };

	  SelectValueObserver.prototype.unbind = function unbind() {
	    this.domObserver.disconnect();
	    this.domObserver = null;

	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(selectArrayContext, this);
	      this.arrayObserver = null;
	    }
	  };

	  return SelectValueObserver;
	}()) || _class10);

	var ClassObserver = exports.ClassObserver = function () {
	  function ClassObserver(element) {
	    

	    this.element = element;
	    this.doNotCache = true;
	    this.value = '';
	    this.version = 0;
	  }

	  ClassObserver.prototype.getValue = function getValue() {
	    return this.value;
	  };

	  ClassObserver.prototype.setValue = function setValue(newValue) {
	    var nameIndex = this.nameIndex || {};
	    var version = this.version;
	    var names = void 0;
	    var name = void 0;

	    if (newValue !== null && newValue !== undefined && newValue.length) {
	      names = newValue.split(/\s+/);
	      for (var _i24 = 0, length = names.length; _i24 < length; _i24++) {
	        name = names[_i24];
	        if (name === '') {
	          continue;
	        }
	        nameIndex[name] = version;
	        this.element.classList.add(name);
	      }
	    }

	    this.value = newValue;
	    this.nameIndex = nameIndex;
	    this.version += 1;

	    if (version === 0) {
	      return;
	    }

	    version -= 1;
	    for (name in nameIndex) {
	      if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
	        continue;
	      }
	      this.element.classList.remove(name);
	    }
	  };

	  ClassObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
	  };

	  return ClassObserver;
	}();

	function hasDeclaredDependencies(descriptor) {
	  return !!(descriptor && descriptor.get && descriptor.get.dependencies);
	}

	function declarePropertyDependencies(ctor, propertyName, dependencies) {
	  var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
	  descriptor.get.dependencies = dependencies;
	}

	function computedFrom() {
	  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	    rest[_key] = arguments[_key];
	  }

	  return function (target, key, descriptor) {
	    descriptor.get.dependencies = rest;
	    return descriptor;
	  };
	}

	var ComputedExpression = exports.ComputedExpression = function (_Expression19) {
	  _inherits(ComputedExpression, _Expression19);

	  function ComputedExpression(name, dependencies) {
	    

	    var _this26 = _possibleConstructorReturn(this, _Expression19.call(this));

	    _this26.name = name;
	    _this26.dependencies = dependencies;
	    _this26.isAssignable = true;
	    return _this26;
	  }

	  ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return scope.bindingContext[this.name];
	  };

	  ComputedExpression.prototype.assign = function assign(scope, value) {
	    scope.bindingContext[this.name] = value;
	  };

	  ComputedExpression.prototype.accept = function accept(visitor) {
	    throw new Error('not implemented');
	  };

	  ComputedExpression.prototype.connect = function connect(binding, scope) {
	    var dependencies = this.dependencies;
	    var i = dependencies.length;
	    while (i--) {
	      dependencies[i].connect(binding, scope);
	    }
	  };

	  return ComputedExpression;
	}(Expression);

	function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
	  var dependencies = descriptor.get.dependencies;
	  if (!(dependencies instanceof ComputedExpression)) {
	    var _i25 = dependencies.length;
	    while (_i25--) {
	      dependencies[_i25] = observerLocator.parser.parse(dependencies[_i25]);
	    }
	    dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
	  }

	  var scope = { bindingContext: obj, overrideContext: createOverrideContext(obj) };
	  return new ExpressionObserver(scope, dependencies, observerLocator);
	}

	var elements = exports.elements = {
	  a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
	  ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
	  feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
	  feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
	  feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
	  feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
	  glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
	  image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
	  linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
	  marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
	  mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
	  mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
	  style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
	  switch: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
	  text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
	  tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
	  vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
	};
	var presentationElements = exports.presentationElements = {
	  'a': true,
	  'altGlyph': true,
	  'animate': true,
	  'animateColor': true,
	  'circle': true,
	  'clipPath': true,
	  'defs': true,
	  'ellipse': true,
	  'feBlend': true,
	  'feColorMatrix': true,
	  'feComponentTransfer': true,
	  'feComposite': true,
	  'feConvolveMatrix': true,
	  'feDiffuseLighting': true,
	  'feDisplacementMap': true,
	  'feFlood': true,
	  'feGaussianBlur': true,
	  'feImage': true,
	  'feMerge': true,
	  'feMorphology': true,
	  'feOffset': true,
	  'feSpecularLighting': true,
	  'feTile': true,
	  'feTurbulence': true,
	  'filter': true,
	  'font': true,
	  'foreignObject': true,
	  'g': true,
	  'glyph': true,
	  'glyphRef': true,
	  'image': true,
	  'line': true,
	  'linearGradient': true,
	  'marker': true,
	  'mask': true,
	  'missing-glyph': true,
	  'path': true,
	  'pattern': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'svg': true,
	  'switch': true,
	  'symbol': true,
	  'text': true,
	  'textPath': true,
	  'tref': true,
	  'tspan': true,
	  'use': true
	};

	var presentationAttributes = exports.presentationAttributes = {
	  'alignment-baseline': true,
	  'baseline-shift': true,
	  'clip-path': true,
	  'clip-rule': true,
	  'clip': true,
	  'color-interpolation-filters': true,
	  'color-interpolation': true,
	  'color-profile': true,
	  'color-rendering': true,
	  'color': true,
	  'cursor': true,
	  'direction': true,
	  'display': true,
	  'dominant-baseline': true,
	  'enable-background': true,
	  'fill-opacity': true,
	  'fill-rule': true,
	  'fill': true,
	  'filter': true,
	  'flood-color': true,
	  'flood-opacity': true,
	  'font-family': true,
	  'font-size-adjust': true,
	  'font-size': true,
	  'font-stretch': true,
	  'font-style': true,
	  'font-variant': true,
	  'font-weight': true,
	  'glyph-orientation-horizontal': true,
	  'glyph-orientation-vertical': true,
	  'image-rendering': true,
	  'kerning': true,
	  'letter-spacing': true,
	  'lighting-color': true,
	  'marker-end': true,
	  'marker-mid': true,
	  'marker-start': true,
	  'mask': true,
	  'opacity': true,
	  'overflow': true,
	  'pointer-events': true,
	  'shape-rendering': true,
	  'stop-color': true,
	  'stop-opacity': true,
	  'stroke-dasharray': true,
	  'stroke-dashoffset': true,
	  'stroke-linecap': true,
	  'stroke-linejoin': true,
	  'stroke-miterlimit': true,
	  'stroke-opacity': true,
	  'stroke-width': true,
	  'stroke': true,
	  'text-anchor': true,
	  'text-decoration': true,
	  'text-rendering': true,
	  'unicode-bidi': true,
	  'visibility': true,
	  'word-spacing': true,
	  'writing-mode': true
	};

	function createElement(html) {
	  var div = _aureliaPal.DOM.createElement('div');
	  div.innerHTML = html;
	  return div.firstChild;
	}

	var SVGAnalyzer = exports.SVGAnalyzer = function () {
	  function SVGAnalyzer() {
	    

	    if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph' && elements.altGlyph) {
	      elements.altglyph = elements.altGlyph;
	      delete elements.altGlyph;
	      elements.altglyphdef = elements.altGlyphDef;
	      delete elements.altGlyphDef;
	      elements.altglyphitem = elements.altGlyphItem;
	      delete elements.altGlyphItem;
	      elements.glyphref = elements.glyphRef;
	      delete elements.glyphRef;
	    }
	  }

	  SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
	    return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
	  };

	  return SVGAnalyzer;
	}();

	var ObserverLocator = exports.ObserverLocator = (_temp = _class11 = function () {
	  function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {
	    

	    this.taskQueue = taskQueue;
	    this.eventManager = eventManager;
	    this.dirtyChecker = dirtyChecker;
	    this.svgAnalyzer = svgAnalyzer;
	    this.parser = parser;
	    this.adapters = [];
	    this.logger = LogManager.getLogger('observer-locator');
	  }

	  ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
	    var observersLookup = obj.__observers__;
	    var observer = void 0;

	    if (observersLookup && propertyName in observersLookup) {
	      return observersLookup[propertyName];
	    }

	    observer = this.createPropertyObserver(obj, propertyName);

	    if (!observer.doNotCache) {
	      if (observersLookup === undefined) {
	        observersLookup = this.getOrCreateObserversLookup(obj);
	      }

	      observersLookup[propertyName] = observer;
	    }

	    return observer;
	  };

	  ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
	    return obj.__observers__ || this.createObserversLookup(obj);
	  };

	  ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
	    var value = {};

	    if (!Reflect.defineProperty(obj, '__observers__', {
	      enumerable: false,
	      configurable: false,
	      writable: false,
	      value: value
	    })) {
	      this.logger.warn('Cannot add observers to object', obj);
	    }

	    return value;
	  };

	  ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
	    this.adapters.push(adapter);
	  };

	  ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
	    for (var _i26 = 0, ii = this.adapters.length; _i26 < ii; _i26++) {
	      var adapter = this.adapters[_i26];
	      var observer = adapter.getObserver(obj, propertyName, descriptor);
	      if (observer) {
	        return observer;
	      }
	    }
	    return null;
	  };

	  ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
	    var descriptor = void 0;
	    var handler = void 0;
	    var xlinkResult = void 0;

	    if (!(obj instanceof Object)) {
	      return new PrimitiveObserver(obj, propertyName);
	    }

	    if (obj instanceof _aureliaPal.DOM.Element) {
	      if (propertyName === 'class') {
	        return new ClassObserver(obj);
	      }
	      if (propertyName === 'style' || propertyName === 'css') {
	        return new StyleObserver(obj, propertyName);
	      }
	      handler = this.eventManager.getElementHandler(obj, propertyName);
	      if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
	        return new SelectValueObserver(obj, handler, this);
	      }
	      if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
	        return new CheckedObserver(obj, handler, this);
	      }
	      if (handler) {
	        return new ValueAttributeObserver(obj, propertyName, handler);
	      }
	      xlinkResult = /^xlink:(.+)$/.exec(propertyName);
	      if (xlinkResult) {
	        return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
	      }
	      if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
	        return new DataAttributeObserver(obj, propertyName);
	      }
	    }

	    descriptor = Object.getPropertyDescriptor(obj, propertyName);

	    if (hasDeclaredDependencies(descriptor)) {
	      return createComputedObserver(obj, propertyName, descriptor, this);
	    }

	    var existingGetterOrSetter = void 0;
	    if (descriptor && (existingGetterOrSetter = descriptor.get || descriptor.set)) {
	      if (existingGetterOrSetter.getObserver) {
	        return existingGetterOrSetter.getObserver(obj);
	      }

	      var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
	      if (adapterObserver) {
	        return adapterObserver;
	      }
	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    }

	    if (obj instanceof Array) {
	      if (propertyName === 'length') {
	        return this.getArrayObserver(obj).getLengthObserver();
	      }

	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    } else if (obj instanceof Map) {
	      if (propertyName === 'size') {
	        return this.getMapObserver(obj).getLengthObserver();
	      }

	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    } else if (obj instanceof Set) {
	      if (propertyName === 'size') {
	        return this.getSetObserver(obj).getLengthObserver();
	      }

	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    }

	    return new SetterObserver(this.taskQueue, obj, propertyName);
	  };

	  ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
	    if (obj instanceof _aureliaPal.DOM.Element) {
	      if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css' || propertyName === 'value' && (obj.tagName.toLowerCase() === 'input' || obj.tagName.toLowerCase() === 'select') || propertyName === 'checked' && obj.tagName.toLowerCase() === 'input' || propertyName === 'model' && obj.tagName.toLowerCase() === 'input' || /^xlink:.+$/.exec(propertyName)) {
	        return this.getObserver(obj, propertyName);
	      }
	      if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
	        return dataAttributeAccessor;
	      }
	    }
	    return propertyAccessor;
	  };

	  ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
	    return _getArrayObserver(this.taskQueue, array);
	  };

	  ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
	    return _getMapObserver(this.taskQueue, map);
	  };

	  ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
	    return _getSetObserver(this.taskQueue, set);
	  };

	  return ObserverLocator;
	}(), _class11.inject = [_aureliaTaskQueue.TaskQueue, EventManager, DirtyChecker, SVGAnalyzer, Parser], _temp);

	var ObjectObservationAdapter = exports.ObjectObservationAdapter = function () {
	  function ObjectObservationAdapter() {
	    
	  }

	  ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
	    throw new Error('BindingAdapters must implement getObserver(object, propertyName).');
	  };

	  return ObjectObservationAdapter;
	}();

	var BindingExpression = exports.BindingExpression = function () {
	  function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {
	    

	    this.observerLocator = observerLocator;
	    this.targetProperty = targetProperty;
	    this.sourceExpression = sourceExpression;
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	    this.attribute = attribute;
	    this.discrete = false;
	  }

	  BindingExpression.prototype.createBinding = function createBinding(target) {
	    return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
	  };

	  return BindingExpression;
	}();

	var targetContext = 'Binding:target';

	var Binding = exports.Binding = (_dec10 = connectable(), _dec10(_class12 = function () {
	  function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {
	    

	    this.observerLocator = observerLocator;
	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.targetProperty = targetProperty;
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	  }

	  Binding.prototype.updateTarget = function updateTarget(value) {
	    this.targetObserver.setValue(value, this.target, this.targetProperty);
	  };

	  Binding.prototype.updateSource = function updateSource(value) {
	    this.sourceExpression.assign(this.source, value, this.lookupFunctions);
	  };

	  Binding.prototype.call = function call(context, newValue, oldValue) {
	    if (!this.isBound) {
	      return;
	    }
	    if (context === sourceContext) {
	      oldValue = this.targetObserver.getValue(this.target, this.targetProperty);
	      newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
	      if (newValue !== oldValue) {
	        this.updateTarget(newValue);
	      }
	      if (this.mode !== bindingMode.oneTime) {
	        this._version++;
	        this.sourceExpression.connect(this, this.source);
	        this.unobserve(false);
	      }
	      return;
	    }
	    if (context === targetContext) {
	      if (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions)) {
	        this.updateSource(newValue);
	      }
	      return;
	    }
	    throw new Error('Unexpected call context ' + context);
	  };

	  Binding.prototype.bind = function bind(source) {
	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }

	    var mode = this.mode;
	    if (!this.targetObserver) {
	      var method = mode === bindingMode.twoWay ? 'getObserver' : 'getAccessor';
	      this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
	    }

	    if ('bind' in this.targetObserver) {
	      this.targetObserver.bind();
	    }
	    var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
	    this.updateTarget(value);

	    if (mode === bindingMode.oneWay) {
	      enqueueBindingConnect(this);
	    } else if (mode === bindingMode.twoWay) {
	      this.sourceExpression.connect(this, source);
	      this.targetObserver.subscribe(targetContext, this);
	    }
	  };

	  Binding.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    if ('unbind' in this.targetObserver) {
	      this.targetObserver.unbind();
	    }
	    if (this.targetObserver.unsubscribe) {
	      this.targetObserver.unsubscribe(targetContext, this);
	    }
	    this.unobserve(true);
	  };

	  Binding.prototype.connect = function connect(evaluate) {
	    if (!this.isBound) {
	      return;
	    }
	    if (evaluate) {
	      var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
	      this.updateTarget(value);
	    }
	    this.sourceExpression.connect(this, this.source);
	  };

	  return Binding;
	}()) || _class12);

	var CallExpression = exports.CallExpression = function () {
	  function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {
	    

	    this.observerLocator = observerLocator;
	    this.targetProperty = targetProperty;
	    this.sourceExpression = sourceExpression;
	    this.lookupFunctions = lookupFunctions;
	  }

	  CallExpression.prototype.createBinding = function createBinding(target) {
	    return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
	  };

	  return CallExpression;
	}();

	var Call = exports.Call = function () {
	  function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {
	    

	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.targetProperty = observerLocator.getObserver(target, targetProperty);
	    this.lookupFunctions = lookupFunctions;
	  }

	  Call.prototype.callSource = function callSource($event) {
	    var overrideContext = this.source.overrideContext;
	    Object.assign(overrideContext, $event);
	    overrideContext.$event = $event;
	    var mustEvaluate = true;
	    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
	    delete overrideContext.$event;
	    for (var prop in $event) {
	      delete overrideContext[prop];
	    }
	    return result;
	  };

	  Call.prototype.bind = function bind(source) {
	    var _this27 = this;

	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }
	    this.targetProperty.setValue(function ($event) {
	      return _this27.callSource($event);
	    });
	  };

	  Call.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    this.targetProperty.setValue(null);
	  };

	  return Call;
	}();

	var ValueConverterResource = exports.ValueConverterResource = function () {
	  function ValueConverterResource(name) {
	    

	    this.name = name;
	  }

	  ValueConverterResource.convention = function convention(name) {
	    if (name.endsWith('ValueConverter')) {
	      return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
	    }
	  };

	  ValueConverterResource.prototype.initialize = function initialize(container, target) {
	    this.instance = container.get(target);
	  };

	  ValueConverterResource.prototype.register = function register(registry, name) {
	    registry.registerValueConverter(name || this.name, this.instance);
	  };

	  ValueConverterResource.prototype.load = function load(container, target) {};

	  return ValueConverterResource;
	}();

	function valueConverter(nameOrTarget) {
	  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
	    return function (target) {
	      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(nameOrTarget), target);
	    };
	  }

	  _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(), nameOrTarget);
	}

	var BindingBehaviorResource = exports.BindingBehaviorResource = function () {
	  function BindingBehaviorResource(name) {
	    

	    this.name = name;
	  }

	  BindingBehaviorResource.convention = function convention(name) {
	    if (name.endsWith('BindingBehavior')) {
	      return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
	    }
	  };

	  BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
	    this.instance = container.get(target);
	  };

	  BindingBehaviorResource.prototype.register = function register(registry, name) {
	    registry.registerBindingBehavior(name || this.name, this.instance);
	  };

	  BindingBehaviorResource.prototype.load = function load(container, target) {};

	  return BindingBehaviorResource;
	}();

	function bindingBehavior(nameOrTarget) {
	  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
	    return function (target) {
	      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(nameOrTarget), target);
	    };
	  }

	  _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(), nameOrTarget);
	}

	var ListenerExpression = exports.ListenerExpression = function () {
	  function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault, lookupFunctions) {
	    

	    this.eventManager = eventManager;
	    this.targetEvent = targetEvent;
	    this.sourceExpression = sourceExpression;
	    this.delegate = delegate;
	    this.discrete = true;
	    this.preventDefault = preventDefault;
	    this.lookupFunctions = lookupFunctions;
	  }

	  ListenerExpression.prototype.createBinding = function createBinding(target) {
	    return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
	  };

	  return ListenerExpression;
	}();

	var Listener = exports.Listener = function () {
	  function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault, lookupFunctions) {
	    

	    this.eventManager = eventManager;
	    this.targetEvent = targetEvent;
	    this.delegate = delegate;
	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.preventDefault = preventDefault;
	    this.lookupFunctions = lookupFunctions;
	  }

	  Listener.prototype.callSource = function callSource(event) {
	    var overrideContext = this.source.overrideContext;
	    overrideContext.$event = event;
	    var mustEvaluate = true;
	    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
	    delete overrideContext.$event;
	    if (result !== true && this.preventDefault) {
	      event.preventDefault();
	    }
	    return result;
	  };

	  Listener.prototype.bind = function bind(source) {
	    var _this28 = this;

	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }
	    this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function (event) {
	      return _this28.callSource(event);
	    }, this.delegate);
	  };

	  Listener.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    this._disposeListener();
	    this._disposeListener = null;
	  };

	  return Listener;
	}();

	function getAU(element) {
	  var au = element.au;

	  if (au === undefined) {
	    throw new Error('No Aurelia APIs are defined for the referenced element.');
	  }

	  return au;
	}

	var NameExpression = exports.NameExpression = function () {
	  function NameExpression(sourceExpression, apiName, lookupFunctions) {
	    

	    this.sourceExpression = sourceExpression;
	    this.apiName = apiName;
	    this.lookupFunctions = lookupFunctions;
	    this.discrete = true;
	  }

	  NameExpression.prototype.createBinding = function createBinding(target) {
	    return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
	  };

	  NameExpression.locateAPI = function locateAPI(element, apiName) {
	    switch (apiName) {
	      case 'element':
	        return element;
	      case 'controller':
	        return getAU(element).controller;
	      case 'view-model':
	        return getAU(element).controller.viewModel;
	      case 'view':
	        return getAU(element).controller.view;
	      default:
	        var target = getAU(element)[apiName];

	        if (target === undefined) {
	          throw new Error('Attempted to reference "' + apiName + '", but it was not found amongst the target\'s API.');
	        }

	        return target.viewModel;
	    }
	  };

	  return NameExpression;
	}();

	var NameBinder = function () {
	  function NameBinder(sourceExpression, target, lookupFunctions) {
	    

	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.lookupFunctions = lookupFunctions;
	  }

	  NameBinder.prototype.bind = function bind(source) {
	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;
	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }
	    this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
	  };

	  NameBinder.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    this.sourceExpression.assign(this.source, null, this.lookupFunctions);
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	  };

	  return NameBinder;
	}();

	var LookupFunctions = {
	  bindingBehaviors: function bindingBehaviors(name) {
	    return null;
	  },
	  valueConverters: function valueConverters(name) {
	    return null;
	  }
	};

	var BindingEngine = exports.BindingEngine = (_temp2 = _class13 = function () {
	  function BindingEngine(observerLocator, parser) {
	    

	    this.observerLocator = observerLocator;
	    this.parser = parser;
	  }

	  BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
	    var mode = arguments.length <= 2 || arguments[2] === undefined ? bindingMode.oneWay : arguments[2];
	    var lookupFunctions = arguments.length <= 3 || arguments[3] === undefined ? LookupFunctions : arguments[3];

	    return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
	  };

	  BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
	    var _this29 = this;

	    return {
	      subscribe: function subscribe(callback) {
	        var observer = _this29.observerLocator.getObserver(obj, propertyName);
	        observer.subscribe(callback);
	        return {
	          dispose: function dispose() {
	            return observer.unsubscribe(callback);
	          }
	        };
	      }
	    };
	  };

	  BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
	    var _this30 = this;

	    return {
	      subscribe: function subscribe(callback) {
	        var observer = void 0;
	        if (collection instanceof Array) {
	          observer = _this30.observerLocator.getArrayObserver(collection);
	        } else if (collection instanceof Map) {
	          observer = _this30.observerLocator.getMapObserver(collection);
	        } else if (collection instanceof Set) {
	          observer = _this30.observerLocator.getSetObserver(collection);
	        } else {
	          throw new Error('collection must be an instance of Array, Map or Set.');
	        }
	        observer.subscribe(callback);
	        return {
	          dispose: function dispose() {
	            return observer.unsubscribe(callback);
	          }
	        };
	      }
	    };
	  };

	  BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
	    var scope = { bindingContext: bindingContext, overrideContext: createOverrideContext(bindingContext) };
	    return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, LookupFunctions);
	  };

	  BindingEngine.prototype.parseExpression = function parseExpression(expression) {
	    return this.parser.parse(expression);
	  };

	  BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
	    this.observerLocator.addAdapter(adapter);
	  };

	  return BindingEngine;
	}(), _class13.inject = [ObserverLocator, Parser], _temp2);


	var setProto = Set.prototype;

	function _getSetObserver(taskQueue, set) {
	  return ModifySetObserver.for(taskQueue, set);
	}

	exports.getSetObserver = _getSetObserver;

	var ModifySetObserver = function (_ModifyCollectionObse3) {
	  _inherits(ModifySetObserver, _ModifyCollectionObse3);

	  function ModifySetObserver(taskQueue, set) {
	    

	    return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
	  }

	  ModifySetObserver.for = function _for(taskQueue, set) {
	    if (!('__set_observer__' in set)) {
	      var observer = ModifySetObserver.create(taskQueue, set);
	      Reflect.defineProperty(set, '__set_observer__', { value: observer, enumerable: false, configurable: false });
	    }
	    return set.__set_observer__;
	  };

	  ModifySetObserver.create = function create(taskQueue, set) {
	    var observer = new ModifySetObserver(taskQueue, set);

	    var proto = setProto;
	    if (proto.add !== set.add || proto.delete !== set.delete || proto.clear !== set.clear) {
	      proto = {
	        add: set.add,
	        delete: set.delete,
	        clear: set.clear
	      };
	    }

	    set.add = function () {
	      var type = 'add';
	      var oldSize = set.size;
	      var methodCallResult = proto.add.apply(set, arguments);
	      var hasValue = set.size === oldSize;
	      if (!hasValue) {
	        observer.addChangeRecord({
	          type: type,
	          object: set,
	          value: Array.from(set).pop()
	        });
	      }
	      return methodCallResult;
	    };

	    set.delete = function () {
	      var hasValue = set.has(arguments[0]);
	      var methodCallResult = proto.delete.apply(set, arguments);
	      if (hasValue) {
	        observer.addChangeRecord({
	          type: 'delete',
	          object: set,
	          value: arguments[0]
	        });
	      }
	      return methodCallResult;
	    };

	    set.clear = function () {
	      var methodCallResult = proto.clear.apply(set, arguments);
	      observer.addChangeRecord({
	        type: 'clear',
	        object: set
	      });
	      return methodCallResult;
	    };

	    return observer;
	  };

	  return ModifySetObserver;
	}(ModifyCollectionObserver);

	function observable(targetOrConfig, key, descriptor) {
	  var deco = function deco(target, key2, descriptor2) {
	    var innerPropertyName = '_' + key2;
	    var callbackName = targetOrConfig && targetOrConfig.changeHandler || key2 + 'Changed';

	    var babel = descriptor2 !== undefined;

	    if (babel) {
	      if (typeof descriptor2.initializer === 'function') {
	        target[innerPropertyName] = descriptor2.initializer();
	      }
	    } else {
	      descriptor2 = {};
	    }

	    delete descriptor2.writable;
	    delete descriptor2.initializer;

	    descriptor2.get = function () {
	      return this[innerPropertyName];
	    };
	    descriptor2.set = function (newValue) {
	      var oldValue = this[innerPropertyName];
	      this[innerPropertyName] = newValue;
	      if (this[callbackName]) {
	        this[callbackName](newValue, oldValue);
	      }
	    };

	    descriptor2.get.dependencies = [innerPropertyName];

	    if (!babel) {
	      Reflect.defineProperty(target, key2, descriptor2);
	    }
	  };

	  if (key) {
	    var target = targetOrConfig;
	    targetOrConfig = null;
	    return deco(target, key, descriptor);
	  }

	  return deco;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLogger = getLogger;
	exports.addAppender = addAppender;
	exports.setLevel = setLevel;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var logLevel = exports.logLevel = {
	  none: 0,
	  error: 1,
	  warn: 2,
	  info: 3,
	  debug: 4
	};

	var loggers = {};
	var currentLevel = logLevel.none;
	var appenders = [];
	var slice = Array.prototype.slice;
	var loggerConstructionKey = {};

	function log(logger, level, args) {
	  var i = appenders.length;
	  var current = void 0;

	  args = slice.call(args);
	  args.unshift(logger);

	  while (i--) {
	    current = appenders[i];
	    current[level].apply(current, args);
	  }
	}

	function debug() {
	  if (currentLevel < 4) {
	    return;
	  }

	  log(this, 'debug', arguments);
	}

	function info() {
	  if (currentLevel < 3) {
	    return;
	  }

	  log(this, 'info', arguments);
	}

	function warn() {
	  if (currentLevel < 2) {
	    return;
	  }

	  log(this, 'warn', arguments);
	}

	function error() {
	  if (currentLevel < 1) {
	    return;
	  }

	  log(this, 'error', arguments);
	}

	function connectLogger(logger) {
	  logger.debug = debug;
	  logger.info = info;
	  logger.warn = warn;
	  logger.error = error;
	}

	function createLogger(id) {
	  var logger = new Logger(id, loggerConstructionKey);

	  if (appenders.length) {
	    connectLogger(logger);
	  }

	  return logger;
	}

	function getLogger(id) {
	  return loggers[id] || (loggers[id] = createLogger(id));
	}

	function addAppender(appender) {
	  appenders.push(appender);

	  if (appenders.length === 1) {
	    for (var key in loggers) {
	      connectLogger(loggers[key]);
	    }
	  }
	}

	function setLevel(level) {
	  currentLevel = level;
	}

	var Logger = exports.Logger = function () {
	  function Logger(id, key) {
	    _classCallCheck(this, Logger);

	    if (key !== loggerConstructionKey) {
	      throw new Error('Cannot instantiate "Logger". Use "getLogger" instead.');
	    }

	    this.id = id;
	  }

	  Logger.prototype.debug = function debug(message) {};

	  Logger.prototype.info = function info(message) {};

	  Logger.prototype.warn = function warn(message) {};

	  Logger.prototype.error = function error(message) {};

	  return Logger;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TaskQueue = undefined;

	var _aureliaPal = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var hasSetImmediate = typeof setImmediate === 'function';

	function makeRequestFlushFromMutationObserver(flush) {
	  var toggle = 1;
	  var observer = _aureliaPal.DOM.createMutationObserver(flush);
	  var node = _aureliaPal.DOM.createTextNode('');
	  observer.observe(node, { characterData: true });
	  return function requestFlush() {
	    toggle = -toggle;
	    node.data = toggle;
	  };
	}

	function makeRequestFlushFromTimer(flush) {
	  return function requestFlush() {
	    var timeoutHandle = setTimeout(handleFlushTimer, 0);

	    var intervalHandle = setInterval(handleFlushTimer, 50);
	    function handleFlushTimer() {
	      clearTimeout(timeoutHandle);
	      clearInterval(intervalHandle);
	      flush();
	    }
	  };
	}

	function onError(error, task) {
	  if ('onError' in task) {
	    task.onError(error);
	  } else if (hasSetImmediate) {
	    setImmediate(function () {
	      throw error;
	    });
	  } else {
	    setTimeout(function () {
	      throw error;
	    }, 0);
	  }
	}

	var TaskQueue = exports.TaskQueue = function () {
	  function TaskQueue() {
	    var _this = this;

	    _classCallCheck(this, TaskQueue);

	    this.microTaskQueue = [];
	    this.microTaskQueueCapacity = 1024;
	    this.taskQueue = [];

	    if (_aureliaPal.FEATURE.mutationObserver) {
	      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
	        return _this.flushMicroTaskQueue();
	      });
	    } else {
	      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
	        return _this.flushMicroTaskQueue();
	      });
	    }

	    this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
	      return _this.flushTaskQueue();
	    });
	  }

	  TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
	    if (this.microTaskQueue.length < 1) {
	      this.requestFlushMicroTaskQueue();
	    }

	    this.microTaskQueue.push(task);
	  };

	  TaskQueue.prototype.queueTask = function queueTask(task) {
	    if (this.taskQueue.length < 1) {
	      this.requestFlushTaskQueue();
	    }

	    this.taskQueue.push(task);
	  };

	  TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
	    var queue = this.taskQueue;
	    var index = 0;
	    var task = void 0;

	    this.taskQueue = [];

	    try {
	      while (index < queue.length) {
	        task = queue[index];
	        task.call();
	        index++;
	      }
	    } catch (error) {
	      onError(error, task);
	    }
	  };

	  TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
	    var queue = this.microTaskQueue;
	    var capacity = this.microTaskQueueCapacity;
	    var index = 0;
	    var task = void 0;

	    try {
	      while (index < queue.length) {
	        task = queue[index];
	        task.call();
	        index++;

	        if (index > capacity) {
	          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	            queue[scan] = queue[scan + index];
	          }

	          queue.length -= index;
	          index = 0;
	        }
	      }
	    } catch (error) {
	      onError(error, task);
	    }

	    queue.length = 0;
	  };

	  return TaskQueue;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TemplatingEngine = exports.ElementConfigResource = exports.CompositionEngine = exports.HtmlBehaviorResource = exports.BindableProperty = exports.BehaviorPropertyObserver = exports.Controller = exports.ViewEngine = exports.ModuleAnalyzer = exports.ResourceDescription = exports.ResourceModule = exports.ViewCompiler = exports.ViewFactory = exports.BoundViewFactory = exports.ViewSlot = exports._ContentSelector = exports.View = exports.ViewResources = exports.BindingLanguage = exports.ViewLocator = exports.InlineViewStrategy = exports.TemplateRegistryViewStrategy = exports.NoViewStrategy = exports.ConventionalViewStrategy = exports.RelativeViewStrategy = exports.viewStrategy = exports.TargetInstruction = exports.BehaviorInstruction = exports.ViewCompileInstruction = exports.ResourceLoadContext = exports.ElementEvents = exports.CompositionTransaction = exports.Animator = exports.animationEvent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class3, _temp, _dec, _class4, _dec2, _class5, _dec3, _class6, _dec4, _class7, _dec5, _class8, _class9, _temp2, _class11, _dec6, _class13, _dec7, _class14, _dec8, _class16, _dec9, _class17, _dec10, _class18;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports._hyphenate = _hyphenate;
	exports.children = children;
	exports.child = child;
	exports.resource = resource;
	exports.behavior = behavior;
	exports.customElement = customElement;
	exports.customAttribute = customAttribute;
	exports.templateController = templateController;
	exports.bindable = bindable;
	exports.dynamicOptions = dynamicOptions;
	exports.useShadowDOM = useShadowDOM;
	exports.processAttributes = processAttributes;
	exports.processContent = processContent;
	exports.containerless = containerless;
	exports.useViewStrategy = useViewStrategy;
	exports.useView = useView;
	exports.inlineView = inlineView;
	exports.noView = noView;
	exports.elementConfig = elementConfig;

	var _aureliaLogging = __webpack_require__(9);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaMetadata = __webpack_require__(6);

	var _aureliaPath = __webpack_require__(12);

	var _aureliaLoader = __webpack_require__(13);

	var _aureliaBinding = __webpack_require__(8);

	var _aureliaDependencyInjection = __webpack_require__(5);

	var _aureliaTaskQueue = __webpack_require__(10);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var animationEvent = exports.animationEvent = {
	  enterBegin: 'animation:enter:begin',
	  enterActive: 'animation:enter:active',
	  enterDone: 'animation:enter:done',
	  enterTimeout: 'animation:enter:timeout',

	  leaveBegin: 'animation:leave:begin',
	  leaveActive: 'animation:leave:active',
	  leaveDone: 'animation:leave:done',
	  leaveTimeout: 'animation:leave:timeout',

	  staggerNext: 'animation:stagger:next',

	  removeClassBegin: 'animation:remove-class:begin',
	  removeClassActive: 'animation:remove-class:active',
	  removeClassDone: 'animation:remove-class:done',
	  removeClassTimeout: 'animation:remove-class:timeout',

	  addClassBegin: 'animation:add-class:begin',
	  addClassActive: 'animation:add-class:active',
	  addClassDone: 'animation:add-class:done',
	  addClassTimeout: 'animation:add-class:timeout',

	  animateBegin: 'animation:animate:begin',
	  animateActive: 'animation:animate:active',
	  animateDone: 'animation:animate:done',
	  animateTimeout: 'animation:animate:timeout',

	  sequenceBegin: 'animation:sequence:begin',
	  sequenceDone: 'animation:sequence:done'
	};

	var Animator = exports.Animator = function () {
	  function Animator() {
	    _classCallCheck(this, Animator);
	  }

	  Animator.prototype.enter = function enter(element) {
	    return Promise.resolve(false);
	  };

	  Animator.prototype.leave = function leave(element) {
	    return Promise.resolve(false);
	  };

	  Animator.prototype.removeClass = function removeClass(element, className) {
	    element.classList.remove(className);
	    return Promise.resolve(false);
	  };

	  Animator.prototype.addClass = function addClass(element, className) {
	    element.classList.add(className);
	    return Promise.resolve(false);
	  };

	  Animator.prototype.animate = function animate(element, className) {
	    return Promise.resolve(false);
	  };

	  Animator.prototype.runSequence = function runSequence(animations) {};

	  Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

	  Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

	  return Animator;
	}();

	var CompositionTransaction = exports.CompositionTransaction = function () {
	  function CompositionTransaction() {
	    _classCallCheck(this, CompositionTransaction);

	    this._ownershipToken = null;
	    this._compositionCount = 0;
	  }

	  CompositionTransaction.prototype.tryCapture = function tryCapture() {
	    if (this._ownershipToken !== null) {
	      return null;
	    }

	    return this._ownershipToken = this._createOwnershipToken();
	  };

	  CompositionTransaction.prototype.enlist = function enlist() {
	    var that = this;

	    that._compositionCount++;

	    return {
	      done: function done() {
	        that._compositionCount--;
	        that._tryCompleteTransaction();
	      }
	    };
	  };

	  CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
	    if (this._compositionCount <= 0) {
	      this._compositionCount = 0;

	      if (this._ownershipToken !== null) {
	        var capture = this._ownershipToken;
	        this._ownershipToken = null;
	        capture._resolve();
	      }
	    }
	  };

	  CompositionTransaction.prototype._createOwnershipToken = function _createOwnershipToken() {
	    var _this = this;

	    var token = {};
	    var promise = new Promise(function (resolve, reject) {
	      token._resolve = resolve;
	    });

	    token.waitForCompositionComplete = function () {
	      _this._tryCompleteTransaction();
	      return promise;
	    };

	    return token;
	  };

	  return CompositionTransaction;
	}();

	var capitalMatcher = /([A-Z])/g;

	function addHyphenAndLower(char) {
	  return '-' + char.toLowerCase();
	}

	function _hyphenate(name) {
	  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
	}

	var ElementEvents = exports.ElementEvents = function () {
	  function ElementEvents(element) {
	    _classCallCheck(this, ElementEvents);

	    this.element = element;
	    this.subscriptions = {};
	  }

	  ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
	    this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [];
	    this.subscriptions[handler.eventName].push(handler);
	  };

	  ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
	    var index = void 0;
	    var subscriptions = this.subscriptions[handler.eventName];
	    if (subscriptions) {
	      index = subscriptions.indexOf(handler);
	      if (index > -1) {
	        subscriptions.splice(index, 1);
	      }
	    }
	    return handler;
	  };

	  ElementEvents.prototype.publish = function publish(eventName) {
	    var detail = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	    var cancelable = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

	    var event = _aureliaPal.DOM.createCustomEvent(eventName, { cancelable: cancelable, bubbles: bubbles, detail: detail });
	    this.element.dispatchEvent(event);
	  };

	  ElementEvents.prototype.subscribe = function subscribe(eventName, handler) {
	    var _this2 = this;

	    var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    if (handler && typeof handler === 'function') {
	      handler.eventName = eventName;
	      handler.handler = handler;
	      handler.bubbles = bubbles;
	      handler.dispose = function () {
	        _this2.element.removeEventListener(eventName, handler, bubbles);
	        _this2._dequeueHandler(handler);
	      };
	      this.element.addEventListener(eventName, handler, bubbles);
	      this._enqueueHandler(handler);
	      return handler;
	    }
	  };

	  ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler) {
	    var _this3 = this;

	    var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    if (handler && typeof handler === 'function') {
	      var _ret = function () {
	        var _handler = function _handler(event) {
	          handler(event);
	          _handler.dispose();
	        };
	        return {
	          v: _this3.subscribe(eventName, _handler, bubbles)
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  ElementEvents.prototype.dispose = function dispose(eventName) {
	    if (eventName && typeof eventName === 'string') {
	      var subscriptions = this.subscriptions[eventName];
	      if (subscriptions) {
	        while (subscriptions.length) {
	          var subscription = subscriptions.pop();
	          if (subscription) {
	            subscription.dispose();
	          }
	        }
	      }
	    } else {
	      this.disposeAll();
	    }
	  };

	  ElementEvents.prototype.disposeAll = function disposeAll() {
	    for (var key in this.subscriptions) {
	      this.dispose(key);
	    }
	  };

	  return ElementEvents;
	}();

	var ResourceLoadContext = exports.ResourceLoadContext = function () {
	  function ResourceLoadContext() {
	    _classCallCheck(this, ResourceLoadContext);

	    this.dependencies = {};
	  }

	  ResourceLoadContext.prototype.addDependency = function addDependency(url) {
	    this.dependencies[url] = true;
	  };

	  ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
	    return url in this.dependencies;
	  };

	  return ResourceLoadContext;
	}();

	var ViewCompileInstruction = exports.ViewCompileInstruction = function ViewCompileInstruction() {
	  var targetShadowDOM = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	  var compileSurrogate = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  _classCallCheck(this, ViewCompileInstruction);

	  this.targetShadowDOM = targetShadowDOM;
	  this.compileSurrogate = compileSurrogate;
	  this.associatedModuleId = null;
	};

	ViewCompileInstruction.normal = new ViewCompileInstruction();

	var BehaviorInstruction = exports.BehaviorInstruction = function () {
	  BehaviorInstruction.enhance = function enhance() {
	    var instruction = new BehaviorInstruction();
	    instruction.enhance = true;
	    return instruction;
	  };

	  BehaviorInstruction.unitTest = function unitTest(type, attributes) {
	    var instruction = new BehaviorInstruction();
	    instruction.type = type;
	    instruction.attributes = attributes || {};
	    return instruction;
	  };

	  BehaviorInstruction.element = function element(node, type) {
	    var instruction = new BehaviorInstruction();
	    instruction.type = type;
	    instruction.attributes = {};
	    instruction.anchorIsContainer = !(node.hasAttribute('containerless') || type.containerless);
	    instruction.initiatedByBehavior = true;
	    return instruction;
	  };

	  BehaviorInstruction.attribute = function attribute(attrName, type) {
	    var instruction = new BehaviorInstruction();
	    instruction.attrName = attrName;
	    instruction.type = type || null;
	    instruction.attributes = {};
	    return instruction;
	  };

	  BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
	    var instruction = new BehaviorInstruction();
	    instruction.host = host;
	    instruction.viewModel = viewModel;
	    instruction.viewFactory = viewFactory;
	    instruction.inheritBindingContext = true;
	    return instruction;
	  };

	  function BehaviorInstruction() {
	    _classCallCheck(this, BehaviorInstruction);

	    this.initiatedByBehavior = false;
	    this.enhance = false;
	    this.partReplacements = null;
	    this.viewFactory = null;
	    this.originalAttrName = null;
	    this.skipContentProcessing = false;
	    this.contentFactory = null;
	    this.viewModel = null;
	    this.anchorIsContainer = false;
	    this.host = null;
	    this.attributes = null;
	    this.type = null;
	    this.attrName = null;
	    this.inheritBindingContext = false;
	  }

	  return BehaviorInstruction;
	}();

	BehaviorInstruction.normal = new BehaviorInstruction();

	var TargetInstruction = exports.TargetInstruction = (_temp = _class3 = function () {
	  TargetInstruction.contentSelector = function contentSelector(node, parentInjectorId) {
	    var instruction = new TargetInstruction();
	    instruction.parentInjectorId = parentInjectorId;
	    instruction.contentSelector = true;
	    instruction.selector = node.getAttribute('select');
	    return instruction;
	  };

	  TargetInstruction.contentExpression = function contentExpression(expression) {
	    var instruction = new TargetInstruction();
	    instruction.contentExpression = expression;
	    return instruction;
	  };

	  TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
	    var instruction = new TargetInstruction();
	    instruction.parentInjectorId = parentInjectorId;
	    instruction.expressions = TargetInstruction.noExpressions;
	    instruction.behaviorInstructions = [liftingInstruction];
	    instruction.viewFactory = liftingInstruction.viewFactory;
	    instruction.providers = [liftingInstruction.type.target];
	    instruction.lifting = true;
	    return instruction;
	  };

	  TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
	    var instruction = new TargetInstruction();
	    instruction.injectorId = injectorId;
	    instruction.parentInjectorId = parentInjectorId;
	    instruction.providers = providers;
	    instruction.behaviorInstructions = behaviorInstructions;
	    instruction.expressions = expressions;
	    instruction.anchorIsContainer = elementInstruction ? elementInstruction.anchorIsContainer : true;
	    instruction.elementInstruction = elementInstruction;
	    return instruction;
	  };

	  TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
	    var instruction = new TargetInstruction();
	    instruction.expressions = expressions;
	    instruction.behaviorInstructions = behaviorInstructions;
	    instruction.providers = providers;
	    instruction.values = values;
	    return instruction;
	  };

	  function TargetInstruction() {
	    _classCallCheck(this, TargetInstruction);

	    this.injectorId = null;
	    this.parentInjectorId = null;

	    this.contentSelector = false;
	    this.selector = null;

	    this.contentExpression = null;

	    this.expressions = null;
	    this.behaviorInstructions = null;
	    this.providers = null;

	    this.viewFactory = null;

	    this.anchorIsContainer = false;
	    this.elementInstruction = null;
	    this.lifting = false;

	    this.values = null;
	  }

	  return TargetInstruction;
	}(), _class3.noExpressions = Object.freeze([]), _temp);
	var viewStrategy = exports.viewStrategy = _aureliaMetadata.protocol.create('aurelia:view-strategy', {
	  validate: function validate(target) {
	    if (!(typeof target.loadViewFactory === 'function')) {
	      return 'View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>';
	    }

	    return true;
	  },
	  compose: function compose(target) {
	    if (!(typeof target.makeRelativeTo === 'function')) {
	      target.makeRelativeTo = _aureliaPal.PLATFORM.noop;
	    }
	  }
	});

	var RelativeViewStrategy = exports.RelativeViewStrategy = (_dec = viewStrategy(), _dec(_class4 = function () {
	  function RelativeViewStrategy(path) {
	    _classCallCheck(this, RelativeViewStrategy);

	    this.path = path;
	    this.absolutePath = null;
	  }

	  RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    if (this.absolutePath === null && this.moduleId) {
	      this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, this.moduleId);
	    }

	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext);
	  };

	  RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
	    if (this.absolutePath === null) {
	      this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, file);
	    }
	  };

	  return RelativeViewStrategy;
	}()) || _class4);
	var ConventionalViewStrategy = exports.ConventionalViewStrategy = (_dec2 = viewStrategy(), _dec2(_class5 = function () {
	  function ConventionalViewStrategy(viewLocator, origin) {
	    _classCallCheck(this, ConventionalViewStrategy);

	    this.moduleId = origin.moduleId;
	    this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
	  }

	  ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext);
	  };

	  return ConventionalViewStrategy;
	}()) || _class5);
	var NoViewStrategy = exports.NoViewStrategy = (_dec3 = viewStrategy(), _dec3(_class6 = function () {
	  function NoViewStrategy() {
	    _classCallCheck(this, NoViewStrategy);
	  }

	  NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    return Promise.resolve(null);
	  };

	  return NoViewStrategy;
	}()) || _class6);
	var TemplateRegistryViewStrategy = exports.TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), _dec4(_class7 = function () {
	  function TemplateRegistryViewStrategy(moduleId, entry) {
	    _classCallCheck(this, TemplateRegistryViewStrategy);

	    this.moduleId = moduleId;
	    this.entry = entry;
	  }

	  TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    var entry = this.entry;

	    if (entry.factoryIsReady) {
	      return Promise.resolve(entry.factory);
	    }

	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext);
	  };

	  return TemplateRegistryViewStrategy;
	}()) || _class7);
	var InlineViewStrategy = exports.InlineViewStrategy = (_dec5 = viewStrategy(), _dec5(_class8 = function () {
	  function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
	    _classCallCheck(this, InlineViewStrategy);

	    this.markup = markup;
	    this.dependencies = dependencies || null;
	    this.dependencyBaseUrl = dependencyBaseUrl || '';
	  }

	  InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    var entry = this.entry;
	    var dependencies = this.dependencies;

	    if (entry && entry.factoryIsReady) {
	      return Promise.resolve(entry.factory);
	    }

	    this.entry = entry = new _aureliaLoader.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl);
	    entry.template = _aureliaPal.DOM.createTemplateFromMarkup(this.markup);

	    if (dependencies !== null) {
	      for (var i = 0, ii = dependencies.length; i < ii; ++i) {
	        var current = dependencies[i];

	        if (typeof current === 'string' || typeof current === 'function') {
	          entry.addDependency(current);
	        } else {
	          entry.addDependency(current.from, current.as);
	        }
	      }
	    }

	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext);
	  };

	  return InlineViewStrategy;
	}()) || _class8);
	var ViewLocator = exports.ViewLocator = (_temp2 = _class9 = function () {
	  function ViewLocator() {
	    _classCallCheck(this, ViewLocator);
	  }

	  ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
	    if (!value) {
	      return null;
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'getViewStrategy' in value) {
	      var _origin = _aureliaMetadata.Origin.get(value.constructor);

	      value = value.getViewStrategy();

	      if (typeof value === 'string') {
	        value = new RelativeViewStrategy(value);
	      }

	      viewStrategy.assert(value);

	      if (_origin) {
	        value.makeRelativeTo(_origin.moduleId);
	      }

	      return value;
	    }

	    if (typeof value === 'string') {
	      value = new RelativeViewStrategy(value);
	    }

	    if (viewStrategy.validate(value)) {
	      return value;
	    }

	    if (typeof value !== 'function') {
	      value = value.constructor;
	    }

	    var origin = _aureliaMetadata.Origin.get(value);
	    var strategy = _aureliaMetadata.metadata.get(ViewLocator.viewStrategyMetadataKey, value);

	    if (!strategy) {
	      if (!origin) {
	        throw new Error('Cannot determinte default view strategy for object.', value);
	      }

	      strategy = this.createFallbackViewStrategy(origin);
	    } else if (origin) {
	      strategy.moduleId = origin.moduleId;
	    }

	    return strategy;
	  };

	  ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
	    return new ConventionalViewStrategy(this, origin);
	  };

	  ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
	    var moduleId = origin.moduleId;
	    var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
	    return id + '.html';
	  };

	  return ViewLocator;
	}(), _class9.viewStrategyMetadataKey = 'aurelia:view-strategy', _temp2);

	var BindingLanguage = exports.BindingLanguage = function () {
	  function BindingLanguage() {
	    _classCallCheck(this, BindingLanguage);
	  }

	  BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
	    throw new Error('A BindingLanguage must implement inspectAttribute(...)');
	  };

	  BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
	    throw new Error('A BindingLanguage must implement createAttributeInstruction(...)');
	  };

	  BindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
	    throw new Error('A BindingLanguage must implement inspectTextContent(...)');
	  };

	  return BindingLanguage;
	}();

	function register(lookup, name, resource, type) {
	  if (!name) {
	    return;
	  }

	  var existing = lookup[name];
	  if (existing) {
	    if (existing !== resource) {
	      throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
	    }

	    return;
	  }

	  lookup[name] = resource;
	}

	var ViewResources = exports.ViewResources = function () {
	  function ViewResources(parent, viewUrl) {
	    _classCallCheck(this, ViewResources);

	    this.bindingLanguage = null;

	    this.parent = parent || null;
	    this.hasParent = this.parent !== null;
	    this.viewUrl = viewUrl || '';
	    this.lookupFunctions = {
	      valueConverters: this.getValueConverter.bind(this),
	      bindingBehaviors: this.getBindingBehavior.bind(this)
	    };
	    this.attributes = Object.create(null);
	    this.elements = Object.create(null);
	    this.valueConverters = Object.create(null);
	    this.bindingBehaviors = Object.create(null);
	    this.attributeMap = Object.create(null);
	    this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = false;
	  }

	  ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
	    if (typeof obj[name] === 'function') {
	      var func = obj[name].bind(obj);
	      var counter = 1;
	      var callbackName = void 0;

	      while (this[callbackName = name + counter.toString()] !== undefined) {
	        counter++;
	      }

	      this[name] = true;
	      this[callbackName] = func;
	    }
	  };

	  ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
	    if (this.hasParent) {
	      this.parent._invokeHook(name, one, two, three, four);
	    }

	    if (this[name]) {
	      this[name + '1'](one, two, three, four);

	      var callbackName = name + '2';
	      if (this[callbackName]) {
	        this[callbackName](one, two, three, four);

	        callbackName = name + '3';
	        if (this[callbackName]) {
	          this[callbackName](one, two, three, four);

	          var counter = 4;

	          while (this[callbackName = name + counter.toString()] !== undefined) {
	            this[callbackName](one, two, three, four);
	            counter++;
	          }
	        }
	      }
	    }
	  };

	  ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
	    this._tryAddHook(hooks, 'beforeCompile');
	    this._tryAddHook(hooks, 'afterCompile');
	    this._tryAddHook(hooks, 'beforeCreate');
	    this._tryAddHook(hooks, 'afterCreate');
	    this._tryAddHook(hooks, 'beforeBind');
	    this._tryAddHook(hooks, 'beforeUnbind');
	  };

	  ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
	    return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
	  };

	  ViewResources.prototype.patchInParent = function patchInParent(newParent) {
	    var originalParent = this.parent;

	    this.parent = newParent || null;
	    this.hasParent = this.parent !== null;

	    if (newParent.parent === null) {
	      newParent.parent = originalParent;
	      newParent.hasParent = originalParent !== null;
	    }
	  };

	  ViewResources.prototype.relativeToView = function relativeToView(path) {
	    return (0, _aureliaPath.relativeToFile)(path, this.viewUrl);
	  };

	  ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
	    register(this.elements, tagName, behavior, 'an Element');
	  };

	  ViewResources.prototype.getElement = function getElement(tagName) {
	    return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
	  };

	  ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
	    return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
	  };

	  ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
	    this.attributeMap[attribute] = knownAttribute;
	    register(this.attributes, attribute, behavior, 'an Attribute');
	  };

	  ViewResources.prototype.getAttribute = function getAttribute(attribute) {
	    return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
	  };

	  ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
	    register(this.valueConverters, name, valueConverter, 'a ValueConverter');
	  };

	  ViewResources.prototype.getValueConverter = function getValueConverter(name) {
	    return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
	  };

	  ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
	    register(this.bindingBehaviors, name, bindingBehavior, 'a BindingBehavior');
	  };

	  ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
	    return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
	  };

	  return ViewResources;
	}();

	var View = exports.View = function () {
	  function View(container, viewFactory, fragment, controllers, bindings, children, contentSelectors) {
	    _classCallCheck(this, View);

	    this.container = container;
	    this.viewFactory = viewFactory;
	    this.resources = viewFactory.resources;
	    this.fragment = fragment;
	    this.controllers = controllers;
	    this.bindings = bindings;
	    this.children = children;
	    this.contentSelectors = contentSelectors;
	    this.firstChild = fragment.firstChild;
	    this.lastChild = fragment.lastChild;
	    this.fromCache = false;
	    this.isBound = false;
	    this.isAttached = false;
	    this.fromCache = false;
	    this.bindingContext = null;
	    this.overrideContext = null;
	    this.controller = null;
	    this.viewModelScope = null;
	    this._isUserControlled = false;
	  }

	  View.prototype.returnToCache = function returnToCache() {
	    this.viewFactory.returnViewToCache(this);
	  };

	  View.prototype.created = function created() {
	    var i = void 0;
	    var ii = void 0;
	    var controllers = this.controllers;

	    for (i = 0, ii = controllers.length; i < ii; ++i) {
	      controllers[i].created(this);
	    }
	  };

	  View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
	    var controllers = void 0;
	    var bindings = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (_systemUpdate && this._isUserControlled) {
	      return;
	    }

	    if (this.isBound) {
	      if (this.bindingContext === bindingContext) {
	        return;
	      }

	      this.unbind();
	    }

	    this.isBound = true;
	    this.bindingContext = bindingContext;
	    this.overrideContext = overrideContext || (0, _aureliaBinding.createOverrideContext)(bindingContext);

	    this.resources._invokeHook('beforeBind', this);

	    bindings = this.bindings;
	    for (i = 0, ii = bindings.length; i < ii; ++i) {
	      bindings[i].bind(this);
	    }

	    if (this.viewModelScope !== null) {
	      bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext);
	      this.viewModelScope = null;
	    }

	    controllers = this.controllers;
	    for (i = 0, ii = controllers.length; i < ii; ++i) {
	      controllers[i].bind(this);
	    }

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      children[i].bind(bindingContext, overrideContext, true);
	    }
	  };

	  View.prototype.addBinding = function addBinding(binding) {
	    this.bindings.push(binding);

	    if (this.isBound) {
	      binding.bind(this);
	    }
	  };

	  View.prototype.unbind = function unbind() {
	    var controllers = void 0;
	    var bindings = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (this.isBound) {
	      this.isBound = false;
	      this.resources._invokeHook('beforeUnbind', this);

	      if (this.controller !== null) {
	        this.controller.unbind();
	      }

	      bindings = this.bindings;
	      for (i = 0, ii = bindings.length; i < ii; ++i) {
	        bindings[i].unbind();
	      }

	      controllers = this.controllers;
	      for (i = 0, ii = controllers.length; i < ii; ++i) {
	        controllers[i].unbind();
	      }

	      children = this.children;
	      for (i = 0, ii = children.length; i < ii; ++i) {
	        children[i].unbind();
	      }

	      this.bindingContext = null;
	      this.overrideContext = null;
	    }
	  };

	  View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
	    var parent = refNode.parentNode;
	    parent.insertBefore(this.fragment, refNode);
	  };

	  View.prototype.appendNodesTo = function appendNodesTo(parent) {
	    parent.appendChild(this.fragment);
	  };

	  View.prototype.removeNodes = function removeNodes() {
	    var start = this.firstChild;
	    var end = this.lastChild;
	    var fragment = this.fragment;
	    var next = void 0;
	    var current = start;
	    var loop = true;

	    while (loop) {
	      if (current === end) {
	        loop = false;
	      }

	      next = current.nextSibling;
	      fragment.appendChild(current);
	      current = next;
	    }
	  };

	  View.prototype.attached = function attached() {
	    var controllers = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (this.isAttached) {
	      return;
	    }

	    this.isAttached = true;

	    if (this.controller !== null) {
	      this.controller.attached();
	    }

	    controllers = this.controllers;
	    for (i = 0, ii = controllers.length; i < ii; ++i) {
	      controllers[i].attached();
	    }

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      children[i].attached();
	    }
	  };

	  View.prototype.detached = function detached() {
	    var controllers = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (this.isAttached) {
	      this.isAttached = false;

	      if (this.controller !== null) {
	        this.controller.detached();
	      }

	      controllers = this.controllers;
	      for (i = 0, ii = controllers.length; i < ii; ++i) {
	        controllers[i].detached();
	      }

	      children = this.children;
	      for (i = 0, ii = children.length; i < ii; ++i) {
	        children[i].detached();
	      }
	    }
	  };

	  return View;
	}();

	var placeholder = [];

	function findInsertionPoint(groups, index) {
	  var insertionPoint = void 0;

	  while (!insertionPoint && index >= 0) {
	    insertionPoint = groups[index][0];
	    index--;
	  }

	  return insertionPoint;
	}

	var _ContentSelector = exports._ContentSelector = function () {
	  _ContentSelector.applySelectors = function applySelectors(view, contentSelectors, callback) {
	    var currentChild = view.fragment.firstChild;
	    var contentMap = new Map();
	    var nextSibling = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var contentSelector = void 0;

	    while (currentChild) {
	      nextSibling = currentChild.nextSibling;

	      if (currentChild.isContentProjectionSource) {
	        var viewSlotSelectors = contentSelectors.map(function (x) {
	          return x.copyForViewSlot();
	        });
	        currentChild.viewSlot._installContentSelectors(viewSlotSelectors);
	      } else {
	        for (i = 0, ii = contentSelectors.length; i < ii; i++) {
	          contentSelector = contentSelectors[i];
	          if (contentSelector.matches(currentChild)) {
	            var elements = contentMap.get(contentSelector);
	            if (!elements) {
	              elements = [];
	              contentMap.set(contentSelector, elements);
	            }

	            elements.push(currentChild);
	            break;
	          }
	        }
	      }

	      currentChild = nextSibling;
	    }

	    for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
	      contentSelector = contentSelectors[i];
	      callback(contentSelector, contentMap.get(contentSelector) || placeholder);
	    }
	  };

	  function _ContentSelector(anchor, selector) {
	    _classCallCheck(this, _ContentSelector);

	    this.anchor = anchor;
	    this.selector = selector;
	    this.all = !this.selector;
	    this.groups = [];
	  }

	  _ContentSelector.prototype.copyForViewSlot = function copyForViewSlot() {
	    return new _ContentSelector(this.anchor, this.selector);
	  };

	  _ContentSelector.prototype.matches = function matches(node) {
	    return this.all || node.nodeType === 1 && node.matches(this.selector);
	  };

	  _ContentSelector.prototype.add = function add(group) {
	    var anchor = this.anchor;
	    var parent = anchor.parentNode;
	    var i = void 0;
	    var ii = void 0;

	    for (i = 0, ii = group.length; i < ii; ++i) {
	      parent.insertBefore(group[i], anchor);
	    }

	    this.groups.push(group);
	  };

	  _ContentSelector.prototype.insert = function insert(index, group) {
	    if (group.length) {
	      var anchor = findInsertionPoint(this.groups, index) || this.anchor;
	      var parent = anchor.parentNode;
	      var i = void 0;
	      var ii = void 0;

	      for (i = 0, ii = group.length; i < ii; ++i) {
	        parent.insertBefore(group[i], anchor);
	      }
	    }

	    this.groups.splice(index, 0, group);
	  };

	  _ContentSelector.prototype.removeAt = function removeAt(index, fragment) {
	    var group = this.groups[index];
	    var i = void 0;
	    var ii = void 0;

	    for (i = 0, ii = group.length; i < ii; ++i) {
	      fragment.appendChild(group[i]);
	    }

	    this.groups.splice(index, 1);
	  };

	  return _ContentSelector;
	}();

	function getAnimatableElement(view) {
	  var firstChild = view.firstChild;

	  if (firstChild !== null && firstChild !== undefined && firstChild.nodeType === 8) {
	    var _element = _aureliaPal.DOM.nextElementSibling(firstChild);

	    if (_element !== null && _element !== undefined && _element.nodeType === 1 && _element.classList.contains('au-animate')) {
	      return _element;
	    }
	  }

	  return null;
	}

	var ViewSlot = exports.ViewSlot = function () {
	  function ViewSlot(anchor, anchorIsContainer) {
	    var animator = arguments.length <= 2 || arguments[2] === undefined ? Animator.instance : arguments[2];

	    _classCallCheck(this, ViewSlot);

	    this.anchor = anchor;
	    this.viewAddMethod = anchorIsContainer ? 'appendNodesTo' : 'insertNodesBefore';
	    this.bindingContext = null;
	    this.overrideContext = null;
	    this.animator = animator;
	    this.children = [];
	    this.isBound = false;
	    this.isAttached = false;
	    this.contentSelectors = null;
	    anchor.viewSlot = this;
	    anchor.isContentProjectionSource = false;
	  }

	  ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
	    var parent = this.anchor;

	    this.children.push({
	      fragment: parent,
	      firstChild: parent.firstChild,
	      lastChild: parent.lastChild,
	      returnToCache: function returnToCache() {},
	      removeNodes: function removeNodes() {
	        var last = void 0;

	        while (last = parent.lastChild) {
	          parent.removeChild(last);
	        }
	      },
	      created: function created() {},
	      bind: function bind() {},
	      unbind: function unbind() {},
	      attached: function attached() {},
	      detached: function detached() {}
	    });
	  };

	  ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
	    var i = void 0;
	    var ii = void 0;
	    var children = void 0;

	    if (this.isBound) {
	      if (this.bindingContext === bindingContext) {
	        return;
	      }

	      this.unbind();
	    }

	    this.isBound = true;
	    this.bindingContext = bindingContext = bindingContext || this.bindingContext;
	    this.overrideContext = overrideContext = overrideContext || this.overrideContext;

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      children[i].bind(bindingContext, overrideContext, true);
	    }
	  };

	  ViewSlot.prototype.unbind = function unbind() {
	    if (this.isBound) {
	      var i = void 0;
	      var ii = void 0;
	      var _children = this.children;

	      this.isBound = false;
	      this.bindingContext = null;
	      this.overrideContext = null;

	      for (i = 0, ii = _children.length; i < ii; ++i) {
	        _children[i].unbind();
	      }
	    }
	  };

	  ViewSlot.prototype.add = function add(view) {
	    view[this.viewAddMethod](this.anchor);
	    this.children.push(view);

	    if (this.isAttached) {
	      view.attached();

	      var animatableElement = getAnimatableElement(view);
	      if (animatableElement !== null) {
	        return this.animator.enter(animatableElement);
	      }
	    }
	  };

	  ViewSlot.prototype.insert = function insert(index, view) {
	    var children = this.children;
	    var length = children.length;

	    if (index === 0 && length === 0 || index >= length) {
	      return this.add(view);
	    }

	    view.insertNodesBefore(children[index].firstChild);
	    children.splice(index, 0, view);

	    if (this.isAttached) {
	      view.attached();

	      var animatableElement = getAnimatableElement(view);
	      if (animatableElement !== null) {
	        return this.animator.enter(animatableElement);
	      }
	    }
	  };

	  ViewSlot.prototype.move = function move(sourceIndex, targetIndex) {
	    if (sourceIndex === targetIndex) {
	      return;
	    }

	    var children = this.children;
	    var view = children[sourceIndex];

	    view.removeNodes();
	    view.insertNodesBefore(children[targetIndex].firstChild);
	    children.splice(sourceIndex, 1);
	    children.splice(targetIndex, 0, view);
	  };

	  ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
	    return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
	  };

	  ViewSlot.prototype.removeMany = function removeMany(viewsToRemove, returnToCache, skipAnimation) {
	    var _this4 = this;

	    var children = this.children;
	    var ii = viewsToRemove.length;
	    var i = void 0;
	    var rmPromises = [];

	    viewsToRemove.forEach(function (child) {
	      if (skipAnimation) {
	        child.removeNodes();
	        return;
	      }

	      var animatableElement = getAnimatableElement(child);
	      if (animatableElement !== null) {
	        rmPromises.push(_this4.animator.leave(animatableElement).then(function () {
	          return child.removeNodes();
	        }));
	      } else {
	        child.removeNodes();
	      }
	    });

	    var removeAction = function removeAction() {
	      if (_this4.isAttached) {
	        for (i = 0; i < ii; ++i) {
	          viewsToRemove[i].detached();
	        }
	      }

	      if (returnToCache) {
	        for (i = 0; i < ii; ++i) {
	          viewsToRemove[i].returnToCache();
	        }
	      }

	      for (i = 0; i < ii; ++i) {
	        var index = children.indexOf(viewsToRemove[i]);
	        if (index >= 0) {
	          children.splice(index, 1);
	        }
	      }
	    };

	    if (rmPromises.length > 0) {
	      return Promise.all(rmPromises).then(function () {
	        return removeAction();
	      });
	    }

	    removeAction();
	  };

	  ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
	    var _this5 = this;

	    var view = this.children[index];

	    var removeAction = function removeAction() {
	      index = _this5.children.indexOf(view);
	      view.removeNodes();
	      _this5.children.splice(index, 1);

	      if (_this5.isAttached) {
	        view.detached();
	      }

	      if (returnToCache) {
	        view.returnToCache();
	      }

	      return view;
	    };

	    if (!skipAnimation) {
	      var animatableElement = getAnimatableElement(view);
	      if (animatableElement !== null) {
	        return this.animator.leave(animatableElement).then(function () {
	          return removeAction();
	        });
	      }
	    }

	    return removeAction();
	  };

	  ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
	    var _this6 = this;

	    var children = this.children;
	    var ii = children.length;
	    var i = void 0;
	    var rmPromises = [];

	    children.forEach(function (child) {
	      if (skipAnimation) {
	        child.removeNodes();
	        return;
	      }

	      var animatableElement = getAnimatableElement(child);
	      if (animatableElement !== null) {
	        rmPromises.push(_this6.animator.leave(animatableElement).then(function () {
	          return child.removeNodes();
	        }));
	      } else {
	        child.removeNodes();
	      }
	    });

	    var removeAction = function removeAction() {
	      if (_this6.isAttached) {
	        for (i = 0; i < ii; ++i) {
	          children[i].detached();
	        }
	      }

	      if (returnToCache) {
	        for (i = 0; i < ii; ++i) {
	          children[i].returnToCache();
	        }
	      }

	      _this6.children = [];
	    };

	    if (rmPromises.length > 0) {
	      return Promise.all(rmPromises).then(function () {
	        return removeAction();
	      });
	    }

	    removeAction();
	  };

	  ViewSlot.prototype.attached = function attached() {
	    var i = void 0;
	    var ii = void 0;
	    var children = void 0;
	    var child = void 0;

	    if (this.isAttached) {
	      return;
	    }

	    this.isAttached = true;

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      child = children[i];
	      child.attached();

	      var _element2 = child.firstChild ? _aureliaPal.DOM.nextElementSibling(child.firstChild) : null;
	      if (child.firstChild && child.firstChild.nodeType === 8 && _element2 && _element2.nodeType === 1 && _element2.classList.contains('au-animate')) {
	        this.animator.enter(_element2);
	      }
	    }
	  };

	  ViewSlot.prototype.detached = function detached() {
	    var i = void 0;
	    var ii = void 0;
	    var children = void 0;

	    if (this.isAttached) {
	      this.isAttached = false;
	      children = this.children;
	      for (i = 0, ii = children.length; i < ii; ++i) {
	        children[i].detached();
	      }
	    }
	  };

	  ViewSlot.prototype._installContentSelectors = function _installContentSelectors(contentSelectors) {
	    this.contentSelectors = contentSelectors;
	    this.add = this._contentSelectorAdd;
	    this.insert = this._contentSelectorInsert;
	    this.remove = this._contentSelectorRemove;
	    this.removeAt = this._contentSelectorRemoveAt;
	    this.removeAll = this._contentSelectorRemoveAll;
	  };

	  ViewSlot.prototype._contentSelectorAdd = function _contentSelectorAdd(view) {
	    _ContentSelector.applySelectors(view, this.contentSelectors, function (contentSelector, group) {
	      return contentSelector.add(group);
	    });

	    this.children.push(view);

	    if (this.isAttached) {
	      view.attached();
	    }
	  };

	  ViewSlot.prototype._contentSelectorInsert = function _contentSelectorInsert(index, view) {
	    if (index === 0 && !this.children.length || index >= this.children.length) {
	      this.add(view);
	    } else {
	      _ContentSelector.applySelectors(view, this.contentSelectors, function (contentSelector, group) {
	        return contentSelector.insert(index, group);
	      });

	      this.children.splice(index, 0, view);

	      if (this.isAttached) {
	        view.attached();
	      }
	    }
	  };

	  ViewSlot.prototype._contentSelectorRemove = function _contentSelectorRemove(view) {
	    var index = this.children.indexOf(view);
	    var contentSelectors = this.contentSelectors;
	    var i = void 0;
	    var ii = void 0;

	    for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
	      contentSelectors[i].removeAt(index, view.fragment);
	    }

	    this.children.splice(index, 1);

	    if (this.isAttached) {
	      view.detached();
	    }
	  };

	  ViewSlot.prototype._contentSelectorRemoveAt = function _contentSelectorRemoveAt(index) {
	    var view = this.children[index];
	    var contentSelectors = this.contentSelectors;
	    var i = void 0;
	    var ii = void 0;

	    for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
	      contentSelectors[i].removeAt(index, view.fragment);
	    }

	    this.children.splice(index, 1);

	    if (this.isAttached) {
	      view.detached();
	    }

	    return view;
	  };

	  ViewSlot.prototype._contentSelectorRemoveAll = function _contentSelectorRemoveAll() {
	    var children = this.children;
	    var contentSelectors = this.contentSelectors;
	    var ii = children.length;
	    var jj = contentSelectors.length;
	    var i = void 0;
	    var j = void 0;
	    var view = void 0;

	    for (i = 0; i < ii; ++i) {
	      view = children[i];

	      for (j = 0; j < jj; ++j) {
	        contentSelectors[j].removeAt(0, view.fragment);
	      }
	    }

	    if (this.isAttached) {
	      for (i = 0; i < ii; ++i) {
	        children[i].detached();
	      }
	    }

	    this.children = [];
	  };

	  return ViewSlot;
	}();

	var ProviderResolver = (0, _aureliaDependencyInjection.resolver)(_class11 = function () {
	  function ProviderResolver() {
	    _classCallCheck(this, ProviderResolver);
	  }

	  ProviderResolver.prototype.get = function get(container, key) {
	    var id = key.__providerId__;
	    return id in container ? container[id] : container[id] = container.invoke(key);
	  };

	  return ProviderResolver;
	}()) || _class11;

	var providerResolverInstance = new ProviderResolver();

	function elementContainerGet(key) {
	  if (key === _aureliaPal.DOM.Element) {
	    return this.element;
	  }

	  if (key === BoundViewFactory) {
	    if (this.boundViewFactory) {
	      return this.boundViewFactory;
	    }

	    var factory = this.instruction.viewFactory;
	    var _partReplacements = this.partReplacements;

	    if (_partReplacements) {
	      factory = _partReplacements[factory.part] || factory;
	    }

	    this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements);
	    return this.boundViewFactory;
	  }

	  if (key === ViewSlot) {
	    if (this.viewSlot === undefined) {
	      this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer);
	      this.element.isContentProjectionSource = this.instruction.lifting;
	      this.children.push(this.viewSlot);
	    }

	    return this.viewSlot;
	  }

	  if (key === ElementEvents) {
	    return this.elementEvents || (this.elementEvents = new ElementEvents(this.element));
	  }

	  if (key === CompositionTransaction) {
	    return this.compositionTransaction || (this.compositionTransaction = this.parent.get(key));
	  }

	  if (key === ViewResources) {
	    return this.viewResources;
	  }

	  if (key === TargetInstruction) {
	    return this.instruction;
	  }

	  return this.superGet(key);
	}

	function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
	  var container = parent.createChild();
	  var providers = void 0;
	  var i = void 0;

	  container.element = element;
	  container.instruction = instruction;
	  container.children = children;
	  container.viewResources = resources;
	  container.partReplacements = partReplacements;

	  providers = instruction.providers;
	  i = providers.length;

	  while (i--) {
	    container._resolvers.set(providers[i], providerResolverInstance);
	  }

	  container.superGet = container.get;
	  container.get = elementContainerGet;

	  return container;
	}

	function makeElementIntoAnchor(element, elementInstruction) {
	  var anchor = _aureliaPal.DOM.createComment('anchor');

	  if (elementInstruction) {
	    anchor.hasAttribute = function (name) {
	      return element.hasAttribute(name);
	    };
	    anchor.getAttribute = function (name) {
	      return element.getAttribute(name);
	    };
	    anchor.setAttribute = function (name, value) {
	      element.setAttribute(name, value);
	    };
	  }

	  _aureliaPal.DOM.replaceNode(anchor, element);

	  return anchor;
	}

	function applyInstructions(containers, element, instruction, controllers, bindings, children, contentSelectors, partReplacements, resources) {
	  var behaviorInstructions = instruction.behaviorInstructions;
	  var expressions = instruction.expressions;
	  var elementContainer = void 0;
	  var i = void 0;
	  var ii = void 0;
	  var current = void 0;
	  var instance = void 0;

	  if (instruction.contentExpression) {
	    bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
	    element.parentNode.removeChild(element);
	    return;
	  }

	  if (instruction.contentSelector) {
	    var commentAnchor = _aureliaPal.DOM.createComment('anchor');
	    _aureliaPal.DOM.replaceNode(commentAnchor, element);
	    contentSelectors.push(new _ContentSelector(commentAnchor, instruction.selector));
	    return;
	  }

	  if (behaviorInstructions.length) {
	    if (!instruction.anchorIsContainer) {
	      element = makeElementIntoAnchor(element, instruction.elementInstruction);
	    }

	    containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources);

	    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	      current = behaviorInstructions[i];
	      instance = current.type.create(elementContainer, current, element, bindings);

	      if (instance.contentView) {
	        children.push(instance.contentView);
	      }

	      controllers.push(instance);
	    }
	  }

	  for (i = 0, ii = expressions.length; i < ii; ++i) {
	    bindings.push(expressions[i].createBinding(element));
	  }
	}

	function styleStringToObject(style, target) {
	  var attributes = style.split(';');
	  var firstIndexOfColon = void 0;
	  var i = void 0;
	  var current = void 0;
	  var key = void 0;
	  var value = void 0;

	  target = target || {};

	  for (i = 0; i < attributes.length; i++) {
	    current = attributes[i];
	    firstIndexOfColon = current.indexOf(':');
	    key = current.substring(0, firstIndexOfColon).trim();
	    value = current.substring(firstIndexOfColon + 1).trim();
	    target[key] = value;
	  }

	  return target;
	}

	function styleObjectToString(obj) {
	  var result = '';

	  for (var key in obj) {
	    result += key + ':' + obj[key] + ';';
	  }

	  return result;
	}

	function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
	  var behaviorInstructions = instruction.behaviorInstructions;
	  var expressions = instruction.expressions;
	  var providers = instruction.providers;
	  var values = instruction.values;
	  var i = void 0;
	  var ii = void 0;
	  var current = void 0;
	  var instance = void 0;
	  var currentAttributeValue = void 0;

	  i = providers.length;
	  while (i--) {
	    container._resolvers.set(providers[i], providerResolverInstance);
	  }

	  for (var key in values) {
	    currentAttributeValue = element.getAttribute(key);

	    if (currentAttributeValue) {
	      if (key === 'class') {
	        element.setAttribute('class', currentAttributeValue + ' ' + values[key]);
	      } else if (key === 'style') {
	        var styleObject = styleStringToObject(values[key]);
	        styleStringToObject(currentAttributeValue, styleObject);
	        element.setAttribute('style', styleObjectToString(styleObject));
	      }
	    } else {
	        element.setAttribute(key, values[key]);
	      }
	  }

	  if (behaviorInstructions.length) {
	    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	      current = behaviorInstructions[i];
	      instance = current.type.create(container, current, element, bindings);

	      if (instance.contentView) {
	        children.push(instance.contentView);
	      }

	      controllers.push(instance);
	    }
	  }

	  for (i = 0, ii = expressions.length; i < ii; ++i) {
	    bindings.push(expressions[i].createBinding(element));
	  }
	}

	var BoundViewFactory = exports.BoundViewFactory = function () {
	  function BoundViewFactory(parentContainer, viewFactory, partReplacements) {
	    _classCallCheck(this, BoundViewFactory);

	    this.parentContainer = parentContainer;
	    this.viewFactory = viewFactory;
	    this.factoryCreateInstruction = { partReplacements: partReplacements };
	  }

	  BoundViewFactory.prototype.create = function create() {
	    var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
	    view._isUserControlled = true;
	    return view;
	  };

	  BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
	    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
	  };

	  BoundViewFactory.prototype.getCachedView = function getCachedView() {
	    return this.viewFactory.getCachedView();
	  };

	  BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
	    this.viewFactory.returnViewToCache(view);
	  };

	  _createClass(BoundViewFactory, [{
	    key: 'isCaching',
	    get: function get() {
	      return this.viewFactory.isCaching;
	    }
	  }]);

	  return BoundViewFactory;
	}();

	var ViewFactory = exports.ViewFactory = function () {
	  function ViewFactory(template, instructions, resources) {
	    _classCallCheck(this, ViewFactory);

	    this.isCaching = false;

	    this.template = template;
	    this.instructions = instructions;
	    this.resources = resources;
	    this.cacheSize = -1;
	    this.cache = null;
	  }

	  ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
	    if (size) {
	      if (size === '*') {
	        size = Number.MAX_VALUE;
	      } else if (typeof size === 'string') {
	        size = parseInt(size, 10);
	      }
	    }

	    if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
	      this.cacheSize = size;
	    }

	    if (this.cacheSize > 0) {
	      this.cache = [];
	    } else {
	      this.cache = null;
	    }

	    this.isCaching = this.cacheSize > 0;
	  };

	  ViewFactory.prototype.getCachedView = function getCachedView() {
	    return this.cache !== null ? this.cache.pop() || null : null;
	  };

	  ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
	    if (view.isAttached) {
	      view.detached();
	    }

	    if (view.isBound) {
	      view.unbind();
	    }

	    if (this.cache !== null && this.cache.length < this.cacheSize) {
	      view.fromCache = true;
	      this.cache.push(view);
	    }
	  };

	  ViewFactory.prototype.create = function create(container, createInstruction, element) {
	    createInstruction = createInstruction || BehaviorInstruction.normal;
	    element = element || null;

	    var cachedView = this.getCachedView();
	    if (cachedView !== null) {
	      return cachedView;
	    }

	    var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(true);
	    var instructables = fragment.querySelectorAll('.au-target');
	    var instructions = this.instructions;
	    var resources = this.resources;
	    var controllers = [];
	    var bindings = [];
	    var children = [];
	    var contentSelectors = [];
	    var containers = { root: container };
	    var partReplacements = createInstruction.partReplacements;
	    var i = void 0;
	    var ii = void 0;
	    var view = void 0;
	    var instructable = void 0;
	    var instruction = void 0;

	    this.resources._invokeHook('beforeCreate', this, container, fragment, createInstruction);

	    if (element !== null && this.surrogateInstruction !== null) {
	      applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children);
	    }

	    for (i = 0, ii = instructables.length; i < ii; ++i) {
	      instructable = instructables[i];
	      instruction = instructions[instructable.getAttribute('au-target-id')];

	      applyInstructions(containers, instructable, instruction, controllers, bindings, children, contentSelectors, partReplacements, resources);
	    }

	    view = new View(container, this, fragment, controllers, bindings, children, contentSelectors);

	    if (!createInstruction.initiatedByBehavior) {
	      view.created();
	    }

	    this.resources._invokeHook('afterCreate', view);

	    return view;
	  };

	  return ViewFactory;
	}();

	var nextInjectorId = 0;
	function getNextInjectorId() {
	  return ++nextInjectorId;
	}

	function configureProperties(instruction, resources) {
	  var type = instruction.type;
	  var attrName = instruction.attrName;
	  var attributes = instruction.attributes;
	  var property = void 0;
	  var key = void 0;
	  var value = void 0;

	  var knownAttribute = resources.mapAttribute(attrName);
	  if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
	    attributes[knownAttribute] = attributes[attrName];
	    delete attributes[attrName];
	  }

	  for (key in attributes) {
	    value = attributes[key];

	    if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      property = type.attributes[key];

	      if (property !== undefined) {
	        value.targetProperty = property.name;
	      } else {
	        value.targetProperty = key;
	      }
	    }
	  }
	}

	var lastAUTargetID = 0;
	function getNextAUTargetID() {
	  return (++lastAUTargetID).toString();
	}

	function makeIntoInstructionTarget(element) {
	  var value = element.getAttribute('class');
	  var auTargetID = getNextAUTargetID();

	  element.setAttribute('class', value ? value += ' au-target' : 'au-target');
	  element.setAttribute('au-target-id', auTargetID);

	  return auTargetID;
	}

	var ViewCompiler = exports.ViewCompiler = (_dec6 = (0, _aureliaDependencyInjection.inject)(BindingLanguage, ViewResources), _dec6(_class13 = function () {
	  function ViewCompiler(bindingLanguage, resources) {
	    _classCallCheck(this, ViewCompiler);

	    this.bindingLanguage = bindingLanguage;
	    this.resources = resources;
	  }

	  ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
	    resources = resources || this.resources;
	    compileInstruction = compileInstruction || ViewCompileInstruction.normal;
	    source = typeof source === 'string' ? _aureliaPal.DOM.createTemplateFromMarkup(source) : source;

	    var content = void 0;
	    var part = void 0;
	    var cacheSize = void 0;

	    if (source.content) {
	      part = source.getAttribute('part');
	      cacheSize = source.getAttribute('view-cache');
	      content = _aureliaPal.DOM.adoptNode(source.content);
	    } else {
	      content = source;
	    }

	    compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM;
	    resources._invokeHook('beforeCompile', content, resources, compileInstruction);

	    var instructions = {};
	    this._compileNode(content, resources, instructions, source, 'root', !compileInstruction.targetShadowDOM);
	    content.insertBefore(_aureliaPal.DOM.createComment('<view>'), content.firstChild);
	    content.appendChild(_aureliaPal.DOM.createComment('</view>'));

	    var factory = new ViewFactory(content, instructions, resources);

	    factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null;
	    factory.part = part;

	    if (cacheSize) {
	      factory.setCacheSize(cacheSize);
	    }

	    resources._invokeHook('afterCompile', factory);

	    return factory;
	  };

	  ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
	    switch (node.nodeType) {
	      case 1:
	        return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
	      case 3:
	        var expression = resources.getBindingLanguage(this.bindingLanguage).inspectTextContent(resources, node.wholeText);
	        if (expression) {
	          var marker = _aureliaPal.DOM.createElement('au-marker');
	          var auTargetID = makeIntoInstructionTarget(marker);
	          (node.parentNode || parentNode).insertBefore(marker, node);
	          node.textContent = ' ';
	          instructions[auTargetID] = TargetInstruction.contentExpression(expression);

	          while (node.nextSibling && node.nextSibling.nodeType === 3) {
	            (node.parentNode || parentNode).removeChild(node.nextSibling);
	          }
	        } else {
	          while (node.nextSibling && node.nextSibling.nodeType === 3) {
	            node = node.nextSibling;
	          }
	        }
	        return node.nextSibling;
	      case 11:
	        var currentChild = node.firstChild;
	        while (currentChild) {
	          currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
	        }
	        break;
	      default:
	        break;
	    }

	    return node.nextSibling;
	  };

	  ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
	    var tagName = node.tagName.toLowerCase();
	    var attributes = node.attributes;
	    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
	    var knownAttribute = void 0;
	    var property = void 0;
	    var instruction = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var attr = void 0;
	    var attrName = void 0;
	    var attrValue = void 0;
	    var info = void 0;
	    var type = void 0;
	    var expressions = [];
	    var expression = void 0;
	    var behaviorInstructions = [];
	    var values = {};
	    var hasValues = false;
	    var providers = [];

	    for (i = 0, ii = attributes.length; i < ii; ++i) {
	      attr = attributes[i];
	      attrName = attr.name;
	      attrValue = attr.value;

	      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);
	      type = resources.getAttribute(info.attrName);

	      if (type) {
	        knownAttribute = resources.mapAttribute(info.attrName);
	        if (knownAttribute) {
	          property = type.attributes[knownAttribute];

	          if (property) {
	            info.defaultBindingMode = property.defaultBindingMode;

	            if (!info.command && !info.expression) {
	              info.command = property.hasOptions ? 'options' : null;
	            }
	          }
	        }
	      }

	      instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);

	      if (instruction) {
	        if (instruction.alteredAttr) {
	          type = resources.getAttribute(instruction.attrName);
	        }

	        if (instruction.discrete) {
	          expressions.push(instruction);
	        } else {
	          if (type) {
	            instruction.type = type;
	            configureProperties(instruction, resources);

	            if (type.liftsContent) {
	              throw new Error('You cannot place a template controller on a surrogate element.');
	            } else {
	              behaviorInstructions.push(instruction);
	            }
	          } else {
	            expressions.push(instruction.attributes[instruction.attrName]);
	          }
	        }
	      } else {
	        if (type) {
	          instruction = BehaviorInstruction.attribute(attrName, type);
	          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

	          if (type.liftsContent) {
	            throw new Error('You cannot place a template controller on a surrogate element.');
	          } else {
	            behaviorInstructions.push(instruction);
	          }
	        } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
	          hasValues = true;
	          values[attrName] = attrValue;
	        }
	      }
	    }

	    if (expressions.length || behaviorInstructions.length || hasValues) {
	      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	        instruction = behaviorInstructions[i];
	        instruction.type.compile(this, resources, node, instruction);
	        providers.push(instruction.type.target);
	      }

	      for (i = 0, ii = expressions.length; i < ii; ++i) {
	        expression = expressions[i];
	        if (expression.attrToRemove !== undefined) {
	          node.removeAttribute(expression.attrToRemove);
	        }
	      }

	      return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
	    }

	    return null;
	  };

	  ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
	    var tagName = node.tagName.toLowerCase();
	    var attributes = node.attributes;
	    var expressions = [];
	    var expression = void 0;
	    var behaviorInstructions = [];
	    var providers = [];
	    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
	    var liftingInstruction = void 0;
	    var viewFactory = void 0;
	    var type = void 0;
	    var elementInstruction = void 0;
	    var elementProperty = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var attr = void 0;
	    var attrName = void 0;
	    var attrValue = void 0;
	    var instruction = void 0;
	    var info = void 0;
	    var property = void 0;
	    var knownAttribute = void 0;
	    var auTargetID = void 0;
	    var injectorId = void 0;

	    if (tagName === 'content') {
	      if (targetLightDOM) {
	        auTargetID = makeIntoInstructionTarget(node);
	        instructions[auTargetID] = TargetInstruction.contentSelector(node, parentInjectorId);
	      }
	      return node.nextSibling;
	    } else if (tagName === 'template') {
	      viewFactory = this.compile(node, resources);
	      viewFactory.part = node.getAttribute('part');
	    } else {
	      type = resources.getElement(node.getAttribute('as-element') || tagName);
	      if (type) {
	        elementInstruction = BehaviorInstruction.element(node, type);
	        type.processAttributes(this, resources, node, attributes, elementInstruction);
	        behaviorInstructions.push(elementInstruction);
	      }
	    }

	    for (i = 0, ii = attributes.length; i < ii; ++i) {
	      attr = attributes[i];
	      attrName = attr.name;
	      attrValue = attr.value;
	      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);
	      type = resources.getAttribute(info.attrName);
	      elementProperty = null;

	      if (type) {
	        knownAttribute = resources.mapAttribute(info.attrName);
	        if (knownAttribute) {
	          property = type.attributes[knownAttribute];

	          if (property) {
	            info.defaultBindingMode = property.defaultBindingMode;

	            if (!info.command && !info.expression) {
	              info.command = property.hasOptions ? 'options' : null;
	            }
	          }
	        }
	      } else if (elementInstruction) {
	          elementProperty = elementInstruction.type.attributes[info.attrName];
	          if (elementProperty) {
	            info.defaultBindingMode = elementProperty.defaultBindingMode;
	          }
	        }

	      if (elementProperty) {
	        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
	      } else {
	        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);
	      }

	      if (instruction) {
	        if (instruction.alteredAttr) {
	          type = resources.getAttribute(instruction.attrName);
	        }

	        if (instruction.discrete) {
	          expressions.push(instruction);
	        } else {
	          if (type) {
	            instruction.type = type;
	            configureProperties(instruction, resources);

	            if (type.liftsContent) {
	              instruction.originalAttrName = attrName;
	              liftingInstruction = instruction;
	              break;
	            } else {
	              behaviorInstructions.push(instruction);
	            }
	          } else if (elementProperty) {
	            elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
	          } else {
	            expressions.push(instruction.attributes[instruction.attrName]);
	          }
	        }
	      } else {
	        if (type) {
	          instruction = BehaviorInstruction.attribute(attrName, type);
	          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

	          if (type.liftsContent) {
	            instruction.originalAttrName = attrName;
	            liftingInstruction = instruction;
	            break;
	          } else {
	            behaviorInstructions.push(instruction);
	          }
	        } else if (elementProperty) {
	          elementInstruction.attributes[attrName] = attrValue;
	        }
	      }
	    }

	    if (liftingInstruction) {
	      liftingInstruction.viewFactory = viewFactory;
	      node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
	      auTargetID = makeIntoInstructionTarget(node);
	      instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction);
	    } else {
	      if (expressions.length || behaviorInstructions.length) {
	        injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

	        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	          instruction = behaviorInstructions[i];
	          instruction.type.compile(this, resources, node, instruction, parentNode);
	          providers.push(instruction.type.target);
	        }

	        for (i = 0, ii = expressions.length; i < ii; ++i) {
	          expression = expressions[i];
	          if (expression.attrToRemove !== undefined) {
	            node.removeAttribute(expression.attrToRemove);
	          }
	        }

	        auTargetID = makeIntoInstructionTarget(node);
	        instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
	      }

	      if (elementInstruction && elementInstruction.skipContentProcessing) {
	        return node.nextSibling;
	      }

	      var currentChild = node.firstChild;
	      while (currentChild) {
	        currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
	      }
	    }

	    return node.nextSibling;
	  };

	  return ViewCompiler;
	}()) || _class13);

	var ResourceModule = exports.ResourceModule = function () {
	  function ResourceModule(moduleId) {
	    _classCallCheck(this, ResourceModule);

	    this.id = moduleId;
	    this.moduleInstance = null;
	    this.mainResource = null;
	    this.resources = null;
	    this.viewStrategy = null;
	    this.isInitialized = false;
	    this.onLoaded = null;
	  }

	  ResourceModule.prototype.initialize = function initialize(container) {
	    var current = this.mainResource;
	    var resources = this.resources;
	    var vs = this.viewStrategy;

	    if (this.isInitialized) {
	      return;
	    }

	    this.isInitialized = true;

	    if (current !== undefined) {
	      current.metadata.viewStrategy = vs;
	      current.initialize(container);
	    }

	    for (var i = 0, ii = resources.length; i < ii; ++i) {
	      current = resources[i];
	      current.metadata.viewStrategy = vs;
	      current.initialize(container);
	    }
	  };

	  ResourceModule.prototype.register = function register(registry, name) {
	    var main = this.mainResource;
	    var resources = this.resources;

	    if (main !== undefined) {
	      main.register(registry, name);
	      name = null;
	    }

	    for (var i = 0, ii = resources.length; i < ii; ++i) {
	      resources[i].register(registry, name);
	      name = null;
	    }
	  };

	  ResourceModule.prototype.load = function load(container, loadContext) {
	    if (this.onLoaded !== null) {
	      return this.onLoaded;
	    }

	    var main = this.mainResource;
	    var resources = this.resources;
	    var loads = void 0;

	    if (main !== undefined) {
	      loads = new Array(resources.length + 1);
	      loads[0] = main.load(container, loadContext);
	      for (var i = 0, ii = resources.length; i < ii; ++i) {
	        loads[i + 1] = resources[i].load(container, loadContext);
	      }
	    } else {
	      loads = new Array(resources.length);
	      for (var _i = 0, _ii = resources.length; _i < _ii; ++_i) {
	        loads[_i] = resources[_i].load(container, loadContext);
	      }
	    }

	    this.onLoaded = Promise.all(loads);
	    return this.onLoaded;
	  };

	  return ResourceModule;
	}();

	var ResourceDescription = exports.ResourceDescription = function () {
	  function ResourceDescription(key, exportedValue, resourceTypeMeta) {
	    _classCallCheck(this, ResourceDescription);

	    if (!resourceTypeMeta) {
	      resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue);

	      if (!resourceTypeMeta) {
	        resourceTypeMeta = new HtmlBehaviorResource();
	        resourceTypeMeta.elementName = _hyphenate(key);
	        _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, resourceTypeMeta, exportedValue);
	      }
	    }

	    if (resourceTypeMeta instanceof HtmlBehaviorResource) {
	      if (resourceTypeMeta.elementName === undefined) {
	        resourceTypeMeta.elementName = _hyphenate(key);
	      } else if (resourceTypeMeta.attributeName === undefined) {
	        resourceTypeMeta.attributeName = _hyphenate(key);
	      } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
	        HtmlBehaviorResource.convention(key, resourceTypeMeta);
	      }
	    } else if (!resourceTypeMeta.name) {
	      resourceTypeMeta.name = _hyphenate(key);
	    }

	    this.metadata = resourceTypeMeta;
	    this.value = exportedValue;
	  }

	  ResourceDescription.prototype.initialize = function initialize(container) {
	    this.metadata.initialize(container, this.value);
	  };

	  ResourceDescription.prototype.register = function register(registry, name) {
	    this.metadata.register(registry, name);
	  };

	  ResourceDescription.prototype.load = function load(container, loadContext) {
	    return this.metadata.load(container, this.value, loadContext);
	  };

	  return ResourceDescription;
	}();

	var ModuleAnalyzer = exports.ModuleAnalyzer = function () {
	  function ModuleAnalyzer() {
	    _classCallCheck(this, ModuleAnalyzer);

	    this.cache = Object.create(null);
	  }

	  ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
	    return this.cache[moduleId];
	  };

	  ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
	    var mainResource = void 0;
	    var fallbackValue = void 0;
	    var fallbackKey = void 0;
	    var resourceTypeMeta = void 0;
	    var key = void 0;
	    var exportedValue = void 0;
	    var resources = [];
	    var conventional = void 0;
	    var vs = void 0;
	    var resourceModule = void 0;

	    resourceModule = this.cache[moduleId];
	    if (resourceModule) {
	      return resourceModule;
	    }

	    resourceModule = new ResourceModule(moduleId);
	    this.cache[moduleId] = resourceModule;

	    if (typeof moduleInstance === 'function') {
	      moduleInstance = { 'default': moduleInstance };
	    }

	    if (mainResourceKey) {
	      mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]);
	    }

	    for (key in moduleInstance) {
	      exportedValue = moduleInstance[key];

	      if (key === mainResourceKey || typeof exportedValue !== 'function') {
	        continue;
	      }

	      resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue);

	      if (resourceTypeMeta) {
	        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
	          HtmlBehaviorResource.convention(key, resourceTypeMeta);
	        }

	        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
	          resourceTypeMeta.elementName = _hyphenate(key);
	        }

	        if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
	          mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
	        } else {
	          resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
	        }
	      } else if (viewStrategy.decorates(exportedValue)) {
	        vs = exportedValue;
	      } else if (exportedValue instanceof _aureliaLoader.TemplateRegistryEntry) {
	        vs = new TemplateRegistryViewStrategy(moduleId, exportedValue);
	      } else {
	        if (conventional = HtmlBehaviorResource.convention(key)) {
	          if (conventional.elementName !== null && !mainResource) {
	            mainResource = new ResourceDescription(key, exportedValue, conventional);
	          } else {
	            resources.push(new ResourceDescription(key, exportedValue, conventional));
	          }

	          _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
	        } else if (conventional = _aureliaBinding.ValueConverterResource.convention(key)) {
	          resources.push(new ResourceDescription(key, exportedValue, conventional));
	          _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
	        } else if (conventional = _aureliaBinding.BindingBehaviorResource.convention(key)) {
	          resources.push(new ResourceDescription(key, exportedValue, conventional));
	          _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
	        } else if (!fallbackValue) {
	          fallbackValue = exportedValue;
	          fallbackKey = key;
	        }
	      }
	    }

	    if (!mainResource && fallbackValue) {
	      mainResource = new ResourceDescription(fallbackKey, fallbackValue);
	    }

	    resourceModule.moduleInstance = moduleInstance;
	    resourceModule.mainResource = mainResource;
	    resourceModule.resources = resources;
	    resourceModule.viewStrategy = vs;

	    return resourceModule;
	  };

	  return ModuleAnalyzer;
	}();

	var logger = LogManager.getLogger('templating');

	function ensureRegistryEntry(loader, urlOrRegistryEntry) {
	  if (urlOrRegistryEntry instanceof _aureliaLoader.TemplateRegistryEntry) {
	    return Promise.resolve(urlOrRegistryEntry);
	  }

	  return loader.loadTemplate(urlOrRegistryEntry);
	}

	var ProxyViewFactory = function () {
	  function ProxyViewFactory(promise) {
	    var _this7 = this;

	    _classCallCheck(this, ProxyViewFactory);

	    promise.then(function (x) {
	      return _this7.viewFactory = x;
	    });
	  }

	  ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
	    return this.viewFactory.create(container, bindingContext, createInstruction, element);
	  };

	  ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
	    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
	  };

	  ProxyViewFactory.prototype.getCachedView = function getCachedView() {
	    return this.viewFactory.getCachedView();
	  };

	  ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
	    this.viewFactory.returnViewToCache(view);
	  };

	  _createClass(ProxyViewFactory, [{
	    key: 'isCaching',
	    get: function get() {
	      return this.viewFactory.isCaching;
	    }
	  }]);

	  return ProxyViewFactory;
	}();

	var ViewEngine = exports.ViewEngine = (_dec7 = (0, _aureliaDependencyInjection.inject)(_aureliaLoader.Loader, _aureliaDependencyInjection.Container, ViewCompiler, ModuleAnalyzer, ViewResources), _dec7(_class14 = function () {
	  function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
	    _classCallCheck(this, ViewEngine);

	    this.loader = loader;
	    this.container = container;
	    this.viewCompiler = viewCompiler;
	    this.moduleAnalyzer = moduleAnalyzer;
	    this.appResources = appResources;
	    this._pluginMap = {};
	  }

	  ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
	    var name = extension.replace('.', '') + '-resource-plugin';
	    this._pluginMap[extension] = name;
	    this.loader.addPlugin(name, implementation);
	  };

	  ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext) {
	    var _this8 = this;

	    loadContext = loadContext || new ResourceLoadContext();

	    return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (registryEntry) {
	      if (registryEntry.onReady) {
	        if (!loadContext.hasDependency(urlOrRegistryEntry)) {
	          loadContext.addDependency(urlOrRegistryEntry);
	          return registryEntry.onReady;
	        }

	        return Promise.resolve(new ProxyViewFactory(registryEntry.onReady));
	      }

	      loadContext.addDependency(urlOrRegistryEntry);

	      registryEntry.onReady = _this8.loadTemplateResources(registryEntry, compileInstruction, loadContext).then(function (resources) {
	        registryEntry.resources = resources;
	        var viewFactory = _this8.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
	        registryEntry.factory = viewFactory;
	        return viewFactory;
	      });

	      return registryEntry.onReady;
	    });
	  };

	  ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext) {
	    var resources = new ViewResources(this.appResources, registryEntry.address);
	    var dependencies = registryEntry.dependencies;
	    var importIds = void 0;
	    var names = void 0;

	    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

	    if (dependencies.length === 0 && !compileInstruction.associatedModuleId) {
	      return Promise.resolve(resources);
	    }

	    importIds = dependencies.map(function (x) {
	      return x.src;
	    });
	    names = dependencies.map(function (x) {
	      return x.name;
	    });
	    logger.debug('importing resources for ' + registryEntry.address, importIds);

	    return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
	  };

	  ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
	    var _this9 = this;

	    return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
	      var normalizedId = _aureliaMetadata.Origin.get(viewModelModule).moduleId;
	      var resourceModule = _this9.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

	      if (!resourceModule.mainResource) {
	        throw new Error('No view model found in module "' + moduleImport + '".');
	      }

	      resourceModule.initialize(_this9.container);

	      return resourceModule.mainResource;
	    });
	  };

	  ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
	    var _this10 = this;

	    loadContext = loadContext || new ResourceLoadContext();
	    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

	    moduleIds = moduleIds.map(function (x) {
	      return _this10._applyLoaderPlugin(x);
	    });

	    return this.loader.loadAllModules(moduleIds).then(function (imports) {
	      var i = void 0;
	      var ii = void 0;
	      var analysis = void 0;
	      var normalizedId = void 0;
	      var current = void 0;
	      var associatedModule = void 0;
	      var container = _this10.container;
	      var moduleAnalyzer = _this10.moduleAnalyzer;
	      var allAnalysis = new Array(imports.length);

	      for (i = 0, ii = imports.length; i < ii; ++i) {
	        current = imports[i];
	        normalizedId = _aureliaMetadata.Origin.get(current).moduleId;

	        analysis = moduleAnalyzer.analyze(normalizedId, current);
	        analysis.initialize(container);
	        analysis.register(resources, names[i]);

	        allAnalysis[i] = analysis;
	      }

	      if (compileInstruction.associatedModuleId) {
	        associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId);

	        if (associatedModule) {
	          associatedModule.register(resources);
	        }
	      }

	      for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
	        allAnalysis[i] = allAnalysis[i].load(container, loadContext);
	      }

	      return Promise.all(allAnalysis).then(function () {
	        return resources;
	      });
	    });
	  };

	  ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
	    var index = id.lastIndexOf('.');
	    if (index !== -1) {
	      var ext = id.substring(index);
	      var pluginName = this._pluginMap[ext];

	      if (pluginName === undefined) {
	        return id;
	      }

	      return this.loader.applyPluginToUrl(id, pluginName);
	    }

	    return id;
	  };

	  return ViewEngine;
	}()) || _class14);

	var Controller = exports.Controller = function () {
	  function Controller(behavior, instruction, viewModel, elementEvents) {
	    _classCallCheck(this, Controller);

	    this.behavior = behavior;
	    this.instruction = instruction;
	    this.viewModel = viewModel;
	    this.isAttached = false;
	    this.view = null;
	    this.isBound = false;
	    this.scope = null;
	    this.elementEvents = elementEvents || null;

	    var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel);
	    var handlesBind = behavior.handlesBind;
	    var attributes = instruction.attributes;
	    var boundProperties = this.boundProperties = [];
	    var properties = behavior.properties;
	    var i = void 0;
	    var ii = void 0;

	    behavior._ensurePropertiesDefined(viewModel, observerLookup);

	    for (i = 0, ii = properties.length; i < ii; ++i) {
	      properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
	    }
	  }

	  Controller.prototype.created = function created(owningView) {
	    if (this.behavior.handlesCreated) {
	      this.viewModel.created(owningView, this.view);
	    }
	  };

	  Controller.prototype.automate = function automate(overrideContext, owningView) {
	    this.view.bindingContext = this.viewModel;
	    this.view.overrideContext = overrideContext || (0, _aureliaBinding.createOverrideContext)(this.viewModel);
	    this.view._isUserControlled = true;

	    if (this.behavior.handlesCreated) {
	      this.viewModel.created(owningView || null, this.view);
	    }

	    this.bind(this.view);
	  };

	  Controller.prototype.bind = function bind(scope) {
	    var skipSelfSubscriber = this.behavior.handlesBind;
	    var boundProperties = this.boundProperties;
	    var i = void 0;
	    var ii = void 0;
	    var x = void 0;
	    var observer = void 0;
	    var selfSubscriber = void 0;

	    if (this.isBound) {
	      if (this.scope === scope) {
	        return;
	      }

	      this.unbind();
	    }

	    this.isBound = true;
	    this.scope = scope;

	    for (i = 0, ii = boundProperties.length; i < ii; ++i) {
	      x = boundProperties[i];
	      observer = x.observer;
	      selfSubscriber = observer.selfSubscriber;
	      observer.publishing = false;

	      if (skipSelfSubscriber) {
	        observer.selfSubscriber = null;
	      }

	      x.binding.bind(scope);
	      observer.call();

	      observer.publishing = true;
	      observer.selfSubscriber = selfSubscriber;
	    }

	    var overrideContext = void 0;
	    if (this.view !== null) {
	      if (skipSelfSubscriber) {
	        this.view.viewModelScope = scope;
	      }

	      if (this.viewModel === scope.overrideContext.bindingContext) {
	        overrideContext = scope.overrideContext;
	      } else if (this.instruction.inheritBindingContext) {
	          overrideContext = (0, _aureliaBinding.createOverrideContext)(this.viewModel, scope.overrideContext);
	        } else {
	            overrideContext = (0, _aureliaBinding.createOverrideContext)(this.viewModel);
	            overrideContext.__parentOverrideContext = scope.overrideContext;
	          }
	      this.view.bind(this.viewModel, overrideContext);
	    } else if (skipSelfSubscriber) {
	      overrideContext = scope.overrideContext;

	      if (scope.overrideContext.__parentOverrideContext !== undefined && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements) {
	        overrideContext = Object.assign({}, scope.overrideContext);
	        overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext;
	      }
	      this.viewModel.bind(scope.bindingContext, overrideContext);
	    }
	  };

	  Controller.prototype.unbind = function unbind() {
	    if (this.isBound) {
	      var boundProperties = this.boundProperties;
	      var i = void 0;
	      var ii = void 0;

	      this.isBound = false;
	      this.scope = null;

	      if (this.view !== null) {
	        this.view.unbind();
	      }

	      if (this.behavior.handlesUnbind) {
	        this.viewModel.unbind();
	      }

	      if (this.elementEvents !== null) {
	        this.elementEvents.disposeAll();
	      }

	      for (i = 0, ii = boundProperties.length; i < ii; ++i) {
	        boundProperties[i].binding.unbind();
	      }
	    }
	  };

	  Controller.prototype.attached = function attached() {
	    if (this.isAttached) {
	      return;
	    }

	    this.isAttached = true;

	    if (this.behavior.handlesAttached) {
	      this.viewModel.attached();
	    }

	    if (this.view !== null) {
	      this.view.attached();
	    }
	  };

	  Controller.prototype.detached = function detached() {
	    if (this.isAttached) {
	      this.isAttached = false;

	      if (this.view !== null) {
	        this.view.detached();
	      }

	      if (this.behavior.handlesDetached) {
	        this.viewModel.detached();
	      }
	    }
	  };

	  return Controller;
	}();

	var BehaviorPropertyObserver = exports.BehaviorPropertyObserver = (_dec8 = (0, _aureliaBinding.subscriberCollection)(), _dec8(_class16 = function () {
	  function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
	    _classCallCheck(this, BehaviorPropertyObserver);

	    this.taskQueue = taskQueue;
	    this.obj = obj;
	    this.propertyName = propertyName;
	    this.notqueued = true;
	    this.publishing = false;
	    this.selfSubscriber = selfSubscriber;
	    this.currentValue = this.oldValue = initialValue;
	  }

	  BehaviorPropertyObserver.prototype.getValue = function getValue() {
	    return this.currentValue;
	  };

	  BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
	    var oldValue = this.currentValue;

	    if (oldValue !== newValue) {
	      if (this.publishing && this.notqueued) {
	        this.notqueued = false;
	        this.taskQueue.queueMicroTask(this);
	      }

	      this.oldValue = oldValue;
	      this.currentValue = newValue;
	    }
	  };

	  BehaviorPropertyObserver.prototype.call = function call() {
	    var oldValue = this.oldValue;
	    var newValue = this.currentValue;

	    this.notqueued = true;

	    if (newValue === oldValue) {
	      return;
	    }

	    if (this.selfSubscriber) {
	      this.selfSubscriber(newValue, oldValue);
	    }

	    this.callSubscribers(newValue, oldValue);
	    this.oldValue = newValue;
	  };

	  BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
	    this.addSubscriber(context, callable);
	  };

	  BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  return BehaviorPropertyObserver;
	}()) || _class16);


	function getObserver(behavior, instance, name) {
	  var lookup = instance.__observers__;

	  if (lookup === undefined) {
	    if (!behavior.isInitialized) {
	      behavior.initialize(_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container(), instance.constructor);
	    }

	    lookup = behavior.observerLocator.getOrCreateObserversLookup(instance);
	    behavior._ensurePropertiesDefined(instance, lookup);
	  }

	  return lookup[name];
	}

	var BindableProperty = exports.BindableProperty = function () {
	  function BindableProperty(nameOrConfig) {
	    _classCallCheck(this, BindableProperty);

	    if (typeof nameOrConfig === 'string') {
	      this.name = nameOrConfig;
	    } else {
	      Object.assign(this, nameOrConfig);
	    }

	    this.attribute = this.attribute || _hyphenate(this.name);
	    if (this.defaultBindingMode === null || this.defaultBindingMode === undefined) {
	      this.defaultBindingMode = _aureliaBinding.bindingMode.oneWay;
	    }
	    this.changeHandler = this.changeHandler || null;
	    this.owner = null;
	    this.descriptor = null;
	  }

	  BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
	    behavior.properties.push(this);
	    behavior.attributes[this.attribute] = this;
	    this.owner = behavior;

	    if (descriptor) {
	      this.descriptor = descriptor;
	      return this._configureDescriptor(behavior, descriptor);
	    }
	  };

	  BindableProperty.prototype._configureDescriptor = function _configureDescriptor(behavior, descriptor) {
	    var name = this.name;

	    descriptor.configurable = true;
	    descriptor.enumerable = true;

	    if ('initializer' in descriptor) {
	      this.defaultValue = descriptor.initializer;
	      delete descriptor.initializer;
	      delete descriptor.writable;
	    }

	    if ('value' in descriptor) {
	      this.defaultValue = descriptor.value;
	      delete descriptor.value;
	      delete descriptor.writable;
	    }

	    descriptor.get = function () {
	      return getObserver(behavior, this, name).getValue();
	    };

	    descriptor.set = function (value) {
	      getObserver(behavior, this, name).setValue(value);
	    };

	    descriptor.get.getObserver = function (obj) {
	      return getObserver(behavior, obj, name);
	    };

	    return descriptor;
	  };

	  BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
	    var name = this.name;
	    var handlerName = void 0;

	    if (this.changeHandler === null) {
	      handlerName = name + 'Changed';
	      if (handlerName in target.prototype) {
	        this.changeHandler = handlerName;
	      }
	    }

	    if (this.descriptor === null) {
	      Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
	    }
	  };

	  BindableProperty.prototype.createObserver = function createObserver(viewModel) {
	    var selfSubscriber = null;
	    var defaultValue = this.defaultValue;
	    var changeHandlerName = this.changeHandler;
	    var name = this.name;
	    var initialValue = void 0;

	    if (this.hasOptions) {
	      return undefined;
	    }

	    if (changeHandlerName in viewModel) {
	      if ('propertyChanged' in viewModel) {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          viewModel[changeHandlerName](newValue, oldValue);
	          viewModel.propertyChanged(name, newValue, oldValue);
	        };
	      } else {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          return viewModel[changeHandlerName](newValue, oldValue);
	        };
	      }
	    } else if ('propertyChanged' in viewModel) {
	      selfSubscriber = function selfSubscriber(newValue, oldValue) {
	        return viewModel.propertyChanged(name, newValue, oldValue);
	      };
	    } else if (changeHandlerName !== null) {
	      throw new Error('Change handler ' + changeHandlerName + ' was specified but not declared on the class.');
	    }

	    if (defaultValue !== undefined) {
	      initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
	    }

	    return new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
	  };

	  BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
	    var selfSubscriber = void 0;
	    var observer = void 0;
	    var attribute = void 0;
	    var defaultValue = this.defaultValue;

	    if (this.isDynamic) {
	      for (var key in attributes) {
	        this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
	      }
	    } else if (!this.hasOptions) {
	      observer = observerLookup[this.name];

	      if (attributes !== null) {
	        selfSubscriber = observer.selfSubscriber;
	        attribute = attributes[this.attribute];

	        if (behaviorHandlesBind) {
	          observer.selfSubscriber = null;
	        }

	        if (typeof attribute === 'string') {
	          viewModel[this.name] = attribute;
	          observer.call();
	        } else if (attribute) {
	          boundProperties.push({ observer: observer, binding: attribute.createBinding(viewModel) });
	        } else if (defaultValue !== undefined) {
	          observer.call();
	        }

	        observer.selfSubscriber = selfSubscriber;
	      }

	      observer.publishing = true;
	    }
	  };

	  BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
	    var changeHandlerName = name + 'Changed';
	    var selfSubscriber = null;
	    var observer = void 0;
	    var info = void 0;

	    if (changeHandlerName in viewModel) {
	      if ('propertyChanged' in viewModel) {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          viewModel[changeHandlerName](newValue, oldValue);
	          viewModel.propertyChanged(name, newValue, oldValue);
	        };
	      } else {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          return viewModel[changeHandlerName](newValue, oldValue);
	        };
	      }
	    } else if ('propertyChanged' in viewModel) {
	      selfSubscriber = function selfSubscriber(newValue, oldValue) {
	        return viewModel.propertyChanged(name, newValue, oldValue);
	      };
	    }

	    observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber);

	    Object.defineProperty(viewModel, name, {
	      configurable: true,
	      enumerable: true,
	      get: observer.getValue.bind(observer),
	      set: observer.setValue.bind(observer)
	    });

	    if (behaviorHandlesBind) {
	      observer.selfSubscriber = null;
	    }

	    if (typeof attribute === 'string') {
	      viewModel[name] = attribute;
	      observer.call();
	    } else if (attribute) {
	      info = { observer: observer, binding: attribute.createBinding(viewModel) };
	      boundProperties.push(info);
	    }

	    observer.publishing = true;
	    observer.selfSubscriber = selfSubscriber;
	  };

	  return BindableProperty;
	}();

	var contentSelectorViewCreateInstruction = { enhance: false };
	var lastProviderId = 0;

	function nextProviderId() {
	  return ++lastProviderId;
	}

	function doProcessContent() {
	  return true;
	}
	function doProcessAttributes() {}

	var HtmlBehaviorResource = exports.HtmlBehaviorResource = function () {
	  function HtmlBehaviorResource() {
	    _classCallCheck(this, HtmlBehaviorResource);

	    this.elementName = null;
	    this.attributeName = null;
	    this.attributeDefaultBindingMode = undefined;
	    this.liftsContent = false;
	    this.targetShadowDOM = false;
	    this.processAttributes = doProcessAttributes;
	    this.processContent = doProcessContent;
	    this.usesShadowDOM = false;
	    this.childBindings = null;
	    this.hasDynamicOptions = false;
	    this.containerless = false;
	    this.properties = [];
	    this.attributes = {};
	    this.isInitialized = false;
	  }

	  HtmlBehaviorResource.convention = function convention(name, existing) {
	    var behavior = void 0;

	    if (name.endsWith('CustomAttribute')) {
	      behavior = existing || new HtmlBehaviorResource();
	      behavior.attributeName = _hyphenate(name.substring(0, name.length - 15));
	    }

	    if (name.endsWith('CustomElement')) {
	      behavior = existing || new HtmlBehaviorResource();
	      behavior.elementName = _hyphenate(name.substring(0, name.length - 13));
	    }

	    return behavior;
	  };

	  HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
	    if (this.childBindings === null) {
	      this.childBindings = [];
	    }

	    this.childBindings.push(behavior);
	  };

	  HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
	    var proto = target.prototype;
	    var properties = this.properties;
	    var attributeName = this.attributeName;
	    var attributeDefaultBindingMode = this.attributeDefaultBindingMode;
	    var i = void 0;
	    var ii = void 0;
	    var current = void 0;

	    if (this.isInitialized) {
	      return;
	    }

	    this.isInitialized = true;
	    target.__providerId__ = nextProviderId();

	    this.observerLocator = container.get(_aureliaBinding.ObserverLocator);
	    this.taskQueue = container.get(_aureliaTaskQueue.TaskQueue);

	    this.target = target;
	    this.usesShadowDOM = this.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM;
	    this.handlesCreated = 'created' in proto;
	    this.handlesBind = 'bind' in proto;
	    this.handlesUnbind = 'unbind' in proto;
	    this.handlesAttached = 'attached' in proto;
	    this.handlesDetached = 'detached' in proto;
	    this.htmlName = this.elementName || this.attributeName;

	    if (attributeName !== null) {
	      if (properties.length === 0) {
	        new BindableProperty({
	          name: 'value',
	          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
	          attribute: attributeName,
	          defaultBindingMode: attributeDefaultBindingMode
	        }).registerWith(target, this);
	      }

	      current = properties[0];

	      if (properties.length === 1 && current.name === 'value') {
	        current.isDynamic = current.hasOptions = this.hasDynamicOptions;
	        current.defineOn(target, this);
	      } else {
	        for (i = 0, ii = properties.length; i < ii; ++i) {
	          properties[i].defineOn(target, this);
	        }

	        current = new BindableProperty({
	          name: 'value',
	          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
	          attribute: attributeName,
	          defaultBindingMode: attributeDefaultBindingMode
	        });

	        current.hasOptions = true;
	        current.registerWith(target, this);
	      }
	    } else {
	      for (i = 0, ii = properties.length; i < ii; ++i) {
	        properties[i].defineOn(target, this);
	      }
	    }
	  };

	  HtmlBehaviorResource.prototype.register = function register(registry, name) {
	    if (this.attributeName !== null) {
	      registry.registerAttribute(name || this.attributeName, this, this.attributeName);
	    }

	    if (this.elementName !== null) {
	      registry.registerElement(name || this.elementName, this);
	    }
	  };

	  HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
	    var _this11 = this;

	    var options = void 0;

	    if (this.elementName !== null) {
	      viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target);
	      options = new ViewCompileInstruction(this.targetShadowDOM, true);

	      if (!viewStrategy.moduleId) {
	        viewStrategy.moduleId = _aureliaMetadata.Origin.get(target).moduleId;
	      }

	      return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext).then(function (viewFactory) {
	        if (!transientView || !_this11.viewFactory) {
	          _this11.viewFactory = viewFactory;
	        }

	        return viewFactory;
	      });
	    }

	    return Promise.resolve(this);
	  };

	  HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
	    if (this.liftsContent) {
	      if (!instruction.viewFactory) {
	        var template = _aureliaPal.DOM.createElement('template');
	        var fragment = _aureliaPal.DOM.createDocumentFragment();
	        var cacheSize = node.getAttribute('view-cache');
	        var part = node.getAttribute('part');

	        node.removeAttribute(instruction.originalAttrName);
	        _aureliaPal.DOM.replaceNode(template, node, parentNode);
	        fragment.appendChild(node);
	        instruction.viewFactory = compiler.compile(fragment, resources);

	        if (part) {
	          instruction.viewFactory.part = part;
	          node.removeAttribute('part');
	        }

	        if (cacheSize) {
	          instruction.viewFactory.setCacheSize(cacheSize);
	          node.removeAttribute('view-cache');
	        }

	        node = template;
	      }
	    } else if (this.elementName !== null) {
	      var _partReplacements2 = {};

	      if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
	        if (this.usesShadowDOM) {
	          var currentChild = node.firstChild;
	          var nextSibling = void 0;
	          var toReplace = void 0;

	          while (currentChild) {
	            nextSibling = currentChild.nextSibling;

	            if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
	              _partReplacements2[toReplace] = compiler.compile(currentChild, resources);
	              _aureliaPal.DOM.removeNode(currentChild, parentNode);
	              instruction.partReplacements = _partReplacements2;
	            }

	            currentChild = nextSibling;
	          }

	          instruction.skipContentProcessing = false;
	        } else {
	          var _fragment = _aureliaPal.DOM.createDocumentFragment();
	          var _currentChild = node.firstChild;
	          var _nextSibling = void 0;
	          var _toReplace = void 0;

	          while (_currentChild) {
	            _nextSibling = _currentChild.nextSibling;

	            if (_currentChild.tagName === 'TEMPLATE' && (_toReplace = _currentChild.getAttribute('replace-part'))) {
	              _partReplacements2[_toReplace] = compiler.compile(_currentChild, resources);
	              _aureliaPal.DOM.removeNode(_currentChild, parentNode);
	              instruction.partReplacements = _partReplacements2;
	            } else {
	              _fragment.appendChild(_currentChild);
	            }

	            _currentChild = _nextSibling;
	          }

	          instruction.contentFactory = compiler.compile(_fragment, resources);
	          instruction.skipContentProcessing = true;
	        }
	      } else {
	        instruction.skipContentProcessing = true;
	      }
	    }

	    return node;
	  };

	  HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
	    var host = void 0;
	    var au = null;

	    instruction = instruction || BehaviorInstruction.normal;
	    element = element || null;
	    bindings = bindings || null;

	    if (this.elementName !== null && element) {
	      if (this.usesShadowDOM) {
	        host = element.createShadowRoot();
	        container.registerInstance(_aureliaPal.DOM.boundary, host);
	      } else {
	        host = element;

	        if (this.targetShadowDOM) {
	          container.registerInstance(_aureliaPal.DOM.boundary, host);
	        }
	      }
	    }

	    if (element !== null) {
	      element.au = au = element.au || {};
	    }

	    var viewModel = instruction.viewModel || container.get(this.target);
	    var controller = new Controller(this, instruction, viewModel, container.elementEvents);
	    var childBindings = this.childBindings;
	    var viewFactory = void 0;

	    if (this.liftsContent) {
	      au.controller = controller;
	    } else if (this.elementName !== null) {
	      viewFactory = instruction.viewFactory || this.viewFactory;
	      container.viewModel = viewModel;

	      if (viewFactory) {
	        controller.view = viewFactory.create(container, instruction, element);
	      }

	      if (element !== null) {
	        au.controller = controller;

	        if (controller.view) {
	          if (!this.usesShadowDOM) {
	            if (instruction.contentFactory) {
	              var contentView = instruction.contentFactory.create(container, contentSelectorViewCreateInstruction);

	              _ContentSelector.applySelectors(contentView, controller.view.contentSelectors, function (contentSelector, group) {
	                return contentSelector.add(group);
	              });

	              controller.contentView = contentView;
	            }
	          }

	          if (instruction.anchorIsContainer) {
	            if (childBindings !== null) {
	              for (var i = 0, ii = childBindings.length; i < ii; ++i) {
	                controller.view.addBinding(childBindings[i].create(element, viewModel));
	              }
	            }

	            controller.view.appendNodesTo(host);
	          } else {
	            controller.view.insertNodesBefore(host);
	          }
	        } else if (childBindings !== null) {
	          for (var _i2 = 0, _ii2 = childBindings.length; _i2 < _ii2; ++_i2) {
	            bindings.push(childBindings[_i2].create(element, viewModel));
	          }
	        }
	      } else if (controller.view) {
	        controller.view.controller = controller;

	        if (childBindings !== null) {
	          for (var _i3 = 0, _ii3 = childBindings.length; _i3 < _ii3; ++_i3) {
	            controller.view.addBinding(childBindings[_i3].create(instruction.host, viewModel));
	          }
	        }
	      } else if (childBindings !== null) {
	        for (var _i4 = 0, _ii4 = childBindings.length; _i4 < _ii4; ++_i4) {
	          bindings.push(childBindings[_i4].create(instruction.host, viewModel));
	        }
	      }
	    } else if (childBindings !== null) {
	      for (var _i5 = 0, _ii5 = childBindings.length; _i5 < _ii5; ++_i5) {
	        bindings.push(childBindings[_i5].create(element, viewModel));
	      }
	    }

	    if (au !== null) {
	      au[this.htmlName] = controller;
	    }

	    if (instruction.initiatedByBehavior && viewFactory) {
	      controller.view.created();
	    }

	    return controller;
	  };

	  HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
	    var properties = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var observer = void 0;

	    if ('__propertiesDefined__' in lookup) {
	      return;
	    }

	    lookup.__propertiesDefined__ = true;
	    properties = this.properties;

	    for (i = 0, ii = properties.length; i < ii; ++i) {
	      observer = properties[i].createObserver(instance);

	      if (observer !== undefined) {
	        lookup[observer.propertyName] = observer;
	      }
	    }
	  };

	  return HtmlBehaviorResource;
	}();

	function createChildObserverDecorator(selectorOrConfig, all) {
	  return function (target, key, descriptor) {
	    var actualTarget = typeof key === 'string' ? target.constructor : target;
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);

	    if (typeof selectorOrConfig === 'string') {
	      selectorOrConfig = {
	        selector: selectorOrConfig,
	        name: key
	      };
	    }

	    if (descriptor) {
	      descriptor.writable = true;
	    }

	    selectorOrConfig.all = all;
	    r.addChildBinding(new ChildObserver(selectorOrConfig));
	  };
	}

	function children(selectorOrConfig) {
	  return createChildObserverDecorator(selectorOrConfig, true);
	}

	function child(selectorOrConfig) {
	  return createChildObserverDecorator(selectorOrConfig, false);
	}

	var ChildObserver = function () {
	  function ChildObserver(config) {
	    _classCallCheck(this, ChildObserver);

	    this.name = config.name;
	    this.changeHandler = config.changeHandler || this.name + 'Changed';
	    this.selector = config.selector;
	    this.all = config.all;
	  }

	  ChildObserver.prototype.create = function create(target, viewModel) {
	    return new ChildObserverBinder(this.selector, target, this.name, viewModel, this.changeHandler, this.all);
	  };

	  return ChildObserver;
	}();

	var noMutations = [];

	function trackMutation(groupedMutations, binder, record) {
	  var mutations = groupedMutations.get(binder);

	  if (!mutations) {
	    mutations = [];
	    groupedMutations.set(binder, mutations);
	  }

	  mutations.push(record);
	}

	function onChildChange(mutations, observer) {
	  var binders = observer.binders;
	  var bindersLength = binders.length;
	  var groupedMutations = new Map();

	  for (var i = 0, ii = mutations.length; i < ii; ++i) {
	    var record = mutations[i];
	    var added = record.addedNodes;
	    var removed = record.removedNodes;

	    for (var j = 0, jj = removed.length; j < jj; ++j) {
	      var node = removed[j];
	      if (node.nodeType === 1) {
	        for (var k = 0; k < bindersLength; ++k) {
	          var binder = binders[k];
	          if (binder.onRemove(node)) {
	            trackMutation(groupedMutations, binder, record);
	          }
	        }
	      }
	    }

	    for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
	      var _node = added[_j];
	      if (_node.nodeType === 1) {
	        for (var _k = 0; _k < bindersLength; ++_k) {
	          var _binder = binders[_k];
	          if (_binder.onAdd(_node)) {
	            trackMutation(groupedMutations, _binder, record);
	          }
	        }
	      }
	    }
	  }

	  groupedMutations.forEach(function (value, key) {
	    if (key.changeHandler !== null) {
	      key.viewModel[key.changeHandler](value);
	    }
	  });
	}

	var ChildObserverBinder = function () {
	  function ChildObserverBinder(selector, target, property, viewModel, changeHandler, all) {
	    _classCallCheck(this, ChildObserverBinder);

	    this.selector = selector;
	    this.target = target;
	    this.property = property;
	    this.viewModel = viewModel;
	    this.changeHandler = changeHandler in viewModel ? changeHandler : null;
	    this.all = all;
	  }

	  ChildObserverBinder.prototype.bind = function bind(source) {
	    var target = this.target;
	    var viewModel = this.viewModel;
	    var selector = this.selector;
	    var current = target.firstElementChild;
	    var observer = target.__childObserver__;

	    if (!observer) {
	      observer = target.__childObserver__ = _aureliaPal.DOM.createMutationObserver(onChildChange);
	      observer.observe(target, { childList: true });
	      observer.binders = [];
	    }

	    observer.binders.push(this);

	    if (this.all) {
	      var items = viewModel[this.property];
	      if (!items) {
	        items = viewModel[this.property] = [];
	      } else {
	        items.length = 0;
	      }

	      while (current) {
	        if (current.matches(selector)) {
	          items.push(current.au && current.au.controller ? current.au.controller.viewModel : current);
	        }

	        current = current.nextElementSibling;
	      }

	      if (this.changeHandler !== null) {
	        this.viewModel[this.changeHandler](noMutations);
	      }
	    } else {
	      while (current) {
	        if (current.matches(selector)) {
	          var value = current.au && current.au.controller ? current.au.controller.viewModel : current;
	          this.viewModel[this.property] = value;

	          if (this.changeHandler !== null) {
	            this.viewModel[this.changeHandler](value);
	          }

	          break;
	        }

	        current = current.nextElementSibling;
	      }
	    }
	  };

	  ChildObserverBinder.prototype.onRemove = function onRemove(element) {
	    if (element.matches(this.selector)) {
	      var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

	      if (this.all) {
	        var items = this.viewModel[this.property];
	        var index = items.indexOf(value);

	        if (index !== -1) {
	          items.splice(index, 1);
	        }

	        return true;
	      }

	      return false;
	    }
	  };

	  ChildObserverBinder.prototype.onAdd = function onAdd(element) {
	    var selector = this.selector;

	    if (element.matches(selector)) {
	      var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

	      if (this.all) {
	        var items = this.viewModel[this.property];
	        var index = 0;
	        var prev = element.previousElementSibling;

	        while (prev) {
	          if (prev.matches(selector)) {
	            index++;
	          }

	          prev = prev.previousElementSibling;
	        }

	        items.splice(index, 0, value);
	        return true;
	      }

	      this.viewModel[this.property] = value;

	      if (this.changeHandler !== null) {
	        this.viewModel[this.changeHandler](value);
	      }
	    }

	    return false;
	  };

	  ChildObserverBinder.prototype.unbind = function unbind() {
	    if (this.target.__childObserver__) {
	      this.target.__childObserver__.disconnect();
	      this.target.__childObserver__ = null;
	    }
	  };

	  return ChildObserverBinder;
	}();

	function tryActivateViewModel(context) {
	  if (context.skipActivation || typeof context.viewModel.activate !== 'function') {
	    return Promise.resolve();
	  }

	  return context.viewModel.activate(context.model) || Promise.resolve();
	}

	var CompositionEngine = exports.CompositionEngine = (_dec9 = (0, _aureliaDependencyInjection.inject)(ViewEngine, ViewLocator), _dec9(_class17 = function () {
	  function CompositionEngine(viewEngine, viewLocator) {
	    _classCallCheck(this, CompositionEngine);

	    this.viewEngine = viewEngine;
	    this.viewLocator = viewLocator;
	  }

	  CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
	    function swap(controller) {
	      return Promise.resolve(context.viewSlot.removeAll(true)).then(function () {
	        if (context.currentController) {
	          context.currentController.unbind();
	        }

	        context.viewSlot.add(controller.view);

	        if (context.compositionTransactionNotifier) {
	          context.compositionTransactionNotifier.done();
	        }

	        return controller;
	      });
	    }

	    return this.createController(context).then(function (controller) {
	      controller.automate(context.overrideContext, context.owningView);

	      if (context.compositionTransactionOwnershipToken) {
	        return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
	          return swap(controller);
	        });
	      }

	      return swap(controller);
	    });
	  };

	  CompositionEngine.prototype.createController = function createController(context) {
	    var _this12 = this;

	    var childContainer = void 0;
	    var viewModel = void 0;
	    var viewModelResource = void 0;
	    var m = void 0;

	    return this.ensureViewModel(context).then(tryActivateViewModel).then(function () {
	      childContainer = context.childContainer;
	      viewModel = context.viewModel;
	      viewModelResource = context.viewModelResource;
	      m = viewModelResource.metadata;

	      var viewStrategy = _this12.viewLocator.getViewStrategy(context.view || viewModel);

	      if (context.viewResources) {
	        viewStrategy.makeRelativeTo(context.viewResources.viewUrl);
	      }

	      return m.load(childContainer, viewModelResource.value, null, viewStrategy, true);
	    }).then(function (viewFactory) {
	      return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
	    });
	  };

	  CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
	    var childContainer = context.childContainer = context.childContainer || context.container.createChild();

	    if (typeof context.viewModel === 'string') {
	      context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel;

	      return this.viewEngine.importViewModelResource(context.viewModel).then(function (viewModelResource) {
	        childContainer.autoRegister(viewModelResource.value);

	        if (context.host) {
	          childContainer.registerInstance(_aureliaPal.DOM.Element, context.host);
	        }

	        context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
	        context.viewModelResource = viewModelResource;
	        return context;
	      });
	    }

	    var m = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, context.viewModel.constructor);
	    m.elementName = m.elementName || 'dynamic-element';
	    m.initialize(context.container || childContainer, context.viewModel.constructor);
	    context.viewModelResource = { metadata: m, value: context.viewModel.constructor };
	    childContainer.viewModel = context.viewModel;
	    return Promise.resolve(context);
	  };

	  CompositionEngine.prototype.compose = function compose(context) {
	    context.childContainer = context.childContainer || context.container.createChild();
	    context.view = this.viewLocator.getViewStrategy(context.view);

	    var transaction = context.childContainer.get(CompositionTransaction);
	    var compositionTransactionOwnershipToken = transaction.tryCapture();

	    if (compositionTransactionOwnershipToken) {
	      context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken;
	    } else {
	      context.compositionTransactionNotifier = transaction.enlist();
	    }

	    if (context.viewModel) {
	      return this._createControllerAndSwap(context);
	    } else if (context.view) {
	      if (context.viewResources) {
	        context.view.makeRelativeTo(context.viewResources.viewUrl);
	      }

	      return context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function (viewFactory) {
	        var result = viewFactory.create(context.childContainer);
	        result.bind(context.bindingContext, context.overrideContext);

	        var work = function work() {
	          return Promise.resolve(context.viewSlot.removeAll(true)).then(function () {
	            context.viewSlot.add(result);

	            if (context.compositionTransactionNotifier) {
	              context.compositionTransactionNotifier.done();
	            }

	            return result;
	          });
	        };

	        if (context.compositionTransactionOwnershipToken) {
	          return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(work);
	        }

	        return work();
	      });
	    } else if (context.viewSlot) {
	      context.viewSlot.removeAll();

	      if (context.compositionTransactionNotifier) {
	        context.compositionTransactionNotifier.done();
	      }

	      return Promise.resolve(null);
	    }
	  };

	  return CompositionEngine;
	}()) || _class17);

	var ElementConfigResource = exports.ElementConfigResource = function () {
	  function ElementConfigResource() {
	    _classCallCheck(this, ElementConfigResource);
	  }

	  ElementConfigResource.prototype.initialize = function initialize(container, target) {};

	  ElementConfigResource.prototype.register = function register(registry, name) {};

	  ElementConfigResource.prototype.load = function load(container, target) {
	    var config = new target();
	    var eventManager = container.get(_aureliaBinding.EventManager);
	    eventManager.registerElementConfig(config);
	  };

	  return ElementConfigResource;
	}();

	function validateBehaviorName(name, type) {
	  if (/[A-Z]/.test(name)) {
	    var newName = _hyphenate(name);
	    LogManager.getLogger('templating').warn('\'' + name + '\' is not a valid ' + type + ' name and has been converted to \'' + newName + '\'. Upper-case letters are not allowed because the DOM is not case-sensitive.');
	    return newName;
	  }
	  return name;
	}

	function resource(instance) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, instance, target);
	  };
	}

	function behavior(override) {
	  return function (target) {
	    if (override instanceof HtmlBehaviorResource) {
	      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, override, target);
	    } else {
	      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
	      Object.assign(r, override);
	    }
	  };
	}

	function customElement(name) {
	  return function (target) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
	    r.elementName = validateBehaviorName(name, 'custom element');
	  };
	}

	function customAttribute(name, defaultBindingMode) {
	  return function (target) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
	    r.attributeName = validateBehaviorName(name, 'custom attribute');
	    r.attributeDefaultBindingMode = defaultBindingMode;
	  };
	}

	function templateController(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.liftsContent = true;
	  };

	  return target ? deco(target) : deco;
	}

	function bindable(nameOrConfigOrTarget, key, descriptor) {
	  var deco = function deco(target, key2, descriptor2) {
	    var actualTarget = key2 ? target.constructor : target;
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);
	    var prop = void 0;

	    if (key2) {
	      nameOrConfigOrTarget = nameOrConfigOrTarget || {};
	      nameOrConfigOrTarget.name = key2;
	    }

	    prop = new BindableProperty(nameOrConfigOrTarget);
	    return prop.registerWith(actualTarget, r, descriptor2);
	  };

	  if (!nameOrConfigOrTarget) {
	    return deco;
	  }

	  if (key) {
	    var target = nameOrConfigOrTarget;
	    nameOrConfigOrTarget = null;
	    return deco(target, key, descriptor);
	  }

	  return deco;
	}

	function dynamicOptions(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.hasDynamicOptions = true;
	  };

	  return target ? deco(target) : deco;
	}

	function useShadowDOM(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.targetShadowDOM = true;
	  };

	  return target ? deco(target) : deco;
	}

	function processAttributes(processor) {
	  return function (t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.processAttributes = processor;
	  };
	}

	function doNotProcessContent() {
	  return false;
	}

	function processContent(processor) {
	  return function (t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.processContent = processor || doNotProcessContent;
	  };
	}

	function containerless(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.containerless = true;
	  };

	  return target ? deco(target) : deco;
	}

	function useViewStrategy(strategy) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, strategy, target);
	  };
	}

	function useView(path) {
	  return useViewStrategy(new RelativeViewStrategy(path));
	}

	function inlineView(markup, dependencies, dependencyBaseUrl) {
	  return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
	}

	function noView(target) {
	  var deco = function deco(t) {
	    _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(), t);
	  };

	  return target ? deco(target) : deco;
	}

	function elementConfig(target) {
	  var deco = function deco(t) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ElementConfigResource(), t);
	  };

	  return target ? deco(target) : deco;
	}

	var TemplatingEngine = exports.TemplatingEngine = (_dec10 = (0, _aureliaDependencyInjection.inject)(_aureliaDependencyInjection.Container, ModuleAnalyzer, ViewCompiler, CompositionEngine), _dec10(_class18 = function () {
	  function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {
	    _classCallCheck(this, TemplatingEngine);

	    this._container = container;
	    this._moduleAnalyzer = moduleAnalyzer;
	    this._viewCompiler = viewCompiler;
	    this._compositionEngine = compositionEngine;
	    container.registerInstance(Animator, Animator.instance = new Animator());
	  }

	  TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
	    this._container.unregister(Animator);
	    this._container.registerInstance(Animator, Animator.instance = animator);
	  };

	  TemplatingEngine.prototype.compose = function compose(context) {
	    return this._compositionEngine.compose(context);
	  };

	  TemplatingEngine.prototype.enhance = function enhance(instruction) {
	    if (instruction instanceof _aureliaPal.DOM.Element) {
	      instruction = { element: instruction };
	    }

	    var compilerInstructions = {};
	    var resources = instruction.resources || this._container.get(ViewResources);

	    this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, 'root', true);

	    var factory = new ViewFactory(instruction.element, compilerInstructions, resources);
	    var container = instruction.container || this._container.createChild();
	    var view = factory.create(container, BehaviorInstruction.enhance());

	    view.bind(instruction.bindingContext || {}, instruction.overrideContext);

	    return view;
	  };

	  TemplatingEngine.prototype.createControllerForUnitTest = function createControllerForUnitTest(viewModelType, attributesFromHTML) {
	    var _moduleAnalyzer$analy;

	    var exportName = viewModelType.name;
	    var resourceModule = this._moduleAnalyzer.analyze('test-module', (_moduleAnalyzer$analy = {}, _moduleAnalyzer$analy[exportName] = viewModelType, _moduleAnalyzer$analy), exportName);
	    var description = resourceModule.mainResource;

	    description.initialize(this._container);

	    var viewModel = this._container.get(viewModelType);
	    var instruction = BehaviorInstruction.unitTest(description, attributesFromHTML);

	    return new Controller(description.metadata, instruction, viewModel);
	  };

	  TemplatingEngine.prototype.createViewModelForUnitTest = function createViewModelForUnitTest(viewModelType, attributesFromHTML, bindingContext) {
	    var controller = this.createControllerForUnitTest(viewModelType, attributesFromHTML);
	    controller.bind((0, _aureliaBinding.createScopeForTest)(bindingContext));
	    return controller.viewModel;
	  };

	  return TemplatingEngine;
	}()) || _class18);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.relativeToFile = relativeToFile;
	exports.join = join;
	exports.buildQueryString = buildQueryString;
	exports.parseQueryString = parseQueryString;
	function trimDots(ary) {
	  for (var i = 0; i < ary.length; ++i) {
	    var part = ary[i];
	    if (part === '.') {
	      ary.splice(i, 1);
	      i -= 1;
	    } else if (part === '..') {
	      if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
	        continue;
	      } else if (i > 0) {
	        ary.splice(i - 1, 2);
	        i -= 2;
	      }
	    }
	  }
	}

	function relativeToFile(name, file) {
	  var fileParts = file && file.split('/');
	  var nameParts = name.trim().split('/');

	  if (nameParts[0].charAt(0) === '.' && fileParts) {
	    var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
	    nameParts.unshift.apply(nameParts, normalizedBaseParts);
	  }

	  trimDots(nameParts);

	  return nameParts.join('/');
	}

	function join(path1, path2) {
	  if (!path1) {
	    return path2;
	  }

	  if (!path2) {
	    return path1;
	  }

	  var schemeMatch = path1.match(/^([^/]*?:)\//);
	  var scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
	  path1 = path1.substr(scheme.length);

	  var urlPrefix = void 0;
	  if (path1.indexOf('///') === 0 && scheme === 'file:') {
	    urlPrefix = '///';
	  } else if (path1.indexOf('//') === 0) {
	    urlPrefix = '//';
	  } else if (path1.indexOf('/') === 0) {
	    urlPrefix = '/';
	  } else {
	    urlPrefix = '';
	  }

	  var trailingSlash = path2.slice(-1) === '/' ? '/' : '';

	  var url1 = path1.split('/');
	  var url2 = path2.split('/');
	  var url3 = [];

	  for (var i = 0, ii = url1.length; i < ii; ++i) {
	    if (url1[i] === '..') {
	      url3.pop();
	    } else if (url1[i] === '.' || url1[i] === '') {
	      continue;
	    } else {
	      url3.push(url1[i]);
	    }
	  }

	  for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) {
	    if (url2[_i] === '..') {
	      url3.pop();
	    } else if (url2[_i] === '.' || url2[_i] === '') {
	      continue;
	    } else {
	      url3.push(url2[_i]);
	    }
	  }

	  return scheme + urlPrefix + url3.join('/') + trailingSlash;
	}

	var encode = encodeURIComponent;
	var encodeKey = function encodeKey(k) {
	  return encode(k).replace('%24', '$');
	};

	function buildParam(key, value) {
	  var result = [];
	  if (value === null || value === undefined) {
	    return result;
	  }
	  if (Array.isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var arrayKey = key + '[' + (_typeof(value[i]) === 'object' && value[i] !== null ? i : '') + ']';
	      result = result.concat(buildParam(arrayKey, value[i]));
	    }
	  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	    for (var propertyName in value) {
	      result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
	    }
	  } else {
	    result.push(encodeKey(key) + '=' + encode(value));
	  }
	  return result;
	}

	function buildQueryString(params) {
	  var pairs = [];
	  var keys = Object.keys(params || {}).sort();
	  for (var i = 0, len = keys.length; i < len; i++) {
	    var key = keys[i];
	    pairs = pairs.concat(buildParam(key, params[key]));
	  }

	  if (pairs.length === 0) {
	    return '';
	  }

	  return pairs.join('&');
	}

	function processScalarParam(existedParam, value, isPrimitive) {
	  if (Array.isArray(existedParam)) {
	    existedParam.push(value);
	    return existedParam;
	  }
	  if (existedParam !== undefined) {
	    return isPrimitive ? value : [existedParam, value];
	  }

	  return value;
	}

	function parseComplexParam(queryParams, keys, value) {
	  var currentParams = queryParams;
	  var keysLastIndex = keys.length - 1;
	  for (var j = 0; j <= keysLastIndex; j++) {
	    var key = keys[j] === '' ? currentParams.length : keys[j];
	    if (j < keysLastIndex) {
	      currentParams = currentParams[key] = currentParams[key] || (isNaN(keys[j + 1]) ? {} : []);
	    } else {
	      currentParams = currentParams[key] = value;
	    }
	  }
	}

	function parseQueryString(queryString) {
	  var queryParams = {};
	  if (!queryString || typeof queryString !== 'string') {
	    return queryParams;
	  }

	  var query = queryString;
	  if (query.charAt(0) === '?') {
	    query = query.substr(1);
	  }

	  var pairs = query.replace(/\+/g, ' ').split('&');
	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i].split('=');
	    var key = decodeURIComponent(pair[0]);
	    var isPrimitive = false;
	    if (!key) {
	      continue;
	    }

	    var keys = key.split('][');
	    var keysLastIndex = keys.length - 1;

	    if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
	      keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
	      keys = keys.shift().split('[').concat(keys);
	      keysLastIndex = keys.length - 1;
	    } else {
	      isPrimitive = true;
	      keysLastIndex = 0;
	    }

	    if (pair.length >= 2) {
	      var value = pair[1] ? decodeURIComponent(pair[1]) : '';
	      if (keysLastIndex) {
	        parseComplexParam(queryParams, keys, value);
	      } else {
	        queryParams[key] = processScalarParam(queryParams[key], value, isPrimitive);
	      }
	    } else {
	      queryParams[key] = true;
	    }
	  }
	  return queryParams;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Loader = exports.TemplateRegistryEntry = exports.TemplateDependency = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _aureliaPath = __webpack_require__(12);

	var _aureliaMetadata = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TemplateDependency = exports.TemplateDependency = function TemplateDependency(src, name) {
	  _classCallCheck(this, TemplateDependency);

	  this.src = src;
	  this.name = name;
	};

	var TemplateRegistryEntry = exports.TemplateRegistryEntry = function () {
	  function TemplateRegistryEntry(address) {
	    _classCallCheck(this, TemplateRegistryEntry);

	    this.templateIsLoaded = false;
	    this.factoryIsReady = false;
	    this.resources = null;
	    this.dependencies = null;

	    this.address = address;
	    this.onReady = null;
	    this._template = null;
	    this._factory = null;
	  }

	  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
	    var finalSrc = typeof src === 'string' ? (0, _aureliaPath.relativeToFile)(src, this.address) : _aureliaMetadata.Origin.get(src).moduleId;

	    this.dependencies.push(new TemplateDependency(finalSrc, name));
	  };

	  _createClass(TemplateRegistryEntry, [{
	    key: 'template',
	    get: function get() {
	      return this._template;
	    },
	    set: function set(value) {
	      var address = this.address;
	      var requires = void 0;
	      var current = void 0;
	      var src = void 0;
	      var dependencies = void 0;

	      this._template = value;
	      this.templateIsLoaded = true;

	      requires = value.content.querySelectorAll('require');
	      dependencies = this.dependencies = new Array(requires.length);

	      for (var i = 0, ii = requires.length; i < ii; ++i) {
	        current = requires[i];
	        src = current.getAttribute('from');

	        if (!src) {
	          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
	        }

	        dependencies[i] = new TemplateDependency((0, _aureliaPath.relativeToFile)(src, address), current.getAttribute('as'));

	        if (current.parentNode) {
	          current.parentNode.removeChild(current);
	        }
	      }
	    }
	  }, {
	    key: 'factory',
	    get: function get() {
	      return this._factory;
	    },
	    set: function set(value) {
	      this._factory = value;
	      this.factoryIsReady = true;
	    }
	  }]);

	  return TemplateRegistryEntry;
	}();

	var Loader = exports.Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);

	    this.templateRegistry = {};
	  }

	  Loader.prototype.map = function map(id, source) {
	    throw new Error('Loaders must implement map(id, source).');
	  };

	  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
	    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
	  };

	  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
	    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
	  };

	  Loader.prototype.loadModule = function loadModule(id) {
	    throw new Error('Loaders must implement loadModule(id).');
	  };

	  Loader.prototype.loadAllModules = function loadAllModules(ids) {
	    throw new Error('Loader must implement loadAllModules(ids).');
	  };

	  Loader.prototype.loadTemplate = function loadTemplate(url) {
	    throw new Error('Loader must implement loadTemplate(url).');
	  };

	  Loader.prototype.loadText = function loadText(url) {
	    throw new Error('Loader must implement loadText(url).');
	  };

	  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
	    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
	  };

	  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
	    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
	  };

	  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
	    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
	  };

	  return Loader;
	}();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;

	__webpack_require__(15);

	var _aureliaPalBrowser = __webpack_require__(16);

	var _aureliaLoaderWebpack = __webpack_require__(17);

	var bootstrapQueue = [];
	var sharedLoader = null;
	var Aurelia = null;

	function onBootstrap(callback) {
	  return new Promise(function (resolve, reject) {
	    if (sharedLoader) {
	      resolve(callback(sharedLoader));
	    } else {
	      bootstrapQueue.push(function () {
	        try {
	          resolve(callback(sharedLoader));
	        } catch (e) {
	          reject(e);
	        }
	      });
	    }
	  });
	}

	function ready(global) {
	  return new Promise(function (resolve, reject) {
	    if (global.document.readyState === 'complete') {
	      resolve(global.document);
	    } else {
	      global.document.addEventListener('DOMContentLoaded', completed);
	      global.addEventListener('load', completed);
	    }

	    function completed() {
	      global.document.removeEventListener('DOMContentLoaded', completed);
	      global.removeEventListener('load', completed);
	      resolve(global.document);
	    }
	  });
	}

	function handleApp(loader, appHost) {
	  return config(loader, appHost, appHost.getAttribute('aurelia-app'));
	}

	function config(loader, appHost, configModuleId) {
	  var aurelia = new Aurelia(loader);
	  aurelia.host = appHost;

	  if (configModuleId) {
	    return loader.loadModule(configModuleId).then(function (customConfig) {
	      return customConfig.configure(aurelia);
	    });
	  }

	  aurelia.use.standardConfiguration().developmentLogging();

	  return aurelia.start().then(function () {
	    return aurelia.setRoot();
	  });
	}

	function run() {
	  return ready(window).then(function (doc) {
	    (0, _aureliaPalBrowser.initialize)();

	    var appHost = doc.querySelectorAll('[aurelia-app]');
	    var loader = new _aureliaLoaderWebpack.WebpackLoader();
	    loader.loadModule('aurelia-framework').then(function (m) {
	      Aurelia = m.Aurelia;
	      for (var i = 0, ii = appHost.length; i < ii; ++i) {
	        handleApp(loader, appHost[i]).catch(console.error.bind(console));
	      }

	      sharedLoader = loader;
	      for (var _i = 0, _ii = bootstrapQueue.length; _i < _ii; ++_i) {
	        bootstrapQueue[_i]();
	      }
	      bootstrapQueue = null;
	    });
	  });
	}

	function bootstrap(configure) {
	  return onBootstrap(function (loader) {
	    var aurelia = new Aurelia(loader);
	    return configure(aurelia);
	  });
	}

	run();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _aureliaPal = __webpack_require__(7);

	(function (Object, GOPS) {
	  'use strict';

	  if (GOPS in Object) return;

	  var setDescriptor,
	      G = _aureliaPal.PLATFORM.global,
	      id = 0,
	      random = '' + Math.random(),
	      prefix = '__\x01symbol:',
	      prefixLength = prefix.length,
	      internalSymbol = '__\x01symbol@@' + random,
	      DP = 'defineProperty',
	      DPies = 'defineProperties',
	      GOPN = 'getOwnPropertyNames',
	      GOPD = 'getOwnPropertyDescriptor',
	      PIE = 'propertyIsEnumerable',
	      gOPN = Object[GOPN],
	      gOPD = Object[GOPD],
	      create = Object.create,
	      keys = Object.keys,
	      defineProperty = Object[DP],
	      $defineProperties = Object[DPies],
	      descriptor = gOPD(Object, GOPN),
	      ObjectProto = Object.prototype,
	      hOP = ObjectProto.hasOwnProperty,
	      pIE = ObjectProto[PIE],
	      toString = ObjectProto.toString,
	      indexOf = Array.prototype.indexOf || function (v) {
	    for (var i = this.length; i-- && this[i] !== v;) {}
	    return i;
	  },
	      addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
	    if (!hOP.call(o, internalSymbol)) {
	      defineProperty(o, internalSymbol, {
	        enumerable: false,
	        configurable: false,
	        writable: false,
	        value: {}
	      });
	    }
	    o[internalSymbol]['@@' + uid] = enumerable;
	  },
	      createWithSymbols = function createWithSymbols(proto, descriptors) {
	    var self = create(proto);
	    gOPN(descriptors).forEach(function (key) {
	      if (propertyIsEnumerable.call(descriptors, key)) {
	        $defineProperty(self, key, descriptors[key]);
	      }
	    });
	    return self;
	  },
	      copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
	    var newDescriptor = create(descriptor);
	    newDescriptor.enumerable = false;
	    return newDescriptor;
	  },
	      get = function get() {},
	      onlyNonSymbols = function onlyNonSymbols(name) {
	    return name != internalSymbol && !hOP.call(source, name);
	  },
	      onlySymbols = function onlySymbols(name) {
	    return name != internalSymbol && hOP.call(source, name);
	  },
	      propertyIsEnumerable = function propertyIsEnumerable(key) {
	    var uid = '' + key;
	    return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
	  },
	      setAndGetSymbol = function setAndGetSymbol(uid) {
	    var descriptor = {
	      enumerable: false,
	      configurable: true,
	      get: get,
	      set: function set(value) {
	        setDescriptor(this, uid, {
	          enumerable: false,
	          configurable: true,
	          writable: true,
	          value: value
	        });
	        addInternalIfNeeded(this, uid, true);
	      }
	    };
	    defineProperty(ObjectProto, uid, descriptor);
	    return source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
	  },
	      _Symbol = function _Symbol2(description) {
	    if (this && this !== G) {
	      throw new TypeError('Symbol is not a constructor');
	    }
	    return setAndGetSymbol(prefix.concat(description || '', random, ++id));
	  },
	      source = create(null),
	      sourceConstructor = { value: _Symbol },
	      sourceMap = function sourceMap(uid) {
	    return source[uid];
	  },
	      $defineProperty = function defineProp(o, key, descriptor) {
	    var uid = '' + key;
	    if (onlySymbols(uid)) {
	      setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
	      addInternalIfNeeded(o, uid, !!descriptor.enumerable);
	    } else {
	      defineProperty(o, key, descriptor);
	    }
	    return o;
	  },
	      $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
	    var cof = toString.call(o);
	    o = cof === '[object String]' ? o.split('') : Object(o);
	    return gOPN(o).filter(onlySymbols).map(sourceMap);
	  };

	  descriptor.value = $defineProperty;
	  defineProperty(Object, DP, descriptor);

	  descriptor.value = $getOwnPropertySymbols;
	  defineProperty(Object, GOPS, descriptor);

	  descriptor.value = function getOwnPropertyNames(o) {
	    return gOPN(o).filter(onlyNonSymbols);
	  };
	  defineProperty(Object, GOPN, descriptor);

	  descriptor.value = function defineProperties(o, descriptors) {
	    var symbols = $getOwnPropertySymbols(descriptors);
	    if (symbols.length) {
	      keys(descriptors).concat(symbols).forEach(function (uid) {
	        if (propertyIsEnumerable.call(descriptors, uid)) {
	          $defineProperty(o, uid, descriptors[uid]);
	        }
	      });
	    } else {
	      $defineProperties(o, descriptors);
	    }
	    return o;
	  };
	  defineProperty(Object, DPies, descriptor);

	  descriptor.value = propertyIsEnumerable;
	  defineProperty(ObjectProto, PIE, descriptor);

	  descriptor.value = _Symbol;
	  defineProperty(G, 'Symbol', descriptor);

	  descriptor.value = function (key) {
	    var uid = prefix.concat(prefix, key, random);
	    return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
	  };
	  defineProperty(_Symbol, 'for', descriptor);

	  descriptor.value = function (symbol) {
	    return hOP.call(source, symbol) ? symbol.slice(prefixLength * 2, -random.length) : void 0;
	  };
	  defineProperty(_Symbol, 'keyFor', descriptor);

	  descriptor.value = function getOwnPropertyDescriptor(o, key) {
	    var descriptor = gOPD(o, key);
	    if (descriptor && onlySymbols(key)) {
	      descriptor.enumerable = propertyIsEnumerable.call(o, key);
	    }
	    return descriptor;
	  };
	  defineProperty(Object, GOPD, descriptor);

	  descriptor.value = function (proto, descriptors) {
	    return arguments.length === 1 ? create(proto) : createWithSymbols(proto, descriptors);
	  };
	  defineProperty(Object, 'create', descriptor);

	  descriptor.value = function () {
	    var str = toString.call(this);
	    return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
	  };
	  defineProperty(ObjectProto, 'toString', descriptor);

	  try {
	    setDescriptor = create(defineProperty({}, prefix, {
	      get: function get() {
	        return defineProperty(this, prefix, { value: false })[prefix];
	      }
	    }))[prefix] || defineProperty;
	  } catch (o_O) {
	    setDescriptor = function setDescriptor(o, key, descriptor) {
	      var protoDescriptor = gOPD(ObjectProto, key);
	      delete ObjectProto[key];
	      defineProperty(o, key, descriptor);
	      defineProperty(ObjectProto, key, protoDescriptor);
	    };
	  }
	})(Object, 'getOwnPropertySymbols');

	(function (O, S) {
	  var dP = O.defineProperty,
	      ObjectProto = O.prototype,
	      toString = ObjectProto.toString,
	      toStringTag = 'toStringTag',
	      descriptor;
	  ['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', toStringTag].forEach(function (name) {
	    if (!(name in Symbol)) {
	      dP(Symbol, name, { value: Symbol(name) });
	      switch (name) {
	        case toStringTag:
	          descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
	          descriptor.value = function () {
	            var str = toString.call(this),
	                tst = typeof this === 'undefined' || this === null ? undefined : this[Symbol.toStringTag];
	            return typeof tst === 'undefined' ? str : '[object ' + tst + ']';
	          };
	          dP(ObjectProto, 'toString', descriptor);
	          break;
	      }
	    }
	  });
	})(Object, Symbol);

	(function (Si, AP, SP) {

	  function returnThis() {
	    return this;
	  }

	  if (!AP[Si]) AP[Si] = function () {
	    var i = 0,
	        self = this,
	        iterator = {
	      next: function next() {
	        var done = self.length <= i;
	        return done ? { done: done } : { done: done, value: self[i++] };
	      }
	    };
	    iterator[Si] = returnThis;
	    return iterator;
	  };

	  if (!SP[Si]) SP[Si] = function () {
	    var fromCodePoint = String.fromCodePoint,
	        self = this,
	        i = 0,
	        length = self.length,
	        iterator = {
	      next: function next() {
	        var done = length <= i,
	            c = done ? '' : fromCodePoint(self.codePointAt(i));
	        i += c.length;
	        return done ? { done: done } : { done: done, value: c };
	      }
	    };
	    iterator[Si] = returnThis;
	    return iterator;
	  };
	})(Symbol.iterator, Array.prototype, String.prototype);

	Number.isNaN = Number.isNaN || function (value) {
	  return value !== value;
	};

	Number.isFinite = Number.isFinite || function (value) {
	  return typeof value === "number" && isFinite(value);
	};
	if (!String.prototype.endsWith) {
	  String.prototype.endsWith = function (searchString, position) {
	    var subjectString = this.toString();
	    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
	      position = subjectString.length;
	    }
	    position -= searchString.length;
	    var lastIndex = subjectString.indexOf(searchString, position);
	    return lastIndex !== -1 && lastIndex === position;
	  };
	}

	if (!String.prototype.startsWith) {
	  String.prototype.startsWith = function (searchString, position) {
	    position = position || 0;
	    return this.substr(position, searchString.length) === searchString;
	  };
	}
	if (!Array.from) {
	  Array.from = function () {
	    var toInteger = function toInteger(it) {
	      return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
	    };
	    var toLength = function toLength(it) {
	      return it > 0 ? Math.min(toInteger(it), 0x1fffffffffffff) : 0;
	    };
	    var iterCall = function iterCall(iter, fn, a1, a2) {
	      try {
	        fn(a1, a2);
	      } catch (E) {
	        if (typeof iter.return == 'function') iter.return();
	        throw E;
	      }
	    };

	    return function from(arrayLike) {
	      var O = Object(arrayLike),
	          C = typeof this == 'function' ? this : Array,
	          aLen = arguments.length,
	          mapfn = aLen > 1 ? arguments[1] : undefined,
	          mapping = mapfn !== undefined,
	          index = 0,
	          iterFn = O[Symbol.iterator],
	          length,
	          result,
	          step,
	          iterator;
	      if (mapping) mapfn = mapfn.bind(aLen > 2 ? arguments[2] : undefined);
	      if (iterFn != undefined && !Array.isArray(arrayLike)) {
	        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	          result[index] = mapping ? iterCall(mapfn, step.value, index) : step.value;
	        }
	      } else {
	        length = toLength(O.length);
	        for (result = new C(length); length > index; index++) {
	          result[index] = mapping ? mapfn(O[index], index) : O[index];
	        }
	      }
	      result.length = index;
	      return result;
	    };
	  }();
	}

	if (!Array.prototype.find) {
	  Object.defineProperty(Array.prototype, 'find', {
	    configurable: true,
	    writable: true,
	    enumerable: false,
	    value: function value(predicate) {
	      if (this === null) {
	        throw new TypeError('Array.prototype.find called on null or undefined');
	      }
	      if (typeof predicate !== 'function') {
	        throw new TypeError('predicate must be a function');
	      }
	      var list = Object(this);
	      var length = list.length >>> 0;
	      var thisArg = arguments[1];
	      var value;

	      for (var i = 0; i < length; i++) {
	        value = list[i];
	        if (predicate.call(thisArg, value, i, list)) {
	          return value;
	        }
	      }
	      return undefined;
	    }
	  });
	}

	if (!Array.prototype.findIndex) {
	  Object.defineProperty(Array.prototype, 'findIndex', {
	    configurable: true,
	    writable: true,
	    enumerable: false,
	    value: function value(predicate) {
	      if (this === null) {
	        throw new TypeError('Array.prototype.findIndex called on null or undefined');
	      }
	      if (typeof predicate !== 'function') {
	        throw new TypeError('predicate must be a function');
	      }
	      var list = Object(this);
	      var length = list.length >>> 0;
	      var thisArg = arguments[1];
	      var value;

	      for (var i = 0; i < length; i++) {
	        value = list[i];
	        if (predicate.call(thisArg, value, i, list)) {
	          return i;
	        }
	      }
	      return -1;
	    }
	  });
	}

	if (!Array.prototype.includes) {
	  Object.defineProperty(Array.prototype, 'includes', {
	    configurable: true,
	    writable: true,
	    enumerable: false,
	    value: function value(searchElement) {
	      var O = Object(this);
	      var len = parseInt(O.length) || 0;
	      if (len === 0) {
	        return false;
	      }
	      var n = parseInt(arguments[1]) || 0;
	      var k;
	      if (n >= 0) {
	        k = n;
	      } else {
	        k = len + n;
	        if (k < 0) {
	          k = 0;
	        }
	      }
	      var currentElement;
	      while (k < len) {
	        currentElement = O[k];
	        if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	          return true;
	        }
	        k++;
	      }
	      return false;
	    }
	  });
	}

	(function () {
	  var needsFix = false;

	  try {
	    var s = Object.keys('a');
	    needsFix = s.length !== 1 || s[0] !== '0';
	  } catch (e) {
	    needsFix = true;
	  }

	  if (needsFix) {
	    Object.keys = function () {
	      var hasOwnProperty = Object.prototype.hasOwnProperty,
	          hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
	          dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
	          dontEnumsLength = dontEnums.length;

	      return function (obj) {
	        if (obj === undefined || obj === null) {
	          throw TypeError('Cannot convert undefined or null to object');
	        }

	        obj = Object(obj);

	        var result = [],
	            prop,
	            i;

	        for (prop in obj) {
	          if (hasOwnProperty.call(obj, prop)) {
	            result.push(prop);
	          }
	        }

	        if (hasDontEnumBug) {
	          for (i = 0; i < dontEnumsLength; i++) {
	            if (hasOwnProperty.call(obj, dontEnums[i])) {
	              result.push(dontEnums[i]);
	            }
	          }
	        }

	        return result;
	      };
	    }();
	  }
	})();

	(function (O) {
	  if ('assign' in O) {
	    return;
	  }

	  O.defineProperty(O, 'assign', {
	    configurable: true,
	    writable: true,
	    value: function () {
	      var gOPS = O.getOwnPropertySymbols,
	          pIE = O.propertyIsEnumerable,
	          filterOS = gOPS ? function (self) {
	        return gOPS(self).filter(pIE, self);
	      } : function () {
	        return Array.prototype;
	      };

	      return function assign(where) {
	        if (gOPS && !(where instanceof O)) {
	          console.warn('problematic Symbols', where);
	        }

	        function set(keyOrSymbol) {
	          where[keyOrSymbol] = arg[keyOrSymbol];
	        }

	        for (var i = 1, ii = arguments.length; i < ii; ++i) {
	          var arg = arguments[i];

	          if (arg === null || arg === undefined) {
	            continue;
	          }

	          O.keys(arg).concat(filterOS(arg)).forEach(set);
	        }

	        return where;
	      };
	    }()
	  });
	})(Object);

	(function (global) {
	  var i;

	  var defineProperty = Object.defineProperty,
	      is = function is(a, b) {
	    return a === b || a !== a && b !== b;
	  };

	  if (typeof WeakMap == 'undefined') {
	    global.WeakMap = createCollection({
	      'delete': sharedDelete,

	      clear: sharedClear,

	      get: sharedGet,

	      has: mapHas,

	      set: sharedSet
	    }, true);
	  }

	  if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
	    var _createCollection;

	    global.Map = createCollection((_createCollection = {
	      'delete': sharedDelete,

	      has: mapHas,

	      get: sharedGet,

	      set: sharedSet,

	      keys: sharedKeys,

	      values: sharedValues,

	      entries: mapEntries,

	      forEach: sharedForEach,

	      clear: sharedClear
	    }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
	  }

	  if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
	    var _createCollection2;

	    global.Set = createCollection((_createCollection2 = {
	      has: setHas,

	      add: sharedAdd,

	      'delete': sharedDelete,

	      clear: sharedClear,

	      keys: sharedValues,
	      values: sharedValues,

	      entries: setEntries,

	      forEach: sharedForEach
	    }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
	  }

	  if (typeof WeakSet == 'undefined') {
	    global.WeakSet = createCollection({
	      'delete': sharedDelete,

	      add: sharedAdd,

	      clear: sharedClear,

	      has: setHas
	    }, true);
	  }

	  function createCollection(proto, objectOnly) {
	    function Collection(a) {
	      if (!this || this.constructor !== Collection) return new Collection(a);
	      this._keys = [];
	      this._values = [];
	      this._itp = [];
	      this.objectOnly = objectOnly;

	      if (a) init.call(this, a);
	    }

	    if (!objectOnly) {
	      defineProperty(proto, 'size', {
	        get: sharedSize
	      });
	    }

	    proto.constructor = Collection;
	    Collection.prototype = proto;

	    return Collection;
	  }

	  function init(a) {
	    var i;

	    if (this.add) a.forEach(this.add, this);else a.forEach(function (a) {
	        this.set(a[0], a[1]);
	      }, this);
	  }

	  function sharedDelete(key) {
	    if (this.has(key)) {
	      this._keys.splice(i, 1);
	      this._values.splice(i, 1);

	      this._itp.forEach(function (p) {
	        if (i < p[0]) p[0]--;
	      });
	    }

	    return -1 < i;
	  };

	  function sharedGet(key) {
	    return this.has(key) ? this._values[i] : undefined;
	  }

	  function has(list, key) {
	    if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");

	    if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
	    return -1 < i;
	  }

	  function setHas(value) {
	    return has.call(this, this._values, value);
	  }

	  function mapHas(value) {
	    return has.call(this, this._keys, value);
	  }

	  function sharedSet(key, value) {
	    this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
	    return this;
	  }

	  function sharedAdd(value) {
	    if (!this.has(value)) this._values.push(value);
	    return this;
	  }

	  function sharedClear() {
	    (this._keys || 0).length = this._values.length = 0;
	  }

	  function sharedKeys() {
	    return sharedIterator(this._itp, this._keys);
	  }

	  function sharedValues() {
	    return sharedIterator(this._itp, this._values);
	  }

	  function mapEntries() {
	    return sharedIterator(this._itp, this._keys, this._values);
	  }

	  function setEntries() {
	    return sharedIterator(this._itp, this._values, this._values);
	  }

	  function sharedIterator(itp, array, array2) {
	    var _ref;

	    var p = [0],
	        done = false;
	    itp.push(p);
	    return _ref = {}, _ref[Symbol.iterator] = function () {
	      return this;
	    }, _ref.next = function next() {
	      var v,
	          k = p[0];
	      if (!done && k < array.length) {
	        v = array2 ? [array[k], array2[k]] : array[k];
	        p[0]++;
	      } else {
	        done = true;
	        itp.splice(itp.indexOf(p), 1);
	      }
	      return { done: done, value: v };
	    }, _ref;
	  }

	  function sharedSize() {
	    return this._values.length;
	  }

	  function sharedForEach(callback, context) {
	    var it = this.entries();
	    for (;;) {
	      var r = it.next();
	      if (r.done) break;
	      callback.call(context, r.value[1], r.value[0], this);
	    }
	  }
	})(_aureliaPal.PLATFORM.global);

	var emptyMetadata = Object.freeze({});
	var metadataContainerKey = '__metadata__';
	var bind = Function.prototype.bind;

	if (typeof _aureliaPal.PLATFORM.global.Reflect === 'undefined') {
	  _aureliaPal.PLATFORM.global.Reflect = {};
	}

	if (typeof Reflect.getOwnMetadata !== 'function') {
	  Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
	    if (target.hasOwnProperty(metadataContainerKey)) {
	      return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
	    }
	  };
	}

	if (typeof Reflect.defineMetadata !== 'function') {
	  Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
	    var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
	    var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
	    targetContainer[metadataKey] = metadataValue;
	  };
	}

	if (typeof Reflect.metadata !== 'function') {
	  Reflect.metadata = function (metadataKey, metadataValue) {
	    return function (target, targetKey) {
	      Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
	    };
	  };
	}

	if (typeof Reflect.defineProperty !== 'function') {
	  Reflect.defineProperty = function (target, propertyKey, descriptor) {
	    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' ? target === null : typeof target !== 'function') {
	      throw new TypeError('Reflect.defineProperty called on non-object');
	    }
	    try {
	      Object.defineProperty(target, propertyKey, descriptor);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  };
	}

	if (typeof Reflect.construct !== 'function') {
	  Reflect.construct = function (Target, args) {
	    if (args) {
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	    }

	    var a = [null];
	    a.push.apply(a, args);
	    return new (bind.apply(Target, a))();
	  };
	}

	(function (global) {
	  global.console = global.console || {};
	  var con = global.console;
	  var prop = void 0;
	  var method = void 0;
	  var empty = {};
	  var dummy = function dummy() {};
	  var properties = 'memory'.split(',');
	  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	  while (prop = properties.pop()) {
	    if (!con[prop]) con[prop] = empty;
	  }while (method = methods.pop()) {
	    if (!con[method]) con[method] = dummy;
	  }
	})(_aureliaPal.PLATFORM.global);

	if (_aureliaPal.PLATFORM.global.console && _typeof(console.log) === 'object') {
	  ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function (method) {
	    console[method] = this.bind(console[method], console);
	  }, Function.prototype.call);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._PLATFORM = exports._DOM = exports._FEATURE = undefined;
	exports._ensureFunctionName = _ensureFunctionName;
	exports._ensureClassList = _ensureClassList;
	exports._ensurePerformance = _ensurePerformance;
	exports._ensureCustomEvent = _ensureCustomEvent;
	exports._ensureElementMatches = _ensureElementMatches;
	exports._ensureHTMLTemplateElement = _ensureHTMLTemplateElement;
	exports.initialize = initialize;

	var _aureliaPal = __webpack_require__(7);

	function _ensureFunctionName() {
	  function test() {}

	  if (!test.name) {
	    Object.defineProperty(Function.prototype, 'name', {
	      get: function get() {
	        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

	        Object.defineProperty(this, 'name', { value: name });
	        return name;
	      }
	    });
	  }
	}

	function _ensureClassList() {
	  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
	    (function () {
	      var protoProp = 'prototype';
	      var strTrim = String.prototype.trim;
	      var arrIndexOf = Array.prototype.indexOf;
	      var emptyArray = [];

	      var DOMEx = function DOMEx(type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      };

	      var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
	        if (token === '') {
	          throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
	        }

	        if (/\s/.test(token)) {
	          throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
	        }

	        return arrIndexOf.call(classList, token);
	      };

	      var ClassList = function ClassList(elem) {
	        var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
	        var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

	        for (var i = 0, ii = classes.length; i < ii; ++i) {
	          this.push(classes[i]);
	        }

	        this._updateClassName = function () {
	          elem.setAttribute('class', this.toString());
	        };
	      };

	      var classListProto = ClassList[protoProp] = [];

	      DOMEx[protoProp] = Error[protoProp];

	      classListProto.item = function (i) {
	        return this[i] || null;
	      };

	      classListProto.contains = function (token) {
	        token += '';
	        return checkTokenAndGetIndex(this, token) !== -1;
	      };

	      classListProto.add = function () {
	        var tokens = arguments;
	        var i = 0;
	        var ii = tokens.length;
	        var token = void 0;
	        var updated = false;

	        do {
	          token = tokens[i] + '';
	          if (checkTokenAndGetIndex(this, token) === -1) {
	            this.push(token);
	            updated = true;
	          }
	        } while (++i < ii);

	        if (updated) {
	          this._updateClassName();
	        }
	      };

	      classListProto.remove = function () {
	        var tokens = arguments;
	        var i = 0;
	        var ii = tokens.length;
	        var token = void 0;
	        var updated = false;
	        var index = void 0;

	        do {
	          token = tokens[i] + '';
	          index = checkTokenAndGetIndex(this, token);
	          while (index !== -1) {
	            this.splice(index, 1);
	            updated = true;
	            index = checkTokenAndGetIndex(this, token);
	          }
	        } while (++i < ii);

	        if (updated) {
	          this._updateClassName();
	        }
	      };

	      classListProto.toggle = function (token, force) {
	        token += '';

	        var result = this.contains(token);
	        var method = result ? force !== true && 'remove' : force !== false && 'add';

	        if (method) {
	          this[method](token);
	        }

	        if (force === true || force === false) {
	          return force;
	        }

	        return !result;
	      };

	      classListProto.toString = function () {
	        return this.join(' ');
	      };

	      Object.defineProperty(Element.prototype, 'classList', {
	        get: function get() {
	          return new ClassList(this);
	        },
	        enumerable: true,
	        configurable: true
	      });
	    })();
	  } else {
	    var testElement = document.createElement('_');
	    testElement.classList.add('c1', 'c2');

	    if (!testElement.classList.contains('c2')) {
	      var createMethod = function createMethod(method) {
	        var original = DOMTokenList.prototype[method];

	        DOMTokenList.prototype[method] = function (token) {
	          for (var i = 0, ii = arguments.length; i < ii; ++i) {
	            token = arguments[i];
	            original.call(this, token);
	          }
	        };
	      };

	      createMethod('add');
	      createMethod('remove');
	    }

	    testElement.classList.toggle('c3', false);

	    if (testElement.classList.contains('c3')) {
	      (function () {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function (token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          }

	          return _toggle.call(this, token);
	        };
	      })();
	    }

	    testElement = null;
	  }
	}

	function _ensurePerformance() {
	  // @license http://opensource.org/licenses/MIT


	  if ('performance' in window === false) {
	    window.performance = {};
	  }

	  Date.now = Date.now || function () {
	    return new Date().getTime();
	  };

	  if ('now' in window.performance === false) {
	    (function () {
	      var nowOffset = Date.now();

	      if (performance.timing && performance.timing.navigationStart) {
	        nowOffset = performance.timing.navigationStart;
	      }

	      window.performance.now = function now() {
	        return Date.now() - nowOffset;
	      };
	    })();
	  }
	}

	function _ensureCustomEvent() {
	  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
	    var _CustomEvent = function _CustomEvent(event, params) {
	      params = params || {
	        bubbles: false,
	        cancelable: false,
	        detail: undefined
	      };

	      var evt = document.createEvent('CustomEvent');
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	    };

	    _CustomEvent.prototype = window.Event.prototype;
	    window.CustomEvent = _CustomEvent;
	  }
	}

	function _ensureElementMatches() {
	  if (Element && !Element.prototype.matches) {
	    var proto = Element.prototype;
	    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
	  }
	}

	var _FEATURE = exports._FEATURE = {};

	_FEATURE.shadowDOM = function () {
	  return !!HTMLElement.prototype.createShadowRoot;
	}();

	_FEATURE.scopedCSS = function () {
	  return 'scoped' in document.createElement('style');
	}();

	_FEATURE.htmlTemplateElement = function () {
	  return 'content' in document.createElement('template');
	}();

	_FEATURE.mutationObserver = function () {
	  return !!(window.MutationObserver || window.WebKitMutationObserver);
	}();

	function _ensureHTMLTemplateElement() {
	  function isSVGTemplate(el) {
	    return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
	  }

	  function fixSVGTemplateElement(el) {
	    var template = el.ownerDocument.createElement('template');
	    var attrs = el.attributes;
	    var length = attrs.length;
	    var attr = void 0;

	    el.parentNode.insertBefore(template, el);

	    while (length-- > 0) {
	      attr = attrs[length];
	      template.setAttribute(attr.name, attr.value);
	      el.removeAttribute(attr.name);
	    }

	    el.parentNode.removeChild(el);

	    return fixHTMLTemplateElement(template);
	  }

	  function fixHTMLTemplateElement(template) {
	    var content = template.content = document.createDocumentFragment();
	    var child = void 0;

	    while (child = template.firstChild) {
	      content.appendChild(child);
	    }

	    return template;
	  }

	  function fixHTMLTemplateElementRoot(template) {
	    var content = fixHTMLTemplateElement(template).content;
	    var childTemplates = content.querySelectorAll('template');

	    for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
	      var child = childTemplates[i];

	      if (isSVGTemplate(child)) {
	        fixSVGTemplateElement(child);
	      } else {
	        fixHTMLTemplateElement(child);
	      }
	    }

	    return template;
	  }

	  if (_FEATURE.htmlTemplateElement) {
	    _FEATURE.ensureHTMLTemplateElement = function (template) {
	      return template;
	    };
	  } else {
	    _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
	  }
	}

	var shadowPoly = window.ShadowDOMPolyfill || null;

	var _DOM = exports._DOM = {
	  Element: Element,
	  SVGElement: SVGElement,
	  boundary: 'aurelia-dom-boundary',
	  addEventListener: function addEventListener(eventName, callback, capture) {
	    document.addEventListener(eventName, callback, capture);
	  },
	  removeEventListener: function removeEventListener(eventName, callback, capture) {
	    document.removeEventListener(eventName, callback, capture);
	  },
	  adoptNode: function adoptNode(node) {
	    return document.adoptNode(node, true);
	  },
	  createElement: function createElement(tagName) {
	    return document.createElement(tagName);
	  },
	  createTextNode: function createTextNode(text) {
	    return document.createTextNode(text);
	  },
	  createComment: function createComment(text) {
	    return document.createComment(text);
	  },
	  createDocumentFragment: function createDocumentFragment() {
	    return document.createDocumentFragment();
	  },
	  createMutationObserver: function createMutationObserver(callback) {
	    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
	  },
	  createCustomEvent: function createCustomEvent(eventType, options) {
	    return new window.CustomEvent(eventType, options);
	  },
	  dispatchEvent: function dispatchEvent(evt) {
	    document.dispatchEvent(evt);
	  },
	  getComputedStyle: function getComputedStyle(element) {
	    return window.getComputedStyle(element);
	  },
	  getElementById: function getElementById(id) {
	    return document.getElementById(id);
	  },
	  querySelectorAll: function querySelectorAll(query) {
	    return document.querySelectorAll(query);
	  },
	  nextElementSibling: function nextElementSibling(element) {
	    if (element.nextElementSibling) {
	      return element.nextElementSibling;
	    }
	    do {
	      element = element.nextSibling;
	    } while (element && element.nodeType !== 1);
	    return element;
	  },
	  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
	    var parser = document.createElement('div');
	    parser.innerHTML = markup;

	    var temp = parser.firstElementChild;
	    if (!temp || temp.nodeName !== 'TEMPLATE') {
	      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
	    }

	    return _FEATURE.ensureHTMLTemplateElement(temp);
	  },
	  appendNode: function appendNode(newNode, parentNode) {
	    (parentNode || document.body).appendChild(newNode);
	  },
	  replaceNode: function replaceNode(newNode, node, parentNode) {
	    if (node.parentNode) {
	      node.parentNode.replaceChild(newNode, node);
	    } else if (shadowPoly !== null) {
	      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
	    } else {
	      parentNode.replaceChild(newNode, node);
	    }
	  },
	  removeNode: function removeNode(node, parentNode) {
	    if (node.parentNode) {
	      node.parentNode.removeChild(node);
	    } else if (shadowPoly !== null) {
	      shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
	    } else {
	      parentNode.removeChild(node);
	    }
	  },
	  injectStyles: function injectStyles(styles, destination, prepend) {
	    var node = document.createElement('style');
	    node.innerHTML = styles;
	    node.type = 'text/css';

	    destination = destination || document.head;

	    if (prepend && destination.childNodes.length > 0) {
	      destination.insertBefore(node, destination.childNodes[0]);
	    } else {
	      destination.appendChild(node);
	    }

	    return node;
	  }
	};

	var _PLATFORM = exports._PLATFORM = {
	  location: window.location,
	  history: window.history,
	  addEventListener: function addEventListener(eventName, callback, capture) {
	    this.global.addEventListener(eventName, callback, capture);
	  },
	  removeEventListener: function removeEventListener(eventName, callback, capture) {
	    this.global.removeEventListener(eventName, callback, capture);
	  },

	  performance: window.performance,
	  requestAnimationFrame: function requestAnimationFrame(callback) {
	    return this.global.requestAnimationFrame(callback);
	  }
	};

	var isInitialized = false;

	function initialize() {
	  if (isInitialized) {
	    return;
	  }

	  isInitialized = true;

	  _ensureCustomEvent();
	  _ensureFunctionName();
	  _ensureHTMLTemplateElement();
	  _ensureElementMatches();
	  _ensureClassList();
	  _ensurePerformance();

	  (0, _aureliaPal.initializePAL)(function (platform, feature, dom) {
	    Object.assign(platform, _PLATFORM);
	    Object.assign(feature, _FEATURE);
	    Object.assign(dom, _DOM);

	    Object.defineProperty(dom, 'title', {
	      get: function get() {
	        return document.title;
	      },
	      set: function set(value) {
	        document.title = value;
	      }
	    });

	    Object.defineProperty(dom, 'activeElement', {
	      get: function get() {
	        return document.activeElement;
	      }
	    });

	    Object.defineProperty(platform, 'XMLHttpRequest', {
	      get: function get() {
	        return platform.global.XMLHttpRequest;
	      }
	    });
	  });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WebpackLoader = exports.TextTemplateLoader = undefined;

	var _aureliaMetadata = __webpack_require__(6);

	var _aureliaLoader = __webpack_require__(13);

	var _aureliaPal = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TextTemplateLoader = exports.TextTemplateLoader = function () {
	  function TextTemplateLoader() {
	    _classCallCheck(this, TextTemplateLoader);
	  }

	  TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
	    return loader.loadText(entry.address).then(function (text) {
	      entry.template = _aureliaPal.DOM.createTemplateFromMarkup(text);
	    });
	  };

	  return TextTemplateLoader;
	}();

	function ensureOriginOnExports(executed, name) {
	  var target = executed;
	  var key = void 0;
	  var exportedValue = void 0;

	  if (target.__useDefault) {
	    target = target.default;
	  }

	  _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(name, 'default'));

	  for (key in target) {
	    exportedValue = target[key];

	    if (typeof exportedValue === 'function') {
	      _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(name, key));
	    }
	  }

	  return executed;
	}

	var WebpackLoader = exports.WebpackLoader = function (_Loader) {
	  _inherits(WebpackLoader, _Loader);

	  function WebpackLoader() {
	    _classCallCheck(this, WebpackLoader);

	    var _this = _possibleConstructorReturn(this, _Loader.call(this));

	    _this.moduleRegistry = Object.create(null);
	    _this.loaderPlugins = Object.create(null);
	    _this.useTemplateLoader(new TextTemplateLoader());

	    var that = _this;

	    _this.addPlugin('template-registry-entry', {
	      'fetch': function fetch(address) {
	        var entry = that.getOrCreateTemplateRegistryEntry(address);
	        return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
	          return entry;
	        });
	      }
	    });

	    _aureliaPal.PLATFORM.eachModule = function (callback) {
	      var registry = _this.moduleRegistry;

	      for (var key in registry) {
	        try {
	          if (callback(key, registry[key])) return;
	        } catch (e) {}
	      }
	    };
	    return _this;
	  }

	  WebpackLoader.prototype._import = function _import(moduleId) {
	    var _this2 = this;

	    var moduleIdParts = moduleId.split('!');
	    var path = moduleIdParts.splice(moduleIdParts.length - 1, 1)[0];
	    var loaderPlugin = moduleIdParts.length === 1 ? moduleIdParts[0] : null;

	    return new Promise(function (resolve, reject) {
	      try {
	        if (loaderPlugin) {
	          resolve(_this2.loaderPlugins[loaderPlugin].fetch(path));
	        } else {
	          __webpack_require__.e/* nsure */(1, function (require) {
	            var result = __webpack_require__(18)("./" + path);
	            if (typeof result === 'function') {
	              result(function (res) {
	                return resolve(res);
	              });
	            } else {
	              resolve(result);
	            }
	          });
	        }
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };

	  WebpackLoader.prototype.map = function map(id, source) {};

	  WebpackLoader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
	    return moduleId;
	  };

	  WebpackLoader.prototype.normalize = function normalize(moduleId, relativeTo) {
	    return Promise.resolve(moduleId);
	  };

	  WebpackLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
	    this.templateLoader = templateLoader;
	  };

	  WebpackLoader.prototype.loadAllModules = function loadAllModules(ids) {
	    var loads = [];

	    for (var i = 0, ii = ids.length; i < ii; ++i) {
	      loads.push(this.loadModule(ids[i]));
	    }

	    return Promise.all(loads);
	  };

	  WebpackLoader.prototype.loadModule = function loadModule(id) {
	    var _this3 = this;

	    var existing = this.moduleRegistry[id];
	    if (existing) {
	      return Promise.resolve(existing);
	    }

	    return new Promise(function (resolve, reject) {
	      try {
	        _this3._import(id).then(function (m) {
	          _this3.moduleRegistry[id] = m;
	          resolve(ensureOriginOnExports(m, id));
	        });
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };

	  WebpackLoader.prototype.loadTemplate = function loadTemplate(url) {
	    return this._import(this.applyPluginToUrl(url, 'template-registry-entry'));
	  };

	  WebpackLoader.prototype.loadText = function loadText(url) {
	    return this._import(url);
	  };

	  WebpackLoader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
	    return pluginName + '!' + url;
	  };

	  WebpackLoader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
	    this.loaderPlugins[pluginName] = implementation;
	  };

	  return WebpackLoader;
	}(_aureliaLoader.Loader);

	_aureliaPal.PLATFORM.Loader = WebpackLoader;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(135)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(122)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\r\n *\r\n *  HPSTR\r\n *\r\n *  Designer: Michael Rose\r\n *  Twitter: http://twitter.com/mmistakes\r\n *\r\n*/\nbody {\n  margin-top: 26px;\n  font-size: 16px; }\n\n.hidden {\n  display: none;\n  visibility: hidden; }\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  position: static;\n  clip: auto;\n  height: auto;\n  width: auto;\n  margin: 0;\n  overflow: visible; }\n\n*, *:after, *:before {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\naudio:not([controls]) {\n  display: none; }\n\nhtml {\n  font-size: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\na:focus {\n  outline: thin dotted #333;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\na:hover,\na:active {\n  outline: 0; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nblockquote {\n  margin: 0; }\n\nimg {\n  /* Responsive images (ensure images don't scale beyond their parents) */\n  max-width: 100%;\n  /* Part 1: Set a maxium relative to the parent */\n  width: auto\\9;\n  /* IE7-8 need help adjusting responsive images */\n  height: auto;\n  /* Part 2: Scale the height according to the width, otherwise you get stretching */\n  vertical-align: middle;\n  border: 0;\n  -ms-interpolation-mode: bicubic; }\n\ntable {\n  width: 100%; }\n\n#map_canvas img,\n.google-maps img {\n  max-width: none; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  font-size: 100%;\n  vertical-align: middle; }\n\nbutton,\ninput {\n  *overflow: visible;\n  line-height: normal; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nlabel,\nselect,\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"],\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  cursor: pointer; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  -ms-box-sizing: content-box;\n  box-sizing: content-box;\n  -webkit-appearance: textfield; }\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\n/*!\r\n *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\n/* FONT PATH\r\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(123) + ");\n  src: url(" + __webpack_require__(124) + "?#iefix&v=4.5.0) format(\"embedded-opentype\"), url(" + __webpack_require__(125) + ") format(\"woff2\"), url(" + __webpack_require__(126) + ") format(\"woff\"), url(" + __webpack_require__(127) + ") format(\"truetype\"), url(" + __webpack_require__(128) + "#fontawesomeregular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n  .fa-li.fa-lg {\n    left: -1.85714em; }\n\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right {\n  margin-left: .3em; }\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.fa.pull-left {\n  margin-right: .3em; }\n\n.fa.pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none; }\n\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\"; }\n\n.fa-music:before {\n  content: \"\\F001\"; }\n\n.fa-search:before {\n  content: \"\\F002\"; }\n\n.fa-envelope-o:before {\n  content: \"\\F003\"; }\n\n.fa-heart:before {\n  content: \"\\F004\"; }\n\n.fa-star:before {\n  content: \"\\F005\"; }\n\n.fa-star-o:before {\n  content: \"\\F006\"; }\n\n.fa-user:before {\n  content: \"\\F007\"; }\n\n.fa-film:before {\n  content: \"\\F008\"; }\n\n.fa-th-large:before {\n  content: \"\\F009\"; }\n\n.fa-th:before {\n  content: \"\\F00A\"; }\n\n.fa-th-list:before {\n  content: \"\\F00B\"; }\n\n.fa-check:before {\n  content: \"\\F00C\"; }\n\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\"; }\n\n.fa-search-plus:before {\n  content: \"\\F00E\"; }\n\n.fa-search-minus:before {\n  content: \"\\F010\"; }\n\n.fa-power-off:before {\n  content: \"\\F011\"; }\n\n.fa-signal:before {\n  content: \"\\F012\"; }\n\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\"; }\n\n.fa-trash-o:before {\n  content: \"\\F014\"; }\n\n.fa-home:before {\n  content: \"\\F015\"; }\n\n.fa-file-o:before {\n  content: \"\\F016\"; }\n\n.fa-clock-o:before {\n  content: \"\\F017\"; }\n\n.fa-road:before {\n  content: \"\\F018\"; }\n\n.fa-download:before {\n  content: \"\\F019\"; }\n\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\"; }\n\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\"; }\n\n.fa-inbox:before {\n  content: \"\\F01C\"; }\n\n.fa-play-circle-o:before {\n  content: \"\\F01D\"; }\n\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\"; }\n\n.fa-refresh:before {\n  content: \"\\F021\"; }\n\n.fa-list-alt:before {\n  content: \"\\F022\"; }\n\n.fa-lock:before {\n  content: \"\\F023\"; }\n\n.fa-flag:before {\n  content: \"\\F024\"; }\n\n.fa-headphones:before {\n  content: \"\\F025\"; }\n\n.fa-volume-off:before {\n  content: \"\\F026\"; }\n\n.fa-volume-down:before {\n  content: \"\\F027\"; }\n\n.fa-volume-up:before {\n  content: \"\\F028\"; }\n\n.fa-qrcode:before {\n  content: \"\\F029\"; }\n\n.fa-barcode:before {\n  content: \"\\F02A\"; }\n\n.fa-tag:before {\n  content: \"\\F02B\"; }\n\n.fa-tags:before {\n  content: \"\\F02C\"; }\n\n.fa-book:before {\n  content: \"\\F02D\"; }\n\n.fa-bookmark:before {\n  content: \"\\F02E\"; }\n\n.fa-print:before {\n  content: \"\\F02F\"; }\n\n.fa-camera:before {\n  content: \"\\F030\"; }\n\n.fa-font:before {\n  content: \"\\F031\"; }\n\n.fa-bold:before {\n  content: \"\\F032\"; }\n\n.fa-italic:before {\n  content: \"\\F033\"; }\n\n.fa-text-height:before {\n  content: \"\\F034\"; }\n\n.fa-text-width:before {\n  content: \"\\F035\"; }\n\n.fa-align-left:before {\n  content: \"\\F036\"; }\n\n.fa-align-center:before {\n  content: \"\\F037\"; }\n\n.fa-align-right:before {\n  content: \"\\F038\"; }\n\n.fa-align-justify:before {\n  content: \"\\F039\"; }\n\n.fa-list:before {\n  content: \"\\F03A\"; }\n\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\"; }\n\n.fa-indent:before {\n  content: \"\\F03C\"; }\n\n.fa-video-camera:before {\n  content: \"\\F03D\"; }\n\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\"; }\n\n.fa-pencil:before {\n  content: \"\\F040\"; }\n\n.fa-map-marker:before {\n  content: \"\\F041\"; }\n\n.fa-adjust:before {\n  content: \"\\F042\"; }\n\n.fa-tint:before {\n  content: \"\\F043\"; }\n\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\"; }\n\n.fa-share-square-o:before {\n  content: \"\\F045\"; }\n\n.fa-check-square-o:before {\n  content: \"\\F046\"; }\n\n.fa-arrows:before {\n  content: \"\\F047\"; }\n\n.fa-step-backward:before {\n  content: \"\\F048\"; }\n\n.fa-fast-backward:before {\n  content: \"\\F049\"; }\n\n.fa-backward:before {\n  content: \"\\F04A\"; }\n\n.fa-play:before {\n  content: \"\\F04B\"; }\n\n.fa-pause:before {\n  content: \"\\F04C\"; }\n\n.fa-stop:before {\n  content: \"\\F04D\"; }\n\n.fa-forward:before {\n  content: \"\\F04E\"; }\n\n.fa-fast-forward:before {\n  content: \"\\F050\"; }\n\n.fa-step-forward:before {\n  content: \"\\F051\"; }\n\n.fa-eject:before {\n  content: \"\\F052\"; }\n\n.fa-chevron-left:before {\n  content: \"\\F053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\F054\"; }\n\n.fa-plus-circle:before {\n  content: \"\\F055\"; }\n\n.fa-minus-circle:before {\n  content: \"\\F056\"; }\n\n.fa-times-circle:before {\n  content: \"\\F057\"; }\n\n.fa-check-circle:before {\n  content: \"\\F058\"; }\n\n.fa-question-circle:before {\n  content: \"\\F059\"; }\n\n.fa-info-circle:before {\n  content: \"\\F05A\"; }\n\n.fa-crosshairs:before {\n  content: \"\\F05B\"; }\n\n.fa-times-circle-o:before {\n  content: \"\\F05C\"; }\n\n.fa-check-circle-o:before {\n  content: \"\\F05D\"; }\n\n.fa-ban:before {\n  content: \"\\F05E\"; }\n\n.fa-arrow-left:before {\n  content: \"\\F060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\F061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\F062\"; }\n\n.fa-arrow-down:before {\n  content: \"\\F063\"; }\n\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\"; }\n\n.fa-expand:before {\n  content: \"\\F065\"; }\n\n.fa-compress:before {\n  content: \"\\F066\"; }\n\n.fa-plus:before {\n  content: \"\\F067\"; }\n\n.fa-minus:before {\n  content: \"\\F068\"; }\n\n.fa-asterisk:before {\n  content: \"\\F069\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\F06A\"; }\n\n.fa-gift:before {\n  content: \"\\F06B\"; }\n\n.fa-leaf:before {\n  content: \"\\F06C\"; }\n\n.fa-fire:before {\n  content: \"\\F06D\"; }\n\n.fa-eye:before {\n  content: \"\\F06E\"; }\n\n.fa-eye-slash:before {\n  content: \"\\F070\"; }\n\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\"; }\n\n.fa-plane:before {\n  content: \"\\F072\"; }\n\n.fa-calendar:before {\n  content: \"\\F073\"; }\n\n.fa-random:before {\n  content: \"\\F074\"; }\n\n.fa-comment:before {\n  content: \"\\F075\"; }\n\n.fa-magnet:before {\n  content: \"\\F076\"; }\n\n.fa-chevron-up:before {\n  content: \"\\F077\"; }\n\n.fa-chevron-down:before {\n  content: \"\\F078\"; }\n\n.fa-retweet:before {\n  content: \"\\F079\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\F07A\"; }\n\n.fa-folder:before {\n  content: \"\\F07B\"; }\n\n.fa-folder-open:before {\n  content: \"\\F07C\"; }\n\n.fa-arrows-v:before {\n  content: \"\\F07D\"; }\n\n.fa-arrows-h:before {\n  content: \"\\F07E\"; }\n\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\"; }\n\n.fa-twitter-square:before {\n  content: \"\\F081\"; }\n\n.fa-facebook-square:before {\n  content: \"\\F082\"; }\n\n.fa-camera-retro:before {\n  content: \"\\F083\"; }\n\n.fa-key:before {\n  content: \"\\F084\"; }\n\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\"; }\n\n.fa-comments:before {\n  content: \"\\F086\"; }\n\n.fa-thumbs-o-up:before {\n  content: \"\\F087\"; }\n\n.fa-thumbs-o-down:before {\n  content: \"\\F088\"; }\n\n.fa-star-half:before {\n  content: \"\\F089\"; }\n\n.fa-heart-o:before {\n  content: \"\\F08A\"; }\n\n.fa-sign-out:before {\n  content: \"\\F08B\"; }\n\n.fa-linkedin-square:before {\n  content: \"\\F08C\"; }\n\n.fa-thumb-tack:before {\n  content: \"\\F08D\"; }\n\n.fa-external-link:before {\n  content: \"\\F08E\"; }\n\n.fa-sign-in:before {\n  content: \"\\F090\"; }\n\n.fa-trophy:before {\n  content: \"\\F091\"; }\n\n.fa-github-square:before {\n  content: \"\\F092\"; }\n\n.fa-upload:before {\n  content: \"\\F093\"; }\n\n.fa-lemon-o:before {\n  content: \"\\F094\"; }\n\n.fa-phone:before {\n  content: \"\\F095\"; }\n\n.fa-square-o:before {\n  content: \"\\F096\"; }\n\n.fa-bookmark-o:before {\n  content: \"\\F097\"; }\n\n.fa-phone-square:before {\n  content: \"\\F098\"; }\n\n.fa-twitter:before {\n  content: \"\\F099\"; }\n\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\"; }\n\n.fa-github:before {\n  content: \"\\F09B\"; }\n\n.fa-unlock:before {\n  content: \"\\F09C\"; }\n\n.fa-credit-card:before {\n  content: \"\\F09D\"; }\n\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\"; }\n\n.fa-hdd-o:before {\n  content: \"\\F0A0\"; }\n\n.fa-bullhorn:before {\n  content: \"\\F0A1\"; }\n\n.fa-bell:before {\n  content: \"\\F0F3\"; }\n\n.fa-certificate:before {\n  content: \"\\F0A3\"; }\n\n.fa-hand-o-right:before {\n  content: \"\\F0A4\"; }\n\n.fa-hand-o-left:before {\n  content: \"\\F0A5\"; }\n\n.fa-hand-o-up:before {\n  content: \"\\F0A6\"; }\n\n.fa-hand-o-down:before {\n  content: \"\\F0A7\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\"; }\n\n.fa-globe:before {\n  content: \"\\F0AC\"; }\n\n.fa-wrench:before {\n  content: \"\\F0AD\"; }\n\n.fa-tasks:before {\n  content: \"\\F0AE\"; }\n\n.fa-filter:before {\n  content: \"\\F0B0\"; }\n\n.fa-briefcase:before {\n  content: \"\\F0B1\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\F0B2\"; }\n\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\"; }\n\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\"; }\n\n.fa-cloud:before {\n  content: \"\\F0C2\"; }\n\n.fa-flask:before {\n  content: \"\\F0C3\"; }\n\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\"; }\n\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\"; }\n\n.fa-paperclip:before {\n  content: \"\\F0C6\"; }\n\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\"; }\n\n.fa-square:before {\n  content: \"\\F0C8\"; }\n\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\"; }\n\n.fa-list-ul:before {\n  content: \"\\F0CA\"; }\n\n.fa-list-ol:before {\n  content: \"\\F0CB\"; }\n\n.fa-strikethrough:before {\n  content: \"\\F0CC\"; }\n\n.fa-underline:before {\n  content: \"\\F0CD\"; }\n\n.fa-table:before {\n  content: \"\\F0CE\"; }\n\n.fa-magic:before {\n  content: \"\\F0D0\"; }\n\n.fa-truck:before {\n  content: \"\\F0D1\"; }\n\n.fa-pinterest:before {\n  content: \"\\F0D2\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\F0D3\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\F0D4\"; }\n\n.fa-google-plus:before {\n  content: \"\\F0D5\"; }\n\n.fa-money:before {\n  content: \"\\F0D6\"; }\n\n.fa-caret-down:before {\n  content: \"\\F0D7\"; }\n\n.fa-caret-up:before {\n  content: \"\\F0D8\"; }\n\n.fa-caret-left:before {\n  content: \"\\F0D9\"; }\n\n.fa-caret-right:before {\n  content: \"\\F0DA\"; }\n\n.fa-columns:before {\n  content: \"\\F0DB\"; }\n\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\"; }\n\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\"; }\n\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\"; }\n\n.fa-envelope:before {\n  content: \"\\F0E0\"; }\n\n.fa-linkedin:before {\n  content: \"\\F0E1\"; }\n\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\"; }\n\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\"; }\n\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\"; }\n\n.fa-comment-o:before {\n  content: \"\\F0E5\"; }\n\n.fa-comments-o:before {\n  content: \"\\F0E6\"; }\n\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\"; }\n\n.fa-sitemap:before {\n  content: \"\\F0E8\"; }\n\n.fa-umbrella:before {\n  content: \"\\F0E9\"; }\n\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\"; }\n\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\"; }\n\n.fa-exchange:before {\n  content: \"\\F0EC\"; }\n\n.fa-cloud-download:before {\n  content: \"\\F0ED\"; }\n\n.fa-cloud-upload:before {\n  content: \"\\F0EE\"; }\n\n.fa-user-md:before {\n  content: \"\\F0F0\"; }\n\n.fa-stethoscope:before {\n  content: \"\\F0F1\"; }\n\n.fa-suitcase:before {\n  content: \"\\F0F2\"; }\n\n.fa-bell-o:before {\n  content: \"\\F0A2\"; }\n\n.fa-coffee:before {\n  content: \"\\F0F4\"; }\n\n.fa-cutlery:before {\n  content: \"\\F0F5\"; }\n\n.fa-file-text-o:before {\n  content: \"\\F0F6\"; }\n\n.fa-building-o:before {\n  content: \"\\F0F7\"; }\n\n.fa-hospital-o:before {\n  content: \"\\F0F8\"; }\n\n.fa-ambulance:before {\n  content: \"\\F0F9\"; }\n\n.fa-medkit:before {\n  content: \"\\F0FA\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\F0FB\"; }\n\n.fa-beer:before {\n  content: \"\\F0FC\"; }\n\n.fa-h-square:before {\n  content: \"\\F0FD\"; }\n\n.fa-plus-square:before {\n  content: \"\\F0FE\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\F100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\F101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\F102\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\F103\"; }\n\n.fa-angle-left:before {\n  content: \"\\F104\"; }\n\n.fa-angle-right:before {\n  content: \"\\F105\"; }\n\n.fa-angle-up:before {\n  content: \"\\F106\"; }\n\n.fa-angle-down:before {\n  content: \"\\F107\"; }\n\n.fa-desktop:before {\n  content: \"\\F108\"; }\n\n.fa-laptop:before {\n  content: \"\\F109\"; }\n\n.fa-tablet:before {\n  content: \"\\F10A\"; }\n\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\"; }\n\n.fa-circle-o:before {\n  content: \"\\F10C\"; }\n\n.fa-quote-left:before {\n  content: \"\\F10D\"; }\n\n.fa-quote-right:before {\n  content: \"\\F10E\"; }\n\n.fa-spinner:before {\n  content: \"\\F110\"; }\n\n.fa-circle:before {\n  content: \"\\F111\"; }\n\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\"; }\n\n.fa-github-alt:before {\n  content: \"\\F113\"; }\n\n.fa-folder-o:before {\n  content: \"\\F114\"; }\n\n.fa-folder-open-o:before {\n  content: \"\\F115\"; }\n\n.fa-smile-o:before {\n  content: \"\\F118\"; }\n\n.fa-frown-o:before {\n  content: \"\\F119\"; }\n\n.fa-meh-o:before {\n  content: \"\\F11A\"; }\n\n.fa-gamepad:before {\n  content: \"\\F11B\"; }\n\n.fa-keyboard-o:before {\n  content: \"\\F11C\"; }\n\n.fa-flag-o:before {\n  content: \"\\F11D\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\F11E\"; }\n\n.fa-terminal:before {\n  content: \"\\F120\"; }\n\n.fa-code:before {\n  content: \"\\F121\"; }\n\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\"; }\n\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\"; }\n\n.fa-location-arrow:before {\n  content: \"\\F124\"; }\n\n.fa-crop:before {\n  content: \"\\F125\"; }\n\n.fa-code-fork:before {\n  content: \"\\F126\"; }\n\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\"; }\n\n.fa-question:before {\n  content: \"\\F128\"; }\n\n.fa-info:before {\n  content: \"\\F129\"; }\n\n.fa-exclamation:before {\n  content: \"\\F12A\"; }\n\n.fa-superscript:before {\n  content: \"\\F12B\"; }\n\n.fa-subscript:before {\n  content: \"\\F12C\"; }\n\n.fa-eraser:before {\n  content: \"\\F12D\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\F12E\"; }\n\n.fa-microphone:before {\n  content: \"\\F130\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\F131\"; }\n\n.fa-shield:before {\n  content: \"\\F132\"; }\n\n.fa-calendar-o:before {\n  content: \"\\F133\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\F134\"; }\n\n.fa-rocket:before {\n  content: \"\\F135\"; }\n\n.fa-maxcdn:before {\n  content: \"\\F136\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\F137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\F138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\F139\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\"; }\n\n.fa-html5:before {\n  content: \"\\F13B\"; }\n\n.fa-css3:before {\n  content: \"\\F13C\"; }\n\n.fa-anchor:before {\n  content: \"\\F13D\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\F13E\"; }\n\n.fa-bullseye:before {\n  content: \"\\F140\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\F141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\F142\"; }\n\n.fa-rss-square:before {\n  content: \"\\F143\"; }\n\n.fa-play-circle:before {\n  content: \"\\F144\"; }\n\n.fa-ticket:before {\n  content: \"\\F145\"; }\n\n.fa-minus-square:before {\n  content: \"\\F146\"; }\n\n.fa-minus-square-o:before {\n  content: \"\\F147\"; }\n\n.fa-level-up:before {\n  content: \"\\F148\"; }\n\n.fa-level-down:before {\n  content: \"\\F149\"; }\n\n.fa-check-square:before {\n  content: \"\\F14A\"; }\n\n.fa-pencil-square:before {\n  content: \"\\F14B\"; }\n\n.fa-external-link-square:before {\n  content: \"\\F14C\"; }\n\n.fa-share-square:before {\n  content: \"\\F14D\"; }\n\n.fa-compass:before {\n  content: \"\\F14E\"; }\n\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\"; }\n\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\"; }\n\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\"; }\n\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\"; }\n\n.fa-gbp:before {\n  content: \"\\F154\"; }\n\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\"; }\n\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\"; }\n\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\"; }\n\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\"; }\n\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\"; }\n\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\"; }\n\n.fa-file:before {\n  content: \"\\F15B\"; }\n\n.fa-file-text:before {\n  content: \"\\F15C\"; }\n\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\"; }\n\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\"; }\n\n.fa-sort-amount-asc:before {\n  content: \"\\F160\"; }\n\n.fa-sort-amount-desc:before {\n  content: \"\\F161\"; }\n\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\"; }\n\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\F164\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\F165\"; }\n\n.fa-youtube-square:before {\n  content: \"\\F166\"; }\n\n.fa-youtube:before {\n  content: \"\\F167\"; }\n\n.fa-xing:before {\n  content: \"\\F168\"; }\n\n.fa-xing-square:before {\n  content: \"\\F169\"; }\n\n.fa-youtube-play:before {\n  content: \"\\F16A\"; }\n\n.fa-dropbox:before {\n  content: \"\\F16B\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\F16C\"; }\n\n.fa-instagram:before {\n  content: \"\\F16D\"; }\n\n.fa-flickr:before {\n  content: \"\\F16E\"; }\n\n.fa-adn:before {\n  content: \"\\F170\"; }\n\n.fa-bitbucket:before {\n  content: \"\\F171\"; }\n\n.fa-bitbucket-square:before {\n  content: \"\\F172\"; }\n\n.fa-tumblr:before {\n  content: \"\\F173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\F174\"; }\n\n.fa-long-arrow-down:before {\n  content: \"\\F175\"; }\n\n.fa-long-arrow-up:before {\n  content: \"\\F176\"; }\n\n.fa-long-arrow-left:before {\n  content: \"\\F177\"; }\n\n.fa-long-arrow-right:before {\n  content: \"\\F178\"; }\n\n.fa-apple:before {\n  content: \"\\F179\"; }\n\n.fa-windows:before {\n  content: \"\\F17A\"; }\n\n.fa-android:before {\n  content: \"\\F17B\"; }\n\n.fa-linux:before {\n  content: \"\\F17C\"; }\n\n.fa-dribbble:before {\n  content: \"\\F17D\"; }\n\n.fa-skype:before {\n  content: \"\\F17E\"; }\n\n.fa-foursquare:before {\n  content: \"\\F180\"; }\n\n.fa-trello:before {\n  content: \"\\F181\"; }\n\n.fa-female:before {\n  content: \"\\F182\"; }\n\n.fa-male:before {\n  content: \"\\F183\"; }\n\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\"; }\n\n.fa-sun-o:before {\n  content: \"\\F185\"; }\n\n.fa-moon-o:before {\n  content: \"\\F186\"; }\n\n.fa-archive:before {\n  content: \"\\F187\"; }\n\n.fa-bug:before {\n  content: \"\\F188\"; }\n\n.fa-vk:before {\n  content: \"\\F189\"; }\n\n.fa-weibo:before {\n  content: \"\\F18A\"; }\n\n.fa-renren:before {\n  content: \"\\F18B\"; }\n\n.fa-pagelines:before {\n  content: \"\\F18C\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\F18D\"; }\n\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\"; }\n\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\"; }\n\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\"; }\n\n.fa-dot-circle-o:before {\n  content: \"\\F192\"; }\n\n.fa-wheelchair:before {\n  content: \"\\F193\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\F194\"; }\n\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\"; }\n\n.fa-plus-square-o:before {\n  content: \"\\F196\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\F197\"; }\n\n.fa-slack:before {\n  content: \"\\F198\"; }\n\n.fa-envelope-square:before {\n  content: \"\\F199\"; }\n\n.fa-wordpress:before {\n  content: \"\\F19A\"; }\n\n.fa-openid:before {\n  content: \"\\F19B\"; }\n\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\"; }\n\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\"; }\n\n.fa-yahoo:before {\n  content: \"\\F19E\"; }\n\n.fa-google:before {\n  content: \"\\F1A0\"; }\n\n.fa-reddit:before {\n  content: \"\\F1A1\"; }\n\n.fa-reddit-square:before {\n  content: \"\\F1A2\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\F1A4\"; }\n\n.fa-delicious:before {\n  content: \"\\F1A5\"; }\n\n.fa-digg:before {\n  content: \"\\F1A6\"; }\n\n.fa-pied-piper:before {\n  content: \"\\F1A7\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\"; }\n\n.fa-drupal:before {\n  content: \"\\F1A9\"; }\n\n.fa-joomla:before {\n  content: \"\\F1AA\"; }\n\n.fa-language:before {\n  content: \"\\F1AB\"; }\n\n.fa-fax:before {\n  content: \"\\F1AC\"; }\n\n.fa-building:before {\n  content: \"\\F1AD\"; }\n\n.fa-child:before {\n  content: \"\\F1AE\"; }\n\n.fa-paw:before {\n  content: \"\\F1B0\"; }\n\n.fa-spoon:before {\n  content: \"\\F1B1\"; }\n\n.fa-cube:before {\n  content: \"\\F1B2\"; }\n\n.fa-cubes:before {\n  content: \"\\F1B3\"; }\n\n.fa-behance:before {\n  content: \"\\F1B4\"; }\n\n.fa-behance-square:before {\n  content: \"\\F1B5\"; }\n\n.fa-steam:before {\n  content: \"\\F1B6\"; }\n\n.fa-steam-square:before {\n  content: \"\\F1B7\"; }\n\n.fa-recycle:before {\n  content: \"\\F1B8\"; }\n\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\"; }\n\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\"; }\n\n.fa-tree:before {\n  content: \"\\F1BB\"; }\n\n.fa-spotify:before {\n  content: \"\\F1BC\"; }\n\n.fa-deviantart:before {\n  content: \"\\F1BD\"; }\n\n.fa-soundcloud:before {\n  content: \"\\F1BE\"; }\n\n.fa-database:before {\n  content: \"\\F1C0\"; }\n\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\"; }\n\n.fa-file-word-o:before {\n  content: \"\\F1C2\"; }\n\n.fa-file-excel-o:before {\n  content: \"\\F1C3\"; }\n\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\"; }\n\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\"; }\n\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\"; }\n\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\"; }\n\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\"; }\n\n.fa-file-code-o:before {\n  content: \"\\F1C9\"; }\n\n.fa-vine:before {\n  content: \"\\F1CA\"; }\n\n.fa-codepen:before {\n  content: \"\\F1CB\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\F1CC\"; }\n\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\"; }\n\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\"; }\n\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\F1D0\"; }\n\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\"; }\n\n.fa-git-square:before {\n  content: \"\\F1D2\"; }\n\n.fa-git:before {\n  content: \"\\F1D3\"; }\n\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\"; }\n\n.fa-qq:before {\n  content: \"\\F1D6\"; }\n\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\"; }\n\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\"; }\n\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\"; }\n\n.fa-history:before {\n  content: \"\\F1DA\"; }\n\n.fa-circle-thin:before {\n  content: \"\\F1DB\"; }\n\n.fa-header:before {\n  content: \"\\F1DC\"; }\n\n.fa-paragraph:before {\n  content: \"\\F1DD\"; }\n\n.fa-sliders:before {\n  content: \"\\F1DE\"; }\n\n.fa-share-alt:before {\n  content: \"\\F1E0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\F1E1\"; }\n\n.fa-bomb:before {\n  content: \"\\F1E2\"; }\n\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\"; }\n\n.fa-tty:before {\n  content: \"\\F1E4\"; }\n\n.fa-binoculars:before {\n  content: \"\\F1E5\"; }\n\n.fa-plug:before {\n  content: \"\\F1E6\"; }\n\n.fa-slideshare:before {\n  content: \"\\F1E7\"; }\n\n.fa-twitch:before {\n  content: \"\\F1E8\"; }\n\n.fa-yelp:before {\n  content: \"\\F1E9\"; }\n\n.fa-newspaper-o:before {\n  content: \"\\F1EA\"; }\n\n.fa-wifi:before {\n  content: \"\\F1EB\"; }\n\n.fa-calculator:before {\n  content: \"\\F1EC\"; }\n\n.fa-paypal:before {\n  content: \"\\F1ED\"; }\n\n.fa-google-wallet:before {\n  content: \"\\F1EE\"; }\n\n.fa-cc-visa:before {\n  content: \"\\F1F0\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\"; }\n\n.fa-cc-discover:before {\n  content: \"\\F1F2\"; }\n\n.fa-cc-amex:before {\n  content: \"\\F1F3\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\F1F4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\F1F5\"; }\n\n.fa-bell-slash:before {\n  content: \"\\F1F6\"; }\n\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\"; }\n\n.fa-trash:before {\n  content: \"\\F1F8\"; }\n\n.fa-copyright:before {\n  content: \"\\F1F9\"; }\n\n.fa-at:before {\n  content: \"\\F1FA\"; }\n\n.fa-eyedropper:before {\n  content: \"\\F1FB\"; }\n\n.fa-paint-brush:before {\n  content: \"\\F1FC\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\F1FD\"; }\n\n.fa-area-chart:before {\n  content: \"\\F1FE\"; }\n\n.fa-pie-chart:before {\n  content: \"\\F200\"; }\n\n.fa-line-chart:before {\n  content: \"\\F201\"; }\n\n.fa-lastfm:before {\n  content: \"\\F202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\F203\"; }\n\n.fa-toggle-off:before {\n  content: \"\\F204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\F205\"; }\n\n.fa-bicycle:before {\n  content: \"\\F206\"; }\n\n.fa-bus:before {\n  content: \"\\F207\"; }\n\n.fa-ioxhost:before {\n  content: \"\\F208\"; }\n\n.fa-angellist:before {\n  content: \"\\F209\"; }\n\n.fa-cc:before {\n  content: \"\\F20A\"; }\n\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\"; }\n\n.fa-meanpath:before {\n  content: \"\\F20C\"; }\n\n.fa-buysellads:before {\n  content: \"\\F20D\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\F20E\"; }\n\n.fa-dashcube:before {\n  content: \"\\F210\"; }\n\n.fa-forumbee:before {\n  content: \"\\F211\"; }\n\n.fa-leanpub:before {\n  content: \"\\F212\"; }\n\n.fa-sellsy:before {\n  content: \"\\F213\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\F214\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\F215\"; }\n\n.fa-skyatlas:before {\n  content: \"\\F216\"; }\n\n.fa-cart-plus:before {\n  content: \"\\F217\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\F218\"; }\n\n.fa-diamond:before {\n  content: \"\\F219\"; }\n\n.fa-ship:before {\n  content: \"\\F21A\"; }\n\n.fa-user-secret:before {\n  content: \"\\F21B\"; }\n\n.fa-motorcycle:before {\n  content: \"\\F21C\"; }\n\n.fa-street-view:before {\n  content: \"\\F21D\"; }\n\n.fa-heartbeat:before {\n  content: \"\\F21E\"; }\n\n.fa-venus:before {\n  content: \"\\F221\"; }\n\n.fa-mars:before {\n  content: \"\\F222\"; }\n\n.fa-mercury:before {\n  content: \"\\F223\"; }\n\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\F225\"; }\n\n.fa-venus-double:before {\n  content: \"\\F226\"; }\n\n.fa-mars-double:before {\n  content: \"\\F227\"; }\n\n.fa-venus-mars:before {\n  content: \"\\F228\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\F229\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\"; }\n\n.fa-neuter:before {\n  content: \"\\F22C\"; }\n\n.fa-genderless:before {\n  content: \"\\F22D\"; }\n\n.fa-facebook-official:before {\n  content: \"\\F230\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\F231\"; }\n\n.fa-whatsapp:before {\n  content: \"\\F232\"; }\n\n.fa-server:before {\n  content: \"\\F233\"; }\n\n.fa-user-plus:before {\n  content: \"\\F234\"; }\n\n.fa-user-times:before {\n  content: \"\\F235\"; }\n\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\"; }\n\n.fa-viacoin:before {\n  content: \"\\F237\"; }\n\n.fa-train:before {\n  content: \"\\F238\"; }\n\n.fa-subway:before {\n  content: \"\\F239\"; }\n\n.fa-medium:before {\n  content: \"\\F23A\"; }\n\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\"; }\n\n.fa-optin-monster:before {\n  content: \"\\F23C\"; }\n\n.fa-opencart:before {\n  content: \"\\F23D\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\F23E\"; }\n\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\"; }\n\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\"; }\n\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\"; }\n\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\"; }\n\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\F245\"; }\n\n.fa-i-cursor:before {\n  content: \"\\F246\"; }\n\n.fa-object-group:before {\n  content: \"\\F247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\F248\"; }\n\n.fa-sticky-note:before {\n  content: \"\\F249\"; }\n\n.fa-sticky-note-o:before {\n  content: \"\\F24A\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\F24B\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\F24C\"; }\n\n.fa-clone:before {\n  content: \"\\F24D\"; }\n\n.fa-balance-scale:before {\n  content: \"\\F24E\"; }\n\n.fa-hourglass-o:before {\n  content: \"\\F250\"; }\n\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\"; }\n\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\"; }\n\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\"; }\n\n.fa-hourglass:before {\n  content: \"\\F254\"; }\n\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\"; }\n\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\"; }\n\n.fa-hand-scissors-o:before {\n  content: \"\\F257\"; }\n\n.fa-hand-lizard-o:before {\n  content: \"\\F258\"; }\n\n.fa-hand-spock-o:before {\n  content: \"\\F259\"; }\n\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\"; }\n\n.fa-hand-peace-o:before {\n  content: \"\\F25B\"; }\n\n.fa-trademark:before {\n  content: \"\\F25C\"; }\n\n.fa-registered:before {\n  content: \"\\F25D\"; }\n\n.fa-creative-commons:before {\n  content: \"\\F25E\"; }\n\n.fa-gg:before {\n  content: \"\\F260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\F261\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\F262\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\F263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\"; }\n\n.fa-get-pocket:before {\n  content: \"\\F265\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\F266\"; }\n\n.fa-safari:before {\n  content: \"\\F267\"; }\n\n.fa-chrome:before {\n  content: \"\\F268\"; }\n\n.fa-firefox:before {\n  content: \"\\F269\"; }\n\n.fa-opera:before {\n  content: \"\\F26A\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\F26B\"; }\n\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\"; }\n\n.fa-contao:before {\n  content: \"\\F26D\"; }\n\n.fa-500px:before {\n  content: \"\\F26E\"; }\n\n.fa-amazon:before {\n  content: \"\\F270\"; }\n\n.fa-calendar-plus-o:before {\n  content: \"\\F271\"; }\n\n.fa-calendar-minus-o:before {\n  content: \"\\F272\"; }\n\n.fa-calendar-times-o:before {\n  content: \"\\F273\"; }\n\n.fa-calendar-check-o:before {\n  content: \"\\F274\"; }\n\n.fa-industry:before {\n  content: \"\\F275\"; }\n\n.fa-map-pin:before {\n  content: \"\\F276\"; }\n\n.fa-map-signs:before {\n  content: \"\\F277\"; }\n\n.fa-map-o:before {\n  content: \"\\F278\"; }\n\n.fa-map:before {\n  content: \"\\F279\"; }\n\n.fa-commenting:before {\n  content: \"\\F27A\"; }\n\n.fa-commenting-o:before {\n  content: \"\\F27B\"; }\n\n.fa-houzz:before {\n  content: \"\\F27C\"; }\n\n.fa-vimeo:before {\n  content: \"\\F27D\"; }\n\n.fa-black-tie:before {\n  content: \"\\F27E\"; }\n\n.fa-fonticons:before {\n  content: \"\\F280\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\F281\"; }\n\n.fa-edge:before {\n  content: \"\\F282\"; }\n\n.fa-credit-card-alt:before {\n  content: \"\\F283\"; }\n\n.fa-codiepie:before {\n  content: \"\\F284\"; }\n\n.fa-modx:before {\n  content: \"\\F285\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\F286\"; }\n\n.fa-usb:before {\n  content: \"\\F287\"; }\n\n.fa-product-hunt:before {\n  content: \"\\F288\"; }\n\n.fa-mixcloud:before {\n  content: \"\\F289\"; }\n\n.fa-scribd:before {\n  content: \"\\F28A\"; }\n\n.fa-pause-circle:before {\n  content: \"\\F28B\"; }\n\n.fa-pause-circle-o:before {\n  content: \"\\F28C\"; }\n\n.fa-stop-circle:before {\n  content: \"\\F28D\"; }\n\n.fa-stop-circle-o:before {\n  content: \"\\F28E\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\F290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\F291\"; }\n\n.fa-hashtag:before {\n  content: \"\\F292\"; }\n\n.fa-bluetooth:before {\n  content: \"\\F293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\F294\"; }\n\n.fa-percent:before {\n  content: \"\\F295\"; }\n\n::-moz-selection {\n  background-color: rgba(200, 200, 200, 0.8);\n  color: rgba(34, 34, 34, 0.8);\n  text-shadow: none; }\n\n::selection {\n  background-color: rgba(200, 200, 200, 0.8);\n  color: rgba(34, 34, 34, 0.8);\n  text-shadow: none; }\n\n.wrap {\n  margin: 0 auto; }\n\n.all-caps {\n  text-transform: uppercase; }\n\n.image-left {\n  float: none; }\n  @media only screen and (min-width: 48em) {\n    .image-left {\n      float: left; } }\n\n.image-right {\n  float: none; }\n  @media only screen and (min-width: 48em) {\n    .image-right {\n      float: right; } }\n\n.unstyled-list {\n  list-style: none;\n  margin-left: 0;\n  padding-left: 0; }\n  .unstyled-list li {\n    list-style-type: none; }\n\n.inline-list {\n  list-style: none;\n  margin-left: 0;\n  padding-left: 0; }\n  .inline-list li {\n    list-style-type: none;\n    display: inline; }\n\nb, i, strong, em, blockquote, p, q, span, figure, img, h1, h2, header, input, a {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -ms-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n\nbody {\n  font-family: \"Lato\", Calibri, Arial, sans-serif;\n  color: rgba(34, 34, 34, 0.8); }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Lato\", Calibri, Arial, sans-serif; }\n\nh1 {\n  font-size: 28px;\n  font-size: 1.75rem; }\n  @media only screen and (min-width: 48em) {\n    h1 {\n      font-size: 32px;\n      font-size: 2rem; } }\n\na {\n  text-decoration: none;\n  color: rgba(34, 34, 34, 0.8); }\n  a:visited {\n    color: rgba(85, 85, 85, 0.8); }\n  a:hover {\n    color: rgba(0, 0, 0, 0.8); }\n  a:focus {\n    outline: thin dotted;\n    color: rgba(0, 0, 0, 0.8); }\n  a:hover, a:active {\n    outline: 0; }\n\n.link-arrow {\n  font-weight: 100;\n  text-decoration: underline;\n  font-style: normal; }\n\nfigcaption {\n  padding-top: 10px;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1.8571;\n  line-height: 1.3;\n  color: rgba(60, 60, 60, 0.8); }\n\n.notice {\n  margin-top: 1.5em;\n  padding: .5em 1em;\n  text-indent: 0;\n  font-size: 14px;\n  font-size: 0.875rem;\n  background-color: #e8e8e8;\n  border: 1px solid #b5b5b5;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n\nblockquote {\n  font-family: serif;\n  font-style: italic;\n  border-left: 8px solid rgba(187, 187, 187, 0.8);\n  padding-left: 20px; }\n  @media only screen and (min-width: 48em) {\n    blockquote {\n      margin-left: -28px; } }\n\n.entry-content li {\n  margin-bottom: 7px; }\n\n.entry-content .footnotes ol, .entry-content .footnotes li, .entry-content .footnotes p {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1.8571;\n  margin-bottom: 26px;\n  margin-bottom: 1.625rem; }\n\ntt, code, kbd, samp, pre {\n  font-family: monospace; }\n\np code,\nli code {\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: nowrap;\n  margin: 0 2px;\n  padding: 0 5px;\n  border: 1px solid #e6e6e6;\n  background-color: #f2f2f2;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n\npre {\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  overflow-x: auto; }\n  pre::-webkit-scrollbar {\n    height: 12px;\n    background-color: #34362e;\n    border-radius: 0 0 4px 4px; }\n  pre::-webkit-scrollbar-thumb:horizontal {\n    background-color: #6a6d5d;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px; }\n\n.animated {\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  -ms-animation-fill-mode: both;\n  -o-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  -ms-animation-duration: 1s;\n  -o-animation-duration: 1s;\n  animation-duration: 1s; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  -moz-animation-duration: 2s;\n  -ms-animation-duration: 2s;\n  -o-animation-duration: 2s;\n  animation-duration: 2s; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  -moz-animation-name: fadeIn;\n  -o-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@-moz-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -moz-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -moz-transform: translateY(0); } }\n\n@-o-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -o-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -o-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0); } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  -moz-animation-name: fadeInDown;\n  -o-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@-moz-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -moz-transform: translateY(-2000px); }\n  100% {\n    opacity: 1;\n    -moz-transform: translateY(0); } }\n\n@-o-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -o-transform: translateY(-2000px); }\n  100% {\n    opacity: 1;\n    -o-transform: translateY(0); } }\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    transform: translateY(-2000px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0); } }\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  -moz-animation-name: fadeInDownBig;\n  -o-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig; }\n\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05); }\n  70% {\n    -webkit-transform: scale(0.9); }\n  100% {\n    -webkit-transform: scale(1); } }\n\n@-moz-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -moz-transform: scale(0.3); }\n  50% {\n    opacity: 1;\n    -moz-transform: scale(1.05); }\n  70% {\n    -moz-transform: scale(0.9); }\n  100% {\n    -moz-transform: scale(1); } }\n\n@-o-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -o-transform: scale(0.3); }\n  50% {\n    opacity: 1;\n    -o-transform: scale(1.05); }\n  70% {\n    -o-transform: scale(0.9); }\n  100% {\n    -o-transform: scale(1); } }\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3); }\n  50% {\n    opacity: 1;\n    transform: scale(1.05); }\n  70% {\n    transform: scale(0.9); }\n  100% {\n    transform: scale(1); } }\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  -moz-animation-name: bounceIn;\n  -o-animation-name: bounceIn;\n  animation-name: bounceIn; }\n\n@-webkit-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px); }\n  80% {\n    -webkit-transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n\n@-moz-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -moz-transform: translateY(-2000px); }\n  60% {\n    opacity: 1;\n    -moz-transform: translateY(30px); }\n  80% {\n    -moz-transform: translateY(-10px); }\n  100% {\n    -moz-transform: translateY(0); } }\n\n@-o-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -o-transform: translateY(-2000px); }\n  60% {\n    opacity: 1;\n    -o-transform: translateY(30px); }\n  80% {\n    -o-transform: translateY(-10px); }\n  100% {\n    -o-transform: translateY(0); } }\n\n@keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-2000px); }\n  60% {\n    opacity: 1;\n    transform: translateY(30px); }\n  80% {\n    transform: translateY(-10px); }\n  100% {\n    transform: translateY(0); } }\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  -moz-animation-name: bounceInDown;\n  -o-animation-name: bounceInDown;\n  animation-name: bounceInDown; }\n\n@-webkit-keyframes drop {\n  0% {\n    -webkit-transform: translateY(-500px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n\n@-moz-keyframes drop {\n  0% {\n    -moz-transform: translateY(-500px); }\n  100% {\n    -moz-transform: translateY(0); } }\n\n@-o-keyframes drop {\n  0% {\n    -o-transform: translateY(-500px); }\n  100% {\n    -o-transform: translateY(0); } }\n\n@keyframes drop {\n  0% {\n    transform: translateY(-500px); }\n  100% {\n    transform: translateY(0); } }\n\n.drop {\n  -webkit-animation-name: drop;\n  -moz-animation-name: drop;\n  -o-animation-name: drop;\n  animation-name: drop; }\n\n.dl-menuwrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 200%;\n  -moz-perspective-origin: 50% 200%;\n  perspective-origin: 50% 200%;\n  /* Hide the inner submenus */ }\n  @media only screen and (min-width: 48em) {\n    .dl-menuwrapper {\n      position: fixed;\n      max-width: 175px;\n      top: 25px;\n      left: 25px; } }\n  .dl-menuwrapper button {\n    top: 0;\n    left: 0;\n    background: #222222;\n    border: none;\n    width: 48px;\n    height: 45px;\n    text-indent: -900em;\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    -webkit-border-top-right-radius: 0;\n    -webkit-border-bottom-right-radius: 3px;\n    -webkit-border-bottom-left-radius: 0;\n    -webkit-border-top-left-radius: 0;\n    -moz-border-radius-topright: 0;\n    -moz-border-radius-bottomright: 3px;\n    -moz-border-radius-bottomleft: 0;\n    -moz-border-radius-topleft: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    -webkit-background-clip: padding-box;\n    -moz-background-clip: padding;\n    background-clip: padding-box;\n    opacity: 0.6; }\n    @media only screen and (min-width: 48em) {\n      .dl-menuwrapper button {\n        -webkit-border-top-right-radius: 3px;\n        -webkit-border-bottom-right-radius: 3px;\n        -webkit-border-bottom-left-radius: 3px;\n        -webkit-border-top-left-radius: 3px;\n        -moz-border-radius-topright: 3px;\n        -moz-border-radius-bottomright: 3px;\n        -moz-border-radius-bottomleft: 3px;\n        -moz-border-radius-topleft: 3px;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n        border-bottom-left-radius: 3px;\n        border-top-left-radius: 3px;\n        -webkit-background-clip: padding-box;\n        -moz-background-clip: padding;\n        background-clip: padding-box; } }\n  .dl-menuwrapper button:hover,\n  .dl-menuwrapper button.dl-active,\n  .dl-menuwrapper ul {\n    background: #aaa; }\n  .dl-menuwrapper button:after {\n    content: '';\n    position: absolute;\n    width: 68%;\n    height: 5px;\n    background: #fff;\n    top: 10px;\n    left: 16%;\n    box-shadow: 0 10px 0 #fff, 0 20px 0 #fff; }\n  .dl-menuwrapper button.dl-active {\n    display: none; }\n  .dl-menuwrapper ul {\n    padding: 0;\n    list-style: none;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n  .dl-menuwrapper li {\n    position: relative; }\n    .dl-menuwrapper li h4 {\n      margin: 0;\n      padding: 15px 20px 0;\n      color: rgba(255, 255, 255, 0.9); }\n    .dl-menuwrapper li p {\n      margin: 0;\n      padding: 15px 20px;\n      font-size: 14px;\n      font-size: 0.875rem;\n      color: rgba(255, 255, 255, 0.8);\n      font-weight: 300; }\n      .dl-menuwrapper li p a {\n        display: inline;\n        padding: 0;\n        font-size: 14px;\n        font-size: 0.875rem; }\n    .dl-menuwrapper li a {\n      display: block;\n      position: relative;\n      padding: 15px 20px;\n      font-size: 14px;\n      font-size: 0.875rem;\n      line-height: 20px;\n      font-weight: 400;\n      color: #fff;\n      outline: none; }\n    .dl-menuwrapper li.dl-back > a {\n      padding-left: 30px;\n      background: rgba(0, 0, 0, 0.2); }\n    .dl-menuwrapper li.dl-back:after,\n    .dl-menuwrapper li > a:not(:only-child):after {\n      position: absolute;\n      top: 0;\n      line-height: 50px;\n      font-family: 'fontawesome';\n      color: #fff;\n      speak: none;\n      -webkit-font-smoothing: antialiased;\n      content: \"\\F105\"; }\n    .dl-menuwrapper li.dl-back:after {\n      left: 10px;\n      color: rgba(212, 204, 198, 0.5);\n      -webkit-transform: rotate(180deg);\n      -moz-transform: rotate(180deg);\n      transform: rotate(180deg); }\n    .dl-menuwrapper li > a:after {\n      right: 10px;\n      color: rgba(0, 0, 0, 0.15); }\n  .dl-menuwrapper .dl-menu {\n    margin: 0;\n    position: absolute;\n    width: 100%;\n    max-width: 400px;\n    overflow-y: auto;\n    max-height: 600px;\n    opacity: 0;\n    pointer-events: none;\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);\n    -webkit-transform: translateY(10px);\n    -moz-transform: translateY(10px);\n    transform: translateY(10px);\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden; }\n    @media only screen and (min-width: 48em) {\n      .dl-menuwrapper .dl-menu {\n        -webkit-border-top-right-radius: 3px;\n        -webkit-border-bottom-right-radius: 3px;\n        -webkit-border-bottom-left-radius: 3px;\n        -webkit-border-top-left-radius: 3px;\n        -moz-border-radius-topright: 3px;\n        -moz-border-radius-bottomright: 3px;\n        -moz-border-radius-bottomleft: 3px;\n        -moz-border-radius-topleft: 3px;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n        border-bottom-left-radius: 3px;\n        border-top-left-radius: 3px;\n        -webkit-background-clip: padding-box;\n        -moz-background-clip: padding;\n        background-clip: padding-box;\n        max-height: 650px; } }\n  .dl-menuwrapper .dl-menu.dl-menu-toggle {\n    -webkit-transition: all 0.3s ease;\n    -moz-transition: all 0.3s ease;\n    transition: all 0.3s ease; }\n  .dl-menuwrapper .dl-menu.dl-menuopen {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    transform: translateY(0px); }\n  .dl-menuwrapper .dl-submenu {\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4); }\n    .dl-menuwrapper .dl-submenu .btn, .dl-menuwrapper .dl-submenu .read-more-header a, .read-more-header .dl-menuwrapper .dl-submenu a, .dl-menuwrapper .dl-submenu #goog-wm-sb {\n      margin-bottom: 0; }\n  .dl-menuwrapper li .dl-submenu {\n    display: none; }\n\n/* \r\nWhen a submenu is openend, we will hide all li siblings.\r\nFor that we give a class to the parent menu called \"dl-subview\".\r\nWe also hide the submenu link. \r\nThe opened submenu will get the class \"dl-subviewopen\".\r\nAll this is done for any sub-level being entered.\r\n*/\n.dl-menu.dl-subview li,\n.dl-menu.dl-subview li.dl-subviewopen > a,\n.dl-menu.dl-subview li.dl-subview > a {\n  display: none; }\n\n.dl-menu.dl-subview li.dl-subview,\n.dl-menu.dl-subview li.dl-subview .dl-submenu,\n.dl-menu.dl-subview li.dl-subviewopen,\n.dl-menu.dl-subview li.dl-subviewopen > .dl-submenu,\n.dl-menu.dl-subview li.dl-subviewopen > .dl-submenu > li {\n  display: block; }\n\n/* Animation classes for moving out and in */\n.dl-menu.dl-animate-out {\n  -webkit-animation: MenuAnimOut 0.4s ease;\n  -moz-animation: MenuAnimOut 0.4s ease;\n  animation: MenuAnimOut 0.4s ease; }\n\n@-webkit-keyframes MenuAnimOut {\n  100% {\n    -webkit-transform: translateZ(300px);\n    opacity: 0; } }\n\n@-moz-keyframes MenuAnimOut {\n  100% {\n    -moz-transform: translateZ(300px);\n    opacity: 0; } }\n\n@keyframes MenuAnimOut {\n  100% {\n    transform: translateZ(300px);\n    opacity: 0; } }\n\n.dl-menu.dl-animate-in {\n  -webkit-animation: MenuAnimIn 0.4s ease;\n  -moz-animation: MenuAnimIn 0.4s ease;\n  animation: MenuAnimIn 0.4s ease; }\n\n@-webkit-keyframes MenuAnimIn {\n  0% {\n    -webkit-transform: translateZ(300px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateZ(0px);\n    opacity: 1; } }\n\n@-moz-keyframes MenuAnimIn {\n  0% {\n    -moz-transform: translateZ(300px);\n    opacity: 0; }\n  100% {\n    -moz-transform: translateZ(0px);\n    opacity: 1; } }\n\n@keyframes MenuAnimIn {\n  0% {\n    transform: translateZ(300px);\n    opacity: 0; }\n  100% {\n    transform: translateZ(0px);\n    opacity: 1; } }\n\n.dl-menuwrapper > .dl-submenu.dl-animate-in {\n  -webkit-animation: SubMenuAnimIn 0.4s ease;\n  -moz-animation: SubMenuAnimIn 0.4s ease;\n  animation: SubMenuAnimIn 0.4s ease; }\n\n@-webkit-keyframes SubMenuAnimIn {\n  0% {\n    -webkit-transform: translateZ(-300px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateZ(0px);\n    opacity: 1; } }\n\n@-moz-keyframes SubMenuAnimIn {\n  0% {\n    -moz-transform: translateZ(-300px);\n    opacity: 0; }\n  100% {\n    -moz-transform: translateZ(0px);\n    opacity: 1; } }\n\n@keyframes SubMenuAnimIn {\n  0% {\n    transform: translateZ(-300px);\n    opacity: 0; }\n  100% {\n    transform: translateZ(0px);\n    opacity: 1; } }\n\n.dl-menuwrapper > .dl-submenu.dl-animate-out {\n  -webkit-animation: SubMenuAnimOut 0.4s ease;\n  -moz-animation: SubMenuAnimOut 0.4s ease;\n  animation: SubMenuAnimOut 0.4s ease; }\n\n@-webkit-keyframes SubMenuAnimOut {\n  0% {\n    -webkit-transform: translateZ(0px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateZ(-300px);\n    opacity: 0; } }\n\n@-moz-keyframes SubMenuAnimOut {\n  0% {\n    -moz-transform: translateZ(0px);\n    opacity: 1; }\n  100% {\n    -moz-transform: translateZ(-300px);\n    opacity: 0; } }\n\n@keyframes SubMenuAnimOut {\n  0% {\n    transform: translateZ(0px);\n    opacity: 1; }\n  100% {\n    transform: translateZ(-300px);\n    opacity: 0; } }\n\n/* No Touch Fallback */\n.no-touch .dl-menuwrapper li a:hover {\n  background: rgba(255, 248, 213, 0.1); }\n\n/* No JS Fallback */\n.no-js .dl-trigger {\n  display: none; }\n\n.no-js .dl-menuwrapper {\n  position: initial; }\n  @media only screen and (min-width: 48em) {\n    .no-js .dl-menuwrapper {\n      position: absolute; } }\n\n.no-js .dl-menuwrapper .dl-menu {\n  position: relative;\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-transform: none;\n  -moz-transform: none;\n  transform: none; }\n\n.no-js .dl-menuwrapper li .dl-submenu {\n  display: block; }\n\n.no-js .dl-menuwrapper li.dl-back {\n  display: none; }\n\n.no-js .dl-menuwrapper li > a:not(:only-child) {\n  background: rgba(0, 0, 0, 0.1); }\n\n.no-js .dl-menuwrapper li > a:not(:only-child):after {\n  content: ''; }\n\n.no-js .dl-menu {\n  max-height: 100%; }\n\n.no-js .dl-menu li {\n  display: block; }\n\n.dl-menuwrapper button:hover,\n.dl-menuwrapper button.dl-active,\n.dl-menuwrapper ul {\n  background: #222222; }\n\n.dl-menu li {\n  display: none; }\n\n.dl-menuopen li {\n  display: block; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  background-color: #e8e8e8; }\n\n.entry,\n.hentry {\n  *zoom: 1; }\n  .entry:before, .entry:after,\n  .hentry:before,\n  .hentry:after {\n    display: table;\n    content: \"\";\n    line-height: 0; }\n  .entry:after,\n  .hentry:after {\n    clear: both; }\n  .entry h1, .entry h2, .entry h3, .entry h4, .entry h5, .entry h6, .entry p, .entry li,\n  .hentry h1,\n  .hentry h2,\n  .hentry h3,\n  .hentry h4,\n  .hentry h5,\n  .hentry h6,\n  .hentry p,\n  .hentry li {\n    word-wrap: break-word; }\n\n.entry-content {\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.625;\n  margin-bottom: 26px;\n  margin-bottom: 1.625rem; }\n  .entry-content p > a,\n  .entry-content li > a {\n    border-bottom: 1px dotted rgba(162, 162, 162, 0.8); }\n    .entry-content p > a:hover,\n    .entry-content li > a:hover {\n      border-bottom-style: solid; }\n\n.entry-header {\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n\n.header-title {\n  text-align: center;\n  margin: 30px 0 0; }\n  .header-title h1 {\n    margin: 10px 20px;\n    font-weight: 700;\n    font-size: 32px;\n    font-size: 2rem;\n    color: rgba(85, 85, 85, 0.8); }\n    @media only screen and (min-width: 48em) {\n      .header-title h1 {\n        font-size: 48px;\n        font-size: 3rem; } }\n    @media only screen and (min-width: 62.5em) {\n      .header-title h1 {\n        font-size: 60px;\n        font-size: 3.75rem; } }\n  .header-title h2 {\n    margin: 0;\n    font-size: 18px;\n    font-size: 1.125rem;\n    text-transform: uppercase;\n    color: rgba(136, 136, 136, 0.8); }\n    @media only screen and (min-width: 48em) {\n      .header-title h2 {\n        font-size: 24px;\n        font-size: 1.5rem; } }\n  .header-title p {\n    color: rgba(85, 85, 85, 0.8); }\n\n.feature .header-title {\n  position: absolute;\n  top: 0;\n  display: table;\n  margin-top: 0;\n  width: 100%;\n  height: 400px;\n  overflow: hidden; }\n  .feature .header-title .header-title-wrap {\n    display: table-cell;\n    vertical-align: middle;\n    margin: 0 auto;\n    text-align: center; }\n  .feature .header-title h1 {\n    margin: 10px;\n    font-weight: 700;\n    margin: 10px 60px;\n    color: #fff;\n    text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6); }\n    .feature .header-title h1 a {\n      color: #fff; }\n  .feature .header-title h2 {\n    margin: 0;\n    color: #fff;\n    text-transform: uppercase; }\n    @media only screen and (min-width: 48em) {\n      .feature .header-title h2 a {\n        color: #fff; } }\n  .feature .header-title p {\n    color: #fff; }\n\n.entry-image {\n  position: relative;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  min-height: 400px;\n  overflow: hidden; }\n  .entry-image:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(34, 34, 34, 0.3); }\n  .entry-image img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    min-width: 50%;\n    min-height: 400px; }\n\n#post-index.feature .header-title {\n  height: 400px; }\n\n#post-index .entry-image {\n  min-height: 400px; }\n  #post-index .entry-image img {\n    min-height: 400px; }\n\n.image-credit {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 0 auto;\n  max-width: 440px;\n  padding: 10px 15px;\n  background-color: rgba(34, 34, 34, 0.5);\n  color: #fff;\n  font-size: 12px;\n  font-size: 0.75rem;\n  text-align: right;\n  -webkit-border-top-right-radius: 3px;\n  -webkit-border-bottom-right-radius: 0;\n  -webkit-border-bottom-left-radius: 0;\n  -webkit-border-top-left-radius: 3px;\n  -moz-border-radius-topright: 3px;\n  -moz-border-radius-bottomright: 0;\n  -moz-border-radius-bottomleft: 0;\n  -moz-border-radius-topleft: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 3px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n  z-index: 10; }\n  @media only screen and (min-width: 48em) {\n    .image-credit {\n      max-width: 760px; } }\n  @media only screen and (min-width: 62.5em) {\n    .image-credit {\n      max-width: 960px; } }\n  .image-credit a {\n    color: #fff;\n    text-decoration: none; }\n\n.entry-meta {\n  font-size: 12px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: rgba(187, 187, 187, 0.8); }\n  .entry-meta a {\n    color: rgba(187, 187, 187, 0.8); }\n  .entry-meta .vcard:before {\n    content: \" by \"; }\n  .entry-meta .tag {\n    display: inline-block;\n    margin: 4px;\n    color: #fff;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    background-color: rgba(162, 162, 162, 0.8); }\n    .entry-meta .tag span {\n      float: left;\n      padding: 2px 6px; }\n    .entry-meta .tag .count {\n      background-color: rgba(136, 136, 136, 0.8);\n      -webkit-border-top-right-radius: 3px;\n      -webkit-border-bottom-right-radius: 3px;\n      -webkit-border-bottom-left-radius: 0;\n      -webkit-border-top-left-radius: 0;\n      -moz-border-radius-topright: 3px;\n      -moz-border-radius-bottomright: 3px;\n      -moz-border-radius-bottomleft: 0;\n      -moz-border-radius-topleft: 0;\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n      -webkit-background-clip: padding-box;\n      -moz-background-clip: padding;\n      background-clip: padding-box; }\n    .entry-meta .tag:hover {\n      background-color: rgba(136, 136, 136, 0.8); }\n  .entry-meta .entry-reading-time {\n    float: right; }\n\nheader .entry-meta {\n  display: none; }\n  @media only screen and (min-width: 48em) {\n    header .entry-meta {\n      display: block; } }\n\n#post .entry-content,\n#page .entry-content {\n  margin: 40px 2px 20px 2px;\n  padding: 10px 15px;\n  background-color: #fff;\n  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n  @media only screen and (min-width: 48em) {\n    #post .entry-content,\n    #page .entry-content {\n      margin-left: 10px;\n      margin-right: 10px;\n      padding: 20px 30px; } }\n  @media only screen and (min-width: 62.5em) {\n    #post .entry-content,\n    #page .entry-content {\n      max-width: 800px;\n      margin: 50px auto 30px auto;\n      padding: 50px 80px; }\n      #post .entry-content > p:first-child,\n      #page .entry-content > p:first-child {\n        font-size: 20px;\n        font-size: 1.25rem;\n        line-height: 1.3;\n        margin-bottom: 26px;\n        margin-bottom: 1.625rem; } }\n\n#post #disqus_thread,\n#page #disqus_thread {\n  margin: 40px 2px 20px 2px;\n  padding: 10px 15px;\n  background-color: #fff;\n  box-shadow: 0 0 0 1px rgba(187, 187, 187, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n  @media only screen and (min-width: 48em) {\n    #post #disqus_thread,\n    #page #disqus_thread {\n      margin-left: 10px;\n      margin-right: 10px;\n      padding: 20px 30px; } }\n  @media only screen and (min-width: 62.5em) {\n    #post #disqus_thread,\n    #page #disqus_thread {\n      max-width: 800px;\n      padding: 50px 80px;\n      margin: 0 auto 30px auto; } }\n\n#post .entry-meta,\n#page .entry-meta {\n  margin: 50px 30px 30px;\n  text-align: center; }\n\n.entry-tags {\n  display: block;\n  margin-bottom: 6px; }\n\n.tag-heading,\n.year-heading {\n  margin-top: 0; }\n\n.permalink {\n  margin-right: 7px; }\n\n.pagination {\n  margin: 20px 10px;\n  text-align: center; }\n  .pagination ul {\n    display: inline;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .pagination li {\n    padding-left: 4px;\n    padding-right: 4px; }\n  .pagination .current-page {\n    font-weight: 700; }\n\n.read-more {\n  position: relative;\n  margin: 40px 2px 20px 2px;\n  padding: 40px 15px 25px;\n  background-color: #fff;\n  box-shadow: 0 0 0 1px rgba(187, 187, 187, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  text-align: center;\n  *zoom: 1; }\n  @media only screen and (min-width: 48em) {\n    .read-more {\n      margin: 50px 10px 20px 10px;\n      padding: 50px 40px 25px; } }\n  @media only screen and (min-width: 62.5em) {\n    .read-more {\n      max-width: 800px;\n      padding: 50px 80px;\n      margin: 60px auto; } }\n  .read-more:before, .read-more:after {\n    display: table;\n    content: \"\";\n    line-height: 0; }\n  .read-more:after {\n    clear: both; }\n\n.read-more-header {\n  position: absolute;\n  top: -20px;\n  left: 0;\n  right: 0;\n  height: 35px; }\n\n.read-more-content {\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.625;\n  margin-bottom: 26px;\n  margin-bottom: 1.625rem; }\n  .read-more-content p > a,\n  .read-more-content li > a {\n    border-bottom: 1px dotted rgba(162, 162, 162, 0.8); }\n    .read-more-content p > a:hover,\n    .read-more-content li > a:hover {\n      border-bottom-style: solid; }\n  .read-more-content h3 {\n    margin: 0;\n    font-size: 28px;\n    font-size: 1.75rem; }\n    .read-more-content h3 a {\n      color: rgba(34, 34, 34, 0.8); }\n    @media only screen and (min-width: 48em) {\n      .read-more-content h3 {\n        font-size: 36px;\n        font-size: 2.25rem; } }\n\n.read-more-list {\n  border-top: solid 2px rgba(238, 238, 238, 0.8); }\n\n.list-item {\n  width: 100%;\n  text-align: left; }\n  .list-item h4 {\n    font-size: 18px;\n    font-size: 1.125rem;\n    margin-bottom: 0; }\n  .list-item span {\n    display: block;\n    font-size: 14px;\n    font-size: 0.875rem;\n    color: rgba(162, 162, 162, 0.8); }\n  @media only screen and (min-width: 48em) {\n    .list-item {\n      width: 49%;\n      float: left; }\n      .list-item:nth-child(2) {\n        text-align: right; } }\n\n#post-index #main {\n  margin: 40px 2px 20px 2px; }\n  @media only screen and (min-width: 48em) {\n    #post-index #main {\n      margin-left: 20px;\n      margin-right: 20px; } }\n  @media only screen and (min-width: 62.5em) {\n    #post-index #main {\n      max-width: 800px;\n      margin-top: 50px;\n      margin-left: auto;\n      margin-right: auto; } }\n\n#post-index article {\n  background-color: #fff;\n  box-shadow: 0 0 0 0, 0 6px 12px rgba(34, 34, 34, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  padding: 25px 15px; }\n  @media only screen and (min-width: 48em) {\n    #post-index article {\n      padding: 30px; } }\n  @media only screen and (min-width: 62.5em) {\n    #post-index article {\n      margin-bottom: 30px;\n      padding: 50px 80px; } }\n\n.entry-image-index {\n  margin-top: -25px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 10px; }\n  @media only screen and (min-width: 48em) {\n    .entry-image-index {\n      margin-top: -30px;\n      margin-left: -30px;\n      margin-right: -30px;\n      margin-bottom: 15px; } }\n  @media only screen and (min-width: 62.5em) {\n    .entry-image-index {\n      margin-top: -50px;\n      margin-left: -80px;\n      margin-right: -80px;\n      margin-bottom: 20px; } }\n  .entry-image-index img {\n    -webkit-border-top-right-radius: 3px;\n    -webkit-border-bottom-right-radius: 0;\n    -webkit-border-bottom-left-radius: 0;\n    -webkit-border-top-left-radius: 3px;\n    -moz-border-radius-topright: 3px;\n    -moz-border-radius-bottomright: 0;\n    -moz-border-radius-bottomleft: 0;\n    -moz-border-radius-topleft: 3px;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 3px;\n    -webkit-background-clip: padding-box;\n    -moz-background-clip: padding;\n    background-clip: padding-box; }\n\n.footer-wrapper {\n  *zoom: 1;\n  margin: 2em auto;\n  text-align: center;\n  color: rgba(85, 85, 85, 0.8); }\n  .footer-wrapper:before, .footer-wrapper:after {\n    display: table;\n    content: \"\";\n    line-height: 0; }\n  .footer-wrapper:after {\n    clear: both; }\n  .footer-wrapper a {\n    color: rgba(85, 85, 85, 0.8); }\n\n.socialcount {\n  font-size: 16px;\n  font-size: 1rem; }\n  .socialcount li {\n    padding-left: 10px;\n    padding-right: 10px; }\n  .socialcount p > a,\n  .socialcount li > a {\n    border-bottom-width: 0; }\n\n.upgrade {\n  padding: 10px;\n  text-align: center; }\n\n#goog-fixurl ul {\n  list-style: none;\n  margin-left: 0;\n  padding-left: 0; }\n  #goog-fixurl ul li {\n    list-style-type: none; }\n\n#goog-wm-qt {\n  width: auto;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  padding: 8px 20px;\n  display: inline-block;\n  font-size: 14px;\n  font-size: 0.875rem;\n  background-color: #fff;\n  color: rgba(34, 34, 34, 0.8);\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: #a2a2a2;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n\n@font-face {\n  font-family: 'Neuton';\n  src: url(" + __webpack_require__(129) + ");\n  src: url(" + __webpack_require__(130) + "?#iefix&v=4.5.0) format(\"embedded-opentype\"), url(" + __webpack_require__(131) + ") format(\"woff2\"), url(" + __webpack_require__(132) + ") format(\"woff\"), url(" + __webpack_require__(133) + ") format(\"truetype\"), url(" + __webpack_require__(134) + "#fontawesomeregular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\npre > code {\n  padding: 1em !important;\n  border-radius: 3px; }\n\n.entry-image {\n  min-height: 300px; }\n\n.feature .header-title {\n  height: 300px; }\n\n.header-title .header-title-wrap h1 {\n  letter-spacing: 0.1em;\n  font-family: \"Neuton\";\n  font-weight: 200;\n  font-size: 5.5em; }\n  @media screen and (max-width: 1560px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 5em; } }\n  @media screen and (max-width: 1400px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 4.5em; } }\n  @media screen and (max-width: 1220px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 4em; } }\n  @media screen and (max-width: 1000px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 3.5em; } }\n  @media screen and (max-width: 815px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 3em; } }\n  @media screen and (max-width: 700px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 2.5em; } }\n  @media screen and (max-width: 600px) {\n    .header-title .header-title-wrap h1 {\n      font-size: 2em; } }\n\n.header-title .header-title-wrap .entry-reading-time {\n  color: white; }\n\n.hentry .entry-meta .entry-reading-time {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n#post-index .backButton {\n  color: rgba(150, 150, 150, 0.8);\n  cursor: pointer; }\n  @media only screen and (min-width: 48em) {\n    #post-index .backButton {\n      margin: 50px 10px -30px 10px; } }\n  @media only screen and (min-width: 62.5em) {\n    #post-index .backButton {\n      max-width: 800px;\n      margin: 50px auto -30px auto; } }\n  #post-index .backButton a {\n    color: rgba(150, 150, 150, 0.8);\n    margin-left: 8px; }\n\n.dl-menuwrapper .dl-menu .dl-submenu a {\n  cursor: pointer; }\n\n.spinner {\n  width: 100%;\n  text-align: center;\n  display: inline;\n  top: 50%;\n  position: absolute; }\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: rgba(85, 85, 85, 0.8);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n/*\nMonokai style - ported by Luigi Maselli - http://grigio.org\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #272822;\n  color: #ddd; }\n\n.hljs-tag,\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-strong,\n.hljs-name {\n  color: #f92672; }\n\n.hljs-code {\n  color: #66d9ef; }\n\n.hljs-class .hljs-title {\n  color: white; }\n\n.hljs-attribute,\n.hljs-symbol,\n.hljs-regexp,\n.hljs-link {\n  color: #bf79db; }\n\n.hljs-string,\n.hljs-bullet,\n.hljs-subst,\n.hljs-title,\n.hljs-section,\n.hljs-emphasis,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #a6e22e; }\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e; }\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-doctag,\n.hljs-title,\n.hljs-section,\n.hljs-type,\n.hljs-selector-id {\n  font-weight: bold; }\n", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "db812d8a70a4e88e888744c1c9a27e89.woff2";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a35720c2fed2c7f043bc7e4ffb45e073.woff";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a3de2170e4e9df77161ea5d3f31b2668.ttf";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "65e8f7dd6a65aa5812afa9050bfc720e.svg";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "66ae14cd39e0d658f3776db5e4a8813d.eot";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "66ae14cd39e0d658f3776db5e4a8813d.eot";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f70b777a94da6d7c6ebdd1e5e786c1aa.woff2";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "436cebd162a0bc0635e5f16d24beaeac.woff";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d8d6017238715752f4396de482bcb6ae.ttf";

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "246781fcbe8e2ab4c750590366c7e88e.svg";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map