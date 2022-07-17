<template>
  <div class="todo-footer" v-show="todoAll">
    <label>
      <input type="checkbox" :checked="isAll" />
    </label>
    <span>
      <span>已完成{{ doneAll }}</span> / 全部{{ todoAll }}
    </span>
    <button class="btn btn-dange r">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ['todos'],
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {
    todoAll () {
      return this.todos.length
    },
    //! 完整写法
    // doneAll () {
    //   return this.todos.reduce((pre, current) => {
    //     return pre + (current.done ? 1 : 0)
    //   }, 0)
    // }
    // 精简版

    doneAll () {
      return this.todos.reduce((pre, current) =>
        pre + (current.done ? 1 : 0), 0)
    },
    isAll () {
      return this.todoAll === this.doneAll && this.todoAll > 0
    }
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style  lang='less'>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
