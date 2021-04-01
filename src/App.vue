<template>
  <main>
    <app-header></app-header>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </main>
</template>

<script>
import Header from "./components/Header";
import addTodo from "./components/AddTodo";
import todoList from "./components/TodoList";
export default {
  components: {
    appHeader: Header,
    addTodo,
    todoList
  }
};
</script>

<style lang="scss">
@import "./assets/main";
</style>
