<template>
  <ul class="todo-main">
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from '@/components/MyItem'
export default {
  name: 'MyList',
  props: ['todos', 'checkTodo', 'deleteTodo'],
  created () { },
  data () {
    return {
    }
  },
  thods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {
    MyItem
  }
}
</script>

<style   lang='less'>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
</style>
