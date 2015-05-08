var turn = 'X';

//function definitions

window.addEventListener("load", function (){

// game = new Game()
// game.init()

function Game() {
    this.board = new Board();
    this.player1 = new Player("X");
    this.player2 = new Player("0");
}

Game.prototype.init = function(){
    //set event listeners
}

function Board() {}

function Player() {}


// 

// game has a board & two players

function next() {
    turn = turn === 'X' ? 'O' : 'X';
    return turn; 
}



//Set event listeners
for(var i = 0; i < 9; ++i){
     var $box = $("#box" + i );
      $box.on( "click", function() {
        if($(this).html()=='X' || $(this).html() =='O'){
            console.log("Already something here!")
        }
        else {
            var turn = next();
            $(this).html(turn);
            $(this).addClass(turn);
            winner();
            
        }
    })
}

var $boxes = $(".box")
var $button = $("#clear"); 
$button.on( "click", function() {
    for (var i = 0 ; i < 9 ; ++i) {
        $boxes.eq(i).html('');
        $boxes.removeClass('X');
        $boxes.removeClass('O');
  
    }
})

var $boxes = $(".box")
function reset(){

    for (var i = 0 ; i < 9 ; ++i) {
        $boxes.eq(i).html('');
        $boxes.removeClass('X');
        $boxes.removeClass('O');   
    }
}

function winner(){
      // X Horizontal win
    if (document.getElementById("box0").innerHTML === "X" &&
        document.getElementById("box1").innerHTML === "X" &&
        document.getElementById("box2").innerHTML === "X"){
        alert("Winner is X Horizontal!")
        reset()
    }else if (document.getElementById("box3").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box5").innerHTML === "X"){
        alert("Winner is X Horizontal!")
        reset()
    }else if (document.getElementById("box6").innerHTML === "X" &&
        document.getElementById("box7").innerHTML === "X" &&
        document.getElementById("box8").innerHTML === "X"){
        alert("Winner is X Horizontal!")
        reset()
    // X Vert win
    }else if (document.getElementById("box0").innerHTML === "X" &&
        document.getElementById("box3").innerHTML === "X" &&
        document.getElementById("box6").innerHTML === "X"){
        alert("Winner is X Vertically!")
        reset()
    }else if (document.getElementById("box1").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box7").innerHTML === "X"){
        alert("Winner is X Vertically!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "X" &&
        document.getElementById("box5").innerHTML === "X" &&
        document.getElementById("box8").innerHTML === "X"){
        alert("Winner is X Vertically!")
        reset()
    }
    // 0 Horizontal win
    else if (document.getElementById("box0").innerHTML === "O" &&
        document.getElementById("box1").innerHTML === "O" &&
        document.getElementById("box2").innerHTML === "O"){
        alert("Winner is 0 Horizontal!")
        reset()
    }else if (document.getElementById("box3").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box5").innerHTML === "O"){
        alert("Winner is 0 Horizontal!")
        reset()
    }else if (document.getElementById("box6").innerHTML === "O" &&
        document.getElementById("box7").innerHTML === "O" &&
        document.getElementById("box8").innerHTML === "O"){
        alert("Winner is 0 Horizontal!")
        reset()
    // Y Vert win
    }else if (document.getElementById("box0").innerHTML === "O" &&
        document.getElementById("box3").innerHTML === "O" &&
        document.getElementById("box6").innerHTML === "O"){
        alert("Winner is 0 Vertically!")
        reset()
    }else if (document.getElementById("box1").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box7").innerHTML === "O"){
        alert("Winner is 0 Vertically!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "O" &&
        document.getElementById("box5").innerHTML === "O" &&
        document.getElementById("box8").innerHTML === "O"){
        alert("Winner is O Vertically!")
        reset()
    }
    // diagonal O
    else if (document.getElementById("box0").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box8").innerHTML === "O"){
        alert("Winner is 0 diagonal!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box6").innerHTML === "O"){
        alert("Winner is O diagonal!")
        reset()
    }
        // diagonal X
    else if (document.getElementById("box0").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box8").innerHTML === "X"){
        alert("Winner is X diagonal!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box6").innerHTML === "X"){
        alert("Winner is X diagonal!")
        reset()
    }


}

});

