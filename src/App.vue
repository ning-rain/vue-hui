<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receive="receive"></MyHeader>
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        ></MyList>
        <MyFooter :todos="todos"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyList from '@/components/MyList.vue'
import MyFooter from '@/components/MyFooter.vue'
export default {
  created () { },
  data () {
    return {
      todos: [
        { id: '001', title: '吃饭', done: false },
        { id: '002', title: '睡觉', done: false },
        { id: '003', title: '打豆豆', done: true }
      ]
    }
  },
  methods: {
    // 添加一个todo函数
    // 接收myheader组件add函数中传来添加用到的值
    receive (todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾选和取消勾选一个todo函数
    // 接收item组件handlecheck组件传来的id进行是否勾选的绑定
    checkTodo (id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 删除一个todo的函数
    // 接收item组件handledelete函数中传来需要删除的todo.id
    deleteTodo (id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    MyHeader,
    MyList,
    MyFooter
  }
}
</script>

<style scoped  lang='less'>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
