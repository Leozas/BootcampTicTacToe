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


// xo func
function xo() {

}


// UI creation
function createBoard() {
    // placeholder x and o
    var x = "x"
    var o = "o

    // divApp inititalize
    var divApp = document.getElementById('app');
    //ui start, long way
    //from inner to outer
    //boxes 1-3
    var boxcolumn1 = document.createElement("div");
    boxcolumn1.id = 'box1';
    boxcolumn1.className = 'col'
    boxcolumn1.onclick = xo()
    var boxcolumn2 = document.createElement("div");
    boxcolumn2.id = 'box2';
    boxcolumn2.className = 'col'
    boxcolumn2.onclick = xo()
    var boxcolumn3 = document.createElement("div");
    boxcolumn3.id = 'box3';
    boxcolumn3.className = 'col'
    boxcolumn3.onclick = xo()
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
    boxcolumn4.className = 'col'
    boxcolumn4.onclick = xo()
    var boxcolumn5 = document.createElement("div");
    boxcolumn5.id = 'box5';
    boxcolumn5.className = 'col'
    boxcolumn5.onclick = xo()
    var boxcolumn6 = document.createElement("div");
    boxcolumn6.id = 'box6';
    boxcolumn6.className = 'col'
    boxcolumn6.onclick = xo()
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
    boxcolumn7.className = 'col';
    boxcolumn7.onclick = xo();
    var boxcolumn8 = document.createElement("div");
    boxcolumn8.id = 'box8';
    boxcolumn8.className = 'col';
    boxcolumn8.onclick = xo();
    var boxcolumn9 = document.createElement("div");
    boxcolumn9.id = 'box9';
    boxcolumn9.className = 'col';
    boxcolumn9.onclick = xo();
    // row 3 of tictactoe
    var boardrow3 = document.createElement("div");
    boardrow3.id = 'boardrow3';
    boardrow3.className = 'row';
    //append box7-9to row 3
    boardrow3.appendChild(boxcolumn7)
    boardrow3.appendChild(boxcolumn8)
    boardrow3.appendChild(boxcolumn9)

    //container col1 and 2
    var boardcontainercol1 = document.createElement("div");
    boardcontainercol1.id = '';
    boardcontainercol1.className = 'col';
    var boardcontainercol2 = document.createElement("div");
    boardcontainercol2.id = '';
    boardcontainercol2.className = 'col';
    // row 2 of tictactoe
    var boardrow2 = document.createElement("div");
    boardrow2.id = 'boardrow2';
    boardrow2.className = 'row';
    //append rows 1-3 of board to col1 
    boardcontainercol1.appendChild(boardrow1);
    boardcontainercol1.appendChild(boardrow2);
    boardcontainercol1.appendChild(boardrow3);

    // victory, turn, score texts
    var vicp = document.createElement("p")
    vicp.id = "victory";
    vicp.className = '';
    vicp.innerHTML = winner + " has won!"
    // vic row
    var boardrow4vic = document.createElement("div");
    boardrow4vic.id = 'boardrow4vic';
    boardrow4vic.className = 'row';
    boardrow4vic.appendChild(vicp)

}






/*
----------------------------EVERYTHING BELOW THIS LINE IS TO UNFINISHED FOR RECURSIVENESS------------------------
// column class array
var columnClasses = ['col-0 col-sm-1 col-md-2 col-lg-3', 'col-12 col-sm-10 col-md-8 col-lg-6 border']

divApp.appendChild( newrow(),
                    newrow(
                        newcol(
                            newrow(
                                newcol(), newcol(),newcol()
                            newrow(
                                newcol(), newcol(),newcol()
                            newrow(
                                newcol(), newcol(),newcol()
                            )
                        newcol(
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