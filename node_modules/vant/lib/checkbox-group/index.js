"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-checkbox-group" }, [_vm._t("default")], 2);
  },

  name: 'van-checkbox-group',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  }
};