<template>
  <div>
    <p>你要购买商品的数量: {{ count }}</p>
    <!-- 1. 绑定事件
     语法: v-on:事件名="少量代码"
     语法: v-on:事件名="methods里函数名"
     语法: v-on:事件名="methods里函数名(值)"
     语法: @事件名="methods里函数名"
     -->
    <button @click="btn">+1</button>
    <button @click="btn1">+1</button>
    <button @click="btn2(5)">+5</button>
    <button @click="btn3">减少1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    btn () {
      this.count++
    },
    btn1 () {
      this.count++
    },
    btn2 (val) {
      this.count += 5
    },
    btn3 () {
      this.count--
    }
  }
}
</script>
