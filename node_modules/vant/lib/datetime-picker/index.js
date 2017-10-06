'use strict';

exports.__esModule = true;

var _components;

var _picker = require('../picker');

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allowedType = ['time', 'date', 'datetime'];

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-picker', { ref: "picker", attrs: { "columns": _vm.columns, "visible-item-count": _vm.visibleItemCount, "showToolbar": "" }, on: { "change": _vm.handlePickerChange, "confirm": _vm.handlePickerConfirm, "cancel": function cancel($event) {
          _vm.$emit('cancel');
        } } });
  },

  name: 'van-datetime-picker',

  components: (_components = {}, _components[_picker2.default.name] = _picker2.default, _components),

  props: {
    type: {
      type: String,
      default: 'datetime',
      validator: function validator(value) {
        return allowedType.indexOf(value) > -1;
      }
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(new Date().getFullYear() - 10, 0, 1);
      }
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(new Date().getFullYear() + 10, 11, 31);
      }
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    value: null
  },

  data: function data() {
    var value = this.value;
    if (!value) {
      if (this.type.indexOf('date') > -1) {
        value = this.minDate;
      } else {
        var minHour = this.minHour;
        value = (minHour > 10 ? minHour : '0' + minHour) + ':00';
      }
    } else {
      value = this.correctValue(value);
    }

    return {
      innerValue: value
    };
  },


  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
      if (!isEqual) this.innerValue = val;
    },
    innerValue: function innerValue(val) {
      this.updateColumnValue(val);
      this.$emit('input', val);
    }
  },

  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [[this.minHour, this.maxHour], [0, 59]];
      }

      var _getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _getBoundary.maxYear,
          maxDate = _getBoundary.maxDate,
          maxMonth = _getBoundary.maxMonth,
          maxHour = _getBoundary.maxHour,
          maxMinute = _getBoundary.maxMinute;

      var _getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _getBoundary2.minYear,
          minDate = _getBoundary2.minDate,
          minMonth = _getBoundary2.minMonth,
          minHour = _getBoundary2.minHour,
          minMinute = _getBoundary2.minMinute;

      var result = [[minYear, maxYear], [minMonth, maxMonth], [minDate, maxDate], [minHour, maxHour], [minMinute, maxMinute]];

      if (this.type === 'date') result.splice(3, 2);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (range) {
        var values = _this.times(range[1] - range[0] + 1, function (index) {
          var value = range[0] + index;
          return value < 10 ? '0' + value : '' + value;
        });

        return {
          values: values
        };
      });
      return results;
    }
  },

  methods: {
    correctValue: function correctValue(value) {
      // 仅时间
      if (this.type === 'time') {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        var correctedHour = Math.max(hour, this.minHour);
        correctedHour = Math.min(correctedHour, this.maxHour);

        return correctedHour + ':' + minute;
      }

      // 含有日期的情况

      var _getBoundary3 = this.getBoundary('max', value),
          maxYear = _getBoundary3.maxYear,
          maxDate = _getBoundary3.maxDate,
          maxMonth = _getBoundary3.maxMonth,
          maxHour = _getBoundary3.maxHour,
          maxMinute = _getBoundary3.maxMinute;

      var _getBoundary4 = this.getBoundary('min', value),
          minYear = _getBoundary4.minYear,
          minDate = _getBoundary4.minDate,
          minMonth = _getBoundary4.minMonth,
          minHour = _getBoundary4.minHour,
          minMinute = _getBoundary4.minMinute;

      var minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
      var maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
      value = Math.max(value, minDay);
      value = Math.min(value, maxDay);

      return new Date(value);
    },
    times: function times(n, iteratee) {
      var index = -1;
      var result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + 'Date'];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + 'Year'] = year, _ref[type + 'Month'] = month, _ref[type + 'Date'] = date, _ref[type + 'Hour'] = hour, _ref[type + 'Minute'] = minute, _ref;
    },
    getTrueValue: function getTrueValue(formattedValue) {
      if (!formattedValue) return;
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10);
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },
    isLeapYear: function isLeapYear(year) {
      return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    },
    isShortMonth: function isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },
    handlePickerConfirm: function handlePickerConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    handlePickerChange: function handlePickerChange(picker) {
      var values = picker.$children.filter(function (child) {
        return child.currentValue !== undefined;
      }).map(function (child) {
        return child.currentValue;
      });
      var value = void 0;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        var year = this.getTrueValue(values[0]);
        var month = this.getTrueValue(values[1]);
        var maxDate = this.getMonthEndDay(year, month);
        var date = this.getTrueValue(values[2]);
        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;
        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }
        value = new Date(year, month - 1, date, hour, minute);
      }
      value = this.correctValue(value);
      this.innerValue = value;
      this.$emit('change', picker);
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var values = [];
      if (this.type === 'time') {
        var currentValue = value.split(':');
        values = [currentValue[0], currentValue[1]];
      } else {
        values = ['' + value.getFullYear(), ('0' + (value.getMonth() + 1)).slice(-2), ('0' + value.getDate()).slice(-2)];
        if (this.type === 'datetime') {
          values.push(('0' + value.getHours()).slice(-2), ('0' + value.getMinutes()).slice(-2));
        }
      }
      this.$nextTick(function () {
        _this2.setColumnByValues(values);
      });
    },
    setColumnByValues: function setColumnByValues(values) {
      if (!this.$refs.picker) {
        return;
      }
      var setColumnValue = this.$refs.picker.setColumnValue;
      if (this.type === 'time') {
        setColumnValue(0, values[0]);
        setColumnValue(1, values[1]);
      } else {
        setColumnValue(0, values[0]);
        setColumnValue(1, values[1]);
        setColumnValue(2, values[2]);
        if (this.type === 'datetime') {
          setColumnValue(3, values[3]);
          setColumnValue(4, values[4]);
        }
      }
      [].forEach.call(this.$refs.picker.$children, function (child) {
        return child.doOnValueChange();
      });
    }
  },

  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  }
};