/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cli-table/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cli-table/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n/**\n * Module dependencies.\n */\n\nvar colors = __webpack_require__(/*! colors/safe */ \"./node_modules/colors/safe.js\")\n  , utils = __webpack_require__(/*! ./utils */ \"./node_modules/cli-table/lib/utils.js\")\n  , repeat = utils.repeat\n  , truncate = utils.truncate\n  , pad = utils.pad;\n\n/**\n * Table constructor\n *\n * @param {Object} options\n * @api public\n */\n\nfunction Table (options){\n  this.options = utils.options({\n      chars: {\n          'top': '─'\n        , 'top-mid': '┬'\n        , 'top-left': '┌'\n        , 'top-right': '┐'\n        , 'bottom': '─'\n        , 'bottom-mid': '┴'\n        , 'bottom-left': '└'\n        , 'bottom-right': '┘'\n        , 'left': '│'\n        , 'left-mid': '├'\n        , 'mid': '─'\n        , 'mid-mid': '┼'\n        , 'right': '│'\n        , 'right-mid': '┤'\n        , 'middle': '│'\n      }\n    , truncate: '…'\n    , colWidths: []\n    , colAligns: []\n    , style: {\n          'padding-left': 1\n        , 'padding-right': 1\n        , head: ['red']\n        , border: ['grey']\n        , compact : false\n      }\n    , head: []\n  }, options);\n};\n\n/**\n * Inherit from Array.\n */\n\nTable.prototype.__proto__ = Array.prototype;\n\n/**\n * Width getter\n *\n * @return {Number} width\n * @api public\n */\n\nTable.prototype.__defineGetter__('width', function (){\n  var str = this.toString().split(\"\\n\");\n  if (str.length) return str[0].length;\n  return 0;\n});\n\n/**\n * Render to a string.\n *\n * @return {String} table representation\n * @api public\n */\n\nTable.prototype.render\nTable.prototype.toString = function (){\n  var ret = ''\n    , options = this.options\n    , style = options.style\n    , head = options.head\n    , chars = options.chars\n    , truncater = options.truncate\n      , colWidths = options.colWidths || new Array(this.head.length)\n      , totalWidth = 0;\n\n    if (!head.length && !this.length) return '';\n\n    if (!colWidths.length){\n      var all_rows = this.slice(0);\n      if (head.length) { all_rows = all_rows.concat([head]) };\n\n      all_rows.forEach(function(cells){\n        // horizontal (arrays)\n        if (typeof cells === 'object' && cells.length) {\n          extractColumnWidths(cells);\n\n        // vertical (objects)\n        } else {\n          var header_cell = Object.keys(cells)[0]\n            , value_cell = cells[header_cell];\n\n          colWidths[0] = Math.max(colWidths[0] || 0, get_width(header_cell) || 0);\n\n          // cross (objects w/ array values)\n          if (typeof value_cell === 'object' && value_cell.length) {\n            extractColumnWidths(value_cell, 1);\n          } else {\n            colWidths[1] = Math.max(colWidths[1] || 0, get_width(value_cell) || 0);\n          }\n        }\n    });\n  };\n\n  totalWidth = (colWidths.length == 1 ? colWidths[0] : colWidths.reduce(\n    function (a, b){\n      return a + b\n    })) + colWidths.length + 1;\n\n  function extractColumnWidths(arr, offset) {\n    var offset = offset || 0;\n    arr.forEach(function(cell, i){\n      colWidths[i + offset] = Math.max(colWidths[i + offset] || 0, get_width(cell) || 0);\n    });\n  };\n\n  function get_width(obj) {\n    return typeof obj == 'object' && obj.width != undefined\n         ? obj.width\n         : ((typeof obj == 'object' ? utils.strlen(obj.text) : utils.strlen(obj)) + (style['padding-left'] || 0) + (style['padding-right'] || 0))\n  }\n\n  // draws a line\n  function line (line, left, right, intersection){\n    var width = 0\n      , line =\n          left\n        + repeat(line, totalWidth - 2)\n        + right;\n\n    colWidths.forEach(function (w, i){\n      if (i == colWidths.length - 1) return;\n      width += w + 1;\n      line = line.substr(0, width) + intersection + line.substr(width + 1);\n    });\n\n    return applyStyles(options.style.border, line);\n  };\n\n  // draws the top line\n  function lineTop (){\n    var l = line(chars.top\n               , chars['top-left'] || chars.top\n               , chars['top-right'] ||  chars.top\n               , chars['top-mid']);\n    if (l)\n      ret += l + \"\\n\";\n  };\n\n  function generateRow (items, style) {\n    var cells = []\n      , max_height = 0;\n\n    // prepare vertical and cross table data\n    if (!Array.isArray(items) && typeof items === \"object\") {\n      var key = Object.keys(items)[0]\n        , value = items[key]\n        , first_cell_head = true;\n\n      if (Array.isArray(value)) {\n        items = value;\n        items.unshift(key);\n      } else {\n        items = [key, value];\n      }\n    }\n\n    // transform array of item strings into structure of cells\n    items.forEach(function (item, i) {\n      var contents = item.toString().split(\"\\n\").reduce(function (memo, l) {\n        memo.push(string(l, i));\n        return memo;\n      }, [])\n\n      var height = contents.length;\n      if (height > max_height) { max_height = height };\n\n      cells.push({ contents: contents , height: height });\n    });\n\n    // transform vertical cells into horizontal lines\n    var lines = new Array(max_height);\n    cells.forEach(function (cell, i) {\n      cell.contents.forEach(function (line, j) {\n        if (!lines[j]) { lines[j] = [] };\n        if (style || (first_cell_head && i === 0 && options.style.head)) {\n          line = applyStyles(options.style.head, line)\n        }\n\n        lines[j].push(line);\n      });\n\n      // populate empty lines in cell\n      for (var j = cell.height, l = max_height; j < l; j++) {\n        if (!lines[j]) { lines[j] = [] };\n        lines[j].push(string('', i));\n      }\n    });\n    var ret = \"\";\n    lines.forEach(function (line, index) {\n      if (ret.length > 0) {\n        ret += \"\\n\" + applyStyles(options.style.border, chars.left);\n      }\n\n      ret += line.join(applyStyles(options.style.border, chars.middle)) + applyStyles(options.style.border, chars.right);\n    });\n\n    return applyStyles(options.style.border, chars.left) + ret;\n  };\n\n  function applyStyles(styles, subject) {\n    if (!subject)\n      return '';\n    styles.forEach(function(style) {\n      subject = colors[style](subject);\n    });\n    return subject;\n  };\n\n  // renders a string, by padding it or truncating it\n  function string (str, index){\n    var str = String(typeof str == 'object' && str.text ? str.text : str)\n      , length = utils.strlen(str)\n      , width = colWidths[index]\n          - (style['padding-left'] || 0)\n          - (style['padding-right'] || 0)\n      , align = options.colAligns[index] || 'left';\n\n    return repeat(' ', style['padding-left'] || 0)\n         + (length == width ? str :\n             (length < width\n              ? pad(str, ( width + (str.length - length) ), ' ', align == 'left' ? 'right' :\n                  (align == 'middle' ? 'both' : 'left'))\n              : (truncater ? truncate(str, width, truncater) : str))\n           )\n         + repeat(' ', style['padding-right'] || 0);\n  };\n\n  if (head.length){\n    lineTop();\n\n    ret += generateRow(head, style.head) + \"\\n\"\n  }\n\n  if (this.length)\n    this.forEach(function (cells, i){\n      if (!head.length && i == 0)\n        lineTop();\n      else {\n        if (!style.compact || i<(!!head.length) ?1: false || cells.length == 0){\n          var l = line(chars.mid\n                     , chars['left-mid']\n                     , chars['right-mid']\n                     , chars['mid-mid']);\n          if (l)\n            ret += l + \"\\n\"\n        }\n      }\n\n      if (cells.hasOwnProperty(\"length\") && !cells.length) {\n        return\n      } else {\n        ret += generateRow(cells) + \"\\n\";\n      };\n    });\n\n  var l = line(chars.bottom\n             , chars['bottom-left'] || chars.bottom\n             , chars['bottom-right'] || chars.bottom\n             , chars['bottom-mid']);\n  if (l)\n    ret += l;\n  else\n    // trim the last '\\n' if we didn't add the bottom decoration\n    ret = ret.slice(0, -1);\n\n  return ret;\n};\n\n/**\n * Module exports.\n */\n\nmodule.exports = Table;\n\nmodule.exports.version = '0.0.1';\n\n\n//# sourceURL=webpack:///./node_modules/cli-table/lib/index.js?");

