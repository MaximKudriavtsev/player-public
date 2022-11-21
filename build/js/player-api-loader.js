/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/device-detection/src/CSS_PREFIXES.ts":
/*!*******************************************************!*\
  !*** ./packages/device-detection/src/CSS_PREFIXES.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS_PREFIXES": function() { return /* binding */ CSS_PREFIXES; }
/* harmony export */ });
var CSS_PREFIXES = ['', '-webkit-', '-ms-', '-moz-', '-o-'];

/***/ }),

/***/ "./packages/device-detection/src/getUserAgent/index.ts":
/*!*************************************************************!*\
  !*** ./packages/device-detection/src/getUserAgent/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgent": function() { return /* binding */ getUserAgent; }
/* harmony export */ });
function getUserAgent(win) {
  if (win === void 0) {
    win = window;
  }

  try {
    var navigator = win.navigator || {};
    return navigator.userAgent || '';
  } catch (e) {
    return '';
  }
}

/***/ }),

/***/ "./packages/device-detection/src/internetExplorerVersion/getInternetExplorerVersion.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/device-detection/src/internetExplorerVersion/getInternetExplorerVersion.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInternetExplorerVersion": function() { return /* binding */ getInternetExplorerVersion; }
/* harmony export */ });
var detectie = __webpack_require__(/*! detectie */ "./node_modules/detectie/detectie.js");

var getInternetExplorerVersion = function getInternetExplorerVersion(win) {
  if (win === void 0) {
    win = window;
  }

  var detectedInternetExplorerVersion = detectie(win);
  return typeof detectedInternetExplorerVersion === 'boolean' ? -1 : detectedInternetExplorerVersion;
};

/***/ }),

/***/ "./packages/device-detection/src/isAppleTouchDevice/getIsAppleTouchDevice.ts":
/*!***********************************************************************************!*\
  !*** ./packages/device-detection/src/isAppleTouchDevice/getIsAppleTouchDevice.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsAppleTouchDevice": function() { return /* binding */ getIsAppleTouchDevice; }
/* harmony export */ });
/* harmony import */ var _isTouchDevice_isTouchDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isTouchDevice/isTouchDevice */ "./packages/device-detection/src/isTouchDevice/isTouchDevice.ts");

/**
 * @see isAppleTouchDevice
 */

function getIsAppleTouchDevice(win) {
  if (win === void 0) {
    win = window;
  }

  return /Apple/.test(win.navigator.vendor) && (0,_isTouchDevice_isTouchDevice__WEBPACK_IMPORTED_MODULE_0__.isTouchDevice)(win);
}

/***/ }),

/***/ "./packages/device-detection/src/isEdge/getIsEdge.ts":
/*!***********************************************************!*\
  !*** ./packages/device-detection/src/isEdge/getIsEdge.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsEdge": function() { return /* binding */ getIsEdge; }
/* harmony export */ });
/* harmony import */ var _internetExplorerVersion_getInternetExplorerVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internetExplorerVersion/getInternetExplorerVersion */ "./packages/device-detection/src/internetExplorerVersion/getInternetExplorerVersion.ts");

var getIsEdge = function getIsEdge(win) {
  if (win === void 0) {
    win = window;
  }

  return (0,_internetExplorerVersion_getInternetExplorerVersion__WEBPACK_IMPORTED_MODULE_0__.getInternetExplorerVersion)(win) > 11;
};

/***/ }),

/***/ "./packages/device-detection/src/isIOS/getIsIOS.ts":
/*!*********************************************************!*\
  !*** ./packages/device-detection/src/isIOS/getIsIOS.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsIOS": function() { return /* binding */ getIsIOS; }
/* harmony export */ });
/* harmony import */ var _isUCBrowser_isUCBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isUCBrowser/isUCBrowser */ "./packages/device-detection/src/isUCBrowser/isUCBrowser.ts");

function getIsIOS(win) {
  if (win === void 0) {
    win = window;
  }

  var userAgent = win.navigator.userAgent.toLowerCase();
  return /ipad|iphone|ipod/.test(userAgent) && // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
  !win.MSStream && // tslint:disable-next-line:max-line-length
  // Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-G7102 Build/JLS36C) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.6.0.378 U3/0.8.0 Mobile Safari/533.1
  !(0,_isUCBrowser_isUCBrowser__WEBPACK_IMPORTED_MODULE_0__.isUCBrowser)(win);
}

/***/ }),

/***/ "./packages/device-detection/src/isMatchingMediaQuery/index.ts":
/*!*********************************************************************!*\
  !*** ./packages/device-detection/src/isMatchingMediaQuery/index.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMatchingMediaQuery": function() { return /* binding */ isMatchingMediaQuery; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _yandex_int_any_common_ts_Object_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/Object/isObject */ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js");


/**
 * Проверяет, соответствует ли браузерное окружение медиа-выражению
 */

function isMatchingMediaQuery(win, query) {
  if (!(0,_yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(win.matchMedia)) {
    return false;
  }

  var mediaQueryList = win.matchMedia(query);
  return (0,_yandex_int_any_common_ts_Object_isObject__WEBPACK_IMPORTED_MODULE_1__.isObject)(mediaQueryList) && Boolean(mediaQueryList.matches);
}

/***/ }),

/***/ "./packages/device-detection/src/isSafari/getIsSafari.ts":
/*!***************************************************************!*\
  !*** ./packages/device-detection/src/isSafari/getIsSafari.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsSafari": function() { return /* binding */ getIsSafari; }
/* harmony export */ });
/* harmony import */ var _getUserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getUserAgent */ "./packages/device-detection/src/getUserAgent/index.ts");
 // http://stackoverflow.com/questions/7944460/detect-safari-browser

var getIsSafari = function getIsSafari(win) {
  if (win === void 0) {
    win = window;
  }

  var userAgent = (0,_getUserAgent__WEBPACK_IMPORTED_MODULE_0__.getUserAgent)(win).toLowerCase(); // сразу проверяем Android

  if (userAgent.indexOf('android') > -1) {
    return false;
  }

  var keys = userAgent // удаляем скобки и все, что внутри них
  .replace(/\(.+?\)/gi, '') // разделяем на пары (например, AppleWebKit/605.1.15)
  .split(' ') // получаем все ключи из пар
  .map(function (pair) {
    return pair.trim().split('/')[0];
  }) // оставляем все ключи, кроме mobile, т.к. не разделяем браузер на десктопный и мобильный
  .filter(function (key) {
    return key && key !== 'mobile';
  });
  return keys.length === 4 && keys[0] === 'mozilla' && keys[1] === 'applewebkit' && keys[2] === 'version' && keys[3] === 'safari';
};

/***/ }),

/***/ "./packages/device-detection/src/isSafariBasedBrowser/getIsSafariBasedBrowser.ts":
/*!***************************************************************************************!*\
  !*** ./packages/device-detection/src/isSafariBasedBrowser/getIsSafariBasedBrowser.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsSafariBasedBrowser": function() { return /* binding */ getIsSafariBasedBrowser; }
/* harmony export */ });
/* harmony import */ var _isAppleTouchDevice_getIsAppleTouchDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isAppleTouchDevice/getIsAppleTouchDevice */ "./packages/device-detection/src/isAppleTouchDevice/getIsAppleTouchDevice.ts");
/* harmony import */ var _isIOS_getIsIOS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isIOS/getIsIOS */ "./packages/device-detection/src/isIOS/getIsIOS.ts");
/* harmony import */ var _isSafari_getIsSafari__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isSafari/getIsSafari */ "./packages/device-detection/src/isSafari/getIsSafari.ts");



/**
 * @see isSafariBasedBrowser
 */

function getIsSafariBasedBrowser(win) {
  if (win === void 0) {
    win = window;
  }

  return (0,_isSafari_getIsSafari__WEBPACK_IMPORTED_MODULE_2__.getIsSafari)(win) || (0,_isIOS_getIsIOS__WEBPACK_IMPORTED_MODULE_1__.getIsIOS)(win) || // Нужна отдельная проверка для Apple touch устройств,
  // поскольку iPad начиная с 13 версии не содержит признаков Safari или iOS в юзерагенте
  (0,_isAppleTouchDevice_getIsAppleTouchDevice__WEBPACK_IMPORTED_MODULE_0__.getIsAppleTouchDevice)(win);
}

/***/ }),

/***/ "./packages/device-detection/src/isSafariBasedBrowser/index.ts":
/*!*********************************************************************!*\
  !*** ./packages/device-detection/src/isSafariBasedBrowser/index.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSafariBasedBrowser": function() { return /* binding */ isSafariBasedBrowser; }
/* harmony export */ });
/* harmony import */ var _getIsSafariBasedBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIsSafariBasedBrowser */ "./packages/device-detection/src/isSafariBasedBrowser/getIsSafariBasedBrowser.ts");

/**
 * Код выполняется в браузере, основанном на Safari
 * Это может быть либо Safari Desktop, либо любой браузер на iOS
 */

var isSafariBasedBrowser = (0,_getIsSafariBasedBrowser__WEBPACK_IMPORTED_MODULE_0__.getIsSafariBasedBrowser)();

/***/ }),

/***/ "./packages/device-detection/src/isTouchDevice/hasDocumentTouch/index.ts":
/*!*******************************************************************************!*\
  !*** ./packages/device-detection/src/isTouchDevice/hasDocumentTouch/index.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasDocumentTouch": function() { return /* binding */ hasDocumentTouch; }
/* harmony export */ });
/**
 * Проверяем поддержку DocumentTouch (legacy API https://developer.mozilla.org/en-US/docs/Web/API/DocumentTouch)
 * @deprecated всегда возвращает false https://st.yandex-team.ru/ADSDK-990#5e888ac3a77dde10f3817344
 */
function hasDocumentTouch(win) {
  var _ref = win,
      DocumentTouch = _ref.DocumentTouch; // eslint-disable-next-line no-instanceof/no-instanceof

  return Boolean(DocumentTouch) && win.document instanceof DocumentTouch;
}

/***/ }),

/***/ "./packages/device-detection/src/isTouchDevice/hasTouchEvents/index.ts":
/*!*****************************************************************************!*\
  !*** ./packages/device-detection/src/isTouchDevice/hasTouchEvents/index.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasTouchEvents": function() { return /* binding */ hasTouchEvents; }
/* harmony export */ });
/**
 * Есть ли поддержка TouchEvents
 */
function hasTouchEvents(win) {
  // проверки на window.TouchEvent не достаточно - этот объект есть не только в touch-браузерах
  return 'ontouchstart' in win;
}

/***/ }),

/***/ "./packages/device-detection/src/isTouchDevice/hasTouchPoints/index.ts":
/*!*****************************************************************************!*\
  !*** ./packages/device-detection/src/isTouchDevice/hasTouchPoints/index.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasTouchPoints": function() { return /* binding */ hasTouchPoints; }
/* harmony export */ });
/* harmony import */ var _isEdge_getIsEdge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isEdge/getIsEdge */ "./packages/device-detection/src/isEdge/getIsEdge.ts");

/**
 * Есть ли поддержка PointerEvents
 */

function hasPointerEvents(win) {
  return Boolean(win.PointerEvent);
}
/**
 * Возвращает значение navigator.maxTouchPoints или 0
 */


function getMaxTouchPoints(win) {
  var navigator = win.navigator || {};
  var msMaxTouchPoints = navigator.msMaxTouchPoints,
      maxTouchPoints = navigator.maxTouchPoints;
  return msMaxTouchPoints || maxTouchPoints || 0;
}
/**
 * Проверяет поддержку PointerEvents и ненулевой maxTouchPoints
 */


function hasTouchPoints(win) {
  return hasPointerEvents(win) && getMaxTouchPoints(win) > 0 && // в edge есть баг, из-за которого эта проверка ошибается, см https://st.yandex-team.ru/PLAYERWEB-836
  !(0,_isEdge_getIsEdge__WEBPACK_IMPORTED_MODULE_0__.getIsEdge)(win);
}

/***/ }),

/***/ "./packages/device-detection/src/isTouchDevice/isMatchingAnyPointerCoarse/index.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/device-detection/src/isTouchDevice/isMatchingAnyPointerCoarse/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMatchingAnyPointerCoarse": function() { return /* binding */ isMatchingAnyPointerCoarse; }
/* harmony export */ });
/* harmony import */ var _CSS_PREFIXES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../CSS_PREFIXES */ "./packages/device-detection/src/CSS_PREFIXES.ts");
/* harmony import */ var _isMatchingMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isMatchingMediaQuery */ "./packages/device-detection/src/isMatchingMediaQuery/index.ts");


var ANY_POINTER_COARSE = _CSS_PREFIXES__WEBPACK_IMPORTED_MODULE_0__.CSS_PREFIXES.map(function (prefix) {
  return "(" + prefix + "any-pointer:coarse)";
}).join(',');
/**
 * Соответствует ли браузерное окружение медиа-выражению (any-pointer:coarse) - медиа-выражение
 * для девайсов с низкой точностью указателя
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer
 */

function isMatchingAnyPointerCoarse(win) {
  return (0,_isMatchingMediaQuery__WEBPACK_IMPORTED_MODULE_1__.isMatchingMediaQuery)(win, ANY_POINTER_COARSE);
}

/***/ }),

/***/ "./packages/device-detection/src/isTouchDevice/isMatchingTouchEnabled/index.ts":
/*!*************************************************************************************!*\
  !*** ./packages/device-detection/src/isTouchDevice/isMatchingTouchEnabled/index.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOUCH_ENABLED_QUERY": function() { return /* binding */ TOUCH_ENABLED_QUERY; },
/* harmony export */   "isMatchingTouchEnabled": function() { return /* binding */ isMatchingTouchEnabled; }
/* harmony export */ });
/* harmony import */ var _isMatchingMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isMatchingMediaQuery */ "./packages/device-detection/src/isMatchingMediaQuery/index.ts");
/* harmony import */ var _CSS_PREFIXES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CSS_PREFIXES */ "./packages/device-detection/src/CSS_PREFIXES.ts");


var TOUCH_ENABLED_QUERY = _CSS_PREFIXES__WEBPACK_IMPORTED_MODULE_1__.CSS_PREFIXES.map(function (prefix) {
  return "(" + prefix + "touch-enabled)";
}).join(',');
/**
 * Соответствует ли браузерное окружение медиа-выражению (touch-enabled) - legacy медиа-выражение для тачей
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-moz-touch-enabled
 */

function isMatchingTouchEnabled(win) {
  return (0,_isMatchingMediaQuery__WEBPACK_IMPORTED_MODULE_0__.isMatchingMediaQuery)(win, TOUCH_ENABLED_QUERY);
}

/***/ }),

/***/ "./packages/device-detection/src/isTouchDevice/isTouchDevice.ts":
/*!**********************************************************************!*\
  !*** ./packages/device-detection/src/isTouchDevice/isTouchDevice.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTouchDevice": function() { return /* binding */ isTouchDevice; }
/* harmony export */ });
/* harmony import */ var _hasDocumentTouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasDocumentTouch */ "./packages/device-detection/src/isTouchDevice/hasDocumentTouch/index.ts");
/* harmony import */ var _hasTouchEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasTouchEvents */ "./packages/device-detection/src/isTouchDevice/hasTouchEvents/index.ts");
/* harmony import */ var _hasTouchPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasTouchPoints */ "./packages/device-detection/src/isTouchDevice/hasTouchPoints/index.ts");
/* harmony import */ var _isMatchingAnyPointerCoarse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isMatchingAnyPointerCoarse */ "./packages/device-detection/src/isTouchDevice/isMatchingAnyPointerCoarse/index.ts");
/* harmony import */ var _isMatchingTouchEnabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isMatchingTouchEnabled */ "./packages/device-detection/src/isTouchDevice/isMatchingTouchEnabled/index.ts");





/**
 * Код детекта touch-девайсов
 *
 * @deprecated use getIsTouchScreenDevice
 */

function isTouchDevice(win) {
  if (win === void 0) {
    win = window;
  }

  return (0,_hasTouchPoints__WEBPACK_IMPORTED_MODULE_2__.hasTouchPoints)(win) || (0,_isMatchingAnyPointerCoarse__WEBPACK_IMPORTED_MODULE_3__.isMatchingAnyPointerCoarse)(win) || (0,_isMatchingTouchEnabled__WEBPACK_IMPORTED_MODULE_4__.isMatchingTouchEnabled)(win) || (0,_hasDocumentTouch__WEBPACK_IMPORTED_MODULE_0__.hasDocumentTouch)(win) || (0,_hasTouchEvents__WEBPACK_IMPORTED_MODULE_1__.hasTouchEvents)(win);
}

/***/ }),

/***/ "./packages/device-detection/src/isUCBrowser/isUCBrowser.ts":
/*!******************************************************************!*\
  !*** ./packages/device-detection/src/isUCBrowser/isUCBrowser.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUCBrowser": function() { return /* binding */ isUCBrowser; }
/* harmony export */ });
var isUCBrowser = function isUCBrowser(win) {
  if (win === void 0) {
    win = window;
  }

  return win.navigator.userAgent.indexOf('UCBrowser') > -1;
};

/***/ }),

/***/ "./packages/public-types/src/PlayerApiReadyState.ts":
/*!**********************************************************!*\
  !*** ./packages/public-types/src/PlayerApiReadyState.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerApiReadyState": function() { return /* binding */ PlayerApiReadyState; }
/* harmony export */ });
/**
 * Состояние готовности движка плеера.
 * Диаграмма возможных состояний:
 * init -> ready -> destroyed
 * init -> broken
 */
var PlayerApiReadyState;

(function (PlayerApiReadyState) {
  PlayerApiReadyState["init"] = "init";
  PlayerApiReadyState["ready"] = "ready";
  PlayerApiReadyState["broken"] = "broken";
  PlayerApiReadyState["destroyed"] = "destroyed";
})(PlayerApiReadyState || (PlayerApiReadyState = {}));

/***/ }),

/***/ "./packages/public-types/src/PlayingStateReason.ts":
/*!*********************************************************!*\
  !*** ./packages/public-types/src/PlayingStateReason.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayingStateReason": function() { return /* binding */ PlayingStateReason; }
/* harmony export */ });
/**
 * Причина текущего состояния воспроизведения.
 */
var PlayingStateReason;

(function (PlayingStateReason) {
  PlayingStateReason["Unknown"] = "Unknown";
  PlayingStateReason["ExternalApi"] = "ExternalApi";
  PlayingStateReason["VisiblePlayback"] = "VisiblePlayback";
  PlayingStateReason["RestoreAfterInsertInto"] = "RestoreAfterInsertInto";
  PlayingStateReason["WaitForSourceConfigUpdate"] = "WaitForSourceConfigUpdate";
  PlayingStateReason["CompletedRecoverSourceConfig"] = "CompletedRecoverSourceConfig";
})(PlayingStateReason || (PlayingStateReason = {}));

/***/ }),

/***/ "./packages/public-types/src/VideoPlayingState.ts":
/*!********************************************************!*\
  !*** ./packages/public-types/src/VideoPlayingState.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayingState": function() { return /* binding */ VideoPlayingState; }
/* harmony export */ });
var VideoPlayingState;

(function (VideoPlayingState) {
  VideoPlayingState["PLAY"] = "play";
  VideoPlayingState["PAUSE"] = "pause";
  VideoPlayingState["BUFFERING"] = "buffering";
  VideoPlayingState["END"] = "end";
})(VideoPlayingState || (VideoPlayingState = {}));

/***/ }),

/***/ "./src/ts/PlayerApiLoader/BUNDLE_VERSION.ts":
/*!**************************************************!*\
  !*** ./src/ts/PlayerApiLoader/BUNDLE_VERSION.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUNDLE_VERSION": function() { return /* binding */ BUNDLE_VERSION; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_VersionsConfig_getBundleVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/VersionsConfig/getBundleVersion */ "./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundleVersion/index.js");


/**
 * Версия бандла для эксперимента
 */
var BUNDLE_VERSION = (0,_yandex_int_any_common_ts_VersionsConfig_getBundleVersion__WEBPACK_IMPORTED_MODULE_0__.getBundleVersion)({"build":1,"code":[{"id":1,"percent":100}]}.code);

/***/ }),

/***/ "./src/ts/PlayerApiLoader/HARDCODED_PARAMS.ts":
/*!****************************************************!*\
  !*** ./src/ts/PlayerApiLoader/HARDCODED_PARAMS.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEBUG_LOG_CALLS_URL_PARAM_NAME": function() { return /* binding */ DEBUG_LOG_CALLS_URL_PARAM_NAME; },
/* harmony export */   "DEBUG_LOG_EVENTS_URL_PARAM_NAME": function() { return /* binding */ DEBUG_LOG_EVENTS_URL_PARAM_NAME; },
/* harmony export */   "DEBUG_LOG_INTERNALS_URL_PARAM_NAME": function() { return /* binding */ DEBUG_LOG_INTERNALS_URL_PARAM_NAME; },
/* harmony export */   "VERSION_URL_PARAM_NAME": function() { return /* binding */ VERSION_URL_PARAM_NAME; }
/* harmony export */ });
var prefix = 'playerapi';
var VERSION_URL_PARAM_NAME = prefix + "-version";
var DEBUG_LOG_CALLS_URL_PARAM_NAME = prefix + "-debug-logcalls";
var DEBUG_LOG_EVENTS_URL_PARAM_NAME = prefix + "-debug-logevents";
var DEBUG_LOG_INTERNALS_URL_PARAM_NAME = prefix + "-debug-loginternals";

/***/ }),

/***/ "./src/ts/PlayerApiLoader/createAdbMock.ts":
/*!*************************************************!*\
  !*** ./src/ts/PlayerApiLoader/createAdbMock.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdbMock": function() { return /* binding */ createAdbMock; }
/* harmony export */ });
var createAdbMock = function createAdbMock() {
  var win = window;
  var ya = win.ya || (win.ya = {});
  var videoAd = ya.videoAd || (ya.videoAd = {});

  videoAd.encodeUrl = videoAd.encodeUrl || function (s) {
    return s;
  };
};

/***/ }),

/***/ "./src/ts/PlayerApiLoader/createLazyPlayerApi/index.ts":
/*!*************************************************************!*\
  !*** ./src/ts/PlayerApiLoader/createLazyPlayerApi/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLazyPlayerApi": function() { return /* binding */ createLazyPlayerApi; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_array_separate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/array/separate */ "./node_modules/@yandex-int/any.common/ts/array/separate/index.js");
/* harmony import */ var _packages_public_types_src_VideoPlayingState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../packages/public-types/src/VideoPlayingState */ "./packages/public-types/src/VideoPlayingState.ts");
/* harmony import */ var _stream_player_js_src_typings_PlayingStateReason__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../stream-player-js/src/typings/PlayingStateReason */ "./stream-player-js/src/typings/PlayingStateReason.ts");
/* harmony import */ var _typings_v2_PlayerApiReadyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typings/v2/PlayerApiReadyState */ "./src/ts/typings/v2/PlayerApiReadyState.ts");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/noop */ "./src/ts/util/noop.ts");
/* harmony import */ var _util_v2_ASYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/v2/ASYNC_INSTANT_PLAYER_API_METHODS */ "./src/ts/util/v2/ASYNC_INSTANT_PLAYER_API_METHODS.ts");
/* harmony import */ var _util_v2_ASYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/v2/ASYNC_READY_PLAYER_API_METHODS */ "./src/ts/util/v2/ASYNC_READY_PLAYER_API_METHODS.ts");
/* harmony import */ var _util_v2_SYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/v2/SYNC_INSTANT_PLAYER_API_METHODS */ "./src/ts/util/v2/SYNC_INSTANT_PLAYER_API_METHODS.ts");
/* harmony import */ var _util_v2_SYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/v2/SYNC_READY_PLAYER_API_METHODS */ "./src/ts/util/v2/SYNC_READY_PLAYER_API_METHODS.ts");
/* harmony import */ var _emitError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../emitError */ "./src/ts/PlayerApiLoader/emitError.ts");
/* harmony import */ var _emitEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../emitEvent */ "./src/ts/PlayerApiLoader/emitEvent.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













/**
 * Методы PlayerApi, "активируемые" сразу по созданию инстанса плеера
 */
var INSTANT_PLAYER_API_METHODS = [].concat(_util_v2_SYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_7__.SYNC_INSTANT_PLAYER_API_METHODS, _util_v2_ASYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_5__.ASYNC_INSTANT_PLAYER_API_METHODS);
/**
 * Фабрика, возвращающая объект, использующийся как обертка над PlayerApi.
 * Используется для того, чтобы обеспечить возможность синхронного вызова методов PlayerApi до момента, когда
 * инстанса еще нет. При вызове любого метода PlayerApi, факт и аргументы вызова будут сохранены. Если вызов предполагает
 * возврат Promise, LazyPlayerApi вернет Promise, который зарезолвится / зареджектится после инициализации PlayerApi.
 * После инициализации инстанса PlayerApi и передачи его в экземпляр данного класса, LazyPlayerApi пробрасывает
 * все сохраненные вызовы методов PlayerApi, сохраняя порядок вызова.
 * Объект также позволяет задать источник событий (event source) для подписки/отписки на события с помощью методов
 * on, once, off. Если источник событий задан, то вызовы этих методов проксируются в него до тех пор, пока
 * не будет проинициализирован инстанс PlayerApi. Если не задан, то параметры вызовов сохраняются в очередь и
 * исполняются либо при инициализации источника событий, либо при инициализации инстанса PlayerApi.
 * После завершения инициализации инстанса PlayerApi, все вызовы будут непосредственно проксироваться в него.
 */

