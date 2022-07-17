<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  props: ['receive'],
  created () { },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    // 添加一个todo的触发函数
    // 目的功能：子组件必能直接向父组件传值
    // 主要作用收集判断用户输入的值，传给app再由app中定义的函数修改数据
    add (e) {
      if (this.title !== '') {
        const todoObj = { id: nanoid(), title: this.title, done: false }
        this.receive(todoObj)
        e.target.value = ''
      } else {
        alert('输入不能为空')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style  lang='less'>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
