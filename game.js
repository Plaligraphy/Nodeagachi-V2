var rls = require("readline-sync");
var clear = require("clear");
//Game vars
var charHealth = 0;
var charMood = 0;
var charHunger = 0;
var charThirst = 0;

function setBaseStats() {
    //Sets base stats/points for beginning the game
    charHealth = 100;
    charMood = 2;
}
function gameLoop() {
    printCurrentMood();
    printStats();
    getUserTask();
}
function printCurrentMood() {
    switch(charMood) {
        case 0: //angry
            console.log("(\</)"); 
            console.log(" ( )");
            break;  
        case 1: //sad
            console.log("(/<\)"); 
            console.log(" ( )");
            break;   
        case 2: //happy
            console.log("(o<o)"); 
            console.log(" ( )");
            break;
        case 3: //confused
            console.log("(O<o)"); 
            console.log(" ( )");
            break;                 
    }
}
function getUserTask() {
    var resp2 = rls.question("Feed, Water, or Pet? ")
    if(resp2.toLowerCase() == "feed") {
        charHunger--;
    }else if(resp2.toLowerCase() == "water") {
        charThirst--;
    }else if(resp2.toLowerCase() == "pet") {
        charMood = Math.floor(Math.random() * 4);
    }
}
function randomEvent() {
    var EventCode = Math.floor(Math.random() * 10);
    switch(EventCode) {
        case 0:
            break;
        case 1:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;                                
    }
}
function printStats() {
    console.log("---         Stats           ---")
    console.log("- Hunger: " + charHunger + " - ");
    console.log("- Thirst: " + charThirst + " - ");
    console.log("- Health: " + charHealth + " - ");
}





function getSaveGame() {

}
function setSaveGame() {

}