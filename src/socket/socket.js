const sck = {}

sck.init = function () {
  if (state.socket) {
    console.log("socket already created")
    return
  }

  state.socket = true
  socket.on("connect", async () => {
    console.log("Connected")
  })
  socket.on("welcome", data => {
    console.log(data)
  })
  socket.on("confirmStatus", async status => {
    console.log("confirming status", status.status)

    mainComp.$router.push({ name: "blockConfirmation", params: { mixedId: status.mixedId } })


  })


}

export default sck
