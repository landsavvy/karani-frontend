<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Change Key</h6>
      </div>
      <div class="card-body">
        <div class="form-group custom-file">
          <input
            ref="fileInput"
            type="file"
            @change="fileOpened"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile">Choose file</label>
          <small id="helpId" class="text-muted">Input change key request file</small>
        </div>
        <div class="mt-5">
          <button type="button" @click="submit" class="float-right btn btn-outline-dark">Submit</button>
          <div v-if="loading" class="float-right loading-btn">Loading</div>
        </div>
      </div>
    </div>

    <div class="card shadow mb-4" v-if="keyInfo">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">New Public Key Info</h6>
      </div>
      <div class="card-body">
        <div>User : {{keyInfo.ownerId}}</div>
        <div>Public Key :</div>
        <div class="public-key">{{keyInfo.newPublicKey}}</div>
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
      idNum: "",
      witnessNum: "",
      publicKey: null,
      keyInfo: null,
      requestInfo: null,
      errors: [],
    };
  },
  mounted() {
    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
  },
  methods: {
    getInfo() {
      return new Promise((resolve) => {
        var fileInput = this.$refs.fileInput;
        var file = fileInput.files[0];

        var reader = new FileReader();

        reader.onload = function (e) {
          var content = reader.result;
          //Here the content has been read successfuly
          resolve(content);
        };
        reader.readAsText(file);
      });
    },
    async fileOpened() {
      console.log("file opened");
      var a = JSON.parse(await this.getInfo());
      this.requestInfo = a;
      a.parsed = JSON.parse(a.stringData);
      this.keyInfo = a.parsed;
      console.log(a);
    },
    async submit() {
      var response = await this.$axios.post(config.url.owner.changeKey, {
        stringData: this.requestInfo.stringData,
        signature: this.requestInfo.signature,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style scoped>
.public-key {
  overflow-wrap: anywhere;
  font-size: 0.8em;
  color: #043b0b;
  padding: 1em;
  background: #7ff8f24d;
  border-radius: 1em;
  margin: 1em;
}
</style>
