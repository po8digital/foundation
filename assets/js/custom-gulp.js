"use strict";

var _utilities = require("./_utilities");

var trigger = (0, _utilities.$)('.header-menu__trigger');
var slideMenu = (0, _utilities.$)('.slide-menu');
var close = (0, _utilities.$)('.slide-menu__close');

function openMenu() {
  return slideMenu.classList.add('isOpen');
}

trigger.on('click', openMenu);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$ = exports.$ = void 0;
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32
var $ = document.querySelector.bind(document);
exports.$ = $;
var $$ = document.querySelectorAll.bind(document);
exports.$$ = $$;

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};
"use strict";

require("./_slide-menu.js");