/***/ }),

/***/ "./node_modules/cli-table/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/cli-table/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Repeats a string.\n *\n * @param {String} char(s)\n * @param {Number} number of times\n * @return {String} repeated string\n */\n\nexports.repeat = function (str, times){\n  return Array(times + 1).join(str);\n};\n\n/**\n * Pads a string\n *\n * @api public\n */\n\nexports.pad = function (str, len, pad, dir) {\n  if (len + 1 >= str.length)\n    switch (dir){\n      case 'left':\n        str = Array(len + 1 - str.length).join(pad) + str;\n        break;\n\n      case 'both':\n        var right = Math.ceil((padlen = len - str.length) / 2);\n        var left = padlen - right;\n        str = Array(left + 1).join(pad) + str + Array(right + 1).join(pad);\n        break;\n\n      default:\n        str = str + Array(len + 1 - str.length).join(pad);\n    };\n\n  return str;\n};\n\n/**\n * Truncates a string\n *\n * @api public\n */\n\nexports.truncate = function (str, length, chr){\n  chr = chr || '…';\n  return str.length >= length ? str.substr(0, length - chr.length) + chr : str;\n};\n\n/**\n * Copies and merges options with defaults.\n *\n * @param {Object} defaults\n * @param {Object} supplied options\n * @return {Object} new (merged) object\n */\n\nfunction options(defaults, opts) {\n  for (var p in opts) {\n    if (opts[p] && opts[p].constructor && opts[p].constructor === Object) {\n      defaults[p] = defaults[p] || {};\n      options(defaults[p], opts[p]);\n    } else {\n      defaults[p] = opts[p];\n    }\n  }\n  return defaults;\n};\nexports.options = options;\n\n//\n// For consideration of terminal \"color\" programs like colors.js,\n// which can add ANSI escape color codes to strings,\n// we destyle the ANSI color escape codes for padding calculations.\n//\n// see: http://en.wikipedia.org/wiki/ANSI_escape_code\n//\nexports.strlen = function(str){\n  var code = /\\u001b\\[(?:\\d*;){0,5}\\d*m/g;\n  var stripped = (\"\" + str).replace(code,'');\n  var split = stripped.split(\"\\n\");\n  return split.reduce(function (memo, s) { return (s.length > memo) ? s.length : memo }, 0);\n}\n\n\n//# sourceURL=webpack:///./node_modules/cli-table/lib/utils.js?");

