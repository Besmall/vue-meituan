'use strict';

exports.__esModule = true;

var _components;

var _cell = require('../cell');

var _cell2 = _interopRequireDefault(_cell);

var _switch = require('../switch');

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-cell', { staticClass: "van-switch-cell", attrs: { "title": _vm.title } }, [_c('van-switch', { attrs: { "value": _vm.value, "disabled": _vm.disabled, "loading": _vm.loading }, on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } })], 1);
  },

  name: 'van-switch-cell',

  components: (_components = {}, _components[_cell2.default.name] = _cell2.default, _components[_switch2.default.name] = _switch2.default, _components),

  props: {
    title: String,
    value: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
};