function createLazyPlayerApi(logCalls) {
  var readyInstance;
  var instance;
  var broken = false;
  var storedApiCalls = [];

  function call(apiCall) {
    if (logCalls) {
      // eslint-disable-next-line no-console
      console.log('[PLAYER] [CALL]', apiCall.name, apiCall.params);
    }

    if (readyInstance !== undefined) {
      return readyInstance[apiCall.name].apply(readyInstance, apiCall.params);
    }

    if (instance !== undefined && INSTANT_PLAYER_API_METHODS.indexOf(apiCall.name) > -1) {
      return instance[apiCall.name].apply(instance, apiCall.params);
    }

    if (!apiCall.async) {
      storedApiCalls.push(apiCall);
      return;
    }

    var asyncCall = _extends({}, apiCall, {
      resolve: _util_noop__WEBPACK_IMPORTED_MODULE_4__.noop,
      reject: _util_noop__WEBPACK_IMPORTED_MODULE_4__.noop
    });

    storedApiCalls.push(asyncCall);
    return new Promise(function (resolve, reject) {
      asyncCall.resolve = resolve;
      asyncCall.reject = reject;
    });
  }

  function performApiCallsQueue(apiCalls, apiInstance) {
    apiCalls.forEach(function (storedApiCall) {
      if (!storedApiCall.async) {
        apiInstance[storedApiCall.name].apply(apiInstance, storedApiCall.params);
        return;
      }

      apiInstance[storedApiCall.name].apply(apiInstance, storedApiCall.params).then(storedApiCall.resolve, storedApiCall.reject);
    });
    apiCalls.length = 0;
  }

  var lazyPlayerApi = {
    getReadyState: function getReadyState() {
      if (broken) {
        return _typings_v2_PlayerApiReadyState__WEBPACK_IMPORTED_MODULE_3__.PlayerApiReadyState.broken;
      }

      if (!readyInstance) {
        return _typings_v2_PlayerApiReadyState__WEBPACK_IMPORTED_MODULE_3__.PlayerApiReadyState.init;
      }

      return readyInstance.getReadyState();
    },
    getState: function getState() {
      if (!readyInstance) {
        return undefined;
      }

      return readyInstance.getState();
    },
    setReadyInstance: function setReadyInstance(inst) {
      readyInstance = inst;
      performApiCallsQueue(storedApiCalls, readyInstance);
    },
    handlePlayerDestroy: function handlePlayerDestroy() {
      readyInstance = undefined;
      instance = undefined;
    },
    setInstance: function setInstance(source) {
      instance = source;

      var _separate = (0,_yandex_int_any_common_ts_array_separate__WEBPACK_IMPORTED_MODULE_0__.separate)(storedApiCalls, function (_ref) {
        var name = _ref.name;
        return _util_v2_SYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_7__.SYNC_INSTANT_PLAYER_API_METHODS.indexOf(name) > -1;
      }),
          eventApiCalls = _separate[0],
          remainApiCalls = _separate[1];

      storedApiCalls = remainApiCalls;
      performApiCallsQueue(eventApiCalls, instance);
    },
    emitErrorOnStart: function emitErrorOnStart(error) {
      if (readyInstance) {
        throw new Error("Can't emit error on lazyApi after #setInstance()");
      }

      broken = true; // мутирует обработчики

      (0,_emitError__WEBPACK_IMPORTED_MODULE_9__.emitError)(storedApiCalls, error);
    },
    emitEventOnStart: function emitEventOnStart(eventName, eventData) {
      if (instance) {
        return;
      } // мутирует обработчики


      (0,_emitEvent__WEBPACK_IMPORTED_MODULE_10__.emitEvent)(storedApiCalls, eventName, eventData);
    }
  };
  Object.defineProperty(lazyPlayerApi, 'skin', {
    get: function get() {
      return readyInstance ? readyInstance.skin : undefined;
    }
  });
  _util_v2_SYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_8__.SYNC_READY_PLAYER_API_METHODS.forEach(function (method) {
    if (method === 'pause') {
      // если происходит вызов pause, нужно пробросить наружу событие о том,
      // что кто-то запросил изменение состояния воспроизведения
      lazyPlayerApi[method] = function (playingStateReason) {
        if (playingStateReason === void 0) {
          playingStateReason = _stream_player_js_src_typings_PlayingStateReason__WEBPACK_IMPORTED_MODULE_2__.PlayingStateReason.ExternalApi;
        }

        lazyPlayerApi.emitEventOnStart('RequestPlayingState', {
          playingState: _packages_public_types_src_VideoPlayingState__WEBPACK_IMPORTED_MODULE_1__.VideoPlayingState.PAUSE,
          playingStateReason: playingStateReason
        });
        return call({
          name: method,
          params: Array.prototype.slice.call(arguments),
          async: false
        });
      };
    } else {
      lazyPlayerApi[method] = function () {
        return call({
          name: method,
          params: Array.prototype.slice.call(arguments),
          async: false
        });
      };
    }
  });
  _util_v2_ASYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_6__.ASYNC_READY_PLAYER_API_METHODS.forEach(function (method) {
    if (method === 'play') {
      // если происходит вызов play, нужно пробросить наружу событие о том,
      // что кто-то запросил изменение состояния воспроизведения
      lazyPlayerApi[method] = function (playingStateReason) {
        if (playingStateReason === void 0) {
          playingStateReason = _stream_player_js_src_typings_PlayingStateReason__WEBPACK_IMPORTED_MODULE_2__.PlayingStateReason.ExternalApi;
        }

        lazyPlayerApi.emitEventOnStart('RequestPlayingState', {
          playingState: _packages_public_types_src_VideoPlayingState__WEBPACK_IMPORTED_MODULE_1__.VideoPlayingState.PLAY,
          playingStateReason: playingStateReason
        });
        return call({
          name: method,
          params: Array.prototype.slice.call(arguments),
          async: true
        });
      };
    } else {
      lazyPlayerApi[method] = function () {
        return call({
          name: method,
          params: Array.prototype.slice.call(arguments),
          async: true
        });
      };
    }
  });
  return lazyPlayerApi;
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/emitError.ts":
/*!*********************************************!*\
  !*** ./src/ts/PlayerApiLoader/emitError.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitError": function() { return /* binding */ emitError; }
/* harmony export */ });
/* harmony import */ var _emitEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitEvent */ "./src/ts/PlayerApiLoader/emitEvent.ts");

/**
 * Вызывает обработчики ошибок на lazyApi, если они есть, а lazyApi не получилось проинитить.
 * **Warn!** Мутирует обработчики.
 */

function emitError(storedApiCalls, error) {
  return (0,_emitEvent__WEBPACK_IMPORTED_MODULE_0__.emitEvent)(storedApiCalls, 'ErrorChange', {
    error: error
  });
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/emitEvent.ts":
/*!*********************************************!*\
  !*** ./src/ts/PlayerApiLoader/emitEvent.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitEvent": function() { return /* binding */ emitEvent; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _yandex_int_any_common_ts_Object_forOwn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/Object/forOwn */ "./node_modules/@yandex-int/any.common/ts/Object/forOwn/index.js");
/* harmony import */ var _yandex_int_any_common_ts_Object_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yandex-int/any.common/ts/Object/isObject */ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ "./src/ts/util/noop.ts");





function callHandlers(_ref, eventName, eventData, clear) {
  var params = _ref.params;

  if ((0,_yandex_int_any_common_ts_Object_isObject__WEBPACK_IMPORTED_MODULE_2__.isObject)(params[0])) {
    (0,_yandex_int_any_common_ts_Object_forOwn__WEBPACK_IMPORTED_MODULE_1__.forOwn)(params[0], function (handlers, localEventName) {
      if (localEventName !== eventName) {
        return;
      }

      if (Array.isArray(handlers)) {
        handlers.forEach(function (handler) {
          return handler(eventData);
        });
      } else {
        handlers(eventData);
      }
    });

    if (clear) {
      // Затираем хендлеры в объекте. Даже если подписка вызовется, список обработчиков будет пустым.
      params[0][eventName] = [];
    }
  } else if (params[0] === eventName && (0,_yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(params[1])) {
    params[1](eventData);

    if (clear) {
      // Затираем хендлер. Даже если подписка вызовется, обработчик будет noop.
      params[1] = _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop;
    }
  }
}
/**
 * Вызывает обработчики событий на lazyApi, если они есть, а lazyApi не получилось проинитить.
 * **Warn!** Мутирует обработчики.
 */


function emitEvent(storedApiCalls, eventName, eventData) {
  for (var i = 0; i < storedApiCalls.length; i++) {
    var storedApiCall = storedApiCalls[i];

    if (storedApiCall.name === 'on') {
      callHandlers(storedApiCall, eventName, eventData, false);
    } else if (storedApiCall.name === 'once') {
      callHandlers(storedApiCall, eventName, eventData, true);
    }
  }
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/getBundleUrl/index.ts":
/*!******************************************************!*\
  !*** ./src/ts/PlayerApiLoader/getBundleUrl/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBundleUrl": function() { return /* binding */ getBundleUrl; },
/* harmony export */   "getErrorScreenBundleUrl": function() { return /* binding */ getErrorScreenBundleUrl; }
/* harmony export */ });
/* harmony import */ var _const_PLAYER_API_BUNDLES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/PLAYER_API_BUNDLES */ "./src/ts/const/PLAYER_API_BUNDLES.ts");
/* harmony import */ var _util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/shouldLoadModern */ "./src/ts/util/shouldLoadModern/index.ts");
/* harmony import */ var _BUNDLE_VERSION__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BUNDLE_VERSION */ "./src/ts/PlayerApiLoader/BUNDLE_VERSION.ts");
/* harmony import */ var _getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getBundleUrlForVersion */ "./src/ts/PlayerApiLoader/getBundleUrlForVersion/index.ts");
/* harmony import */ var _getHardcodedVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getHardcodedVersion */ "./src/ts/PlayerApiLoader/getHardcodedVersion/index.ts");






function getBundleFileName(version, usePlayerApiMock) {
  if (usePlayerApiMock) {
    return _const_PLAYER_API_BUNDLES__WEBPACK_IMPORTED_MODULE_0__.PLAYER_API_BUNDLES.PLAYER_API_MOCK;
  }

  if (_util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_1__.isModernSyntaxSupported && (0,_util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_1__.determineModernBuildAvailability)(version || _BUNDLE_VERSION__WEBPACK_IMPORTED_MODULE_2__.BUNDLE_VERSION)) {
    return _const_PLAYER_API_BUNDLES__WEBPACK_IMPORTED_MODULE_0__.PLAYER_API_BUNDLES.PLAYER_API_MODERN;
  }

  return _const_PLAYER_API_BUNDLES__WEBPACK_IMPORTED_MODULE_0__.PLAYER_API_BUNDLES.PLAYER_API;
}

function getBundleUrl(_ref, win) {
  var version = _ref.version,
      useAbdBundle = _ref.useAbdBundle,
      usePlayerApiMock = _ref.usePlayerApiMock;
  var hardcodedVersion = (0,_getHardcodedVersion__WEBPACK_IMPORTED_MODULE_4__.getHardcodedVersion)(version, win);
  var bundleFilename = getBundleFileName(hardcodedVersion, usePlayerApiMock);

  if (hardcodedVersion) {
    return (0,_getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_3__.getBundleUrlForVersion)(bundleFilename, hardcodedVersion, Boolean(useAbdBundle));
  } else if (true) {
    return "" + "/build/js/" + bundleFilename;
  }

  return (0,_getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_3__.getBundleUrlForVersion)(bundleFilename, _BUNDLE_VERSION__WEBPACK_IMPORTED_MODULE_2__.BUNDLE_VERSION, Boolean(useAbdBundle));
}
function getErrorScreenBundleUrl(locale) {
  var bundleFilename = "error_screen_" + locale + (_util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_1__.isModernSyntaxSupported ? '.modern' : '') + ".js";

  if (true) {
    return "" + "/build/js/" + bundleFilename;
  }

  return (0,_getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_3__.getBundleUrlForVersion)(bundleFilename, parseInt("1.0-1".slice(4), 10), false);
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/getBundleUrlForVersion/index.ts":
/*!****************************************************************!*\
  !*** ./src/ts/PlayerApiLoader/getBundleUrlForVersion/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBundleUrlForVersion": function() { return /* binding */ getBundleUrlForVersion; }
/* harmony export */ });
/* harmony import */ var _const_DOMAIN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/DOMAIN */ "./src/ts/const/DOMAIN.ts");
/* harmony import */ var _getBundlesDirectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getBundlesDirectory */ "./src/ts/PlayerApiLoader/getBundlesDirectory/index.ts");


/**
 * Собирает URL до конкретного файла исходя из версии и состояния включенности ad-block.
 */

function getBundleUrlForVersion(bundleFilename, version, useAbdBundle) {
  var bundlesPath = (0,_getBundlesDirectory__WEBPACK_IMPORTED_MODULE_1__.getBundlesDirectory)("1.0-" + version, useAbdBundle);
  return "https://" + _const_DOMAIN__WEBPACK_IMPORTED_MODULE_0__.DOMAIN + bundlesPath + "js/" + bundleFilename;
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/getBundlesDirectory/index.ts":
/*!*************************************************************!*\
  !*** ./src/ts/PlayerApiLoader/getBundlesDirectory/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBundlesDirectory": function() { return /* binding */ getBundlesDirectory; }
/* harmony export */ });
/* harmony import */ var _const_BUNDLES_PATH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/BUNDLES_PATH */ "./src/ts/const/BUNDLES_PATH.ts");

/**
 * Собирает путь до директории с бандлами в зависимости от версии и состояния включенности ad-block.
 */

function getBundlesDirectory(version, useAbdBundle) {
  return "" + (useAbdBundle ? _const_BUNDLES_PATH__WEBPACK_IMPORTED_MODULE_0__.BUNDLES_PATH_ABD : _const_BUNDLES_PATH__WEBPACK_IMPORTED_MODULE_0__.BUNDLES_PATH) + encodeURIComponent(version) + "/";
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/getHardcodedVersion/index.ts":
/*!*************************************************************!*\
  !*** ./src/ts/PlayerApiLoader/getHardcodedVersion/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHardcodedVersion": function() { return /* binding */ getHardcodedVersion; }
/* harmony export */ });
/* harmony import */ var _util_getHardcodedParam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/getHardcodedParam */ "./src/ts/util/getHardcodedParam/index.ts");
/* harmony import */ var _util_validation_parseVersion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/validation/parseVersion */ "./src/ts/util/validation/parseVersion/index.ts");
/* harmony import */ var _HARDCODED_PARAMS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HARDCODED_PARAMS */ "./src/ts/PlayerApiLoader/HARDCODED_PARAMS.ts");



/**
 * Получает версию из параметра конфига или get-параметра в location
 */

function getHardcodedVersion(versionFromConfig, win) {
  if (win === void 0) {
    win = window;
  }

  return (0,_util_getHardcodedParam__WEBPACK_IMPORTED_MODULE_0__.getHardcodedParam)(_HARDCODED_PARAMS__WEBPACK_IMPORTED_MODULE_2__.VERSION_URL_PARAM_NAME, function (value) {
    return value && parseInt(value, 10);
  }, win) || (0,_util_validation_parseVersion__WEBPACK_IMPORTED_MODULE_1__.parseVersion)(versionFromConfig);
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/init.ts":
/*!****************************************!*\
  !*** ./src/ts/PlayerApiLoader/init.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT_ERROR_EVENT_NAME": function() { return /* binding */ INIT_ERROR_EVENT_NAME; },
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _packages_device_detection_src_getUserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../packages/device-detection/src/getUserAgent */ "./packages/device-detection/src/getUserAgent/index.ts");
/* harmony import */ var _yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/getWindowLocation */ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js");
/* harmony import */ var _yandex_int_any_common_ts_Object_tryStringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yandex-int/any.common/ts/Object/tryStringify */ "./node_modules/@yandex-int/any.common/ts/Object/tryStringify/index.js");
/* harmony import */ var _stream_player_js_src_constants_DEFAULT_FROM_VALUE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stream-player-js/src/constants/DEFAULT_FROM_VALUE */ "./stream-player-js/src/constants/DEFAULT_FROM_VALUE.ts");
/* harmony import */ var _const_SERVICE_NAME__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const/SERVICE_NAME */ "./src/ts/const/SERVICE_NAME.ts");
/* harmony import */ var _Stats_LOG_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Stats/LOG_URL */ "./src/ts/Stats/LOG_URL.ts");
/* harmony import */ var _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../typings/v2/ErrorCategory */ "./src/ts/typings/v2/ErrorCategory.ts");
/* harmony import */ var _util_addLoaderInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/addLoaderInfo */ "./src/ts/util/addLoaderInfo.ts");
/* harmony import */ var _util_v2_playerApiNamespace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/v2/playerApiNamespace */ "./src/ts/util/v2/playerApiNamespace.ts");
/* harmony import */ var _createAdbMock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createAdbMock */ "./src/ts/PlayerApiLoader/createAdbMock.ts");
/* harmony import */ var _createLazyPlayerApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createLazyPlayerApi */ "./src/ts/PlayerApiLoader/createLazyPlayerApi/index.ts");
/* harmony import */ var _loadBundle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loadBundle */ "./src/ts/PlayerApiLoader/loadBundle.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");












var INIT_ERROR_EVENT_NAME = 'LoaderInitError';

function logError(_ref) {
  var bundleUrl = _ref.bundleUrl,
      params = _ref.params;

  var _ref2 = params.source || {},
      _ref2$additionalParam = _ref2.additionalParams,
      additionalParams = _ref2$additionalParam === void 0 ? {} : _ref2$additionalParam;

  var from = additionalParams.from || _stream_player_js_src_constants_DEFAULT_FROM_VALUE__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_FROM_VALUE;

  try {
    var _tags;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', _Stats_LOG_URL__WEBPACK_IMPORTED_MODULE_5__.LOG_URL + "?StreamPlayer=" + "1.0-1" + "&event=" + INIT_ERROR_EVENT_NAME, true);
    xhr.send(JSON.stringify({
      service: _const_SERVICE_NAME__WEBPACK_IMPORTED_MODULE_4__.SERVICE_NAME,
      tags: (_tags = {}, _tags["event_" + INIT_ERROR_EVENT_NAME] = 1, _tags),
      data: {
        bundleUrl: bundleUrl,
        params: (0,_yandex_int_any_common_ts_Object_tryStringify__WEBPACK_IMPORTED_MODULE_2__.tryStringify)(params),
        category: _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_6__.ErrorCategory.NETWORK_PLAYER
      },
      labels: {
        version: "1.0-1",
        from: from
      },
      timestamp: Date.now(),
      eventType: 'fatal',
      eventName: INIT_ERROR_EVENT_NAME,
      location: (0,_yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_1__.getWindowLocation)(window),
      userAgent: (0,_packages_device_detection_src_getUserAgent__WEBPACK_IMPORTED_MODULE_0__.getUserAgent)()
    }));
  } catch (e) {//
  }
}

var init = function init(params) {
  (0,_util_addLoaderInfo__WEBPACK_IMPORTED_MODULE_7__.addLoaderInfo)(params); // delete version from params

  var _loadBundle = (0,_loadBundle__WEBPACK_IMPORTED_MODULE_11__.loadBundle)(params),
      promise = _loadBundle.promise,
      bundleUrl = _loadBundle.bundleUrl;

  var lazyPlayerApi = (0,_createLazyPlayerApi__WEBPACK_IMPORTED_MODULE_10__.createLazyPlayerApi)();

  if ( true && params.useAbdBundle) {
    (0,_createAdbMock__WEBPACK_IMPORTED_MODULE_9__.createAdbMock)();
  }

  promise["catch"](function (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    lazyPlayerApi.emitErrorOnStart(error);
    logError({
      bundleUrl: bundleUrl,
      params: params
    });
    return Promise.reject(error);
  }).then(function () {
    try {
      var playerApi = _util_v2_playerApiNamespace__WEBPACK_IMPORTED_MODULE_8__.playerApiNamespace.create(params);
      lazyPlayerApi.setReadyInstance(playerApi);
    } catch (error) {
      lazyPlayerApi.emitErrorOnStart(error);
    }
  });
  return lazyPlayerApi;
};

/***/ }),

/***/ "./src/ts/PlayerApiLoader/loadBundle.ts":
/*!**********************************************!*\
  !*** ./src/ts/PlayerApiLoader/loadBundle.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_cleanup": function() { return /* binding */ _cleanup; },
/* harmony export */   "loadBundle": function() { return /* binding */ loadBundle; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _yandex_int_any_common_ts_script_loadScriptLite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/script/loadScriptLite */ "./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/index.js");
/* harmony import */ var _util_v2_playerApiNamespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/v2/playerApiNamespace */ "./src/ts/util/v2/playerApiNamespace.ts");
/* harmony import */ var _getBundleUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBundleUrl */ "./src/ts/PlayerApiLoader/getBundleUrl/index.ts");
/* harmony import */ var _preloadScripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloadScripts */ "./src/ts/PlayerApiLoader/preloadScripts/index.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");





var loadBundlePromise;
/**
 * Загружает бандл по параметрам из location или по переданной версии
 */

function loadBundle(params) {
  if (false) {}

  try {
    var bundleUrl = (0,_getBundleUrl__WEBPACK_IMPORTED_MODULE_3__.getBundleUrl)(params, window);

    if (loadBundlePromise === undefined) {
      loadBundlePromise = (0,_yandex_int_any_common_ts_script_loadScriptLite__WEBPACK_IMPORTED_MODULE_1__.loadScriptLite)({
        src: bundleUrl,
        retries: 3,
        dropCacheOnRetry: true,
        onBeforeLoad: function onBeforeLoad(script) {
          script.crossOrigin = 'anonymous';
        },
        checkLoad: function checkLoad() {
          return (0,_yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_util_v2_playerApiNamespace__WEBPACK_IMPORTED_MODULE_2__.playerApiNamespace.create);
        }
      });
    }

    return {
      promise: loadBundlePromise,
      bundleUrl: bundleUrl
    };
  } catch (e) {
    return {
      promise: Promise.reject(e),
      bundleUrl: ''
    };
  }
}
/**
 * Удаляет ссылки на загруженный бандл
 */

function _cleanup() {
  delete _util_v2_playerApiNamespace__WEBPACK_IMPORTED_MODULE_2__.playerApiNamespace.create;
  loadBundlePromise = undefined;
}

/***/ }),

/***/ "./src/ts/PlayerApiLoader/preloadScripts/index.ts":
/*!********************************************************!*\
  !*** ./src/ts/PlayerApiLoader/preloadScripts/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloadScripts": function() { return /* binding */ preloadScripts; }
/* harmony export */ });
/* harmony import */ var _const_v2_BUNDLE_NAME__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/v2/BUNDLE_NAME */ "./src/ts/const/v2/BUNDLE_NAME.ts");
/* harmony import */ var _util_preloadViaLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/preloadViaLink */ "./src/ts/util/preloadViaLink/index.ts");
/* harmony import */ var _util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/shouldLoadModern */ "./src/ts/util/shouldLoadModern/index.ts");
/* harmony import */ var _BUNDLE_VERSION__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BUNDLE_VERSION */ "./src/ts/PlayerApiLoader/BUNDLE_VERSION.ts");
/* harmony import */ var _getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBundleUrlForVersion */ "./src/ts/PlayerApiLoader/getBundleUrlForVersion/index.ts");
/* harmony import */ var _getHardcodedVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../getHardcodedVersion */ "./src/ts/PlayerApiLoader/getHardcodedVersion/index.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");






function preloadScripts(params) {
  if (params === void 0) {
    params = {};
  }

  var parsedVersion = (0,_getHardcodedVersion__WEBPACK_IMPORTED_MODULE_5__.getHardcodedVersion)(params.version) || _BUNDLE_VERSION__WEBPACK_IMPORTED_MODULE_3__.BUNDLE_VERSION;
  var scripts = [(0,_getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_4__.getBundleUrlForVersion)(_util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_2__.isModernSyntaxSupported ? _const_v2_BUNDLE_NAME__WEBPACK_IMPORTED_MODULE_0__.BUNDLE_NAME.PLAYER_API_MODERN : _const_v2_BUNDLE_NAME__WEBPACK_IMPORTED_MODULE_0__.BUNDLE_NAME.PLAYER_API, parsedVersion, params.useAbdBundle || false), (0,_getBundleUrlForVersion__WEBPACK_IMPORTED_MODULE_4__.getBundleUrlForVersion)(_util_shouldLoadModern__WEBPACK_IMPORTED_MODULE_2__.isModernSyntaxSupported ? _const_v2_BUNDLE_NAME__WEBPACK_IMPORTED_MODULE_0__.BUNDLE_NAME.PLAYER_MODERN : _const_v2_BUNDLE_NAME__WEBPACK_IMPORTED_MODULE_0__.BUNDLE_NAME.PLAYER, parsedVersion, params.useAbdBundle || false)];
  return Promise.all(scripts.map(_util_preloadViaLink__WEBPACK_IMPORTED_MODULE_1__.preloadViaLink)).then(function () {
    return scripts;
  });
}

/***/ }),

/***/ "./src/ts/Stats/LOG_URL.ts":
/*!*********************************!*\
  !*** ./src/ts/Stats/LOG_URL.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOG_URL": function() { return /* binding */ LOG_URL; },
