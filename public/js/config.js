var port = 80
var production = 0
var hoster = "http://localhost:" + port
var socketHoster = "http://localhost:" + port
var peerHoster = "http://localhost:5001"

var config = {
  peer: {
    title: {
      exists: peerHoster + "/api/v1/title/exists",
      search: peerHoster + "/api/v1/title/search",
      getTitle: peerHoster + "/api/v1/title/getTitle",
    },
    owner: {
      search: peerHoster + "/api/v1/owner/search",
    },
    witness: {
      search: peerHoster + "/api/v1/witness/search",
    },
    block: {
      search: peerHoster + "/api/v1/block/search",
      lastBlock: peerHoster + "/api/v1/block/lastBlock",
    }
  },
  url: {
    user: {
      login: hoster + "/api/v1/user/login",
      signup: hoster + "/api/v1/user/signup",
      submitKey: hoster + "/api/v1/user/submitKey",
      searchKeyRef: hoster + "/api/v1/user/searchKeyRef",
      getDetails: hoster + "/api/v1/user/getDetails"
    },
    witness: {
      add: hoster + "/api/v1/witness/add"
    },
    peer: {
      add: hoster + "/api/v1/peer/add"
    },
    owner: {
      add: hoster + "/api/v1/owner/add",
      changeKey: hoster + "/api/v1/owner/changeKey",
      changeWitness: hoster + "/api/v1/owner/changeWitness"
    },
    search: {
      getResult: hoster + "/api/v1/search/getResult",
    },
    transfer: {
      boardApproval: hoster + "/api/v1/transfer/boardApproval",
      registrarApproval: hoster + "/api/v1/transfer/registrarApproval",
      userTransfer: hoster + "/api/v1/transfer/userTransfer",
      registrarTransfer: hoster + "/api/v1/transfer/registrarTransfer",
      boardTransfer: hoster + "/api/v1/transfer/boardTransfer",
      getTransfer: hoster + "/api/v1/transfer/getTransfer",
      transferResults: hoster + "/api/v1/transfer/transferResults",
    },
    subdivide: {
      boardApproval: hoster + "/api/v1/subdivide/boardApproval",
      registrarApproval: hoster + "/api/v1/subdivide/registrarApproval",
      submitPlan: hoster + "/api/v1/subdivide/submitPlan",
      registrarsubdivide: hoster + "/api/v1/subdivide/registrarsubdivide",
      boardsubdivide: hoster + "/api/v1/subdivide/boardsubdivide",
      getSubdivision: hoster + "/api/v1/subdivide/getSubdivision",
      subdivideResults: hoster + "/api/v1/subdivide/subdivideResults",
    },
    title: {
      add: hoster + "/api/v1/title/add",
      subdivide: hoster + "/api/v1/title/subdivide",
      search: hoster + "/api/v1/title/search",

      search: hoster + "/api/v1/title/search",
      searchResults: hoster + "/api/v1/title/searchResults",

      view: hoster + "/api/v1/title/view"
    },
    block: {
      getConfirmedStatus: hoster + "/api/v1/block/getConfirmedStatus"
    },

  },
  premium: false,
  version: 20
}
