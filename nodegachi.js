//Required Packages
var rls = require("readline-sync");
var clear = require("clear")
var game = require("./game.js")
main();

function main() {
    clear();
    console.log(" ---N-O-D-E-A-G-A-C-H-I--- ")
    var resp0 = rls.question("New Game, Continue, or Settings? ")
    
    if(resp0.toLowerCase() == "new game") {
        game.OutsideTrigger();
    }else if(resp0.toLowerCase() == "continue") {
        var saveGameNum = rls.question("Which save? (1-5) ");
        
    }else if(resp0.toLowerCase() == "settings") {

    }else{
        console.log("Invalid Input!");
        console.log("You typed: " + resp0);
        setTimeout(function() {main();},1000);
        
    }
}