/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/public-types/src/PlayerApiEvents.ts":
/*!******************************************************!*\
  !*** ./packages/public-types/src/PlayerApiEvents.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerApiEventName": function() { return /* binding */ PlayerApiEventName; }
/* harmony export */ });
var PlayerApiEventName;

(function (PlayerApiEventName) {
  PlayerApiEventName["Ready"] = "Ready";
  PlayerApiEventName["SkinReady"] = "SkinReady";
  PlayerApiEventName["PosterReady"] = "PosterReady";
  PlayerApiEventName["UserReady"] = "UserReady";
  PlayerApiEventName["Destroy"] = "Destroy";
  PlayerApiEventName["ContentImpression"] = "ContentImpression";
  PlayerApiEventName["ResourcesIdle"] = "ResourcesIdle";
  PlayerApiEventName["SourceChange"] = "SourceChange";
  PlayerApiEventName["StreamChange"] = "StreamChange";
  PlayerApiEventName["StreamsWithSupportInfoChange"] = "StreamsWithSupportInfoChange";
  PlayerApiEventName["StartStageChange"] = "StartStageChange";
  PlayerApiEventName["PlayingStateChange"] = "PlayingStateChange";
  PlayerApiEventName["RequestPlayingState"] = "RequestPlayingState";
  PlayerApiEventName["VideoTypeChange"] = "VideoTypeChange";
  PlayerApiEventName["UtcStartTimeChange"] = "UtcStartTimeChange";
  PlayerApiEventName["DVRStartTimeChange"] = "DVRStartTimeChange";
  PlayerApiEventName["DVRDurationChange"] = "DVRDurationChange";
  PlayerApiEventName["CurrentTimeChange"] = "CurrentTimeChange";
  PlayerApiEventName["WatchedTimeChange"] = "WatchedTimeChange";
  PlayerApiEventName["LiveLatencyChange"] = "LiveLatencyChange";
  PlayerApiEventName["DurationChange"] = "DurationChange";
  PlayerApiEventName["VolumeChange"] = "VolumeChange";
  PlayerApiEventName["MutedChange"] = "MutedChange";
  PlayerApiEventName["VolumeChangeReasonChange"] = "VolumeChangeReasonChange";
  PlayerApiEventName["FullscreenStateChange"] = "FullscreenStateChange";
  PlayerApiEventName["PictureInPictureStateChange"] = "PictureInPictureStateChange";
  PlayerApiEventName["VisibleStateChange"] = "VisibleStateChange";
  PlayerApiEventName["VideoSizeChange"] = "VideoSizeChange";
  PlayerApiEventName["VideoTracksChange"] = "VideoTracksChange";
  PlayerApiEventName["VideoTrackChange"] = "VideoTrackChange";
  PlayerApiEventName["AudioTracksChange"] = "AudioTracksChange";
  PlayerApiEventName["AudioTrackChange"] = "AudioTrackChange";
  PlayerApiEventName["TextTracksChange"] = "TextTracksChange";
  PlayerApiEventName["TextTrackChange"] = "TextTrackChange";
  PlayerApiEventName["SubtitlesChange"] = "SubtitlesChange";
  PlayerApiEventName["ErrorChange"] = "ErrorChange";
  PlayerApiEventName["PlaybackRateRangeChange"] = "PlaybackRateRangeChange";
  PlayerApiEventName["PlaybackRateChange"] = "PlaybackRateChange";
  PlayerApiEventName["AdStateChange"] = "AdStateChange";
  PlayerApiEventName["NextAdRemainingTimeChange"] = "NextAdRemainingTimeChange";
  PlayerApiEventName["BeforeAdPodStart"] = "BeforeAdPodStart";
  PlayerApiEventName["AdPodStart"] = "AdPodStart";
  PlayerApiEventName["AdPodSkip"] = "AdPodSkip";
  PlayerApiEventName["AdPodEnd"] = "AdPodEnd";
  PlayerApiEventName["AdSkippableStateChange"] = "AdSkippableStateChange";
  PlayerApiEventName["AdVolumeAvailabilityStateChange"] = "AdVolumeAvailabilityStateChange";
  PlayerApiEventName["AdPodCloseStateChange"] = "AdPodCloseStateChange";
  PlayerApiEventName["AdPodDurationChange"] = "AdPodDurationChange";
  PlayerApiEventName["AdPodCurrentTimeChange"] = "AdPodCurrentTimeChange";
  PlayerApiEventName["AdPodTimeToSkipChange"] = "AdPodTimeToSkipChange";
  PlayerApiEventName["AdPodFullyClickableStateChange"] = "AdPodFullyClickableStateChange";
  PlayerApiEventName["AdInteraction"] = "AdInteraction";
  PlayerApiEventName["BufferedRangesChange"] = "BufferedRangesChange";
  PlayerApiEventName["TileMetaInfoChange"] = "TileMetaInfoChange";
  PlayerApiEventName["TileMetaInfoUrlChange"] = "TileMetaInfoUrlChange";
  PlayerApiEventName["VideoClickerEvent"] = "VideoClickerEvent";
  PlayerApiEventName["NetworkStatusChange"] = "NetworkStatusChange";
  PlayerApiEventName["RecoverStart"] = "RecoverStart";
  PlayerApiEventName["ConnectionQualityChange"] = "ConnectionQualityChange";
  PlayerApiEventName["DrmSystemChange"] = "DrmSystemChange";
})(PlayerApiEventName || (PlayerApiEventName = {}));

/***/ }),

/***/ "./packages/public-types/src/Trackings.ts":
/*!************************************************!*\
  !*** ./packages/public-types/src/Trackings.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceTypeMacro": function() { return /* binding */ DeviceTypeMacro; },
/* harmony export */   "DeviceTypeMediascopeMacro": function() { return /* binding */ DeviceTypeMediascopeMacro; },
/* harmony export */   "DeviceTypeTnsMacro": function() { return /* binding */ DeviceTypeTnsMacro; },
/* harmony export */   "MacroName": function() { return /* binding */ MacroName; }
/* harmony export */ });
/**
 * # Трекинги в плеере
 *
 * ## Проблема
 * Поставщики контента хотят получать события о том, как их контент проигрывается в нашем плеере.
 * Каждый поставщик пытается навязать свой способ "слежки" за контентом:
 * от обычных пикселей до кастомного js-кода.
 * Все эти коды нужно "селить" в каком-то проекте и опять же поддерживать.
 *
 * ## Решение
 * Пришли к следующему выводу - реализовать декларативное JSON-API в плеере на подобие
 * TrackingEvents из [VAST](https://www.iab.com/wp-content/uploads/2015/06/VASTv3_0.pdf),
 * ограничив фантазию на входе только http-трекингами (пикселями).
 *
 * ## Описание формата
 * Корневой элемент в формате - `trackingEvents`.
 * Это объект, содержащий внутри себя всю информацию о типах трекингов.
 * Название типов трекингов выступают ключами объекта `trackingEvents`.
 * Значения ключей - массивы, содержащие необходимые трекинги:
 * ```JSON
 * {
 *     "trackingEvents": {
 *         "firstQuartile": [
 *             "http://example.com/firstQuartilePixel.gif"
 *         ]
 *     }
 * }
 * ```
 *
 * Сами трекинги могут быть как обычными строками, содержащими ссылку на ресурс,
 * так и представлять из себя массивы, где первый элемент - строковое представление ссылки на ресурс,
 * а второй - объект с параметрами, описывающими правила осуществления трекинга
 * (это нужно, например, для цикличных трекингов, которые запрашиваются раз в определённый интервал).
 *
 * ```JSON
 * {
 *    "trackingEvents": {
 *        "heartbeat": [
 *            [
 *                "http://example.com/heartbeat.gif", {
 *                    "delay": 1000,
 *                    "offset": 1000
 *                 }
 *            ]
 *        ],
 *        "viewed": [
 *            [
 *                "http://example.com/viewed.gif", {
 *                    "percent": 90
 *                }
 *            ]
 *        ]
 *    }
 * }
 * ```
 *
 * ## Поддерживаемые события в `trackingEvents`
 * См. описание типа [[TrackingEvents]].
 *
 * ## Макросы
 * Трекинговая ссылка может содержать в себе макросы,
 * которые подменяются на значения, проставляемые плеером, перед вызовом ссылки.
 *
 * ### Формат макроса
 * `{{macro_name}}`
 *
 * ### Пример
 * `http://example.com/heartbeat.gif?blah=1&page={{dl}}`
 *
 * ### Поддерживаемые макросы
 * См. описание типа [[MacroName]].
 */

/**
 * Массив трекинговых ссылок для событий без настроек.
 */

/**
 * Настройки трекингов heartbeat и watchedTime, которые можно ограничить по utc времени потока
 */

/**
 * Настройки события `heartbeat`.
 */

/**
 * Массив трекинговых ссылок для события `heartbeat` с настройками.
 */

/**
 * Настройки события `viewed`.
 */

/**
 * Массив трекинговых ссылок для события `viewed` с настройками.
 */

/**
 * Настройки события `watchedTime`.
 */

/**
 * Массив трекинговых ссылок для события `watchedTime` с настройками.
 */

/**
 * Объект с параметрами трекингов, сгруппированных по событиям.
 */

/**
 * Описание типа поля для трекингов в конфигурации плеера.
 */

/**
 * Возможные значения макроса `{{device-type}}`.
 */
var DeviceTypeMacro;
/**
 * Возможные значения макроса `{{device-type-mediascope}}`.
 */

(function (DeviceTypeMacro) {
  DeviceTypeMacro["DESKTOP"] = "d";
  DeviceTypeMacro["MOBILE"] = "m";
  DeviceTypeMacro["SMART_TV"] = "s";
})(DeviceTypeMacro || (DeviceTypeMacro = {}));

var DeviceTypeMediascopeMacro;
/**
 * Возможные значения макроса `{{device-type-tns}}`.
 */

(function (DeviceTypeMediascopeMacro) {
  DeviceTypeMediascopeMacro["DESKTOP"] = "desktop";
  DeviceTypeMediascopeMacro["MOBILE"] = "mobile";
  DeviceTypeMediascopeMacro["SMART_TV"] = "smarttv";
  DeviceTypeMediascopeMacro["TABLET"] = "tablet";
})(DeviceTypeMediascopeMacro || (DeviceTypeMediascopeMacro = {}));

var DeviceTypeTnsMacro;
/**
 * Названия поддерживаемых макросов.
 */

(function (DeviceTypeTnsMacro) {
  DeviceTypeTnsMacro["UNDEFINED"] = "0";
  DeviceTypeTnsMacro["DESKTOP"] = "1";
  DeviceTypeTnsMacro["IOS"] = "2";
  DeviceTypeTnsMacro["ANDROID"] = "3";
  DeviceTypeTnsMacro["WINDOWS_MOBILE"] = "4";
  DeviceTypeTnsMacro["SMART_TV"] = "5";
})(DeviceTypeTnsMacro || (DeviceTypeTnsMacro = {}));

var MacroName;

(function (MacroName) {
  MacroName["vsid"] = "vsid";
  MacroName["dl"] = "dl";
  MacroName["random"] = "random";
  MacroName["timestamp"] = "timestamp";
  MacroName["fts"] = "fts";
  MacroName["vts"] = "vts";
  MacroName["watched-time"] = "watched-time";
  MacroName["video-time"] = "video-time";
  MacroName["device-type"] = "device-type";
  MacroName["device-type-mediascope"] = "device-type-mediascope";
  MacroName["device-type-tns"] = "device-type-tns";
  MacroName["fullscreen"] = "fullscreen";
  MacroName["duration"] = "duration";
  MacroName["old-position"] = "old-position";
  MacroName["error-code"] = "error-code";
  MacroName["audio-track-name"] = "audio-track-name";
  MacroName["audio-track-lang"] = "audio-track-lang";
  MacroName["text-track-name"] = "text-track-name";
  MacroName["text-track-lang"] = "text-track-lang";
  MacroName["muted"] = "muted";
  MacroName["drm-supported"] = "drm-supported";
  MacroName["drm-type"] = "drm-type";
  MacroName["bitrate-video"] = "bitrate-video";
  MacroName["bitrate-audio"] = "bitrate-audio";
  MacroName["buffering-duration"] = "buffering-duration";
  MacroName["buffering-count"] = "buffering-count";
  MacroName["initial-buffering-time"] = "initial-buffering-time";
  MacroName["ad-position"] = "ad-position";
  MacroName["client-ad-sec"] = "client-ad-sec";
})(MacroName || (MacroName = {}));

/***/ }),

/***/ "./skin/src/constants/PLAYBACK_RATES.ts":
/*!**********************************************!*\
  !*** ./skin/src/constants/PLAYBACK_RATES.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PLAYBACK_RATE": function() { return /* binding */ DEFAULT_PLAYBACK_RATE; },
/* harmony export */   "MAX_PLAYBACK_RATE": function() { return /* binding */ MAX_PLAYBACK_RATE; },
/* harmony export */   "MIN_PLAYBACK_RATE": function() { return /* binding */ MIN_PLAYBACK_RATE; },
/* harmony export */   "PLAYBACK_RATES": function() { return /* binding */ PLAYBACK_RATES; }
/* harmony export */ });
var DEFAULT_PLAYBACK_RATE = 1;
var MIN_PLAYBACK_RATE = 0.25;
var MAX_PLAYBACK_RATE = 2;
var PLAYBACK_RATES = [MIN_PLAYBACK_RATE, 0.5, 0.75, DEFAULT_PLAYBACK_RATE, 1.25, 1.5, 1.75, MAX_PLAYBACK_RATE];

/***/ }),

/***/ "./src/ts/Error/BasePlayerError.ts":
/*!*****************************************!*\
  !*** ./src/ts/Error/BasePlayerError.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePlayerError": function() { return /* binding */ BasePlayerError; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_Error_CustomError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/Error/CustomError */ "./node_modules/@yandex-int/any.common/ts/Error/CustomError.js");
/* harmony import */ var _yandex_int_any_common_ts_string_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/any.common/ts/string/isString */ "./node_modules/@yandex-int/any.common/ts/string/isString.js");
/* harmony import */ var _yandex_int_any_common_ts_tryCatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yandex-int/any.common/ts/tryCatch */ "./node_modules/@yandex-int/any.common/ts/tryCatch/index.js");
/* harmony import */ var _getPlayerErrorCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPlayerErrorCategory */ "./src/ts/Error/getPlayerErrorCategory/index.ts");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Базовый класс плеерной ошибки с категорией
 */
var BasePlayerError = /*#__PURE__*/function (_CustomError) {
  _inheritsLoose(BasePlayerError, _CustomError);

  function BasePlayerError(errorObjectOrMessage, overridableFields) {
    var _this;

    _this = _CustomError.call(this, errorObjectOrMessage, overridableFields) || this;
    _this.category = void 0;
    _this.toJSON = void 0;
    _this.category = (0,_getPlayerErrorCategory__WEBPACK_IMPORTED_MODULE_3__.getPlayerErrorCategory)(_this.code);

    _this.toJSON = function () {
      return {
        message: _this.message,
        code: _this.code,
        isFatal: _this.isFatal,
        details: (0,_yandex_int_any_common_ts_tryCatch__WEBPACK_IMPORTED_MODULE_2__.tryCatch)(function () {
          return (0,_yandex_int_any_common_ts_string_isString__WEBPACK_IMPORTED_MODULE_1__.isString)(_this.details) ? _this.details : JSON.stringify(_this.details);
        }) || _this.details,
        stack: _this.stack,
        category: _this.category
      };
    };

    return _this;
  }

  return BasePlayerError;
}(_yandex_int_any_common_ts_Error_CustomError__WEBPACK_IMPORTED_MODULE_0__.CustomError);

/***/ }),

/***/ "./src/ts/Error/PlayerErrorCode.ts":
/*!*****************************************!*\
  !*** ./src/ts/Error/PlayerErrorCode.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerErrorCode": function() { return /* binding */ PlayerErrorCode; }
/* harmony export */ });
var PlayerErrorCode;

