<template>
  <div class="container-slim">
    <form @submit.prevent="addTodo" class="add-todo">
      <input v-model="item.title" type="text" placeholder="Yapılacak" />
      <button type="submit">Ekle</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      item: {
        title: null,
        check: false
      }
    };
  },
  methods: {
    addTodo() {
      eventBus.$emit("addTodo", this.item);
      this.item = {
        title: null
      };
    }
  }
};
</script>

<style lang="scss">
@import "../assets/main";
.add-todo {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    flex: 1;
    padding: 0.5rem 1rem;
    outline: none;
    border: 2px solid rgba($primary, 0.35);
    font-weight: 600;
    color: darken($primary, 10);
    transition: border 300ms ease-in-out;
    &:hover,
    &:focus {
      border: 2px solid $primary;
    }
  }
  button {
    padding: 0.5rem 0;
    text-align: center;
    margin-left: 0.5rem;
    flex-basis: 64px;
    font-weight: 800;
    color: #323232;
    border: 2px solid rgba($primary, 0.35);
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      border: 2px solid $primary;
      color: $primary;
    }
  }
}
</style>