/* harmony export */   "getLogUrlWithPath": function() { return /* binding */ getLogUrlWithPath; }
/* harmony export */ });
var _require = __webpack_require__(/*! ../../../zendex.config */ "./zendex.config.js"),
    config = _require.config;

var DEV_LOG_URL = 'https://mocks.ims.in.yandex.net/post';
var PROD_LOG_URL = "https://" + config.gogolApi;
function getLogUrlWithPath(logPath) {
  if (logPath === void 0) {
    logPath = '/log';
  }

  return ( true ? DEV_LOG_URL : 0) + logPath;
}
/**
 * Ручка для отправки телеметрии
 */

var LOG_URL = getLogUrlWithPath();

/***/ }),

/***/ "./src/ts/const/BUNDLES_PATH.ts":
/*!**************************************!*\
  !*** ./src/ts/const/BUNDLES_PATH.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUNDLES_PATH": function() { return /* binding */ BUNDLES_PATH; },
/* harmony export */   "BUNDLES_PATH_ABD": function() { return /* binding */ BUNDLES_PATH_ABD; }
/* harmony export */ });
var BUNDLES_PATH = '/yandex-video-player-iframe-api-bundles/';
var BUNDLES_PATH_ABD = '/yandex-video-player-iframe-api-bundles-stable/';

/***/ }),

/***/ "./src/ts/const/DOMAIN.ts":
/*!********************************!*\
  !*** ./src/ts/const/DOMAIN.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMAIN": function() { return /* binding */ DOMAIN; }
/* harmony export */ });
/* harmony import */ var _zendex_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../zendex.config */ "./zendex.config.js");
/* harmony import */ var _zendex_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zendex_config__WEBPACK_IMPORTED_MODULE_0__);

var DOMAIN = _zendex_config__WEBPACK_IMPORTED_MODULE_0__.config.staticApi;

/***/ }),

/***/ "./src/ts/const/PLAYER_API_BUNDLES.ts":
/*!********************************************!*\
  !*** ./src/ts/const/PLAYER_API_BUNDLES.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLAYER_API_BUNDLES": function() { return /* binding */ PLAYER_API_BUNDLES; }
/* harmony export */ });
var PLAYER_API_BUNDLES;

(function (PLAYER_API_BUNDLES) {
  PLAYER_API_BUNDLES["PLAYER_API"] = "player-api.js";
  PLAYER_API_BUNDLES["PLAYER_API_MODERN"] = "player-api.modern.js";
  PLAYER_API_BUNDLES["PLAYER_API_MOCK"] = "player-api-mock.js";
})(PLAYER_API_BUNDLES || (PLAYER_API_BUNDLES = {}));

/***/ }),

/***/ "./src/ts/const/SERVICE_NAME.ts":
/*!**************************************!*\
  !*** ./src/ts/const/SERVICE_NAME.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVICE_NAME": function() { return /* binding */ SERVICE_NAME; }
/* harmony export */ });
var SERVICE_NAME = 'ZenStreamPlayer';

/***/ }),

/***/ "./src/ts/const/v2/BUNDLE_NAME.ts":
/*!****************************************!*\
  !*** ./src/ts/const/v2/BUNDLE_NAME.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUNDLE_NAME": function() { return /* binding */ BUNDLE_NAME; }
/* harmony export */ });
var BUNDLE_NAME;

(function (BUNDLE_NAME) {
  BUNDLE_NAME["PLAYER_API"] = "player-api.js";
  BUNDLE_NAME["PLAYER_API_MODERN"] = "player-api.modern.js";
  BUNDLE_NAME["PLAYER"] = "player.v2.js";
  BUNDLE_NAME["PLAYER_MODERN"] = "player.v2.modern.js";
})(BUNDLE_NAME || (BUNDLE_NAME = {}));

/***/ }),

/***/ "./src/ts/typings/v2/ErrorCategory.ts":
/*!********************************************!*\
  !*** ./src/ts/typings/v2/ErrorCategory.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCategory": function() { return /* binding */ ErrorCategory; }
/* harmony export */ });
/**
 * Категории ошибок
 * https://st.yandex-team.ru/PLAYERWEB-2091#5efa088333d457787638a10c
 */
var ErrorCategory;

(function (ErrorCategory) {
  ErrorCategory["DEFAULT"] = "DEFAULT";
  ErrorCategory["MEDIA"] = "MEDIA";
  ErrorCategory["NETWORK_MEDIA"] = "NETWORK_MEDIA";
  ErrorCategory["NETWORK_PLAYER"] = "NETWORK_PLAYER";
  ErrorCategory["NETWORK_TIMEOUT"] = "NETWORK_TIMEOUT";
  ErrorCategory["NO_CODECS"] = "NO_CODECS";
  ErrorCategory["CANNOT_PLAY"] = "CANNOT_PLAY";
  ErrorCategory["UNSUPPORTED_ENV"] = "UNSUPPORTED_ENV";
  ErrorCategory["EXCEPTION"] = "EXCEPTION";
  ErrorCategory["ADS"] = "ADS";
  ErrorCategory["CONFIG"] = "CONFIG";
  ErrorCategory["REGIONAL"] = "REGIONAL";
  ErrorCategory["DRM"] = "DRM";
  ErrorCategory["ACCESS"] = "ACCESS";
  ErrorCategory["INVALID_STREAM_URL"] = "INVALID_STREAM_URL";
})(ErrorCategory || (ErrorCategory = {}));

/***/ }),

/***/ "./src/ts/typings/v2/PlayerApiReadyState.ts":
/*!**************************************************!*\
  !*** ./src/ts/typings/v2/PlayerApiReadyState.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerApiReadyState": function() { return /* reexport safe */ _packages_public_types_src_PlayerApiReadyState__WEBPACK_IMPORTED_MODULE_0__.PlayerApiReadyState; }
/* harmony export */ });
/* harmony import */ var _packages_public_types_src_PlayerApiReadyState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../packages/public-types/src/PlayerApiReadyState */ "./packages/public-types/src/PlayerApiReadyState.ts");



/***/ }),

/***/ "./src/ts/util/addLoaderInfo.ts":
/*!**************************************!*\
  !*** ./src/ts/util/addLoaderInfo.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLoaderInfo": function() { return /* binding */ addLoaderInfo; }
/* harmony export */ });
/* harmony import */ var _isGreenVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isGreenVersion */ "./src/ts/util/isGreenVersion.ts");

/**
 * Добавляет в параметры признак адаптера и зеленой версии
 */

function addLoaderInfo(params) {
  params.green = _isGreenVersion__WEBPACK_IMPORTED_MODULE_0__.isGreenVersion;
}

/***/ }),

/***/ "./src/ts/util/getHardcodedParam/index.ts":
/*!************************************************!*\
  !*** ./src/ts/util/getHardcodedParam/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHardcodedParam": function() { return /* binding */ getHardcodedParam; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/getWindowLocation */ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js");
/* harmony import */ var _yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _yandex_int_any_common_ts_url_getQueryParameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yandex-int/any.common/ts/url/getQueryParameter */ "./node_modules/@yandex-int/any.common/ts/url/getQueryParameter/index.js");




function getParamFromLocalStorage(paramName) {
  try {
    var _value = localStorage.getItem(paramName);

    if (!_value) {
      return undefined;
    }

    return _value;
  } catch (_unused) {
    return undefined;
  }
}
/**
 * Получает значение параметра из localStorage или get-параметра в location
 */


function getHardcodedParam(paramName, parseParam, win) {
  if (win === void 0) {
    win = window;
  }

  var location = (0,_yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_0__.getWindowLocation)(win);
  var valueFromQuery = parseParam((0,_yandex_int_any_common_ts_url_getQueryParameter__WEBPACK_IMPORTED_MODULE_2__.getQueryParameter)(paramName, location));

  if (valueFromQuery) {
    // eslint-disable-next-line no-console
    if (console && (0,_yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(console.warn)) {
      // eslint-disable-next-line no-console
      console.warn("using " + paramName + "=" + valueFromQuery + " from query");
    }

    return valueFromQuery;
  }

  var valueFromLocalStorage = parseParam(getParamFromLocalStorage(paramName));

  if (valueFromLocalStorage) {
    // eslint-disable-next-line no-console
    if (console && (0,_yandex_int_any_common_ts_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(console.warn)) {
      // eslint-disable-next-line no-console
      console.warn("using " + paramName + "=" + valueFromLocalStorage + " from localStorage");
    }

    return valueFromLocalStorage;
  }

  return undefined;
}

/***/ }),

/***/ "./src/ts/util/isGreenVersion.ts":
/*!***************************************!*\
  !*** ./src/ts/util/isGreenVersion.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isGreenVersion": function() { return /* binding */ isGreenVersion; }
/* harmony export */ });
/* harmony import */ var _zendex_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../zendex.config */ "./zendex.config.js");
/* harmony import */ var _zendex_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zendex_config__WEBPACK_IMPORTED_MODULE_0__);

var GREEN_LOADER_PATH = "https://" + _zendex_config__WEBPACK_IMPORTED_MODULE_0__.config.staticApi + "/yandex-video-player-iframe-api/";
var src = document.currentScript ? document.currentScript.src : undefined;

function getStack() {
  // хак для ie11:
  // (new Error()).stack не содержит стектрейс
  // если использовать throw, стектрейс появляется
  try {
    throw new Error();
  } catch (e) {
    return e.stack;
  }
} // в браузерах, где нет поддержки document.currentScript используем фоллбек на поиск в текущем stacktrace


var srcOrStack = src || getStack() || undefined;
/**
 * Флаг того, загружена ли сейчас зеленая версия
 */

var isGreenVersion = srcOrStack === undefined ? undefined : srcOrStack.indexOf(GREEN_LOADER_PATH) !== -1;

/***/ }),

/***/ "./src/ts/util/noop.ts":
/*!*****************************!*\
  !*** ./src/ts/util/noop.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": function() { return /* binding */ noop; }
/* harmony export */ });
function noop() {//
}

/***/ }),

/***/ "./src/ts/util/preloadViaLink/index.ts":
/*!*********************************************!*\
  !*** ./src/ts/util/preloadViaLink/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloadViaLink": function() { return /* binding */ preloadViaLink; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_getHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/getHead */ "./node_modules/@yandex-int/any.common/ts/getHead/index.js");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");

var head = (0,_yandex_int_any_common_ts_getHead__WEBPACK_IMPORTED_MODULE_0__.getHead)(window);
var preloadedScripts = {};
function preloadViaLink(scriptSrc) {
  if (scriptSrc in preloadedScripts) {
    return preloadedScripts[scriptSrc];
  }

  var linkEl = document.createElement('link');
  linkEl.rel = 'preload';
  linkEl.as = 'script';
  preloadedScripts[scriptSrc] = new Promise(function (resolve, reject) {
    linkEl.onload = resolve;
    linkEl.onerror = reject;
    linkEl.href = scriptSrc;
    linkEl.crossOrigin = 'anonymous';
    head.appendChild(linkEl);
  }).then(function () {
    preloadedScripts[scriptSrc] = Promise.resolve();
  })["catch"](function () {
    delete preloadedScripts[scriptSrc];
    head.removeChild(linkEl);
  });
  return preloadedScripts[scriptSrc];
}

/***/ }),

/***/ "./src/ts/util/shouldLoadModern/index.ts":
/*!***********************************************!*\
  !*** ./src/ts/util/shouldLoadModern/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "determineModernBuildAvailability": function() { return /* binding */ determineModernBuildAvailability; },
/* harmony export */   "isModernSyntaxSupported": function() { return /* binding */ isModernSyntaxSupported; },
/* harmony export */   "shouldLoadModernFunction": function() { return /* binding */ shouldLoadModernFunction; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_string_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/string/isString */ "./node_modules/@yandex-int/any.common/ts/string/isString.js");
/* harmony import */ var _yandex_int_any_common_ts_supportsES2017_detectES2017Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/supportsES2017/detectES2017Support */ "./node_modules/@yandex-int/any.common/ts/supportsES2017/detectES2017Support.js");
/* harmony import */ var _validation_parseVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/parseVersion */ "./src/ts/util/validation/parseVersion/index.ts");



/** USE CONSTANT. EXPORTED FOR TESTS. @see {shouldLoadModern} */

var shouldLoadModernFunction = function shouldLoadModernFunction(win) {
  if (true) {
    var getHardcodedParam = (__webpack_require__(/*! @yandex-int/any.common/ts/VersionsConfig/getBundlesVersion */ "./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundlesVersion/index.js").getHardcodedParam);

    var MODERN_BUNDLE_FORCED_MODE = (__webpack_require__(/*! ../../../../stream-player-js/src/constants/HARDCODED_PARAMS */ "./stream-player-js/src/constants/HARDCODED_PARAMS.ts").MODERN_BUNDLE_FORCED_MODE);

    var hardcodedFlagValue = getHardcodedParam(win, MODERN_BUNDLE_FORCED_MODE);

    if (hardcodedFlagValue === 'true') {
      return true;
    } else if (hardcodedFlagValue === 'false') {
      return false;
    }
  }

  return (0,_yandex_int_any_common_ts_supportsES2017_detectES2017Support__WEBPACK_IMPORTED_MODULE_1__.detectES2017Support)(win);
};
/** build number, since which ES6 bundles are available to load */

var BUNDLE_BUILD_NUMBER_MODERN_AVAILABLE = 1410;
/** returns true if modern bundle is available on yastatic */

var determineModernBuildAvailability = function determineModernBuildAvailability(version) {
  if (true) {
    // in dev mode, they are always presented
    return true;
  }

  try {
    var codeVer = (0,_yandex_int_any_common_ts_string_isString__WEBPACK_IMPORTED_MODULE_0__.isString)(version) ? (0,_validation_parseVersion__WEBPACK_IMPORTED_MODULE_2__.parseVersion)(version) : version;
    return typeof codeVer === 'number' ? codeVer >= BUNDLE_BUILD_NUMBER_MODERN_AVAILABLE : false;
  } catch (_unused) {
    // safe fallback
    return false;
  }
};
/**
 * Equals `true` if current env is considered modern
 * Equals `false` otherwise
 */

var isModernSyntaxSupported = shouldLoadModernFunction(window);

/***/ }),

/***/ "./src/ts/util/v2/ASYNC_INSTANT_PLAYER_API_METHODS.ts":
/*!************************************************************!*\
  !*** ./src/ts/util/v2/ASYNC_INSTANT_PLAYER_API_METHODS.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASYNC_INSTANT_PLAYER_API_METHODS": function() { return /* binding */ ASYNC_INSTANT_PLAYER_API_METHODS; }
/* harmony export */ });
/**
 * Асинхронные методы PlayerApi, "активируемые" сразу по созданию инстанса плеера
 */
var ASYNC_INSTANT_PLAYER_API_METHODS = ['play'];

/***/ }),

/***/ "./src/ts/util/v2/ASYNC_READY_PLAYER_API_METHODS.ts":
/*!**********************************************************!*\
  !*** ./src/ts/util/v2/ASYNC_READY_PLAYER_API_METHODS.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASYNC_READY_PLAYER_API_METHODS": function() { return /* binding */ ASYNC_READY_PLAYER_API_METHODS; }
/* harmony export */ });
/* harmony import */ var _ASYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ASYNC_INSTANT_PLAYER_API_METHODS */ "./src/ts/util/v2/ASYNC_INSTANT_PLAYER_API_METHODS.ts");

/**
 * Асинхронные методы PlayerApi, "активируемые" по Ready
 */

var ASYNC_READY_PLAYER_API_METHODS = ['sendReportLog', 'setSource', 'preloadSource', 'requestVideoElementFullscreen', 'requestDebugInfo', 'destroy', 'requestExternalPlay', 'requestExternalPlayerList', 'insertInto'].concat(_ASYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__.ASYNC_INSTANT_PLAYER_API_METHODS);

/***/ }),

/***/ "./src/ts/util/v2/PLAYER_API_METHODS/index.ts":
/*!****************************************************!*\
  !*** ./src/ts/util/v2/PLAYER_API_METHODS/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLAYER_API_METHODS": function() { return /* binding */ PLAYER_API_METHODS; }
/* harmony export */ });
/* harmony import */ var _ASYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ASYNC_READY_PLAYER_API_METHODS */ "./src/ts/util/v2/ASYNC_READY_PLAYER_API_METHODS.ts");
/* harmony import */ var _SYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SYNC_READY_PLAYER_API_METHODS */ "./src/ts/util/v2/SYNC_READY_PLAYER_API_METHODS.ts");


/**
 * Статический список всех методов PlayerAPI
 */

var PLAYER_API_METHODS = [].concat(_ASYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__.ASYNC_READY_PLAYER_API_METHODS, _SYNC_READY_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_1__.SYNC_READY_PLAYER_API_METHODS, ['getState', 'getReadyState']);

/***/ }),

/***/ "./src/ts/util/v2/SYNC_INSTANT_PLAYER_API_METHODS.ts":
/*!***********************************************************!*\
  !*** ./src/ts/util/v2/SYNC_INSTANT_PLAYER_API_METHODS.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYNC_INSTANT_PLAYER_API_METHODS": function() { return /* binding */ SYNC_INSTANT_PLAYER_API_METHODS; }
/* harmony export */ });
/**
 * Синхронные методы PlayerApi, "активируемые" сразу по созданию инстанса плеера
 */
var SYNC_INSTANT_PLAYER_API_METHODS = ['pause', 'on', 'once', 'off', 'publicEmit'];

/***/ }),

/***/ "./src/ts/util/v2/SYNC_READY_PLAYER_API_METHODS.ts":
/*!*********************************************************!*\
  !*** ./src/ts/util/v2/SYNC_READY_PLAYER_API_METHODS.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYNC_READY_PLAYER_API_METHODS": function() { return /* binding */ SYNC_READY_PLAYER_API_METHODS; }
/* harmony export */ });
/* harmony import */ var _SYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SYNC_INSTANT_PLAYER_API_METHODS */ "./src/ts/util/v2/SYNC_INSTANT_PLAYER_API_METHODS.ts");

/**
 * Синхронные методы PlayerApi, "активируемые" по Ready.
 */

var SYNC_READY_PLAYER_API_METHODS = ['setVideoTrack', 'setAudioTrack', 'setTextTrack', 'changeAdditionalParams', 'exitVideoElementFullscreen', 'setPlaybackRate', 'setMuted', 'setVolume', 'setPictureInPictureAllowed', 'setVideoStyle', 'setNativeControlsVisibility', 'setNativeTextTrackVisibility', 'logEvent', 'logError', 'seek', 'openReportWindow', 'playInrollAd', 'skipAdPod', 'setNativeAdControlsVisibility', 'setFeed'].concat(_SYNC_INSTANT_PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__.SYNC_INSTANT_PLAYER_API_METHODS);

/***/ }),

/***/ "./src/ts/util/v2/addNamespace.ts":
/*!****************************************!*\
  !*** ./src/ts/util/v2/addNamespace.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PLAYER_API_METHODS */ "./src/ts/util/v2/PLAYER_API_METHODS/index.ts");

var win = window;

if (!win.Ya) {
  win.Ya = {};
}

if (!win.Ya.playerApi) {
  win.Ya.playerApi = {};
}

if (!win.Ya.playerApi.METHODS) {
  win.Ya.playerApi.METHODS = _PLAYER_API_METHODS__WEBPACK_IMPORTED_MODULE_0__.PLAYER_API_METHODS;
}



/***/ }),

/***/ "./src/ts/util/v2/playerApiLoaderDebugNamespace.ts":
/*!*********************************************************!*\
  !*** ./src/ts/util/v2/playerApiLoaderDebugNamespace.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerApiLoaderDebugNamespace": function() { return /* binding */ playerApiLoaderDebugNamespace; }
/* harmony export */ });
/* harmony import */ var _addNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNamespace */ "./src/ts/util/v2/addNamespace.ts");

var playerApiLoaderDebugNamespace = window.Ya.playerApi;

/***/ }),

/***/ "./src/ts/util/v2/playerApiLoaderNamespace.ts":
/*!****************************************************!*\
  !*** ./src/ts/util/v2/playerApiLoaderNamespace.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerApiLoaderNamespace": function() { return /* binding */ playerApiLoaderNamespace; }
/* harmony export */ });
/* harmony import */ var _addNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNamespace */ "./src/ts/util/v2/addNamespace.ts");

var playerApiLoaderNamespace = window.Ya.playerApi;

/***/ }),

/***/ "./src/ts/util/v2/playerApiNamespace.ts":
/*!**********************************************!*\
  !*** ./src/ts/util/v2/playerApiNamespace.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerApiNamespace": function() { return /* binding */ playerApiNamespace; }
/* harmony export */ });
/* harmony import */ var _addNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNamespace */ "./src/ts/util/v2/addNamespace.ts");

var playerApiNamespace = window.Ya.playerApi;

/***/ }),

/***/ "./src/ts/util/validation/parseVersion/index.ts":
/*!******************************************************!*\
  !*** ./src/ts/util/validation/parseVersion/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseVersion": function() { return /* binding */ parseVersion; }
/* harmony export */ });
var VERSION_REGEXP = /1\.0-(\d+)/;
/**
 * Проверяет, что строка с версией соответствует шаблону, либо кидает ошибку.
 */

function parseVersion(version) {
  if (version === undefined) {
    // версия не передана
    return undefined;
  }

  var matches = version && version.match && version.match(VERSION_REGEXP);

  if (matches && matches[1]) {
    return parseInt(matches[1], 10);
  }

  throw new Error('paramsObject.version must be a string like [1.0-0] or undefined');
}

/***/ }),

/***/ "./stream-player-js/src/constants/DEFAULT_FROM_VALUE.ts":
/*!**************************************************************!*\
  !*** ./stream-player-js/src/constants/DEFAULT_FROM_VALUE.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_FROM_VALUE": function() { return /* binding */ DEFAULT_FROM_VALUE; }
/* harmony export */ });
var DEFAULT_FROM_VALUE = 'other';

/***/ }),

/***/ "./stream-player-js/src/constants/HARDCODED_PARAMS.ts":
/*!************************************************************!*\
  !*** ./stream-player-js/src/constants/HARDCODED_PARAMS.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODERN_BUNDLE_FORCED_MODE": function() { return /* binding */ MODERN_BUNDLE_FORCED_MODE; },
/* harmony export */   "NATIVE_UI_MODE": function() { return /* binding */ NATIVE_UI_MODE; }
/* harmony export */ });
/**
 * @file
 * Add to {@see HARDCODED_PARAMS_FROM_URL} as well
 */

/**
 * for getHardcodedParam()
 */
var prefix = 'videoplayer';
/** 'true' - force enable, 'false' - force disable */

var MODERN_BUNDLE_FORCED_MODE = prefix + "-modern-bundle-forced-mode";
var NATIVE_UI_MODE = prefix + "-native-ui-mode";

/***/ }),

/***/ "./stream-player-js/src/typings/PlayingStateReason.ts":
/*!************************************************************!*\
  !*** ./stream-player-js/src/typings/PlayingStateReason.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayingStateReason": function() { return /* reexport safe */ _packages_public_types_src_PlayingStateReason__WEBPACK_IMPORTED_MODULE_0__.PlayingStateReason; }
/* harmony export */ });
/* harmony import */ var _packages_public_types_src_PlayingStateReason__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../packages/public-types/src/PlayingStateReason */ "./packages/public-types/src/PlayingStateReason.ts");



/***/ }),

/***/ "./node_modules/@yandex-int/any.common/node_modules/setprototypeof/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/node_modules/setprototypeof/index.js ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = Object.setPrototypeOf || ({
  __proto__: []
} instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf(obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

function mixinProperties(obj, proto) {
  for (var prop in proto) {
    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = proto[prop];
    }
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Error/CustomError.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Error/CustomError.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomError": function() { return /* binding */ CustomError; }
/* harmony export */ });
/* harmony import */ var _array_getFirstDefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/getFirstDefined */ "./node_modules/@yandex-int/any.common/ts/array/getFirstDefined/index.js");
/* harmony import */ var _jsonStringifyCircular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsonStringifyCircular */ "./node_modules/@yandex-int/any.common/ts/jsonStringifyCircular/index.js");
/* harmony import */ var _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DEFAULT_ERROR */ "./node_modules/@yandex-int/any.common/ts/Error/DEFAULT_ERROR.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "./node_modules/@yandex-int/any.common/node_modules/setprototypeof/index.js");

function buildStack(errorObject) {
  var url = errorObject.url,
      line = errorObject.line,
      col = errorObject.col,
      fileName = errorObject.fileName,
      columnNumber = errorObject.columnNumber,
      lineNumber = errorObject.lineNumber; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Mozilla

  return (url || fileName || '?') + ":" + (line || lineNumber || '?') + ":" + (col || columnNumber || '?');
}

