'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: ['van-card', { 'van-card--center': _vm.centered }] }, [_c('div', { staticClass: "van-card__thumb" }, [_vm._t("thumb", [_c('img', { staticClass: "van-card__img", attrs: { "src": _vm.thumb } })])], 2), _c('div', { staticClass: "van-card__content" }, [_vm._t("title", [_vm.title || _vm.price !== undefined ? _c('div', { staticClass: "van-card__row" }, [_vm.title ? _c('div', { staticClass: "van-card__title" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.price !== undefined ? _c('div', { staticClass: "van-card__price" }, [_vm._v("¥ " + _vm._s(_vm.price))]) : _vm._e()]) : _vm._e()]), _vm._t("desc", [_vm.desc || _vm.num !== undefined ? _c('div', { staticClass: "van-card__row" }, [_vm.desc ? _c('div', { staticClass: "van-card__desc" }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e(), _vm.num !== undefined ? _c('div', { staticClass: "van-card__num" }, [_vm._v("x " + _vm._s(_vm.num))]) : _vm._e()]) : _vm._e()]), _vm._t("tags")], 2), _vm.$slots.footer ? _c('div', { staticClass: "van-card__footer" }, [_vm._t("footer")], 2) : _vm._e()]);
  },

  name: 'van-card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    num: [Number, String],
    centered: Boolean,
    price: [Number, String]
  }
};