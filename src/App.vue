<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.mainComp = this;
    helpers.onPageUpdate();
  },
  updated() {
    console.log("updated");
    helpers.onPageUpdate();
  },
};
</script>

<style>
</style>