var CustomError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(CustomError, _Error);

  function CustomError(errorObjectOrMessage, overridableFields) {
    var _this;

    if (overridableFields === void 0) {
      overridableFields = {};
    }

    // несмотря на строгую декларацию, CustomError должен уметь обрабатывать любые типы данных, в том числе строки
    var errorObject = typeof errorObjectOrMessage === 'object' ? errorObjectOrMessage : {
      message: String(errorObjectOrMessage || _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.message)
    };
    _this = _Error.call(this) || this; // tslint:disable-next-line:max-line-length
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    setPrototypeOf(_assertThisInitialized(_this), CustomError.prototype);
    _this.message = overridableFields.message || errorObject.message || _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.message;
    _this.code = overridableFields.code || errorObject.code || errorObject.id || _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.code;
    _this.isFatal = Boolean((0,_array_getFirstDefined__WEBPACK_IMPORTED_MODULE_0__.getFirstDefined)([overridableFields.isFatal, errorObject.isFatal, _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.isFatal]));
    _this.details = overridableFields.details || errorObject.details || _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.details;
    var tempStack = overridableFields.stack || errorObject.stack || buildStack(errorObject);
    var stack = tempStack === _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.stack ? _this.stack : tempStack;

    if (stack && stack !== _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.stack) {
      // перезаписываем stack, если он содержит полезные данные, а не '?:?:?'
      _this.stack = stack;
    } else if (!_this.stack) {
      // если стек пуст, генерируем стектрейс или пишем дефолтный
      try {
        // хак для ie11:
        // (new Error()).stack не содержит стектрейс
        // если использовать throw, стектрейс появляется
        throw new Error(_this.message);
      } catch (e) {
        _this.stack = stack = e.stack || _DEFAULT_ERROR__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ERROR.stack;
      }
    } // В некоторых браузерах цепочка прототипов для Error не работает, поэтому toString и toJSON оставляю свойствами
    // экземпляра. Так работает везде.


    _this.toString = function () {
      return (0,_jsonStringifyCircular__WEBPACK_IMPORTED_MODULE_1__.jsonStringifyCircular)(_this.toJSON());
    };

    _this.toJSON = function () {
      return {
        message: _this.message,
        code: _this.code,
        isFatal: _this.isFatal,
        details: _this.details,
        // do not use .stack in .toString() method, because EDGE uses .toString() method in .stack getter
        stack: stack
      };
    };

    return _this;
  }

  return CustomError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Error/DEFAULT_ERROR.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Error/DEFAULT_ERROR.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ERROR": function() { return /* binding */ DEFAULT_ERROR; }
/* harmony export */ });
var DEFAULT_ERROR = {
  message: 'DEFAULT_ERROR_MESSAGE',
  code: 0,
  details: '',
  stack: '?:?:?',
  isFatal: true
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Error/rethrowError/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Error/rethrowError/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rethrowError": function() { return /* binding */ rethrowError; }
/* harmony export */ });
/**
 * Метод организует всплытие ошибки до глобального скоупа без прерывания текущего коллстека
 */
function rethrowError(error) {
  // В dev-режиме просто логируем ошибку в консоль (чтобы не ломать тесты и не сыпать лишние логи)
  if (true) {
    // tslint:disable-next-line:no-console
    if (console.error) {
      // tslint:disable-next-line:no-console
      console.error(error);
    }
  } else {}
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/FeatureDetection/ancestorOrigins/getIsAncestorOriginsSupported.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/FeatureDetection/ancestorOrigins/getIsAncestorOriginsSupported.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsAncestorOriginsSupported": function() { return /* binding */ getIsAncestorOriginsSupported; }
/* harmony export */ });
function getIsAncestorOriginsSupported() {
  return Boolean(window.location.ancestorOrigins);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/FeatureDetection/ancestorOrigins/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/FeatureDetection/ancestorOrigins/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAncestorOriginsSupported": function() { return /* binding */ isAncestorOriginsSupported; }
/* harmony export */ });
/* harmony import */ var _getIsAncestorOriginsSupported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIsAncestorOriginsSupported */ "./node_modules/@yandex-int/any.common/ts/FeatureDetection/ancestorOrigins/getIsAncestorOriginsSupported.js");

var isAncestorOriginsSupported = (0,_getIsAncestorOriginsSupported__WEBPACK_IMPORTED_MODULE_0__.getIsAncestorOriginsSupported)();

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Math/random/IS_BROKEN_MATH_RANDOM.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Math/random/IS_BROKEN_MATH_RANDOM.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_BROKEN_MATH_RANDOM": function() { return /* binding */ IS_BROKEN_MATH_RANDOM; }
/* harmony export */ });
/* harmony import */ var _NativeMethods_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../NativeMethods/checkNativeCode */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js");

var IS_BROKEN_MATH_RANDOM = !(0,_NativeMethods_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__.checkNativeCode)(Math.random) || Math.random() === Math.random();

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Math/random/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Math/random/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "random": function() { return /* binding */ random; }
/* harmony export */ });
/* harmony import */ var _IS_BROKEN_MATH_RANDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IS_BROKEN_MATH_RANDOM */ "./node_modules/@yandex-int/any.common/ts/Math/random/IS_BROKEN_MATH_RANDOM.js");
/* harmony import */ var _pseudoRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pseudoRandom */ "./node_modules/@yandex-int/any.common/ts/Math/random/pseudoRandom.js");



function _native() {
  return Math.random();
}
/**
 * uBlock переопределяет Math.random, чтобы он всегда возвращал true
 *
 * Этот метод "полифиллит" Math.random, если он сломан
 */


var random = _IS_BROKEN_MATH_RANDOM__WEBPACK_IMPORTED_MODULE_0__.IS_BROKEN_MATH_RANDOM ? _pseudoRandom__WEBPACK_IMPORTED_MODULE_1__.pseudoRandom : _native;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Math/random/pseudoRandom.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Math/random/pseudoRandom.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pseudoRandom": function() { return /* binding */ pseudoRandom; }
/* harmony export */ });
/* harmony import */ var _performance_performanceNow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../performance/performanceNow */ "./node_modules/@yandex-int/any.common/ts/performance/performanceNow/index.js");
// https://en.wikipedia.org/wiki/Lehmer_random_number_generator#Parameters_in_common_use

var MODULUS = 2147483647;
var MULTIPLIER = 16807; // в качестве seed используем псевдорандомное значение (текущее время * performance.now())
// испольщование только Date.now или только performance.now дает плохое распределение случаных числел

var seed = Date.now() * (0,_performance_performanceNow__WEBPACK_IMPORTED_MODULE_0__.performanceNow)() % MODULUS;

function next() {
  seed = seed * MULTIPLIER % MODULUS;
  return seed;
}

var DENOMINATOR = MODULUS - 1;
/**
 * Случайное число в диапазоне [0, 1)
 *
 * Используется оптимизированная версия генератора псевдослучайных чисел Парка-Миллера
 * http://www.firstpr.com.au/dsp/rand31/
 */

function pseudoRandom() {
  return (next() - 1) / DENOMINATOR;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNativeCode": function() { return /* binding */ checkNativeCode; }
/* harmony export */ });
function checkNativeCode(fn) {
  if (!fn || !fn.toString) {
    return false;
  }

  var fnCode = fn.toString();
  return /\[native code\]/.test(fnCode) || /\/\* source code not available \*\//.test(fnCode);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/NativeMethods/getNativeJSON/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/NativeMethods/getNativeJSON/index.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNativeJSON": function() { return /* binding */ checkNativeJSON; },
/* harmony export */   "extractJSONFromIframe": function() { return /* binding */ extractJSONFromIframe; },
/* harmony export */   "getNativeJSON": function() { return /* binding */ getNativeJSON; }
/* harmony export */ });
/* harmony import */ var _iframe_createHiddenFriendlyIFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../iframe/createHiddenFriendlyIFrame */ "./node_modules/@yandex-int/any.common/ts/iframe/createHiddenFriendlyIFrame.js");
/* harmony import */ var _iframe_removeIframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../iframe/removeIframe */ "./node_modules/@yandex-int/any.common/ts/iframe/removeIframe/index.js");
/* harmony import */ var _checkNativeCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkNativeCode */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js");



var nativeJSON;
var extractJSONFromIframe = function extractJSONFromIframe(parent) {
  if (parent === void 0) {
    parent = document.body;
  }

  var iframe = (0,_iframe_createHiddenFriendlyIFrame__WEBPACK_IMPORTED_MODULE_0__.createHiddenFriendlyIFrame)(parent);
  var iframeJSON = iframe.contentWindow.JSON;
  return {
    JSON: iframeJSON,
    clean: function clean() {
      return (0,_iframe_removeIframe__WEBPACK_IMPORTED_MODULE_1__.removeIframe)(iframe);
    }
  };
};
function getNativeJSON(win) {
  if (win === void 0) {
    win = window;
  }

  if (nativeJSON === undefined) {
    if (checkNativeJSON(win)) {
      nativeJSON = win.JSON;
    } else {
      nativeJSON = {
        stringify: executeNativeJSONMethod('stringify'),
        parse: executeNativeJSONMethod('parse')
      };
    }
  }

  return nativeJSON;
}

var executeNativeJSONMethod = function executeNativeJSONMethod(method) {
  return function (value) {
    var _extractJSONFromIfram = extractJSONFromIframe(),
        JSON = _extractJSONFromIfram.JSON,
        clean = _extractJSONFromIfram.clean;

    try {
      return JSON[method](value);
    } finally {
      clean();
    }
  };
};

function checkNativeJSON(win) {
  if (win === void 0) {
    win = window;
  }

  return win.JSON && (0,_checkNativeCode__WEBPACK_IMPORTED_MODULE_2__.checkNativeCode)(win.JSON.stringify) && (0,_checkNativeCode__WEBPACK_IMPORTED_MODULE_2__.checkNativeCode)(win.JSON.parse);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/NativeMethods/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/NativeMethods/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNativeMethod": function() { return /* binding */ getNativeMethod; }
/* harmony export */ });
/* harmony import */ var _checkNativeCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkNativeCode */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js");

function getNativeMethod(hostObject, methodName) {
  var method = hostObject[methodName];

  if (!(0,_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__.checkNativeCode)(method)) {
    var overridingMethod = method;

    try {
      delete hostObject[methodName];
      var nativeMethod = hostObject[methodName];

      if (typeof nativeMethod === 'function') {
        method = nativeMethod;
      }

      hostObject[methodName] = overridingMethod;
    } catch (e) {// it was native, and deleting failed
    }
  }

  return method;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/entriesToObject/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/entriesToObject/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entriesToObject": function() { return /* binding */ entriesToObject; }
/* harmony export */ });
function entriesToObject(entries) {
  var object = {};
  entries.forEach(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    object[key] = value;
  });
  return object;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/forOwn/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/forOwn/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forOwn": function() { return /* binding */ forOwn; }
/* harmony export */ });
/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hasOwnProperty */ "./node_modules/@yandex-int/any.common/ts/Object/hasOwnProperty/index.js");

function forOwn(obj, fn, scope) {
  for (var key in obj) {
    if ((0,_hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(obj, key)) {
      fn.call(scope, obj[key], key, obj);
    }
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/getObjectEntries/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/getObjectEntries/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getObjectEntries": function() { return /* binding */ getObjectEntries; }
/* harmony export */ });
/* harmony import */ var _getObjectKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getObjectKeys */ "./node_modules/@yandex-int/any.common/ts/Object/getObjectKeys/index.js");

function getObjectEntries(object) {
  if (typeof Object.entries === 'function') {
    return Object.entries(object);
  } else {
    return (0,_getObjectKeys__WEBPACK_IMPORTED_MODULE_0__.getObjectKeys)(object).map(function (key) {
      return [key, object[key]];
    });
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/getObjectKeys/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/getObjectKeys/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getObjectKeys": function() { return /* binding */ getObjectKeys; }
/* harmony export */ });
/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hasOwnProperty */ "./node_modules/@yandex-int/any.common/ts/Object/hasOwnProperty/index.js");

function getObjectKeys(object) {
  if (typeof Object.keys === 'function') {
    return Object.keys(object);
  } else {
    var keys = [];

    for (var key in object) {
      if ((0,_hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(object, key)) {
        keys.push(key);
      }
    }

    return keys;
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/hasOwnProperty/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/hasOwnProperty/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwnProperty": function() { return /* binding */ hasOwnProperty; }
/* harmony export */ });
/**
 * Проверяет, является ли свойство собственным свойством объекта.
 * При этом учитывается, что объект может быть:
 * - обычным (для которого a.hasOwnProperty ведет себя как ожидается, т.к. берется из прототипа)
 * - без прототипа (попытка вызвать hasOwnProperty выбросит исключение)
 * - с переопределенным hasOwnProperty (поведение не определено)
 */
function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": function() { return /* binding */ isObject; }
/* harmony export */ });
/**
 * Returns 'true' if {@param value} is {@type object}
 */
function isObject(value) {
  var type = typeof value;
  return Boolean(value) && (type === 'object' || type === 'function');
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/setAndGet/get.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/setAndGet/get.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; }
/* harmony export */ });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isObject */ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Аналог https://lodash.com/docs/4.17.4#get
 * Исключение: индекс в пути воспринимается как часть ключа.
 */

var get = function get(obj, path) {
  for (var _iterator = _createForOfIteratorHelperLoose(path.split('.')), _step; !(_step = _iterator()).done;) {
    var key = _step.value;

    if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj)) {
      obj = undefined;
      break;
    }

    obj = obj[key];
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Object/tryStringify/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Object/tryStringify/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryStringify": function() { return /* binding */ tryStringify; }
/* harmony export */ });
function tryStringify(obj) {
  var result;

  try {
    result = JSON.stringify(obj);
  } catch (e) {// not stringifiable
  }

  return result;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/COMMON_LOCAL_STATS_SERVICE_NAME.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/COMMON_LOCAL_STATS_SERVICE_NAME.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMON_LOCAL_STATS_SERVICE_NAME": function() { return /* binding */ COMMON_LOCAL_STATS_SERVICE_NAME; }
/* harmony export */ });
var COMMON_LOCAL_STATS_SERVICE_NAME = 'CommonPcode';

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/DEFAULT_SID_LENGTH.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/DEFAULT_SID_LENGTH.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_SID_LENGTH": function() { return /* binding */ DEFAULT_SID_LENGTH; }
/* harmony export */ });
var DEFAULT_SID_LENGTH = 64;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/PCODE_LOGS_URL.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/PCODE_LOGS_URL.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PCODE_LOGS_URL": function() { return /* binding */ PCODE_LOGS_URL; },
/* harmony export */   "PCODE_LOGS_URL_ALIAS": function() { return /* binding */ PCODE_LOGS_URL_ALIAS; },
/* harmony export */   "STRM_LOGS_URL": function() { return /* binding */ STRM_LOGS_URL; }
/* harmony export */ });
var PCODE_LOGS_URL = 'https://an.yandex.ru/jstracer';
var PCODE_LOGS_URL_ALIAS = 'https://jstracer.yandex.ru/jstracer';
var STRM_LOGS_URL = 'https://strm.yandex.ru/log';

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/RECOVER_PARAMS.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/RECOVER_PARAMS.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECOVER_PARAMS": function() { return /* binding */ RECOVER_PARAMS; }
/* harmony export */ });
// хвостик (префикс и суффикс) для слова
var prefix = '_$';
var suffix = prefix.split('').reverse().join('');

var wrap = function wrap(word) {
  return prefix + "invalid_" + word + suffix;
};
/**
 * Если будут встречены невалидные значения у полей
 * они будут заменены на нижеследующие
 * Нужно для того, чтобы не терять данные при логировании
 */


var RECOVER_PARAMS = {
  sensorName: wrap('sensor_name'),
  labelKey: wrap('label_key'),
  labelValue: wrap('label_value')
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/STATS_GLOBAL_CALLBACK_PROPERTY_NAME.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/STATS_GLOBAL_CALLBACK_PROPERTY_NAME.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATS_GLOBAL_CALLBACK_PROPERTY_NAME": function() { return /* binding */ STATS_GLOBAL_CALLBACK_PROPERTY_NAME; }
/* harmony export */ });
var STATS_GLOBAL_CALLBACK_PROPERTY_NAME = 'YANDEX_STATS_GLOBAL_CALLBACK_PROPERTY_NAME';

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/StatsEventType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/StatsEventType.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsEventType": function() { return /* binding */ StatsEventType; }
/* harmony export */ });
var StatsEventType;

