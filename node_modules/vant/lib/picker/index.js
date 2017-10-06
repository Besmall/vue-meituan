'use strict';

exports.__esModule = true;

var _components;

var _pickerColumn = require('./picker-column');

var _pickerColumn2 = _interopRequireDefault(_pickerColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ITEM_HEIGHT = 44;

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-picker" }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showToolbar, expression: "showToolbar" }], staticClass: "van-picker__toolbar van-hairline--top-bottom" }, [_vm._t("default", [_c('a', { staticClass: "van-picker__cancel", attrs: { "href": "javascript:void(0)" }, on: { "click": _vm.handlePickerCancel } }, [_vm._v("取消")]), _c('a', { staticClass: "van-picker__confirm", attrs: { "href": "javascript:void(0)" }, on: { "click": _vm.handlePickerConfirm } }, [_vm._v("完成")]), _vm.title ? _c('div', { staticClass: "van-picker__title" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])], 2), _c('div', { staticClass: "van-picker__columns", class: ['van-picker__columns--' + _vm.columns.length] }, [_vm._l(_vm.columns, function (item, index) {
      return _c('van-picker-column', { key: index, attrs: { "values": item.values, "class-name": item.className, "itemHeight": _vm.itemHeight, "visible-item-count": _vm.visibileColumnCount, "value-key": _vm.valueKey }, on: { "columnChange": function columnChange($event) {
            _vm.columnValueChange(index);
          } }, model: { value: _vm.values[index], callback: function callback($$v) {
            _vm.$set(_vm.values, index, $$v);
          }, expression: "values[index]" } });
    }), _c('div', { staticClass: "van-picker-center-highlight", style: { height: _vm.itemHeight + 'px', marginTop: -_vm.itemHeight / 2 + 'px' } })], 2)]);
  },

  name: 'van-picker',

  components: (_components = {}, _components[_pickerColumn2.default.name] = _pickerColumn2.default, _components),

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    /**
     * 选中元素区高度
     */
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    /**
     * 对象数组，配置每一列显示的数据
     */
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * 否在组件顶部显示一个toolbar
     */
    showToolbar: {
      type: Boolean,
      default: false
    },
    /**
     * 顶部toolbar 显示的title
     */
    title: String,
    valueKey: String
  },

  computed: {
    values: function values() {
      var columns = this.columns || [];
      var values = [];

      columns.forEach(function (column) {
        values.push(column.value || column.values[column.defaultIndex || 0]);
      });

      return values;
    }
  },

  methods: {
    handlePickerCancel: function handlePickerCancel() {
      this.$emit('cancel', this.values);
    },
    handlePickerConfirm: function handlePickerConfirm() {
      this.$emit('confirm', this.values);
    },

    /**
     * 处理列`change`事件
     */
    columnValueChange: function columnValueChange(index) {
      this.$emit('change', this, this.values, index);
    },


    /**
     * 获取对应索引的列的实例
     */
    getColumn: function getColumn(index) {
      var children = this.$children.filter(function (child) {
        return child.$options.name === 'van-picker-column';
      });
      return children[index];
    },


    /**
     * 获取对应列中选中的值
     */
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.values[column.valueIndex];
    },


    /**
     * 设置对应列中选中的值
     */
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      if (column) {
        column.currentValue = value;
      }
    },


    /**
     * 获取对应列中所有的备选值
     */
    getColumnValues: function getColumnValues(index) {
      var column = this.getColumn(index);
      return column && column.currentValues;
    },


    /**
     * 设置对应列中所有的备选值
     */
    setColumnValues: function setColumnValues(index, values) {
      var column = this.getColumn(index);
      if (column) {
        column.currentValues = values;
      }
    },


    /**
     * 获取所有列中被选中的值，返回一个数组
     */
    getValues: function getValues() {
      return this.values;
    },


    /**
     * `values`为一个数组，设置所有列中被选中的值
     */
    setValues: function setValues(values) {
      var _this = this;

      values.forEach(function (value, index) {
        _this.setColumnValue(index, value);
      });
    }
  }
};