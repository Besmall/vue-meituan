"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefix + "-col", (_obj = {}, _obj[_vm.prefix + "-col-" + _vm.span] = _vm.span, _obj[_vm.prefix + "-col-offset-" + _vm.offset] = _vm.offset, _obj)], style: _vm.style }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'van-col',

  props: {
    span: [Number, String],
    offset: [Number, String],
    prefix: {
      type: String,
      default: 'van'
    }
  },

  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
};