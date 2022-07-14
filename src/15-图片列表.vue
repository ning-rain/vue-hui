<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" @mouseenter="fn(1)" @click="fn1" />
      <img src="./assets/02.jpg" alt="" @mouseenter="fn(2)" @click="fn1" />
      <img src="./assets/03.jpg" alt="" @mouseenter="fn(3)" @click="fn1" />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="url" alt="" sty le="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img1 from './assets/01.jpg'
import img2 from './assets/02.jpg'
import img3 from './assets/03.jpg'
export default {
  created () { },
  data () {
    return {
      url: img1

    }
  },
  methods: {
    fn (val) {
      this.url = { 1: img1, 2: img2, 3: img3 }[val]
    },
    fn1 (e) {
      document.body.style.background = `url(${e.target
        .src}) no-repect 0 0/cover`
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}

</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
