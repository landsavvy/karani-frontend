<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Search for Key Reference
        </h6>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="Ref Number"
            @keydown.enter="search"
            v-model="query"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button @click="search" class="btn btn-primary" type="button">
              <i class="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
        <div v-for="error in errors" class="text-danger">{{ error }}</div>
      </div>
    </div>

    <div class="card shadow mb-4" v-if="refInfo">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">New Witness Info</h6>
      </div>
      <div class="card-body">
        <table>
          <tr>
            <td>Name</td>
            <td>:{{ refInfo.name }}</td>
          </tr>
          <tr>
            <td>ID number</td>
            <td>:{{ refInfo.idNum }}</td>
          </tr>
          <tr>
            <td>Key Reference Number</td>
            <td>:{{ refInfo.refNum }}</td>
          </tr>
        </table>
        <div class="mt-5">
          <button
            type="button"
            @click="register"
            class="float-right btn btn-outline-dark"
          >
            Register
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
      loading: false,
      query: "",
      witnessNum: "",
      publicKey: "",
      refInfo: null,
      errors: [],
    };
  },
  mounted() {
    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
  },
  methods: {
    async search() {
      this.errors = [];
      var response = await this.$axios.post(config.url.user.searchKeyRef, {
        query: this.query,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.refInfo = response.data.keyInfo;
      } else {
        this.errors = ["Key Ref not found"];
      }
    },
    async register() {
      this.$router.push({
        name: "ownerAdd",
        params: { refNum: this.refInfo.refNum },
      });
    },
    async submit() {
      var response = await this.$axios.post(config.url.owner.changeWitness, {
        stringData: this.requestInfo.stringData,
        signature: this.requestInfo.signature,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style scoped>
</style>