(function (PlayerErrorCode) {
  PlayerErrorCode["BUFFER_FULL_ERROR"] = "bufferFullError";
  PlayerErrorCode["BUFFER_NUDGE_ON_STALL"] = "bufferNudgeOnStall";
  PlayerErrorCode["BUFFER_STALLED_ERROR"] = "bufferStalledError";
  PlayerErrorCode["SHAKA_VIDEO_ERROR_3016"] = "shaka.VIDEO_ERROR_3016";
  PlayerErrorCode["FRAG_PARSING_ERROR"] = "fragParsingError";
  PlayerErrorCode["BUFFER_SEEK_OVER_HOLE"] = "bufferSeekOverHole";
  PlayerErrorCode["BUFFER_APPENDING_ERROR"] = "bufferAppendingError";
  PlayerErrorCode["PIPELINE_ERROR_DECODE"] = "PIPELINE_ERROR_DECODE";
  PlayerErrorCode["DECODER_ERROR_NOT_SUPPORTED"] = "DECODER_ERROR_NOT_SUPPORTED";
  PlayerErrorCode["SHAKA_CONTENT_UNSUPPORTED_BY_BROWSER_4032"] = "shaka.CONTENT_UNSUPPORTED_BY_BROWSER_4032";
  PlayerErrorCode["BUFFER_APPEND_ERROR"] = "bufferAppendError";
  PlayerErrorCode["SHAKA_MEDIA_SOURCE_OPERATION_THREW_3015"] = "shaka.MEDIA_SOURCE_OPERATION_THREW_3015";
  PlayerErrorCode["MEDIA_ELEMENT_ERROR_FORMAT_ERROR"] = "MEDIA_ELEMENT_ERROR: Format error";
  PlayerErrorCode["REMUX_ALLOC_ERROR"] = "remuxAllocError";
  PlayerErrorCode["BUFFER_ADD_CODEC_ERROR"] = "bufferAddCodecError";
  PlayerErrorCode["DEMUXER_ERROR_COULD_NOT_OPEN"] = "DEMUXER_ERROR_COULD_NOT_OPEN";
  PlayerErrorCode["NS_ERROR_DOM_INVALID_STATE_ERR"] = "NS_ERROR_DOM_INVALID_STATE_ERR";
  PlayerErrorCode["SHAKA_DASH_INVALID_XML_4001"] = "shaka.DASH_INVALID_XML_4001";
  PlayerErrorCode["SHAKA_QUOTA_EXCEEDED_ERROR_3017"] = "shaka.QUOTA_EXCEEDED_ERROR_3017";
  PlayerErrorCode["CHUNK_DEMUXER_ERROR_APPEND_FAILED"] = "CHUNK_DEMUXER_ERROR_APPEND_FAILED";
  PlayerErrorCode["FAILED_TO_INIT_DECODER"] = "Failed to init decoder";
  PlayerErrorCode["PIPELINE_ERROR_INITIALIZATION_FAILED"] = "PIPELINE_ERROR_INITIALIZATION_FAILED";
  PlayerErrorCode["NS_ERROR_FAILURE"] = "NS_ERROR_FAILURE";
  PlayerErrorCode["SHAKA_MEDIA_SOURCE_OPERATION_FAILED_3014"] = "shaka.MEDIA_SOURCE_OPERATION_FAILED_3014";
  PlayerErrorCode["REQUEST_FAILED"] = "2147500036: Request failed";
  PlayerErrorCode["PIPELINE_ERROR_EXTERNAL_RENDERER_FAILED"] = "PIPELINE_ERROR_EXTERNAL_RENDERER_FAILED";
  PlayerErrorCode["PIPELINE_ERROR_COULD_NOT_RENDER"] = "PIPELINE_ERROR_COULD_NOT_RENDER";
  PlayerErrorCode["MEDIA_ELEMENT_ERROR_EMPTY_SRC_ATTRIBUTE"] = "MEDIA_ELEMENT_ERROR: Empty src attribute";
  PlayerErrorCode["NS_ERROR_DOM_MEDIA_METADATA_ERR"] = "NS_ERROR_DOM_MEDIA_METADATA_ERR";
  PlayerErrorCode["NS_ERROR_DOM_MEDIA_FATAL_ERR"] = "NS_ERROR_DOM_MEDIA_FATAL_ERR";
  PlayerErrorCode["SHAKA_RESTRICTIONS_CANNOT_BE_MET_4012"] = "shaka.RESTRICTIONS_CANNOT_BE_MET_4012";
  PlayerErrorCode["MANIFEST_PARSING_ERROR"] = "manifestParsingError";
  PlayerErrorCode["FRAG_LOAD_ERROR"] = "fragLoadError";
  PlayerErrorCode["SHAKA_BAD_HTTP_STATUS_1001_MANIFEST"] = "shaka.BAD_HTTP_STATUS_1001_MANIFEST";
  PlayerErrorCode["SHAKA_HTTP_ERROR_1002_SEGMENT"] = "shaka.HTTP_ERROR_1002_SEGMENT";
  PlayerErrorCode["MANIFEST_LOAD_ERROR"] = "manifestLoadError";
  PlayerErrorCode["LEVEL_LOAD_ERROR"] = "levelLoadError";
  PlayerErrorCode["SHAKA_HTTP_ERROR_1002_MANIFEST"] = "shaka.HTTP_ERROR_1002_MANIFEST";
  PlayerErrorCode["SHAKA_BAD_HTTP_STATUS_1001_SEGMENT"] = "shaka.BAD_HTTP_STATUS_1001_SEGMENT";
  PlayerErrorCode["SHAKA_UNSUPPORTED_SCHEME_1000"] = "shaka.UNSUPPORTED_SCHEME_1000";
  PlayerErrorCode["AUDIO_TRACK_LOAD_ERROR"] = "audioTrackLoadError";
  PlayerErrorCode["SHAKA_TIMEOUT_1003_SEGMENT"] = "shaka.TIMEOUT_1003_SEGMENT";
  PlayerErrorCode["FRAG_LOAD_TIME_OUT"] = "fragLoadTimeOut";
  PlayerErrorCode["MANIFEST_LOAD_TIME_OUT"] = "manifestLoadTimeOut";
  PlayerErrorCode["LEVEL_LOAD_TIME_OUT"] = "levelLoadTimeOut";
  PlayerErrorCode["SHAKA_TIMEOUT_1003_MANIFEST"] = "shaka.TIMEOUT_1003_MANIFEST";
  PlayerErrorCode["SHAKA_TIMEOUT_1003_LICENSE"] = "shaka.TIMEOUT_1003_LICENSE";
  PlayerErrorCode["AUDIO_TRACK_LOAD_TIME_OUT"] = "audioTrackLoadTimeOut";
  PlayerErrorCode["INTERNAL_EXCEPTION"] = "internalException";
  PlayerErrorCode["SHAKA_OPERATION_ABORTED_7001"] = "shaka.OPERATION_ABORTED_7001";
  PlayerErrorCode["ON_PLAYER_INIT_ERROR_INTERNAL"] = "ON_PLAYER_INIT_ERROR_INTERNAL";
  PlayerErrorCode["UNABLE_TO_LOAD_PLAYER_IFRAME"] = "UNABLE_TO_LOAD_PLAYER_IFRAME";
  PlayerErrorCode["ON_PLAYER_INIT_ERROR"] = "ON_PLAYER_INIT_ERROR";
  PlayerErrorCode["LOADER_INIT_ERROR"] = "LoaderInitError";
  PlayerErrorCode["UNABLE_TO_LOAD_PLAYER_INTERNAL_SCRIPT"] = "UNABLE_TO_LOAD_PLAYER_INTERNAL_SCRIPT";
  PlayerErrorCode["FAILED_TO_DOWNLOAD_DEBUG_INFO"] = "FAILED_TO_DOWNLOAD_DEBUG_INFO";
  PlayerErrorCode["SHAKA_REQUEST_FILTER_ERROR_1006"] = "shaka.REQUEST_FILTER_ERROR_1006";
  PlayerErrorCode["PLAYER_CONTAINER_NOT_FOUND"] = "PLAYER_CONTAINER_NOT_FOUND";
  PlayerErrorCode["KEY_LOAD_ERROR"] = "keyLoadError";
  PlayerErrorCode["FEATURE_HANDLER_ERROR"] = "FEATURE_HANDLER_ERROR";
  PlayerErrorCode["SHAKA_NO_LICENSE_SERVER_GIVEN_6012"] = "shaka.NO_LICENSE_SERVER_GIVEN_6012";
  PlayerErrorCode["INVALID_CONFIG_ELEMENT_IN_CREATE_PLAYER"] = "InvalidConfigElementInCreatePlayer";
  PlayerErrorCode["INVALID_CONFIG_LANG_IN_CREATE_PLAYER"] = "InvalidConfigLangInCreatePlayer";
  PlayerErrorCode["INVALID_CONFIG_IN_CREATE_PLAYER"] = "InvalidConfigInCreatePlayer";
  PlayerErrorCode["INVALID_CONFIG_IN_SET_SOURCE"] = "InvalidConfigInSetSource";
  PlayerErrorCode["INVALID_CONFIG_IN_SOURCE_UPDATE"] = "InvalidConfigInSourceUpdate";
  PlayerErrorCode["SHAKA_FAILED_TO_CREATE_CDM_6002"] = "shaka.FAILED_TO_CREATE_CDM_6002";
  PlayerErrorCode["SHAKA_HTTP_ERROR_1002_LICENSE"] = "shaka.HTTP_ERROR_1002_LICENSE";
  PlayerErrorCode["SHAKA_LICENSE_REQUEST_FAILED_6007"] = "shaka.LICENSE_REQUEST_FAILED_6007";
  PlayerErrorCode["SHAKA_FAILED_TO_GENERATE_LICENSE_REQUEST_6006"] = "shaka.FAILED_TO_GENERATE_LICENSE_REQUEST_6006";
  PlayerErrorCode["SHAKA_REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE_6001"] = "shaka.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE_6001";
  PlayerErrorCode["SHAKA_FAILED_TO_ATTACH_TO_VIDEO_6003"] = "shaka.FAILED_TO_ATTACH_TO_VIDEO_6003";
  PlayerErrorCode["SHAKA_LICENSE_RESPONSE_REJECTED_6008"] = "shaka.LICENSE_RESPONSE_REJECTED_6008";
  PlayerErrorCode["SHAKA_INVALID_SERVER_CERTIFICATE_6004"] = "shaka.INVALID_SERVER_CERTIFICATE_6004";
  PlayerErrorCode["SHAKA_EXPIRED_6014"] = "shaka.EXPIRED_6014";
  PlayerErrorCode["SHAKA_BAD_HTTP_STATUS_1001_LICENSE"] = "shaka.BAD_HTTP_STATUS_1001_LICENSE";
  PlayerErrorCode["EXTERNAL_POST_MESSENGER_SEND_MESSAGE_ERROR"] = "EXTERNAL_POST_MESSENGER_SEND_MESSAGE_ERROR";
  PlayerErrorCode["INTERNAL_POST_MESSENGER_SEND_MESSAGE_ERROR"] = "INTERNAL_POST_MESSENGER_SEND_MESSAGE_ERROR";
  PlayerErrorCode["LOAD_SKIN_ERROR"] = "LOAD_SKIN_ERROR";
  PlayerErrorCode["INSERT_INTO_WITH_SECURE_FRAME"] = "INSERT_INTO_WITH_SECURE_FRAME";
  PlayerErrorCode["ELEMENT_NOT_IN_DOM"] = "ELEMENT_NOT_IN_DOM";
  PlayerErrorCode["ERROR_SCREEN_LOAD_ERROR"] = "ERROR_SCREEN_LOAD_ERROR";
})(PlayerErrorCode || (PlayerErrorCode = {}));

/***/ }),

/***/ "./src/ts/Error/getPlayerErrorCategory/index.ts":
/*!******************************************************!*\
  !*** ./src/ts/Error/getPlayerErrorCategory/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlayerErrorCategory": function() { return /* binding */ getPlayerErrorCategory; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_utils_isNever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/utils/isNever */ "./node_modules/@yandex-int/any.common/ts/utils/isNever/index.js");
/* harmony import */ var _stream_player_js_src_errors_getStreamPlayerErrorCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../stream-player-js/src/errors/getStreamPlayerErrorCategory */ "./stream-player-js/src/errors/getStreamPlayerErrorCategory/index.ts");
/* harmony import */ var _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../typings/v2/ErrorCategory */ "./src/ts/typings/v2/ErrorCategory.ts");
/* harmony import */ var _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlayerErrorCode */ "./src/ts/Error/PlayerErrorCode.ts");




/**
 * https://st.yandex-team.ru/PLAYERWEB-2091#5efa088333d457787638a10c
 */

function getPlayerErrorCategory(code) {
  if (code === undefined) {
    return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.DEFAULT;
  }

  var category = (0,_stream_player_js_src_errors_getStreamPlayerErrorCategory__WEBPACK_IMPORTED_MODULE_1__.getStreamPlayerErrorCategory)(code);

  if (category !== _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.DEFAULT) {
    return category;
  }

  var playerErrorCode = code;

  switch (playerErrorCode) {
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_FULL_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_NUDGE_ON_STALL:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_STALLED_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_VIDEO_ERROR_3016:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.FRAG_PARSING_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_SEEK_OVER_HOLE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_APPENDING_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.PIPELINE_ERROR_DECODE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.DECODER_ERROR_NOT_SUPPORTED:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_APPEND_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_MEDIA_SOURCE_OPERATION_THREW_3015:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.MEDIA_ELEMENT_ERROR_FORMAT_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.REMUX_ALLOC_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.BUFFER_ADD_CODEC_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.DEMUXER_ERROR_COULD_NOT_OPEN:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.NS_ERROR_DOM_INVALID_STATE_ERR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_DASH_INVALID_XML_4001:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_QUOTA_EXCEEDED_ERROR_3017:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.CHUNK_DEMUXER_ERROR_APPEND_FAILED:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.FAILED_TO_INIT_DECODER:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.PIPELINE_ERROR_INITIALIZATION_FAILED:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.NS_ERROR_FAILURE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_MEDIA_SOURCE_OPERATION_FAILED_3014:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.REQUEST_FAILED:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.PIPELINE_ERROR_EXTERNAL_RENDERER_FAILED:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.PIPELINE_ERROR_COULD_NOT_RENDER:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.NS_ERROR_DOM_MEDIA_METADATA_ERR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.MEDIA_ELEMENT_ERROR_EMPTY_SRC_ATTRIBUTE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.NS_ERROR_DOM_MEDIA_FATAL_ERR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_RESTRICTIONS_CANNOT_BE_MET_4012:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.MANIFEST_PARSING_ERROR:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.MEDIA;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.FRAG_LOAD_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_BAD_HTTP_STATUS_1001_MANIFEST:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_HTTP_ERROR_1002_SEGMENT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.MANIFEST_LOAD_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.LEVEL_LOAD_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_HTTP_ERROR_1002_MANIFEST:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_BAD_HTTP_STATUS_1001_SEGMENT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_UNSUPPORTED_SCHEME_1000:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.AUDIO_TRACK_LOAD_ERROR:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.NETWORK_MEDIA;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_TIMEOUT_1003_SEGMENT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.FRAG_LOAD_TIME_OUT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.MANIFEST_LOAD_TIME_OUT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.LEVEL_LOAD_TIME_OUT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_TIMEOUT_1003_MANIFEST:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_TIMEOUT_1003_LICENSE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.AUDIO_TRACK_LOAD_TIME_OUT:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.NETWORK_TIMEOUT;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INTERNAL_EXCEPTION:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_OPERATION_ABORTED_7001:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.ON_PLAYER_INIT_ERROR_INTERNAL:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.EXTERNAL_POST_MESSENGER_SEND_MESSAGE_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INTERNAL_POST_MESSENGER_SEND_MESSAGE_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.LOAD_SKIN_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INSERT_INTO_WITH_SECURE_FRAME:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.ERROR_SCREEN_LOAD_ERROR:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.EXCEPTION;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.UNABLE_TO_LOAD_PLAYER_IFRAME:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.ON_PLAYER_INIT_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.LOADER_INIT_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.UNABLE_TO_LOAD_PLAYER_INTERNAL_SCRIPT:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.FAILED_TO_DOWNLOAD_DEBUG_INFO:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_REQUEST_FILTER_ERROR_1006:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.NETWORK_PLAYER;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.PLAYER_CONTAINER_NOT_FOUND:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.KEY_LOAD_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.FEATURE_HANDLER_ERROR:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_NO_LICENSE_SERVER_GIVEN_6012:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INVALID_CONFIG_ELEMENT_IN_CREATE_PLAYER:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INVALID_CONFIG_LANG_IN_CREATE_PLAYER:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INVALID_CONFIG_IN_CREATE_PLAYER:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INVALID_CONFIG_IN_SET_SOURCE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.INVALID_CONFIG_IN_SOURCE_UPDATE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.ELEMENT_NOT_IN_DOM:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.CONFIG;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_FAILED_TO_CREATE_CDM_6002:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_HTTP_ERROR_1002_LICENSE:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_LICENSE_REQUEST_FAILED_6007:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_FAILED_TO_GENERATE_LICENSE_REQUEST_6006:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE_6001:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_FAILED_TO_ATTACH_TO_VIDEO_6003:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_LICENSE_RESPONSE_REJECTED_6008:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_INVALID_SERVER_CERTIFICATE_6004:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_EXPIRED_6014:
    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_BAD_HTTP_STATUS_1001_LICENSE:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.DRM;

    case _PlayerErrorCode__WEBPACK_IMPORTED_MODULE_3__.PlayerErrorCode.SHAKA_CONTENT_UNSUPPORTED_BY_BROWSER_4032:
      return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.NO_CODECS;

    default:
  }

  return _typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_2__.ErrorCategory.DEFAULT;
}

/***/ }),

/***/ "./src/ts/const/ALL_MACRO_NAMES.ts":
/*!*****************************************!*\
  !*** ./src/ts/const/ALL_MACRO_NAMES.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_MACRO_NAMES": function() { return /* binding */ ALL_MACRO_NAMES; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_Object_getObjectKeys_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/Object/getObjectKeys/index */ "./node_modules/@yandex-int/any.common/ts/Object/getObjectKeys/index.js");
/* harmony import */ var _packages_public_types_src_Trackings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../packages/public-types/src/Trackings */ "./packages/public-types/src/Trackings.ts");


var ALL_MACRO_NAMES = (0,_yandex_int_any_common_ts_Object_getObjectKeys_index__WEBPACK_IMPORTED_MODULE_0__.getObjectKeys)(_packages_public_types_src_Trackings__WEBPACK_IMPORTED_MODULE_1__.MacroName);

/***/ }),

/***/ "./src/ts/const/DEFAULT_AD_CATEGORY.ts":
/*!*********************************************!*\
  !*** ./src/ts/const/DEFAULT_AD_CATEGORY.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_AD_CATEGORY": function() { return /* binding */ DEFAULT_AD_CATEGORY; }
/* harmony export */ });
var DEFAULT_AD_CATEGORY = 0;

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_API_CONFIG.ts":
/*!*******************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_API_CONFIG.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_API_CONFIG": function() { return /* binding */ DEFAULT_API_CONFIG; }
/* harmony export */ });
/* eslint-disable no-cyrillic-string/no-cyrillic-string */
var DEFAULT_API_CONFIG = "\n/**\n* \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u043C\u0435\u0442\u043E\u0434\u0430 API \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u043F\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432\n*/\n".trim();

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_CODE_CONFIG.ts":
/*!********************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_CODE_CONFIG.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CODE_CONFIG": function() { return /* binding */ DEFAULT_CODE_CONFIG; }
/* harmony export */ });
var DEFAULT_CODE_CONFIG = "\nconsole.log(playerApi.getState());\n";

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_CONFIG.ts":
/*!***************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_CONFIG.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CONFIG": function() { return /* binding */ DEFAULT_CONFIG; }
/* harmony export */ });
/* harmony import */ var _DEFAULT_API_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DEFAULT_API_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_API_CONFIG.ts");
/* harmony import */ var _DEFAULT_CODE_CONFIG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DEFAULT_CODE_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_CODE_CONFIG.ts");
/* harmony import */ var _DEFAULT_CONSOLE_CONFIG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DEFAULT_CONSOLE_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_CONSOLE_CONFIG.ts");
/* harmony import */ var _DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DEFAULT_DEMO_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_DEMO_CONFIG.ts");
/* harmony import */ var _DEFAULT_INITIAL_CONFIG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DEFAULT_INITIAL_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_INITIAL_CONFIG.ts");
/* harmony import */ var _DEFAULT_SOURCE_CONFIG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DEFAULT_SOURCE_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_SOURCE_CONFIG.ts");






var DEFAULT_CONFIG = {
  initial: _DEFAULT_INITIAL_CONFIG__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_INITIAL_CONFIG,
  source: _DEFAULT_SOURCE_CONFIG__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_SOURCE_CONFIG,
  demo: _DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DEMO_CONFIG,
  code: _DEFAULT_CODE_CONFIG__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CODE_CONFIG,
  api: _DEFAULT_API_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_API_CONFIG,
  console: _DEFAULT_CONSOLE_CONFIG__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CONSOLE_CONFIG
};

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_CONSOLE_CONFIG.ts":
/*!***********************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_CONSOLE_CONFIG.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CONSOLE_CONFIG": function() { return /* binding */ DEFAULT_CONSOLE_CONFIG; }
/* harmony export */ });
var DEFAULT_CONSOLE_CONFIG = '';

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_DEMO_CONFIG.ts":
/*!********************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_DEMO_CONFIG.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_DEMO_CONFIG": function() { return /* binding */ DEFAULT_DEMO_CONFIG; }
/* harmony export */ });
var DEFAULT_DEMO_CONFIG = {
  iframeApi: {
    env: 'dev',
    version: '',
    useLoader: true
  },
  log: {
    events: true,
    currentTime: false
  },
  streamPlayer: {
    url: 'stream_player_js.js'
  }
};

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_INITIAL_CONFIG.ts":
/*!***********************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_INITIAL_CONFIG.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_INITIAL_CONFIG": function() { return /* binding */ DEFAULT_INITIAL_CONFIG; }
/* harmony export */ });
/* harmony import */ var _stream_player_js_src_constants_DEFAULT_VSID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../stream-player-js/src/constants/DEFAULT_VSID */ "./stream-player-js/src/constants/DEFAULT_VSID.ts");
/* harmony import */ var _const_ALL_MACRO_NAMES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/ALL_MACRO_NAMES */ "./src/ts/const/ALL_MACRO_NAMES.ts");
/* harmony import */ var _test_constants_AD_CONFIGS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../test/constants/AD_CONFIGS */ "./src/ts/test/constants/AD_CONFIGS.ts");
/* harmony import */ var _util_addMacroTemplatesToUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/addMacroTemplatesToUrl */ "./src/ts/util/addMacroTemplatesToUrl.ts");




var DEFAULT_INITIAL_CONFIG = {
  debug: false,
  autoplay: true,
  preload: false,
  volume: 0.25,
  muted: false,
  useFriendlyFrame: false,
  source: {
    additionalParams: {
      from: 'iframe-api-demo-page',
      reqid: undefined,
      hash: undefined,
      vsid: _stream_player_js_src_constants_DEFAULT_VSID__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VSID
    },
    streams: [{
      url: 'https://strm.yandex.ru/kal/rtg/manifest.mpd'
    }, {
      url: 'https://strm.yandex.ru/kal/rtg/rtg0.m3u8'
    }],
    withCredentials: true,
    adConfig: _test_constants_AD_CONFIGS__WEBPACK_IMPORTED_MODULE_2__.AD_CONFIGS.midroll,
    trackings: {
      trackingEvents: {
        start: [(0,_util_addMacroTemplatesToUrl__WEBPACK_IMPORTED_MODULE_3__.addMacroTemplatesToUrl)('https://tracking-host.ya.ru/?event=START', _const_ALL_MACRO_NAMES__WEBPACK_IMPORTED_MODULE_1__.ALL_MACRO_NAMES)],
        setSource: [(0,_util_addMacroTemplatesToUrl__WEBPACK_IMPORTED_MODULE_3__.addMacroTemplatesToUrl)('https://tracking-host.ya.ru/?event=SET_SOURCE', _const_ALL_MACRO_NAMES__WEBPACK_IMPORTED_MODULE_1__.ALL_MACRO_NAMES)]
      }
    },
    preview: 'https://playerweb-ci.s3.mds.yandex.net/video-player-iframe-api/posters/matrix.jpg',
    yaDirectPixelUrl: 'ya.test.demo.ru',
    yaDirectPixelData: {
      ab: 0,
      dspId: 12345,
      sessionId: '413',
      userAgent: 'safari',
      reqId: '4123'
    }
  },
  size: {
    width: '100%',
    height: '360px'
  },
  togglePlaybackOnVisibilityChange: false,
  preferNative: false,
  useAbdBundle: false,
  skinParams: {
    skinConfig: {
      showReportButton: true,
      showUnmuteButtonForAll: false,
      logoConfig: {
        src: 'https://s3.mds.yandex.net/stream-player-js/img/kp-logo.svg',
        clickUrl: 'https://kinopoisk.ru'
      }
    }
  }
};

/***/ }),

/***/ "./src/ts/demoV2/constants/DEFAULT_SOURCE_CONFIG.ts":
/*!**********************************************************!*\
  !*** ./src/ts/demoV2/constants/DEFAULT_SOURCE_CONFIG.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_SOURCE_CONFIG": function() { return /* binding */ DEFAULT_SOURCE_CONFIG; }
/* harmony export */ });
var DEFAULT_SOURCE_CONFIG = {
  streams: [{
    url: 'https://strm.yandex.ru/kal/rtg/manifest.mpd'
  }, {
    url: 'https://strm.yandex.ru/kal/rtg/rtg0.m3u8'
  }],
  withCredentials: true
};

/***/ }),

/***/ "./src/ts/demoV2/constants/PLAYER_API_PRESETS.ts":
/*!*******************************************************!*\
  !*** ./src/ts/demoV2/constants/PLAYER_API_PRESETS.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLAYER_API_PRESETS": function() { return /* binding */ PLAYER_API_PRESETS; }
