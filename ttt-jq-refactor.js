var player = 'X';

$(document).ready(function() {

function next() {
    player = player === 'X' ? 'O' : 'X';
    return player; 
}

//Set event listeners
var $boxes = $(".box")
// IF X or O don't set a winner
$boxes.each(function(index) {
      $(this).on( "click", function() {
        if($(this).html()=='X' || $(this).html() =='O'){
            console.log("Already something here!")
        }
        // BUT DO SET A WINNER IF OPEN SQUARE
        else { 
            var player = next();
            $(this).html(player);
            $(this).addClass(player);
            winnerIs();
            
        }
    })
})


// CLEARS BOXES WHEN CLEAR BOARD IS RUN
var $boxes = $(".box")
var $button = $("#clear"); 
$button.on( "click", function() {
    $boxes.each(function(index) {
        $(this).html('');
        $(this).removeClass();
    })
})

//INITS BOXES
var $boxes = $(".box")
function reset(){
    $boxes.each(function(index) {
        $(this).html('');
        $(this).removeClass();
    })
}

// winnerIS
function winnerIs(){
      // X Horizontal win
    if ($boxes.eq(0).html() ===  player &&
        $boxes.eq(1).html() ===  player &&
        $boxes.eq(2).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(3).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(5).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(6).html() ===  player &&
        $boxes.eq(7).html() ===  player &&
        $boxes.eq(8).html() ===  player){
        alert("Winner is " + player )
        reset()
    // X Vert win
    }else if ($boxes.eq(0).html() ===  player &&
        $boxes.eq(3).html() ===  player &&
        $boxes.eq(6).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(1).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(7).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(2).html() ===  player &&
        $boxes.eq(5).html() ===  player &&
        $boxes.eq().html() ===  player){
        alert("Winner is " + player )
        reset()
    }
        // diagonal 
    else  if ($boxes.eq(0).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(8).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(2).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(6).html() ===  player){
        alert("Winner is " + player )
        reset()
        reset()
    }


}

});

