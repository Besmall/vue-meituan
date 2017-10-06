'use strict';

exports.__esModule = true;

var _components;

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _popup = require('../mixins/popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-dialog-bounce" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], staticClass: "van-dialog" }, [_vm.title ? _c('div', { staticClass: "van-dialog__header", domProps: { "textContent": _vm._s(_vm.title) } }) : _vm._e(), _c('div', { staticClass: "van-dialog__content van-hairline" }, [_vm._t("default", [_vm.message ? _c('div', { staticClass: "van-dialog__message", class: { 'van-dialog__message--withtitle': _vm.title }, domProps: { "innerHTML": _vm._s(_vm.message) } }) : _vm._e()])], 2), _c('div', { staticClass: "van-dialog__footer", class: { 'is-twobtn': _vm.showCancelButton && _vm.showConfirmButton } }, [_c('van-button', { directives: [{ name: "show", rawName: "v-show", value: _vm.showCancelButton, expression: "showCancelButton" }], staticClass: "van-dialog__cancel", attrs: { "size": "large" }, on: { "click": function click($event) {
          _vm.handleAction('cancel');
        } } }, [_vm._v("\n        " + _vm._s(_vm.cancelButtonText) + "\n      ")]), _c('van-button', { directives: [{ name: "show", rawName: "v-show", value: _vm.showConfirmButton, expression: "showConfirmButton" }], class: ['van-dialog__confirm', { 'van-hairline--left': _vm.showCancelButton && _vm.showConfirmButton }], attrs: { "size": "large" }, on: { "click": function click($event) {
          _vm.handleAction('confirm');
        } } }, [_vm._v("\n        " + _vm._s(_vm.confirmButtonText) + "\n      ")])], 1)])]);
  },

  name: 'van-dialog',

  components: (_components = {}, _components[_button2.default.name] = _button2.default, _components),

  mixins: [_popup2.default],

  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    callback: {
      type: Function
    },
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      default: false
    },
    lockOnScroll: {
      default: true
    }
  },

  methods: {
    handleAction: function handleAction(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
};