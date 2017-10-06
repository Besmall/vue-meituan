"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-uploader" }, [_vm._t("default"), _c('input', { ref: "input", staticClass: "van-uploader__input", attrs: { "type": "file", "disabled": _vm.disabled }, on: { "change": _vm.onValueChange } })], 2);
  },

  name: 'van-uploader',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    beforeRead: Function,
    afterRead: Function,
    resultType: {
      type: String,
      default: 'dataUrl',
      validator: function validator(value) {
        return value === 'dataUrl' || value === 'text';
      }
    }
  },

  methods: {
    onValueChange: function onValueChange(event) {
      var _this = this;

      if (this.disabled) {
        return;
      }

      var file = event.target.files[0];
      if (!file || this.beforeRead && !this.beforeRead(file)) {
        return;
      }

      var reader = new FileReader();
      reader.onload = function (e) {
        _this.afterRead && _this.afterRead({
          file: file,
          content: e.target.result
        });
        _this.$refs.input && (_this.$refs.input.value = '');
      };

      if (this.resultType === 'dataUrl') {
        reader.readAsDataURL(file);
      } else if (this.resultType === 'text') {
        reader.readAsText(file);
      }
    }
  }
};