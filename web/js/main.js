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
//createElement
//setAttribute
//appendChild

// UI creation



// 
function createBoard(toAdd) {
    var board = document.createElement("div");
    for (var i = 0; i < 3; i++) {
        var newRow = document.createElement("div");
        newRow.id = 'Tac' + i;
        newRow.className = 'row';


        for (var j = 0; j < 3; j++) {
            var newCol = document.createElement("div");
            newCol.id = 'TIC' + j;
            newCol.innerHTML = "BOO";
            newCol.className = 'col-4 border';
            newRow.appendChild(newCol);
        }
        board.appendChild(newRow);
    }
    
    toAdd.appendChild(board);
}