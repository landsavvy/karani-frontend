<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Title Search</h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            type="text"
            v-model.number="titleNum"
            id="titleNum"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="titleNum"
            >Title Number</label
          >
        </div>
        <div class="text-danger" v-for="error in errors">{{ error }}</div>
        <div class="mt-5">
          <button
            type="button"
            @click="submit"
            class="float-right btn btn-outline-dark"
          >
            Submit Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      errors: [],
      titleNum: "",
    };
  },
  async mounted() {},
  methods: {
    async submit() {
      this.errors = [];
      //check first if title exists
      var response = await this.$axios.post(config.peer.title.exists, {
        titleNum: this.titleNum,
      });
      let exists = response.data.exists;
      if (!exists) {
        this.errors.push("Title does not exists");
        return;
      }

      var response = await this.$axios.post(config.url.title.search, {
        titleNum: this.titleNum,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style scoped>
.form-cont {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
}
#map {
  height: 80vh;
  width: 100%;
}
</style>
