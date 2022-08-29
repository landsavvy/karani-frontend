<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Search Owners</h6>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="ID Number"
            v-model="query"
            @keydown.enter="search"
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
    <!-- title card -->
    <div class="card shadow mb-4" v-if="owner">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-success">Owner Information</h6>
      </div>
      <div class="card-body">
        <table>
          <colgroup>
            <col span="1" class="column-one" />
            <col span="1" class="column-two" />
          </colgroup>

          <tr>
            <td>ID Number</td>
            <td>{{ owner.idNum }}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{{ owner.name }}</td>
          </tr>
          <tr>
            <td>Witness Number</td>
            <td>{{ owner.witnessNum }}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{{ owner.address }}</td>
          </tr>
          <tr>
            <td>Public Key</td>
            <td>{{ owner.publicKey }}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>{{ new Date(owner.createdAt) }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      owner: null,

      loading: false,

      errors: [],
    };
  },
  async mounted() {},
  methods: {
    async search() {
      this.owner = null;
      this.errors = [];
      var response = await this.$axios.post(config.peer.owner.search, {
        query: this.query,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.owner = response.data.owner;
      } else {
        this.errors = ["Owner not found"];
      }
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

.column-one {
  width: 15%;
}
.column-two {
  width: 85%;
}
tr > td:first-child {
  font-weight: 800;
}
td {
  padding: 1em;
}
tr {
  padding: 1em;
  border-bottom: solid silver 1px;
}
table {
  table-layout: fixed;
  width: 100%;
}
</style>