/***/ }),

/***/ "./node_modules/colors/lib/colors.js":
/*!*******************************************!*\
  !*** ./node_modules/colors/lib/colors.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\nThe MIT License (MIT)\n\nOriginal Library\n  - Copyright (c) Marak Squires\n\nAdditional functionality\n - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n*/\n\nvar colors = {};\nmodule['exports'] = colors;\n\ncolors.themes = {};\n\nvar util = __webpack_require__(/*! util */ \"util\");\nvar ansiStyles = colors.styles = __webpack_require__(/*! ./styles */ \"./node_modules/colors/lib/styles.js\");\nvar defineProps = Object.defineProperties;\nvar newLineRegex = new RegExp(/[\\r\\n]+/g);\n\ncolors.supportsColor = __webpack_require__(/*! ./system/supports-colors */ \"./node_modules/colors/lib/system/supports-colors.js\").supportsColor;\n\nif (typeof colors.enabled === 'undefined') {\n  colors.enabled = colors.supportsColor() !== false;\n}\n\ncolors.enable = function() {\n  colors.enabled = true;\n};\n\ncolors.disable = function() {\n  colors.enabled = false;\n};\n\ncolors.stripColors = colors.strip = function(str) {\n  return ('' + str).replace(/\\x1B\\[\\d+m/g, '');\n};\n\n// eslint-disable-next-line no-unused-vars\nvar stylize = colors.stylize = function stylize(str, style) {\n  if (!colors.enabled) {\n    return str+'';\n  }\n\n  return ansiStyles[style].open + str + ansiStyles[style].close;\n};\n\nvar matchOperatorsRe = /[|\\\\{}()[\\]^$+*?.]/g;\nvar escapeStringRegexp = function(str) {\n  if (typeof str !== 'string') {\n    throw new TypeError('Expected a string');\n  }\n  return str.replace(matchOperatorsRe, '\\\\$&');\n};\n\nfunction build(_styles) {\n  var builder = function builder() {\n    return applyStyle.apply(builder, arguments);\n  };\n  builder._styles = _styles;\n  // __proto__ is used because we must return a function, but there is\n  // no way to create a function with a different prototype.\n  builder.__proto__ = proto;\n  return builder;\n}\n\nvar styles = (function() {\n  var ret = {};\n  ansiStyles.grey = ansiStyles.gray;\n  Object.keys(ansiStyles).forEach(function(key) {\n    ansiStyles[key].closeRe =\n      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');\n    ret[key] = {\n      get: function() {\n        return build(this._styles.concat(key));\n      },\n    };\n  });\n  return ret;\n})();\n\nvar proto = defineProps(function colors() {}, styles);\n\nfunction applyStyle() {\n  var args = Array.prototype.slice.call(arguments);\n\n  var str = args.map(function(arg) {\n    if (arg !== undefined && arg.constructor === String) {\n      return arg;\n    } else {\n      return util.inspect(arg);\n    }\n  }).join(' ');\n\n  if (!colors.enabled || !str) {\n    return str;\n  }\n\n  var newLinesPresent = str.indexOf('\\n') != -1;\n\n  var nestedStyles = this._styles;\n\n  var i = nestedStyles.length;\n  while (i--) {\n    var code = ansiStyles[nestedStyles[i]];\n    str = code.open + str.replace(code.closeRe, code.open) + code.close;\n    if (newLinesPresent) {\n      str = str.replace(newLineRegex, function(match) {\n        return code.close + match + code.open;\n      });\n    }\n  }\n\n  return str;\n}\n\ncolors.setTheme = function(theme) {\n  if (typeof theme === 'string') {\n    console.log('colors.setTheme now only accepts an object, not a string.  ' +\n      'If you are trying to set a theme from a file, it is now your (the ' +\n      'caller\\'s) responsibility to require the file.  The old syntax ' +\n      'looked like colors.setTheme(__dirname + ' +\n      '\\'/../themes/generic-logging.js\\'); The new syntax looks like '+\n      'colors.setTheme(require(__dirname + ' +\n      '\\'/../themes/generic-logging.js\\'));');\n    return;\n  }\n  for (var style in theme) {\n    (function(style) {\n      colors[style] = function(str) {\n        if (typeof theme[style] === 'object') {\n          var out = str;\n          for (var i in theme[style]) {\n            out = colors[theme[style][i]](out);\n          }\n          return out;\n        }\n        return colors[theme[style]](str);\n      };\n    })(style);\n  }\n};\n\nfunction init() {\n  var ret = {};\n  Object.keys(styles).forEach(function(name) {\n    ret[name] = {\n      get: function() {\n        return build([name]);\n      },\n    };\n  });\n  return ret;\n}\n\nvar sequencer = function sequencer(map, str) {\n  var exploded = str.split('');\n  exploded = exploded.map(map);\n  return exploded.join('');\n};\n\n// custom formatter methods\ncolors.trap = __webpack_require__(/*! ./custom/trap */ \"./node_modules/colors/lib/custom/trap.js\");\ncolors.zalgo = __webpack_require__(/*! ./custom/zalgo */ \"./node_modules/colors/lib/custom/zalgo.js\");\n\n// maps\ncolors.maps = {};\ncolors.maps.america = __webpack_require__(/*! ./maps/america */ \"./node_modules/colors/lib/maps/america.js\")(colors);\ncolors.maps.zebra = __webpack_require__(/*! ./maps/zebra */ \"./node_modules/colors/lib/maps/zebra.js\")(colors);\ncolors.maps.rainbow = __webpack_require__(/*! ./maps/rainbow */ \"./node_modules/colors/lib/maps/rainbow.js\")(colors);\ncolors.maps.random = __webpack_require__(/*! ./maps/random */ \"./node_modules/colors/lib/maps/random.js\")(colors);\n\nfor (var map in colors.maps) {\n  (function(map) {\n    colors[map] = function(str) {\n      return sequencer(colors.maps[map], str);\n    };\n  })(map);\n}\n\ndefineProps(colors, init());\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/colors.js?");

