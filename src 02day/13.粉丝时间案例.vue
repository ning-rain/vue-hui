<template>
  <div>
    <p>国内网站：粉丝数量: {{ msg | qian }} 万</p>
    <p>国外网站：粉丝数量: {{ msg | wan }} 千</p>
    <p>时间: {{ time | time }}</p>
    <p>时间: {{ time | time1 }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  created () { },
  data () {
    return {
      msg: 1876986,
      time: 1636450540055
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {
    qian (val) {
      return val / 10000
    },
    wan (val) {
      return val / 1000
    },
    time (val) {
      return moment(val).format('YYYY - MM - DD ')
    },
    time1 (val) {
      return moment(val).format('YYYY / MM / DD ')
    }
  },
  components: {}
}
</script>

<style scoped lang='less'>
</style>
