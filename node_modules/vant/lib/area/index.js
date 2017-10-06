'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _components;

var _picker = require('../picker');

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_PROVINCE = {
  code: '-1',
  name: '选择省份'
};

var DEFAULT_CITY = {
  code: '-1',
  name: '选择城市'
};

var DEFAULT_COUNTY = {
  code: '-1',
  name: '选择地区'
};

var PROVINCE_TYPE = 'provice';
var CITY_TYPE = 'city';
var COUNTY_TYPE = 'county';

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-area" }, [_c('van-picker', { ref: "picker", attrs: { "columns": _vm.areaColumns, "value-key": "name", "show-toolbar": "" }, on: { "change": _vm.handleAreaChange, "confirm": _vm.handleAreaConfirm, "cancel": _vm.handleAreaCancel } })], 1);
  },

  name: 'van-area',

  components: (_components = {}, _components[_picker2.default.name] = _picker2.default, _components),

  props: {
    value: {},
    areaList: Object,
    /**
     * 省市县显示列数，3-省市县，2-省市，1-省
     */
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    areaColumns: function areaColumns() {
      var areaList = this.areaList;

      if (!areaList || areaList && (0, _typeof3.default)(areaList.province_list) !== 'object') return [];

      var columns = [];
      var curValue = this.value || '';

      columns.push({
        values: [DEFAULT_PROVINCE].concat(this.computedAreaList(PROVINCE_TYPE)),
        className: 'van-area__province',
        defaultIndex: this.getAreaIndex(PROVINCE_TYPE, curValue)
      });

      var columnsNum = this.columnsNum;
      if (+columnsNum > 1) {
        columns.push({
          values: [DEFAULT_CITY].concat(this.computedAreaList(CITY_TYPE, curValue.slice(0, 2))),
          className: 'van-area__city',
          defaultIndex: this.getAreaIndex(CITY_TYPE, curValue)
        });
      }

      if (+columnsNum > 2) {
        columns.push({
          values: [DEFAULT_COUNTY].concat(this.computedAreaList(COUNTY_TYPE, curValue.slice(0, 4))),
          className: 'van-area__county',
          defaultIndex: this.getAreaIndex(COUNTY_TYPE, curValue)
        });
      }

      return columns;
    }
  },

  methods: {
    /**
     * 根据省市县类型和对应的`code`获取对应列表
     *
     * @param {string} type 省市县类型
     * @param {string} code 对应code
     */
    computedAreaList: function computedAreaList(type, code) {
      var result = [];
      var curAreaList = this.areaList;
      var areaList = type === PROVINCE_TYPE ? curAreaList.province_list : type === CITY_TYPE ? curAreaList.city_list : curAreaList.county_list;

      for (var i in areaList) {
        // 如果为省类型直接插入，因为省那一列是全部显示的
        // 其他类型需要找到前缀相同的
        if (type === PROVINCE_TYPE || code && i.slice(0, code.length) === code) {
          result.push({
            code: i,
            name: areaList[i]
          });
        }
      }

      return result;
    },


    /**
     * 获取对应省市县在列表中的索引
     */
    getAreaIndex: function getAreaIndex(type, code) {
      var compareNum = type === PROVINCE_TYPE ? 2 : type === CITY_TYPE ? 4 : 6;
      var areaList = this.computedAreaList(type, code.slice(0, compareNum - 2));

      for (var i = 0; i < areaList.length; i++) {
        if (+areaList[i].code.slice(0, compareNum) === +code.slice(0, compareNum)) {
          return i + 1;
        }
      }

      return 0;
    },
    handleAreaChange: function handleAreaChange(picker, values, index) {
      var code = values[index].code;
      // 处理省变化
      if (index === 0) {
        picker.setColumnValues(1, [DEFAULT_CITY].concat(this.computedAreaList(CITY_TYPE, code.slice(0, 2))));
        picker.setColumnValues(2, [DEFAULT_COUNTY].concat(this.computedAreaList(COUNTY_TYPE, code.slice(0, 4))));
      } else if (index === 1) {
        picker.setColumnValues(2, [DEFAULT_COUNTY].concat(this.computedAreaList(COUNTY_TYPE, code.slice(0, 4))));
      }
    },
    handleAreaConfirm: function handleAreaConfirm(values) {
      this.$emit('confirm', values);
    },
    handleAreaCancel: function handleAreaCancel() {
      this.$emit('cancel');
    }
  }
};