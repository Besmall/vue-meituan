'use strict';

exports.__esModule = true;

var ALLOW_TYPE = ['danger', 'success', 'primary'];

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { class: ['van-tag', 'van-hairline--surround', (_obj = { 'is-plain': _vm.plain, 'is-mark': _vm.mark }, _obj["van-tag--" + _vm.type] = _vm.type, _obj)] }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'van-tag',
  props: {
    type: {
      type: String,
      validator: function validator(val) {
        return ~ALLOW_TYPE.indexOf(val);
      }
    },
    mark: Boolean,
    plain: Boolean
  }
};