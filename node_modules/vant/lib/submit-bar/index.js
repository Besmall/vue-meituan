'use strict';

exports.__esModule = true;

var _components;

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-submit-bar" }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.tip || _vm.$slots.tip, expression: "tip || $slots.tip" }], staticClass: "van-submit-bar__tip" }, [_vm._v("\n    " + _vm._s(_vm.tip)), _vm._t("tip")], 2), _c('div', { staticClass: "van-submit-bar__bar" }, [_c('div', { staticClass: "van-submit-bar__price" }, [_vm.hasPrice ? [_c('span', { staticClass: "van-submit-bar__price-text" }, [_vm._v("合计：")]), _c('span', { staticClass: "van-submit-bar__price-interger" }, [_vm._v("¥" + _vm._s(_vm.priceInterger) + ".")]), _c('span', { staticClass: "van-submit-bar__price-decimal" }, [_vm._v(_vm._s(_vm.priceDecimal))])] : _vm._e()], 2), _c('van-button', { attrs: { "type": _vm.buttonType, "disabled": _vm.disabled, "loading": _vm.loading }, on: { "click": _vm.onSubmit } }, [_vm._v("\n      " + _vm._s(_vm.loading ? '' : _vm.buttonText) + "\n    ")])], 1)]);
  },

  name: 'van-submit-bar',

  components: (_components = {}, _components[_button2.default.name] = _button2.default, _components),

  props: {
    tip: String,
    type: Number,
    price: Number,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    buttonType: {
      type: String,
      default: 'danger'
    }
  },

  computed: {
    hasPrice: function hasPrice() {
      return typeof this.price === 'number';
    },
    priceInterger: function priceInterger() {
      return Math.floor(this.price / 100);
    },
    priceDecimal: function priceDecimal() {
      var decimal = this.price % 100;
      return (decimal < 10 ? '0' : '') + decimal;
    }
  },

  methods: {
    onSubmit: function onSubmit() {
      if (!this.disabled && !this.loading) {
        this.$emit('submit');
      }
    }
  }
};