/***/ }),

/***/ "./node_modules/colors/lib/custom/trap.js":
/*!************************************************!*\
  !*** ./node_modules/colors/lib/custom/trap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module['exports'] = function runTheTrap(text, options) {\n  var result = '';\n  text = text || 'Run the trap, drop the bass';\n  text = text.split('');\n  var trap = {\n    a: ['\\u0040', '\\u0104', '\\u023a', '\\u0245', '\\u0394', '\\u039b', '\\u0414'],\n    b: ['\\u00df', '\\u0181', '\\u0243', '\\u026e', '\\u03b2', '\\u0e3f'],\n    c: ['\\u00a9', '\\u023b', '\\u03fe'],\n    d: ['\\u00d0', '\\u018a', '\\u0500', '\\u0501', '\\u0502', '\\u0503'],\n    e: ['\\u00cb', '\\u0115', '\\u018e', '\\u0258', '\\u03a3', '\\u03be', '\\u04bc',\n      '\\u0a6c'],\n    f: ['\\u04fa'],\n    g: ['\\u0262'],\n    h: ['\\u0126', '\\u0195', '\\u04a2', '\\u04ba', '\\u04c7', '\\u050a'],\n    i: ['\\u0f0f'],\n    j: ['\\u0134'],\n    k: ['\\u0138', '\\u04a0', '\\u04c3', '\\u051e'],\n    l: ['\\u0139'],\n    m: ['\\u028d', '\\u04cd', '\\u04ce', '\\u0520', '\\u0521', '\\u0d69'],\n    n: ['\\u00d1', '\\u014b', '\\u019d', '\\u0376', '\\u03a0', '\\u048a'],\n    o: ['\\u00d8', '\\u00f5', '\\u00f8', '\\u01fe', '\\u0298', '\\u047a', '\\u05dd',\n      '\\u06dd', '\\u0e4f'],\n    p: ['\\u01f7', '\\u048e'],\n    q: ['\\u09cd'],\n    r: ['\\u00ae', '\\u01a6', '\\u0210', '\\u024c', '\\u0280', '\\u042f'],\n    s: ['\\u00a7', '\\u03de', '\\u03df', '\\u03e8'],\n    t: ['\\u0141', '\\u0166', '\\u0373'],\n    u: ['\\u01b1', '\\u054d'],\n    v: ['\\u05d8'],\n    w: ['\\u0428', '\\u0460', '\\u047c', '\\u0d70'],\n    x: ['\\u04b2', '\\u04fe', '\\u04fc', '\\u04fd'],\n    y: ['\\u00a5', '\\u04b0', '\\u04cb'],\n    z: ['\\u01b5', '\\u0240'],\n  };\n  text.forEach(function(c) {\n    c = c.toLowerCase();\n    var chars = trap[c] || [' '];\n    var rand = Math.floor(Math.random() * chars.length);\n    if (typeof trap[c] !== 'undefined') {\n      result += trap[c][rand];\n    } else {\n      result += c;\n    }\n  });\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/custom/trap.js?");

/***/ }),

