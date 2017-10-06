"use strict";

exports.__esModule = true;
/**
 * 根据父组件名找到对应`parent`
 */
exports.default = {
  methods: {
    findParentByComponentName: function findParentByComponentName(name) {
      if (this.parentGroup) return;

      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parentGroup = parent;
          break;
        } else {
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    }
  }
};