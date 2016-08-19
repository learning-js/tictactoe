$(document).ready(function() {
  var humanPlayer = false;
  var gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var result;
  var user;
  var machine;
  var turns = 0;

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

////////////////// MODAL ///////////////////

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

    startGame();
  });

  function startGame() {
    var startPositions = ["cell1", "cell3", "cell5", "cell7", "cell9"];
    var randomPlace = "#" + startPositions[Math.floor(Math.random() * startPositions.length)];
    $(randomPlace).html(machine);
    turns += 1;
    fillArray(randomPlace, machine);
    humanPlayer = true;
  }

  function checkBoard() {
    /*checkHorizBoard();
    checkVerticalBoard();
    checkDiagonalBoard();
    if(humanPlayer == false) {
      /*machineTurn();*/
    if(humanPlayer) {
      console.log("juega humano");
    }
    else {
      console.log("juega máquina");
      humanPlayer = true;
    }
  }

  function checkHorizBoard() {
    for(var i = 0; i < gameSigns.length; i++) {
      var line = gameSigns[i];

      if(line[0] == user && line[0] == line[1]) {
        if(i == 0) {
          $("#cell3").html(machine);
          fillArray("#cell3", machine);
          humanPlayer = true;
          break;
        }
        else if(i == 1) {
          $("#cell6").html(machine);
          fillArray("#cell6", machine);
          humanPlayer = true;
          break;
        }
        else if(i == 2) {
          $("#cell9").html(machine);
          fillArray("#cell9", machine);
          humanPlayer = true;
          break;
        }
      }
      else if(line[0] == user && line[0] == line[2]) {
        if(i == 0) {
          $("#cell2").html(machine);
          fillArray("#cell2", machine);
          humanPlayer = true;
          break;
        }
        else if(i == 1) {
          $("#cell5").html(machine);
          fillArray("#cell5", machine);
          humanPlayer = true;
          break;
        }
        else if(i == 2) {
          $("#cell8").html(machine);
          fillArray("#cell8", machine);
          humanPlayer = true;
          break;
        }
      }
      else if(line[1] == user && line[1] == line[2]) {
        if(i == 0) {
          $("#cell1").html(machine);
          fillArray("#cell1", machine);
          humanPlayer = true;
          break;
        }
        else if(i == 1) {
          $("#cell4").html(machine);
          fillArray("#cell4", machine);
          humanPlayer = true;
          break;
        }
        else if(i == 2) {
          $("#cell7").html(machine);
          fillArray("#cell7", machine);
          humanPlayer = true;
          break;
        }
      }
    }
  }

  function checkVerticalBoard() {
    var line1 = [gameSigns[0][0], gameSigns[1][0], gameSigns[2][0]];
    var line2 = [gameSigns[0][1], gameSigns[1][1], gameSigns[2][1]];
    var line3 = [gameSigns[0][2], gameSigns[1][2], gameSigns[2][2]];
    if(line1[0] == user || line1[1] == user || line1[2] == user) {
      if(line1[0] == line1[1]){
        $("#cell7").html(machine);
        fillArray("#cell7", machine);
        humanPlayer = true;
      }
      else if(line1[0] == line1[2]) {
        $("#cell4").html(machine);
        fillArray("#cell4", machine);
        humanPlayer = true;
      }
      else if(line1[1] == line1[2]) {
        $("#cell1").html(machine);
        fillArray("#cell1", machine);
        humanPlayer = true;
      }
    }
    if(line2[0] == user || line2[1] == user || line2[2] == user) {
      if(line2[0] == line2[1]){
        $("#cell8").html(machine);
        fillArray("#cell8", machine);
        humanPlayer = true;
      }
      else if(line2[0] == line2[2]) {
        $("#cell5").html(machine);
        fillArray("#cell5", machine);
        humanPlayer = true;
      }
      else if(line2[1] == line2[2]) {
        $("#cell2").html(machine);
        fillArray("#cell2", machine);
        humanPlayer = true;
      }
    }
    if(line3[0] == user || line3[1] == user || line3[2] == user) {
      if(line3[0] == line3[1]){
        $("#cell9").html(machine);
        fillArray("#cell9", machine);
        humanPlayer = true;
      }
      else if(line3[0] == line3[2]) {
        $("#cell6").html(machine);
        fillArray("#cell6", machine);
        humanPlayer = true;
      }
      else if(line3[1] == line3[2]) {
        $("#cell3").html(machine);
        fillArray("#cell3", machine);
        humanPlayer = true;
      }
    }
  }

  function checkDiagonalBoard() {
    var line1 = [gameSigns[0][0], gameSigns[1][1], gameSigns[2][2]];
    var line2 = [gameSigns[0][2], gameSigns[1][1], gameSigns[2][0]];
    if(line1[0] == user || line1[1] == user || line1[2] == user) {
      if(line1[0] == line1[1]){
        $("#cell9").html(machine);
        fillArray("#cell9", machine);
        humanPlayer = true;
      }
      else if(line1[0] == line1[2]) {
        $("#cell5").html(machine);
        fillArray("#cell5", machine);
        humanPlayer = true;
      }
      else if(line1[1] == line1[2]) {
        $("#cell1").html(machine);
        fillArray("#cell1", machine);
        humanPlayer = true;
      }
    }

    if(line2[0] == user || line2[1] == user || line2[2] == user) {
      if(line2[0] == line2[1]){
        $("#cell7").html(machine);
        fillArray("#cell7", machine);
        humanPlayer = true;
      }
      else if(line2[0] == line2[2]) {
        $("#cell5").html(machine);
        fillArray("#cell5", machine);
        humanPlayer = true;
      }
      else if(line2[1] == line2[2]) {
        $("#cell3").html(machine);
        fillArray("#cell3", machine);
        humanPlayer = true;
      }
    }
  }

  ////////////////// FUNCTIONS //////////////////

  ////// Keep each sign in its place inside the array //////
  function fillArray(position, sign) {
    var x = boardMap[position]["x"];
    var y = boardMap[position]["y"];
    gameSigns[x][y] = sign;
  }

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
          console.log("hay un ganador en fila " + i);
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
          console.log("hay un ganador en columna " + i);
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
      console.log("hay un ganador en diagonal 0");
      return "d0";
    }
    if(diagonal2[0] !== 0 && diagonal2[0] == diagonal2[1] && diagonal2[0] == diagonal2[2]){
      console.log("hay un ganador en diagonal 1");
      return "d1";
    }
    return "nothing";
  }

  ///// Check if a function returns a coincidence ///////
  function checkWinner() {
    result = horizontalInaRow();
    console.log("result vale " + result);
    if(result !== "nothing") {
      console.log("ganador horizontal");
      highlightRow(result);
      return;
    }

    result = verticalInaRow();
    if(result !== "nothing") {
      console.log("ganador horizontal");
      highlightRow(result);
      return;
    }

    result = diagonalInaRow();
    if(result !== "nothing") {
      console.log("ganador horizontal");
      highlightRow(result);
      return;
    }
    console.log("sigue el juego");
    checkBoard();
  }

  ///// Highlight the row that finishes the game /////
  function highlightRow(reference) {
    var cells = highlightBoard[reference];
    console.log("voy a pintar " + cells);
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
    $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9").removeAttr("style");
    startGame();
  }

  ////////////// EVENTS WHEN A CELL IS CLICKED ON ///////////////

    $(".cell").click(function() {
      if(humanPlayer == true) {
        console.log("vamos a pintar");
        fillCell("#" + this.id);
      }
    });

});