/* harmony export */ });
/* harmony import */ var _skin_src_constants_PLAYBACK_RATES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../skin/src/constants/PLAYBACK_RATES */ "./skin/src/constants/PLAYBACK_RATES.ts");
/* harmony import */ var _typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../typings/v2/PlayerApiEvents */ "./src/ts/typings/v2/PlayerApiEvents.ts");
/* harmony import */ var _utils_presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/presets */ "./src/ts/demoV2/utils/presets.ts");
/* eslint-disable no-cyrillic-string/no-cyrillic-string */



/**
 * Набор дефолтных пресетов для работы с плеерным API
 */

var PLAYER_API_PRESETS = {
  play: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Запускает воспроизведение видео'),
  pause: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Ставит видео на паузу'),
  setVideoTrack: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Передается название видеотрека', 'rus'),
  setAudioTrack: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Передается название дорожки аудио', 'eng'),
  setTextTrack: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Меняет текущую дорожку субтитров', 'rus'),
  setMuted: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Мьютит/размьючивает видео (Boolean)', false),
  setVolume: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Задает громкость звука видео от 1 до 100', 42),
  seek: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Перематывает видео на заданное время в секундах', 25),
  getReadyState: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Возвращает состояние готовности движка плеера'),
  getState: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Возвращает состояние движка плеера'),
  requestVideoElementFullscreen: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Запрашивает включение режима фулскрина для видео-тега'),
  exitVideoElementFullscreen: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Выводит видео-тег из фулскрина'),
  setPlaybackRate: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)("\u0417\u0430\u0434\u0430\u0435\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432\u0438\u0434\u0435\u043E \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 " + _skin_src_constants_PLAYBACK_RATES__WEBPACK_IMPORTED_MODULE_0__.PLAYBACK_RATES, 1),
  changeAdditionalParams: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Подменяет поля объекта additionalParams'),
  setPictureInPictureAllowed: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Включает/отключает кнопку для просмотра видео в режиме picture-in-picture', true),
  setVideoStyle: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Задает видеотегу кастомные стили. Поддерживает только objectFit.', {
    'object-fit': 'fill'
  }),
  setNativeControlsVisibility: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Показывает/скрывает нативные контролы', false),
  setNativeTextTrackVisibility: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Показывает/скрывает нативные субтитры', true),
  setFeed: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Задает признак нахождения в ленте', false),
  requestDebugInfo: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Запрашивает debug-информацию'),
  requestExternalPlay: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Запрашивает воспроизведение на внешнем устройстве', {
    externalPlayerId: 'id',
    startPosition: 0,
    config: undefined
  }),
  requestExternalPlayerList: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Запрашивает список внешних устройств', {
    currentPlayerListLength: 0
  }),
  destroy: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Удаляет плеер и освобождает занимаемые им ресурсы'),
  openReportWindow: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Открывает форму "Сообщить о проблеме" в новом окне'),
  preloadSource: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Предзагружает видео. Используйте блок setSource тестового стенда'),
  setSource: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Задает источник видео. Используйте блок setSource тестового стенда'),
  sendReportLog: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Отправляет отчет в логи плеера'),
  playInrollAd: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Запускает рекламу из inroll-блока принудительно, а не по метке из метаданных потока'),
  setNativeAdControlsVisibility: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Показывает/скрывает нативные контролы рекламы', true),
  skipAdPod: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Принудительно пропускаем рекламу'),
  skin: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('', 'Инстанс скина. '),
  logEvent: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Логирует событие.', {
    event: 'SomeLogEvent',
    params: {}
  }),
  logError: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Логирует ошибку.', {
    error: 'someError',
    code: 'SomeErrorCode',
    message: 'SomeImportantMessage',
    isFatal: false
  }),
  on: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Подписывает на события типа PlayerApiEventName', Object.keys(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_1__.PlayerApiEventName)),
  once: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Подписывает на однократное срабатывание событий типа PlayerApiEventName', Object.keys(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_1__.PlayerApiEventName)),
  off: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Отписывает от событий типа PlayerApiEventName', // todo возможно, для удобства надо сделать так, чтобы выводились только методы, на которые есть подписка
  Object.keys(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_1__.PlayerApiEventName)),
  publicEmit: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Эмитит новое кастомное событие', 'EventName, EventPayload'),
  insertInto: (0,_utils_presets__WEBPACK_IMPORTED_MODULE_2__.createPreset)('Переносит плеер в переданную DOM-ноду')
};

/***/ }),

/***/ "./src/ts/demoV2/constants/SOURCE_PRESETS.ts":
/*!***************************************************!*\
  !*** ./src/ts/demoV2/constants/SOURCE_PRESETS.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuckBunnyHlsDrm": function() { return /* binding */ BuckBunnyHlsDrm; },
/* harmony export */   "BuckBunnyMpdDrm": function() { return /* binding */ BuckBunnyMpdDrm; },
/* harmony export */   "DemoLiveDashDrm": function() { return /* binding */ DemoLiveDashDrm; },
/* harmony export */   "DemoLiveHlsDrm": function() { return /* binding */ DemoLiveHlsDrm; },
/* harmony export */   "SOURCE_PRESETS": function() { return /* binding */ SOURCE_PRESETS; },
/* harmony export */   "TearsOfSteelHlsDrm": function() { return /* binding */ TearsOfSteelHlsDrm; },
/* harmony export */   "TearsOfSteelMpdDrm": function() { return /* binding */ TearsOfSteelMpdDrm; },
/* harmony export */   "nowSec": function() { return /* binding */ nowSec; }
/* harmony export */ });
/* harmony import */ var _yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/ims.opaque-types/lib */ "./node_modules/@yandex-int/ims.opaque-types/lib/index.js");
/* harmony import */ var _stream_player_js_src_constants_META_INFO_URL_TIMESTAMP_MACRO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../stream-player-js/src/constants/META_INFO_URL_TIMESTAMP_MACRO */ "./stream-player-js/src/constants/META_INFO_URL_TIMESTAMP_MACRO.ts");
/* harmony import */ var _test_assets_DEFAULT_STREAMS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../test/assets/DEFAULT_STREAMS */ "./src/ts/test/assets/DEFAULT_STREAMS.ts");
/* eslint-disable no-cyrillic-string/no-cyrillic-string */




/**
 * Возвращает текущее время в секундах с округлением до 5 секунд
 */
function nowSec() {
  var now = Math.round(Date.now() / 1000);
  return now - now % 5;
}
/**
 * Тестовый VOD c dash + DRM (Widevide/Playready)
 * https://st.yandex-team.ru/PLAYERWEB-104#5cdaa31a9f30c900205a7b8a
 */

var BuckBunnyMpdDrm = {
  url: 'https://strm.yandex.ru/vh-ott-converted/ott-content/test/428908214/436bd5d2-8aa9-fdfc-a558-e95fb58993f1.ism/manifest.mpd',
  drmConfig: {
    servers: {
      'com.widevine.alpha': 'https://widevine-proxy.ott.yandex.ru/proxy',
      'com.microsoft.playready': 'https://playready-proxy.ott.yandex.ru/web/proxy'
    },
    requestParams: {
      watchSessionId: '54a18325ebb840aa9bd563e5fb64490b',
      contentId: '436bd5d28aa9fdfca558e95fb58993f1',
      serviceName: 'ya-main',
      productId: 2,
      expirationTimestamp: 1715498857,
      verificationRequired: false,
      version: 'V2',
      monetizationModel: 'AVOD',
      contentTypeId: 22,
      signature: 'a15c3c1ce938687b9a58b8e454a6e7a2b80d8873'
    }
  }
};
/**
 * Тестовый VOD c dash + DRM (FairPlay)
 * https://st.yandex-team.ru/PLAYERWEB-104#5cdaa31a9f30c900205a7b8a
 */

var BuckBunnyHlsDrm = {
  url: 'https://strm.yandex.ru/vh-ott-converted/ott-content/test/428908214-436bd5d28aa9fdfca558e95fb58993f1/master.hd.m3u8',
  drmConfig: {
    servers: {
      'com.apple.fps.1_0': 'https://fairplay-proxy.ott.yandex.ru/certificate'
    },
    advanced: {
      'com.apple.fps.1_0': {
        processSPCPath: 'https://fairplay-proxy.ott.yandex.ru/proxy'
      }
    },
    requestParams: {
      watchSessionId: '54a18325ebb840aa9bd563e5fb64490b',
      contentId: '436bd5d28aa9fdfca558e95fb58993f1',
      serviceName: 'ya-main',
      productId: 2,
      expirationTimestamp: 1715498857,
      verificationRequired: false,
      version: 'V2',
      monetizationModel: 'AVOD',
      contentTypeId: 22,
      signature: 'a15c3c1ce938687b9a58b8e454a6e7a2b80d8873'
    }
  }
};
/**
 * Тестовый VOD c dash + DRM (Widevide/Playready)
 * https://st.yandex-team.ru/PLAYERWEB-104#5dc97c4e122154001d821087
 */

var TearsOfSteelMpdDrm = {
  url: 'https://strm.yandex.ru/vh-ott-converted/ott-content/test/546047838/436bd5d2-8aa9-fdfc-a558-e95fb58893f1.ism/manifest.mpd',
  drmConfig: {
    servers: {
      'com.widevine.alpha': 'https://widevine-proxy.ott.yandex.ru/proxy',
      'com.microsoft.playready': 'https://playready-proxy.ott.yandex.ru/web/proxy'
    },
    requestParams: {
      watchSessionId: '5b76f96a51d64c6b8b095e4133471a80',
      contentId: '436bd5d28aa9fdfca558e95fb58893f1',
      serviceName: 'ya-main',
      productId: 2,
      expirationTimestamp: 1731228756,
      verificationRequired: false,
      version: 'V4',
      monetizationModel: 'AVOD',
      contentTypeId: 22,
      signature: 'd20bf410dee75bec59209055829c57eeb06021d7',
      internal: false
    }
  }
};
/**
 * Тестовый VOD c dash + DRM (FairPlay)
 * https://st.yandex-team.ru/PLAYERWEB-104#5cdaa31a9f30c900205a7b8a
 */

var TearsOfSteelHlsDrm = {
  url: 'https://strm.yandex.ru/vh-ott-converted/ott-content/test/546047838-436bd5d28aa9fdfca558e95fb58893f1/master.hd.m3u8',
  drmConfig: {
    servers: {
      'com.apple.fps.1_0': 'https://fairplay-proxy.ott.yandex.ru/certificate'
    },
    advanced: {
      'com.apple.fps.1_0': {
        processSPCPath: 'https://fairplay-proxy.ott.yandex.ru/proxy'
      }
    },
    requestParams: {
      watchSessionId: '5b76f96a51d64c6b8b095e4133471a80',
      contentId: '436bd5d28aa9fdfca558e95fb58893f1',
      serviceName: 'ya-main',
      productId: 2,
      expirationTimestamp: 1731228756,
      verificationRequired: false,
      version: 'V4',
      monetizationModel: 'AVOD',
      contentTypeId: 22,
      signature: 'd20bf410dee75bec59209055829c57eeb06021d7',
      internal: false
    }
  }
};
/**
 * https://st.yandex-team.ru/STRM-955
 * Live-канал с fairplay
 */

var DemoLiveHlsDrm = {
  url: 'https://strm.yandex.ru/kal/demo_channel_drm/demo_channel_drm0.m3u8?from=efir&target_ref=https%3A//yastatic.net&uuid=459bded304dc330ebcea06829dff62fd&video_category_id=1011&clid=495&yandexuid=3015131491481278589&slots=null&from=efir',
  drmConfig: {
    servers: {
      'com.apple.fps.1_0': 'https://fairplay-proxy.ott.yandex.ru/certificate'
    },
    advanced: {
      'com.apple.fps.1_0': {
        processSPCPath: 'https://fairplay-proxy.ott.yandex.ru/proxy'
      }
    },
    requestParams: {
      verificationRequired: false,
      monetizationModel: 'AVOD',
      contentId: '459bded304dc330ebcea06829dff62fd',
      productId: 2,
      serviceName: 'ya-main',
      expirationTimestamp: 1572629553,
      puid: 125091152,
      contentTypeId: 2,
      watchSessionId: '895cba28f73a47c2b2994e3d1aee5c94',
      signature: 'b2d60ed26d39d26f68702663462f387967f2b7c8',
      version: 'V4'
    }
  }
};
/**
 * https://st.yandex-team.ru/STRM-955
 * Live-канал с widevine
 */

var DemoLiveDashDrm = {
  url: 'https://strm.yandex.ru/kal/demo_channel_drm/manifest.mpd?from=efir&target_ref=https%3A//yastatic.net&uuid=459bded304dc330ebcea06829dff62fd&video_category_id=1011&clid=495&yandexuid=7788457721548165042&slots=null&from=efir',
  drmConfig: {
    servers: {
      'com.widevine.alpha': 'https://widevine-proxy.ott.yandex.ru/proxy'
    },
    advanced: {
      'com.widevine.alpha': {
        serverCertificateUrl: 'https://widevine-proxy.ott.yandex.ru/certificate'
      }
    },
    requestParams: {
      verificationRequired: false,
      monetizationModel: 'AVOD',
      contentId: '459bded304dc330ebcea06829dff62fd',
      productId: 2,
      serviceName: 'ya-main',
      expirationTimestamp: 1572629684,
      puid: 125091152,
      contentTypeId: 2,
      watchSessionId: 'e7167c03c0194cb09c74c7f9988c678a',
      signature: 'aa7ad231185c7bce2774ff3a82eed21eb811f477',
      version: 'V4'
    }
  }
};
var SOURCE_PRESETS = {
  HLS: {
    'Футбол live (dvr - 1 сутки)': {
      streamUrl: 'https://strm.yandex.ru/kal/football/football0.m3u8?dvr=86400',
      withCredentials: true
    },
    'RTG HD live': {
      streamUrl: 'https://strm.yandex.ru/kal/rtg/rtg0.m3u8',
      withCredentials: true
    },
    'РенТВ live kaltura metadata': {
      streamUrl: 'http://strm.yandex.ru/kal/rentv10/rentv100.m3u8',
      withCredentials: true
    },
    'РенТВ live mercury metadata': 'http://mercury-trusty.dev.yandex.net:5000/rentv10/rentv100_169_576p.json/index-v1-a1.m3u8',
    'SovSec live': {
      streamUrl: 'https://strm.yandex.ru/kal/sovsec/sovsec0.m3u8',
      withCredentials: true
    },
    'BigBunny multi': 'https://s3.mds.yandex.net/stream-player-js/big-bunny/x36xhzz.m3u8',
    'BigBunny single': 'https://s3.mds.yandex.net/stream-player-js/big-bunny/url_3/193039199_mp4_h264_aac_ld_7.m3u8',
    'EVENT 30 min': function EVENT30Min() {
      var now = nowSec();
      return {
        streamUrl: "https://strm.yandex.ru/kal/rtg/rtg0.m3u8?start=" + (now - 15 * 60) + "&end=" + (now + 15 * 60),
        withCredentials: true
      };
    },
    'VOD 30 sec': function VOD30Sec() {
      var now = nowSec();
      var start = now - 60;
      return {
        streamUrl: "https://strm.yandex.ru/kal/rtg/rtg0.m3u8?start=" + start + "&end=" + (start + 30),
        withCredentials: true
      };
    },
    'VOD 30 sec with AdBreaks (preroll)': function VOD30SecWithAdBreaksPreroll() {
      return {
        streamUrl: 'https://strm.yandex.ru/kal/rtg/rtg0.m3u8',
        adConfig: {
          adBreaks: [{
            adType: 'preroll',
            adFoxParameters: {
              ownerId: 'test-owner-id',
              containerId: 'test-adfox-container-id'
            }
          }]
        },
        withCredentials: true
      };
    },
    'RTG HD + преролл': {
      streamUrl: 'https://strm.yandex.ru/kal/rtg/rtg0.m3u8',
      adConfig: {
        partnerId: 291193,
        category: 0
      },
      withCredentials: true
    },
    'RTG HD + мидролл': {
      streamUrl: 'https://strm.yandex.ru/kal/rtg/rtg0.m3u8',
      adConfig: {
        partnerId: 291194,
        category: 0
      },
      withCredentials: true
    },
    'RTG HD VOD 30 sec + постролл': function RTGHDVOD30SecПостролл() {
      var now = nowSec();
      var start = now - 60;
      return {
        streamUrl: "https://strm.yandex.ru/kal/rtg/rtg0.m3u8?start=" + start + "&end=" + (start + 30),
        withCredentials: true,
        adConfig: {
          partnerId: 291195,
          category: 0
        }
      };
    },
    'VOD 2 TEXT TRACKS': {
      streamUrl: _test_assets_DEFAULT_STREAMS__WEBPACK_IMPORTED_MODULE_2__.VOD_TWO_TEXT_TRACKS.url
    },
    'VOD 2 AUDIO TRACKS': {
      streamUrl: _test_assets_DEFAULT_STREAMS__WEBPACK_IMPORTED_MODULE_2__.VOD_TWO_AUDIO_TRACKS.url
    },
    'Звезда 10 (not replaced)': {
      streams: [{
        url: 'https://strm.yandex.net/kal/zvezda10/zvezda100.m3u8?partner_id=613265&imp_id=3&target_ref=https%3A%2F%2Fwww-stream.wdevx.yandex.ru',
        metaInfoUrl: "https://strm.yandex.net/kal/zvezda10/break/last?start_ts={{" + _stream_player_js_src_constants_META_INFO_URL_TIMESTAMP_MACRO__WEBPACK_IMPORTED_MODULE_1__.META_INFO_URL_TIMESTAMP_MACRO + "}}"
      }],
      withCredentials: true
    },
    'Buck Bunny DRM (FairPlay)': {
      streams: [BuckBunnyHlsDrm],
      withCredentials: true
    },
    'Tears of Steel DRM (FairPlay)': {
      streams: [TearsOfSteelHlsDrm],
      withCredentials: true
    },
    'Demo Live DRM (FairPlay)': {
      streams: [DemoLiveHlsDrm],
      withCredentials: true
    }
  },
  HLS_Broken: {
    THT: {
      streamUrl: 'https://stream-player-js.s3.mds.yandex.net/freeze-vod-tnt-10-min/tnt0.m3u8',
      startPosition: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(8)
    },
    TDK: {
      streamUrl: 'https://s3.mds.yandex.net/stream-player-js/tdk_broken/tdk0_43_576p.m3u8',
      startPosition: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10)
    },
    RenTV: {
      streamUrl: 'https://s3.mds.yandex.net/stream-player-js/rentv_broken/rentv0_169_480p.m3u8',
      startPosition: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(7)
    },
    'EdaTV 404': {
      streamUrl: 'https://s3.mds.yandex.net/stream-player-js/edatv_404/edatv0.m3u8',
      startPosition: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(7)
    }
  },
  MPD: {
    'OTT video + audio + subtitles': {
      streamUrl: 'https://strm.yandex.ru/vh-playertest/dash-best-offer/manifest.mpd',
      withCredentials: false
    },
    'OTT video + audio + subtitles + SupplementalProperty': {
      streamUrl: 'https://strm.yandex.ru/vh-playertest/dash-best-offer/manifest_deephd_supplemental_property.mpd',
      withCredentials: false
    },
    'vod:subtitles': '//storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd',
    'vod:continues:subtitles': 'https://s3.mds.yandex.net/stream-player-js/storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd',
    'dash no auth': {
      streams: [{
        url: 'https://storage.googleapis.com/shaka-demo-assets/sintel-widevine/dash.mpd',
        drmConfig: {
          servers: {
            'com.widevine.alpha': '//cwip-shaka-proxy.appspot.com/no_auth'
          }
        }
      }]
    },
    'demo LIVE': {
      streamUrl: 'https://strm.yandex.ru/kal/demo_channel/manifest.mpd',
      withCredentials: true
    },
    'demo EVENT 30 min': function demoEVENT30Min() {
      var now = nowSec();
      return {
        streamUrl: "https://strm.yandex.ru/kal/demo_channel/manifest.mpd?start=" + (now - 15 * 60) + "&end=" + (now + 15 * 60),
        withCredentials: true
      };
    },
    'demo VOD 30 sec': function demoVOD30Sec() {
      var now = nowSec();
      var start = now - 60;
      return {
        streamUrl: "https://strm.yandex.ru/kal/demo_channel/manifest.mpd?start=" + start + "&end=" + (start + 30),
        withCredentials: true
      };
    },
    'OTT DRM (Widevine)': {
      streams: [{
        url: 'https://strm.yandex.ru/vh-ott-converted/vod-content/panatory/avatar_drm_tst/314329480/449a9373-3033-17ea-9cf6-0d8e032b7bce.ism/manifest.720p.mpd',
        drmConfig: {
          servers: {
            'com.widevine.alpha': 'https://drm-testbed.tst.ott.common.yandex-team.ru/proxy/widevine?key=A0F1A1139CE87EB560945B07BF68ADC4'
          }
        }
      }],
      withCredentials: true
    },
    'Buck Bunny DRM (Widevine/PlayReady)': {
      streams: [BuckBunnyMpdDrm],
      withCredentials: true
    },
    'Tears of Steel DRM (Widevine/PlayReady)': {
      streams: [TearsOfSteelMpdDrm],
      withCredentials: true
    },
    'Demo Live DRM (Widevine)': {
      streams: [DemoLiveDashDrm],
      withCredentials: true
    }
  },
  MULTI_SOURCE: {
    'DASH + HLS': {
      streams: [{
        url: '//storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd'
      }, {
        url: _test_assets_DEFAULT_STREAMS__WEBPACK_IMPORTED_MODULE_2__.VOD_TWO_TEXT_TRACKS.url
      }],
      withCredentials: true
    },
    'HLS + DASH': {
      streams: [{
        url: _test_assets_DEFAULT_STREAMS__WEBPACK_IMPORTED_MODULE_2__.VOD_TWO_TEXT_TRACKS.url
      }, {
        url: '//storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd'
      }],
      withCredentials: true
    },
    'Buck Bunny DRM (Widevine/PlayReady/FairPlay)': {
      streams: [BuckBunnyMpdDrm, BuckBunnyHlsDrm],
      withCredentials: true
    },
    'Tears of Steel DRM (Widevine/PlayReady/FairPlay)': {
      streams: [TearsOfSteelHlsDrm, TearsOfSteelMpdDrm],
      withCredentials: true
    },
    'Demo Live DRM (Widevine, FairPlay)': {
      streams: [DemoLiveDashDrm, DemoLiveHlsDrm],
      withCredentials: true
    }
  }
};

