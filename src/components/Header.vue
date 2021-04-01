<template>
  <header>
    <div class="container-slim">
      <strong>Vue Todo List</strong>
      <span>Coder by <span>Ertuğrul Sencer UZUN</span></span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/main";
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $light;
  height: 64px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    strong {
      font-size: 1.25rem;
      font-weight: 800;
      color: $primary;
    }
    span {
      font-style: italic;
      font-weight: 500;
      font-size: 0.95rem;
      color: rgba(#323232, 0.8);
      > span {
        color: $primary;
      }
    }
  }
}
</style>
