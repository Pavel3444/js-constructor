parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CrKI":[function(require,module,exports) {
module.exports="/image.61dd97e5.png";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(n,"</div>")}function o(n){return'<div class="col-sm">'.concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){return'\n            <form name="'.concat(n,'">\n            <h5>').concat(n,'</h5>\n                <div class="form-group">\n                    <input class="form-control form-control-sm" name="value" placeholder="value">\n                </div>\n                <div class="form-group">\n                    <input  class="form-control form-control-sm" name="styles" placeholder="styles">\n                </div>\n            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n            <hr>\n        </form>\n    ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=n,exports.col=o,exports.css=t,exports.block=r;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextBlock=exports.ColumnsBlock=exports.ImageBlock=exports.TitleBlock=exports.Block=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=i();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?u(t):o}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error("метод toHTML должен быть реализован")}}]),t}();exports.Block=p;var y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"<").concat(n,"/>")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.styles,n=(e.alt,e.imageStyles);return(0,t.row)('<img src="'.concat(this.value,'" style="').concat((0,t.css)(n),'">'),(0,t.css)(o))}}]),c}();exports.ImageBlock=v;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles,o=this.value.map(function(e){return(0,t.col)(e)}).join("");return(0,t.row)(o,(0,t.css)(e))}}]),c}();exports.ColumnsBlock=h;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles;return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(e))}}]),c}();exports.TextBlock=b;
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=o(require("./assets/image.png")),t=require("./classes/blocks");function o(e){return e&&e.__esModule?e:{default:e}}var r=[new t.TitleBlock("Конструктор страницы на Java Script",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff",padding:"1.5rem","text-align":"center"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"это картинка"}),new t.TextBlock("here we go to some text",{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)","font-weight":"bold",padding:"1rem"}}),new t.ColumnsBlock(["1111111113","22222222","333333333"],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",color:"#fff",padding:"2rem","font-weight":"bold"}})];exports.model=r;
},{"./assets/image.png":"CrKI","./classes/blocks":"dDFO"}],"V48B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var e=require("../model");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}var o=function(){function e(r){n(this,e),this.$el=document.querySelector(r)}return t(e,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),e}();exports.Site=o;
},{"../model":"JDu1"}],"jExt":[function(require,module,exports) {

},{}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(){function n(e,i){var l=this;r(this,n),a(this,"add",function(e){e.preventDefault();var r=e.target,n=e.target.value.value,i=e.target.styles.value,a="text"===r?new t.TextBlock(n,{styles:i}):new t.TitleBlock(n,{styles:i});l.update(a),e.target.value.value="",e.target.styles.value=""}),this.$el=document.querySelector(e),this.update=i,this.init()}return i(n,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add)}},{key:"template",get:function(){return[(0,e.block)("text"),(0,e.block)("title")].join("")}}]),n}();exports.Sidebar=l;
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),r=require("../model"),n=require("./sidebar");function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,r,n){return r&&i(e.prototype,r),n&&i(e,n),e}var a=function(){function r(e){t(this,r),this.model=e}return o(r,[{key:"init",value:function(){var r=this,t=new e.Site("#site");t.render(this.model);new n.Sidebar("#panel",function(e){r.model.push(e),t.render(r.model)})}}]),r}();exports.App=a;
},{"./site":"V48B","../model":"JDu1","./sidebar":"idI0"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),s=require("./classes/site");require("./styles/main.css");var r=require("./classes/sidebar"),i=require("./classes/app");new i.App(e.model).init();
},{"./model":"JDu1","./classes/site":"V48B","./styles/main.css":"jExt","./classes/sidebar":"idI0","./classes/app":"Z1kE"}]},{},["Focm"], null)