/***/ }),

/***/ "./src/ts/demoV2/hash/getHashAsObject.ts":
/*!***********************************************!*\
  !*** ./src/ts/demoV2/hash/getHashAsObject.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHashAsObject": function() { return /* binding */ getHashAsObject; }
/* harmony export */ });
function getHashAsObject() {
  if (!document.location) {
    return {};
  }

  return document.location.hash.replace('#', '').replace('!', '').split('&').reduce(function (acc, current) {
    var parts = current.split('=');
    var key = parts[0];
    var value = parts[1];

    if (key) {
      try {
        acc[key] = JSON5.parse(decodeURIComponent(value));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./src/ts/demoV2/hash/putObjToHash.ts":
/*!********************************************!*\
  !*** ./src/ts/demoV2/hash/putObjToHash.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "putObjToHash": function() { return /* binding */ putObjToHash; }
/* harmony export */ });
/* harmony import */ var _getHashAsObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHashAsObject */ "./src/ts/demoV2/hash/getHashAsObject.ts");

function putObjToHash(name, obj) {
  var hashObj = (0,_getHashAsObject__WEBPACK_IMPORTED_MODULE_0__.getHashAsObject)();
  hashObj[name] = obj;
  var hash = Object.keys(hashObj).map(function (key) {
    var value = hashObj[key];
    return value === undefined ? '' : key + "=" + encodeURIComponent(JSON5.stringify(value));
  }).join('&') || '!';

  if (window.history) {
    history.pushState(undefined, document.title, document.location.pathname + "#" + hash);
  } else if (document.location) {
    document.location.hash = hash;
  }
}

/***/ }),

/***/ "./src/ts/demoV2/loadPlayerApi.ts":
/*!****************************************!*\
  !*** ./src/ts/demoV2/loadPlayerApi.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPlayerApi": function() { return /* binding */ loadPlayerApi; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_script_loadScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/script/loadScript */ "./node_modules/@yandex-int/any.common/ts/script/loadScript/index.js");

function loadPlayerApi(config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      _config$env = _config.env,
      env = _config$env === void 0 ? 'dev' : _config$env,
      _config$version = _config.version,
      version = _config$version === void 0 ? '' : _config$version,
      _config$useLoader = _config.useLoader,
      useLoader = _config$useLoader === void 0 ? true : _config$useLoader;

  var src = function () {
    if (env === 'dev') {
      return useLoader ? "." + "/build/js/player-api-loader.js" : "" + "/build/js/player-api.js";
    }

    var dir = version ? "yandex-video-player-iframe-api-bundles/" + version : 'yandex-video-player-iframe-api';
    var domain = env === 'prod' ? 'yastatic.net' : 'betastatic.yastatic.net';
    var path = "https://" + domain + "/" + dir + "/js";
    return useLoader ? path + "/player-api-loader.js" : path + "/player-api.js";
  }();

  return (0,_yandex_int_any_common_ts_script_loadScript__WEBPACK_IMPORTED_MODULE_0__.loadScript)({
    src: src
  });
}

/***/ }),

/***/ "./src/ts/demoV2/player/handlers.ts":
/*!******************************************!*\
  !*** ./src/ts/demoV2/player/handlers.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlers": function() { return /* binding */ createHandlers; }
/* harmony export */ });
/* harmony import */ var _utils_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/console */ "./src/ts/demoV2/utils/console.ts");
/* harmony import */ var _utils_updateWatchedTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/updateWatchedTime */ "./src/ts/demoV2/utils/updateWatchedTime.ts");
/* eslint-disable no-console */


function createHandlers(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$log = _ref.log,
      log = _ref$log === void 0 ? {} : _ref$log;

  var logEvents = log.events,
      logCurrentTime = log.currentTime;
  return {
    RequestPlayingState: function RequestPlayingState(playingState) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('RequestPlayingState', {
        stateName: playingState,
        adState: getAdState()
      });
    },
    DrmSystemChange: function DrmSystemChange(state) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('DrmSystemChange', state);
    },
    PlayingStateChange: function PlayingStateChange(playingState) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('PlayingStateChange', {
        stateName: playingState,
        adState: getAdState()
      });
    },
    AdStateChange: function AdStateChange(adState) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdStateChange: ', adState);
    },
    AdSkippableStateChange: function AdSkippableStateChange(state) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdSkippableStateChange: ', state);
    },
    AdVolumeAvailabilityStateChange: function AdVolumeAvailabilityStateChange(state) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdVolumeAvailabilityStateChange: ', state);
    },
    AdPodCloseStateChange: function AdPodCloseStateChange(state) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodCloseStateChange: ', state);
    },
    AdPodDurationChange: function AdPodDurationChange(time) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodDurationChange: ', time);
    },
    AdPodCurrentTimeChange: function AdPodCurrentTimeChange(time) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodCurrentTimeChange: ', time);
    },
    AdPodTimeToSkipChange: function AdPodTimeToSkipChange(time) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodTimeToSkipChange: ', time);
    },
    AdPodFullyClickableStateChange: function AdPodFullyClickableStateChange(state) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodFullyClickableStateChange: ', state);
    },
    AdInteraction: function AdInteraction() {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdInteraction: ');
    },
    NextAdRemainingTimeChange: function NextAdRemainingTimeChange(nextAdRemainingTime) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('NextAdRemainingTimeChange: ', nextAdRemainingTime);
    },
    BeforeAdPodStart: function BeforeAdPodStart(adPodInfo) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('BeforeAdPodStart: ', adPodInfo);
    },
    AdPodStart: function AdPodStart(adPodInfo) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodStart: ', adPodInfo);
    },
    AdPodSkip: function AdPodSkip() {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodEnd: ');
    },
    AdPodEnd: function AdPodEnd() {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AdPodEnd: ');
    },
    Ready: function Ready(player) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('Ready', player.getState());
    },
    Destroy: function Destroy(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('Destroy', data);
    },
    SkinReady: function SkinReady(playerInfo) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('SkinReady', playerInfo);
    },
    DurationChange: function DurationChange(duration) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('DurationChange', duration);
    },
    CurrentTimeChange: function CurrentTimeChange(currentTime) {
      logCurrentTime && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('CurrentTimeChange: ', currentTime);
    },
    DVRDurationChange: function DVRDurationChange(dvrDuration) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('DVRDurationChange', dvrDuration);
    },
    DVRStartTimeChange: function DVRStartTimeChange(dvrStartTime) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('DVRStartTimeChange', dvrStartTime);
    },
    FullscreenStateChange: function FullscreenStateChange(isFullScreenNow) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('FullscreenStateChange: ', isFullScreenNow);
    },
    VolumeChange: function VolumeChange(volume) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VolumeChange: ', volume);
    },
    VolumeChangeReasonChange: function VolumeChangeReasonChange(volumeChangeReason) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VolumeChangeReasonChange: ', volumeChangeReason);
    },
    ErrorChange: function ErrorChange(error) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('ErrorChange: ', error);
    },
    VideoTrackChange: function VideoTrackChange(videoTrack) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VideoTrackChange: ', videoTrack);
    },
    VideoTracksChange: function VideoTracksChange(videoTracks) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VideoTracksChange: ', videoTracks);
    },
    AudioTrackChange: function AudioTrackChange(audioTrack) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AudioTrackChange: ', audioTrack);
    },
    AudioTracksChange: function AudioTracksChange(audioTracks) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('AudioTracksChange: ', audioTracks);
    },
    TextTrackChange: function TextTrackChange(textTrack) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('TextTrackChange: ', textTrack);
    },
    TextTracksChange: function TextTracksChange(textTracks) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('TextTracksChange: ', textTracks);
    },
    ContentImpression: function ContentImpression(contentImpressionDetails) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('ContentImpression', contentImpressionDetails);
    },
    ResourcesIdle: function ResourcesIdle() {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('ResourcesIdle');
    },
    SourceChange: function SourceChange(source) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('SourceChange', source);
    },
    StreamChange: function StreamChange(stream) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('StreamChange', stream);
    },
    StreamsWithSupportInfoChange: function StreamsWithSupportInfoChange(streamsWithSupportInfo) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('StreamsWithSupportInfoChange', streamsWithSupportInfo);
    },
    StartStageChange: function StartStageChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('StartStageChange', data);
    },
    VideoTypeChange: function VideoTypeChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VideoTypeChange', data);
    },
    UtcStartTimeChange: function UtcStartTimeChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('UtcStartTimeChange', data);
    },
    WatchedTimeChange: function WatchedTimeChange(data) {
      logCurrentTime && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('WatchedTimeChange', data);
      (0,_utils_updateWatchedTime__WEBPACK_IMPORTED_MODULE_1__.updateWatchedTime)(data.watchedTime);
    },
    MutedChange: function MutedChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('MutedChange', data);
    },
    PictureInPictureStateChange: function PictureInPictureStateChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('PictureInPictureStateChange', data);
    },
    VisibleStateChange: function VisibleStateChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VisibleStateChange', data);
    },
    VideoSizeChange: function VideoSizeChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VideoSizeChange', data);
    },
    SubtitlesChange: function SubtitlesChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('SubtitlesChange', data);
    },
    PlaybackRateRangeChange: function PlaybackRateRangeChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('PlaybackRateRangeChange', data);
    },
    PlaybackRateChange: function PlaybackRateChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('PlaybackRateChange', data);
    },
    BufferedRangesChange: function BufferedRangesChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('BufferedRangesChange', data);
    },
    TileMetaInfoChange: function TileMetaInfoChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('TileMetaInfoChange', data);
    },
    TileMetaInfoUrlChange: function TileMetaInfoUrlChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('TileMetaInfoUrlChange', data);
    },
    VideoClickerEvent: function VideoClickerEvent(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('VideoClickerEvent', data);
    },
    NetworkStatusChange: function NetworkStatusChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('NetworkStatusChange', data);
    },
    RecoverStart: function RecoverStart(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('RecoverStart', data);
    },
    PosterReady: function PosterReady(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('PosterReady', data);
    },
    UserReady: function UserReady(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('UserReady', data);
    },
    LiveLatencyChange: function LiveLatencyChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('LiveLatencyChange', data);
    },
    ConnectionQualityChange: function ConnectionQualityChange(data) {
      logEvents && (0,_utils_console__WEBPACK_IMPORTED_MODULE_0__.consoleLog)('ConnectionQualityChange', data);
    }
  };
}

var getAdState = function getAdState() {
  var state = playerApi.getState();

  if (!state) {
    return undefined;
  }

  return state.adState.state;
};

/***/ }),

/***/ "./src/ts/demoV2/player/trackings.ts":
/*!*******************************************!*\
  !*** ./src/ts/demoV2/player/trackings.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUniqueTrackings": function() { return /* binding */ createUniqueTrackings; }
/* harmony export */ });
/* harmony import */ var _const_ALL_MACRO_NAMES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/ALL_MACRO_NAMES */ "./src/ts/const/ALL_MACRO_NAMES.ts");
/* harmony import */ var _util_addMacroTemplatesToUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/addMacroTemplatesToUrl */ "./src/ts/util/addMacroTemplatesToUrl.ts");


var trackingsId = 0;

function create(name) {
  return (0,_util_addMacroTemplatesToUrl__WEBPACK_IMPORTED_MODULE_1__.addMacroTemplatesToUrl)("https://tracking-host.ya.ru/?id=" + trackingsId + "&event=" + name, _const_ALL_MACRO_NAMES__WEBPACK_IMPORTED_MODULE_0__.ALL_MACRO_NAMES);
}

function createUniqueTrackings() {
  trackingsId++;
  return {
    trackingEvents: {
      init: [create('INIT')],
      start: [create('START')],
      end: [create('END')],
      setSource: [create('SET_SOURCE')],
      adStart: [create('AD_START')],
      adEnd: [create('AD_END')],
      adPodStart: [create('AD_POD_START')],
      adPodEnd: [create('AD_POD_END')],
      adPodSkip: [create('AD_POD_SKIP')],
      sourceStart: [create('SOURCE_START')],
      play: [create('PLAY')],
      pause: [create('PAUSE')],
      seek: [create('SEEK')],
      firstQuartile: [create('FIRST_QUARTILE')],
      midpoint: [create('MIDPOINT')],
      thirdQuartile: [create('THIRD_QUARTILE')],
      viewed: [[create('VIEWED_10_PERCENT'), {
        percent: 10
      }], [create('VIEWED_90_PERCENT'), {
        percent: 90
      }]],
      heartbeat: [[create('HEARTBEAT_5_WITH_OFFSET_2'), {
        delay: 5000,
        offset: 2000
      }], [create('HEARTBEAT_5_WITH_OFFSET_2_CALLS_COUNT_5'), {
        delay: 5000,
        offset: 2000,
        callsCount: 5
      }]],
      watchedTime: [[create('WATCHED_TIME_5_SEC'), {
        offset: 5
      }], [create('WATCHED_TIME_10_SEC'), {
        offset: 10
      }]],
      error: [create('ERROR')]
    }
  };
}

/***/ }),

/***/ "./src/ts/demoV2/setDemoEnv.ts":
/*!*************************************!*\
  !*** ./src/ts/demoV2/setDemoEnv.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDemoEnv": function() { return /* binding */ setDemoEnv; }
/* harmony export */ });
/* harmony import */ var _util_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/storage */ "./src/ts/util/storage.ts");
/* harmony import */ var _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/DEFAULT_DEMO_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_DEMO_CONFIG.ts");


function setDemoEnv(config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      _config$streamPlayer = _config.streamPlayer;
  _config$streamPlayer = _config$streamPlayer === void 0 ? {} : _config$streamPlayer;
  var _config$streamPlayer$ = _config$streamPlayer.url,
      streamPlayerUrl = _config$streamPlayer$ === void 0 ? '' : _config$streamPlayer$;

  if (streamPlayerUrl === _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DEMO_CONFIG.streamPlayer.url) {
    _util_storage__WEBPACK_IMPORTED_MODULE_0__.storage.removeItem('yandexHTMLPlayerUrl');
  } else {
    _util_storage__WEBPACK_IMPORTED_MODULE_0__.storage.setItem('yandexHTMLPlayerUrl', streamPlayerUrl);
  }
}

/***/ }),

/***/ "./src/ts/demoV2/ui/api/apiConfig.ts":
/*!*******************************************!*\
  !*** ./src/ts/demoV2/ui/api/apiConfig.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _Error_BasePlayerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Error/BasePlayerError */ "./src/ts/Error/BasePlayerError.ts");
/* harmony import */ var _typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../typings/v2/PlayerApiEvents */ "./src/ts/typings/v2/PlayerApiEvents.ts");
/* harmony import */ var _utils_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/console */ "./src/ts/demoV2/utils/console.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors */ "./src/ts/demoV2/ui/editors.ts");




var eventHandlersCache = getEmptyHandlers();
function init(playerApi) {
  $('#resetApiConfig').click(function () {
    (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('resetApiConfig');
  }); // Обработка применения выбранного метода АПИ с указанными настройками

  $('#applyApiConfig').click(function () {
    var $apiPresets = $('#apiPresets'); // взяли селектор

    var apiMethodName = $apiPresets.find(':selected').attr('id');

    if (!apiMethodName) {
      return;
    }

    var methodData = JSON5.parse(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.playerApi.getValue());
    (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)("applyApiConfig for \"" + apiMethodName + "\" with data: ", methodData); // todo возможно нужно оберуть в try-catch чтобы перехватить ошибки неправильных параметров

    switch (apiMethodName) {
      case 'setSource':
        // игнорируем, потому что есть другой блок для setSource
        return;

      case 'skin':
        (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)(playerApi.skin);
        break;

      case 'requestVideoElementFullscreen':
        playerApi.requestVideoElementFullscreen().then(function () {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestVideoElementFullscreen has been successful');
        })["catch"](function (error) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestVideoElementFullscreen error', error);
        });
        break;

      case 'requestDebugInfo':
        playerApi.requestDebugInfo().then(function (debugInfo) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestDebugInfo has been successful');
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('\t', debugInfo);
        })["catch"](function (error) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestDebugInfo error', error);
        });
        break;

      case 'requestExternalPlay':
        playerApi.requestExternalPlay(methodData).then(function (response) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestExternalPlay has been successful');
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('\t', response);
        })["catch"](function (error) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestExternalPlay error', error);
        });
        break;

      case 'requestExternalPlayerList':
        playerApi.requestExternalPlayerList(methodData).then(function (playerList) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestExternalPlayerList has been successful');
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('\t', playerList);
        })["catch"](function (error) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('requestExternalPlayerList error', error);
        });
        break;

      case 'destroy':
        playerApi.destroy().then(function () {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('destroy has been successful');
        })["catch"](function (error) {
          (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)('destroy error', error);
        });
        break;

      case 'on':
        subscribeEvents('on', methodData, playerApi);
        break;

      case 'once':
        subscribeEvents('once', methodData, playerApi);
        break;

      case 'off':
        offSubscribe(methodData, playerApi);
        break;

      case 'play':
        playerApi.play();
        break;

      case 'pause':
        playerApi.pause();
        break;

      case 'setVideoTrack':
        playerApi.setVideoTrack(methodData);
        break;

      case 'setAudioTrack':
        playerApi.setAudioTrack(methodData);
        break;

      case 'setTextTrack':
        playerApi.setTextTrack(methodData);
        break;

      case 'setPlaybackRate':
        playerApi.setPlaybackRate(methodData);
        break;

      case 'setMuted':
        playerApi.setMuted(methodData);
        break;

      case 'setVolume':
        playerApi.setVolume(methodData);
        break;

      case 'setPictureInPictureAllowed':
        playerApi.setPictureInPictureAllowed(methodData);
        break;

      case 'setVideoStyle':
        playerApi.setVideoStyle(methodData);
        break;

      case 'setNativeControlsVisibility':
        playerApi.setNativeControlsVisibility(methodData);
        break;

      case 'setNativeTextTrackVisibility':
        playerApi.setNativeTextTrackVisibility(methodData);
        break;

      case 'getState':
        (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)(playerApi.getState());
        break;

      case 'seek':
        playerApi.seek(methodData);
        break;

      case 'openReportWindow':
        playerApi.openReportWindow();
        break;

      case 'logEvent':
        playerApi.logEvent(methodData);
        break;

      case 'logError':
        playerApi.logError(new _Error_BasePlayerError__WEBPACK_IMPORTED_MODULE_0__.BasePlayerError(methodData));
        break;

      default:
        (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)("There is no handlers for " + apiMethodName);
    }
  });
}
/**
 * Для нужд тестового стенда делаем подписку на выбранные ивенты с дефолтным хендлером
 */

function subscribeEvents(type, eventNames, playerApi) {
  if (!eventNames || eventNames.length === 0) {
    return;
  }

  eventNames.forEach(function (eventName) {
    var handler = handlerCallback(type, eventName);

    if (type === 'on') {
      eventHandlersCache[eventName].push(handler);
      playerApi.on(eventName, handler);
    }

    if (type === 'once') {
      playerApi.once(eventName, handler);
    }
  });
}

function offSubscribe(eventNames, playerApi) {
  if (!eventNames || eventNames.length === 0) {
    return;
  }

  eventNames.forEach(function (eventName) {
    // добавление в кэш
    var handler = eventHandlersCache[eventName].pop();

    if (handler) {
      playerApi.off(eventName, handler);
    }
  });
}
/**
 * Дефолтный хендлер, в котором передается имя ивента и данные из API
 */


var handlerCallback = function handlerCallback(type, event) {
  return function (data) {
    return (0,_utils_console__WEBPACK_IMPORTED_MODULE_2__.consoleLog)("-> " + type + " - " + event, data);
  };
};
/**
 * Создает объект со всеми именами ивентов и пустым списком под хендлеры. Инициализация кэша под хендлеры
 */


function getEmptyHandlers() {
  var result = {};

  for (var eventName in _typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_1__.PlayerApiEventName) {
    result[eventName] = [];
  }

  return result;
}