(function (StatsEventType) {
  StatsEventType["event"] = "event";
  StatsEventType["error"] = "error";
  StatsEventType["fatal"] = "fatal";
  StatsEventType["deprecated"] = "deprecated";
  StatsEventType["warning"] = "warning";
  StatsEventType["value"] = "value";
  StatsEventType["values"] = "values";
})(StatsEventType || (StatsEventType = {}));

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_TAGS_FOR_STATS_DEFAULT": function() { return /* binding */ CREATE_TAGS_FOR_STATS_DEFAULT; },
/* harmony export */   "SEPARATE_SIGN": function() { return /* binding */ SEPARATE_SIGN; },
/* harmony export */   "Stats": function() { return /* binding */ Stats; },
/* harmony export */   "stats": function() { return /* binding */ stats; }
/* harmony export */ });
/* harmony import */ var _adblock_videoEncode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adblock/videoEncode */ "./node_modules/@yandex-int/any.common/ts/adblock/videoEncode/index.js");
/* harmony import */ var _dom_DocumentVisibility_getDocumentVisibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/DocumentVisibility/getDocumentVisibility */ "./node_modules/@yandex-int/any.common/ts/dom/DocumentVisibility/getDocumentVisibility/index.js");
/* harmony import */ var _dom_hasTopDocumentFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/hasTopDocumentFocus */ "./node_modules/@yandex-int/any.common/ts/dom/hasTopDocumentFocus/index.js");
/* harmony import */ var _Error_CustomError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Error/CustomError */ "./node_modules/@yandex-int/any.common/ts/Error/CustomError.js");
/* harmony import */ var _Error_rethrowError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Error/rethrowError */ "./node_modules/@yandex-int/any.common/ts/Error/rethrowError/index.js");
/* harmony import */ var _getAncestorOrigins_ANCESTOR_ORIGINS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../getAncestorOrigins/ANCESTOR_ORIGINS */ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/ANCESTOR_ORIGINS.js");
/* harmony import */ var _getAncestorOrigins_TOP_ANCESTOR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getAncestorOrigins/TOP_ANCESTOR */ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/TOP_ANCESTOR.js");
/* harmony import */ var _getCurrentScript_CURRENT_SCRIPT_SRC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getCurrentScript/CURRENT_SCRIPT_SRC */ "./node_modules/@yandex-int/any.common/ts/getCurrentScript/CURRENT_SCRIPT_SRC.js");
/* harmony import */ var _getTopLocationData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getTopLocationData */ "./node_modules/@yandex-int/any.common/ts/getTopLocationData/index.js");
/* harmony import */ var _getWindowLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../getWindowLocation */ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js");
/* harmony import */ var _hexString_generateHexString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hexString/generateHexString */ "./node_modules/@yandex-int/any.common/ts/hexString/generateHexString/index.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _isInSecureIFrame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../isInSecureIFrame */ "./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/index.js");
/* harmony import */ var _jsonStringifyCircular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../jsonStringifyCircular */ "./node_modules/@yandex-int/any.common/ts/jsonStringifyCircular/index.js");
/* harmony import */ var _net_request__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../net/request */ "./node_modules/@yandex-int/any.common/ts/net/request/index.js");
/* harmony import */ var _Object_entriesToObject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Object/entriesToObject */ "./node_modules/@yandex-int/any.common/ts/Object/entriesToObject/index.js");
/* harmony import */ var _Object_forOwn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Object/forOwn */ "./node_modules/@yandex-int/any.common/ts/Object/forOwn/index.js");
/* harmony import */ var _Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Object/getObjectEntries */ "./node_modules/@yandex-int/any.common/ts/Object/getObjectEntries/index.js");
/* harmony import */ var _Object_isObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Object/isObject */ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js");
/* harmony import */ var _portion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../portion */ "./node_modules/@yandex-int/any.common/ts/portion/index.js");
/* harmony import */ var _portion_RANDOM__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../portion/RANDOM */ "./node_modules/@yandex-int/any.common/ts/portion/RANDOM.js");
/* harmony import */ var _sendBeacon_sendBeaconShim__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../sendBeacon/sendBeaconShim */ "./node_modules/@yandex-int/any.common/ts/sendBeacon/sendBeaconShim/index.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../url */ "./node_modules/@yandex-int/any.common/ts/url/index.js");
/* harmony import */ var _COMMON_LOCAL_STATS_SERVICE_NAME__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./COMMON_LOCAL_STATS_SERVICE_NAME */ "./node_modules/@yandex-int/any.common/ts/Stats/COMMON_LOCAL_STATS_SERVICE_NAME.js");
/* harmony import */ var _DEFAULT_SID_LENGTH__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DEFAULT_SID_LENGTH */ "./node_modules/@yandex-int/any.common/ts/Stats/DEFAULT_SID_LENGTH.js");
/* harmony import */ var _PCODE_LOGS_URL__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./PCODE_LOGS_URL */ "./node_modules/@yandex-int/any.common/ts/Stats/PCODE_LOGS_URL.js");
/* harmony import */ var _RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./RECOVER_PARAMS */ "./node_modules/@yandex-int/any.common/ts/Stats/RECOVER_PARAMS.js");
/* harmony import */ var _StatsEventType__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StatsEventType */ "./node_modules/@yandex-int/any.common/ts/Stats/StatsEventType.js");
/* harmony import */ var _statsGlobalCallbacks__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./statsGlobalCallbacks */ "./node_modules/@yandex-int/any.common/ts/Stats/statsGlobalCallbacks.js");
var _excluded = ["onLogError"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






























var SEPARATE_SIGN = '_';
var CREATE_TAGS_FOR_STATS_DEFAULT = function CREATE_TAGS_FOR_STATS_DEFAULT(_ref) {
  var _extends2;

  var eventType = _ref.eventType,
      eventName = _ref.eventName,
      value = _ref.value,
      values = _ref.values;
  // TODO: make and use mapObjectKeys function
  var valuesObject = {};
  (0,_Object_forOwn__WEBPACK_IMPORTED_MODULE_16__.forOwn)(values, function (customValue, customValueName) {
    valuesObject["" + eventType + SEPARATE_SIGN + eventName + SEPARATE_SIGN + customValueName] = customValue;
  });
  return _extends((_extends2 = {}, _extends2["" + eventType + SEPARATE_SIGN + eventName] = value, _extends2), valuesObject);
};

var getErrorEventType = function getErrorEventType(err) {
  return err.isFatal ? _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.fatal : _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.error;
};
/**
 * Ограничение по имени лейбла
 */


var LABEL_KEY_REGEX = /^\w(\-|_|:|\s|\.|\w){1,20}$/;
/**
 * Ограничения по значению лейбла
 */

var LABEL_VALUE_REGEX = /^\w(\-|_|:|\s|\.|\w){0,70}$/;
/**
 * Ограничения по имени сенсора
 */

var SENSOR_NAME_REGEX = /^\w(\-|_|:|\s|\.|\w){1,70}$/;
var Stats = /*#__PURE__*/function () {
  function Stats(params) {
    var _this = this;

    this.rootFields = {};
    this.labels = {};

    this.event = function (_ref2) {
      var name = _ref2.name,
          data = _ref2.data,
          labels = _ref2.labels,
          probability = _ref2.probability,
          extraRootFields = _ref2.extraRootFields;

      _this.push({
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.event,
        eventName: name,
        data: data,
        additionalStatsLabels: labels,
        probability: probability,
        extraRootFields: extraRootFields
      });
    };

    this.error = function (_ref3) {
      var error = _ref3.error,
          labels = _ref3.labels,
          probability = _ref3.probability,
          extraRootFields = _ref3.extraRootFields;
      // На случай, если сюда прилетит не CustomError (если ошибка в коде не обработана),
      // делаем дополнительную обертку перед отправкой
      var customError = new _Error_CustomError__WEBPACK_IMPORTED_MODULE_3__.CustomError(error);

      _this.push({
        eventName: String(customError.code),
        eventType: getErrorEventType(customError),
        data: customError,
        additionalStatsLabels: labels,
        probability: probability,
        extraRootFields: extraRootFields
      });
    };

    this.value = function (_ref4) {
      var name = _ref4.name,
          value = _ref4.value,
          data = _ref4.data,
          labels = _ref4.labels,
          probability = _ref4.probability,
          extraRootFields = _ref4.extraRootFields;

      _this.push({
        eventName: name,
        value: value,
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.value,
        data: data,
        additionalStatsLabels: labels,
        probability: probability,
        extraRootFields: extraRootFields
      });
    };

    this.values = function (_ref5) {
      var name = _ref5.name,
          values = _ref5.values,
          data = _ref5.data,
          labels = _ref5.labels,
          probability = _ref5.probability,
          extraRootFields = _ref5.extraRootFields;

      _this.push({
        eventName: name,
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.values,
        data: data,
        additionalStatsLabels: labels,
        probability: probability,
        values: values,
        extraRootFields: extraRootFields
      });
    };

    this.warning = function (_ref6) {
      var name = _ref6.name,
          message = _ref6.message,
          probability = _ref6.probability,
          extraRootFields = _ref6.extraRootFields;

      // tslint:disable-next-line:no-console
      if ((0,_Object_isObject__WEBPACK_IMPORTED_MODULE_18__.isObject)(console) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_11__.isFunction)(console.warn)) {
        // tslint:disable-next-line:no-console
        console.warn(message);
      }

      _this.push({
        eventName: name,
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.warning,
        data: {
          message: message
        },
        probability: probability,
        extraRootFields: extraRootFields
      });
    };

    this.getParams = function () {
      var _this$params = _this.params,
          onLogError = _this$params.onLogError,
          params = _objectWithoutPropertiesLoose(_this$params, _excluded);

      return params;
    };

    this.setRootFields = function (rootFields) {
      (0,_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_17__.getObjectEntries)(rootFields).forEach(function (_ref7) {
        var fieldName = _ref7[0],
            data = _ref7[1];

        if (data === undefined) {
          delete _this.rootFields[fieldName];
        } else {
          _this.rootFields[fieldName] = data;
        }
      });
    };

    this.setLabels = function (labels) {
      (0,_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_17__.getObjectEntries)(labels).forEach(function (_ref8) {
        var labelName = _ref8[0],
            labelValue = _ref8[1];

        if (labelValue === undefined) {
          delete _this.labels[labelName];
        } else {
          _this.labels[labelName] = labelValue;
        }
      });
    };
    /** @deprecated use .event() */


    this.eventToStats = function (eventName, data, additionalStatsLabels, extraRootFields) {
      _this.push({
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.event,
        eventName: eventName,
        data: data,
        additionalStatsLabels: additionalStatsLabels,
        extraRootFields: extraRootFields
      });
    };
    /**
     * Логирование ошибок без типизации, подходит для прямого проброса ошибок в статистику
     * Логирует 100% ошибок
     **/


    this.errorToStats = function (error, additionalStatsLabels, extraRootFields) {
      var customError = new _Error_CustomError__WEBPACK_IMPORTED_MODULE_3__.CustomError(error);

      _this.push({
        eventName: String(customError.code),
        eventType: getErrorEventType(customError),
        data: customError,
        additionalStatsLabels: additionalStatsLabels,
        extraRootFields: extraRootFields
      });
    };

    this.deprecated = function (description, message) {
      // tslint:disable-next-line:no-console
      if ((0,_Object_isObject__WEBPACK_IMPORTED_MODULE_18__.isObject)(console) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_11__.isFunction)(console.warn)) {
        // tslint:disable-next-line:no-console
        console.warn(message);
      }

      _this.push({
        eventName: description,
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.deprecated,
        data: {
          message: message
        }
      });
    };
    /** @deprecated use .value() */


    this.valueToStats = function (valueName, value, data, additionalStatsLabels) {
      _this.push({
        eventName: valueName,
        value: value,
        eventType: _StatsEventType__WEBPACK_IMPORTED_MODULE_27__.StatsEventType.value,
        data: data,
        additionalStatsLabels: additionalStatsLabels
      });
    };

    var onLogError = params.onLogError;
    this.params = _extends({}, params, {
      sid: params.sid || (0,_hexString_generateHexString__WEBPACK_IMPORTED_MODULE_10__.generateHexString)(_DEFAULT_SID_LENGTH__WEBPACK_IMPORTED_MODULE_24__.DEFAULT_SID_LENGTH),
      onLogError: onLogError ? function (error) {
        try {
          onLogError(error);
        } catch (error) {
          (0,_Error_rethrowError__WEBPACK_IMPORTED_MODULE_4__.rethrowError)(error);
        }
      } : _Error_rethrowError__WEBPACK_IMPORTED_MODULE_4__.rethrowError
    });
    this.logUrl = Stats.getLogUrl(params);
    this.isStrmLogUrl = this.logUrl === _PCODE_LOGS_URL__WEBPACK_IMPORTED_MODULE_25__.STRM_LOGS_URL;
  }

  Stats.getLogUrl = function getLogUrl(params) {
    if (params.logUrl) {
      return params.logUrl;
    } else if (params.useAlias === true) {
      return _PCODE_LOGS_URL__WEBPACK_IMPORTED_MODULE_25__.PCODE_LOGS_URL_ALIAS;
    } else {
      return _PCODE_LOGS_URL__WEBPACK_IMPORTED_MODULE_25__.PCODE_LOGS_URL;
    }
  };

  var _proto = Stats.prototype;

  _proto.push = function push(_ref9) {
    var eventName = _ref9.eventName,
        eventType = _ref9.eventType,
        _ref9$data = _ref9.data,
        data = _ref9$data === void 0 ? {} : _ref9$data,
        additionalStatsLabels = _ref9.additionalStatsLabels,
        _ref9$value = _ref9.value,
        value = _ref9$value === void 0 ? 1 : _ref9$value,
        _ref9$probability = _ref9.probability,
        probability = _ref9$probability === void 0 ? 1 : _ref9$probability,
        _ref9$values = _ref9.values,
        values = _ref9$values === void 0 ? {} : _ref9$values,
        _ref9$extraRootFields = _ref9.extraRootFields,
        extraRootFields = _ref9$extraRootFields === void 0 ? {} : _ref9$extraRootFields;

    if (!(0,_portion__WEBPACK_IMPORTED_MODULE_19__.portion)(probability)) {
      return;
    }

    var _this$params2 = this.params,
        service = _this$params2.service,
        version = _this$params2.version;
    var statsConfig = {
      service: service,
      version: version,
      data: data,
      eventName: eventName,
      eventType: eventType,
      additionalStatsLabels: additionalStatsLabels,
      value: value,
      values: values
    };

    if (Stats.isSendingData) {
      throw new _Error_CustomError__WEBPACK_IMPORTED_MODULE_3__.CustomError({
        message: 'RecursiveStatsRequests',
        details: {
          service: service,
          version: version,
          eventType: eventType,
          eventName: eventName
        }
      });
    }

    Stats.isSendingData = true;

    try {
      var requestUrl = this.logUrl;

      if (!this.params.sendOnlyPrimaryParams) {
        var _extends3;

        requestUrl = (0,_url__WEBPACK_IMPORTED_MODULE_22__.addParamsToUrl)(this.logUrl, _extends((_extends3 = {}, _extends3[service] = version, _extends3[eventType] = eventName, _extends3), additionalStatsLabels));
      }

      var fullStatsObject = this.createFullStatsObject(statsConfig, extraRootFields); // PLAYERWEB-557: Перевести логирование с jstracer в единую ручку логов

      var _extraRootFields$rout = extraRootFields.routeToJSTracer,
          routeToJSTracer = _extraRootFields$rout === void 0 ? true : _extraRootFields$rout;

      if (this.isStrmLogUrl && routeToJSTracer) {
        fullStatsObject.routeToJSTracer = true;
      }

      this.sendData(requestUrl, (0,_jsonStringifyCircular__WEBPACK_IMPORTED_MODULE_13__.jsonStringifyCircular)(fullStatsObject));
    } catch (e) {
      Stats.isSendingData = false;
      this.params.onLogError(new _Error_CustomError__WEBPACK_IMPORTED_MODULE_3__.CustomError(e, {
        details: {
          service: service,
          version: version,
          eventType: eventType,
          eventName: eventName
        }
      }));
    }

    Stats.isSendingData = false;
  };

  _proto.sendData = function sendData(url, data) {
    if (true) {
      _statsGlobalCallbacks__WEBPACK_IMPORTED_MODULE_28__.statsGlobalCallbacks.call({
        callbackArguments: [{
          url: url,
          data: data
        }]
      });
    }

    if (this.params.useSendBeacon) {
      var sendBeaconSucceeded = (0,_sendBeacon_sendBeaconShim__WEBPACK_IMPORTED_MODULE_21__.sendBeaconShim)(url, data);

      if (sendBeaconSucceeded) {
        return;
      }
    }

    (0,_net_request__WEBPACK_IMPORTED_MODULE_14__.request)({
      url: url,
      data: data,
      method: 'POST',
      onBeforeSend: this.params.onBeforeSend
    });
  };

  _proto.createFullStatsObject = function createFullStatsObject(config, extraRootFields) {
    var service = config.service,
        version = config.version,
        eventName = config.eventName,
        eventType = config.eventType,
        data = config.data,
        additionalStatsLabels = config.additionalStatsLabels,
        value = config.value;
    var createTags = this.params.createTagsFunction || CREATE_TAGS_FOR_STATS_DEFAULT;
    var rawTags = createTags(config);

    var rawLabels = _extends({}, this.labels, additionalStatsLabels, {
      version: this.params.version
    });

    var tags = (0,_Object_entriesToObject__WEBPACK_IMPORTED_MODULE_15__.entriesToObject)((0,_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_17__.getObjectEntries)(rawTags).map(function (_ref10) {
      var sensorName = _ref10[0],
          sensorValue = _ref10[1];

      if (!SENSOR_NAME_REGEX.test(sensorName)) {
        if ( true && (0,_Object_isObject__WEBPACK_IMPORTED_MODULE_18__.isObject)(console) && // tslint:disable-next-line:no-console
        (0,_isFunction__WEBPACK_IMPORTED_MODULE_11__.isFunction)(console.warn)) {
          // tslint:disable-next-line:no-console
          console.warn("Stats data has invalid [SENSOR_NAME] in [" + JSON.stringify({
            sensorName: sensorName
          }) + "]. Recover it to be [" + _RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__.RECOVER_PARAMS.sensorName + "]");
        }

        return [_RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__.RECOVER_PARAMS.sensorName, sensorValue];
      }

      return [sensorName, sensorValue];
    }));
    var labels = (0,_Object_entriesToObject__WEBPACK_IMPORTED_MODULE_15__.entriesToObject)((0,_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_17__.getObjectEntries)(rawLabels).map(function (_ref11) {
      var rawLabelKey = _ref11[0],
          rawLabelValue = _ref11[1];
      var labelKey = rawLabelKey;
      var labelValue = rawLabelValue;

      if (!LABEL_KEY_REGEX.test(labelKey)) {
        if ( true && (0,_Object_isObject__WEBPACK_IMPORTED_MODULE_18__.isObject)(console) && // tslint:disable-next-line:no-console
        (0,_isFunction__WEBPACK_IMPORTED_MODULE_11__.isFunction)(console.warn)) {
          // tslint:disable-next-line:no-console
          console.warn("Stats data has invalid [LABEL_KEY] in [" + JSON.stringify({
            labelKey: labelKey
          }) + "]. Recover it to [" + _RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__.RECOVER_PARAMS.labelKey + "]");
        }

        labelKey = _RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__.RECOVER_PARAMS.labelKey;
      }

      if (!LABEL_VALUE_REGEX.test(labelValue)) {
        if ( true && (0,_Object_isObject__WEBPACK_IMPORTED_MODULE_18__.isObject)(console) && // tslint:disable-next-line:no-console
        (0,_isFunction__WEBPACK_IMPORTED_MODULE_11__.isFunction)(console.warn)) {
          // tslint:disable-next-line:no-console
          console.warn("Stats data has invalid [LABEL_VALUE] in [" + JSON.stringify({
            labelValue: labelValue
          }) + "]. Recover it to [" + _RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__.RECOVER_PARAMS.labelValue + "]");
        }

        labelValue = _RECOVER_PARAMS__WEBPACK_IMPORTED_MODULE_26__.RECOVER_PARAMS.labelValue;
      }

      return [labelKey, labelValue];
    }));
    var solomonFields = {
      service: service,
      tags: tags,
      labels: labels
    };

    var _getTopLocationData = (0,_getTopLocationData__WEBPACK_IMPORTED_MODULE_8__.getTopLocationData)(document),
        location = _getTopLocationData.location,
        referrer = _getTopLocationData.referrer;

    return _extends({}, extraRootFields, this.rootFields, solomonFields, {
      timestamp: Date.now(),
      eventType: eventType,
      eventName: eventName,
      data: data,
      sid: this.params.sid,
      version: version,
      location: (0,_getWindowLocation__WEBPACK_IMPORTED_MODULE_9__.getWindowLocation)(window),
      topLocation: location,
      topAncestor: _getAncestorOrigins_TOP_ANCESTOR__WEBPACK_IMPORTED_MODULE_6__.TOP_ANCESTOR,
      isTopAncestorUndetermined: _getAncestorOrigins_TOP_ANCESTOR__WEBPACK_IMPORTED_MODULE_6__.IS_TOP_ANCESTOR_TRUSTED ? undefined : true,
      ancestorOrigins: _getAncestorOrigins_ANCESTOR_ORIGINS__WEBPACK_IMPORTED_MODULE_5__.ANCESTOR_ORIGINS,
      documentIsVisible: (0,_dom_DocumentVisibility_getDocumentVisibility__WEBPACK_IMPORTED_MODULE_1__.getDocumentVisibility)(document),
      referrer: window.document.referrer,
      topReferrer: referrer,
      currentScriptSrc: _getCurrentScript_CURRENT_SCRIPT_SRC__WEBPACK_IMPORTED_MODULE_7__.CURRENT_SCRIPT_SRC,
      secureIFrame: _isInSecureIFrame__WEBPACK_IMPORTED_MODULE_12__.isInSecureIFrame,
      isVideoADB: (0,_isFunction__WEBPACK_IMPORTED_MODULE_11__.isFunction)(_adblock_videoEncode__WEBPACK_IMPORTED_MODULE_0__.videoEncode),
      value: value,
      rnd: _portion_RANDOM__WEBPACK_IMPORTED_MODULE_20__.RANDOM,
      topDocumentFocus: (0,_dom_hasTopDocumentFocus__WEBPACK_IMPORTED_MODULE_2__.getTopDocumentFocus)()
    });
  };

  return Stats;
}();
Stats.isSendingData = false;
var stats = new Stats({
  service: _COMMON_LOCAL_STATS_SERVICE_NAME__WEBPACK_IMPORTED_MODULE_23__.COMMON_LOCAL_STATS_SERVICE_NAME,
  version: '0',
  sid: (0,_hexString_generateHexString__WEBPACK_IMPORTED_MODULE_10__.generateHexString)(_DEFAULT_SID_LENGTH__WEBPACK_IMPORTED_MODULE_24__.DEFAULT_SID_LENGTH)
});

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/Stats/statsGlobalCallbacks.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Stats/statsGlobalCallbacks.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statsGlobalCallbacks": function() { return /* binding */ statsGlobalCallbacks; }
/* harmony export */ });
/* harmony import */ var _globalCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/index.js");
/* harmony import */ var _STATS_GLOBAL_CALLBACK_PROPERTY_NAME__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./STATS_GLOBAL_CALLBACK_PROPERTY_NAME */ "./node_modules/@yandex-int/any.common/ts/Stats/STATS_GLOBAL_CALLBACK_PROPERTY_NAME.js");


var statsGlobalCallbacks = (0,_globalCallback__WEBPACK_IMPORTED_MODULE_0__.globalCallbackFactory)({
  propertyName: _STATS_GLOBAL_CALLBACK_PROPERTY_NAME__WEBPACK_IMPORTED_MODULE_1__.STATS_GLOBAL_CALLBACK_PROPERTY_NAME,
  win: window
});

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundleVersion/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundleVersion/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBundleVersion": function() { return /* binding */ getBundleVersion; }
/* harmony export */ });
/* harmony import */ var _Math_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/random */ "./node_modules/@yandex-int/any.common/ts/Math/random/index.js");

function getBundleVersion(versions) {
  var randomValue = (0,_Math_random__WEBPACK_IMPORTED_MODULE_0__.random)() * 100;
  var sum = 0;

  for (var i = 0; i < versions.length; i++) {
    sum += versions[i].percent;

    if (randomValue < sum) {
      return versions[i].id;
    }
  } // should never been returned


  return versions[0].id;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundlesVersion/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundlesVersion/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBundlesVersion": function() { return /* binding */ getBundlesVersion; },
/* harmony export */   "getHardcodedParam": function() { return /* binding */ getHardcodedParam; }
/* harmony export */ });
/* harmony import */ var _dom_friendlyWindowsChain_getFriendlyWindowsChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/friendlyWindowsChain/getFriendlyWindowsChain */ "./node_modules/@yandex-int/any.common/ts/dom/friendlyWindowsChain/getFriendlyWindowsChain.js");
/* harmony import */ var _getTopLocationData_getParentLocationsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getTopLocationData/getParentLocationsData */ "./node_modules/@yandex-int/any.common/ts/getTopLocationData/getParentLocationsData.js");
/* harmony import */ var _Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object/getObjectEntries */ "./node_modules/@yandex-int/any.common/ts/Object/getObjectEntries/index.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Stats */ "./node_modules/@yandex-int/any.common/ts/Stats/index.js");
/* harmony import */ var _tryCatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tryCatch */ "./node_modules/@yandex-int/any.common/ts/tryCatch/index.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../url */ "./node_modules/@yandex-int/any.common/ts/url/index.js");
/* harmony import */ var _getBundleVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getBundleVersion */ "./node_modules/@yandex-int/any.common/ts/VersionsConfig/getBundleVersion/index.js");







/**
 * Ищет значение параметра `parameterName` в:
 * - get-параметрах url в цепочке фреймов
 * - localStorage
 * - в глобальной переменной `window.Ya.hardcodedParams` в цепочке фреймов
 *
 * @param window - Window, в котором будет осуществлен поиск параметр
 * @param parameterName - название параметра
 */

function getHardcodedParam(window, parameterName) {
  var ALL_VERSION_GETTERS = (0,_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_2__.getObjectEntries)({
    UrlParams: function UrlParams() {
      var parentLocations = (0,_getTopLocationData_getParentLocationsData__WEBPACK_IMPORTED_MODULE_1__.getParentLocationsData)(window.document);

      for (var key = 0; key < parentLocations.length; key++) {
        var location = parentLocations[key].location;
        var paramFromLocation = (0,_url__WEBPACK_IMPORTED_MODULE_5__.getParamsFromUrl)(location)[parameterName];

        if (paramFromLocation) {
          return paramFromLocation;
        }
      }

      return undefined;
    },
    LocalStorage: function LocalStorage() {
      return window.localStorage.getItem(parameterName);
    },
    globalVariable: function globalVariable() {
      var contexts = (0,_dom_friendlyWindowsChain_getFriendlyWindowsChain__WEBPACK_IMPORTED_MODULE_0__.getFriendlyWindowsChain)(window);

      for (var i = 0; i < contexts.length; i++) {
        var win = contexts[i];
        var value = win && win.Ya && win.Ya.hardcodedParams && win.Ya.hardcodedParams[parameterName];

        if (value) {
          return String(value);
        }
      }

      return undefined;
    }
  });

  for (var key = 0; key < ALL_VERSION_GETTERS.length; key++) {
    var _ALL_VERSION_GETTERS$ = ALL_VERSION_GETTERS[key],
        name = _ALL_VERSION_GETTERS$[0],
        getVersion = _ALL_VERSION_GETTERS$[1];
    var parameterValue = (0,_tryCatch__WEBPACK_IMPORTED_MODULE_4__.tryCatch)(getVersion);

    if (typeof parameterValue === 'string' && parameterValue.length > 0) {
      _Stats__WEBPACK_IMPORTED_MODULE_3__.stats.deprecated("HardcodedParamObtainedFrom" + name, "ATTENTION! Product parameter obtained from " + name + " [" + parameterName + "][" + parameterValue + "]");
      return parameterValue;
    }
  }

  return undefined;
}
/**
 * @param window - Window, в котором будет осуществлен поиск признаков фиксированной версии
 * @param fixingVersionParameter - строка, по которой будет осуществлен поиск
 * признаков фиксации версии функцией `getHardcodedParam`
 * @param bundlesVersionsConfig - конфиг для выбора случайной версии, если версия не фиксирована
 *
 * @returns номер выбранной версии
 */

function getBundlesVersion(window, fixingVersionParameter, bundlesVersionsConfig) {
  var hardcodedVersion = getHardcodedParam(window, fixingVersionParameter);

  if (hardcodedVersion) {
    return Number(hardcodedVersion);
  }

  return (0,_getBundleVersion__WEBPACK_IMPORTED_MODULE_6__.getBundleVersion)(bundlesVersionsConfig);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/adblock/CONFIG_MACROS/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/adblock/CONFIG_MACROS/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ M; }
/* harmony export */ });
/**
 * Однобуквенное название, чтобы не светить адблоку говорящие названия в бандле
 *
 * Эта строка в проде заменяется антиадблоком на объект типа AdblockConfig
 * @see AdblockConfig
 */
var M = '__ADB_CONFIG__';

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/adblock/encodeUrl/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/adblock/encodeUrl/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeUrl": function() { return /* binding */ encodeUrl; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _Object_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Object/isObject */ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js");
/* harmony import */ var _CONFIG_MACROS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CONFIG_MACROS */ "./node_modules/@yandex-int/any.common/ts/adblock/CONFIG_MACROS/index.js");



var configFn = (0,_Object_isObject__WEBPACK_IMPORTED_MODULE_1__.isObject)(_CONFIG_MACROS__WEBPACK_IMPORTED_MODULE_2__.M) && _CONFIG_MACROS__WEBPACK_IMPORTED_MODULE_2__.M.fn && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_CONFIG_MACROS__WEBPACK_IMPORTED_MODULE_2__.M.fn.encodeUrl) ? _CONFIG_MACROS__WEBPACK_IMPORTED_MODULE_2__.M.fn.encodeUrl : undefined;
/**
 * Функция для шифрования ссылки, зашитая в текущий JS файл
 */

var encodeUrl = configFn !== undefined ? function (url) {
  return configFn(url);
} : undefined;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/adblock/videoEncode/getVideoEncode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/adblock/videoEncode/getVideoEncode.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVideoEncode": function() { return /* binding */ getVideoEncode; }
/* harmony export */ });
/* harmony import */ var _dom_friendlyWindowsChain_getFriendlyWindowsChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/friendlyWindowsChain/getFriendlyWindowsChain */ "./node_modules/@yandex-int/any.common/ts/dom/friendlyWindowsChain/getFriendlyWindowsChain.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _Object_setAndGet_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object/setAndGet/get */ "./node_modules/@yandex-int/any.common/ts/Object/setAndGet/get.js");
/* harmony import */ var _encodeUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../encodeUrl */ "./node_modules/@yandex-int/any.common/ts/adblock/encodeUrl/index.js");




/**
 * Вернёт функцию шифрования URL или null, если её нет
 *
 * Функция может браться как из текущего бандла, так и из глобальной области
 */

var getVideoEncode = function getVideoEncode(win) {
  if (win === void 0) {
    win = window;
  }

  // Если функция уже зашита в текущий файл - берем ее
  if (_encodeUrl__WEBPACK_IMPORTED_MODULE_3__.encodeUrl) {
    return _encodeUrl__WEBPACK_IMPORTED_MODULE_3__.encodeUrl;
  } // Если в текущем файле функция не зашита - ищем функцию по цепочке friendly фреймов в глобальной области


  var windows = (0,_dom_friendlyWindowsChain_getFriendlyWindowsChain__WEBPACK_IMPORTED_MODULE_0__.getFriendlyWindowsChain)(win);

  while (windows.length) {
    var currentWindow = windows.pop();

    if (!currentWindow) {
      continue;
    }

    var fn = (0,_Object_setAndGet_get__WEBPACK_IMPORTED_MODULE_2__.get)(currentWindow, 'ya.videoAd.encodeUrl');

    if (!(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
      continue;
    }

    return fn;
  }

  return undefined;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/adblock/videoEncode/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/adblock/videoEncode/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videoEncode": function() { return /* binding */ videoEncode; }
/* harmony export */ });
/* harmony import */ var _getVideoEncode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVideoEncode */ "./node_modules/@yandex-int/any.common/ts/adblock/videoEncode/getVideoEncode.js");

/**
 * В лоадере есть макрос, который заменяется на стороне прокси антиблока на объект, в котором есть функция encodeUrl
 * Чтобы не дублировать макрос в бандле (тк его замена увеличивает бандл на несколько килобайт),
 * в бандл эта функция прокидывается через глобальный объект.
 * В итоге наличие этой функции говорит о том, что используется антиадблочный бандл.
 */

var videoEncode = (0,_getVideoEncode__WEBPACK_IMPORTED_MODULE_0__.getVideoEncode)(window);

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/filter.js":
/*!****************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/filter.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": function() { return /* binding */ filter; }
/* harmony export */ });
/**
 * Аналог {@link Array#filter}.
 * @param array Исходный массив.
 * @param callback Предикат, вызываемый для каждого элемента массива {@param array}.
 * @param thisArg Значение, используемое в качестве `this` при выполнении функции {@param callback}.
 * @return Новый массив элементов, для которых {@param callback} вернул `true`.
 */
var filter = function filter(array, callback, thisArg) {
  var result = [];

  for (var index = 0; index < array.length; index++) {
    var value = array[index];

    if (callback.call(thisArg, value, index, array)) {
      result.push(value);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/find.js":
/*!**************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/find.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": function() { return /* binding */ find; }
/* harmony export */ });
/* harmony import */ var _NativeMethods_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NativeMethods/checkNativeCode */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js");
 // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill

var ponyfill = function ponyfill(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i];

    if (predicate(value, i, array)) {
      return value;
    }
  }

  return undefined;
};

var nativeMethod = [].find;

var nativeFind = function nativeFind(array, predicate) {
  return nativeMethod.call(array, predicate);
};

var find = (0,_NativeMethods_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__.checkNativeCode)(nativeMethod) ? nativeFind : ponyfill;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/forEach.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/forEach.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEach": function() { return /* binding */ forEach; }
/* harmony export */ });
/**
 * Аналог {@link Array#forEach}.
 * @param array Исходный массив.
 * @param callback Функция, вызываемая для каждого элемента массива {@param array}.
 * @param thisArg Значение, используемое в качестве `this` при выполнении функции {@param callback}.
 */
var forEach = function forEach(array, callback, thisArg) {
  for (var index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index], index, array);
  }
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/getFirstDefined/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/getFirstDefined/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstDefined": function() { return /* binding */ getFirstDefined; }
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter */ "./node_modules/@yandex-int/any.common/ts/array/filter.js");

