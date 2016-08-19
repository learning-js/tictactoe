$(document).ready(function() {
  var humanPlayer = false;
  var gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var result;
  var user;
  var machine;
  var turns = 0;

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

    var startPositions = ["cell1", "cell3", "cell5", "cell7", "cell9"];
      var randomPlace = "#" + startPositions[Math.floor(Math.random() * startPositions.length)];
      $(randomPlace).html(machine);
      turns += 1;
      fillArray(randomPlace, machine);
      humanPlayer = true;
  })

  function checkBoard() {
    checkHorizBoard();
    checkVerticalBoard();
    checkDiagonalBoard();
    if(humanPlayer == false) {
      machineTurn();
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

  ////////////////// FUNCTIONS ///////////////////


  ////// Keep each sign in its place inside the array //////
  function fillArray(position, sign) {
    switch(position) {
      case "#cell1":
        gameSigns[0][0] = sign;
        break;
      case "#cell2":
        gameSigns[0][1] = sign;
        break;
      case "#cell3":
        gameSigns[0][2] = sign;
        break;
      case "#cell4":
        gameSigns[1][0] = sign;
        break;
      case "#cell5":
        gameSigns[1][1] = sign;
        break;
      case "#cell6":
        gameSigns[1][2] = sign;
        break;
      case "#cell7":
        gameSigns[2][0] = sign;
        break;
      case "#cell8":
        gameSigns[2][1] = sign;
        break;
      case "#cell9":
        gameSigns[2][2] = sign;
        break;
    }
  }

  ////// fill the cell with its sign //////
  function fillCell(cell) {
    if(result == undefined) {
      if($.trim($(cell).html()) == "") {
          $(cell).html(user);
          fillArray(cell, user);
          humanPlayer = false;
      }
      checkGame();
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
          return i;
        }
      }
    }
  }

  ///// VERTICAL ///////
  function verticalInaRow() {
    ////brujería de javascript o una adrianada
    /*var rows = [];
    for(var i = 0; i < gameSigns.length; i++) {
      for(var j = 0; j < gameSigns.length; j++) {
        console.log("meto a rows: " + gameSigns[j][j]);
        rows.push([gameSigns[j][i]]);
      }
      console.log("rows vale esto " + rows);
      console.log(rows[0]==rows[1]);
      console.log(rows[1]==rows[2]);
      if(rows[0] === rows[1] && rows[0] === rows[2]) {
        console.log("son iguales");
        rows = [];
        return i;
      }
      else {
        rows = [];
      }
    }*/
    var column1 = [gameSigns[0][0], gameSigns[1][0], gameSigns[2][0]];
    var column2 = [gameSigns[0][1], gameSigns[1][1], gameSigns[2][1]];
    var column3 = [gameSigns[0][2], gameSigns[1][2], gameSigns[2][2]];
    if(column1[0] !== 0 && column1[0] == column1[1] && column1[0] == column1[2]) {
      return 3;
    }
    else {
      if(column2[0] !== 0 && column2[0] == column2[1] && column2[0] == column2[2]) {
        return 4;
      }
      else {
        if(column3[0] !== 0 && column3[0] == column3[1] && column3[0] == column3[2]) {
          return 5;
        }
      }
    }
  }

  ///// DIAGONAL ///////
  function diagonalInaRow() {
    var diagonal1 = [gameSigns[0][0], gameSigns[1][1], gameSigns[2][2]];
    var diagonal2 = [gameSigns[0][2], gameSigns[1][1], gameSigns[2][0]];
    if(diagonal1[0] !== 0 && diagonal1[0] == diagonal1[1] && diagonal1[0] == diagonal1[2]) {
      return 6;
    }
    else {
      if(diagonal2[0] !== 0 && diagonal2[0] == diagonal2[1] && diagonal2[0] == diagonal2[2]){
        return 7;
      }
    }
  }

  ///// Check if a function returns a coincidence ///////
  function checkGame() {
    if(horizontalInaRow() !== undefined) {
      result = horizontalInaRow();
      highlightRow();
    }
    else {
      if(verticalInaRow() !== undefined) {
        result = verticalInaRow();
        highlightRow();
      }
      else {
        if(diagonalInaRow() !== undefined) {
          result = diagonalInaRow();
          highlightRow();
        }
      }
    }
    if(result == undefined) {
      checkBoard();
    }
  }

  ///// Highlight the row that finishes the game /////

  function highlightRow() {
    if(result !== undefined){
      switch(result) {
        case 0:
          $("#cell1, #cell2, #cell3").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 1:
          $("#cell4, #cell5, #cell6").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 2:
          $("#cell7, #cell8, #cell9").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 3:
          $("#cell1, #cell4, #cell7").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 4:
          $("#cell2, #cell5, #cell8").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 5:
          $("#cell3, #cell6, #cell9").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 6:
          $("#cell1, #cell5, #cell9").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
        case 7:
          $("#cell3, #cell5, #cell7").css({
            "background-color": "#F8F32B",
            "color": "#3E505B",
            "font-size": "5em"
          });
          break;
      }
      setTimeout(resetGame, 2000);
    }
  }

  function resetGame() {
    $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9").empty();
    var humanPlayer = false;
    gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    result = undefined;
    $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9").removeAttr("style");
  }

  ////////////// EVENTS WHEN A CELL IS CLICKED ON ///////////////

    $("#cell1").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell1");
      }
    });

    $("#cell2").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell2");
      }
    });

    $("#cell3").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell3");
      }
    });

    $("#cell4").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell4");
      }
    });

    $("#cell5").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell5");
      }
    });

    $("#cell6").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell6");
      }
    });

    $("#cell7").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell7");
      }
    });

    $("#cell8").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell8");
      }
    });

    $("#cell9").click(function() {
      if(humanPlayer == true) {
        fillCell("#cell9");
      }
    });

});