/***/ }),

/***/ "./src/ts/demoV2/ui/api/apiPresets.ts":
/*!********************************************!*\
  !*** ./src/ts/demoV2/ui/api/apiPresets.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/Object/getObjectEntries */ "./node_modules/@yandex-int/any.common/ts/Object/getObjectEntries/index.js");
/* harmony import */ var _constants_PLAYER_API_PRESETS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/PLAYER_API_PRESETS */ "./src/ts/demoV2/constants/PLAYER_API_PRESETS.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors */ "./src/ts/demoV2/ui/editors.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function renderOptions(options) {
  return Object.keys(options).reduce(function (presetsAcc, apiMethodName) {
    return presetsAcc + "<option id='" + apiMethodName + "' label='" + apiMethodName + "'>" + apiMethodName + "</option>";
  }, '');
}

var apiPresets = _extends({}, _constants_PLAYER_API_PRESETS__WEBPACK_IMPORTED_MODULE_1__.PLAYER_API_PRESETS);

function init() {
  var $apiPresets = $('#apiPresets');
  $apiPresets.append(renderOptions(apiPresets));
  $apiPresets.change(function (e) {
    var select = $(e.currentTarget);
    var methodName = select.val();

    if (methodName === 'default') {
      return;
    } // Чтобы тайпчек не жаловался на apiPresets[methodName]


    var presetEntry = (0,_yandex_int_any_common_ts_Object_getObjectEntries__WEBPACK_IMPORTED_MODULE_0__.getObjectEntries)(apiPresets).find(function (_ref) {
      var method = _ref[0];
      return method === methodName;
    });

    if (!presetEntry) {
      return;
    }

    var config = presetEntry[1]; // Вначале рисуем коммент
    // Затем сами данные

    var outputStrings = [];

    if (config.comment) {
      outputStrings.push(config.comment);
    }

    outputStrings.push(JSON5.stringify(config.data, null, '\t'));
    _editors__WEBPACK_IMPORTED_MODULE_2__.editors.playerApi.setValue(outputStrings.join('\n'));
    _editors__WEBPACK_IMPORTED_MODULE_2__.editors.playerApi.clearSelection();
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/api/index.ts":
/*!***************************************!*\
  !*** ./src/ts/demoV2/ui/api/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initApiEditor": function() { return /* binding */ initApiEditor; }
/* harmony export */ });
/* harmony import */ var _constants_DEFAULT_API_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/DEFAULT_API_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_API_CONFIG.ts");

function initApiEditor() {
  var editor = ace.edit('api_config_editor');
  editor.$blockScrolling = Infinity;
  editor.getSession().setMode('ace/mode/javascript');
  editor.setTheme('ace/theme/monokai');
  editor.setOptions({
    showPrintMargin: false,
    // Отключение полосы печати
    useWorker: false // Отключение валидатора синтаксиса

  });
  editor.setValue(_constants_DEFAULT_API_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_API_CONFIG);
  editor.clearSelection();
  return editor;
}

/***/ }),

/***/ "./src/ts/demoV2/ui/buttons.ts":
/*!*************************************!*\
  !*** ./src/ts/demoV2/ui/buttons.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/getWindowLocation */ "./node_modules/@yandex-int/any.common/ts/getWindowLocation/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-console */



function copyLink(url) {
  var copied = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(url);
  copied ? console.info('link copied', url) : console.warn('link was not copied', url);
  return copied;
}

function init() {
  $('#copy-link').click(function (e) {
    var el = $(e.target);
    var copied = copyLink((0,_yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_0__.getWindowLocation)(window));
    el.addClass(copied ? 'btn-success' : 'btn-danger');
    setTimeout(function () {
      return el.removeClass('btn-success btn-danger');
    }, 300);
  });
  $('#copy-short-link').click(function () {
    $.get("https://nda.ya.ru/--?url=" + encodeURIComponent((0,_yandex_int_any_common_ts_getWindowLocation__WEBPACK_IMPORTED_MODULE_0__.getWindowLocation)(window))).done(copyLink);
  });
  $('#insertInto1').click(function () {
    window.playerApi.insertInto(document.getElementById('insert-into-container1'));
  });
  $('#insertInto2').click(function () {
    window.playerApi.insertInto(document.getElementById('insert-into-container2'));
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/codeConfig.ts":
/*!****************************************!*\
  !*** ./src/ts/demoV2/ui/codeConfig.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _constants_DEFAULT_CODE_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/DEFAULT_CODE_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_CODE_CONFIG.ts");
/* harmony import */ var _hash_putObjToHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/putObjToHash */ "./src/ts/demoV2/hash/putObjToHash.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors */ "./src/ts/demoV2/ui/editors.ts");




var equal = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");

function init() {
  $('#applyCodeConfig').click(function () {
    _editors__WEBPACK_IMPORTED_MODULE_2__.editors.code.setReadOnly(true);
    var config = (0,_editors__WEBPACK_IMPORTED_MODULE_2__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_2__.editors.code);
    (0,_hash_putObjToHash__WEBPACK_IMPORTED_MODULE_1__.putObjToHash)('code', equal(config, _constants_DEFAULT_CODE_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CODE_CONFIG) ? undefined : config);
    window.location.reload();
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/console/consoleConfig.ts":
/*!***************************************************!*\
  !*** ./src/ts/demoV2/ui/console/consoleConfig.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editors */ "./src/ts/demoV2/ui/editors.ts");

function init() {
  $('.clearConsole').click(function () {
    $('.clearConsole').each(function () {
      (0,_editors__WEBPACK_IMPORTED_MODULE_0__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_0__.editors.console, '');
    });
  });
  $('.scrollDown').click(function () {
    $('.scrollDown').each(function () {
      _editors__WEBPACK_IMPORTED_MODULE_0__.editors.console.gotoPageDown();
    });
  });
  $('.foldAll').click(function () {
    $('.foldAll').each(function () {
      _editors__WEBPACK_IMPORTED_MODULE_0__.editors.console.getSession().foldAll();
    });
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/console/index.ts":
/*!*******************************************!*\
  !*** ./src/ts/demoV2/ui/console/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initConsoleEditor": function() { return /* binding */ initConsoleEditor; }
/* harmony export */ });
function initConsoleEditor() {
  var editor = ace.edit('console_config_editor');
  editor.$blockScrolling = Infinity;
  editor.getSession().setMode('ace/mode/javascript'); // По факту курсор прячется, просто в ace.d.ts нет такого свойства
  // @ts-ignore

  editor.renderer.$cursorLayer.element.style.display = 'none';
  editor.setTheme('ace/theme/monokai');
  editor.setOptions({
    highlightGutterLine: false,
    // подсветка линии с ошибкой (выкл)
    readonly: true,
    // только на чтение
    highlightActiveLine: false,
    // подсветка последней лини (выкл)
    showPrintMargin: false,
    // печатные границы (выкл)
    useWorker: false // проверка синтаксиса и подсветка ошибок (выкл)

  });
  return editor;
}

/***/ }),

/***/ "./src/ts/demoV2/ui/demoConfig.ts":
/*!****************************************!*\
  !*** ./src/ts/demoV2/ui/demoConfig.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/DEFAULT_DEMO_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_DEMO_CONFIG.ts");
/* harmony import */ var _hash_putObjToHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/putObjToHash */ "./src/ts/demoV2/hash/putObjToHash.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors */ "./src/ts/demoV2/ui/editors.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var equal = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");

function init() {
  $('#applyDemoConfig').click(function () {
    _editors__WEBPACK_IMPORTED_MODULE_2__.editors.demo.setReadOnly(true);
    var config = (0,_editors__WEBPACK_IMPORTED_MODULE_2__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_2__.editors.demo);
    (0,_hash_putObjToHash__WEBPACK_IMPORTED_MODULE_1__.putObjToHash)('demo', equal(config, _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DEMO_CONFIG) ? undefined : config);
    window.location.reload();
  });
  $('#resetDemoConfig').click(function () {
    return (0,_editors__WEBPACK_IMPORTED_MODULE_2__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_2__.editors.demo, _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DEMO_CONFIG);
  });
  $('#betaDemoConfig').click(function () {
    return (0,_editors__WEBPACK_IMPORTED_MODULE_2__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_2__.editors.demo, _extends({}, _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DEMO_CONFIG, {
      iframeApi: _extends({}, _constants_DEFAULT_DEMO_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DEMO_CONFIG.iframeApi, {
        env: 'beta'
      })
    }));
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/editors.ts":
/*!*************************************!*\
  !*** ./src/ts/demoV2/ui/editors.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editors": function() { return /* binding */ editors; },
/* harmony export */   "getEditorValue": function() { return /* binding */ getEditorValue; },
/* harmony export */   "initEditor": function() { return /* binding */ initEditor; },
/* harmony export */   "setEditorValue": function() { return /* binding */ setEditorValue; }
/* harmony export */ });
/* harmony import */ var _constants_DEFAULT_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/DEFAULT_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_CONFIG.ts");
/* harmony import */ var _hash_getHashAsObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/getHashAsObject */ "./src/ts/demoV2/hash/getHashAsObject.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/ts/demoV2/ui/api/index.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/ts/demoV2/ui/console/index.ts");





function objToEditorValue(obj) {
  return "(" + JSON5.stringify(obj, null, '\t') + ");";
}

function parseEditorJSON(string) {
  return JSON5.parse(string.replace('({', '{').replace('})', '}').replace(';', ''));
}

function getEditorValue(editor) {
  if (editor === editors.code) {
    return editor.getValue();
  }

  return parseEditorJSON(editor.getValue());
}
function setEditorValue(editor, value) {
  var stringValue = typeof value === 'string' ? value : objToEditorValue(value);
  editor.setValue(stringValue);
  editor.clearSelection();
}
function initEditor(name, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'json' : _ref$type;

  var editor = ace.edit(name + "_config_editor");
  editor.$blockScrolling = Infinity;
  editor.getSession().setMode('ace/mode/javascript');
  editor.setTheme('ace/theme/monokai');
  editor.setShowPrintMargin(false);
  var hashObj = (0,_hash_getHashAsObject__WEBPACK_IMPORTED_MODULE_1__.getHashAsObject)();
  var value = hashObj[name] ? hashObj[name] : _constants_DEFAULT_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG[name];
  setEditorValue(editor, value);
  return editor;
}
var editors = {
  initial: initEditor('initial'),
  source: initEditor('source'),
  demo: initEditor('demo'),
  code: initEditor('code'),
  playerApi: (0,_api__WEBPACK_IMPORTED_MODULE_2__.initApiEditor)(),
  console: (0,_console__WEBPACK_IMPORTED_MODULE_3__.initConsoleEditor)()
};

/***/ }),

/***/ "./src/ts/demoV2/ui/index.ts":
/*!***********************************!*\
  !*** ./src/ts/demoV2/ui/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initUiApi": function() { return /* binding */ initUiApi; },
/* harmony export */   "initUiStatic": function() { return /* binding */ initUiStatic; }
/* harmony export */ });
/* harmony import */ var _api_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/apiConfig */ "./src/ts/demoV2/ui/api/apiConfig.ts");
/* harmony import */ var _api_apiPresets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apiPresets */ "./src/ts/demoV2/ui/api/apiPresets.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/ts/demoV2/ui/buttons.ts");
/* harmony import */ var _codeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codeConfig */ "./src/ts/demoV2/ui/codeConfig.ts");
/* harmony import */ var _console_consoleConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./console/consoleConfig */ "./src/ts/demoV2/ui/console/consoleConfig.ts");
/* harmony import */ var _demoConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demoConfig */ "./src/ts/demoV2/ui/demoConfig.ts");
/* harmony import */ var _initialConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialConfig */ "./src/ts/demoV2/ui/initialConfig.ts");
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sourceConfig */ "./src/ts/demoV2/ui/sourceConfig.ts");
/* harmony import */ var _sourcePresets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sourcePresets */ "./src/ts/demoV2/ui/sourcePresets.ts");
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toggler */ "./src/ts/demoV2/ui/toggler.ts");










function initUiStatic(initialConfig) {
  if (initialConfig === void 0) {
    initialConfig = {};
  }

  (0,_toggler__WEBPACK_IMPORTED_MODULE_9__.init)();
  (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.init)();
  (0,_initialConfig__WEBPACK_IMPORTED_MODULE_6__.init)();
  (0,_demoConfig__WEBPACK_IMPORTED_MODULE_5__.init)();
  (0,_sourcePresets__WEBPACK_IMPORTED_MODULE_8__.init)();
  (0,_codeConfig__WEBPACK_IMPORTED_MODULE_3__.init)();
  (0,_console_consoleConfig__WEBPACK_IMPORTED_MODULE_4__.init)();
  (0,_api_apiPresets__WEBPACK_IMPORTED_MODULE_1__.init)();

  if (initialConfig.size && initialConfig.size.height) {
    $('.player-row').css('height', initialConfig.size.height);
  }
}
function initUiApi(playerApi) {
  (0,_sourceConfig__WEBPACK_IMPORTED_MODULE_7__.init)(playerApi);
  (0,_api_apiConfig__WEBPACK_IMPORTED_MODULE_0__.init)(playerApi);
}

/***/ }),

/***/ "./src/ts/demoV2/ui/initialConfig.ts":
/*!*******************************************!*\
  !*** ./src/ts/demoV2/ui/initialConfig.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _constants_DEFAULT_INITIAL_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/DEFAULT_INITIAL_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_INITIAL_CONFIG.ts");
/* harmony import */ var _hash_putObjToHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/putObjToHash */ "./src/ts/demoV2/hash/putObjToHash.ts");
/* harmony import */ var _player_trackings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/trackings */ "./src/ts/demoV2/player/trackings.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors */ "./src/ts/demoV2/ui/editors.ts");





var equal = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");

function init() {
  $('#applyInitialConfig').click(function () {
    _editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial.setReadOnly(true);
    var config = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial);
    (0,_hash_putObjToHash__WEBPACK_IMPORTED_MODULE_1__.putObjToHash)('initial', equal(config, _constants_DEFAULT_INITIAL_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_INITIAL_CONFIG) ? undefined : config);
    window.location.reload();
  });
  $('#resetInitialConfig').click(function () {
    return (0,_editors__WEBPACK_IMPORTED_MODULE_3__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial, _constants_DEFAULT_INITIAL_CONFIG__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_INITIAL_CONFIG);
  });
  $('#addTrackingsInitialConfig').click(function () {
    var config = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial);
    config.source.trackings = (0,_player_trackings__WEBPACK_IMPORTED_MODULE_2__.createUniqueTrackings)();
    (0,_editors__WEBPACK_IMPORTED_MODULE_3__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial, config);
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/sourceConfig.ts":
/*!******************************************!*\
  !*** ./src/ts/demoV2/ui/sourceConfig.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/noop */ "./src/ts/util/noop.ts");
/* harmony import */ var _constants_DEFAULT_CONFIG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/DEFAULT_CONFIG */ "./src/ts/demoV2/constants/DEFAULT_CONFIG.ts");
/* harmony import */ var _hash_putObjToHash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hash/putObjToHash */ "./src/ts/demoV2/hash/putObjToHash.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors */ "./src/ts/demoV2/ui/editors.ts");
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggler */ "./src/ts/demoV2/ui/toggler.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var equal = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");

var isAbortControllerSupported = Boolean(window.AbortController);

function createAbortController() {
  return window.AbortController ? new AbortController() : undefined;
}

function init(playerApi) {
  $('#applySourceConfig').click(function () {
    var sourceConfig = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.source);
    (0,_hash_putObjToHash__WEBPACK_IMPORTED_MODULE_2__.putObjToHash)('source', equal(sourceConfig, _constants_DEFAULT_CONFIG__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CONFIG.source) ? undefined : sourceConfig);
    playerApi.setSource(sourceConfig)["catch"](function (e) {
      if (e && e.code === -1 && confirm('Reload page to set new source?')) {
        var nextConfig = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial);
        nextConfig.stream = nextConfig.stream || {};
        nextConfig.stream.mq = sourceConfig.streamUrl;
        (0,_hash_putObjToHash__WEBPACK_IMPORTED_MODULE_2__.putObjToHash)('initial', nextConfig);
        window.location.reload();
      }
    });
  });
  var abortPreloadBtn = $('#abortPreloadSourceConfig');

  if (!isAbortControllerSupported) {
    abortPreloadBtn.remove();
  }

  var abortController;
  $('#preloadSourceConfig').click(function () {
    var _abortController;

    var sourceConfig = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.source);
    (0,_hash_putObjToHash__WEBPACK_IMPORTED_MODULE_2__.putObjToHash)('source', equal(sourceConfig, _constants_DEFAULT_CONFIG__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CONFIG.source) ? undefined : sourceConfig);
    abortPreloadBtn.removeClass('disabled');
    abortController = createAbortController();
    playerApi.preloadSource(sourceConfig, {
      signal: (_abortController = abortController) == null ? void 0 : _abortController.signal
    })["catch"](_util_noop__WEBPACK_IMPORTED_MODULE_0__.noop).then(function () {
      abortPreloadBtn.addClass('disabled');
    });
  });
  abortPreloadBtn.click(function () {
    var _abortController2;

    if (abortPreloadBtn.hasClass('disabled')) {
      return;
    }

    (_abortController2 = abortController) == null ? void 0 : _abortController2.abort();
  });
  $('#applySourceConfigEventually').click(function () {
    setTimeout(function () {
      return $('#applySourceConfig').click();
    }, 5000);
  });
  $('#sourceConfigToInitial').click(function () {
    var source = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.source);
    var originalConfig = (0,_editors__WEBPACK_IMPORTED_MODULE_3__.getEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial);

    var mergedConfig = _extends({}, originalConfig, {
      source: source,
      stream: undefined
    });

    (0,_toggler__WEBPACK_IMPORTED_MODULE_4__.toggleEditor)('initial', true);
    (0,_editors__WEBPACK_IMPORTED_MODULE_3__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.initial, mergedConfig);
  });
  $('#resetSourceConfig').click(function () {
    $('#sourcePresets').val('default');
    (0,_editors__WEBPACK_IMPORTED_MODULE_3__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_3__.editors.source, _constants_DEFAULT_CONFIG__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CONFIG.source);
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/sourcePresets.ts":
/*!*******************************************!*\
  !*** ./src/ts/demoV2/ui/sourcePresets.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _util_parseAdConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/parseAdConfig */ "./src/ts/util/parseAdConfig.ts");
/* harmony import */ var _constants_SOURCE_PRESETS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/SOURCE_PRESETS */ "./src/ts/demoV2/constants/SOURCE_PRESETS.ts");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors */ "./src/ts/demoV2/ui/editors.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function renderOptions(optGroups) {
  return Object.keys(optGroups).reduce(function (groupAcc, groupName) {
    var group = optGroups[groupName];
    return groupAcc + "<optgroup label='" + groupName + "'>" + Object.keys(group).reduce(function (sourceAcc, sourceName) {
      var source = group[sourceName];
      var id = source.id || sourceName;
      return sourceAcc + "<option id='" + id + "'>" + sourceName + "</option>";
    }, '') + "</optgroup>";
  }, '');
}

var sources = _extends({}, _constants_SOURCE_PRESETS__WEBPACK_IMPORTED_MODULE_1__.SOURCE_PRESETS);

function init() {
  var $sourcepresets = $('#sourcePresets');
  $sourcepresets.append(renderOptions(sources));
  $sourcepresets.change(function (e) {
    var select = $(e.currentTarget);
    var sourceName = select.val();
    var groupName = select.find(':selected').parent().attr('label');
    var source = sources[groupName][sourceName];
    var sourceObject = typeof source === 'function' ? source() : source;

    if (typeof sourceObject === 'string') {
      sourceObject = {
        streamUrl: sourceObject
      };
    }

    (0,_editors__WEBPACK_IMPORTED_MODULE_2__.setEditorValue)(_editors__WEBPACK_IMPORTED_MODULE_2__.editors.source, sourceObject);
    _editors__WEBPACK_IMPORTED_MODULE_2__.editors.source.clearSelection();
  });
  $.getJSON('https://frontend.vh.yandex.ru/channels', function (_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        set = _ref.set;

    var getPrimaryStatus = function getPrimaryStatus(status) {
      var defaultStatus = 'other';

      if (!status) {
        return defaultStatus;
      } else if (status.indexOf('deleted') >= 0) {
        return 'deleted';
      } else if (status.indexOf('disabled') >= 0) {
        return 'disabled';
      } else if (status.indexOf('published') >= 0) {
        return 'published';
      }

      return defaultStatus;
    };

    set.sort(function (a, b) {
      return (a.title || '').localeCompare(b.title || '', 'ru');
    });
    var cmsSources = set.reduce(function (acc, current) {
      var title = current.title,
          content_url = current.content_url,
          _current$adConfig = current.adConfig,
          adConfig = _current$adConfig === void 0 ? {} : _current$adConfig,
          _current$status = current.status,
          status = _current$status === void 0 ? [] : _current$status;

      if (title && content_url) {
        var groupName = "CMS " + getPrimaryStatus(status);

        if (acc[groupName] === undefined) {
          acc[groupName] = {};
        }

        acc[groupName][title] = {
          streams: [{
            url: content_url
          }],
          adConfig: (0,_util_parseAdConfig__WEBPACK_IMPORTED_MODULE_0__.parseAdConfig)(adConfig)
        };
      }

      return acc;
    }, {
      'CMS published': {},
      'CMS deleted': {}
    });
    sources = _extends({}, sources, cmsSources);
    $sourcepresets.append(renderOptions(cmsSources));
  });
}