/***/ "./node_modules/colors/lib/custom/zalgo.js":
/*!*************************************************!*\
  !*** ./node_modules/colors/lib/custom/zalgo.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// please no\nmodule['exports'] = function zalgo(text, options) {\n  text = text || '   he is here   ';\n  var soul = {\n    'up': [\n      '̍', '̎', '̄', '̅',\n      '̿', '̑', '̆', '̐',\n      '͒', '͗', '͑', '̇',\n      '̈', '̊', '͂', '̓',\n      '̈', '͊', '͋', '͌',\n      '̃', '̂', '̌', '͐',\n      '̀', '́', '̋', '̏',\n      '̒', '̓', '̔', '̽',\n      '̉', 'ͣ', 'ͤ', 'ͥ',\n      'ͦ', 'ͧ', 'ͨ', 'ͩ',\n      'ͪ', 'ͫ', 'ͬ', 'ͭ',\n      'ͮ', 'ͯ', '̾', '͛',\n      '͆', '̚',\n    ],\n    'down': [\n      '̖', '̗', '̘', '̙',\n      '̜', '̝', '̞', '̟',\n      '̠', '̤', '̥', '̦',\n      '̩', '̪', '̫', '̬',\n      '̭', '̮', '̯', '̰',\n      '̱', '̲', '̳', '̹',\n      '̺', '̻', '̼', 'ͅ',\n      '͇', '͈', '͉', '͍',\n      '͎', '͓', '͔', '͕',\n      '͖', '͙', '͚', '̣',\n    ],\n    'mid': [\n      '̕', '̛', '̀', '́',\n      '͘', '̡', '̢', '̧',\n      '̨', '̴', '̵', '̶',\n      '͜', '͝', '͞',\n      '͟', '͠', '͢', '̸',\n      '̷', '͡', ' ҉',\n    ],\n  };\n  var all = [].concat(soul.up, soul.down, soul.mid);\n\n  function randomNumber(range) {\n    var r = Math.floor(Math.random() * range);\n    return r;\n  }\n\n  function isChar(character) {\n    var bool = false;\n    all.filter(function(i) {\n      bool = (i === character);\n    });\n    return bool;\n  }\n\n\n  function heComes(text, options) {\n    var result = '';\n    var counts;\n    var l;\n    options = options || {};\n    options['up'] =\n      typeof options['up'] !== 'undefined' ? options['up'] : true;\n    options['mid'] =\n      typeof options['mid'] !== 'undefined' ? options['mid'] : true;\n    options['down'] =\n      typeof options['down'] !== 'undefined' ? options['down'] : true;\n    options['size'] =\n      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';\n    text = text.split('');\n    for (l in text) {\n      if (isChar(l)) {\n        continue;\n      }\n      result = result + text[l];\n      counts = {'up': 0, 'down': 0, 'mid': 0};\n      switch (options.size) {\n        case 'mini':\n          counts.up = randomNumber(8);\n          counts.mid = randomNumber(2);\n          counts.down = randomNumber(8);\n          break;\n        case 'maxi':\n          counts.up = randomNumber(16) + 3;\n          counts.mid = randomNumber(4) + 1;\n          counts.down = randomNumber(64) + 3;\n          break;\n        default:\n          counts.up = randomNumber(8) + 1;\n          counts.mid = randomNumber(6) / 2;\n          counts.down = randomNumber(8) + 1;\n          break;\n      }\n\n      var arr = ['up', 'mid', 'down'];\n      for (var d in arr) {\n        var index = arr[d];\n        for (var i = 0; i <= counts[index]; i++) {\n          if (options[index]) {\n            result = result + soul[index][randomNumber(soul[index].length)];\n          }\n        }\n      }\n    }\n    return result;\n  }\n  // don't summon him\n  return heComes(text, options);\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/custom/zalgo.js?");

/***/ }),

