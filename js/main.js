(function(window) {


//got working with sean
$('.next').click(function() {
  chess.counter = (chess.counter + 1)% chess.game.length;
  chess.move(chess.game[chess.counter]);
});

$('.last').click(function(){
  for (i = 0; i < chess.game.length; i++) {
    chess.move(chess.game[i]);
  };
});






// Old function
// $('.last').click(function(){
//   chess.move(chess.game.move1);
//   chess.move(chess.game.move2);
//   chess.move(chess.game.move3);
//   chess.move(chess.game.move4);
//   chess.move(chess.game.move5);
//   chess.move(chess.game.move6);
//   chess.move(chess.game.move7);
//   chess.move(chess.game.move8);
//   chess.move(chess.game.move9);
// });



})(window);
