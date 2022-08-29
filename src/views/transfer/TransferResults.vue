<template>
  <div>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Title Tranfer Results</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Ref Num</th>
                <th>Title Number</th>
                <th>From</th>
                <th>To</th>
                <th>Board Approval</th>
                <th>Registrar Approval</th>
                <th>Block Num</th>
                <th>Submission Date</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Ref Num</th>
                <th>Title Number</th>
                <th>From</th>
                <th>To</th>
                <th>Board Approval</th>
                <th>Registrar Approval</th>
                <th>Block Num</th>
                <th>Submission Date</th>
              </tr>
            </tfoot>
            <tbody>
              <tr :key="result._id" v-for="result in results">
                <td>{{ result.refNum }}</td>
                <td>{{ result.titleNum }}</td>
                <td>{{ result.from.join(",") }}</td>
                <td>{{ result.to.join(",") }}</td>
                <!-- board approval -->
                <td v-if="result.boardApproval" class="text-success">
                  COMPLETED
                </td>
                <td v-if="!result.boardApproval" class="text-danger">
                  PENDING
                </td>
                <!-- registrar approval -->
                <td v-if="result.registrarApproval" class="text-success">
                  COMPLETED
                </td>
                <td v-if="!result.registrarApproval" class="text-danger">
                  PENDING
                </td>
                <td>{{ result.blockNum || "UNASSIGNED" }}</td>
                <td>{{ new Date(result.createdAt).toDateString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- data table -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      loading: false,
      errors: [],
    };
  },
  async beforeMount() {},
  async mounted() {
    this.dt = $("#dataTable").DataTable();
    await this.getResults();

    console.log("mounted search resutls");
  },
  watch: {
    results(val) {
      this.dt.destroy();
      this.$nextTick(() => {
        this.dt = $("#dataTable").DataTable();
      });
    },
  },
  methods: {
    async getResults() {
      //get info
      var response = await this.$axios.post(
        config.url.transfer.transferResults,
        {}
      );
      //set name and address
      this.results = response.data.results;
    },
    viewResult(id) {
      this.$router.push({ name: "viewSearchResult", params: { id } });
    },
  },
};
</script>


<style>
</style>
