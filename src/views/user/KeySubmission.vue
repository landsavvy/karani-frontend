<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Public Key Submission</h6>
      </div>
      <div class="card-body">
        <div>
          This is your first step<br />
          Submit your public key and finish registration at your local registrar
        </div>

        <div class="form-group custom-file">
          <input
            ref="fileInput"
            type="file"
            @change="fileOpened"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile"
            >Choose public key file</label
          >
          <small id="helpId" class="text-muted">Public Key</small>
        </div>

        <div class="mt-5">
          <button
            type="button"
            @click="submit"
            class="float-right btn btn-outline-dark"
          >
            Sumbit
          </button>
          <div v-if="loading" class="float-right loading-btn">Loading</div>
        </div>
      </div>
    </div>
    <!-- ref no -->
    <div v-if="refNum" class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Reference Number</h6>
      </div>
      <div class="card-body">
        <div>
          This is your reference number.
          {{ refNum }}
          <hr />
          <div @click="print" class="btn btn-primary">Print</div>
        </div>
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
      refNum: null,
      publicKey: "",
      errors: [],
    };
  },
  mounted() {
    console.log("mounted owner add");
  },
  methods: {
    getFileInput() {
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
      this.publicKey = await this.getFileInput();
    },
    async submit() {
      var response = await this.$axios.post(config.url.user.submitKey, {
        publicKey: this.publicKey,
      });
      let { errors } = response.data;
      if (errors.length == 0) {
        this.refNum = response.data.num;
      }
      console.log(response);
    },
  },
};
</script>

<style scoped>
</style>
