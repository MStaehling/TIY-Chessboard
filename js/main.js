(function(window) {


//got working with sean
$('.next').click(function() {
  // chess.counter = (chess.counter + 1)% chess.game.length;

  if (chess.counter < chess.game.length) {
    chess.move(chess.game[chess.counter]);
    chess.counter = chess.counter + 1;
  }


});

$('.last').click(function(){
  for (chess.counter; chess.counter < chess.game.length; chess.counter++) {
    chess.move(chess.game[chess.counter]);
  };
});


//Did this in class from Jorge's code
// function  move(fromRank, fromFile, toRank, toFile, piece) {
//   $('.rank-' + fromRank + ' > ' + '.file-' + fromFile).removeClass(piece);
//   $('.rank-' + toRank + ' > ' + '.file-' + fromFile).removeClass(piece);
// }




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
