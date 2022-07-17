<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(arrs, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ arrs.name }}</td>
          <td>{{ arrs.age }}</td>
          <td>{{ arrs.sex }}</td>
          <td>
            <button>删除</button>
            <button>编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  created () { },
  data () {
    return {
      name: '',
      age: '',
      sex: '',
      arr: [
        {
          name: 'zzz',
          age: 18,
          sex: '男'
        }
      ]
    }
  },
  methods: {
    add () {

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
