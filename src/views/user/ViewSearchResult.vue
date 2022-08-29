<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Search Result</h6>
      </div>
      <div class="card-body">
        <div>
          Title Number : {{ result.titleNum }}<br />
          Search Number : {{ result.searchNum }}<br />
          Block Number : {{ result.blockNum }}<br />
          Date: {{ new Date(result.createdAt).toLocaleString() }}<br />
        </div>
        <div class="download-links">
          <div @click="downloadDeed" class="download-btn btn btn-danger">
            Download Title Deed
          </div>
          <div @click="downloadSearch" class="download-btn btn btn-success">
            Download Search Certificate
          </div>
          <div @click="downloadSurvey" class="download-btn btn btn-primary">
            Download Survey Map
          </div>
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
      result: [],
      loading: false,
      errors: [],
      title: {},
      mapPolygon: null,
    };
  },

  async mounted() {
    await this.getData();
    await this.waitForGoogle();
    window.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -1.0882507,
        lng: 37.0148943,
      },
      zoom: 14,
    });
    //add polygon
    await this.updateMap();
  },
  methods: {
    downloadDeed() {
      window.open(hoster + "/pdfs/" + this.result.deedFileName, "_blank");
    },
    downloadSearch() {
      window.open(hoster + "/pdfs/" + this.result.searchFileName, "_blank");
    },
    downloadSurvey() {
      window.open(hoster + "/pdfs/" + this.result.surveyFileName, "_blank");
    },
    async getData() {
      //get result
      var response = await this.$axios.post(config.url.search.getResult, {
        id: this.$route.params.id,
      });
      //set name and address
      this.result = response.data.result;
      //get title
      var response = await this.$axios.post(config.peer.title.getTitle, {
        titleNum: this.result.titleNum,
      });
      //set name and address
      this.title = response.data.title;
      console.log("beforeMount");
    },
    async updateMap() {
      console.log("changed cords", this.title.coords);
      var coords = this.title.coords;
      if (this.mapPolygon) {
        this.mapPolygon.setMap(null);
      }
      console.log(coords);
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

      //pathstring
      let pathString = "color:red|weight:1|fillcolor:white";
      for (let coord of this.title.coords) {
        console.log(coord);
        pathString += `|${coord.lat},${coord.lng}`;
      }
      // "color:red|weight:1|fillcolor:white|33.4022475,-111.9426775|33.4022475,-111.9427525|33.4023225,-111.9427525|33.4023225,-111.9426775|33.4022475,-111.9426775",
      //get map image test
      var response = await this.$axios.get(
        "http://maps.googleapis.com/maps/api/staticmap",
        {
          params: {
            scale: 2,
            size: "1200x600",
            maptype: "roadmap",
            sensor: false,
            key: process.env.GOOGLE_MAPS_KEY,
            path: pathString,
          },
        }
      );
    },
  },
};
</script>

<style scoped>
.download-links {
}
.download-btn {
  margin: 1em;
}
#map {
  height: 80vh;
  width: 100%;
}
</style>
