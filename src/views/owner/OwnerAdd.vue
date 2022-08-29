<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Add Owner</h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            type="text"
            v-model="user.name"
            id="name"
            disabled
            class="form-control"
            required
          />
          <label class="form-control-placehold" for="name">Name</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="user.idNum"
            disabled
            id="idNum"
            class="form-control"
            required
          />
          <label class="form-control-placehold" for="idNum">ID Number</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="user.address"
            id="address"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="address"
            >Postal Address</label
          >
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="user.witnessNum"
            id="witnessNum"
            class="form-control"
            required
          />
          <label class="form-control-placeholder" for="witnessNum"
            >Witness Business Number</label
          >
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="user.refNum"
            disabled
            id="refNum"
            class="form-control"
            required
          />
          <label class="form-control-placehold" for="refNum"
            >Public Key Reference Number</label
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        address: "",
        idNum: "",
        witnessNum: "",
        refNum: "",
      },
      loading: false,
      errors: [],
    };
  },
  async beforeMount() {
    //get info
    var response = await this.$axios.post(config.url.user.searchKeyRef, {
      query: this.$route.params.refNum,
    });
    let refInfo = response.data.keyInfo;
    //set name and address
    this.user = {
      name: refInfo.name,
      address: "",
      idNum: refInfo.idNum,
      witnessNum: "",
      refNum: refInfo.refNum,
    };
  },
  async mounted() {
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
    async add() {
      var response = await this.$axios.post(config.url.owner.add, {
        user: this.user,
        socketId: socket.id,
      });
    },
  },
};
</script>

<style scoped>
</style>
