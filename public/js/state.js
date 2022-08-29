var state = {
  authToken: "",
  user: null
}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
var lang = {
  confirmation: {
    titleSearch: "Search added to the blockchain. To view the details see 'search results' under Land Search > Search Results",
    ownerAdd: "Owner added to the blockchain.",
    titleAdd: "Title added to the blockchain.",
    witnessAdd: "Witness added to blockchain",
    peerAdd: "Peer added to blockchain",
    titleTransfer: "Title transfer successful. Proceed to Land Search to produce Title Deeds"
  }
}
function translate(key1, key2) {
  return lang[key1][key2]
}
