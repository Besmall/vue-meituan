'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-step van-hairline", class: _vm.stepClass }, [_c('div', { staticClass: "van-step__circle-container" }, [_vm.status !== 'process' ? _c('i', { staticClass: "van-step__circle" }) : _c('i', { staticClass: "van-icon van-icon-checked", style: { color: _vm.$parent.activeColor } })]), _c('div', { staticClass: "van-step__title", style: _vm.titleStyle }, [_vm._t("default")], 2), _c('div', { staticClass: "van-step__line" })]);
  },

  name: 'van-step',

  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },


  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },
    stepClass: function stepClass() {
      var status = this.status;
      var statusClass = status ? 'van-step--' + status : '';
      var directionClass = 'van-step--' + this.$parent.direction;
      return [directionClass, statusClass];
    },
    titleStyle: function titleStyle() {
      if (this.status === 'process') {
        return {
          color: this.$parent.activeColor
        };
      }
    }
  }
};