var fs = require("fs");
var dat = "";
function save() {
//write
  

  //read
    fs.readFile("save", "utf-8", (err, data) => {
        console.log(data);
      });
}
function write(dat) {
  fs.writeFile('save', dat, function (err,data) {
    if (err) {
      return console.log(err);
    }
   // console.log(data);
  });
}
module.exports = { save }