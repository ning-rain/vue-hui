<template>
  <div>
    <!-- v-model:是实现vuejs 变量和表单标签value属性, 双向绑定的指令-->
    <div>
      <span>用户名:</span>
      <input type="text" v-model="user" />
    </div>
    <div>
      <span>密码: </span>
      <input type="text" :value="password" @input="handleinput" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '香克斯',
      value: '14'
    }
  },
  methods: {
    handleinput (e) {
      this.value = e.target.value
    }
  }
}
</script>
