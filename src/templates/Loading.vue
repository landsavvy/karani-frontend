<template>
  <!-- pp -->
  <div class="blur">
    <div class="popup mx-auto p-3">
      <div class="content mx-auto text-center">
        <div class="animated rubberBand infinite">Loading</div>
      </div>
    </div>
  </div>
  <!-- pp -->
</template>

<script>
export default {};
</script>

<style scoped>
.blur {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  backdrop-filter: blur(5px);
}
.popup {
  align-self: center;
  border-radius: 1.5em;
  width: 50%;
  background: white;
  box-shadow: 1px -4px 2px 0 rgba(247, 0, 0, 0.06),
    -1px 8px 6px 0 rgba(0, 0, 0, 0.19);
}
</style>
