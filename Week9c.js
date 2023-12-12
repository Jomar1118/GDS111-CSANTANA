
let startTTTBtnObj = document.getElementById("startTTT");

startTTTBtnObj.addEventListener("click",mainScript);

function mainScript(){
    var ttt = [
        ["", "", ""]
        ["", "", ""]
        ["", "", ""]
    ]
function displayBoard() {
    console.log(ttt[0][0] + "|" + ttt[0][1] + "|" + ttt[0][2]);
    console.log(ttt[1][0] + "|" + ttt [1][1] + "|" + ttt[1][2]);
    console.log(ttt[2][0] + "|" + ttt [2][1] + "|" + ttt[2][2])
}

    function instructions() {
        console.log("/n----------------------------");
        console.log("Type the number for your move");
        console.log("|1,2,3|");
        console.log("|4,5,6|");
        console.log("|7,8,9|");
    }
    function placeChoice(choice,symbol) {
        let succeed = false;
        if (choice == 1){
            if ( ttt [0][0].trim().length== 0){
                ttt[0][0] = symbol ;
                succeed = true;
            }
        }
        if(choice == 2) {
            if ( ttt[0][1].trim().length == 0) {
                ttt[0][1] = symbol ;
                succeed = true;
            }
        }
    }
}