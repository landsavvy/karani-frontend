<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Subdivide Title</h6>
      </div>
      <div class="card-body">
        <div class="form-group custom-file">
          <input
            ref="fileInput"
            type="file"
            @change="parseFiles"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile">Choose file</label>
          <small id="helpId" class="text-muted">Subdivision Request File</small>
        </div>

        <div class="info m-4" v-if="signatures.length > 0">
          <div class="sig" v-for="(sig, index) in signatures">
            <div>Signature {{ index + 1 }}</div>
            <div>Title Number : {{ sig.titleNum }}</div>
            <div>Owner : {{ sig.ownerId }}</div>
            <div>No. of Subdivisions : {{ mapPolygons.length }}</div>
            <hr />
          </div>
        </div>

        <div class="mt-5">
          <button
            type="button"
            @click="submit"
            class="float-right btn btn-outline-dark"
          >
            Submit
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
      ownerId: "",
      subCoords: "",
      mapPolygons: [],
      signatures: [],
      publicKey: "",
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
    async fileOpened() {
      console.log("file opened");
      var a = JSON.parse(await this.getFileInput());
      a.parsed = JSON.parse(a.stringData);
      this.requestInfo = a;

      console.log(a);
    },
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
    },
    async waitForGoogle() {
      if (window.google) {
        return;
      }
      await sleep(1000);
      return this.waitForGoogle();
    },
    async submit() {
      this.errors = [];
      var response = await this.$axios.post(config.url.subdivide.submitPlan, {
        signatures: this.signatures,
        socketId: socket.id,
      });
      if (this.errors.length == 0) {
        this.swalMessage("Submitted");
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
</style>
