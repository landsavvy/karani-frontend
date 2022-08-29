<template>
  <div>
    <!-- search card -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Search for Block</h6>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="Block Number"
            v-model="query"
            @keydown.enter="search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button @click="search" class="btn btn-primary" type="button">
              <i class="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
        <div v-for="error in errors" class="text-danger">{{ error }}</div>
      </div>
    </div>
    <!-- block card -->
    <div class="card shadow mb-4" v-if="block">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-success">Block Information</h6>
      </div>
      <div class="card-body">
        <!-- //browse buttons -->
        <div class="buttons m-3">
          <div class="btn btn-dark" @click="prev">Previous Block</div>
          <div class="btn btn-danger float-right mx-3" @click="last">
            Last Block
          </div>
          <div class="btn btn-primary float-right" @click="next">
            Next Block
          </div>
        </div>

        <table>
          <colgroup>
            <col span="1" class="column-one" />
            <col span="1" class="column-two" />
          </colgroup>

          <tr>
            <td>Block Number</td>
            <td>{{ block.blockNum }}</td>
          </tr>
          <tr>
            <td>Block Hash</td>
            <td>{{ block.blockHash }}</td>
          </tr>
          <tr>
            <td>Previous Block Hash</td>
            <td>{{ block.prevBlockHash }}</td>
          </tr>
          <tr>
            <td>Block TX Type</td>
            <td>{{ block.txType }}</td>
          </tr>
          <tr>
            <td>Block Time</td>
            <td>{{ block.txTime }}</td>
          </tr>
          <tr>
            <td>Block Data</td>
            <td>{{ block.data }}</td>
          </tr>
          <tr>
            <td>Government Signature</td>
            <td>{{ block.gokSign }}</td>
          </tr>
          <tr>
            <td>Peer Signatures</td>
            <td>
              <!-- <vue-json-pretty :path="'res'" :data="block.peerSignatures">
              </vue-json-pretty> -->
              {{ block.peerSignatures }}
            </td>
          </tr>
        </table>
        <div @click="downloadBlock" class="btn btn-success float-right m-4">
          Download Block
        </div>
      </div>
    </div>
    <!-- data block -->
    <div class="card shadow mb-4" v-if="block">
      <!-- Card Header - Accordion -->
      <a
        href="#collapseCardExample"
        class="d-block card-header py-3"
        data-toggle="collapse"
        role="button"
        aria-expanded="true"
        aria-controls="collapseCardExample"
      >
        <h6 class="m-0 font-weight-bold text-primary">Browse Data</h6>
      </a>
      <!-- Card Content - Collapse -->
      <div class="collapse show" id="collapseCardExample">
        <div class="card-body">
          <!-- json data -->
          <vue-json-pretty :path="'res'" :data="JSON.parse(block.data)">
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
      query: "",
      block: null,
      errors: [],
    };
  },
  components: {
    VueJsonPretty,
  },
  async mounted() {
    if (this.$route.params.query) {
      this.query = this.$route.params.query;
      this.search();
    }
  },
  methods: {
    getCoat() {
      return new Promise((resolve) => {
        var img = new Image();
        img.src = "/img/coat.png";
        img.onload = function () {
          resolve(img);
        };
      });
    },

    async downloadBlock() {
      let doc = new jsPDF("p", "pt", "a4");
      //add banner
      doc.setFontSize(26);
      doc.text(5, 25, "SAMPLE");
      var img = await this.getCoat();
      var imageWidth = 150;
      var pageWidth = doc.internal.pageSize.width;
      var centerPage = pageWidth / 2;
      var centerAnchor = centerPage - imageWidth / 2;
      doc.addImage(img, "PNG", centerAnchor, 20, imageWidth, imageWidth);
      var yPos = 200;
      doc.setFontSize(12);
      doc.setFont("Times New Roman");
      doc.text(centerPage, yPos, "REPUBLIC OF KENYA", "center");
      yPos += 10;
      doc.setLineWidth(1);
      doc.line(centerPage - 50, yPos, centerPage + 50, yPos);
      yPos += 20;
      doc.text("THE LAND REGISTRATION ACT", centerPage, yPos, "center");
      yPos += 40;
      doc.setFontSize(28);
      doc.setFontType("bold");
      doc.text(centerPage, yPos, "BLOCK DOCUMENT", "center");
      yPos += 20;
      doc.autoTable({
        html: "table",
        styles: { minCellWidth: 100, cellPadding: 10 },
        columnStyles: { 0: { fontStyle: "bold" } },
        startY: yPos,
      });
      doc.save(`BlockDocument${this.block.blockNum}.pdf`);
    },
    async next() {
      this.errors = [];
      var response = await this.$axios.post(config.peer.block.search, {
        query: this.block.blockNum + 1,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.block = response.data.block;
      } else {
        this.errors = ["Block not found"];
      }
    },
    async prev() {
      this.errors = [];
      var response = await this.$axios.post(config.peer.block.search, {
        query: this.block.blockNum - 1,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.block = response.data.block;
      } else {
        this.errors = ["Block not found"];
      }
    },
    async last() {
      this.errors = [];
      var response = await this.$axios.post(config.peer.block.lastBlock, {
        query: this.block.blockNum - 1,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.block = response.data.block;
      } else {
        this.errors = ["Block not found"];
      }
    },
    async search() {
      this.block = null;
      this.errors = [];
      this.result = null;
      var response = await this.$axios.post(config.peer.block.search, {
        query: this.query,
      });
      let errors = response.data.errors;
      if (errors.length == 0) {
        this.block = response.data.block;
      } else {
        this.errors = ["Block not found"];
      }
    },
  },
};
</script>

<style scoped>
.column-one {
  width: 15%;
}
.column-two {
  width: 85%;
}
tr > td:first-child {
  font-weight: 800;
}
td {
  padding: 1em;
}
tr {
  padding: 1em;
  border-bottom: solid silver 1px;
}
table {
  table-layout: fixed;
  width: 100%;
}
</style>
