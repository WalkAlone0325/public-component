<template>
  <div id="app" v-cloak>
    <div class="main" v-clickoutside="handleClose">
      <button @click="show =!show">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
        <p>下拉框的内容，点击外面的区域可以关闭</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// 使用自定义指令
Vue.directive("clickoutside", {
  bind: function(el, binding, vnode) {
    function documentHander(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHander;
  },
  unbind: function(el, binding) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
});
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClose() {
      this.show = false;
    }
  }
};
</script>

<style>
[v-clock] {
  display: none;
}
.main {
  width: 125px;
}
button {
  display: block;
  width: 100%;
  color: #fff;
  background-color: #39f;
  border: 0;
  padding: 6px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  position: relative;
}
button:active {
  top: 1px;
  left: 1px;
}
.dropdown {
  width: 100%;
  height: 150px;
  margin: 5px 0;
  font-size: 12px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
.dropdown p {
  display: inline-block;
  padding: 6px;
}
</style>