/***/ "./node_modules/colors/lib/maps/america.js":
/*!*************************************************!*\
  !*** ./node_modules/colors/lib/maps/america.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module['exports'] = function(colors) {\n  return function(letter, i, exploded) {\n    if (letter === ' ') return letter;\n    switch (i%3) {\n      case 0: return colors.red(letter);\n      case 1: return colors.white(letter);\n      case 2: return colors.blue(letter);\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/maps/america.js?");

/***/ }),

/***/ "./node_modules/colors/lib/maps/rainbow.js":
/*!*************************************************!*\
  !*** ./node_modules/colors/lib/maps/rainbow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module['exports'] = function(colors) {\n  // RoY G BiV\n  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];\n  return function(letter, i, exploded) {\n    if (letter === ' ') {\n      return letter;\n    } else {\n      return colors[rainbowColors[i++ % rainbowColors.length]](letter);\n    }\n  };\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/maps/rainbow.js?");

/***/ }),

/***/ "./node_modules/colors/lib/maps/random.js":
/*!************************************************!*\
  !*** ./node_modules/colors/lib/maps/random.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module['exports'] = function(colors) {\n  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',\n    'blue', 'white', 'cyan', 'magenta'];\n  return function(letter, i, exploded) {\n    return letter === ' ' ? letter :\n      colors[\n          available[Math.round(Math.random() * (available.length - 2))]\n      ](letter);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/maps/random.js?");

/***/ }),

/***/ "./node_modules/colors/lib/maps/zebra.js":
/*!***********************************************!*\
  !*** ./node_modules/colors/lib/maps/zebra.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module['exports'] = function(colors) {\n  return function(letter, i, exploded) {\n    return i % 2 === 0 ? letter : colors.inverse(letter);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/maps/zebra.js?");

/***/ }),

/***/ "./node_modules/colors/lib/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/colors/lib/styles.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nThe MIT License (MIT)\n\nCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n*/\n\nvar styles = {};\nmodule['exports'] = styles;\n\nvar codes = {\n  reset: [0, 0],\n\n  bold: [1, 22],\n  dim: [2, 22],\n  italic: [3, 23],\n  underline: [4, 24],\n  inverse: [7, 27],\n  hidden: [8, 28],\n  strikethrough: [9, 29],\n\n  black: [30, 39],\n  red: [31, 39],\n  green: [32, 39],\n  yellow: [33, 39],\n  blue: [34, 39],\n  magenta: [35, 39],\n  cyan: [36, 39],\n  white: [37, 39],\n  gray: [90, 39],\n  grey: [90, 39],\n\n  bgBlack: [40, 49],\n  bgRed: [41, 49],\n  bgGreen: [42, 49],\n  bgYellow: [43, 49],\n  bgBlue: [44, 49],\n  bgMagenta: [45, 49],\n  bgCyan: [46, 49],\n  bgWhite: [47, 49],\n\n  // legacy styles for colors pre v1.0.0\n  blackBG: [40, 49],\n  redBG: [41, 49],\n  greenBG: [42, 49],\n  yellowBG: [43, 49],\n  blueBG: [44, 49],\n  magentaBG: [45, 49],\n  cyanBG: [46, 49],\n  whiteBG: [47, 49],\n\n};\n\nObject.keys(codes).forEach(function(key) {\n  var val = codes[key];\n  var style = styles[key] = [];\n  style.open = '\\u001b[' + val[0] + 'm';\n  style.close = '\\u001b[' + val[1] + 'm';\n});\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/styles.js?");

/***/ }),

/***/ "./node_modules/colors/lib/system/has-flag.js":
/*!****************************************************!*\
  !*** ./node_modules/colors/lib/system/has-flag.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nMIT License\n\nCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\nof the Software, and to permit persons to whom the Software is furnished to do\nso, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\n\n\nmodule.exports = function(flag, argv) {\n  argv = argv || process.argv;\n\n  var terminatorPos = argv.indexOf('--');\n  var prefix = /^-{1,2}/.test(flag) ? '' : '--';\n  var pos = argv.indexOf(prefix + flag);\n\n  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/system/has-flag.js?");

/***/ }),

