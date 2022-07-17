<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul v-for="(arrs, index) in arr" :key="arrs.name">
      <li>{{ arrs.name }}</li>
      <button @click="add(index)">加入购物车</button>
      <li></li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(arrs, index) in arr" :key="arrs.name">
        <td>{{ index + 1 }}</td>
        <td>{{ arrs.name }}</td>
        <td>{{ arrs.price }}</td>
        <td>{{ arrs.count }}</td>
        <td>{{ arrs.price * arrs.count }}</td>
      </tr>
    </table>
    <p>总价格为:{{ AllPrice }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          name: '水浒传',
          price: 107,
          count: 0
        },
        {
          name: '西游记',
          price: 192,
          count: 0
        },
        {
          name: '三国演义',
          price: 219,
          count: 0
        },
        {
          name: '红楼梦',
          price: 178,
          count: 0
        }
      ]
    }
  },
  methods: {
    add (index) {
      this.arr[index].count++
    }
  },
  computed: {
    AllPrice () {
      return this.arr.reduce((all, obj) => {
        return (all += obj.price * obj.count)
      }, 0)
    }
  }
}
</script>
