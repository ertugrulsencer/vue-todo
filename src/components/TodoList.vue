<template>
  <div class="todo-list">
    <div class="container-slim">
      <ul class="list">
        <todo-item
          v-for="(item, index) in todoList"
          :class="{ checked: item.check }"
          :key="index"
          :id="index"
          >{{ item.title }}</todo-item
        >
      </ul>
    </div>
  </div>
</template>
<script>
import todoItem from "./TodoItem";
import { eventBus } from "../main";

export default {
  data() {
    return {
      todoList: []
    };
  },
  components: {
    todoItem
  },
  watch: {
    todoList() {
      localStorage.setItem("todo", JSON.stringify(this.todoList));
    }
  },
  created() {
    this.todoList = JSON.parse(localStorage.getItem("todo")) || [];
    eventBus.$on("addTodo", item => {
      this.todoList.push(item);
      localStorage.setItem("todo", JSON.stringify(this.todoList));
    });
    eventBus.$on("deleteTodo", id => {
      this.todoList.splice(id, 1);
      localStorage.setItem("todo", JSON.stringify(this.todoList));
    });
    eventBus.$on("checkTodo", id => {
      this.todoList[id].check = !this.todoList[id].check;
      localStorage.setItem("todo", JSON.stringify(this.todoList));
    });
  }
};
</script>
<style lang="scss"></style>
