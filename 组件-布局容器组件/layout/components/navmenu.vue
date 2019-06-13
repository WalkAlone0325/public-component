<template>
  <div class="navMenu">

    <label v-for="(navMenu, index) in navMenus" :key="index">
      <router-link :to="{ name: 'elc', params: {id:navMenu.entity.name} }">
        <el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
                      :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name"
                      :route="navMenu.entity.value">
          <i :class="navMenu.entity.icon"></i>
          <span slot="title">{{navMenu.entity.alias}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{navMenu.entity.alias}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </label>

  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none
}
</style>
