//structure = var, then defined func, then overall func
/*

needs:
=>ui
-->gameboard
-->btn
-->Scores/PlayerTurn
->rulesets
-->wincondition
-->visability rules
-->player turn rules
->resetbtn
-->state
--->clear, playing, someone won
*/

//vars
// placeholder x and o
var x = "x";
var o = "o";
var xstate = 1
var ostate = 2
var nostate = 0
var winner = "me!";
var turn = "player1";
var turnval = 0
var xwin = 0;
var owin = 0;
var boxarray = [0,0,0,0,0,0,0,0,0];
var winsconditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];



// xo print func
function xo() {
    var boxcoord = this.id.split("boxcolumn");
    var i = Number(boxcoord[1])
    var currentValue = boxarray[i];
    if (currentValue == nostate) {
        // even = x odd = o
        turnval++;                 
       if (currentTurn % 2) {
            this.innerHTML = "x";
            turnp.innerHTML = "O's turn!";
        boxarray[i] = xstate;
        } else {
            this.innerHTML = "o";
            tunp.innerHTML = "X's turn!";
            boxarray[i] = ostate;
        }
        checkWin();
    }
}
// check winconditions
function checkwin() {
    for (var i = 0; i < wins.length; i++) {
        var winner = checkValue(wins[i][0], wins[i][1], wins[i][2]);
        if (winner) {
           vicp.innerHTML = "Player " + winner + " WINS!";
            break;
        }
    }
}

