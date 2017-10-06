'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { class: ['van-badge van-hairline', { 'van-badge--select': _vm.isSelect }], attrs: { "href": _vm.url }, on: { "click": _vm.onClick } }, [_vm.info ? _c('div', { staticClass: "van-badge__info" }, [_vm._v(_vm._s(_vm.info))]) : _vm._e(), _vm._v("\n  " + _vm._s(_vm.title) + "\n")]);
  },

  name: 'van-badge',

  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: 'javascript:;'
    },
    info: {
      type: String
    }
  },

  beforeCreate: function beforeCreate() {
    this.$parent.badges.push(this);
  },


  computed: {
    isSelect: function isSelect() {
      var parent = this.$parent;
      return parent.badges.indexOf(this) === parent.activeKey;
    }
  },

  methods: {
    onClick: function onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
};