<template>
  <div class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form" action="#"  @submit.prevent="">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="search">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <ul class="list_container" v-if="searchData.length > 0">
      <li class="list_li" v-for="(item, key) in searchData" :key="key">
        <section class="item_left">
          <img :src="item.url" class="restaurant_img">
        </section>
        <section class="item_right">
          <div class="item_right_text">
            <p>
              <span>{{item.name}}</span>
            </p>
            <p>月售 {{item.month_sales}} 单</p>
            <p>{{item.delivery_fee}} 元起送 / 距离 {{item.distance}} 公里</p>
          </div>
          </section>
      </li>
    </ul>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  data () {
    return {
      items: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555611782751&di=5a415d55d8d572d49ce673afd4daabce&imgtype=0&src=http%3A%2F%2Ffile.9eat.com%2FfileUpload%2F2014%2F7%2F1%2F87667c4a2ae5.jpg',
          name: 'aa饼',
          month_sales: '671',
          delivery_fee: '20',
          distance : '100'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555611816753&di=5dcd938616cdc10d451ec4d03612d9d4&imgtype=0&src=http%3A%2F%2Ffile.9eat.com%2FfileUpload%2F2014%2F5%2F22%2Fd3568dcaea80.jpg',
          name: 'abb饮料',
          month_sales: '710',
          delivery_fee: '10',
          distance : '45'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555611834780&di=b1cb360aa590c81c74c50a7ab4ba5b36&imgtype=0&src=http%3A%2F%2Ffile.9eat.com%2FfileUpload%2F2014%2F4%2F22%2F7ed1f2e5f045.JPG',
          name: 'aa面食',
          month_sales: '666',
          delivery_fee: '20',
          distance : '50'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555611834779&di=6f0707e3265ab88cef28356cd65c9e6c&imgtype=0&src=http%3A%2F%2Ffile.9eat.com%2FfileUpload%2F2013%2F12%2F6%2Fd453b2f19c06.JPG',
          name: '菜',
          month_sales: '888',
          delivery_fee: '15',
          distance : '15.5'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555611834780&di=b1cb360aa590c81c74c50a7ab4ba5b36&imgtype=0&src=http%3A%2F%2Ffile.9eat.com%2FfileUpload%2F2014%2F4%2F22%2F7ed1f2e5f045.JPG',
          name: 'ab披萨',
          month_sales: '798',
          delivery_fee: '20',
          distance : '60'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556206680&di=f25f7a43641c95550296720ccc12cbc2&imgtype=jpg&er=1&src=http%3A%2F%2Ffile.9eat.com%2FfileUpload%2F2014%2F6%2F4%2Fe785c94dad40.jpg',
          name: '面',
          month_sales: '858',
          delivery_fee: '30',
          distance : '35.5'
        }
      ],
      search: ''
    }
  },

  computed: {
    searchData() {
      var search = this.search;
      if (search) {
        return this.items.filter(function(item) {
          return Object.keys(item).some(function(key) {
            return String(item[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.items;
    }
  },

  components: {
    HeaderTop
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/mixins.styl"
  .search  //搜索
    width 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid $brown
          font-size 16px
          color #fff
          background-color $brown

    .list_container
      background-color: #fff;
      .list_li
        display: flex;
        justify-content: center;
        padding: 10px
        border-bottom: 1px solid $bc;
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>
