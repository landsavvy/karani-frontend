<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">User Details</h6>
    </div>
    <div class="card-body">
      <div>
        <table>
          <tr>
            <td>Name</td>
            <td>:{{ user.name }}</td>
          </tr>
          <tr>
            <td>ID number</td>
            <td>:{{ user.idNum }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:{{ user.email }}</td>
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
      user: {},
    };
  },
  async beforeMount() {
    var response = await this.$axios.post(config.url.user.getDetails, {});
    let { errors } = response.data;
    if (errors.length == 0) {
      this.user = response.data.user;
    }
  },
  mounted() {
    console.log("mounted owner add");
  },
  methods: {
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

<style>
</style>
