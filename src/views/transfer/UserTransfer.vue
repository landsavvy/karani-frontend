<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Title Transfer</h6>
      </div>
      <div class="card-body">
        <div class="form-group custom-file">
          <input
            ref="fileInput"
            type="file"
            multiple
            @change="parseFiles"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile"
            >Choose file(s)</label
          >
          <small id="helpId" class="text-muted"
            >Title Transfer Request File(s)</small
          >
        </div>
        <div class="help">
          After submitting get the reference from this
          <router-link :to="{ name: 'transferResults' }"> page </router-link>
          inline with Land Registry Meetings.
        </div>
        <div class="info m-4" v-if="signatures.length > 0">
          <div class="sig" v-for="(sig, index) in signatures">
            <div>Signature {{ index + 1 }}</div>
            <div>Title Number : {{ sig.titleNum }}</div>
            <div>New Owner(s) : {{ sig.newOwnerIds }}</div>
            <div>Current Owner : {{ sig.currentOwnerId }}</div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      loading: false,
      ownerId: "",
      titleNum: "",
      newOwnerIds: "",
      requestInfo: null,
      publicKey: "",
      errors: [],
      signatures: [],
    };
  },
  async mounted() {},
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
          newOwnerIds: a.parsed.newOwnerIds,
          currentOwnerId: a.parsed.currentOwnerId,
        };
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

    async submit() {
      this.errors = [];
      var response = await this.$axios.post(config.url.transfer.userTransfer, {
        signatures: this.signatures,
        socketId: socket.id,
      });
      this.errors = [];
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