/***/ }),

/***/ "./src/ts/demoV2/ui/toggler.ts":
/*!*************************************!*\
  !*** ./src/ts/demoV2/ui/toggler.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ init; },
/* harmony export */   "toggleEditor": function() { return /* binding */ toggleEditor; }
/* harmony export */ });
/* harmony import */ var _util_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/storage */ "./src/ts/util/storage.ts");

function toggleEditor(name, isOpen) {
  var toggler = $("[data-toggler=" + name + "]");
  toggler.toggleClass('open', isOpen);
  toggler.next('.row').toggleClass('hidden', !isOpen);
}
function init() {
  $('[data-toggler]').each(function () {
    // eslint-disable-next-line @typescript-eslint/no-invalid-this
    var toggler = $(this);
    var name = toggler.data('toggler');
    var isOpen = _util_storage__WEBPACK_IMPORTED_MODULE_0__.storage.getItem("toggler_" + name) === 'true';
    toggleEditor(name, isOpen);
  }).click(function () {
    // eslint-disable-next-line @typescript-eslint/no-invalid-this
    var toggler = $(this);
    var name = toggler.data('toggler');
    var nextOpen = !toggler.hasClass('open');
    toggleEditor(name, nextOpen);
    _util_storage__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("toggler_" + name, String(nextOpen));
  });
}

/***/ }),

/***/ "./src/ts/demoV2/utils/console.ts":
/*!****************************************!*\
  !*** ./src/ts/demoV2/utils/console.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consoleLog": function() { return /* binding */ consoleLog; }
/* harmony export */ });
/* harmony import */ var _ui_editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/editors */ "./src/ts/demoV2/ui/editors.ts");
/* eslint-disable no-console */


/**
 * Вывод данных в editors.console и дублирование в обычную консоль
 * @param args
 */
function consoleLog() {
  var _console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var stringValue = args.map(function (value) {
    return typeof value === 'string' ? value : JSON5.stringify(value, null, '\t');
  }).join(' ');
  var editor = _ui_editors__WEBPACK_IMPORTED_MODULE_0__.editors.console; //  Вывод в консоль стенда

  editor.moveCursorTo(0);
  editor.insert('\n');
  editor.moveCursorTo(0);
  editor.insert(stringValue); // Дублирование в консоль тулзов

  (_console = console).log.apply(_console, ['>>>'].concat(args));
}

/***/ }),

/***/ "./src/ts/demoV2/utils/presets.ts":
/*!****************************************!*\
  !*** ./src/ts/demoV2/utils/presets.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPreset": function() { return /* binding */ createPreset; }
/* harmony export */ });
/**
 * Формат данных для описания примера параметров АПИ
 */

/**
 * Делает объект примера пресета
 * Строку коммента оборачивает в нужный вид для вывода в консоль стенда
 * @param data
 * @param comment
 */
function createPreset(comment, data) {
  if (comment === void 0) {
    comment = '';
  }

  if (data === void 0) {
    data = '';
  }

  return {
    data: data,
    comment: comment ? "// " + comment : undefined
  };
}

/***/ }),

/***/ "./src/ts/demoV2/utils/updateBufferedTime.ts":
/*!***************************************************!*\
  !*** ./src/ts/demoV2/utils/updateBufferedTime.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateBufferedTime": function() { return /* binding */ updateBufferedTime; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/number/isFiniteNumber */ "./node_modules/@yandex-int/any.common/ts/number/isFiniteNumber/index.js");

function updateBufferedTime(bufferedTime) {
  document.getElementById('bufferedTime').innerHTML = (0,_yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__.isFiniteNumber)(bufferedTime) ? bufferedTime.toFixed(2) : '----';
}

/***/ }),

/***/ "./src/ts/demoV2/utils/updateLiveLatency.ts":
/*!**************************************************!*\
  !*** ./src/ts/demoV2/utils/updateLiveLatency.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLiveLatency": function() { return /* binding */ updateLiveLatency; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/number/isFiniteNumber */ "./node_modules/@yandex-int/any.common/ts/number/isFiniteNumber/index.js");

function updateLiveLatency(liveLatency) {
  document.getElementById('liveLatency').innerHTML = (0,_yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__.isFiniteNumber)(liveLatency) ? liveLatency.toFixed(2) : '----';
}

/***/ }),

/***/ "./src/ts/demoV2/utils/updateUTC.ts":
/*!******************************************!*\
  !*** ./src/ts/demoV2/utils/updateUTC.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateUTC": function() { return /* binding */ updateUTC; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/number/isFiniteNumber */ "./node_modules/@yandex-int/any.common/ts/number/isFiniteNumber/index.js");

function updateUTC(utcStartTime, currentTime) {
  document.getElementById('utcPosition').innerHTML = (0,_yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__.isFiniteNumber)(currentTime) && (0,_yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__.isFiniteNumber)(utcStartTime) ? (utcStartTime + currentTime).toFixed(2) : '--';
}

/***/ }),

/***/ "./src/ts/demoV2/utils/updateWatchedTime.ts":
/*!**************************************************!*\
  !*** ./src/ts/demoV2/utils/updateWatchedTime.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateWatchedTime": function() { return /* binding */ updateWatchedTime; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/number/isFiniteNumber */ "./node_modules/@yandex-int/any.common/ts/number/isFiniteNumber/index.js");

function updateWatchedTime(watchedTime) {
  document.getElementById('watchedTime').innerHTML = (0,_yandex_int_any_common_ts_number_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__.isFiniteNumber)(watchedTime) ? watchedTime.toFixed(2) : '----';
}

/***/ }),

/***/ "./src/ts/test/assets/DEFAULT_STREAMS.ts":
/*!***********************************************!*\
  !*** ./src/ts/test/assets/DEFAULT_STREAMS.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BEST_OFFER_DASH_VOD": function() { return /* binding */ BEST_OFFER_DASH_VOD; },
/* harmony export */   "DASH_TEXT_TRACKS_RFC5646": function() { return /* binding */ DASH_TEXT_TRACKS_RFC5646; },
/* harmony export */   "DRM_DASH": function() { return /* binding */ DRM_DASH; },
/* harmony export */   "HOST": function() { return /* binding */ HOST; },
/* harmony export */   "LIVE": function() { return /* binding */ LIVE; },
/* harmony export */   "MULTIPLE_AUDIO_BITRATE_DASH_VOD": function() { return /* binding */ MULTIPLE_AUDIO_BITRATE_DASH_VOD; },
/* harmony export */   "ONE_TEXT_TRACK": function() { return /* binding */ ONE_TEXT_TRACK; },
/* harmony export */   "OTT_FILM_TWO_AUDIO_TRACKS": function() { return /* binding */ OTT_FILM_TWO_AUDIO_TRACKS; },
/* harmony export */   "SOURCES_VOD": function() { return /* binding */ SOURCES_VOD; },
/* harmony export */   "SOVSEC_VOD": function() { return /* binding */ SOVSEC_VOD; },
/* harmony export */   "VOD": function() { return /* binding */ VOD; },
/* harmony export */   "VOD_5_MIN": function() { return /* binding */ VOD_5_MIN; },
/* harmony export */   "VOD_DASH": function() { return /* binding */ VOD_DASH; },
/* harmony export */   "VOD_DASH2": function() { return /* binding */ VOD_DASH2; },
/* harmony export */   "VOD_EDA": function() { return /* binding */ VOD_EDA; },
/* harmony export */   "VOD_TWO_AUDIO_TRACKS": function() { return /* binding */ VOD_TWO_AUDIO_TRACKS; },
/* harmony export */   "VOD_TWO_AUDIO_TRACKS_WITH_FAKED_LANGS": function() { return /* binding */ VOD_TWO_AUDIO_TRACKS_WITH_FAKED_LANGS; },
/* harmony export */   "VOD_TWO_TEXT_TRACKS": function() { return /* binding */ VOD_TWO_TEXT_TRACKS; }
/* harmony export */ });
/* harmony import */ var _yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/ims.opaque-types/lib */ "./node_modules/@yandex-int/ims.opaque-types/lib/index.js");
/* eslint-disable no-cyrillic-string/no-cyrillic-string */

var HOST = 'stream-player-js.s3.mds.yandex.net';
var ONE_TEXT_TRACK = {
  name: 'hls with two text tracks',
  url: "https://" + HOST + "/subtitles-playlist-one-track/master.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(60.093),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  textTracks: [{
    name: 'Русский',
    value: '0',
    lang: 'ru'
  }]
};
var VOD_TWO_TEXT_TRACKS = {
  name: 'hls with two text tracks',
  url: "https://stands.s3.yandex.net/streams/subtitles-playlist-two-tracks/master.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(60.093),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  textTracks: [{
    name: 'Русский',
    value: '0',
    lang: 'ru'
  }, {
    name: 'English',
    value: '1',
    lang: 'en'
  }]
};
var VOD_TWO_AUDIO_TRACKS = {
  name: 'hls with two text tracks',
  url: "https://" + HOST + "/faked-multiple-audio-tracks/index.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(60.093),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  chunkExtension: 'ts',
  audioTracks: [{
    name: 'русский',
    value: '0',
    lang: 'ru'
  }, {
    name: 'английский',
    value: '1',
    lang: 'en'
  }]
};
var OTT_FILM_TWO_AUDIO_TRACKS = {
  name: 'ott hls film with two text tracks',
  url: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/master.m3u8',
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(60.093),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  chunkExtension: 'ts',
  audioTracks: [{
    name: 'русский',
    value: '0',
    lang: 'ru'
  }, {
    name: 'английский',
    value: '1',
    lang: 'en'
  }],
  tracks: [{
    name: '1080p',
    value: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/1080p.m3u8',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1920),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1080),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(5008.028)
  }, {
    name: '720p',
    value: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/720p.m3u8',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1280),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(720),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(3230.392)
  }, {
    name: '576p',
    value: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/576p.m3u8',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1024),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(576),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(2031.162)
  }, {
    name: '504p',
    value: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/504p.m3u8',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(896),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(504),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(1230.19)
  }, {
    name: '432p',
    value: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/432p.m3u8',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(768),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(432),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(1030.527)
  }, {
    name: '360p',
    value: 'https://stands.s3.yandex.net/video-player/ott_hls_two_audio_tracks/360p.m3u8',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(640),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(360),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(729.809)
  }]
};
var VOD_TWO_AUDIO_TRACKS_WITH_FAKED_LANGS = {
  name: 'hls with two text tracks',
  url: "https://" + HOST + "/faked-multiple-audio-tracks-faked-langs/index.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(60.093),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  audioTracks: [{
    name: 'русский',
    value: '0',
    lang: 'en'
  }, {
    name: 'английский',
    value: '1',
    lang: 'fk'
  }]
};
var VOD_DASH2 = {
  name: 'vod dash (vh-playertest)',
  url: 'https://strm.yandex.ru/vh-playertest/vod_dash/manifest.mpd',
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(98.208),
  tracks: [{
    name: '1080p',
    value: 'v1-x3',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1920),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1080),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(4625.275)
  }, {
    name: '720p',
    value: 'v1-x4',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1280),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(720),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(3007.924)
  }, {
    name: '576p',
    value: 'v1-x2',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1024),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(576),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(1894.081)
  }, {
    name: '480p',
    value: 'v1-x1',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(854),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(480),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(1157.342)
  }, {
    name: '360p',
    value: 'v1-x6',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(640),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(360),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(679.391)
  }, {
    name: '240p',
    value: 'v1-x5',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(426),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(240),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(583.968)
  }],
  audioTracks: [{
    name: 'Русский_128'
  }],
  textTracks: []
};
var BEST_OFFER_DASH_VOD = {
  name: 'Best offer - Dash (2 audio, 2 subtitles)',
  url: 'https://strm.yandex.ru/vh-playertest/dash-best-offer/manifest.mpd',
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(59),
  tracks: [{
    name: '1080p',
    value: '12',
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1920),
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(1080),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(4609.448)
  }, {
    name: '432p',
    value: '13',
    height: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(432),
    width: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toPixels)(768),
    bitrate: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toKbps)(890.831)
  }],
  audioTracks: [{
    name: 'ru',
    lang: 'ru'
  }, {
    name: 'en',
    lang: 'en'
  }],
  textTracks: [{
    name: 'ru',
    lang: 'ru'
  }, {
    name: 'en',
    lang: 'en'
  }]
};
var MULTIPLE_AUDIO_BITRATE_DASH_VOD = {
  name: 'Multiple audio bitrate (dash vod)',
  url: 'https://stands.s3.mds.yandex.net/streams/dash-multiple-audio-bitrate/manifest.mpd',
  duration: 36,
  tracks: [{
    width: 1920,
    height: 1080,
    name: '1080p'
  }, {
    width: 1280,
    height: 720,
    name: '720p'
  }, {
    width: 1024,
    height: 576,
    name: '576p'
  }, {
    width: 854,
    height: 480,
    name: '480p'
  }, {
    width: 640,
    height: 360,
    name: '360p'
  }, {
    width: 426,
    height: 240,
    name: '240p'
  }],
  audioTracks: [{
    lang: 'rus'
  }, {
    lang: 'eng'
  }]
};
var VOD = {
  name: 'sovsec one min (hls vod)',
  url: "https://" + HOST + "/sovsec_one_min/sovsec0.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(60.093),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  tracks: [{
    name: '576p',
    value: "https://" + HOST + "/sovsec_one_min/sovsec0_54_576p/sovsec0_54_576p.m3u8" + '?end=1502881850&start=1502881800&vsid=eybanbsf4rytr7q'
  }, {
    name: '240p',
    value: "https://" + HOST + "/sovsec_one_min/sovsec0_54_240p/sovsec0_54_240p.m3u8" + '?end=1502881850&start=1502881800&vsid=eybanbsf4rytr7q'
  }],
  chunkExtension: 'ts'
};
var VOD_EDA = {
  name: 'eda (hls vod)',
  url: "https://" + HOST + "/edatv_40_sec/edatv0.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(40.069677),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10),
  tracks: [{
    name: '576p',
    value: "https://" + HOST + "/edatv_40_sec/edatv0_169_576p/edatv0_169_576p.m3u8" + '?end=1503588260&start=1503588230&vsid=rmblqjhzsakroct'
  }, {
    name: '480p',
    value: "https://" + HOST + "/edatv_40_sec/edatv0_169_480p/edatv0_169_480p.m3u8" + '?end=1503588260&start=1503588230&vsid=rmblqjhzsakroct'
  }, {
    name: '240p',
    value: "https://" + HOST + "/edatv_40_sec/edatv0_169_270p/edatv0_169_270p.m3u8" + '?end=1503588260&start=1503588230&vsid=rmblqjhzsakroct'
  }],
  programDateTime: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(1503588230)
};
var SOVSEC_VOD = {
  name: 'sovsec (hls vod)',
  url: 'https://stream-player-js.s3.mds.yandex.net/sovsec/sovsec0.m3u8',
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(20),
  programDateTime: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(1500966640)
};
var VOD_5_MIN = {
  name: '5 min (hls vod)',
  url: "https://" + HOST + "/edatv_5_min/edatv0.m3u8",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(300),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10)
};
var LIVE = {
  name: 'demo_channel (hls live)',
  url: 'https://strm.yandex.ru/kal/demo_channel/demo_channel0.m3u8',
  duration: Infinity,
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(10)
};
var VOD_DASH = {
  name: 'vh-ya-news-converted (dash vod)',
  url: 'https://stands.s3.yandex.net/streams/vod-dash-news/manifest.mpd',
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(79.28),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(5),
  chunkExtension: 'm4s',
  tracks: [{
    name: '1080p'
  }, {
    name: '720p'
  }, {
    name: '576p'
  }, {
    name: '480p'
  }, {
    name: '360p'
  }]
};
var SOURCES_VOD = [VOD, VOD_DASH];
var DRM_DASH = {
  name: 'drm dash',
  url: 'https://strm.yandex.ru/vh-ott-converted/ott-content/test/428908214/436bd5d2-8aa9-fdfc-a558-e95fb58993f1.ism/manifest.mpd',
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(300)
};
var DASH_TEXT_TRACKS_RFC5646 = {
  name: 'dash with rfc 5646 text and audio tracks',
  url: "https://" + HOST + "/dash-best-offer/manifest-rfc5646.mpd",
  duration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(59),
  fragDuration: (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.toSeconds)(5),
  textTracks: [{
    name: 'Русский (Новамедиа)',
    lang: 'ru-ru-x-novamedia'
  }, {
    name: 'en',
    lang: 'en'
  }],
  audioTracks: [{
    name: 'Русский (Новамедиа)',
    lang: 'ru-ru-x-novamedia'
  }, {
    name: 'en',
    lang: 'en'
  }]
};

/***/ }),

/***/ "./src/ts/test/constants/AD_CONFIGS.ts":
/*!*********************************************!*\
  !*** ./src/ts/test/constants/AD_CONFIGS.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD_CONFIGS": function() { return /* binding */ AD_CONFIGS; }
/* harmony export */ });
var AD_CONFIGS = {
  preroll: {
    partnerId: 291193,
    category: 0
  },
  midroll: {
    partnerId: 291194,
    category: 0,
    hasPreroll: false
  },
  postroll: {
    partnerId: 291195,
    category: 0,
    hasPreroll: false
  }
};

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

/***/ "./src/ts/typings/v2/PlayerApiEvents.ts":
/*!**********************************************!*\
  !*** ./src/ts/typings/v2/PlayerApiEvents.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerApiEventName": function() { return /* reexport safe */ _packages_public_types_src_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_0__.PlayerApiEventName; }
/* harmony export */ });
/* harmony import */ var _packages_public_types_src_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../packages/public-types/src/PlayerApiEvents */ "./packages/public-types/src/PlayerApiEvents.ts");



/***/ }),

/***/ "./src/ts/util/addMacroTemplatesToUrl.ts":
/*!***********************************************!*\
  !*** ./src/ts/util/addMacroTemplatesToUrl.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMacroTemplatesToUrl": function() { return /* binding */ addMacroTemplatesToUrl; }
/* harmony export */ });
function addMacroTemplatesToUrl(url, macroNames) {
  return macroNames.reduce(function (previousValue, currentValue) {
    return previousValue + "&" + currentValue + "={{" + currentValue + "}}";
  }, url + (url.indexOf('?') === -1 ? '?' : ''));
}

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

/***/ "./src/ts/util/parseAdConfig.ts":
/*!**************************************!*\
  !*** ./src/ts/util/parseAdConfig.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAdConfig": function() { return /* binding */ parseAdConfig; }
/* harmony export */ });
/* harmony import */ var _const_DEFAULT_AD_CATEGORY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/DEFAULT_AD_CATEGORY */ "./src/ts/const/DEFAULT_AD_CATEGORY.ts");
var _excluded = ["partnerId", "partner_id", "category", "impId", "imp_id", "hasPreroll", "videoContentId", "video_content_id", "videoContentName", "video_content_name", "videoPublisherId", "video_publisher_id", "videoPublisherName", "video_publisher_name", "videoGenreId", "video_genre_id", "videoGenreName", "video_genre_name", "distrId", "distr_id", "adBreaks"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * https://a.yandex-team.ru/arcadia/adv/pcode/web/ad-sdk-js/src/ts/adsdk/VMAP/typings/AdBreakIdentificationParameters.ts
 * Внутренняя сущность ad-sdk.
 * Добавлены при обновлении ad-sdk, чтобы проходили проверки типов.
 */
var DEFAULT_IMP_ID = 0;
function parseAdConfig(adConfig) {
  var partnerId = adConfig.partnerId,
      _adConfig$partner_id = adConfig.partner_id,
      partner_id = _adConfig$partner_id === void 0 ? partnerId : _adConfig$partner_id,
      _adConfig$category = adConfig.category,
      category = _adConfig$category === void 0 ? _const_DEFAULT_AD_CATEGORY__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_AD_CATEGORY : _adConfig$category,
      impId = adConfig.impId,
      _adConfig$imp_id = adConfig.imp_id,
      imp_id = _adConfig$imp_id === void 0 ? impId : _adConfig$imp_id,
      hasPreroll = adConfig.hasPreroll,
      videoContentId = adConfig.videoContentId,
      _adConfig$video_conte = adConfig.video_content_id,
      video_content_id = _adConfig$video_conte === void 0 ? videoContentId : _adConfig$video_conte,
      videoContentName = adConfig.videoContentName,
      _adConfig$video_conte2 = adConfig.video_content_name,
      video_content_name = _adConfig$video_conte2 === void 0 ? videoContentName : _adConfig$video_conte2,
      videoPublisherId = adConfig.videoPublisherId,
      _adConfig$video_publi = adConfig.video_publisher_id,
      video_publisher_id = _adConfig$video_publi === void 0 ? videoPublisherId : _adConfig$video_publi,
      videoPublisherName = adConfig.videoPublisherName,
      _adConfig$video_publi2 = adConfig.video_publisher_name,
      video_publisher_name = _adConfig$video_publi2 === void 0 ? videoPublisherName : _adConfig$video_publi2,
      videoGenreId = adConfig.videoGenreId,
      _adConfig$video_genre = adConfig.video_genre_id,
      video_genre_id = _adConfig$video_genre === void 0 ? videoGenreId : _adConfig$video_genre,
      videoGenreName = adConfig.videoGenreName,
      _adConfig$video_genre2 = adConfig.video_genre_name,
      video_genre_name = _adConfig$video_genre2 === void 0 ? videoGenreName : _adConfig$video_genre2,
      distrId = adConfig.distrId,
      _adConfig$distr_id = adConfig.distr_id,
      distr_id = _adConfig$distr_id === void 0 ? distrId : _adConfig$distr_id,
      adBreaks = adConfig.adBreaks,
      rest = _objectWithoutPropertiesLoose(adConfig, _excluded);

  return _extends({}, rest, {
    partnerId: Number(partner_id),
    category: Number(category),
    impId: imp_id !== undefined ? parseInt(String(imp_id), 10) || DEFAULT_IMP_ID : undefined,
    hasPreroll: typeof hasPreroll === 'boolean' ? hasPreroll : undefined,
    videoContentId: video_content_id,
    videoContentName: video_content_name,
    videoPublisherId: video_publisher_id,
    videoPublisherName: video_publisher_name,
    videoGenreId: video_genre_id,
    videoGenreName: video_genre_name,
    distrId: distr_id,
    adBreaks: adBreaks
  });
}

/***/ }),

