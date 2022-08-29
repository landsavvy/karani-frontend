<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Add Title</h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            type="text"
            v-model="titleNum"
            id="titleNum"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="titleNum"
            >Title Number</label
          >
        </div>
        <div class="form-group">
          <textarea
            name="ownerIds"
            id="ownerIds"
            class="form-control public-key"
            required
            v-model="ownerIds"
            rows="3"
          ></textarea>
          <label class="form-control-placeholder" for="ownerIds"
            >Owner IDs</label
          >
          <small>Multiple Owner IDs Separated by a comma</small>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="county"
            id="county"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="county">County</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model.number="size"
            id="size"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="size">Size in ha</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="use"
            id="user"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="user">Use</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="charges"
            id="charges"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="charges">Charges</label>
        </div>
        <div class="form-group">
          <textarea
            name="coords"
            id="coords"
            class="form-control public-key"
            required
            @change="changeCords"
            v-model="mapCoords"
            rows="10"
          ></textarea>
          <label class="form-control-placeholder" for="coords"
            >Map Cooordinates</label
          >
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="lastTransferDate"
            id="lastTransferDate"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="lastTransferDate"
            >Issue Date</label
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

    <!-- map card -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Map</h6>
      </div>
      <div class="card-body">
        <div id="map"></div>
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
      ownerIds: [],
      size: "",
      use: "",
      titleNum: "",
      mapCoords: "",
      mapPolygon: null,
      county: "",
      charges: "",
      lastTransferDate: "",
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
    async changeCords() {
      console.log("changed cords");
      var coords = JSON.parse(this.mapCoords);
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

    async add() {
      var response = await this.$axios.post(config.url.title.add, {
        ownerIds: this.ownerIds.trim().split(","),
        coords: this.mapCoords,
        size: this.size,
        use: this.use,
        titleNum: this.titleNum,
        county: this.county,
        charges: this.charges,
        lastTransferDate: this.lastTransferDate,
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
