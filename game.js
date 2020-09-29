var rls = require("readline-sync");
var clear = require("clear");
//Game vars
var charHealth = 0;
var charMood = 0;
var charHunger = 0;
var charThirst = 0;
var turnNum = 0;
var gameRunning = false;
function OutsideTrigger() {
    gameRunning = true;
    setBaseStats();
    while(gameRunning) {
        gameLoop();
    }
}
function setBaseStats() {
    //Sets base stats/points for beginning the game
    charHealth = 100;
    charMood = 2;
}
function gameLoop() {
    clear();
    turnNum++;
    randomEvent();
    printCurrentMood();
    printStats();
    getUserTask();
    while(gameRunning) {
        gameLoop();
    }
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
        var onot = Math.floor(Math.random() * 2);
        switch(onot) {
            case 1:
                charHealth++
                break;
            
        }
    }else if(resp2.toLowerCase() == "end") {
        gameRunning = false;
    }
}
function randomEvent() {
    var EventCode = Math.floor(Math.random() * 10);
    switch(EventCode) {
        case 0:
            charThirst--;
            break;
        case 1:
            charHunger--;
            break;
        case 3:
            charThirst++;
            charHunger++;
            break;
        case 4:
            charThirst+=2;
            charHunger+=2;
            break;
        case 5:
            charThirst = 0;
            break;
        case 6:
            charHunger = 0;
            break;
        case 7:
            charHealth--;
            break;
        case 8:
            charHealth++;
            break;
        case 9:
            charHealth--;
            break;                                
    }
}
function printStats() {
    console.log("                       Turn: " + turnNum);
    console.log("---         Stats           ---")
    console.log("- Hunger: " + charHunger + " - ");
    console.log("- Thirst: " + charThirst + " - ");
    console.log("- Health: " + charHealth + " - ");
}





function getSaveGame() {

}
function setSaveGame() {

}
module.exports = { OutsideTrigger }