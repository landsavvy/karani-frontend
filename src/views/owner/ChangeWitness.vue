<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Change Witness</h6>
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
          <small id="helpId" class="text-muted">Input change witness request file</small>
        </div>
        <div class="mt-5">
          <button type="button" @click="submit" class="float-right btn btn-outline-dark">Submit</button>
          <div v-if="loading" class="float-right loading-btn">Loading</div>
        </div>
      </div>
    </div>

    <div class="card shadow mb-4" v-if="witnessInfo">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">New Witness Info</h6>
      </div>
      <div class="card-body">
        <table>
          <tr>
            <td>Owner Id</td>
            <td>:{{witnessInfo.ownerId}}</td>
          </tr>
          <tr>
            <td>New Witness Number</td>
            <td>:{{witnessInfo.ownerId}}</td>
          </tr>
          <tr>
            <td>Expiry Date</td>
            <td>:{{new Date(witnessInfo.timestamp + (1000*60*60*24*14))}}</td>
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
      name: "",
      loading: false,
      idNum: "",
      witnessNum: "",
      publicKey: "",
      witnessInfo: null,
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
      a.parsed = JSON.parse(a.stringData);
      this.requestInfo = a;
      this.witnessInfo = a.parsed;
      console.log(a);
    },
    async submit() {
      var response = await this.$axios.post(config.url.owner.changeWitness, {
        stringData: this.requestInfo.stringData,
        signature: this.requestInfo.signature,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style scoped>
</style>
