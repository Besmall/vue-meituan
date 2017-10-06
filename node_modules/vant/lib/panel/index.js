'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-panel van-hairline--top-bottom" }, [_c('div', { staticClass: "van-panel__header van-hairline--bottom" }, [_vm._t("header", [_c('div', { staticClass: "van-panel__title", domProps: { "textContent": _vm._s(_vm.title) } }), _vm.desc ? _c('span', { staticClass: "van-panel__desc", domProps: { "textContent": _vm._s(_vm.desc) } }) : _vm._e(), _vm.status ? _c('span', { staticClass: "van-panel__status", domProps: { "textContent": _vm._s(_vm.status) } }) : _vm._e()])], 2), _c('div', { staticClass: "van-panel__content" }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', { staticClass: "van-panel__footer van-hairline--top" }, [_vm._t("footer")], 2) : _vm._e()]);
  },

  name: 'van-panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
};