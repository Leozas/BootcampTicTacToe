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

-->ui
container
-container-fluid
--row
---col
---col
---col
--row
---col
---col
---col
--row
---col
---col
---col
--row
--row
---col-centered
----row - turn
----row - button 





*/
// divApp inititalize
var divApp = document.getElementById('#app');

// container fluid
var newContainerfluid = document.createElement("div");
newContainerfluid.id = '';
newContainerfluid.className = 'container-fluid';

// row
var newRow = document.createElement("div");
newRow.id = 'row';
newRow.className = 'row';

// column
var newColumn = document.createElement("div");
newRow.id = '';
newRow.className = '';

// button
var newRow = document.createElement("div");
newBtn.id = 'reset';
newRow.className = 'btn btn-primary';

// h2 player text
var newP = document.createElement("p")
newP.id = "";
newP.className = '';

// column class array
var columnClasses = ['col-0 col-sm-1 col-md-2 col-lg-3','col-12 col-sm-10 col-md-8 col-lg-6 border']

//appendChild

// UI creation

function createBoard() {
    for (var i = 0; i < 3; i++){
     
        for (var j = 0; j < 3; j++) {
            newColumn.id = 'box' + j;
            newColumn.className = columnClasses[2];
            newRow.appendChild(newRow);
        }

    }
}
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