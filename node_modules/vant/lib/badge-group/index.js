"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-badge-group van-hairline--top-bottom" }, [_vm._t("default")], 2);
  },

  name: 'van-badge-group',

  props: {
    // 当前激活 tab 面板的 key
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data: function data() {
    return {
      badges: []
    };
  }
};