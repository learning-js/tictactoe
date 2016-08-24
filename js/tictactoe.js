$(document).ready(function() {
  var humanPlayer = false;
  var gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var result;
  var user;
  var machine;

  var boardMap = {
    "#cell1": {"x": 0, "y": 0},
    "#cell2": {"x": 0, "y": 1},
    "#cell3": {"x": 0, "y": 2},
    "#cell4": {"x": 1, "y": 0},
    "#cell5": {"x": 1, "y": 1},
    "#cell6": {"x": 1, "y": 2},
    "#cell7": {"x": 2, "y": 0},
    "#cell8": {"x": 2, "y": 1},
    "#cell9": {"x": 2, "y": 2}
  };

  var positionToPaint = {
    "00": "#cell1",
    "01": "#cell2",
    "02": "#cell3",
    "10": "#cell4",
    "11": "#cell5",
    "12": "#cell6",
    "20": "#cell7",
    "21": "#cell8",
    "22": "#cell9"
  }

  var highlightBoard = {
    "h0": "#cell1,#cell2,#cell3",
    "h1": "#cell4,#cell5,#cell6",
    "h2": "#cell7,#cell8,#cell9",
    "v0": "#cell1,#cell4,#cell7",
    "v1": "#cell2,#cell5,#cell8",
    "v2": "#cell3,#cell6,#cell9",
    "d0": "#cell1,#cell5,#cell9",
    "d1": "#cell3,#cell5,#cell7",
  }

  var moves = {
    "user": [],
    "machine": []
  }

////////////////// MODAL ///////////////////
console.log("******************* EMPIEZA EL JUEGO *********************");
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
  $(".btn").click(function() {
    user = $(this).attr("value");
    if(user == "x") {
      machine = "o";
    }
    else {
      machine = "x";
    }
    modal.style.display = "none";
    machineTurn();
  });

  function machineTurn() {
    console.log("----------- empieza machineTurn()");
    var cornersCenter = ["cell1", "cell3", "cell5", "cell7", "cell9"];
    var freePositions = [];
    for(var i = 0; i < cornersCenter.length; i++) {
      if($.trim($("#" + cornersCenter[i]).html()) == "") {
        freePositions.push(cornersCenter[i]);
      }
    }
    if(freePositions.length == 0) {
      var otherPositions = ["cell2", "cell4", "cell6", "cell8"];
      for(var i = 0; i < otherPositions.length; i++) {
        if($.trim($("#" + otherPositions[i]).html()) == "") {
          freePositions.push(otherPositions[i]);
        }
      }
    }
    if(freePositions.length > 1) {
      var randomPlace = "#" + freePositions[Math.floor(Math.random() * freePositions.length)];
      $(randomPlace).html(machine);
      fillArray(randomPlace, machine);
      humanPlayer = true;
    }
    else {
      if(freePositions.length == 1) {
      $(randomPlace).html(machine);
      freePositions = [];
      setTimeout(resetGame, 2000);
      }
      else {
        setTimeout(resetGame, 2000);
      }
    }
  }

  function whoIsPlaying() {
    if(!humanPlayer) {
      if(moves["machine"].length > 0) {
        console.log("la máquina puede ganar");
        var position = moves["machine"][0][0].toString() + moves["machine"][0][1].toString();
        var celltoPaint = positionToPaint[position];
        $(positionToPaint[position]).html(machine);
        fillArray(celltoPaint, machine);
        checkWinner();
        return;
      }
      if(moves["user"].length > 0) {
        console.log("el jugador puede ganar");
        var position = moves["user"][0][0].toString() + moves["user"][0][1].toString();
        var celltoPaint = positionToPaint[position];
        $(positionToPaint[position]).html(machine);
        fillArray(celltoPaint, machine);
        humanPlayer = true;
      }
      else{
        console.log("no pueden ganar ni máquina ni jugador así que elige la máquina en machineTurn()");
        machineTurn();
      }
    }
    moves["user"] = [];
    moves["machine"] = [];
  }

  function checkBoard() {
    chanceHorizontal();
    chanceVertical();
    chanceDiagonal();
    whoIsPlaying();
  }

  function chanceHorizontal() {
    for(var i = 0; i < gameSigns.length; i++) {
      var playerCells = 0;
      var machineCells = 0;
      var emptyCells = 0;
      for(var j = 0; j < gameSigns.length; j++) {
        switch (gameSigns[i][j]) {
          case user:
            playerCells++;
            break;
          case machine:
            machineCells++;
            break;
          default:
            emptyCells++;
        }
      }
      if(playerCells == 2 && emptyCells == 1) {
        moves["user"].push([i, gameSigns[i].indexOf(0)]);
      }
      if(machineCells == 2 && emptyCells == 1) {
        moves["machine"].push([i, gameSigns[i].indexOf(0)]);
      }
    }
  }

  function chanceVertical() {
    for(var i = 0; i < gameSigns.length; i++) {
      var playerCells = 0;
      var machineCells = 0;
      var emptyCells = 0;
      var coords = [];
      for (var j = 0; j < gameSigns.length; j++) {
        switch (gameSigns[j][i]) {
          case user:
            playerCells++;
            break;
          case machine:
            machineCells++;
            break;
          default:
            emptyCells++;
            coords.push([j,i]);
        }
      }
      if(playerCells == 2 && emptyCells == 1) {
        moves["user"].push(coords[0]);
      }
      if(machineCells == 2 && emptyCells == 1) {
        moves["machine"].push(coords[0]);
      }
    }
  }

  // TODO: fix this
  function chanceDiagonal() {
    var diagonal1 = [gameSigns[0][0], gameSigns[1][1], gameSigns[2][2]];
    var diagonal2 = [gameSigns[0][2], gameSigns[1][1], gameSigns[2][0]];
    var coords = [];

    var playerCells = 0;
    var machineCells = 0;
    var emptyCells = 0;
    for(var i = 0; i < gameSigns.length; i++) {
      switch (diagonal1[i]) {
        case user:
          playerCells++;
          break;
        case machine:
          machineCells++;
          break;
        default:
          emptyCells++;
          switch(i) {
            case 0:
              coords.push([0,0]);
              break;
            case 1:
              coords.push([1,1]);
              break;
            case 2:
              coords.push([2,2]);
              break;
          }
      }
    }
    if(playerCells == 2 && emptyCells == 1) {
      moves["user"].push(coords[0]);
    }
    if(machineCells == 2 && emptyCells == 1) {
      moves["machine"].push(coords[0]);
    }

    coords = [];
    playerCells = 0;
    machineCells = 0;
    emptyCells = 0;
    for(var i = 0; i < gameSigns.length; i++) {
      switch (diagonal2[i]) {
        case user:
          playerCells++;
          break;
        case machine:
          machineCells++;
          break;
        default:
          emptyCells++;
          switch(i) {
            case 0:
              coords.push([0,2]);
              break;
            case 1:
              coords.push([1,1]);
              break;
            case 2:
              coords.push([2,0]);
              break;
          }
      }
    }
    if(playerCells == 2 && emptyCells == 1) {
      moves["user"].push(coords[0]);
    }
    if(machineCells == 2 && emptyCells == 1) {
      moves["machine"].push(coords[0]);
    }
  }

  ////////////////// FUNCTIONS //////////////////

  ////// Keep each sign in its place inside the array //////
  function fillArray(position, sign) {
    var x = boardMap[position]["x"];
    var y = boardMap[position]["y"];
    gameSigns[x][y] = sign;  }

  ////// fill the cell with its sign //////
  function fillCell(cell) {
    if(result == "nothing" || result == undefined) {
      if($.trim($(cell).html()) == "") {
        $(cell).html(user);
        fillArray(cell, user);
        humanPlayer = false;
      }
      checkWinner();
    }
  }

  ///////// functions to confirm if there is 3 in a row ///////////
  ///// HORIZONTAL ///////
  function horizontalInaRow() {
    var rows;
    for(var i = 0; i < gameSigns.length; i++) {
      if (gameSigns[i][0] !== 0) {
        rows = gameSigns[i];
        if (rows[0] == rows[1] && rows[0] == rows[2]) {
          return "h" + i;
        }
      }
    }
    return "nothing";
  }

  ///// VERTICAL ///////
  function verticalInaRow() {
    for(var i = 0; i < gameSigns.length; i++) {
      if(gameSigns[0][i] !== 0) {
        if(gameSigns[0][i] == gameSigns[1][i] && gameSigns[0][i] == gameSigns[2][i]) {
          return "v" + i;
        }
      }
    }
    return "nothing";
  }

  ///// DIAGONAL ///////
  function diagonalInaRow() {
    var diagonal1 = [gameSigns[0][0], gameSigns[1][1], gameSigns[2][2]];
    var diagonal2 = [gameSigns[0][2], gameSigns[1][1], gameSigns[2][0]];
    if(diagonal1[0] !== 0 && diagonal1[0] == diagonal1[1] && diagonal1[0] == diagonal1[2]) {
      return "d0";
    }
    if(diagonal2[0] !== 0 && diagonal2[0] == diagonal2[1] && diagonal2[0] == diagonal2[2]){
      return "d1";
    }
    return "nothing";
  }

  ///// Check if a function returns a coincidence ///////
  function checkWinner() {
    result = horizontalInaRow();
    if(result !== "nothing") {
      highlightRow(result);
      return;
    }

    result = verticalInaRow();
    if(result !== "nothing") {
      highlightRow(result);
      return;
    }

    result = diagonalInaRow();
    if(result !== "nothing") {
      highlightRow(result);
      return;
    }
    checkBoard();
  }

  ///// Highlight the row that finishes the game /////
  function highlightRow(reference) {
    var cells = highlightBoard[reference];
    $(cells).css({
      "background-color": "#F8F32B",
      "color": "#3E505B",
      "font-size": "5em"
    });
    setTimeout(resetGame, 2000);
  }

  function resetGame() {
    $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9").empty();
    humanPlayer = false;
    gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    result = undefined;
    moves["user"] = [];
    moves["machine"] = [];
    $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9").removeAttr("style");
    console.log("******************* EMPIEZA EL JUEGO OTRA VEZ *********************");
    machineTurn();
  }

  ////////////// EVENTS WHEN A CELL IS CLICKED ON ///////////////

    $(".cell").click(function() {
      if(humanPlayer) {
        fillCell("#" + this.id);
      }
    });

});