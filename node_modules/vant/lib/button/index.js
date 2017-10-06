'use strict';

exports.__esModule = true;

var _components;

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALLOWED_SIZE = ['mini', 'small', 'normal', 'large'];
var ALLOWED_TYPE = ['default', 'danger', 'primary'];

exports.default = {
  name: 'van-button',

  components: (_components = {}, _components[_loading2.default.name] = _loading2.default, _components),

  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ALLOWED_TYPE.indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: function validator(value) {
        return ALLOWED_SIZE.indexOf(value) > -1;
      }
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  },

  render: function render(h) {
    var type = this.type,
        loading = this.loading,
        disabled = this.disabled,
        Tag = this.tag;


    return h(
      Tag,
      {
        attrs: {
          type: this.nativeType,
          disabled: disabled
        },
        'class': ['van-button', 'van-button--' + type, 'van-button--' + this.size, {
          'van-button--disabled': disabled,
          'van-button--loading': loading,
          'van-button--block': this.block,
          'van-button--bottom-action': this.bottomAction
        }],
        on: {
          'click': this.onClick
        }
      },
      [loading ? h(
        'van-loading',
        {
          'class': 'van-button__icon-loading',
          attrs: { type: 'circle',
            color: type === 'default' ? 'black' : 'white'
          }
        },
        []
      ) : null, h(
        'span',
        { 'class': 'van-button__text' },
        [this.$slots.default]
      )]
    );
  }
};