function getFirstDefined(values) {
  var _filter = (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)(values, function (value) {
    return value !== undefined;
  }),
      firstDefined = _filter[0];

  return firstDefined;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/isArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/isArray.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": function() { return /* binding */ isArray; }
/* harmony export */ });
/* harmony import */ var _getInternalClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getInternalClass */ "./node_modules/@yandex-int/any.common/ts/getInternalClass/index.js");
/* harmony import */ var _NativeMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NativeMethods */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/index.js");


var nativeIsArray = (0,_NativeMethods__WEBPACK_IMPORTED_MODULE_1__.getNativeMethod)(Array, 'isArray');
var isArray = Boolean(nativeIsArray) ? function (arg) {
  return nativeIsArray.call(Array, arg);
} : function (arg) {
  return (0,_getInternalClass__WEBPACK_IMPORTED_MODULE_0__.getInternalClass)(arg) === 'Array';
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/map.js":
/*!*************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/map.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": function() { return /* binding */ map; }
/* harmony export */ });
/**
 * Аналог {@link Array#map}.
 * @param array Исходный массив.
 * @param callback Функция, вызываемая для каждого элемента массива {@param array}.
 * @param thisArg Значение, используемое в качестве `this` при выполнении функции {@param callback}.
 * @return Массив результатов вызовов {@param callback}.
 */
var map = function map(array, callback, thisArg) {
  var result = new Array(array.length);

  for (var index = 0; index < array.length; index++) {
    result[index] = callback.call(thisArg, array[index], index, array);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/array/separate/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/array/separate/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "separate": function() { return /* binding */ separate; }
/* harmony export */ });
/* harmony import */ var _forEach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forEach */ "./node_modules/@yandex-int/any.common/ts/array/forEach.js");

function separate(array, separateFunction) {
  var appropriate = [];
  var inappropriate = [];
  (0,_forEach__WEBPACK_IMPORTED_MODULE_0__.forEach)(array, function (value, index) {
    if (separateFunction(value, index, array)) {
      appropriate.push(value);
    } else {
      inappropriate.push(value);
    }
  });
  return [appropriate, inappropriate];
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/createFriendlyIFrame/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/createFriendlyIFrame/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFriendlyIFrame": function() { return /* binding */ createFriendlyIFrame; }
/* harmony export */ });
function createFriendlyIFrame(parentElement, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      content = _ref.content,
      size = _ref.size;

  var iframe = parentElement.ownerDocument.createElement('iframe'); // disable scroll bar by default

  iframe.scrolling = 'no'; // https://st.yandex-team.ru/FLASH-1018

  iframe.setAttribute('allowfullscreen', ''); // iframe is inline element by default

  iframe.style.display = 'block';

  if (size) {
    iframe.height = size.height;
    iframe.width = size.width;
  }

  parentElement.appendChild(iframe); // iframe cannot be created without contentDocument

  var contentDocument = iframe.contentDocument; // forces ff to create document

  contentDocument.open();

  if (content) {
    contentDocument.write(content);
  }

  contentDocument.close(); // remove extra borders/margins

  contentDocument.body.style.margin = '0';
  iframe.style.borderWidth = '0';
  return iframe;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/date/dateNow/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/date/dateNow/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateNow": function() { return /* binding */ dateNow; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");

var isSupported = Date && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(Date.now);
/**
 * Date.now() ponyfill
 */

var dateNow = isSupported ? function () {
  return Date.now();
} : function () {
  return new Date().getTime();
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/dom/DocumentVisibility/getDocumentHiddenProperty/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/dom/DocumentVisibility/getDocumentHiddenProperty/index.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDocumentHiddenProperty": function() { return /* binding */ getDocumentHiddenProperty; }
/* harmony export */ });
var getDocumentHiddenProperty = function getDocumentHiddenProperty(document) {
  if ('hidden' in document) {
    return 'hidden';
  }

  if ('webkitHidden' in document) {
    return 'webkitHidden';
  }

  return undefined;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/dom/DocumentVisibility/getDocumentVisibility/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/dom/DocumentVisibility/getDocumentVisibility/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDocumentVisibility": function() { return /* binding */ getDocumentVisibility; }
/* harmony export */ });
/* harmony import */ var _getDocumentHiddenProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getDocumentHiddenProperty */ "./node_modules/@yandex-int/any.common/ts/dom/DocumentVisibility/getDocumentHiddenProperty/index.js");

function getDocumentVisibility(document, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = true;
  }

  var documentHiddenProperty = (0,_getDocumentHiddenProperty__WEBPACK_IMPORTED_MODULE_0__.getDocumentHiddenProperty)(document);

  if (!documentHiddenProperty) {
    return defaultValue;
  }

  var isDocumentHidden = document[documentHiddenProperty];
  return !isDocumentHidden;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/dom/TOP_FRIENDLY_WINDOW/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/dom/TOP_FRIENDLY_WINDOW/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOP_FRIENDLY_WINDOW": function() { return /* binding */ TOP_FRIENDLY_WINDOW; }
/* harmony export */ });
/* harmony import */ var _parentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../parentFriendlyIFrames */ "./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/index.js");

var length = _parentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_0__.parentFriendlyIFrames.length;
/**
 * Родительский window в цепочке friendly-фреймов
 * (либо текущий window, если родительских friendly-фреймов нет)
 */

var TOP_FRIENDLY_WINDOW = length > 0 ? _parentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_0__.parentFriendlyIFrames[length - 1].ownerDocument.defaultView : window;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/dom/friendlyWindowsChain/getFriendlyWindowsChain.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/dom/friendlyWindowsChain/getFriendlyWindowsChain.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyWindowsChain": function() { return /* binding */ getFriendlyWindowsChain; }
/* harmony export */ });
/* harmony import */ var _getWindowLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../getWindowLocation */ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js");

/**
 * Возвращает массив friendly Window, начиная c Window, переданного первым аргументом
 *
 * Поскольку при перемещении любого iframe по DOM он переинициализируется,
 * массив актуален на все время существования текущего Windows
 */

var getFriendlyWindowsChain = function getFriendlyWindowsChain(win) {
  var windowChain = [];

  while (win) {
    try {
      // trigger error for cross-origin frame
      (0,_getWindowLocation__WEBPACK_IMPORTED_MODULE_0__.getWindowLocation)(win);
      windowChain.push(win);

      if (win.parent === win) {
        break;
      }

      win = win.parent;
    } catch (e) {
      break;
    }
  }

  return windowChain;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/dom/hasTopDocumentFocus/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/dom/hasTopDocumentFocus/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTopDocumentFocus": function() { return /* binding */ getTopDocumentFocus; }
/* harmony export */ });
/* harmony import */ var _TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TOP_FRIENDLY_WINDOW */ "./node_modules/@yandex-int/any.common/ts/dom/TOP_FRIENDLY_WINDOW/index.js");

/**
 * Проверяет, есть ли фокус на родительском документе
 * (для friendly-фреймов это документ вкладки и фокус браузера)
 *
 * `true` - топовый документ в фокусе
 * `false` - топовый документ не в фокусе
 * `undefined` - статус фокуса получить не удалось
 */

function getTopDocumentFocus() {
  if (!_TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__.TOP_FRIENDLY_WINDOW) {
    return undefined;
  }

  if (!_TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__.TOP_FRIENDLY_WINDOW.document) {
    return undefined;
  }

  if (typeof _TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__.TOP_FRIENDLY_WINDOW.document.hasFocus !== 'function') {
    return undefined;
  }

  try {
    return _TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__.TOP_FRIENDLY_WINDOW.document.hasFocus();
  } catch (_a) {//
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/dom/windowsChain/getWindowsChain.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/dom/windowsChain/getWindowsChain.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWindowsChain": function() { return /* binding */ getWindowsChain; }
/* harmony export */ });
/**
 * Возвращает массив родительских Window начиная c window, переданного первым аргументом и до
 * window.top, включая cross-origin Window
 *
 * Перемещение любого родительского iframe в DOM ведет к его переинициализации,
 * так что список, полученный один раз, будет актуальным для window на весь оставшийся период его существования
 */
function getWindowsChain(window) {
  var currentWindow = window;
  var windows = [window];
  var top = window.top;

  while (currentWindow !== top) {
    currentWindow = currentWindow.parent;
    windows.push(currentWindow);
  }

  return windows;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/function/callFunctions/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/function/callFunctions/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callFunctions": function() { return /* binding */ callFunctions; }
/* harmony export */ });
/* harmony import */ var _array_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../array/isArray */ "./node_modules/@yandex-int/any.common/ts/array/isArray.js");

/**
 * Функция вызывает массив функций с аргументами
 */

function callFunctions(functions) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!(0,_array_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(functions)) {
    return;
  }

  functions.forEach(function (func) {
    if (typeof func === 'function') {
      func.apply(void 0, args);
    }
  });
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/function/memoize/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/function/memoize/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectCache": function() { return /* binding */ ObjectCache; },
/* harmony export */   "memoize": function() { return /* binding */ memoize; }
/* harmony export */ });
var ObjectCache = /*#__PURE__*/function () {
  function ObjectCache(cache) {
    this.cache = cache;
  }

  var _proto = ObjectCache.prototype;

  _proto.get = function get(key) {
    return this.cache[key];
  };

  _proto.has = function has(key) {
    return key in this.cache;
  };

  _proto.set = function set(key, value) {
    this.cache[key] = value;
  };

  return ObjectCache;
}();
/**
 * Аналог https://lodash.com/docs/4.17.4#memoize
 */

var memoize = function memoize(fn, resolver, cache) {
  if (resolver === void 0) {
    resolver = function resolver(x) {
      return x;
    };
  }

  if (cache === void 0) {
    cache = new ObjectCache({});
  }

  return function () {
    // tslint:disable-next-line:no-invalid-this
    var key = resolver.apply(this, arguments);

    if (cache.has(key)) {
      return cache.get(key);
    } // tslint:disable-next-line:no-invalid-this


    var value = fn.apply(this, arguments);
    cache.set(key, value);
    return value;
  };
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/function/once/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/function/once/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": function() { return /* binding */ once; }
/* harmony export */ });
/**
 * Обертка для функции, которая вызовется не больше одного раза
 *
 * Контекст вызова сохраняется
 *
 * При повторных вызовах возвращается результат первого вызова
 *
 * Повторные рекурсивные вызовы срабатывать тоже не будут
 */
function once(fn) {
  var _onceFn = function onceFn() {
    // Заранее создаем переменную, чтобы при вызове не было ошибки обращения к несуществующей константе
    var result; // Заранее перезаписываем функцию, чтобы избежать рекурсивного вызова внутри once

    _onceFn = function onceFn() {
      return result;
    }; // tslint:disable-next-line:no-invalid-this


    result = fn.apply(this, arguments);
    return result;
  };

  return function () {
    // tslint:disable-next-line:no-invalid-this
    return _onceFn.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/ANCESTOR_ORIGINS.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/ANCESTOR_ORIGINS.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANCESTOR_ORIGINS": function() { return /* binding */ ANCESTOR_ORIGINS; }
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/index.js");

/**
 * Список родительских фреймов, если они есть, иначе - пустой массив.
 * Самый верхний родительский фрейм (если он есть) идет последним.
 * Если бразуер не поддерживает location.ancestorOrigins, то значение равно пустому массиву.
 */

var ANCESTOR_ORIGINS = (0,___WEBPACK_IMPORTED_MODULE_0__.getAncestorOrigins)(window);

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/TOP_ANCESTOR.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/TOP_ANCESTOR.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_TOP_ANCESTOR_TRUSTED": function() { return /* binding */ IS_TOP_ANCESTOR_TRUSTED; },
/* harmony export */   "TOP_ANCESTOR": function() { return /* binding */ TOP_ANCESTOR; }
/* harmony export */ });
/* harmony import */ var _getTopAncestor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTopAncestor */ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/getTopAncestor.js");


var _getTopAncestor = (0,_getTopAncestor__WEBPACK_IMPORTED_MODULE_0__.getTopAncestor)(),
    topAncestor = _getTopAncestor.topAncestor,
    isTrusted = _getTopAncestor.isTrusted;
/**
 * Строка, содержащая в себе протокол, домен и порт адреса вкладки (или верхнего домена)
 *
 * Пример: `https://yandex.ru`
 *
 * В случае, если мы находимся в friendly-фрейме, берем данные из TopLocation
 * Если находимся в secure-фрейме и массив ancestorOrigins недоступен, берем домен из TopReferrer
 */


var TOP_ANCESTOR = topAncestor;
/**
 * Является ли адрес вкладки достоверным
 */

var IS_TOP_ANCESTOR_TRUSTED = isTrusted;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/getTopAncestor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/getTopAncestor.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTopAncestor": function() { return /* binding */ getTopAncestor; }
/* harmony export */ });
/* harmony import */ var _dom_TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/TOP_FRIENDLY_WINDOW */ "./node_modules/@yandex-int/any.common/ts/dom/TOP_FRIENDLY_WINDOW/index.js");
/* harmony import */ var _dom_windowsChain_getWindowsChain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/windowsChain/getWindowsChain */ "./node_modules/@yandex-int/any.common/ts/dom/windowsChain/getWindowsChain.js");
/* harmony import */ var _getTopLocationData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getTopLocationData */ "./node_modules/@yandex-int/any.common/ts/getTopLocationData/index.js");
/* harmony import */ var _isInSecureIFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isInSecureIFrame */ "./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/index.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../url */ "./node_modules/@yandex-int/any.common/ts/url/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/index.js");






/**
 * @see TOP_ANCESTOR
 */

function getTopAncestor(win) {
  if (win === void 0) {
    win = window;
  }

  var ancestorOrigins = (0,___WEBPACK_IMPORTED_MODULE_5__.getAncestorOrigins)(win);

  if (ancestorOrigins.length > 0) {
    // Если известен topAncestor - берем его
    return {
      topAncestor: ancestorOrigins[ancestorOrigins.length - 1],
      isTrusted: true
    };
  } // Если topAncestor недоступен или неизвестен, вычисляем его по данным из реферерра или адреса страницы


  var _getTopLocationData = (0,_getTopLocationData__WEBPACK_IMPORTED_MODULE_2__.getTopLocationData)(win.document),
      location = _getTopLocationData.location,
      referrer = _getTopLocationData.referrer;

  var topAncestorUrl = _isInSecureIFrame__WEBPACK_IMPORTED_MODULE_3__.isInSecureIFrame ? referrer : location;
  var isTrusted = _isInSecureIFrame__WEBPACK_IMPORTED_MODULE_3__.isInSecureIFrame ? // Можем доверять topReferrer,
  // если он был взят из топового window (это значит, что у текущего window не более одного родителя)
  (0,_dom_windowsChain_getWindowsChain__WEBPACK_IMPORTED_MODULE_1__.getWindowsChain)(_dom_TOP_FRIENDLY_WINDOW__WEBPACK_IMPORTED_MODULE_0__.TOP_FRIENDLY_WINDOW).length < 2 : // Можем доверять либо текущему topLocation
  true;

  var _parseUrl = (0,_url__WEBPACK_IMPORTED_MODULE_4__.parseUrl)(topAncestorUrl),
      protocol = _parseUrl.protocol,
      hostname = _parseUrl.hostname,
      host = _parseUrl.host,
      port = _parseUrl.port;

  var topAncestor = (0,_url__WEBPACK_IMPORTED_MODULE_4__.urlFromUrlObject)({
    protocol: protocol,
    hostname: hostname,
    host: host,
    port: port,
    originalPath: '',
    href: '',
    pathname: '',
    search: '',
    hash: ''
  });
  return {
    topAncestor: topAncestor,
    isTrusted: isTrusted
  };
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getAncestorOrigins/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAncestorOrigins": function() { return /* binding */ getAncestorOrigins; }
/* harmony export */ });
/* harmony import */ var _FeatureDetection_ancestorOrigins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FeatureDetection/ancestorOrigins */ "./node_modules/@yandex-int/any.common/ts/FeatureDetection/ancestorOrigins/index.js");
/* harmony import */ var _listToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listToArray */ "./node_modules/@yandex-int/any.common/ts/listToArray/index.js");


/**
 * Возвращает данные location.ancestorOrigins.
 * Не все браузеры поддерживают данный параметр (например, firefox) - в этом случае
 * в полях возвращаем пустой массив.
 */

function getAncestorOrigins(win) {
  // не все браузеры поддерживают ancestorOrigins
  if (!_FeatureDetection_ancestorOrigins__WEBPACK_IMPORTED_MODULE_0__.isAncestorOriginsSupported) {
    return [];
  }

  return (0,_listToArray__WEBPACK_IMPORTED_MODULE_1__.listToArray)(win.location.ancestorOrigins);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getCurrentScript/CURRENT_SCRIPT_SRC.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getCurrentScript/CURRENT_SCRIPT_SRC.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_SCRIPT_SRC": function() { return /* binding */ CURRENT_SCRIPT_SRC; }
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./node_modules/@yandex-int/any.common/ts/getCurrentScript/index.js");

var currentScript = (0,___WEBPACK_IMPORTED_MODULE_0__.getCurrentScript)();
var CURRENT_SCRIPT_SRC = currentScript ? currentScript.src : '';

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getCurrentScript/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getCurrentScript/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentScript": function() { return /* binding */ getCurrentScript; }
/* harmony export */ });
function getCurrentScript(doc, checkScript) {
  if (doc === void 0) {
    doc = document;
  }

  var currentScript = doc.currentScript;

  if (currentScript) {
    return currentScript;
  } else {
    var scriptsList = doc.getElementsByTagName('script'); // В IE8 не работает Array.prototype.slice.call(NodeList)
    // Эта функция сериализуется и используется внутри фреймов, потому тут мы не можем использовать импорты
    // и скопипастить listToArray

    var scripts = [];

    for (var i = 0; i < scriptsList.length; i++) {
      scripts.push(scriptsList[i]);
    }

    if (typeof checkScript === 'function') {
      var checkedScripts = scripts.filter(checkScript);
      return checkedScripts[checkedScripts.length - 1];
    } else {
      return scripts[scripts.length - 1];
    }
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getHead/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getHead/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHead": function() { return /* binding */ getHead; }
/* harmony export */ });
/**
 * Проверяет, есть ли `head` в документе, и если такого нет, то создает.
 * @returns head element
 */
function getHead(win) {
  var doc = win.document;
  var head = doc.getElementsByTagName('head')[0];

  if (!head) {
    head = doc.createElement('head');
    doc.documentElement.appendChild(head);
  }

  return head;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getInternalClass/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getInternalClass/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInternalClass": function() { return /* binding */ getInternalClass; }
/* harmony export */ });
var toString = {}.toString;
/** type would be [1] */

var typeReg = /\[object (\w+)\]/;
/**
 * Get [[Class]] via Object.prototype.toString
 * Returns `null` if it's not possible
 * @see {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#Description}
 */

var getInternalClass = function getInternalClass(target) {
  var typeString = toString.call(target);

  if (!typeString) {
    return null;
  }

  var match = typeString.match(typeReg);

  if (!match) {
    return null;
  }

  var type = match[1];

  if (!type) {
    return null;
  }

  return type;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getTopLocationData/getParentLocationsData.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getTopLocationData/getParentLocationsData.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentLocationsData": function() { return /* binding */ getParentLocationsData; }
/* harmony export */ });
/* harmony import */ var _getWindowLocation___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getWindowLocation/ */ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js");
/* harmony import */ var _parentFriendlyIFrames_getParentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentFriendlyIFrames/getParentFriendlyIFrames */ "./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/getParentFriendlyIFrames.js");


function getParentLocationsData(targetDocument) {
  var documents = (0,_parentFriendlyIFrames_getParentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_1__.getParentFriendlyIFrames)(targetDocument.documentElement).map(function (iframe) {
    return iframe.ownerDocument;
  });
  documents.unshift(targetDocument);
  return documents.map(function (document) {
    return {
      location: (0,_getWindowLocation___WEBPACK_IMPORTED_MODULE_0__.getWindowLocation)(document.defaultView),
      referrer: document.referrer
    };
  });
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getTopLocationData/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getTopLocationData/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTopLocationData": function() { return /* binding */ getTopLocationData; }
/* harmony export */ });
/* harmony import */ var _getParentLocationsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentLocationsData */ "./node_modules/@yandex-int/any.common/ts/getTopLocationData/getParentLocationsData.js");

function getTopLocationData(targetDocument) {
  var location = '';
  var referrer = '';

  if (targetDocument) {
    var locationsData = (0,_getParentLocationsData__WEBPACK_IMPORTED_MODULE_0__.getParentLocationsData)(targetDocument);
    locationsData.reverse().forEach(function (_ref) {
      var currentLocation = _ref.location,
          currentReferrer = _ref.referrer;
      location = location || currentLocation;
      referrer = referrer || currentReferrer;
    });
  }

  return {
    location: location,
    referrer: referrer
  };
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWindowLocation": function() { return /* binding */ getWindowLocation; }
/* harmony export */ });
function getWindowLocation(window) {
  if (window && window.location) {
    var location = window.location;

    if (typeof location.toString === 'function') {
      return location.toString();
    } else {
      return location.href || '';
    }
  } else {
    return '';
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/globalCallback/callGlobalCallback.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/globalCallback/callGlobalCallback.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callGlobalCallback": function() { return /* binding */ callGlobalCallback; }
/* harmony export */ });
/* harmony import */ var _dom_friendlyWindowsChain_getFriendlyWindowsChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/friendlyWindowsChain/getFriendlyWindowsChain */ "./node_modules/@yandex-int/any.common/ts/dom/friendlyWindowsChain/getFriendlyWindowsChain.js");
/* harmony import */ var _function_callFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function/callFunctions */ "./node_modules/@yandex-int/any.common/ts/function/callFunctions/index.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noop */ "./node_modules/@yandex-int/any.common/ts/noop/index.js");



/**
 * Вызовет глобальный коллбек по всей цепочке window
 * ❗️ работает только в __dev__ окружении
 */

var callGlobalCallback =  true ? function (_ref) {
  var propertyName = _ref.propertyName,
      callbackArguments = _ref.callbackArguments,
      _ref$win = _ref.win,
      win = _ref$win === void 0 ? window : _ref$win;
  // without `any` TS throws `Expression produces a union type that is too complex to represent`
  // FIXME: remove any from here in future
  (0,_dom_friendlyWindowsChain_getFriendlyWindowsChain__WEBPACK_IMPORTED_MODULE_0__.getFriendlyWindowsChain)(win).forEach(function (someOtherWin) {
    var callbacksMaybe = someOtherWin[propertyName];

    if (!Array.isArray(callbacksMaybe)) {
      return;
    }

    _function_callFunctions__WEBPACK_IMPORTED_MODULE_1__.callFunctions.apply(void 0, [callbacksMaybe].concat(callbackArguments));
  });
} : 0;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/globalCallback/clearGlobalCallbacks.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/globalCallback/clearGlobalCallbacks.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearGlobalCallbacks": function() { return /* binding */ clearGlobalCallbacks; }
/* harmony export */ });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/@yandex-int/any.common/ts/noop/index.js");

/**
 * Очистит массив глобальных коллбеков
 * ❗️ работает только в __dev__ окружении
 */

var clearGlobalCallbacks =  true ? function (_ref) {
  var win = _ref.win,
      propertyName = _ref.propertyName;
  // Use `as any` cast here because TS throws error `Expression produces a union type that is too complex to represent.ts(2590)`
  // FIXME: remove anyWin in future version of TS
  var anyWin = win;
  delete anyWin[propertyName];
} : 0;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/globalCallback/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/globalCallback/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalCallbackFactory": function() { return /* binding */ globalCallbackFactory; }
/* harmony export */ });
/* harmony import */ var _callGlobalCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callGlobalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/callGlobalCallback.js");
/* harmony import */ var _clearGlobalCallbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearGlobalCallbacks */ "./node_modules/@yandex-int/any.common/ts/globalCallback/clearGlobalCallbacks.js");
/* harmony import */ var _subscribeGlobalCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeGlobalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/subscribeGlobalCallback.js");
/* harmony import */ var _waitForGlobalCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waitForGlobalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/waitForGlobalCallback.js");
/* harmony import */ var _waitUntilGlobalCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waitUntilGlobalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/waitUntilGlobalCallback.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/**
 * Вернёт объект со всеми хелперами для работы с глобальными коллбеками
 * Принимает в себя параметры, которые есть у всех функций по отдельности
 * После этого вернёт объект, где будут все хелперы в одном месте.
 * Эти хелперы частично применены на аргументы фабрики. То есть, передавать имя свойства или window уже не обязательно
 * Для примеров см. тесты
 * ❗️ все хелперы работают только в __dev__ окружении
 */

