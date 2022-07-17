<template>
  <div>
    <!-- <MyProduct v-for="lists in list" :key="lists.id" :obj="lists"></MyProduct> -->
    <MyProduct
      v-for="lists in list"
      :key="lists.id"
      :title="lists.proname"
      :price="lists.proprice"
      :info="lists.info"
      v-on:del="delFn"
      :index="index"
    ></MyProduct>
  </div>
</template>

<script>
// 目标: 循环使用组件-分别传入数据
// 1. 创建组件
// 2. 引入组件
import MyProduct from './components/MyProduct'
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折'
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊'
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了'
        }
      ]
    }
  },
  // 3. 注册组件
  components: {
    // MyProduct: MyProduct
    MyProduct
  },
  methods: {
    delFn (val) {
      this.list[val].proprice--
    }
  }
}
</script>

<style>
</style>
