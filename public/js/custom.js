
$(() => {
  //doc ready
  // $(".custom-file-input").on("change", function () {
  //   var fileName = $(this).val().split("\\").pop();
  //   $(this)
  //     .siblings(".custom-file-label")
  //     .addClass("selected")
  //     .html(fileName);
  // });

})
const helpers = {
  randomDark() {
    function randomInt(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
    var red = randomInt(0, 150);
    var green = randomInt(0, 150);
    var blue = randomInt(0, 150);
    return `RGB(${red},${green},${blue})`;
  },
  onPageUpdate() {
    $(".custom-file-input").on("change", function () {

      var fileName = $(this).val().split("\\").pop();
      console.log("Filename", fileName)
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
    //data tables
    $("#dataTable").DataTable();
  }
}

function converGeoJSON(arr) {
  var arr = JSON.parse(arr)
  var newArr = []
  arr.forEach(point => {
    newArr.push({ "lng": point[0], "lat": point[1] })
  });
  return JSON.stringify(newArr)
}