var globalCallbackFactory = function globalCallbackFactory(_ref) {
  var win = _ref.win,
      propertyName = _ref.propertyName;
  return {
    call: function call(params) {
      return (0,_callGlobalCallback__WEBPACK_IMPORTED_MODULE_0__.callGlobalCallback)(_extends({
        win: win,
        propertyName: propertyName
      }, params));
    },
    subscribe: function subscribe(params) {
      return (0,_subscribeGlobalCallback__WEBPACK_IMPORTED_MODULE_2__.subscribeGlobalCallback)(_extends({
        win: win,
        propertyName: propertyName
      }, params));
    },
    wait: function wait(params) {
      return (0,_waitForGlobalCallback__WEBPACK_IMPORTED_MODULE_3__.waitForGlobalFunctionCallback)(_extends({
        win: win,
        propertyName: propertyName
      }, params));
    },
    waitUntil: function waitUntil(params) {
      return (0,_waitUntilGlobalCallback__WEBPACK_IMPORTED_MODULE_4__.waitUntilGlobalCallback)(_extends({
        win: win,
        propertyName: propertyName
      }, params));
    },
    clear: function clear(params) {
      return (0,_clearGlobalCallbacks__WEBPACK_IMPORTED_MODULE_1__.clearGlobalCallbacks)(_extends({
        win: win,
        propertyName: propertyName
      }, params));
    }
  };
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/globalCallback/subscribeGlobalCallback.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/globalCallback/subscribeGlobalCallback.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribeGlobalCallback": function() { return /* binding */ subscribeGlobalCallback; }
/* harmony export */ });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/@yandex-int/any.common/ts/noop/index.js");

/**
 * Подпишется на вызов глобального коллбека
 * ❗️ работает только в __dev__ окружении
 */

var subscribeGlobalCallback =  true ? function (_ref) {
  var propertyName = _ref.propertyName,
      win = _ref.win,
      callback = _ref.callback;
  // without `any` TS throws `Expression produces a union type that is too complex to represent`
  // FIXME: remove cast to `any` in future
  var anyWin = win;

  if (Array.isArray(anyWin[propertyName])) {
    anyWin[propertyName].push(callback);
  } else {
    anyWin[propertyName] = [callback];
  }
} : 0;

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/globalCallback/waitForGlobalCallback.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/globalCallback/waitForGlobalCallback.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitForGlobalFunctionCallback": function() { return /* binding */ waitForGlobalFunctionCallback; }
/* harmony export */ });
/* harmony import */ var _subscribeGlobalCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeGlobalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/subscribeGlobalCallback.js");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");

/**
 * Вернёт promise, который зарезолвится, когда вызовется глобальный коллбек
 * ❗️ работает только в __dev__ окружении
 */

var waitForGlobalFunctionCallback = function waitForGlobalFunctionCallback(_ref) {
  var propertyName = _ref.propertyName,
      win = _ref.win;
  return new Promise(function (resolve) {
    (0,_subscribeGlobalCallback__WEBPACK_IMPORTED_MODULE_0__.subscribeGlobalCallback)({
      // we actually need to pass lambda here (damn TS)
      callback: function callback() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return resolve(args);
      },
      propertyName: propertyName,
      win: win
    });
  });
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/globalCallback/waitUntilGlobalCallback.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/globalCallback/waitUntilGlobalCallback.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntilGlobalCallback": function() { return /* binding */ waitUntilGlobalCallback; }
/* harmony export */ });
/* harmony import */ var _subscribeGlobalCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeGlobalCallback */ "./node_modules/@yandex-int/any.common/ts/globalCallback/subscribeGlobalCallback.js");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");

/**
 * Подпишется на вызов глобального коллбека
 * И выполнит промис, когда выполнится компаратор
 * ❗️ работает только в __dev__ окружении
 */

var waitUntilGlobalCallback = function waitUntilGlobalCallback(_ref) {
  var propertyName = _ref.propertyName,
      win = _ref.win,
      comparator = _ref.comparator;
  return new Promise(function (resolve) {
    if (true) {
      resolve();
    }

    (0,_subscribeGlobalCallback__WEBPACK_IMPORTED_MODULE_0__.subscribeGlobalCallback)({
      propertyName: propertyName,
      win: win,
      callback: function callback() {
        if (comparator.apply(void 0, arguments)) {
          resolve();
        }
      }
    });
  });
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/hexString/generateHexString/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/hexString/generateHexString/index.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHexString": function() { return /* binding */ generateHexString; }
/* harmony export */ });
/* harmony import */ var _Math_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/random */ "./node_modules/@yandex-int/any.common/ts/Math/random/index.js");

function generateHexString(length) {
  var x = '';

  for (var key = 0; key < length; key++) {
    x += ((0,_Math_random__WEBPACK_IMPORTED_MODULE_0__.random)() * 16 | 0).toString(16);
  }

  return x;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/iframe/createHiddenFriendlyIFrame.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/iframe/createHiddenFriendlyIFrame.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHiddenFriendlyIFrame": function() { return /* binding */ createHiddenFriendlyIFrame; }
/* harmony export */ });
/* harmony import */ var _createFriendlyIFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFriendlyIFrame */ "./node_modules/@yandex-int/any.common/ts/createFriendlyIFrame/index.js");

function createHiddenFriendlyIFrame(parentElement) {
  var iframe = (0,_createFriendlyIFrame__WEBPACK_IMPORTED_MODULE_0__.createFriendlyIFrame)(parentElement);
  iframe.width = '0';
  iframe.height = '0';
  iframe.style.position = 'absolute';
  return iframe;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/iframe/removeIframe/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/iframe/removeIframe/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIframe": function() { return /* binding */ removeIframe; }
/* harmony export */ });
/* harmony import */ var _removeNodeFromParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../removeNodeFromParent */ "./node_modules/@yandex-int/any.common/ts/removeNodeFromParent/index.js");

function removeIframe(iframe) {
  // reload iframe before detaching it from DOM to prevent IE problems
  // https://msdn.microsoft.com/en-us/library/gg622929(v=vs.85).aspx
  iframe.src = '';
  (0,_removeNodeFromParent__WEBPACK_IMPORTED_MODULE_0__.removeNodeFromParent)(iframe);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/isFunction/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; }
/* harmony export */ });
/* harmony import */ var _getInternalClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getInternalClass */ "./node_modules/@yandex-int/any.common/ts/getInternalClass/index.js");

function isFunction(value) {
  // see tests, typeof value not works for regex in old chromes, {}.toString not works for ES6 functions
  return typeof value === 'function' || (0,_getInternalClass__WEBPACK_IMPORTED_MODULE_0__.getInternalClass)(value) === 'Function';
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInSecureIFrame": function() { return /* binding */ isInSecureIFrame; }
/* harmony export */ });
/* harmony import */ var _isInSecureIFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInSecureIFrame */ "./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/isInSecureIFrame.js");

var isInSecureIFrame = (0,_isInSecureIFrame__WEBPACK_IMPORTED_MODULE_0__.isInSecureIFrame)();

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/isInSecureIFrame.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/isInSecureIFrame/isInSecureIFrame.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInSecureIFrame": function() { return /* binding */ isInSecureIFrame; }
/* harmony export */ });
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/map */ "./node_modules/@yandex-int/any.common/ts/array/map.js");
/* harmony import */ var _parentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentFriendlyIFrames */ "./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/index.js");


function isInSecureIFrame() {
  // В IE8 нет Array.prototype.map
  var documents = (0,_array_map__WEBPACK_IMPORTED_MODULE_0__.map)(_parentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_1__.parentFriendlyIFrames, function (iframe) {
    return iframe.ownerDocument;
  });
  var length = documents.length;
  var doc = length ? documents[length - 1] : document;
  var window = doc.defaultView; // В IE8 может не быть defaultView

  if (!window) {
    return false;
  }

  return window.self !== window.parent;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/jsonStringifyCircular/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/jsonStringifyCircular/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsonStringifyCircular": function() { return /* binding */ jsonStringifyCircular; }
/* harmony export */ });
/* harmony import */ var _array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/find */ "./node_modules/@yandex-int/any.common/ts/array/find.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* harmony import */ var _NativeMethods_getNativeJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NativeMethods/getNativeJSON */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/getNativeJSON/index.js");
/* harmony import */ var _Object_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Object/isObject */ "./node_modules/@yandex-int/any.common/ts/Object/isObject/index.js");
/* harmony import */ var _string_isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../string/isString */ "./node_modules/@yandex-int/any.common/ts/string/isString.js");





function jsonStringifyCircular(obj) {
  var nativeJson = (0,_NativeMethods_getNativeJSON__WEBPACK_IMPORTED_MODULE_2__.getNativeJSON)();
  return nativeJson.stringify(obj, serializer());
}

function getPathStorage() {
  var weakMapStorage = typeof WeakMap !== 'undefined' ? new WeakMap() : undefined;
  var recordStorage = [];
  return {
    set: function set(value, path) {
      if (weakMapStorage === undefined) {
        recordStorage.push({
          path: path,
          value: value
        });
        return;
      } // в IE 11 WeakMap.set может падать для некоторых объектов, например PerformanceResourceTiming
      // если такое произошло, то используем recordStorage


      try {
        weakMapStorage.set(value, path);
      } catch (err) {
        recordStorage.push({
          path: path,
          value: value
        });
      }
    },
    get: function get(value) {
      // В первую очередь проверяем recordStorage, на случай упавшего WeakMap.set.
      // Размер recordStorage должен быть минимальным, что не портит общую производительность
      var found = (0,_array_find__WEBPACK_IMPORTED_MODULE_0__.find)(recordStorage, function (record) {
        return record.value === value;
      });

      if (weakMapStorage !== undefined && found === undefined) {
        return weakMapStorage.get(value);
      }

      return found ? found.path : undefined;
    }
  };
}

function serializer() {
  var stack = [];
  var storage = getPathStorage();
  return function (key, value) {
    if ((0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return (0,_string_isString__WEBPACK_IMPORTED_MODULE_4__.isString)(value.name) ? value.name : '[Function]';
    }

    if (!(0,_Object_isObject__WEBPACK_IMPORTED_MODULE_3__.isObject)(value)) {
      return value;
    }

    var path = storage.get(value);

    if (path) {
      return "[Circular " + path + "]";
    }

    while (stack.length > 0 && stack[stack.length - 1].value[key] !== value) {
      stack.pop();
    }

    var parentPath = stack.length > 0 ? stack[stack.length - 1].path : '';
    var currentPath = parentPath + (key ? "/" + key : '~');
    stack.push({
      path: currentPath,
      value: value
    });
    storage.set(value, currentPath);
    return value;
  };
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/listToArray/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/listToArray/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listToArray": function() { return /* binding */ listToArray; }
/* harmony export */ });
function listToArray(list) {
  if (!list) {
    return [];
  } // В IE8 не работает Array.prototype.slice.call(NodeList)


  var arr = [];

  for (var i = 0; i < list.length; i++) {
    arr.push(list[i]);
  }

  return arr;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/net/request/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/net/request/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": function() { return /* binding */ request; }
/* harmony export */ });
/* harmony import */ var _function_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../function/once */ "./node_modules/@yandex-int/any.common/ts/function/once/index.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../noop */ "./node_modules/@yandex-int/any.common/ts/noop/index.js");
/* harmony import */ var _Object_forOwn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object/forOwn */ "./node_modules/@yandex-int/any.common/ts/Object/forOwn/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var OK_STATUS = 200;
var READY_STATE_DONE = 4; // TODO: tests https://st.yandex-team.ru/PCODE-7027

function request(params) {
  var method = params.method,
      url = params.url,
      _params$async = params.async,
      asyncAttrValue = _params$async === void 0 ? true : _params$async,
      data = params.data,
      _params$responseType = params.responseType,
      responseType = _params$responseType === void 0 ? 'text' : _params$responseType,
      _params$onBeforeSend = params.onBeforeSend,
      onBeforeSend = _params$onBeforeSend === void 0 ? _noop__WEBPACK_IMPORTED_MODULE_1__.noop : _params$onBeforeSend,
      _params$onRetry = params.onRetry,
      onRetry = _params$onRetry === void 0 ? _noop__WEBPACK_IMPORTED_MODULE_1__.noop : _params$onRetry,
      _params$checkStatus = params.checkStatus,
      checkStatus = _params$checkStatus === void 0 ? function (status) {
    return OK_STATUS === status;
  } : _params$checkStatus,
      _params$headers = params.headers,
      headers = _params$headers === void 0 ? {} : _params$headers,
      _params$xhrConstructo = params.xhrConstructor,
      xhrConstructor = _params$xhrConstructo === void 0 ? XMLHttpRequest : _params$xhrConstructo,
      _params$retries = params.retries,
      retries = _params$retries === void 0 ? 0 : _params$retries,
      _params$timeout = params.timeout,
      timeout = _params$timeout === void 0 ? 0 : _params$timeout,
      withCredentials = params.withCredentials,
      onAbort = params.onAbort,
      onSetup = params.onSetup;

  if (!xhrConstructor) {
    // Если XMLHttpRequest запрашивается из удаленного фрейма, возникает ошибка
    return;
  } // PCODE-15131
  // Некоторые площадки (например mail.ru) патчат xhr так что onreadystatechange дублируется
  // Поэтому гарантируем что success и error срабатывают строго один раз


  var onSuccess = params.onSuccess ? (0,_function_once__WEBPACK_IMPORTED_MODULE_0__.once)(params.onSuccess) : _noop__WEBPACK_IMPORTED_MODULE_1__.noop;
  var onError = params.onError ? (0,_function_once__WEBPACK_IMPORTED_MODULE_0__.once)(params.onError) : _noop__WEBPACK_IMPORTED_MODULE_1__.noop;
  var isAborted = false;
  var abortReason;
  var timeoutId = 0;

  var _abort = function abort(reason) {
    isAborted = true;
    _abort = _noop__WEBPACK_IMPORTED_MODULE_1__.noop;
    abortReason = reason;
    retryOrFail(new Error('Abort request'));

    if (typeof onAbort === 'function') {
      onAbort(reason);
    }
  };

  var retryOrFail = function retryOrFail(e) {
    xhr.onerror = null;
    xhr.onreadystatechange = null;

    if (timeoutId) {
      clearTimeout(timeoutId);
    } // Сбрасывать xhr надо только в том случае, если запрос не завершился и истекло время или запрос зааборчен.
    // Вызов abort сбрасывает xhr.status в 0, и в onRetry статус xhr-запроса теряется.


    var shouldAbort = timeoutId && xhr.readyState !== READY_STATE_DONE || isAborted;

    if (shouldAbort) {
      try {
        xhr.abort();
      } catch (e) {// ignore
      }
    }

    if (isAborted) {
      return;
    }

    if (retries > 0) {
      var result = onRetry(e, xhr);

      if (typeof result === 'boolean' && !Boolean(result)) {
        _abort();
      } // в onRetry запрос может быть зааборчен


      if (isAborted) {
        return;
      }

      request(_extends({}, params, {
        onSetup: function onSetup(_ref) {
          var abortRetry = _ref.abort;

          _abort = function _abort(reason) {
            return abortRetry(reason);
          }; // если abort при ретрае вызвали до onSetup


          if (isAborted) {
            abortRetry(abortReason);
          }
        },
        retries: retries - 1
      }));
    } else {
      _abort = _noop__WEBPACK_IMPORTED_MODULE_1__.noop;
      onError(e, xhr);
    }
  };

  var xhr = new xhrConstructor();

  try {
    // В Firefox 42-49 Adblock Plus кидает исключение, когда блокирует ресурс
    // https://st.yandex-team.ru/ANTIADB-1493
    xhr.open(method, url, asyncAttrValue);
  } catch (e) {
    retryOrFail(e);
    return;
  }

  xhr.responseType = responseType;
  xhr.withCredentials = Boolean(withCredentials);
  (0,_Object_forOwn__WEBPACK_IMPORTED_MODULE_2__.forOwn)(headers, function (value, header) {
    try {
      xhr.setRequestHeader(header, value);
    } catch (e) {// ignore
    }
  });

  if (timeout > 0 && isFinite(timeout)) {
    timeoutId = window.setTimeout(function () {
      retryOrFail(new Error("Request timeout, " + url));
    }, timeout);
  }

  xhr.onerror = retryOrFail;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === READY_STATE_DONE) {
      var status = xhr.status;

      if (checkStatus(status)) {
        _abort = _noop__WEBPACK_IMPORTED_MODULE_1__.noop;
        clearTimeout(timeoutId);
        onSuccess(xhr);
      } else {
        retryOrFail(new Error("Invalid request status " + status + ", " + url));
      }
    }
  };

  if (typeof onSetup === 'function') {
    onSetup({
      abort: function abort(reason) {
        return _abort(reason);
      }
    }); // в onSetup можно сразу заабортить запрос

    if (isAborted) {
      return;
    }
  }

  onBeforeSend(xhr, params); // проверяем, если запрос заабортили в onBeforeSend

  if (isAborted) {
    return;
  }

  try {
    xhr.send(data);
  } catch (e) {
    retryOrFail(e);
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/noop/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/noop/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": function() { return /* binding */ noop; }
/* harmony export */ });
function noop() {//
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/number/getRandomInt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/number/getRandomInt.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": function() { return /* binding */ getRandomInt; }
/* harmony export */ });
/* harmony import */ var _Math_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/random */ "./node_modules/@yandex-int/any.common/ts/Math/random/index.js");

function getRandomInt(min, max) {
  var rand = min + (0,_Math_random__WEBPACK_IMPORTED_MODULE_0__.random)() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/getParentFriendlyIFrames.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/getParentFriendlyIFrames.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentFriendlyIFrames": function() { return /* binding */ getParentFriendlyIFrames; }
/* harmony export */ });
/* harmony import */ var _DeviceDetection_isSafariBasedBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DeviceDetection/isSafariBasedBrowser */ "./packages/device-detection/src/isSafariBasedBrowser/index.ts");

/**
 * Возвращает массив родительских элементов `<iframe />`, до ближайшего cross-origin-iframe, либо до родительского
 * документа. Массив начинается с ближайшего родителя.
 *
 * Если в Safari запросить доступ к window, который не является текущим и родительский которого cross-origin -
 * в консоль вылетает ошибка, которую нельзя отловить. Поэтому для Safari всегда возвращаем пустой массив.
 *
 * Перемещение iframe в другой window ведет к его переинициализации, так что список, полученный изначально, будет актуальным
 * весь период жизни документа.
 */

function getParentFriendlyIFrames(element, considerSafari) {
  if (considerSafari === void 0) {
    considerSafari = true;
  }

  if (_DeviceDetection_isSafariBasedBrowser__WEBPACK_IMPORTED_MODULE_0__.isSafariBasedBrowser && considerSafari) {
    return [];
  } else {
    var array = [];
    var el = element; // tslint:disable-next-line:no-constant-condition

    while (true) {
      try {
        el = el.ownerDocument.defaultView.frameElement;

        if (el) {
          array.push(el);
        } else {
          return array;
        }
      } catch (e) {
        return array;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parentFriendlyIFrames": function() { return /* binding */ parentFriendlyIFrames; }
/* harmony export */ });
/* harmony import */ var _getParentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentFriendlyIFrames */ "./node_modules/@yandex-int/any.common/ts/parentFriendlyIFrames/getParentFriendlyIFrames.js");

/**
 * @see getParentFriendlyIFrames
 */

var parentFriendlyIFrames = (0,_getParentFriendlyIFrames__WEBPACK_IMPORTED_MODULE_0__.getParentFriendlyIFrames)(document.documentElement);

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/performance/performanceNow/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/performance/performanceNow/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPerformanceNowSupported": function() { return /* binding */ isPerformanceNowSupported; },
/* harmony export */   "performanceNow": function() { return /* binding */ performanceNow; },
/* harmony export */   "performanceNowShim": function() { return /* binding */ performanceNowShim; }
/* harmony export */ });
/* harmony import */ var _date_dateNow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date/dateNow */ "./node_modules/@yandex-int/any.common/ts/date/dateNow/index.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isFunction */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");


var performance = typeof window === 'undefined' ? undefined : window.performance;
var isPerformanceNowSupported = performance && (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(performance.now);
var nowOffset = performance && performance.timing && performance.timing.navigationStart ? performance.timing.navigationStart : (0,_date_dateNow__WEBPACK_IMPORTED_MODULE_0__.dateNow)();
var lastPerfNow = 0;
/**
 * Реализация performance.now() для неподдерживаемых браузеров
 * https://gist.github.com/paulirish/5438650
 *
 * По спецификации должна быть монотонной, а Date.now() может прыгать
 * см PLAYERWEB-1710
 *
 * поэтому делаем доп. ограничение
 */

var performanceNowShim = function performanceNowShim() {
  var perfNow = (0,_date_dateNow__WEBPACK_IMPORTED_MODULE_0__.dateNow)() - nowOffset;
  lastPerfNow = Math.max(perfNow, lastPerfNow);
  return lastPerfNow;
};
/**
 * performance.now() ponyfill
 */

var performanceNow = isPerformanceNowSupported ? function () {
  return performance.now();
} : function () {
  return performanceNowShim();
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/portion/RANDOM.js":
/*!******************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/portion/RANDOM.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RANDOM": function() { return /* binding */ RANDOM; }
/* harmony export */ });
/* harmony import */ var _Math_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/random */ "./node_modules/@yandex-int/any.common/ts/Math/random/index.js");

/**
 * Случайное число, по которому определяется,
 * попал ли пользователь в юзер-группу для логирования событий на процент
 *
 * Например если событие логируется на 5% пользователей и RANDOM=0.04 - событие будет залогировано
 * При RANDOM=0.06 событие, логируемое на 5%, залогировано НЕ будет
 */

var RANDOM = (0,_Math_random__WEBPACK_IMPORTED_MODULE_0__.random)();

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/portion/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/portion/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portion": function() { return /* binding */ portion; }
/* harmony export */ });
/* harmony import */ var _Math_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/random */ "./node_modules/@yandex-int/any.common/ts/Math/random/index.js");
/* harmony import */ var _RANDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RANDOM */ "./node_modules/@yandex-int/any.common/ts/portion/RANDOM.js");


function portion(proportion, successCallback, failCallback, ignoreConstantResult) {
  if (ignoreConstantResult === void 0) {
    ignoreConstantResult = false;
  }

  var randomValue = ignoreConstantResult ? (0,_Math_random__WEBPACK_IMPORTED_MODULE_0__.random)() : _RANDOM__WEBPACK_IMPORTED_MODULE_1__.RANDOM;
  var success = randomValue < proportion;
  var callback = success ? successCallback : failCallback;

  if (typeof callback === 'function') {
    callback();
  }

  return success;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/removeNodeFromParent/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/removeNodeFromParent/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeNodeFromParent": function() { return /* binding */ removeNodeFromParent; }
/* harmony export */ });
function removeNodeFromParent(node) {
  if (!node) {
    return;
  }

  var parentElement = node.parentElement;

  if (parentElement) {
    parentElement.removeChild(node);
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/script/CHARSET_UTF_8.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/script/CHARSET_UTF_8.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHARSET_UTF_8": function() { return /* binding */ CHARSET_UTF_8; }
/* harmony export */ });
var CHARSET_UTF_8 = 'utf-8';

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadScriptLite": function() { return /* binding */ loadScriptLite; }
/* harmony export */ });
/* harmony import */ var _withCallbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withCallbacks */ "./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/withCallbacks/index.js");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/**
 * Функция, которая загружает js-скрипт в <head> переданного window.
 * Если не заполифиллены промисы - используйте версию из ./withCallbacks
 * Не обрабатывает ошибки загрузчки через CustomError.
 * Используйте, если CustomError не подключен и Вам важен размер бандла.
 */

function loadScriptLite(params) {
  return new Promise(function (onLoad, onError) {
    (0,_withCallbacks__WEBPACK_IMPORTED_MODULE_0__.loadScriptLite)(_extends({}, params, {
      onLoad: onLoad,
      onError: onError
    }));
  });
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/withCallbacks/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/withCallbacks/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadScriptLite": function() { return /* binding */ loadScriptLite; }
/* harmony export */ });
/* harmony import */ var _getHead___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../getHead/ */ "./node_modules/@yandex-int/any.common/ts/getHead/index.js");
/* harmony import */ var _noop___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../noop/ */ "./node_modules/@yandex-int/any.common/ts/noop/index.js");
/* harmony import */ var _removeNodeFromParent___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../removeNodeFromParent/ */ "./node_modules/@yandex-int/any.common/ts/removeNodeFromParent/index.js");
/* harmony import */ var _string_getRandomString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../string/getRandomString */ "./node_modules/@yandex-int/any.common/ts/string/getRandomString.js");
/* harmony import */ var _CHARSET_UTF_8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CHARSET_UTF_8 */ "./node_modules/@yandex-int/any.common/ts/script/CHARSET_UTF_8.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var CHECK_LOAD_DEFAULT = function CHECK_LOAD_DEFAULT(script) {
  return true;
};
/**
 * Функция, которая загружает js-скрипт в <head> переданного window.
 * Работает через коллбеки - для версии на промисах используйте версию из ../
 * Не обрабатывает ошибки загрузчки через CustomError.
 * Используйте, если CustomError не подключен и Вам важен размер бандла.
 */


function loadScriptLite(params) {
  var _params$dropCacheOnRe = params.dropCacheOnRetry,
      dropCacheOnRetry = _params$dropCacheOnRe === void 0 ? false : _params$dropCacheOnRe,
      _params$onBeforeLoad = params.onBeforeLoad,
      onBeforeLoad = _params$onBeforeLoad === void 0 ? _noop___WEBPACK_IMPORTED_MODULE_1__.noop : _params$onBeforeLoad,
      _params$retries = params.retries,
      retries = _params$retries === void 0 ? 0 : _params$retries;

  if (params.checkLoad && params.checkLoad()) {
    if (params.onLoad) {
      params.onLoad();
    }

    return;
  }

  var wrappedBeforeLoad = onBeforeLoad;
  var currentRetry = 0;

  if (dropCacheOnRetry && retries > 0) {
    wrappedBeforeLoad = function wrappedBeforeLoad(script) {
      onBeforeLoad(script);

      if (currentRetry > 0) {
        var queryStringDelimiter = script.src.indexOf('?') === -1 ? '?' : '&';
        var randomParam = (0,_string_getRandomString__WEBPACK_IMPORTED_MODULE_3__.getRandomString)(4);
        script.src += queryStringDelimiter + randomParam;
      }

      currentRetry++;
    };
  }

  return loadScriptLiteInternal(_extends({}, params, {
    onBeforeLoad: wrappedBeforeLoad
  }));
}

