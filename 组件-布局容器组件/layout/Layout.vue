<template>
  <el-container class="layout-warpper">
    <!-- 左侧菜单组件 -->
    <SideBar></SideBar>

    <!-- 右侧 -->
    <div class="main-container">
      <NavBar></NavBar>
      <MainContent></MainContent>
    </div>
  </el-container>
</template>

<script>
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import MainContent from './components/MainContent'

export default {
  name: 'layout',
  data () {
    return {
      totalList: [],
      isId: '权限管理'
    }
  },
  components: { NavBar, SideBar, MainContent }
}
</script>

<style lang="scss" scoped>
.layout-warpper {
  width: 100%;
  height: 100%;

  .main-container {
    width: 100%;
    height: 100%;
  }

  /*.el-aside {*/
  /*  background: #f0f6f6;*/

  /*  .menu-header {*/
  /*    margin: 26px 0;*/
  /*    text-align: center;*/

  /*    img {*/
  /*      width: 70px;*/
  /*      height: 70px;*/
  /*      border-radius: 50%;*/
  /*    }*/

  /*    h2 {*/
  /*      font-size: 24px;*/
  /*      color: #000;*/
  /*    }*/
  /*  }*/
  /*}*/

  /*.el-container {*/
  /*  width: 100%;*/

  /*  .el-main {*/
  /*    background: #e9eef3;*/
  /*    margin: 6px;*/
  /*    border-radius: 5px;*/
  /*    padding: 0 10px;*/
  /*  }*/
  /*}*/

}
</style>
