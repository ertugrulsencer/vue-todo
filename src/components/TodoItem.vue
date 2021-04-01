<template>
  <li>
    <span>
      <slot />
    </span>
    <div class="buttons">
      <button @click="checkTodo" class="check">Yapıldı</button>
      <button @click="deleteTodo" class="delete">Sil</button>
    </div>
  </li>
</template>
<script>
import { eventBus } from "../main";
export default {
  props: ["id"],
  methods: {
    deleteTodo() {
      eventBus.$emit("deleteTodo", this.id);
    },
    checkTodo() {
      eventBus.$emit("checkTodo", this.id);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/main";
li {
  border: 2px solid rgba($primary, 0.2);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  &.checked {
    span {
      text-decoration: wavy line-through #c23131;
    }
  }
  button {
    color: $light;
    font-weight: 600;
    padding: 0.35rem 0.75rem;
    cursor: pointer;
    transition: background 300ms ease-in-out;
    &.delete {
      border: 2px solid darken(#c23131, 14);
      background: #c23131;
      &:hover {
        background: rgba(#c23131, 0.85);
      }
    }
    &.check {
      border: 2px solid darken(#2763ee, 14);
      background: #2763ee;
      &:hover {
        background: rgba(#2763ee, 0.85);
      }
    }
  }
}
</style>