/***/ "./src/ts/util/storage.ts":
/*!********************************!*\
  !*** ./src/ts/util/storage.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": function() { return /* binding */ storage; }
/* harmony export */ });
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! local-storage-fallback */ "./node_modules/local-storage-fallback/lib/index.js");

var storage = {
  getItem: function getItem(key) {
    try {
      return local_storage_fallback__WEBPACK_IMPORTED_MODULE_0__["default"].getItem(key);
    } catch (_unused) {
      return null;
    }
  },
  setItem: function setItem(key, value) {
    try {
      local_storage_fallback__WEBPACK_IMPORTED_MODULE_0__["default"].setItem(key, value);
    } catch (_unused2) {//
    }
  },
  removeItem: function removeItem(key) {
    try {
      local_storage_fallback__WEBPACK_IMPORTED_MODULE_0__["default"].removeItem(key);
    } catch (_unused3) {//
    }
  },
  clear: function clear() {
    try {
      local_storage_fallback__WEBPACK_IMPORTED_MODULE_0__["default"].clear();
    } catch (_unused4) {//
    }
  }
};

/***/ }),

/***/ "./stream-player-js/src/constants/DEFAULT_VSID.ts":
/*!********************************************************!*\
  !*** ./stream-player-js/src/constants/DEFAULT_VSID.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_VSID": function() { return /* binding */ DEFAULT_VSID; }
/* harmony export */ });
var DEFAULT_VSID = '0000000000000000000000000000000000000000000000000000000000000000';

/***/ }),

/***/ "./stream-player-js/src/constants/META_INFO_URL_TIMESTAMP_MACRO.ts":
/*!*************************************************************************!*\
  !*** ./stream-player-js/src/constants/META_INFO_URL_TIMESTAMP_MACRO.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "META_INFO_URL_TIMESTAMP_MACRO": function() { return /* binding */ META_INFO_URL_TIMESTAMP_MACRO; }
/* harmony export */ });
var META_INFO_URL_TIMESTAMP_MACRO = 'video-timestamp';

/***/ }),

/***/ "./stream-player-js/src/errors/getStreamPlayerErrorCategory/index.ts":
/*!***************************************************************************!*\
  !*** ./stream-player-js/src/errors/getStreamPlayerErrorCategory/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStreamPlayerErrorCategory": function() { return /* binding */ getStreamPlayerErrorCategory; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_utils_isNever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/utils/isNever */ "./node_modules/@yandex-int/any.common/ts/utils/isNever/index.js");
/* harmony import */ var _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/ts/typings/v2/ErrorCategory */ "./src/ts/typings/v2/ErrorCategory.ts");
/* harmony import */ var _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stats/StreamPlayerError */ "./stream-player-js/src/stats/StreamPlayerError.ts");



/**
 * https://st.yandex-team.ru/PLAYERWEB-2091#5efa088333d457787638a10c
 */

function getStreamPlayerErrorCategory(code) {
  switch (code) {
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.DEFAULT_ERROR:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.DEFAULT;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.BROADCAST_AD_BLOCK_INIT_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.AD_TYPE_IS_NOT_RECOGNIZED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.AD_IS_ALREADY_PLAYING:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MULTIROLL_INIT_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.PLAY_AD_VIEWERS_ERROR:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.ADS;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.INVALID_METADATA:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NO_STREAMS:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.CONFIG;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.YANDEX_RPC_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.ON_TICK_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SAGA_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SHAKA_FILTER_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SHAKA_CONFIGURE_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SHAKA_LOAD_SOURCE_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.REFRESH_SUBTITLES_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NO_HLS_JS_INSTANCE:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.REACT_COMPONENT_DID_CATCH_ERROR_INFO:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.RECOVER_TASK_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.PRELOAD_SOURCE_FAILED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MEDIA_ERR_ABORTED:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.EXCEPTION;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.UNSUPPORTED_MEDIA_TYPE:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NATIVE_HLS_NOT_SUPPORTED_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.HLS_JS_NOT_SUPPORTED_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MEDIA_ERR_SRC_NOT_SUPPORTED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MEDIA_ERR_CUSTOM:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MEDIA_ERR_DECODE:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.REPRESENTATION_CHANGE:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.MEDIA;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SCRIPT_INIT_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MPD_SHAKA_INIT_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.META_INFO_REQUEST_FAILED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.STRM_ABD_INVALID_RESPONSE:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.NETWORK_PLAYER;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MEDIA_ERR_NETWORK:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.NETWORK_MEDIA;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MPD_WIDEVINE_CERT_LOAD_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_CERT_LOAD_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_CREATE_MEDIA_KEYS_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_CREATE_KEY_SESSION_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_SPC_LOAD_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_CREATE_KEY_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_INVALID_CONTENT_ID:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.DRM_PROXY_ERROR:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.DRM_PROXY_ERROR_SIGNATURE_EXPIRED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.MEDIA_ERR_ENCRYPTED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.FAIRPLAY_NOT_SUPPORTED:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NO_DRM:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.DRM;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.REGIONAL_LIMITATION_MANIFEST:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.REGIONAL_LIMITATION_LEVEL:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.REGIONAL_LIMITATION_SEGMENT:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.REGIONAL;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SIGNATURE_EXPIRED_MANIFEST:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SIGNATURE_EXPIRED_LEVEL:
    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.SIGNATURE_EXPIRED_SEGMENT:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.ACCESS;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NO_CODECS:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.NO_CODECS;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NO_PLAYABLE_STREAMS:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.CANNOT_PLAY;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.NO_MSE:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.UNSUPPORTED_ENV;

    case _stats_StreamPlayerError__WEBPACK_IMPORTED_MODULE_2__.StreamPlayerErrorCode.INVALID_STREAM_URL:
      return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.INVALID_STREAM_URL;

    default:
  }

  return _src_ts_typings_v2_ErrorCategory__WEBPACK_IMPORTED_MODULE_1__.ErrorCategory.DEFAULT;
}

/***/ }),

/***/ "./stream-player-js/src/stats/StreamPlayerError.ts":
/*!*********************************************************!*\
  !*** ./stream-player-js/src/stats/StreamPlayerError.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamPlayerErrorCode": function() { return /* binding */ StreamPlayerErrorCode; }
/* harmony export */ });
var StreamPlayerErrorCode;
/**
 * С объектом ошибки не отправляются никакие дополнительные данные
 */

(function (StreamPlayerErrorCode) {
  StreamPlayerErrorCode["DEFAULT_ERROR"] = "DEFAULT_ERROR";
  StreamPlayerErrorCode["YANDEX_RPC_ERROR"] = "YANDEX_RPC_ERROR";
  StreamPlayerErrorCode["BROADCAST_AD_BLOCK_INIT_ERROR"] = "BROADCAST_AD_BLOCK_INIT_ERROR";
  StreamPlayerErrorCode["AD_TYPE_IS_NOT_RECOGNIZED"] = "AD_TYPE_IS_NOT_RECOGNIZED";
  StreamPlayerErrorCode["INVALID_METADATA"] = "INVALID_METADATA";
  StreamPlayerErrorCode["INVALID_STREAM_URL"] = "INVALID_STREAM_URL";
  StreamPlayerErrorCode["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
  StreamPlayerErrorCode["SCRIPT_INIT_ERROR"] = "SCRIPT_INIT_ERROR";
  StreamPlayerErrorCode["MPD_WIDEVINE_CERT_LOAD_ERROR"] = "MPD_WIDEVINE_CERT_LOAD_ERROR";
  StreamPlayerErrorCode["MPD_SHAKA_INIT_ERROR"] = "MPD_SHAKA_INIT_ERROR";
  StreamPlayerErrorCode["NATIVE_HLS_NOT_SUPPORTED_ERROR"] = "NATIVE_HLS_NOT_SUPPORTED_ERROR";
  StreamPlayerErrorCode["HLS_JS_NOT_SUPPORTED_ERROR"] = "HLS_JS_NOT_SUPPORTED_ERROR";
  StreamPlayerErrorCode["REFRESH_SUBTITLES_ERROR"] = "REFRESH_SUBTITLES_ERROR";
  StreamPlayerErrorCode["ON_TICK_ERROR"] = "ON_TICK_ERROR";
  StreamPlayerErrorCode["FAIRPLAY_NOT_SUPPORTED"] = "FAIRPLAY_NOT_SUPPORTED";
  StreamPlayerErrorCode["FAIRPLAY_CERT_LOAD_ERROR"] = "FAIRPLAY_CERT_LOAD_ERROR";
  StreamPlayerErrorCode["FAIRPLAY_CREATE_MEDIA_KEYS_ERROR"] = "FAIRPLAY_CREATE_MEDIA_KEYS_ERROR";
  StreamPlayerErrorCode["FAIRPLAY_CREATE_KEY_SESSION_ERROR"] = "FAIRPLAY_CREATE_KEY_SESSION_ERROR";
  StreamPlayerErrorCode["FAIRPLAY_SPC_LOAD_ERROR"] = "FAIRPLAY_SPC_LOAD_ERROR";
  StreamPlayerErrorCode["FAIRPLAY_CREATE_KEY_ERROR"] = "FAIRPLAY_CREATE_KEY_ERROR";
  StreamPlayerErrorCode["FAIRPLAY_INVALID_CONTENT_ID"] = "FAIRPLAY_INVALID_CONTENT_ID";
  StreamPlayerErrorCode["DRM_PROXY_ERROR"] = "DRM_PROXY_ERROR";
  StreamPlayerErrorCode["DRM_PROXY_ERROR_SIGNATURE_EXPIRED"] = "DRM_PROXY_ERROR_SIGNATURE_EXPIRED";
  StreamPlayerErrorCode["NO_HLS_JS_INSTANCE"] = "NO_HLS_JS_INSTANCE";
  StreamPlayerErrorCode["AD_IS_ALREADY_PLAYING"] = "AD_IS_ALREADY_PLAYING";
  StreamPlayerErrorCode["META_INFO_REQUEST_FAILED"] = "META_INFO_REQUEST_FAILED";
  StreamPlayerErrorCode["MULTIROLL_INIT_ERROR"] = "MULTIROLL_INIT_ERROR";
  StreamPlayerErrorCode["REACT_COMPONENT_DID_CATCH_ERROR_INFO"] = "REACT_COMPONENT_DID_CATCH_ERROR_INFO";
  StreamPlayerErrorCode["PLAY_AD_VIEWERS_ERROR"] = "PLAY_AD_VIEWERS_ERROR";
  StreamPlayerErrorCode["SAGA_ERROR"] = "SAGA_ERROR";
  StreamPlayerErrorCode["STRM_ABD_INVALID_RESPONSE"] = "STRM_ABD_INVALID_RESPONSE";
  StreamPlayerErrorCode["REPRESENTATION_CHANGE"] = "REPRESENTATION_CHANGE";
  StreamPlayerErrorCode["RECOVER_TASK_ERROR"] = "RECOVER_TASK_ERROR";
  StreamPlayerErrorCode["PRELOAD_SOURCE_FAILED"] = "PRELOAD_SOURCE_FAILED";
  StreamPlayerErrorCode["REGIONAL_LIMITATION_MANIFEST"] = "REGIONAL_LIMITATION_MANIFEST";
  StreamPlayerErrorCode["REGIONAL_LIMITATION_LEVEL"] = "REGIONAL_LIMITATION_LEVEL";
  StreamPlayerErrorCode["REGIONAL_LIMITATION_SEGMENT"] = "REGIONAL_LIMITATION_SEGMENT";
  StreamPlayerErrorCode["SIGNATURE_EXPIRED_MANIFEST"] = "SIGNATURE_EXPIRED_MANIFEST";
  StreamPlayerErrorCode["SIGNATURE_EXPIRED_LEVEL"] = "SIGNATURE_EXPIRED_LEVEL";
  StreamPlayerErrorCode["SIGNATURE_EXPIRED_SEGMENT"] = "SIGNATURE_EXPIRED_SEGMENT";
  StreamPlayerErrorCode["NO_STREAMS"] = "NO_STREAMS";
  StreamPlayerErrorCode["NO_CODECS"] = "NO_CODECS";
  StreamPlayerErrorCode["NO_MSE"] = "NO_MSE";
  StreamPlayerErrorCode["NO_DRM"] = "NO_DRM";
  StreamPlayerErrorCode["NO_PLAYABLE_STREAMS"] = "NO_PLAYABLE_STREAMS";
  StreamPlayerErrorCode["SHAKA_FILTER_ERROR"] = "SHAKA_FILTER_ERROR";
  StreamPlayerErrorCode["SHAKA_CONFIGURE_ERROR"] = "SHAKA_CONFIGURE_ERROR";
  StreamPlayerErrorCode["SHAKA_LOAD_SOURCE_ERROR"] = "SHAKA_LOAD_SOURCE_ERROR";
  StreamPlayerErrorCode["MEDIA_ERR_CUSTOM"] = "MEDIA_ERR_CUSTOM";
  StreamPlayerErrorCode["MEDIA_ERR_ABORTED"] = "MEDIA_ERR_ABORTED";
  StreamPlayerErrorCode["MEDIA_ERR_NETWORK"] = "MEDIA_ERR_NETWORK";
  StreamPlayerErrorCode["MEDIA_ERR_DECODE"] = "MEDIA_ERR_DECODE";
  StreamPlayerErrorCode["MEDIA_ERR_SRC_NOT_SUPPORTED"] = "MEDIA_ERR_SRC_NOT_SUPPORTED";
  StreamPlayerErrorCode["MEDIA_ERR_ENCRYPTED"] = "MEDIA_ERR_ENCRYPTED";
})(StreamPlayerErrorCode || (StreamPlayerErrorCode = {}));

/***/ }),

/***/ "./stream-player-js/src/utils/findTimeRangeByPosition/index.ts":
/*!*********************************************************************!*\
  !*** ./stream-player-js/src/utils/findTimeRangeByPosition/index.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTimeRangeByPosition": function() { return /* binding */ findTimeRangeByPosition; }
/* harmony export */ });
/* harmony import */ var _yandex_int_any_common_ts_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/any.common/ts/array/find */ "./node_modules/@yandex-int/any.common/ts/array/find.js");


/**
 * Ищем TimeRange, в пределах которого находится заданная позиция
 */
function findTimeRangeByPosition(bufferingRanges, position, epsilon) {
  if (epsilon === void 0) {
    epsilon = 0;
  }

  return (0,_yandex_int_any_common_ts_array_find__WEBPACK_IMPORTED_MODULE_0__.find)(bufferingRanges, function (_ref) {
    var start = _ref.start,
        end = _ref.end;
    return start - epsilon <= position && position <= end + epsilon;
  });
}

/***/ }),

/***/ "./stream-player-js/src/utils/getBufferedTime.ts":
/*!*******************************************************!*\
  !*** ./stream-player-js/src/utils/getBufferedTime.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBufferedTime": function() { return /* binding */ getBufferedTime; }
/* harmony export */ });
/* harmony import */ var _yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yandex-int/ims.opaque-types/lib */ "./node_modules/@yandex-int/ims.opaque-types/lib/index.js");
/* harmony import */ var _findTimeRangeByPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findTimeRangeByPosition */ "./stream-player-js/src/utils/findTimeRangeByPosition/index.ts");


/**
 * Получает забуферизованное время для массива TimeRange
 */

function getBufferedTime(bufferingRanges, currentTime) {
  var currentRange = (0,_findTimeRangeByPosition__WEBPACK_IMPORTED_MODULE_1__.findTimeRangeByPosition)(bufferingRanges, currentTime);
  return currentRange === undefined ? undefined : (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_0__.substract)(currentRange.end, currentTime);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/@yandex-int/any.common/ts/Error/CommonError.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/Error/CommonError.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonError": function() { return /* binding */ CommonError; }
/* harmony export */ });
var CommonError;

(function (CommonError) {
  CommonError["LOAD_SCRIPT_ERROR"] = "LOAD_SCRIPT_ERROR";
  CommonError["STATS_SENSOR_NAME_ERROR"] = "STATS_SENSOR_NAME_ERROR";
  CommonError["STATS_LABEL_KEY_ERROR"] = "STATS_LABEL_KEY_ERROR";
  CommonError["STATS_LABEL_VALUE_ERROR"] = "STATS_LABEL_VALUE_ERROR";
})(CommonError || (CommonError = {}));

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

/***/ "./node_modules/@yandex-int/any.common/ts/number/isFiniteNumber/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/number/isFiniteNumber/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFiniteNumber": function() { return /* binding */ isFiniteNumber; }
/* harmony export */ });
function isFiniteNumber(val) {
  return typeof val === 'number' && isFinite(val);
}

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

/***/ "./node_modules/@yandex-int/any.common/ts/script/loadScript/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/script/loadScript/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadScript": function() { return /* binding */ loadScript; }
/* harmony export */ });
/* harmony import */ var _withCallbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withCallbacks */ "./node_modules/@yandex-int/any.common/ts/script/loadScript/withCallbacks/index.js");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/**
 * Функция, которая загружает js-скрипт в <head> переданного window.
 * Если не заполифиллены промисы - используйте версию из ./withCallbacks
 */

function loadScript(params) {
  return new Promise(function (onLoad, onError) {
    (0,_withCallbacks__WEBPACK_IMPORTED_MODULE_0__.loadScript)(_extends({}, params, {
      onLoad: onLoad,
      onError: onError
    }));
  });
}

/***/ }),

/***/ "./node_modules/@yandex-int/any.common/ts/script/loadScript/withCallbacks/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/script/loadScript/withCallbacks/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadScript": function() { return /* binding */ loadScript; }
/* harmony export */ });
/* harmony import */ var _Error_CommonError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Error/CommonError */ "./node_modules/@yandex-int/any.common/ts/Error/CommonError.js");
/* harmony import */ var _Error_CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Error/CustomError */ "./node_modules/@yandex-int/any.common/ts/Error/CustomError.js");
/* harmony import */ var _noop___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../noop/ */ "./node_modules/@yandex-int/any.common/ts/noop/index.js");
/* harmony import */ var _loadScriptLite_withCallbacks___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loadScriptLite/withCallbacks/ */ "./node_modules/@yandex-int/any.common/ts/script/loadScriptLite/withCallbacks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/**
 * Функция, которая загружает js-скрипт в <head> переданного window.
 * Работает через коллбеки - для версии на промисах используйте версию из ../
 */

function loadScript(params) {
  var _params$win = params.win,
      win = _params$win === void 0 ? window : _params$win,
      src = params.src,
      _params$retries = params.retries,
      retries = _params$retries === void 0 ? 0 : _params$retries,
      _params$onError = params.onError,
      _onError = _params$onError === void 0 ? _noop___WEBPACK_IMPORTED_MODULE_2__.noop : _params$onError; // Создаем объект ошибки до загрузки, чтобы получить нормальный коллстек


  var error = new _Error_CustomError__WEBPACK_IMPORTED_MODULE_1__.CustomError({
    id: _Error_CommonError__WEBPACK_IMPORTED_MODULE_0__.CommonError.LOAD_SCRIPT_ERROR,
    message: "Failed to load script [" + src + "]",
    details: {
      src: src,
      isSelfWindow: win === window,
      onBeforeLoad: Boolean(params.onBeforeLoad),
      retries: retries
    }
  });
  (0,_loadScriptLite_withCallbacks___WEBPACK_IMPORTED_MODULE_3__.loadScriptLite)(_extends({}, params, {
    win: win,
    onError: function onError() {
      return _onError(error);
    }
  }));
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

/***/ "./node_modules/@yandex-int/any.common/ts/utils/isNever/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@yandex-int/any.common/ts/utils/isNever/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNever": function() { return /* binding */ isNever; }
/* harmony export */ });
/**
 * Функция используется для проверки, что переданный ей аргумент имеет тип
 * never. Это позволяет на уровне статических проверок увидеть, что
 * при изменении enum была пропущена обработка одного из вариантов.
 *
 * @example
 *      enum Test {
 *          one,
 *          two,
 *          tree
 *      }
 *
 *      function success(arg: Test) {
 *          switch(arg) {
 *              case Test.one:
 *              case Test.two:
 *              case Test.tree: // <---
 *                  return;
 *              default:
 *                  isNever(arg);
 *          }
 *      }
 *
 *      function fail(arg: Test) {
 *          switch(arg) {
 *              case Test.one:
 *              case Test.two:
 *                  return;
 *              default:
 *                  isNever(arg); <-- type error "Test.tree is not never"
 *          }
 *      }
 */
