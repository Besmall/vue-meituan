'use strict';

exports.__esModule = true;

var _components;

var _popup = require('../mixins/popup');

var _popup2 = _interopRequireDefault(_popup);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-actionsheet-float" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: ['van-actionsheet', { 'van-actionsheet--withtitle': _vm.title }] }, [_vm.title ? _c('div', { staticClass: "van-actionsheet__header van-hairline--top-bottom" }, [_c('div', { domProps: { "textContent": _vm._s(_vm.title) } }), _c('van-icon', { attrs: { "name": "close" }, on: { "click": function click($event) {
          $event.stopPropagation();_vm.$emit('input', false);
        } } })], 1) : _vm._e(), !_vm.title ? _c('ul', { staticClass: "van-actionsheet__list" }, _vm._l(_vm.actions, function (item, index) {
      return _c('li', { key: index, class: ['van-actionsheet__item', 'van-hairline--top', item.className, { 'van-actionsheet__item--loading': item.loading }], on: { "click": function click($event) {
            $event.stopPropagation();_vm.onClickItem(item);
          } } }, [!item.loading ? [_c('span', { staticClass: "van-actionsheet__name" }, [_vm._v(_vm._s(item.name))]), item.subname ? _c('span', { staticClass: "van-actionsheet__subname" }, [_vm._v(_vm._s(item.subname))]) : _vm._e()] : _c('van-loading', { staticClass: "van-actionsheet__loading", attrs: { "type": "circle", "color": "black" } })], 2);
    })) : _vm._e(), _vm.cancelText ? _c('div', { staticClass: "van-actionsheet__item van-actionsheet__cancel van-hairline--top", on: { "click": function click($event) {
          $event.stopPropagation();_vm.$emit('input', false);
        } } }, [_vm._v(_vm._s(_vm.cancelText))]) : _c('div', { staticClass: "van-actionsheet__content" }, [_vm._t("default")], 2)])]);
  },

  name: 'van-actionsheet',

  mixins: [_popup2.default],

  components: (_components = {}, _components[_icon2.default.name] = _icon2.default, _components[_loading2.default.name] = _loading2.default, _components),

  props: {
    value: Boolean,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: String,
    cancelText: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  mounted: function mounted() {
    this.value && this.open();
  },


  methods: {
    onClickItem: function onClickItem(item) {
      if (typeof item.callback === 'function') {
        item.callback(item);
      }
    }
  }
};