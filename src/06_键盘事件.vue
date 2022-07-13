<template>
  <div>
    <!-- 1. 绑定键盘按下事件.enter-回车 -->
    <input type="text" @keyup="enter" />
    <!-- 2. 绑定键盘按下事件.esc修饰符 - 取消键 -->
    <hr />
    <input type="text" @keyup.esc="esc" />
  </div>
</template>

<script>
export default {
  methods: {
    enter () {
      alert('叹气了')
    },
    esc () {
      alert('退出了')
    }
  }
}
</script>
