'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-sku-actions" }, [_vm.showAddCartBtn ? _c('button', { staticClass: "van-sku__add-cart-btn", on: { "click": _vm.onAddCartClicked } }, [_vm._v("\n    加入购物车\n  ")]) : _vm._e(), _c('button', { staticClass: "van-sku__buy-btn", on: { "click": _vm.onBuyClicked } }, [_vm._v("\n    " + _vm._s(_vm.buyText) + "\n  ")])]);
  },

  name: 'van-sku-actions',

  props: {
    skuEventBus: Object,
    showAddCartBtn: Boolean,
    buyText: {
      type: String,
      default: '立即购买'
    }
  },

  methods: {
    onAddCartClicked: function onAddCartClicked() {
      this.skuEventBus.$emit('sku:addCart');
    },
    onBuyClicked: function onBuyClicked() {
      this.skuEventBus.$emit('sku:buy');
    }
  }
};