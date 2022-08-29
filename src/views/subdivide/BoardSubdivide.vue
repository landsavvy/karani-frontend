<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Search for Subdivide Reference
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

    <div class="card shadow mb-4" v-if="sub">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Subdivsion Info</h6>
      </div>
      <div class="card-body">
        Click approve to approve Subdivision (acting as the land Control Board)
        <table class="m-4">
          <tbody>
            <tr>
              <td>Title Number</td>
              <td>:{{ sub.titleNum }}</td>
            </tr>
            <tr>
              <td>Ref Num</td>
              <td>:{{ sub.refNum }}</td>
            </tr>
            <tr>
              <td>Board Approval</td>
              <td v-if="sub.boardApproval" class="text-success">:COMPLETED</td>
              <td v-if="!sub.boardApproval" class="text-danger">:PENDING</td>
            </tr>
            <tr>
              <td>Registrar Approval</td>
              <td v-if="sub.registrarApproval" class="text-success">
                :COMPLETED
              </td>
              <td v-if="!sub.registrarApproval" class="text-danger">
                :PENDING
              </td>
            </tr>
            <tr>
              <td>Submission Date</td>
              <td>:{{ new Date(sub.createdAt).toDateString() }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-5">
          <button
            type="button"
            @click="viewSub"
            class="float-left btn btn-outline-primary"
          >
            View Details
          </button>
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
      sub: null,
      errors: [],
    };
  },
  updated() {},
  mounted() {},
  methods: {
    viewSub() {
      this.$router.push({
        name: "viewSubdivision",
        params: { refNum: this.sub.refNum },
      });
    },

    async search() {
      this.errors = [];
      this.sub = null;
      var response = await this.$axios.post(
        config.url.subdivide.getSubdivision,
        {
          query: this.query,
        }
      );
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.sub = response.data.sub;
      } else {
        this.errors = ["Key Ref not found"];
      }
    },
    async approve() {
      console.log("ref", this.sub.refNum);
      var response = await this.$axios.post(
        config.url.subdivide.boardApproval,
        {
          refNum: this.sub.refNum,
        }
      );
      this.errors = response.data.errors;
      if (this.errors.length == 0) {
        //success
        this.swalMessage("Approved");
        this.sub.boardApproval = true;
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
