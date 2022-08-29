<template>
  <div class="bg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
  height: 100vh;
}
</style>
