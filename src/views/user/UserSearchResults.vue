<template>
  <div>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Title Search Results</h6>
      </div>
      <div class="card-body">
        <h6>
          Results take less than 30 secs to process and create documents. Kindly
          refresh page if still PENDING.
        </h6>
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Title Number</th>
                <th>Status</th>
                <th>Block Number</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Title Number</th>
                <th>Status</th>
                <th>Block Number</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              <tr :key="result._id" v-for="result in results">
                <td>{{ result.titleNum }}</td>
                <td v-if="result.complete" class="text-success">COMPLETED</td>
                <td v-if="!result.complete" class="text-danger">PENDING</td>
                <td>{{ result.blockNum }}</td>
                <td>{{ new Date(result.createdAt).toDateString() }}</td>
                <td>
                  <div @click="viewResult(result._id)" class="btn btn-primary">
                    View
                  </div>
                </td>
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
      var response = await this.$axios.post(config.url.title.searchResults, {});
      let refInfo = response.data.keyInfo;
      //set name and address
      this.results = response.data.results;
    },
    viewResult(id) {
      this.$router.push({ name: "viewSearchResult", params: { id } });
    },
    async fileOpened() {
      console.log("file opened");
      this.publicKey = await this.getFileInput();
    },
    async add() {
      var response = await this.$axios.post(config.url.owner.add, {
        user: this.user,
        socketId: socket.id,
      });
    },
  },
};
</script>


<style>
</style>
