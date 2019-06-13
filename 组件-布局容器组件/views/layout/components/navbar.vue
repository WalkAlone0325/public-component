<template>
  <div class="navbar">
    <i class="el-icon-s-unfold"></i>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0,0,0,.3);

  .el-icon-s-unfold {
    font-size: 26px;
    margin: 17px;
    cursor: pointer;

    &:hover {
      color: purple;
    }
  }
}
</style>