function init() {

    // UI creation


    // divApp inititalize
    var divApp = document.getElementById('app');
    //ui start, long way
    //from inner to outer
    //boxes 1-3
    var boxcolumn1 = document.createElement("div");
    boxcolumn1.id = 'box1';
    boxcolumn1.className = 'col border border-primary'
    boxcolumn1.addEventListener('click', xo);   
    var boxcolumn2 = document.createElement("div");
    boxcolumn2.id = 'box2';
    boxcolumn2.className = 'col border border-primary'
    boxcolumn2.addEventListener('click', xo);
    var boxcolumn3 = document.createElement("div");
    boxcolumn3.id = 'box3';
    boxcolumn3.className = 'col border border-primary'
    boxcolumn3.addEventListener('click', xo);
    // row 1 of tictactoe
    var boardrow1 = document.createElement("div");
    boardrow1.id = 'boardrow1';
    boardrow1.className = 'row';
    //append box1-3to row 1
    boardrow1.appendChild(boxcolumn1)
    boardrow1.appendChild(boxcolumn2)
    boardrow1.appendChild(boxcolumn3)

    //boxes 4-6
    var boxcolumn4 = document.createElement("div");
    boxcolumn4.id = 'box4';
    boxcolumn4.className = 'col border border-primary'
    boxcolumn4.addEventListener('click', xo);
    var boxcolumn5 = document.createElement("div");
    boxcolumn5.id = 'box5';
    boxcolumn5.className = 'col border border-primary'
    boxcolumn5.addEventListener('click', xo);
    var boxcolumn6 = document.createElement("div");
    boxcolumn6.id = 'box6';
    boxcolumn6.className = 'col border border-primary'
    boxcolumn6.addEventListener('click', xo);
    // row 2 of tictactoe
    var boardrow2 = document.createElement("div");
    boardrow2.id = 'boardrow2';
    boardrow2.className = 'row';
    //append box1-3to row 2
    boardrow2.appendChild(boxcolumn4);
    boardrow2.appendChild(boxcolumn5);
    boardrow2.appendChild(boxcolumn6);


    //boxes 7-9
    var boxcolumn7 = document.createElement("div");
    boxcolumn7.id = 'box7';
    boxcolumn7.className = 'col border border-primary';
    boxcolumn7.addEventListener('click', xo);;
    var boxcolumn8 = document.createElement("div");
    boxcolumn8.id = 'box8';
    boxcolumn8.className = 'col border border-primary';
    boxcolumn8.addEventListener('click', xo);;
    var boxcolumn9 = document.createElement("div");
    boxcolumn9.id = 'box9';
    boxcolumn9.className = 'col border border-primary';
    boxcolumn9.addEventListener('click', xo);;
    // row 3 of tictactoe
    var boardrow3 = document.createElement("div");
    boardrow3.id = 'boardrow3';
    boardrow3.className = 'row';
    //append box7-9to row 3
    boardrow3.appendChild(boxcolumn7)
    boardrow3.appendChild(boxcolumn8)
    boardrow3.appendChild(boxcolumn9)

    //first col <div class="col-0 col-sm-1 col-md-2 col-lg-3"></div>
    var firstcol = document.createElement("div")
    firstcol.id = ""
    firstcol.className = "col-0 col-sm-1 col-md-2 col-lg-3"
    //middle row col-12 col-sm-10 col-md-8 col-lg-6
    var maincol = document.createElement("div")
    maincol.id = ""
    maincol.className = "col-12 col-sm-10 col-md-8 col-lg-6"
    //outer row <div class="col-0 col-sm-1 col-md-2 col-lg-3"></div>
    var thirdcol = document.createElement("div")
    thirdcol.id = ""
    thirdcol.className = "col-0 col-sm-1 col-md-2 col-lg-3"

    //append rows 1-3 of board to col1 
    maincol.appendChild(boardrow1);
    maincol.appendChild(boardrow2);
    maincol.appendChild(boardrow3);

    // victory, turn, score texts
    var vicp = document.createElement("p")
    vicp.id = "victory";
    vicp.className = '';
    vicp.innerHTML = winner + " has won!"
    vicp.display = "none"
    // vic row
    var boardrow4vic = document.createElement("div");
    boardrow4vic.id = 'boardrow4vic';
    boardrow4vic.className = 'row';
    boardrow4vic.appendChild(vicp)


    // turn
    var turnp = document.createElement("p")
    turnp.id = "turn";
    turnp.className = '';
    turnp.innerHTML = "It is " + turn + "'s turn";
    // turn row
    var boardrow5turn = document.createElement("div");
    boardrow5turn.id = 'boardrow5turn';
    boardrow5turn.className = 'row';
    boardrow5turn.appendChild(turnp)

    // score
    var scorep = document.createElement("p")
    scorep.id = "score";
    scorep.className = '';
    scorep.innerHTML = "It is: " + xwin + ' to '+ owin;
    // score row
    var boardrow6score = document.createElement("div");
    boardrow6score.id = 'boardrow6score';
    boardrow6score.className = 'row';
    boardrow6score.appendChild(scorep)

    // reset+start+rules
    //reset
    var resetbtn = document.createElement("button");
    resetbtn.id = 'reset';
    resetbtn.className = 'btn btn-primary';

    //start
    var startbtn = document.createElement("button");
    startbtn.id = 'start';
    startbtn.className = 'btn btn-primary';


    //rules
    var rulesbtn = document.createElement("button");
    rulesbtn.id = 'rules';
    rulesbtn.className = 'btn btn-primary';

    // btn row
    var boardrow7btns = document.createElement("div");
    boardrow6score.id = 'boardrow7btns';
    boardrow7btns.className = 'row';
    boardrow7btns.appendChild(resetbtn)
    boardrow7btns.appendChild(startbtn)
    boardrow7btns.appendChild(rulesbtn)

    //append all rows to col
    maincol.appendChild(boardrow4vic);
    maincol.appendChild(boardrow5turn);
    maincol.appendChild(boardrow6score);
    maincol.appendChild(boardrow7btns);

    // big row
    var bigrow = document.createElement("div");
    bigrow.id = "";
    bigrow.class = "row";
    bigrow.appendChild(firstcol);
    bigrow.appendChild(maincol);
    bigrow.appendChild(thirdcol);

    // container fluid
    var Containerfluid = document.createElement("div");
    Containerfluid.id = '';
    Containerfluid.className = 'container-fluid justify-content-center';
    Containerfluid.appendChild(bigrow)


    // divApp inititalize
    var divApp = document.getElementById('app');
    divApp.appendChild(Containerfluid);

    resetbtn.innerHTML = "Reset"
    startbtn.innerHTML = "Start"
    rulesbtn.innerHTML = "Rules"

    boxcolumn1.innerHTML = "box1"
    boxcolumn2.innerHTML = "box2"
    boxcolumn3.innerHTML = "box3"
    boxcolumn4.innerHTML = "box4"
    boxcolumn5.innerHTML = "box5"
    boxcolumn6.innerHTML = "box6"
    boxcolumn7.innerHTML = "box7"
    boxcolumn8.innerHTML = "box8"
    boxcolumn9.innerHTML = "box9"


}







