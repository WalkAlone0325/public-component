<template>
  <div>
    <div style="margin-bottom: 20px;">

    </div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in editableTabs2"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{item.title}}
      </el-tab-pane>
    </el-tabs>

    <el-table :data="tableData">
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      btn: true,
      item: {
        date: '2018-11-11',
        name: 'OnePiece',
        address: '郑州市高新区推进城',
      },
      editableTabsValue2: '2',
      editableTabs2: [],
      tabIndex: 0,
      tableData: [],
      totalList: [],
    }
  },
  methods: {
    addTab (targetName) {
      this.btn = true
      this.editableTabs2.forEach((v, k) => {
        if (v.title === targetName) {
          this.btn = false
          this.editableTabsValue2 = v.name
        }
      })
      if (this.btn) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs2.push({
          title: targetName,
          name: newTabName,
          content: targetName
        })
        this.editableTabsValue2 = newTabName
      }
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2

      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
              this.$router.push({
                name: 'content',
                params: {
                  id: nextTab.title
                }
              })
            }
          }
        })
      }
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    }
  },
  created () {
    this.tableData = Array(20).fill(this.item)
  },
  beforeRouteEnter (to, from, next) {
    console.log('我从哪里来', to.params.id, from)
    var self = this
    next(vm => {
      vm.item.name = to.params.id
      vm.addTab(to.params.id)
    })
  },
  watch: {
    $route (to, from) {
      this.item.name = this.$route.params.id
      this.addTab(to.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
