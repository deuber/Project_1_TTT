
  var player = "X"
// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
$(function () {
  // Create a Game class,  an object constructor
  function Game() {
  }
  // Create a Board class,  an object constructor
  function Board() {
       var $boxes = $(".box")

  } 

  // Add a shared property nextPlayer to GAME object 
  //The new function is a simple ternary operator that returns a new symbol each time run
  Game.prototype.nextPlayer = function() {
    //Switch players
    this.player = this.player === "X" ? "O" : "X";
      return this.player;
  };
  
  Game.prototype.addWins = function() {
  var winner = "";
  winner = game.isWinner();
  if (winner){
    var current = document.getElementById("sum" + this.player);
    current.value += this.player
    }
  };

  // Add a shared property to reset all boxes 
  Game.prototype.resetBoxes = function() {
  var boxToClear = $(".box")
      console.log(boxToClear);
      boxToClear.each(function(index) {
          $(this).html('');
          $(this).removeClass();
      })
  };


  // This starts the game by setting up the event listeners
  Game.prototype.init = function() {
  var board = new Board(); //Creates an instance of the Game object
  board.attachListeners(); //Create event listener
  board.clearBoard(); //Clear board when 'clear' button is clicked


  };

  // Add a shared property init to BOARD object
  // If box is not taken, set the box to a symbol 
  Board.prototype.attachListeners = function() {
    //Set event listeners for all boxes
    var $boxes = $(".box")
    $boxes.each(function(index) {
      $(this).on( "click", function() {
        // IF X or O don't set a winner
        if($(this).html()=='X' || $(this).html() =='O'){
          console.log("Already something here!")
        }
        // Set X or Y and check for winner
        else { 
          var player = game.nextPlayer();
          $(this).html(game.player);
          $(this).addClass(game.player);
          game.addWins();
        }
    })
  })


  // Add a shared property clearBoard to BOARD object
  // Clears the board when run
  Board.prototype.clearBoard = function() {
    var $boxes = $(".box")
    var $button = $("#clear"); 
    $button.on( "click", function() {
    $boxes.each(function(index) {
          $(this).html('');
          $(this).removeClass();
    })
  })

  Game.prototype.isWinner = function() {
    if ($boxes.eq(0).html() ===  this.player &&
        $boxes.eq(1).html() ===  this.player &&
        $boxes.eq(2).html() ===  this.player){
        $boxes.eq(0).addClass("win");
        $boxes.eq(1).addClass("win");
        $boxes.eq(2).addClass("win");
        alert("Winner is " + player )
        game.resetBoxes().delay( 800 );
        return this.player;

    }else if ($boxes.eq(3).html() ===  this.player &&
        $boxes.eq(4).html() ===  this.player &&
        $boxes.eq(5).html() ===  this.player){
        $boxes.eq(3).addClass("win");
        $boxes.eq(4).addClass("win");
        $boxes.eq(5).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;

    }else if ($boxes.eq(6).html() ===  this.player &&
        $boxes.eq(7).html() ===  this.player &&
        $boxes.eq(8).html() ===  this.player){
        $boxes.eq(6).addClass("win");
        $boxes.eq(7).addClass("win");
        $boxes.eq(8).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;       

    // X Vert win
    }else if ($boxes.eq(0).html() ===  this.player &&
        $boxes.eq(3).html() ===  this.player &&
        $boxes.eq(6).html() ===  this.player){
        $boxes.eq(0).addClass("win");
        $boxes.eq(3).addClass("win");
        $boxes.eq(6).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;

    }else if ($boxes.eq(1).html() ===  this.player &&
        $boxes.eq(4).html() ===  this.player &&
        $boxes.eq(7).html() ===  this.player){
        $boxes.eq(1).addClass("win");
        $boxes.eq(4).addClass("win");
        $boxes.eq(7).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;

    }else if ($boxes.eq(2).html() ===  this.player &&
        $boxes.eq(5).html() ===  this.player &&
        $boxes.eq(8).html() ===  this.player){
        $boxes.eq(2).addClass("win");
        $boxes.eq(5).addClass("win");
        $boxes.eq(8).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;


    }
        // diagonal 
    else  if ($boxes.eq(0).html() ===  this.player &&
        $boxes.eq(4).html() ===  this.player &&
        $boxes.eq(8).html() ===  this.player){
        $boxes.eq(0).addClass("win");
        $boxes.eq(4).addClass("win");
        $boxes.eq(8).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;


    }else if ($boxes.eq(2).html() ===  this.player &&
        $boxes.eq(4).html() ===  this.player &&
        $boxes.eq(6).html() ===  this.player){
        $boxes.eq(0).addClass("win");
        $boxes.eq(4).addClass("win");
        $boxes.eq(8).addClass("win");
        alert("Winner is " + this.player )
        game.resetBoxes();
        return this.player;


    }else{
      return null;
    }


  };

  };
  }

  // Start the game!
  var game = new Game();
  game.init();

});
