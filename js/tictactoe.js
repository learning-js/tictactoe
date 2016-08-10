$(document).ready(function() {
  var xSign = false;
  var gameSigns = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

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
        console.log(gameSigns);
        xSign = false;
      }
      else {
        $(cell).html("o");
        fillArray(cell, "o");
        console.log(gameSigns);
        xSign = true;
      }
    }
  }

  ///////// function to confirm if there is 3 in a row ///////////
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

  ////////////// EVENTS WHEN A CELL IS CLICKED ON ///////////////

  $("#cell1").click(function() {
    fillCell("#cell1");
    horizontalInaRow();
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