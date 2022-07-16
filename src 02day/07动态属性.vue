<template>
  <div>
    <!-- 动态绑定style 语法 v-bind:style="对象"
         v-bind:style = '{css属性名: 值}'-->
    <p>vue 动态绑定style</p>
    <!-- 需求： 点击按钮 切换字体大小 -->
    <p :style="{ fondSize: fondSize + 'px' }">vue 动态绑定style111</p>
    <button @click="fondSize = 16">16px</button>
    <button @click="fondSize = 32">32px</button>
    <button @click="fondSize = 48">48px</button>
  </div>
</template>
<script>
export default {
  name: 'VueStyle',
  data () {
    return {
      fondSize: 12
    }
  },
  methods: {}
}
</script>
