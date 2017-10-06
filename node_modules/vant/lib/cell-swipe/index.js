'use strict';

exports.__esModule = true;

var _clickoutside = require('../utils/clickoutside');

var _clickoutside2 = _interopRequireDefault(_clickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "clickoutside", rawName: "v-clickoutside:touchstart", value: _vm.swipeMove, expression: "swipeMove", arg: "touchstart" }], staticClass: "van-cell-swipe", on: { "click": function click($event) {
          _vm.swipeMove();
        }, "touchstart": _vm.startDrag, "touchmove": _vm.onDrag, "touchend": _vm.endDrag, "touchcancel": _vm.endDrag } }, [_c('div', { staticClass: "van-cell-swipe__wrapper", style: _vm.wrapperStyle, on: { "transitionend": function transitionend($event) {
          _vm.swipe = false;
        } } }, [_vm.leftWidth ? _c('div', { staticClass: "van-cell-swipe__left" }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', { staticClass: "van-cell-swipe__right" }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },

  name: 'van-cell-swipe',

  props: {
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },

  directives: {
    Clickoutside: _clickoutside2.default
  },

  data: function data() {
    return {
      offset: 0
    };
  },


  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: 'translate3d(' + this.offset + 'px, 0, 0)'
      };
    }
  },

  methods: {
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false; // 是否正在拖动
      this.opened = true; // 记录是否滑动左右 或者 注册
    },
    swipeMove: function swipeMove() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;
      offset && (this.swiping = true);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      // right

      if (direction > 0 && -offset > rightWidth * 0.4 && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus();
        // left
      } else if (direction < 0 && offset > leftWidth * 0.4 && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      this.startX = event.changedTouches[0].pageX;
      this.startY = event.changedTouches[0].pageY;
    },
    onDrag: function onDrag(event) {
      if (this.opened) {
        !this.swiping && this.swipeMove();
        this.opened = false;
        return;
      }

      var offsetTop = event.changedTouches[0].pageY - this.startY;
      var offsetLeft = event.changedTouches[0].pageX - this.startX;
      if (offsetLeft < 0 && -offsetLeft > this.rightWidth || offsetLeft > 0 && offsetLeft > this.leftWidth || offsetLeft > 0 && !this.leftWidth || offsetLeft < 0 && !this.rightWidth) {
        return;
      }

      var y = Math.abs(offsetTop);
      var x = Math.abs(offsetLeft);
      var swiping = !(x < 5 || x >= 5 && y >= x * 1.73);
      if (swiping) {
        event.preventDefault();
        this.swipeMove(offsetLeft);
      };
    },
    endDrag: function endDrag() {
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      };
    }
  }
};