<template>
  <div>
    <h1>{{ obj.msg }}</h1>
    <h1>{{ obj.age > 10 ? "四皇" : "卡拉米" }}</h1>
  </div>
</template>
<script>

export default {
  created () { },
  data () {
    return {
      obj: {
        msg: '香克斯',
        age: 18
      }

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
