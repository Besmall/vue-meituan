'use strict';

exports.__esModule = true;

var _components;

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "van-goods-action__mini-btn van-hairline", attrs: { "href": _vm.url }, on: { "click": function click($event) {
          _vm.$emit('click', $event);
        } } }, [_c('van-icon', { class: ['van-goods-action__mini-btn-icon', _vm.iconClass], attrs: { "name": _vm.icon } }), _vm._t("default")], 2);
  },

  name: 'van-goods-action-mini-btn',

  components: (_components = {}, _components[_icon2.default.name] = _icon2.default, _components),

  props: {
    icon: String,
    iconClass: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: 'javascript:;'
    }
  }
};