<template>
  <div>
    <div class="filter__container">
      <div class="filter">카테고리</div>
      <div class="filter">밥/면</div>
      <div class="filter">거리</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.filter__container {
  display: flex;
  justify-content: center;
}
.filter {
  background: rgba(0, 173, 255, 0.9);
  padding: 20px 20px;
  margin: 0 0.5rem;
}
.filter:hover {
  filter: contrast(200%);
  cursor: pointer;
}
</style>
