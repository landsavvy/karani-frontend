<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-danger">Rejected</h6>
      </div>
      <div class="card-body">
        <table>
          <tr>
            <td>Block Number</td>
            <td>: {{this.status.blockNum}}</td>
          </tr>
          <tr>
            <td>UUID</td>
            <td>: {{this.status.mixedId}}</td>
          </tr>
          <tr>
            <td>Reason</td>
            <td>
              :
              <b>{{this.status.comment}}</b>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="card shadow mb-4">
      <!-- Card Header - Accordion -->
      <a
        href="#collapseCardExample"
        class="d-block card-header py-3"
        data-toggle="collapse"
        role="button"
        aria-expanded="true"
        aria-controls="collapseCardExample"
      >
        <h6 class="m-0 font-weight-bold text-primary">Raw Data</h6>
      </a>
      <!-- Card Content - Collapse -->
      <div class="collapse show" id="collapseCardExample">
        <div class="card-body">{{this.status.blockData}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      status: "",
      errors: [],
    };
  },
  async mounted() {
    var response = await this.$axios.post(config.url.block.getConfirmedStatus, {
      mixedId: this.$route.params.mixedId,
    });
    this.status = response.data.status;
  },
};
</script>

<style>
</style>
