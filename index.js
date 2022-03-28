console.log("Rock Paper Sissor \n R ---- P ----- S");

const prompt = require('prompt-sync')();

function checkInput(input) {
    switch (input) {
        case 'R':

        case 'S':

        case 'P':
            return true;

        default:
            return false;
    }
}

var player2choose = ["S","P","R"];


const random = Math.floor(Math.random() * player2choose.length);




var user1 = prompt("Player 1 choose ");
while (checkInput(user1) == false) {
    console.log("Wrong choice P, S or R");
    user1 = prompt("Player 1 choose ");
}

// var user2 = prompt("Player 2 choose ");
// while (checkInput(user1) == false) {
//     console.log("Wrong choice P, S or R");
//     user2 = prompt("Player 2 choose ");
// }


var result = "Tie"
function whoWin(x, y) {
    let p1w = "Player 1 win";
    let p2w = "Player 2 win";
    let result = "";
    if (x == "R") {
        if (y == "S")
            result = p1w;
        else
            result = p2w
    }

    if (x == "P") {
        if (y == "R")
            result = p1w;
        else
            result = p2w
    }

    if (x == "S") {
        if (y == "P")
            result = p1w;
        else
            result = p2w
    }

    return result;
    
}
if (user1 != player2choose[random]) {
    result = whoWin(user1, player2choose[random]);

}
console.log("Player 2 choose "+ player2choose[random]);

console.log(result)

console.log('\nPress any key to exit');
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));





