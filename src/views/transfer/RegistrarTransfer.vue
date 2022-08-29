<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Search for Transfer Reference
        </h6>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="Ref Number"
            v-model="query"
            @keyup.enter="search"
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

    <div class="card shadow mb-4" v-if="transfer">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Transfer Info</h6>
      </div>
      <div class="card-body">
        Click approve to approve Transfer (acting as the Land Registrar)
        <table class="m-4">
          <tbody>
            <tr>
              <td>Title Number</td>
              <td>:{{ transfer.titleNum }}</td>
            </tr>
            <tr>
              <td>Ref Num</td>
              <td>:{{ transfer.refNum }}</td>
            </tr>
            <tr>
              <td>From</td>
              <td>:{{ transfer.from.join(",") }}</td>
            </tr>
            <tr>
              <td>To</td>
              <td>:{{ transfer.to.join(",") }}</td>
            </tr>
            <tr>
              <td>Board Approval</td>
              <td v-if="transfer.boardApproval" class="text-success">
                :COMPLETED
              </td>
              <td v-if="!transfer.boardApproval" class="text-danger">
                :PENDING
              </td>
            </tr>
            <tr>
              <td>Registrar Approval</td>
              <td v-if="transfer.registrarApproval" class="text-success">
                :COMPLETED
              </td>
              <td v-if="!transfer.registrarApproval" class="text-danger">
                :PENDING
              </td>
            </tr>
            <tr>
              <td>Submission Date</td>
              <td>:{{ new Date(transfer.createdAt).toDateString() }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-5">
          <button
            type="button"
            @click="approve"
            class="float-right btn btn-outline-dark"
          >
            Approve
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
      transfer: null,
      errors: [],
    };
  },
  mounted() {},
  methods: {
    async search() {
      this.errors = [];
      this.result = null;
      var response = await this.$axios.post(config.url.transfer.getTransfer, {
        query: this.query,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.transfer = response.data.transfer;
      } else {
        this.errors = ["Key Ref not found"];
      }
    },
    async approve() {
      console.log("ref", this.transfer.refNum);
      var response = await this.$axios.post(
        config.url.transfer.registrarApproval,
        {
          refNum: this.transfer.refNum,
          socketId: socket.id,
        }
      );
      this.errors = response.data.errors;
      if (this.errors.length == 0) {
        //success
        this.swalMessage("Approved");
        this.transfer.registrarApproval = true;
      }
    },
  },
};
</script>

<style scoped>
td {
  padding: 0.5em;
}
tr {
  border-bottom: 1px solid silver;
}
</style>
