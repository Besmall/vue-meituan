'use strict';

exports.__esModule = true;

var _components;

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-button', { staticClass: "van-goods-action__big-btn", attrs: { "tag": "a", "href": _vm.url, "type": _vm.primary ? 'primary' : 'default', "bottomAction": "" }, on: { "click": function click($event) {
          _vm.$emit('click', $event);
        } } }, [_vm._t("default")], 2);
  },

  name: 'van-goods-action-big-btn',

  components: (_components = {}, _components[_button2.default.name] = _button2.default, _components),

  props: {
    primary: Boolean,
    url: {
      type: String,
      default: 'javascript:;'
    }
  }
};