/***/ "./node_modules/colors/lib/system/supports-colors.js":
/*!***********************************************************!*\
  !*** ./node_modules/colors/lib/system/supports-colors.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nThe MIT License (MIT)\n\nCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n*/\n\n\n\nvar os = __webpack_require__(/*! os */ \"os\");\nvar hasFlag = __webpack_require__(/*! ./has-flag.js */ \"./node_modules/colors/lib/system/has-flag.js\");\n\nvar env = process.env;\n\nvar forceColor = void 0;\nif (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {\n  forceColor = false;\n} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')\n           || hasFlag('color=always')) {\n  forceColor = true;\n}\nif ('FORCE_COLOR' in env) {\n  forceColor = env.FORCE_COLOR.length === 0\n    || parseInt(env.FORCE_COLOR, 10) !== 0;\n}\n\nfunction translateLevel(level) {\n  if (level === 0) {\n    return false;\n  }\n\n  return {\n    level: level,\n    hasBasic: true,\n    has256: level >= 2,\n    has16m: level >= 3,\n  };\n}\n\nfunction supportsColor(stream) {\n  if (forceColor === false) {\n    return 0;\n  }\n\n  if (hasFlag('color=16m') || hasFlag('color=full')\n      || hasFlag('color=truecolor')) {\n    return 3;\n  }\n\n  if (hasFlag('color=256')) {\n    return 2;\n  }\n\n  if (stream && !stream.isTTY && forceColor !== true) {\n    return 0;\n  }\n\n  var min = forceColor ? 1 : 0;\n\n  if (process.platform === 'win32') {\n    // Node.js 7.5.0 is the first version of Node.js to include a patch to\n    // libuv that enables 256 color output on Windows. Anything earlier and it\n    // won't work. However, here we target Node.js 8 at minimum as it is an LTS\n    // release, and Node.js 7 is not. Windows 10 build 10586 is the first\n    // Windows release that supports 256 colors. Windows 10 build 14931 is the\n    // first release that supports 16m/TrueColor.\n    var osRelease = os.release().split('.');\n    if (Number(process.versions.node.split('.')[0]) >= 8\n        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n      return Number(osRelease[2]) >= 14931 ? 3 : 2;\n    }\n\n    return 1;\n  }\n\n  if ('CI' in env) {\n    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {\n      return sign in env;\n    }) || env.CI_NAME === 'codeship') {\n      return 1;\n    }\n\n    return min;\n  }\n\n  if ('TEAMCITY_VERSION' in env) {\n    return (/^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0\n    );\n  }\n\n  if ('TERM_PROGRAM' in env) {\n    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);\n\n    switch (env.TERM_PROGRAM) {\n      case 'iTerm.app':\n        return version >= 3 ? 3 : 2;\n      case 'Hyper':\n        return 3;\n      case 'Apple_Terminal':\n        return 2;\n      // No default\n    }\n  }\n\n  if (/-256(color)?$/i.test(env.TERM)) {\n    return 2;\n  }\n\n  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n    return 1;\n  }\n\n  if ('COLORTERM' in env) {\n    return 1;\n  }\n\n  if (env.TERM === 'dumb') {\n    return min;\n  }\n\n  return min;\n}\n\nfunction getSupportLevel(stream) {\n  var level = supportsColor(stream);\n  return translateLevel(level);\n}\n\nmodule.exports = {\n  supportsColor: getSupportLevel,\n  stdout: getSupportLevel(process.stdout),\n  stderr: getSupportLevel(process.stderr),\n};\n\n\n//# sourceURL=webpack:///./node_modules/colors/lib/system/supports-colors.js?");

/***/ }),

