<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleChcked(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  props: ['todo', 'checkTodo', 'deleteTodo'],
  created () { },
  data () {
    return {
    }
  },
  methods: {
    // 勾选checked取反触发函数
    // 目的拿到需要取反的todo的id传给app中回调处理函数
    handleChcked (id) {
      //  通知APP将对应id的done值取反
      this.checkTodo(id)
    },
    // 删除功能触发函数
    // 目的取到需要删除的todo的id传给app中回调处理函数
    handleDelete (id) {
      if (confirm('确定删除么？')) {
        // 通知APP将对应id的done值删除
        this.deleteTodo(id)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style >
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ccc;
}
li:hover button {
  display: block;
}
</style>
