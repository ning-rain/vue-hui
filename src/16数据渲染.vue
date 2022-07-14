<template>
  <div>
    <ul>
      <li v-for="(arrs, index) in arr" :key="index">{{ arrs }}</li>
    </ul>
    <p v-for="stus in stuArr" :key="stus.id">
      <span>{{ stus.id }}</span>
      <span>{{ stus.name }} </span>
      <span>{{ stus.sex }}</span>
      <span>{{ stus.hobby }}</span>
    </p>
    <br />
    <div v-for="(key, value) in tObj" :key="value">
      <p>{{ value }}{{ key }}</p>
    </div>
    <p v-for="i in count" :key="i">{{ i }}</p>
  </div>
</template>
<script>
export default {
  created () { },
  data () {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子'
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇'
        }
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期'
      },
      count: 10
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