/***/ "./node_modules/colors/safe.js":
/*!*************************************!*\
  !*** ./node_modules/colors/safe.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//\n// Remark: Requiring this file will use the \"safe\" colors API,\n// which will not touch String.prototype.\n//\n//   var colors = require('colors/safe');\n//   colors.red(\"foo\")\n//\n//\nvar colors = __webpack_require__(/*! ./lib/colors */ \"./node_modules/colors/lib/colors.js\");\nmodule['exports'] = colors;\n\n\n//# sourceURL=webpack:///./node_modules/colors/safe.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minimist */ \"minimist\");\n/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(minimist__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cli_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cli-table */ \"./node_modules/cli-table/lib/index.js\");\n/* harmony import */ var cli_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cli_table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nprocess.on('unhandledRejection', reason => {\n  console.error(reason.stack || reason);\n  process.exit(1);\n});\n\n(async () => {\n  const args = minimist__WEBPACK_IMPORTED_MODULE_0___default()(process.argv.slice(2));\n  const resultTable = new cli_table__WEBPACK_IMPORTED_MODULE_1___default.a({});\n  const {\n    performance: performanceThreshold,\n    accessibility: accessibilityThreshold,\n    'best-practices': bestPracticesThreshold,\n    seo: seoThreshold,\n    pwa: pwaThreshold,\n    _: [target]\n  } = args;\n  const result = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"launchChromeAndRunLighthouse\"])(target, {\n    chromeFlags: ['--headless'],\n    onlyCategories: [performanceThreshold && 'performance', accessibilityThreshold && 'accessibility', bestPracticesThreshold && 'best-practices', seoThreshold && 'seo', pwaThreshold && 'pwa']\n  });\n  const performanceScore = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getScoreByCategory\"])(result, 'performance');\n  const accessibilityScore = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getScoreByCategory\"])(result, 'accessibility');\n  const bestPracticesScore = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getScoreByCategory\"])(result, 'best-practices');\n  const seoScore = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getScoreByCategory\"])(result, 'seo');\n  const pwaScore = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getScoreByCategory\"])(result, 'pwa');\n  resultTable.push(['Category', 'Threshold', 'Score', 'Status']);\n  resultTable.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"buildRow\"])('Performance', performanceThreshold, performanceScore));\n  resultTable.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"buildRow\"])('Accessibility', accessibilityThreshold, accessibilityScore));\n  resultTable.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"buildRow\"])('Best Practices', bestPracticesThreshold, bestPracticesScore));\n  resultTable.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"buildRow\"])('SEO', seoThreshold, seoScore));\n  resultTable.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"buildRow\"])('PWA', pwaThreshold, pwaScore));\n  console.log(resultTable.toString());\n  const exitCode = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getExitCode\"])({\n    performanceThreshold,\n    performanceScore,\n    accessibilityThreshold,\n    accessibilityScore,\n    bestPracticesThreshold,\n    bestPracticesScore,\n    seoThreshold,\n    seoScore,\n    pwaThreshold,\n    pwaScore\n  });\n  process.exit(exitCode);\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: launchChromeAndRunLighthouse, getScoreByCategory, buildRow, getExitCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchChromeAndRunLighthouse\", function() { return launchChromeAndRunLighthouse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScoreByCategory\", function() { return getScoreByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildRow\", function() { return buildRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getExitCode\", function() { return getExitCode; });\n/* harmony import */ var chrome_launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-launcher */ \"chrome-launcher\");\n/* harmony import */ var chrome_launcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_launcher__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lighthouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lighthouse */ \"lighthouse\");\n/* harmony import */ var lighthouse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lighthouse__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var colors_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colors/safe */ \"./node_modules/colors/safe.js\");\n/* harmony import */ var colors_safe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(colors_safe__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FAIL = 'FAIL';\nconst PASS = 'PASS';\nconst SKIP = 'SKIP';\nconst launchChromeAndRunLighthouse = async (url, opts, config = null) => {\n  return chrome_launcher__WEBPACK_IMPORTED_MODULE_0__[\"launch\"]({\n    chromeFlags: opts.chromeFlags\n  }).then(chrome => {\n    opts.port = chrome.port;\n    return lighthouse__WEBPACK_IMPORTED_MODULE_1___default()(url, opts, config).then(results => {\n      return chrome.kill().then(() => results.lhr);\n    });\n  });\n};\nconst getScoreByCategory = (result, category) => result.categories[category] && result.categories[category].score * 100;\n\nconst getStatus = (threshold, score) => {\n  if (!threshold) return SKIP;\n  return score < threshold ? FAIL : PASS;\n};\n\nconst buildRow = (category, threshold, score) => {\n  if (!threshold) return [category, '---------', '-----', `[${SKIP}]`];\n  const status = getStatus(threshold, score);\n  const cell = status === PASS ? colors_safe__WEBPACK_IMPORTED_MODULE_2__[\"green\"] : colors_safe__WEBPACK_IMPORTED_MODULE_2__[\"red\"];\n  return [cell(category), cell(threshold), cell(score), cell(`[${status}]`)];\n};\nconst getExitCode = ({\n  performanceThreshold,\n  performanceScore,\n  accessibilityThreshold,\n  accessibilityScore,\n  bestPracticesThreshold,\n  bestPracticesScore,\n  seoThreshold,\n  seoScore,\n  pwaThreshold,\n  pwaScore\n}) => {\n  return [getStatus(performanceThreshold, performanceScore), getStatus(accessibilityThreshold, accessibilityScore), getStatus(bestPracticesThreshold, bestPracticesScore), getStatus(seoThreshold, seoScore), getStatus(pwaThreshold, pwaScore)].includes(FAIL) ? 1 : 0;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "chrome-launcher":
/*!**********************************!*\
  !*** external "chrome-launcher" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chrome-launcher\");\n\n//# sourceURL=webpack:///external_%22chrome-launcher%22?");

/***/ }),

/***/ "lighthouse":
/*!*****************************!*\
  !*** external "lighthouse" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lighthouse\");\n\n//# sourceURL=webpack:///external_%22lighthouse%22?");

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"minimist\");\n\n//# sourceURL=webpack:///external_%22minimist%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });