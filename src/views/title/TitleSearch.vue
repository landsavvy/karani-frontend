<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Search Title</h6>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="Title Number"
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
    <div class="card shadow mb-4" v-if="title">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-success">Title Information</h6>
      </div>
      <div class="card-body">
        <table>
          <colgroup>
            <col span="1" class="column-one" />
            <col span="1" class="column-two" />
          </colgroup>

          <tr>
            <td>Title Number</td>
            <td>{{ title.titleNum }}</td>
          </tr>
          <tr>
            <td>Title Owners(s)</td>
            <td>{{ title.ownerIds.join(" , ") }}</td>
          </tr>
          <tr>
            <td>Title County</td>
            <td>{{ title.county }}</td>
          </tr>
          <tr>
            <td>Title Size</td>
            <td>{{ title.size }} ha</td>
          </tr>
          <tr>
            <td>Title Charges</td>
            <td>{{ title.charges }}</td>
          </tr>
          <tr>
            <td>Land Use</td>
            <td>{{ title.use }}</td>
          </tr>
          <tr>
            <td>Title Status</td>
            <td>{{ title.status }}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- map card -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Map</h6>
      </div>
      <div class="card-body">
        <div id="map"></div>
      </div>
    </div>
    <!-- green card -->
    <div class="card shadow mb-4" v-if="title">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-success">Green Card</h6>
      </div>
      <div class="card-body">
        Transactional Statements
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Block Number</th>
                <th>Transaction Type</th>
                <th>Transaction Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Block Number</th>
                <th>Transaction Type</th>
                <th>Transaction Time</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              <tr :key="block.blockNum" v-for="block in title.blocks">
                <td>{{ block.blockNum }}</td>
                <td>{{ block.txType }}</td>
                <td>{{ new Date(block.txTime).toDateString() }}</td>
                <td>
                  <div class="btn btn-primary" @click="viewBlock(block)">
                    View
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      title: null,

      loading: false,

      mapCoords: "",
      mapPolygon: null,

      errors: [],
    };
  },
  async mounted() {
    await this.waitForGoogle();
    window.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -1.0882507,
        lng: 37.0148943,
      },
      zoom: 14,
    });
  },
  methods: {
    viewBlock(block) {
      this.$router.push({
        name: "blockSearch",
        params: { query: block.blockNum },
      });
    },
    async changeCords() {
      console.log("changed cords");
      var coords = this.title.coords;
      if (this.mapPolygon) {
        this.mapPolygon.setMap(null);
      }
      this.mapPolygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });
      this.mapPolygon.setMap(map);
      var bounds = new google.maps.LatLngBounds();

      // Get paths from polygon and set event listeners for each path separately
      this.mapPolygon.getPath().forEach(function (path, index) {
        bounds.extend(path);
      });

      // Fit Polygon path bounds
      map.fitBounds(bounds);
    },
    async waitForGoogle() {
      if (window.google) {
        return;
      }
      await sleep(1000);
      return this.waitForGoogle();
    },
    async search() {
      this.title = null;
      this.errors = [];
      var response = await this.$axios.post(config.peer.title.search, {
        query: this.query,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.title = response.data.title;
        this.changeCords();
      } else {
        this.errors = ["Title not found"];
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