/*
----------------------------EVERYTHING BELOW THIS LINE IS TO UNFINISHED FOR RECURSIVENESS------------------------
// column class array
var columnClasses = ['col-0 col-sm-1 col-md-2 col-lg-3', 'col-12 col-sm-10 col-md-8 col-lg-6 border']

divApp.appendChild( newrow(),

                        newcol(
                            newrow(
                                newcol(), newcol(),newcol()
                            newrow(
                                newcol(), newcol(),newcol()
                            newrow(
                                newcol(), newcol(),newcol()
                            newrow(victory text)
                            newrow(turn text)
                            newrow(score text)
                            newrow(
                                newbtn(reset)
                                newbtn(start)
                                newbtn(rules)
                            )
                        )
                    newrow()



// column
var newColumn = document.createElement("div");
newRow.id = '';
newRow.className = ''

// button
var newRow = document.createElement("div");
newBtn.id = '';
newRow.className = 'btn btn-primary';

// h2 text box
var newP = document.createElement("p")
newP.id = "";
newP.className = '';


*/
/*

// UI creation
function createBoard() {
    // placeholder x and o
    var x = "x"
    var o = "o"

    // divApp inititalize
    var divApp = document.getElementById('app');

    // container fluid
    var newContainerfluid = document.createElement("div");
    newContainerfluid.id = '';
    newContainerfluid.className = 'container-fluid';

    // row
    var newRow = document.createElement("div");
    newRow.id = 'row';
    newRow.className = 'row';

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            newColumn.id = 'box' + j;
            newColumn.className = 'column';
            newRow.appendChild(newRow);
        }
    }
    // THIS SHOULD GIVE EVERYTHING IN THE INNER ROW AT FINAL APPEND?
    newContainerfluid.appendChild(newrowouter)
    newContainerfluid.appendChild(newrowinner)
    newContainerfluid.appendChild(newrowouter)
    divApp.appendChild(newContainerfluid)
}

*/
/*

// gameboard + button but no multiple rows for turns/score
function createBoard(toAdd) {
    var board = document.createElement("div");
    for (var i = 0; i < 3; i++) {
        var newRow = document.createElement("div");
        newRow.id = 'row' + i;
        newRow.className = 'row';

        <div class="col-0 col-sm-1 col-md-2 col-lg-3"></div>
            <div class="col-12 col-sm-10 col-md-8 col-lg-6"></div>
            <div class="col-0 col-sm-1 col-md-2 col-lg-3"></div>



        for (var j = 0; j < 3; j++) {
            var newCol = document.createElement("div");
            newCol.id = 'col' + j;
            newCol.innerHTML = "BOO";
            newCol.className = 'col-4 border';
            newRow.appendChild(newCol);
        }
        board.appendChild(newRow);
    }

    toAdd.appendChild(board);
}
// ONLY FUNCS - CLEAN UP!
function init() {
    var container = document.createElement('div');
    container.setAttribute('class', 'container');

    createBoard(container);

    var button = document.createElement('div');
    button.setAttribute("class", "text-center");

    var btn = document.createElement('button');
    btn.innerHTML = 'Restart';

    button.appendChild(btn);
    container.appendChild(button);
    A.appendChild(container);
} */