<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Add Witness</h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input type="text" v-model="name" id="name" class="form-control" required />
          <label class="form-control-placeholder" for="name">Name</label>
        </div>
        <div class="form-group">
          <input type="text" v-model="businessNum" id="witnessNum" class="form-control" required />
          <label class="form-control-placeholder" for="witnessNum">Witness Business Number</label>
        </div>
        <div class="form-group custom-file">
          <input
            ref="fileInput"
            @change="fileOpened"
            type="file"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile">Choose public key file</label>
          <small id="helpId" class="text-muted">Public Key</small>
        </div>
        <div class="mt-5">
          <button type="button" @click="add" class="float-right btn btn-outline-dark">Add</button>
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
      businessNum: "",
      publicKey: "",
      errors: [],
    };
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
    async add() {
      var response = await this.$axios.post(config.url.witness.add, {
        name: this.name,
        businessNum: this.businessNum,
        publicKey: this.publicKey,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style>
</style>
