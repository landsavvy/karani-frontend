<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Home</h6>
    </div>
    <div class="card-body">
      <div>
        Welcome to Karani. Use the menu on the left to access land registry
        services.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (state.user.role == "registrar") {
      return this.$router.push({ name: "adminHome" });
    }
    if (state.user.role == "board") {
      return this.$router.push({ name: "adminHome" });
    }
  },
};
</script>

<style>
</style>
