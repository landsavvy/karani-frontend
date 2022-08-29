<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Add Peer</h6>
      </div>
      <div class="card-body">
        <div class="text-danger" v-for="error in errors">{{ error }}</div>
        <div class="form-group">
          <input
            type="text"
            v-model="name"
            id="titleNum"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="titleNum"
            >Peer Name</label
          >
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="peerId"
            id="peerId"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="peerId">Peer ID</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="businessNum"
            id="peerId"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="peerId"
            >Business Num</label
          >
        </div>
        <div class="form-group">
          <textarea
            name="publicKey"
            id="publicKey"
            class="form-control public-key"
            required
            v-model="publicKey"
            rows="7"
          ></textarea>
          <label class="form-control-placeholder" for="publicKey"
            >Public Key</label
          >
        </div>
        <div class="mt-5">
          <button
            type="button"
            @click="add"
            class="float-right btn btn-outline-dark"
          >
            Add
          </button>
          <div v-if="loading" class="float-right loading-btn">Loading</div>
        </div>
      </div>
    </div>
    <!-- end card -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      loading: false,
      peerId: "",
      businessNum: "",
      publicKey: "",
      errors: [],
    };
  },
  methods: {
    async add() {
      var response = await this.$axios.post(config.url.peer.add, {
        name: this.name,
        peerId: this.peerId,
        businessNum: this.businessNum,
        publicKey: this.publicKey,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style>
</style>
