'use strict';

exports.__esModule = true;

var _components;

var _cell = require('../cell');

var _cell2 = _interopRequireDefault(_cell);

var _cellGroup = require('../cell-group');

var _cellGroup2 = _interopRequireDefault(_cellGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-coupon-cell" }, [_c('van-cell-group', [_c('van-cell', { attrs: { "title": _vm.title, "isLink": _vm.editable }, on: { "click": function click($event) {
          _vm.$emit('click');
        } } }, [_vm.coupons[_vm.chosenCoupon] ? _c('div', [_c('div', [_vm._v(_vm._s(_vm.amount))]), _c('div', [_vm._v(_vm._s(_vm.coupons[_vm.chosenCoupon].condition))])]) : [_vm._v(_vm._s(_vm.guide))]], 2)], 1)], 1);
  },

  name: 'van-coupon-cell',

  components: (_components = {}, _components[_cell2.default.name] = _cell2.default, _components[_cellGroup2.default.name] = _cellGroup2.default, _components),

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title: {
      type: String,
      default: '优惠'
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    guide: function guide() {
      return this.coupons.length === 0 ? '使用优惠' : '\u60A8\u6709 ' + this.coupons.length + ' \u4E2A\u53EF\u7528\u4F18\u60E0';
    },
    amount: function amount() {
      var coupon = this.coupons[this.chosenCoupon];
      return coupon.name + ' \u7701\uFFE5' + (coupon.value / 100).toFixed(2);
    }
  }
};