function loadScriptLiteInternal(params) {
  var src = params.src,
      _params$win = params.win,
      win = _params$win === void 0 ? window : _params$win,
      _params$charset = params.charset,
      charset = _params$charset === void 0 ? _CHARSET_UTF_8__WEBPACK_IMPORTED_MODULE_4__.CHARSET_UTF_8 : _params$charset,
      _params$async = params.async,
      asyncAttrValue = _params$async === void 0 ? true : _params$async,
      _params$retries2 = params.retries,
      retries = _params$retries2 === void 0 ? 0 : _params$retries2,
      _params$onRetry = params.onRetry,
      onRetry = _params$onRetry === void 0 ? _noop___WEBPACK_IMPORTED_MODULE_1__.noop : _params$onRetry,
      _params$retryDelay = params.retryDelay,
      retryDelay = _params$retryDelay === void 0 ? 0 : _params$retryDelay,
      _params$checkLoad = params.checkLoad,
      checkLoad = _params$checkLoad === void 0 ? CHECK_LOAD_DEFAULT : _params$checkLoad,
      _params$onBeforeLoad2 = params.onBeforeLoad,
      onBeforeLoad = _params$onBeforeLoad2 === void 0 ? _noop___WEBPACK_IMPORTED_MODULE_1__.noop : _params$onBeforeLoad2,
      _params$onLoad = params.onLoad,
      onLoad = _params$onLoad === void 0 ? _noop___WEBPACK_IMPORTED_MODULE_1__.noop : _params$onLoad,
      _params$onError = params.onError,
      onError = _params$onError === void 0 ? _noop___WEBPACK_IMPORTED_MODULE_1__.noop : _params$onError;
  var scriptElement = win.document.createElement('script');

  var loadHandler = function loadHandler() {
    return checkLoad(scriptElement) ? onLoad() : errorHandler(new Error("checkLoad for " + src + " failed"));
  };

  var errorHandler = function errorHandler(e) {
    if (retries > 0) {
      onRetry(e);
      loadScriptLiteInternal(_extends({}, params, {
        src: src,
        retries: retries - 1
      }));
    } else {
      onError(e);
    }

    (0,_removeNodeFromParent___WEBPACK_IMPORTED_MODULE_2__.removeNodeFromParent)(scriptElement);
  };

  var retryHandler = function retryHandler(e) {
    try {
      win.setTimeout(function () {
        errorHandler(e);
      }, retryDelay);
    } catch (e) {// может кинуть ошибку, если targetWin уже удален
    }
  };

  scriptElement.type = 'text/javascript';
  scriptElement.async = asyncAttrValue;
  scriptElement.onload = loadHandler;
  scriptElement.onerror = retryHandler;
  scriptElement.src = src;
  scriptElement.charset = charset;
  onBeforeLoad(scriptElement);
  (0,_getHead___WEBPACK_IMPORTED_MODULE_0__.getHead)(win).appendChild(scriptElement);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/sendBeacon/isNativeSendBeaconSupported/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/sendBeacon/isNativeSendBeaconSupported/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNativeSendBeaconSupported": function() { return /* binding */ isNativeSendBeaconSupported; }
/* harmony export */ });
/* harmony import */ var _NativeMethods_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../NativeMethods/checkNativeCode */ "./node_modules/@yandex-int/any.common/ts/NativeMethods/checkNativeCode.js");

var isNativeSendBeaconSupported = function isNativeSendBeaconSupported(window) {
  return (0,_NativeMethods_checkNativeCode__WEBPACK_IMPORTED_MODULE_0__.checkNativeCode)(window.navigator.sendBeacon);
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/sendBeacon/sendBeaconShim/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/sendBeacon/sendBeaconShim/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendBeaconShim": function() { return /* binding */ sendBeaconShim; }
/* harmony export */ });
/* harmony import */ var _isNativeSendBeaconSupported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isNativeSendBeaconSupported */ "./node_modules/@yandex-int/any.common/ts/sendBeacon/isNativeSendBeaconSupported/index.js");

var isSupportedSendBeacon = (0,_isNativeSendBeaconSupported__WEBPACK_IMPORTED_MODULE_0__.isNativeSendBeaconSupported)(window);
function sendBeaconShim(url, data) {
  if (!isSupportedSendBeacon) {
    return false;
  }

  return window.navigator.sendBeacon(url, data);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/string/getRandomChar.js":
/*!************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/string/getRandomChar.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomChar": function() { return /* binding */ getRandomChar; }
/* harmony export */ });
/* harmony import */ var _number_getRandomInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number/getRandomInt */ "./node_modules/@yandex-int/any.common/ts/number/getRandomInt.js");

function getRandomChar(from, to) {
  if (from === void 0) {
    from = 'a';
  }

  if (to === void 0) {
    to = 'z';
  }

  var charCode = (0,_number_getRandomInt__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(from.charCodeAt(0), to.charCodeAt(0));
  return String.fromCharCode(charCode);
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/string/getRandomString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/string/getRandomString.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomString": function() { return /* binding */ getRandomString; }
/* harmony export */ });
/* harmony import */ var _getRandomChar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomChar */ "./node_modules/@yandex-int/any.common/ts/string/getRandomChar.js");

function getRandomString(len) {
  var res = [];

  for (var i = 0; i < len; i++) {
    res.push((0,_getRandomChar__WEBPACK_IMPORTED_MODULE_0__.getRandomChar)());
  }

  return res.join('');
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/string/isString.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/string/isString.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isString": function() { return /* binding */ isString; }
/* harmony export */ });
function isString(value) {
  return typeof value === 'string';
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/supportsES2017/detectES2017Support.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/supportsES2017/detectES2017Support.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectES2017Support": function() { return /* binding */ detectES2017Support; }
/* harmony export */ });
/* harmony import */ var _sendBeacon_isNativeSendBeaconSupported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sendBeacon/isNativeSendBeaconSupported */ "./node_modules/@yandex-int/any.common/ts/sendBeacon/isNativeSendBeaconSupported/index.js");
/* harmony import */ var _supportsScriptNoModule_supportsScriptNoModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supportsScriptNoModule/supportsScriptNoModule */ "./node_modules/@yandex-int/any.common/ts/supportsScriptNoModule/supportsScriptNoModule.js");


/**
 * Same as noModule check BUT with additional filter
 * * filter out safari 11 since it has syntax error
 * REFS:
 * * https://webkit.org/blog/8216/new-webkit-features-in-safari-11-1/
 * * https://webkit.org/blog/8001/release-notes-for-safari-technology-preview-42/
 * * https://trac.webkit.org/changeset/223043/webkit/
 * * https://bugs.webkit.org/show_bug.cgi?id=176685
 */

var detectES2017Support = function detectES2017Support(win) {
  return (0,_supportsScriptNoModule_supportsScriptNoModule__WEBPACK_IMPORTED_MODULE_1__.supportsScriptNoModule)(win) && (0,_sendBeacon_isNativeSendBeaconSupported__WEBPACK_IMPORTED_MODULE_0__.isNativeSendBeaconSupported)(win);
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/supportsScriptNoModule/supportsScriptNoModule.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/supportsScriptNoModule/supportsScriptNoModule.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsScriptNoModule": function() { return /* binding */ supportsScriptNoModule; }
/* harmony export */ });
/**
 * Determine at runtime if browser supports ES2017 modules
 *
 * REFS: https://st.yandex-team.ru/ADSDK-245, https://st.yandex-team.ru/PCODE-9881
 *
 * ❗️ ATTENTION !
 *
 * __AVOID USAGE OF SCRIPT WITH type="nomodule"__
 *
 * IE AND SAFARI loads script with type='module' but following runtime check would fail
 * https://github.com/philipwalton/webpack-esnext-boilerplate/issues/1
 *
 * Safari 10.1 downloads nomodule bundle too. ALSO it executes both modern and legacy versions!
 *
 * Safari 11 considered as modern BUT be careful
 * @see supportsES2017 to filter out and considerations
 *
 * The implementations in the Windows browsers varies.
 *
 * Chrome does not download the nomodule bundle.
 *
 * Firefox 55 has nomodule support (bugzilla.mozilla.org/show_bug.cgi?id=1330900)
 * but still downloads both bundles. The issue is
 * tracked in this bugzilla report: bugzilla.mozilla.org/show_bug.cgi?id=1382020
 * And Firefox 55 and 57 not only download but also execute the legacy code.
 *
 * Edge 15-16: two downloads ⚠️ (nomodule and module)
 * Edge 17-18: three downloads ❌ (nomodule and module x2)
 * ALSO executes both scripts https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11865922/
 *
 * __TABLE__: https://gist.github.com/jakub-g/5fc11af85a061ca29cc84892f1059fec
 * __REFS__:
 * * https://philipwalton.com/articles/deploying-es2015-code-in-production-today/
 * * https://jakearchibald.com/2017/es-modules-in-browsers/
 * * CRA: https://github.com/facebook/create-react-app/pull/4964
 *
 * @see __es2017__
 */
var supportsScriptNoModule = function supportsScriptNoModule(win) {
  try {
    // do not trigger [[GET]], it would trigger exception
    if ('noModule' in win.HTMLScriptElement.prototype) {
      return true;
    }
  } catch (_a) {
    /* ignore */
  }

  return false;
};

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/tryCatch/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/tryCatch/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryCatch": function() { return /* binding */ tryCatch; }
/* harmony export */ });
function tryCatch(fn, onError) {
  try {
    return fn();
  } catch (e) {
    if (typeof onError === 'function') {
      onError(e);
    }
  }
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/url/PARSE_LINK_ELEMENT.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/url/PARSE_LINK_ELEMENT.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PARSE_LINK_ELEMENT": function() { return /* binding */ PARSE_LINK_ELEMENT; }
/* harmony export */ });
/**
 * Элемент, посредством которого будем парсить ссылки
 */
var PARSE_LINK_ELEMENT = document.createElement('a');

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/url/getQueryParameter/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/url/getQueryParameter/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueryParameter": function() { return /* binding */ getQueryParameter; }
/* harmony export */ });
/**
 * Извлекает из URL значение строкового параметра.
 * Если нужно извлечь несколько параметров, лучше использовать `getParamsFromUrl`
 */
function getQueryParameter(paramName, url) {
  // https://regex101.com/r/BDZIl1/2
  var paramReg = new RegExp("[?&]" + paramName + "=*([^&#]*)", 'g');
  var matches = null;
  var newMatches = null; // tslint:disable-next-line:no-conditional-assignment

  while (newMatches = paramReg.exec(url)) {
    matches = newMatches;
  }

  return matches && typeof matches[1] === 'string' ? decodeURIComponent(matches[1]) : undefined;
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/url/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/url/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addParamToUrl": function() { return /* binding */ addParamToUrl; },
/* harmony export */   "addParamsToUrl": function() { return /* binding */ addParamsToUrl; },
/* harmony export */   "formatQueryString": function() { return /* binding */ formatQueryString; },
/* harmony export */   "getFileExt": function() { return /* binding */ getFileExt; },
/* harmony export */   "getFileName": function() { return /* binding */ getFileName; },
/* harmony export */   "getParamsFromUrl": function() { return /* binding */ getParamsFromUrl; },
/* harmony export */   "getPostProtocolIndex": function() { return /* binding */ getPostProtocolIndex; },
/* harmony export */   "parseQueryString": function() { return /* binding */ parseQueryString; },
/* harmony export */   "parseUrl": function() { return /* binding */ parseUrl; },
/* harmony export */   "parseUrlUsingCache": function() { return /* binding */ parseUrlUsingCache; },
/* harmony export */   "urlFromUrlObject": function() { return /* binding */ urlFromUrlObject; }
/* harmony export */ });
/* harmony import */ var _array_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/isArray */ "./node_modules/@yandex-int/any.common/ts/array/isArray.js");
/* harmony import */ var _function_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function/memoize */ "./node_modules/@yandex-int/any.common/ts/function/memoize/index.js");
/* harmony import */ var _Object_forOwn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Object/forOwn */ "./node_modules/@yandex-int/any.common/ts/Object/forOwn/index.js");
/* harmony import */ var _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PARSE_LINK_ELEMENT */ "./node_modules/@yandex-int/any.common/ts/url/PARSE_LINK_ELEMENT.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var PRE_PROTOCOL_STRING = '//';
var PRE_PROTOCOL_STRING_LENGTH = 2;
var parseUrlUsingCache = (0,_function_memoize__WEBPACK_IMPORTED_MODULE_1__.memoize)(function (url) {
  var urlObj = parseUrl(url);
  return _extends({}, urlObj);
});
var parseUrlExceptionalProtocolRegexp = /^(android-app:|chrome-extension:)/;
function parseUrl(url) {
  _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.href = url;
  var pathname = _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.pathname || '';

  if (pathname.charAt(0) !== '/') {
    pathname = "/" + pathname;
  }

  var searchAndHash = (_PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.search || '') + (_PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.hash || '');
  var pos = url.lastIndexOf(searchAndHash);
  var originalPath = pos === -1 ? url : url.slice(0, pos); // ADSDK-684 - браузер неправильно определяет host, если указаны некоторые протоколы
  // При этом если поменять на протокол https, то он определяется верно

  if (parseUrlExceptionalProtocolRegexp.test(url)) {
    var urlObject = parseUrl(url.replace(parseUrlExceptionalProtocolRegexp, 'https:'));
    _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.href = url;
    return _extends({}, urlObject, {
      originalPath: originalPath,
      protocol: url.slice(0, url.indexOf(':') + 1),
      href: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.href
    });
  } // PCODE-11831 - в ие иногда urlObject.protocol === ':'


  var protocol = _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.protocol && /^[a-z\-]+:/i.test(_PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.protocol) ? _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.protocol : '';
  return {
    originalPath: originalPath,
    href: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.href,
    protocol: protocol,
    host: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.host,
    hostname: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.hostname,
    port: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.port,
    pathname: pathname,
    search: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.search,
    hash: _PARSE_LINK_ELEMENT__WEBPACK_IMPORTED_MODULE_3__.PARSE_LINK_ELEMENT.hash
  };
}
function urlFromUrlObject(urlObject, saveOriginalPath) {
  if (saveOriginalPath === void 0) {
    saveOriginalPath = false;
  }

  if (saveOriginalPath) {
    var originalPath = urlObject.originalPath; // Определяем, нужно ли поставить слеш после originalPath.
    // Если originalPath - абсолютный путь без слеша на конце, и pathname пустой, то ставим.
    // Иначе - не ставим.

    var placeSlash = urlObject.pathname === '/' && originalPath[originalPath.length - 1] !== '/';
    return "" + urlObject.originalPath + (placeSlash ? '/' : '') + urlObject.search + urlObject.hash;
  }

  var host = urlObject.port === '443' || urlObject.port === '80' ? urlObject.hostname : urlObject.host;
  return urlObject.protocol + "//" + host + urlObject.pathname + urlObject.search + urlObject.hash;
}

var decodeValue = function decodeValue(value) {
  try {
    return decodeURIComponent(value);
  } catch (e) {
    return value;
  }
}; // parse only VALID search or hash part of URL


function parseQueryString(qs) {
  var result = {};
  var qsBody = qs.replace(/^[?#]+/, '').replace(/#.*$/, '');
  var params = qsBody.split('&');

  for (var i = 0; i < params.length; i++) {
    var index = params[i].indexOf('=');
    var key = void 0;
    var value = void 0;

    if (index === -1) {
      key = decodeValue(params[i]);
      value = '';
    } else {
      key = decodeValue(params[i].slice(0, index));
      value = params[i].slice(index + 1);
    }

    if (key) {
      var isValueArray = Boolean(/(\[\])$/.exec(key));
      key = key.replace(/\[\]$/, '');

      if (!isValueArray) {
        result[key] = decodeValue(value);
      } else if (result[key] === undefined) {
        result[key] = [decodeValue(value)];
      } else {
        result[key] = [].concat(result[key], decodeValue(value));
      }
    }
  }

  return result;
}
function getParamsFromUrl(url) {
  return parseQueryString(parseUrl(url).search);
}

var createQueryArrayParam = function createQueryArrayParam(key, arr) {
  return arr.map(function (el) {
    return key + "[]=" + encodeURIComponent(el);
  }).join('&');
};

function formatQueryString(queryObj) {
  var result = [];

  for (var key in queryObj) {
    if (queryObj.hasOwnProperty(key)) {
      var value = queryObj[key];

      if ((0,_array_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
        result.push(createQueryArrayParam(key, value));
      } else if (value !== undefined) {
        result.push(key + "=" + encodeURIComponent(value));
      }
    }
  }

  return "?" + result.join('&');
} // Appends a query parameters to a url.

function addParamToUrl(url, key, value) {
  if (value === undefined) {
    return url;
  }

  var urlObj = parseUrl(url);
  var queryObj = parseQueryString(urlObj.search);
  queryObj[key] = value;
  return urlFromUrlObject(_extends({}, urlObj, {
    search: formatQueryString(queryObj)
  }));
}
function addParamsToUrl(url, params, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$override = _ref.override,
      override = _ref$override === void 0 ? true : _ref$override,
      _ref$saveOriginalPath = _ref.saveOriginalPath,
      saveOriginalPath = _ref$saveOriginalPath === void 0 ? false : _ref$saveOriginalPath;

  var urlObj = parseUrl(url);
  var queryStringObject = parseQueryString(urlObj.search);
  (0,_Object_forOwn__WEBPACK_IMPORTED_MODULE_2__.forOwn)(params, function (value, key) {
    if (queryStringObject[key] === undefined || override) {
      queryStringObject[key] = value;
    }
  });
  var search = formatQueryString(queryStringObject);
  return urlFromUrlObject(_extends({}, urlObj, {
    search: search
  }), saveOriginalPath);
}
/**
 * Возвращет индекс символа идущего сразу после записи протокола
 *
 * @param url - урл, который может и не содержать в себе записи протокола
 */

function getPostProtocolIndex(url) {
  var result = url.indexOf(PRE_PROTOCOL_STRING);
  return result !== -1 ? result + PRE_PROTOCOL_STRING_LENGTH : 0;
}
function getFileName(url) {
  return parseUrl(url).pathname.split('/').pop() || '';
}
function getFileExt(url) {
  var parts = getFileName(url).split('.');
  return parts.length > 1 ? parts.pop() : '';
}

/***/ }),

/***/ "./node_modules/detectie/detectie.js":
/*!*******************************************!*\
  !*** ./node_modules/detectie/detectie.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
var detectie = function detectie(win) {
  if (!win) {
    win = window;
  }

  var ua = win.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // IE 12 => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return false;
};

module.exports = detectie;

/***/ }),

/***/ "./vendors/promise.js":
/*!****************************!*\
  !*** ./vendors/promise.js ***!
  \****************************/
/***/ (function(module) {

/* eslint-disable */
// file from the promis package. do not modify
var f;
var g = [];

function l(a) {
  g.push(a);
  g.length == 1 && f();
}

function m() {
  for (; g.length;) {
    g[0](), g.shift();
  }
}

f = function f() {
  setTimeout(m);
};

function n(a) {
  this.a = p;
  this.b = void 0;
  this.f = [];
  var b = this;

  try {
    a(function (a) {
      q(b, a);
    }, function (a) {
      r(b, a);
    });
  } catch (c) {
    r(b, c);
  }
}

var p = 2;

function t(a) {
  return new n(function (b, c) {
    c(a);
  });
}

function u(a) {
  return new n(function (b) {
    b(a);
  });
}

function q(a, b) {
  if (a.a == p) {
    if (b == a) {
      throw new TypeError();
    }

    var c = !1;

    try {
      var d = b && b.then;

      if (b != null && typeof b === 'object' && typeof d === 'function') {
        d.call(b, function (b) {
          c || q(a, b);
          c = !0;
        }, function (b) {
          c || r(a, b);
          c = !0;
        });
        return;
      }
    } catch (e) {
      c || r(a, e);
      return;
    }

    a.a = 0;
    a.b = b;
    v(a);
  }
}

function r(a, b) {
  if (a.a == p) {
    if (b == a) {
      throw new TypeError();
    }

    a.a = 1;
    a.b = b;
    v(a);
  }
}

function v(a) {
  l(function () {
    if (a.a != p) {
      for (; a.f.length;) {
        var b = a.f.shift(),
            c = b[0],
            d = b[1],
            e = b[2],
            b = b[3];

        try {
          a.a == 0 ? typeof c === 'function' ? e(c.call(void 0, a.b)) : e(a.b) : a.a == 1 && (typeof d === 'function' ? e(d.call(void 0, a.b)) : b(a.b));
        } catch (h) {
          b(h);
        }
      }
    }
  });
}

n.prototype.g = function (a) {
  return this.c(void 0, a);
};

n.prototype.c = function (a, b) {
  var c = this;
  return new n(function (d, e) {
    c.f.push([a, b, d, e]);
    v(c);
  });
};

function w(a) {
  return new n(function (b, c) {
    function d(c) {
      return function (d) {
        h[c] = d;
        e += 1;
        e == a.length && b(h);
      };
    }

    var e = 0;
    var h = [];
    a.length == 0 && b(h);

    for (var k = 0; k < a.length; k += 1) {
      u(a[k]).c(d(k), c);
    }
  });
}

function x(a) {
  return new n(function (b, c) {
    for (var d = 0; d < a.length; d += 1) {
      u(a[d]).c(b, c);
    }
  });
}

n.resolve = u;
n.reject = t;
n.race = x;
n.all = w;
n.prototype.then = n.prototype.c;
n.prototype["catch"] = n.prototype.g;
module.exports = window.Promise || n;

/***/ }),

/***/ "./zendex.config.js":
/*!**************************!*\
  !*** ./zendex.config.js ***!
  \**************************/
/***/ (function(module) {

module.exports = {
  config: {
    staticApi: 'static.dzeninfra.ru',
    strmApi: 'cdn.dzen.ru',
    gogolApi: 'log.dzen.ru',
    s3: 's3.dzeninfra.ru',
    avatars: 'avatars.dzeninfra.ru'
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*****************************************!*\
  !*** ./src/ts/PlayerApiLoader/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_v2_playerApiLoaderDebugNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/v2/playerApiLoaderDebugNamespace */ "./src/ts/util/v2/playerApiLoaderDebugNamespace.ts");
/* harmony import */ var _util_v2_playerApiLoaderNamespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/v2/playerApiLoaderNamespace */ "./src/ts/util/v2/playerApiLoaderNamespace.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./src/ts/PlayerApiLoader/init.ts");
/* harmony import */ var _loadBundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadBundle */ "./src/ts/PlayerApiLoader/loadBundle.ts");
/* harmony import */ var _preloadScripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloadScripts */ "./src/ts/PlayerApiLoader/preloadScripts/index.ts");
/* harmony import */ var _yandex_int_any_common_ts_isFunction___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yandex-int/any.common/ts/isFunction/ */ "./node_modules/@yandex-int/any.common/ts/isFunction/index.js");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");






var initDefined = (0,_yandex_int_any_common_ts_isFunction___WEBPACK_IMPORTED_MODULE_5__.isFunction)(_util_v2_playerApiLoaderNamespace__WEBPACK_IMPORTED_MODULE_1__.playerApiLoaderNamespace.init); // cleanup bundle reference on loader init
// because loader may work incorrectly if `window.Ya.streamPlayer.create` is already defined

(0,_loadBundle__WEBPACK_IMPORTED_MODULE_3__._cleanup)(); // Если `init` уже определен, то переопределять его нельзя, т.к. это даст замедление.
// `init` может быть определен в случае, когда после вставки скрипта плеера кто-то подключает лоадер,
// либо вставил лоадер 2 раза.


if (!initDefined) {
  _util_v2_playerApiLoaderNamespace__WEBPACK_IMPORTED_MODULE_1__.playerApiLoaderNamespace.init = _init__WEBPACK_IMPORTED_MODULE_2__.init;
  _util_v2_playerApiLoaderNamespace__WEBPACK_IMPORTED_MODULE_1__.playerApiLoaderNamespace.preloadScripts = _preloadScripts__WEBPACK_IMPORTED_MODULE_4__.preloadScripts;
} else {
  // Если `init` был определен, то preloadScripts может быть определен (повторная вставка лоадера).
  // В случае вставки через линкер, preload определяется снаружи, поэтому определяем метод, как
  // безопасную заглушку с соответствующими типами.
  _util_v2_playerApiLoaderNamespace__WEBPACK_IMPORTED_MODULE_1__.playerApiLoaderNamespace.preloadScripts = _util_v2_playerApiLoaderNamespace__WEBPACK_IMPORTED_MODULE_1__.playerApiLoaderNamespace.preloadScripts || function () {
    return Promise.resolve([]);
  };
}

_util_v2_playerApiLoaderDebugNamespace__WEBPACK_IMPORTED_MODULE_0__.playerApiLoaderDebugNamespace._cleanup = _loadBundle__WEBPACK_IMPORTED_MODULE_3__._cleanup;
}();
/******/ })()
;
