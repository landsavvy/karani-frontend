<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Subdivision Details</h6>
      </div>
      <div class="card-body">
        <div class="info m-4" v-if="sub">
          <div>Title Number : {{ sub.titleNum }}</div>
          <div>Ref Num : {{ sub.refNum }}</div>
          <div>No. of Subdivisions : {{ mapPolygons.length }}</div>
          <hr />
          <table>
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
          </table>

          <button
            type="button"
            v-if="state.user.role == 'board'"
            @click="approve"
            class="float-right btn btn-outline-dark"
          >
            Approve
          </button>
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
    <!-- geo json data -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">GeoCoordinates Data</h6>
      </div>
      <div class="card-body">
        <vue-json-pretty :path="'res'" :data="JSON.parse(subCoords)">
        </vue-json-pretty>
      </div>
    </div>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
export default {
  data() {
    return {
      name: "",
      loading: false,
      sub: null,
      subCoords: "",
      mapPolygons: [],
      signatures: [],
      state,
      errors: [],
    };
  },
  async mounted() {
    //get sub
    console.log("router", this.$route);
    var response = await this.$axios.post(config.url.subdivide.getSubdivision, {
      query: this.$route.params.refNum,
    });
    if (response.data.errors.length == 0) {
      this.sub = response.data.sub;
      this.subCoords = this.sub.coords;
    }
    await this.waitForGoogle();
    window.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -1.0882507,
        lng: 37.0148943,
      },
      zoom: 14,
    });
    //process map
    await this.changeCoords();
  },
  components: {
    VueJsonPretty,
  },
  methods: {
    async parseFiles() {
      this.signatures = [];
      var fileInput = this.$refs.fileInput;
      console.log("File Length", fileInput.files.length);
      //files
      for (let file of fileInput.files) {
        //parse file
        var a = JSON.parse(await this.getFileInput(file));
        a.parsed = JSON.parse(a.stringData);
        var signature = {
          requestInfo: a,
          stringData: a.stringData,
          signature: a.signature,
          titleNum: a.parsed.titleNum,
          ownerId: a.parsed.ownerId,
          subCoords: a.parsed.subCoords,
          currentOwnerId: a.parsed.currentOwnerId,
        };
        this.subCoords = a.parsed.subCoords;
        await this.changeCoords();
        this.signatures.push(signature);
        console.log(a);
      }
    },
    getFileInput(file) {
      return new Promise((resolve) => {
        var reader = new FileReader();
        reader.onload = function (e) {
          var content = reader.result;
          //Here the content has been read successfuly
          resolve(content);
        };
        reader.readAsText(file);
      });
    },
    async changeCoords() {
      console.log("changed cords");
      var subdivisions = JSON.parse(this.subCoords);
      if (this.mapPolygons.length != 0) {
        this.mapPolygons.forEach((poly) => {
          poly.setMap(null);
        });
      }
      subdivisions.forEach((sub) => {
        var randomColor = helpers.randomDark();
        console.log("random color", randomColor);
        var mapPolygon = new google.maps.Polygon({
          paths: sub,
          strokeColor: randomColor,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: randomColor,
          fillOpacity: 0.35,
        });
        mapPolygon.setMap(map);
        this.mapPolygons.push(mapPolygon);
      });
    },
    async approve() {
      console.log("ref", this.sub.refNum);
      var response = await this.$axios.post(config.url.sub.boardApproval, {
        refNum: this.sub.refNum,
      });
      this.errors = response.data.errors;
      if (this.errors.length == 0) {
        //success
        this.swalMessage("Approved");
        this.sub.boardApproval = true;
      }
    },

    async waitForGoogle() {
      if (window.google) {
        return;
      }
      await sleep(1000);
      return this.waitForGoogle();
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
