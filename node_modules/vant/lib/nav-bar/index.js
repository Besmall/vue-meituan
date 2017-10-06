'use strict';

exports.__esModule = true;

var _components;

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: ['van-nav-bar van-hairline--top-bottom', { 'van-nav-bar--fixed': _vm.fixed }] }, [_c('div', { staticClass: "van-nav-bar__left", on: { "click": function click($event) {
          _vm.$emit('clickLeft');
        } } }, [_vm._t("left", [_vm.leftArrow ? _c('van-icon', { staticClass: "van-nav-bar__arrow", attrs: { "name": "arrow" } }) : _vm._e(), _vm.leftText ? _c('span', { staticClass: "van-nav-bar__text", domProps: { "textContent": _vm._s(_vm.leftText) } }) : _vm._e()])], 2), _c('div', { staticClass: "van-nav-bar__title" }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { staticClass: "van-nav-bar__right", on: { "click": function click($event) {
          _vm.$emit('clickRight');
        } } }, [_vm._t("right", [_vm.rightText ? _c('span', { staticClass: "van-nav-bar__text", domProps: { "textContent": _vm._s(_vm.rightText) } }) : _vm._e()])], 2)]);
  },

  name: 'van-nav-bar',

  components: (_components = {}, _components[_icon2.default.name] = _icon2.default, _components),

  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean
  }
};