"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.prefix + "-row", style: _vm.style }, [_vm._t("default")], 2);
  },

  name: 'van-row',

  props: {
    prefix: {
      type: String,
      default: 'van'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    style: function style() {
      var margin = "-" + Number(this.gutter) / 2 + "px";
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {};
    }
  }
};