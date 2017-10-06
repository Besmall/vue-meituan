'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _transition = require('../utils/transition');

var _transition2 = _interopRequireDefault(_transition);

var _draggable = require('./draggable');

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ITEM_HEIGHT = 44;

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-picker-column", class: _vm.classNames }, [_c('div', { ref: "wrapper", staticClass: "van-picker-column-wrapper", class: { dragging: _vm.isDragging }, style: { height: _vm.visibleContentHeight + 'px' } }, _vm._l(_vm.currentValues, function (item, index) {
      return _c('div', { key: index, staticClass: "van-picker-column__item", class: { 'van-picker-column__item--selected': item === _vm.currentValue }, style: { height: _vm.itemHeight + 'px', lineHeight: _vm.itemHeight + 'px' } }, [_vm._v("\n      " + _vm._s((typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object' && item[_vm.valueKey] ? item[_vm.valueKey] : item) + "\n    ")]);
    }))]);
  },

  name: 'van-picker-column',

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    /**
     * 该列所有的可选值
     */
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * 每列添加额外的`className`
     */
    className: {
      type: String,
      default: ''
    },
    /**
     * 行高
     */
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    value: {},
    valueKey: String
  },

  data: function data() {
    return {
      currentValue: this.value,
      currentValues: this.values,
      isDragging: false
    };
  },


  watch: {
    values: function values(val) {
      this.currentValues = val;
    },
    currentValues: function currentValues(val) {
      /* istanbul ignore else */
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0];
      }
    },
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(val) {
      this.doOnValueChange();

      this.$emit('input', val);
      this.$emit('columnChange', this);
    }
  },

  computed: {
    /**
     * picker可见备选元素总高度
     */
    visibleContentHeight: function visibleContentHeight() {
      return this.itemHeight * this.visibileColumnCount;
    },


    /**
     * 当前选中值在`values`中的索引
     */
    valueIndex: function valueIndex() {
      return this.currentValues.indexOf(this.currentValue);
    },


    /**
     * 计算picker的拖动范围
     */
    dragRange: function dragRange() {
      var values = this.currentValues;
      var visibileColumnCount = this.visibileColumnCount;
      var itemHeight = this.itemHeight;

      return [-itemHeight * (values.length - Math.ceil(visibileColumnCount / 2)), itemHeight * Math.floor(visibileColumnCount / 2)];
    },


    /**
     * 计算`classNames`
     */
    classNames: function classNames() {
      return this.className.split(' ');
    }
  },

  mounted: function mounted() {
    this.initEvents();
    this.doOnValueChange();
  },


  methods: {
    /**
     * 将当前`value`值转换成需要垂直方向需要`translate`的值
     */
    value2Translate: function value2Translate(value) {
      var values = this.currentValues;
      var valueIndex = values.indexOf(value);
      var offset = Math.floor(this.visibileColumnCount / 2);
      var itemHeight = this.itemHeight;

      if (valueIndex !== -1) {
        return (valueIndex - offset) * -itemHeight;
      }
    },


    /**
     * 根据当前`translate`的值转换成当前选中的`value`
     */
    translate2Value: function translate2Value(translate) {
      var itemHeight = this.itemHeight;
      translate = Math.round(translate / itemHeight) * itemHeight;

      var index = -(translate - Math.floor(this.visibileColumnCount / 2) * itemHeight) / itemHeight;

      return this.currentValues[index];
    },


    /**
     * 初始化拖动事件
     */
    initEvents: function initEvents() {
      var _this = this;

      var el = this.$refs.wrapper;
      var dragState = {};

      var velocityTranslate;
      var prevTranslate;
      var pickerItems; // eslint-disable-line

      (0, _draggable2.default)(el, {
        start: function start(event) {
          // 存储当前状态
          dragState = {
            range: _this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: _transition2.default.getElementTranslate(el).top
          };

          pickerItems = el.querySelectorAll('.van-picker-item'); // eslint-disable-line
        },

        drag: function drag(event) {
          _this.isDragging = true;

          dragState.left = event.pageX;
          dragState.top = event.pageY;

          var deltaY = dragState.top - dragState.startTop;
          var translate = dragState.startTranslateTop + deltaY;

          _transition2.default.translateElement(el, null, translate);

          velocityTranslate = translate - prevTranslate || translate;

          prevTranslate = translate;
        },

        end: function end() {
          /* istanbul ignore else */
          if (_this.isDragging) {
            _this.isDragging = false;

            var momentumRatio = 7;
            var currentTranslate = _transition2.default.getElementTranslate(el).top;
            var duration = new Date() - dragState.start;

            var momentumTranslate;
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
            }

            var dragRange = dragState.range;

            _this.$nextTick(function () {
              var translate;
              var itemHeight = _this.itemHeight;

              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
              } else {
                translate = Math.round(currentTranslate / itemHeight) * itemHeight;
              }

              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);

              _transition2.default.translateElement(el, null, translate);

              _this.currentValue = _this.translate2Value(translate);
            });
          }

          dragState = {};
        }
      });
    },


    /**
     * `value`改变时调用
     */
    doOnValueChange: function doOnValueChange() {
      var value = this.currentValue;
      var wrapper = this.$refs.wrapper;

      _transition2.default.translateElement(wrapper, null, this.value2Translate(value));
    }
  }
};