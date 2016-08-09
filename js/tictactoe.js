$(document).ready(function(){
  var xSign = false;

  ////// FUNCTIONS //////

  function fillCell (cell){
    if($.trim($(cell).html())==""){
      if (xSign){
        $(cell).html("x");
        xSign = false;
      }
      else{
        $(cell).html("o");
        xSign = true;
      }
    }
    else{
      console.log("ya está lleno");
    }
  }

  ////// EVENTS WHEN A CELL IS CLICKED ON //////

  $("#cell1").click(function(){
    fillCell("#cell1");
  })

  $("#cell2").click(function(){
    fillCell("#cell2");
  })

  $("#cell3").click(function(){
    fillCell("#cell3");
  })

  $("#cell4").click(function(){
    fillCell("#cell4");
  })

  $("#cell5").click(function(){
    fillCell("#cell5");
  })

  $("#cell6").click(function(){
    fillCell("#cell6");
  })

  $("#cell7").click(function(){
    fillCell("#cell7");
  })

  $("#cell8").click(function(){
    fillCell("#cell8");
  })

  $("#cell9").click(function(){
    fillCell("#cell9");
  })


})