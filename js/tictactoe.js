$(document).ready(function() {
  var xSign = false;
  var gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var result = 0;

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
    if($.trim($(cell).html()) == "") {
      if (xSign) {
        $(cell).html("x");
        fillArray(cell, "x");
        xSign = false;
      }
      else {
        $(cell).html("o");
        fillArray(cell, "o");
        xSign = true;
      }
    }
    checkGame();
  }

  ///////// function to confirm if there is 3 in a row ///////////
  function horizontalInaRow() {
    var rows;
    for(var i = 0; i < gameSigns.length; i++) {
      if (gameSigns[i][0] !== 0) {
        rows = gameSigns[i];
        if (rows[0] == rows[1] && rows[0] == rows[2]) {
          console.log("tres en raya en la línea " + i)
          return i;
        }
      }
    }
  }

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
      console.log("columna 1");
      return 4;
    }
    else {
      if(column2[0] !== 0 && column2[0] == column2[1] && column2[0] == column2[2]) {
        console.log("columna 2");
        return 5;
      }
      else {
        if(column3[0] !== 0 && column3[0] == column3[1] && column3[0] == column3[2]) {
          console.log("columna 3");
          return 6;
        }
      }
    }
  }

  function diagonalInaRow() {
    var diagonal1 = [gameSigns[0][0], gameSigns[1][1], gameSigns[2][2]];
    var diagonal2 = [gameSigns[0][2], gameSigns[1][1], gameSigns[2][0]];
    if(diagonal1[0] !== 0 && diagonal1[0] == diagonal1[1] && diagonal1[0] == diagonal1[2]) {
      console.log("diagonal1");
      return 7;
    }
    else {
      if(diagonal2[0] !== 0 && diagonal2[0] == diagonal2[1] && diagonal2[0] == diagonal2[2]){
        console.log("diagonal2");
        return 8;
      }
    }
  }

  function checkGame() {
    if(horizontalInaRow() !== undefined) {
      result = horizontalInaRow();
    }
    else {
      if(verticalInaRow() !== undefined) {
        result = verticalInaRow();
      }
      else {
        if(diagonalInaRow() !== undefined) {
          result = diagonalInaRow();
        }
      }
    };
  }

  ////////////// EVENTS WHEN A CELL IS CLICKED ON ///////////////

  $("#cell1").click(function() {
    fillCell("#cell1");
  });

  $("#cell2").click(function() {
    fillCell("#cell2");
  });

  $("#cell3").click(function() {
    fillCell("#cell3");
  });

  $("#cell4").click(function() {
    fillCell("#cell4");
  });

  $("#cell5").click(function() {
    fillCell("#cell5");
  });

  $("#cell6").click(function() {
    fillCell("#cell6");
  });

  $("#cell7").click(function() {
    fillCell("#cell7");
  });

  $("#cell8").click(function() {
    fillCell("#cell8");
  });

  $("#cell9").click(function() {
    fillCell("#cell9");
  });


});