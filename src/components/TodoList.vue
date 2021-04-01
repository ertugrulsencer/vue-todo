<template>
  <div class="todo-list">
    <div class="container-slim">
      <ul v-if="todoList.length > 0" class="list">
        <todo-item
          v-for="(item, index) in todoList"
          :class="{ checked: item.check }"
          :key="index"
          :id="index"
          >{{ item.title }}</todo-item
        >
      </ul>
      <div v-else class="alert visible">
        <strong>Yapılacaklar listeniz şaun için boş :)</strong>
      </div>
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
    eventBus.$on("deleteAll", confirm => {
      if (confirm) {
        this.todoList = [];
        localStorage.setItem("todo", JSON.stringify(this.todoList));
      }
    });
  }
};
</script>
<style scoped lang="scss">
@import "../assets/main";
.alert {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 2px solid darken($primary, 8);
  background: rgba($primary, 0.5);
  color: darken($primary, 8);
}
</style>