// tslint:disable-next-line:no-empty
function isNever(arg) {}

/***/ }),

/***/ "./node_modules/@yandex-int/ims.opaque-types/lib/identity.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@yandex-int/ims.opaque-types/lib/identity.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": function() { return /* binding */ identity; }
/* harmony export */ });
function identity(arg) {
  return arg;
}

/***/ }),

/***/ "./node_modules/@yandex-int/ims.opaque-types/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@yandex-int/ims.opaque-types/lib/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* reexport safe */ _operations__WEBPACK_IMPORTED_MODULE_2__.add; },
/* harmony export */   "divide": function() { return /* reexport safe */ _operations__WEBPACK_IMPORTED_MODULE_2__.divide; },
/* harmony export */   "multiply": function() { return /* reexport safe */ _operations__WEBPACK_IMPORTED_MODULE_2__.multiply; },
/* harmony export */   "substract": function() { return /* reexport safe */ _operations__WEBPACK_IMPORTED_MODULE_2__.substract; },
/* harmony export */   "toBits": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toBits; },
/* harmony export */   "toBitsPerSeconds": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toBitsPerSeconds; },
/* harmony export */   "toBps": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toBps; },
/* harmony export */   "toDays": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toDays; },
/* harmony export */   "toDuration": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toDuration; },
/* harmony export */   "toFloat": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toFloat; },
/* harmony export */   "toHours": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toHours; },
/* harmony export */   "toInt": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toInt; },
/* harmony export */   "toKbps": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toKbps; },
/* harmony export */   "toKiloBitsPerSeconds": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toKiloBitsPerSeconds; },
/* harmony export */   "toKilobits": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toKilobits; },
/* harmony export */   "toMbps": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toMbps; },
/* harmony export */   "toMegaBitsPerSeconds": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toMegaBitsPerSeconds; },
/* harmony export */   "toMegabits": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toMegabits; },
/* harmony export */   "toMilliseconds": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toMilliseconds; },
/* harmony export */   "toMinutes": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toMinutes; },
/* harmony export */   "toMoment": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toMoment; },
/* harmony export */   "toPercent": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toPercent; },
/* harmony export */   "toPixels": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toPixels; },
/* harmony export */   "toPortion": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toPortion; },
/* harmony export */   "toSeconds": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toSeconds; },
/* harmony export */   "toTimestamp": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toTimestamp; },
/* harmony export */   "toUnsigned": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toUnsigned; },
/* harmony export */   "toUnsignedFloat": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toUnsignedFloat; },
/* harmony export */   "toUnsignedInt": function() { return /* reexport safe */ _typeCasts__WEBPACK_IMPORTED_MODULE_1__.toUnsignedInt; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@yandex-int/ims.opaque-types/lib/types.js");
/* harmony import */ var _typeCasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeCasts */ "./node_modules/@yandex-int/ims.opaque-types/lib/typeCasts.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations */ "./node_modules/@yandex-int/ims.opaque-types/lib/operations.js");





/***/ }),

/***/ "./node_modules/@yandex-int/ims.opaque-types/lib/operations.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@yandex-int/ims.opaque-types/lib/operations.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "divide": function() { return /* binding */ divide; },
/* harmony export */   "multiply": function() { return /* binding */ multiply; },
/* harmony export */   "substract": function() { return /* binding */ substract; }
/* harmony export */ });
// This file should export only operation functions
var add = function add(val) {
  var result = val;

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    result += i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
  }

  return result;
};
add.operator = '+';
var substract = function substract(val) {
  var result = val;

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    result -= i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
  }

  return result;
};
substract.operator = '-';
var multiply = function multiply(val) {
  var result = val;

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    result *= i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
  }

  return result;
};
multiply.operator = '*';
var divide = function divide(val) {
  var result = val;

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    result = result / (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
  }

  return result;
};
divide.operator = '/';

/***/ }),

/***/ "./node_modules/@yandex-int/ims.opaque-types/lib/typeCasts.js":
/*!********************************************************************!*\
  !*** ./node_modules/@yandex-int/ims.opaque-types/lib/typeCasts.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toBits": function() { return /* binding */ toBits; },
/* harmony export */   "toBitsPerSeconds": function() { return /* binding */ toBitsPerSeconds; },
/* harmony export */   "toBps": function() { return /* binding */ toBps; },
/* harmony export */   "toDays": function() { return /* binding */ toDays; },
/* harmony export */   "toDuration": function() { return /* binding */ toDuration; },
/* harmony export */   "toFloat": function() { return /* binding */ toFloat; },
/* harmony export */   "toHours": function() { return /* binding */ toHours; },
/* harmony export */   "toInt": function() { return /* binding */ toInt; },
/* harmony export */   "toKbps": function() { return /* binding */ toKbps; },
/* harmony export */   "toKiloBitsPerSeconds": function() { return /* binding */ toKiloBitsPerSeconds; },
/* harmony export */   "toKilobits": function() { return /* binding */ toKilobits; },
/* harmony export */   "toMbps": function() { return /* binding */ toMbps; },
/* harmony export */   "toMegaBitsPerSeconds": function() { return /* binding */ toMegaBitsPerSeconds; },
/* harmony export */   "toMegabits": function() { return /* binding */ toMegabits; },
/* harmony export */   "toMilliseconds": function() { return /* binding */ toMilliseconds; },
/* harmony export */   "toMinutes": function() { return /* binding */ toMinutes; },
/* harmony export */   "toMoment": function() { return /* binding */ toMoment; },
/* harmony export */   "toPercent": function() { return /* binding */ toPercent; },
/* harmony export */   "toPixels": function() { return /* binding */ toPixels; },
/* harmony export */   "toPortion": function() { return /* binding */ toPortion; },
/* harmony export */   "toSeconds": function() { return /* binding */ toSeconds; },
/* harmony export */   "toTimestamp": function() { return /* binding */ toTimestamp; },
/* harmony export */   "toUnsigned": function() { return /* binding */ toUnsigned; },
/* harmony export */   "toUnsignedFloat": function() { return /* binding */ toUnsignedFloat; },
/* harmony export */   "toUnsignedInt": function() { return /* binding */ toUnsignedInt; }
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/@yandex-int/ims.opaque-types/lib/identity.js");
// This file should export only type cast functions

/** @deprecated {v2.0.0} Use Number.isFinite / assertFinite */

var toFloat = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toBits = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toKilobits = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toMegabits = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toBitsPerSeconds = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
/** @deprected {v2.0.0} Use divide(b: Bits, s: Seconds) or toBitsPerSeconds */

var toBps = toBitsPerSeconds;
var toKiloBitsPerSeconds = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
/** @deprected {v2.0.0} Use divide(b: Kilo & Bits, s: Seconds) or toKiloBitsPerSeconds */

var toKbps = toKiloBitsPerSeconds;
var toMegaBitsPerSeconds = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
/** @deprected {v2.0.0} Use divide(b: Mega & Bits, s: Seconds) or toMegaBitsPerSeconds */

var toMbps = toMegaBitsPerSeconds;
var toMilliseconds = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toSeconds = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toMinutes = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toHours = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toDays = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toMoment = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toDuration = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
/** @deprected {v2.0.0} Use toMoment */

var toTimestamp = toMoment;
var toPortion = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toPercent = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
var toPixels = _identity__WEBPACK_IMPORTED_MODULE_0__.identity;

function rethrowError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
/** @deprecated {v2.0.0} Use Math.abs(v) / Math.max(v: Finite, 0) */


function toUnsigned(value) {
  if ( true && value < 0) {
    rethrowError(new TypeError("Can not cast " + value + " into Unsigned"));
  }

  return Math.max(value, 0);
}
/** @deprecated {v2.0.0} Use Math.ceil(v) / Math.floor(v) / Math.round(v) */

function toInt(value) {
  if ( true && Math.floor(value) !== value) {
    rethrowError(new TypeError("Can not cast " + value + " into Int"));
  }

  return Math.floor(value);
}
/** @deprecated {v2.0.0} Use casts like toFloat and toUnsigned manually */

function toUnsignedFloat(value) {
  return toUnsigned(toFloat(value));
}
/** @deprecated {v2.0.0} Use casts like toInt and toUnsigned manually */

function toUnsignedInt(value) {
  return toUnsigned(toInt(value));
}

/***/ }),

/***/ "./node_modules/@yandex-int/ims.opaque-types/lib/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/@yandex-int/ims.opaque-types/lib/types.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;
/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;
/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('='); // skip things that don't look like key=value

    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim(); // quoted values

    if ('"' == val[0]) {
      val = val.slice(1, -1);
    } // only assign once


    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */


function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;

      case 'lax':
        str += '; SameSite=Lax';
        break;

      case 'strict':
        str += '; SameSite=Strict';
        break;

      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */


function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
      message,
      reselectPrevious,
      range,
      selection,
      mark,
      success = false;

  if (!options) {
    options = {};
  }

  debug = options.debug || false;

  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement('span');
    mark.textContent = text; // reset user styles for span element

    mark.style.all = 'unset'; // prevents scrolling to the end of the page

    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)'; // used to preserve spaces and line breaks

    mark.style.whiteSpace = 'pre'; // do not inherit user-select (it may be `none`)

    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';
    document.body.appendChild(mark);
    range.selectNode(mark);
    selection.addRange(range);
    var successful = document.execCommand('copy');

    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }

    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');

    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }

    reselectPrevious();
  }

  return success;
}

module.exports = copy;

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;
    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
};

/***/ }),

/***/ "./node_modules/local-storage-fallback/lib/CookieStorage.js":
/*!******************************************************************!*\
  !*** ./node_modules/local-storage-fallback/lib/CookieStorage.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

exports.hasCookies = hasCookies;

var _cookie = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var prefix = 'lS_';

var CookieStorage = function () {
  function CookieStorage() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CookieStorage);

    this.cookieOptions = _extends({
      path: '/'
    }, options);
    prefix = options.prefix || prefix;
  }

  _createClass(CookieStorage, [{
    key: 'getItem',
    value: function getItem(key) {
      var cookies = _cookie2["default"].parse(document.cookie);

      if (!cookies || !cookies.hasOwnProperty(prefix + key)) {
        return null;
      }

      return cookies[prefix + key];
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      document.cookie = _cookie2["default"].serialize(prefix + key, value, this.cookieOptions);
      return value;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      var options = _extends({}, this.cookieOptions, {
        maxAge: -1
      });

      document.cookie = _cookie2["default"].serialize(prefix + key, '', options);
      return null;
    }
  }, {
    key: 'clear',
    value: function clear() {
      var cookies = _cookie2["default"].parse(document.cookie);

      for (var key in cookies) {
        if (key.indexOf(prefix) === 0) {
          this.removeItem(key.substr(prefix.length));
        }
      }

      return null;
    }
  }]);

  return CookieStorage;
}();

exports["default"] = CookieStorage;

function hasCookies() {
  var storage = new CookieStorage();

  try {
    var TEST_KEY = '__test';
    storage.setItem(TEST_KEY, '1');
    var value = storage.getItem(TEST_KEY);
    storage.removeItem(TEST_KEY);
    return value === '1';
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/local-storage-fallback/lib/MemoryStorage.js":
/*!******************************************************************!*\
  !*** ./node_modules/local-storage-fallback/lib/MemoryStorage.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var MemoryStorage = function () {
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);

    this._data = {};
  }

  _createClass(MemoryStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return this._data.hasOwnProperty(key) ? this._data[key] : undefined;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return this._data[key] = String(value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return delete this._data[key];
    }
  }, {
    key: "clear",
    value: function clear() {
      return this._data = {};
    }
  }]);

  return MemoryStorage;
}();

exports["default"] = MemoryStorage;

/***/ }),

/***/ "./node_modules/local-storage-fallback/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/local-storage-fallback/lib/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MemoryStorage = exports.CookieStorage = exports.isSupported = exports.storage = undefined;

var _isSupported = __webpack_require__(/*! ./isSupported */ "./node_modules/local-storage-fallback/lib/isSupported.js");

var _isSupported2 = _interopRequireDefault(_isSupported);

var _CookieStorage = __webpack_require__(/*! ./CookieStorage */ "./node_modules/local-storage-fallback/lib/CookieStorage.js");

var _CookieStorage2 = _interopRequireDefault(_CookieStorage);

var _MemoryStorage = __webpack_require__(/*! ./MemoryStorage */ "./node_modules/local-storage-fallback/lib/MemoryStorage.js");

var _MemoryStorage2 = _interopRequireDefault(_MemoryStorage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var storage = null;

if ((0, _isSupported2["default"])('localStorage')) {
  // use localStorage
  exports.storage = storage = window.localStorage;
} else if ((0, _isSupported2["default"])('sessionStorage')) {
  // use sessionStorage
  exports.storage = storage = window.sessionStorage;
} else if ((0, _isSupported2["default"])('cookieStorage')) {
  // use cookies
  exports.storage = storage = new _CookieStorage2["default"]();
} else {
  // use memory
  exports.storage = storage = new _MemoryStorage2["default"]();
}

exports["default"] = storage;
exports.storage = storage;
exports.isSupported = _isSupported2["default"];
exports.CookieStorage = _CookieStorage2["default"];
exports.MemoryStorage = _MemoryStorage2["default"];

/***/ }),

/***/ "./node_modules/local-storage-fallback/lib/isSupported.js":
/*!****************************************************************!*\
  !*** ./node_modules/local-storage-fallback/lib/isSupported.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isSupported;

var _CookieStorage = __webpack_require__(/*! ./CookieStorage */ "./node_modules/local-storage-fallback/lib/CookieStorage.js");

var TEST_KEY = '__test';

function hasStorage(name) {
  try {
    var storage = window[name];
    storage.setItem(TEST_KEY, '1');
    storage.removeItem(TEST_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

function isSupported() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localStorage';
  var storage = String(name).replace(/storage$/i, '').toLowerCase();

  if (storage === 'local') {
    return hasStorage('localStorage');
  }

  if (storage === 'session') {
    return hasStorage('sessionStorage');
  }

  if (storage === 'cookie') {
    return (0, _CookieStorage.hasCookies)();
  }

  if (storage === 'memory') {
    return true;
  }

  throw new Error('Storage method `' + name + '` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.');
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ (function(module) {

module.exports = function () {
  var selection = document.getSelection();

  if (!selection.rangeCount) {
    return function () {};
  }

  var active = document.activeElement;
  var ranges = [];

  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) {
    // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' && selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function (range) {
        selection.addRange(range);
      });
    }

    active && active.focus();
  };
};

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
/*!********************************!*\
  !*** ./src/ts/demoV2/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yandex-int/ims.opaque-types/lib */ "./node_modules/@yandex-int/ims.opaque-types/lib/index.js");
/* harmony import */ var _stream_player_js_src_utils_getBufferedTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stream-player-js/src/utils/getBufferedTime */ "./stream-player-js/src/utils/getBufferedTime.ts");
/* harmony import */ var _typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/v2/PlayerApiEvents */ "./src/ts/typings/v2/PlayerApiEvents.ts");
/* harmony import */ var _loadPlayerApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadPlayerApi */ "./src/ts/demoV2/loadPlayerApi.ts");
/* harmony import */ var _player_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/handlers */ "./src/ts/demoV2/player/handlers.ts");
/* harmony import */ var _setDemoEnv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setDemoEnv */ "./src/ts/demoV2/setDemoEnv.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui */ "./src/ts/demoV2/ui/index.ts");
/* harmony import */ var _ui_editors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/editors */ "./src/ts/demoV2/ui/editors.ts");
/* harmony import */ var _utils_updateBufferedTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/updateBufferedTime */ "./src/ts/demoV2/utils/updateBufferedTime.ts");
/* harmony import */ var _utils_updateLiveLatency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/updateLiveLatency */ "./src/ts/demoV2/utils/updateLiveLatency.ts");
/* harmony import */ var _utils_updateUTC__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/updateUTC */ "./src/ts/demoV2/utils/updateUTC.ts");
/* harmony import */ var _utils_updateWatchedTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/updateWatchedTime */ "./src/ts/demoV2/utils/updateWatchedTime.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./vendors/promise.js */ "./vendors/promise.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-console */












var initialConfig = (0,_ui_editors__WEBPACK_IMPORTED_MODULE_8__.getEditorValue)(_ui_editors__WEBPACK_IMPORTED_MODULE_8__.editors.initial);
(0,_ui__WEBPACK_IMPORTED_MODULE_7__.initUiStatic)(initialConfig);
var demoConfig = (0,_ui_editors__WEBPACK_IMPORTED_MODULE_8__.getEditorValue)(_ui_editors__WEBPACK_IMPORTED_MODULE_8__.editors.demo);
(0,_setDemoEnv__WEBPACK_IMPORTED_MODULE_6__.setDemoEnv)(demoConfig);

try {
  console.log('Enable AdSDK debug mode');
  localStorage.setItem('adsdkdebug', 'true');
} catch (error) {
  console.warn(error);
}

_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  var playerConfig, win, playerApi, handleUtcTime, handleBufferedTime;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_loadPlayerApi__WEBPACK_IMPORTED_MODULE_4__.loadPlayerApi)(demoConfig.iframeApi);

        case 2:
          playerConfig = _extends({}, initialConfig, {
            element: 'player'
          });
          console.log('INIT PLAYER', playerConfig);
          win = window;
          playerApi = demoConfig.iframeApi.useLoader ? win.Ya.playerApi.init(playerConfig) : win.Ya.playerApi.create(playerConfig);

          handleUtcTime = function handleUtcTime() {
            var _ref2 = playerApi.getState() || {},
                utcStartTime = _ref2.utcStartTime,
                currentTime = _ref2.currentTime;

            (0,_utils_updateUTC__WEBPACK_IMPORTED_MODULE_11__.updateUTC)(utcStartTime, currentTime);
          };

          playerApi.on(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.UtcStartTimeChange, handleUtcTime);
          playerApi.on(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.CurrentTimeChange, handleUtcTime);
          playerApi.on(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.WatchedTimeChange, function (_ref3) {
            var watchedTime = _ref3.watchedTime;
            return (0,_utils_updateWatchedTime__WEBPACK_IMPORTED_MODULE_12__.updateWatchedTime)(watchedTime);
          });
          playerApi.on(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.LiveLatencyChange, function (_ref4) {
            var liveLatency = _ref4.liveLatency;
            return (0,_utils_updateLiveLatency__WEBPACK_IMPORTED_MODULE_10__.updateLiveLatency)(liveLatency);
          });

          handleBufferedTime = function handleBufferedTime() {
            var _ref5 = playerApi.getState() || {},
                _ref5$currentTime = _ref5.currentTime,
                currentTime = _ref5$currentTime === void 0 ? (0,_yandex_int_ims_opaque_types_lib__WEBPACK_IMPORTED_MODULE_1__.toSeconds)(0) : _ref5$currentTime,
                _ref5$bufferedRanges = _ref5.bufferedRanges,
                bufferedRanges = _ref5$bufferedRanges === void 0 ? [] : _ref5$bufferedRanges;

            (0,_utils_updateBufferedTime__WEBPACK_IMPORTED_MODULE_9__.updateBufferedTime)((0,_stream_player_js_src_utils_getBufferedTime__WEBPACK_IMPORTED_MODULE_2__.getBufferedTime)(bufferedRanges, currentTime));
          };

          playerApi.on(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.BufferedRangesChange, handleBufferedTime);
          playerApi.on(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.CurrentTimeChange, handleBufferedTime); // Показ информации один раз, чтобы не засорять эфир дальше
          // Чтобы увидеть остальные ивенты пользователи могу подключить хендлеры уже сами

          playerApi.once((0,_player_handlers__WEBPACK_IMPORTED_MODULE_5__.createHandlers)(demoConfig));
          win.playerApi = playerApi;
          (0,_ui__WEBPACK_IMPORTED_MODULE_7__.initUiApi)(playerApi);
          playerApi.once(_typings_v2_PlayerApiEvents__WEBPACK_IMPORTED_MODULE_3__.PlayerApiEventName.Ready, function () {
            try {
              // eslint-disable-next-line no-eval
              eval((0,_ui_editors__WEBPACK_IMPORTED_MODULE_8__.getEditorValue)(_ui_editors__WEBPACK_IMPORTED_MODULE_8__.editors.code));
            } catch (err) {
              console.warn(err);
            }
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))()["catch"](function (error) {
  return console.error(error);
});
}();
/******/ })()
;
