<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6
          v-if="status.status == 'confirmed'"
          class="m-0 font-weight-bold text-success"
        >
          Confirmed
        </h6>
        <h6
          v-if="status.status == 'rejected'"
          class="m-0 font-weight-bold text-danger"
        >
          Rejected
        </h6>
      </div>
      <div class="card-body">
        <div v-if="status.status == 'rejected'" class="text-danger">
          Transaction Failed
        </div>
        <div v-if="status.status == 'confirmed'" class="text-success">
          Transaction Successfull
        </div>
        <table>
          <tr>
            <td>Block Number</td>
            <td>: {{ status.blockNum }}</td>
          </tr>
          <tr v-if="status.status == 'confirmed'">
            <td>Info</td>
            <td>: {{ translate("confirmation", block.txType) }}</td>
          </tr>
          <tr v-if="status.status == 'rejected'">
            <td>Info</td>
            <td>
              : Rejection Comment <b>{{ block.comment }}</b>
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
        <div class="card-body">
          <vue-json-pretty
            :path="'res'"
            :data="JSON.parse(this.status.blockData)"
          >
          </vue-json-pretty>
        </div>
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
      status: "",
      block: null,
      errors: [],
    };
  },
  components: {
    VueJsonPretty,
  },
  async mounted() {
    var response = await this.$axios.post(config.url.block.getConfirmedStatus, {
      mixedId: this.$route.params.mixedId,
    });

    this.status = response.data.status;
    //parse block
    this.block = JSON.parse(this.status.blockData);
  },
};
</script>

<style>
</style>
