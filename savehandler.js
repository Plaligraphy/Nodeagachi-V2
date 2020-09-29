var fs = require("fs");
function save() {
    fs.readFile("save", "utf-8", (err, data) => {
        console.log(data);
      });
}
module.exports = { save }