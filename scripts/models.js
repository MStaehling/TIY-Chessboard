(function(window) {

  var counter = 0;

    var game = [//list of 5-tuples representing fromRank, fromFile, toRank, toFile, piece
        // {fromRank: '.rank-2',
        //  fromFile: '.file-d',
        //  toRank: '.rank-4',
        //  toFile: '.file-d',   An object literal
        //  piece: 'white pawn',   more explictit
        // }
        ['.rank-2', '.file-d', '.rank-4', '.file-d', 'white pawn'],
        ['.rank-8', '.file-g', '.rank-6', '.file-f', 'black knight'],
        ['.rank-2', '.file-c', '.rank-4', '.file-c', 'white pawn'],
        ['.rank-7', '.file-e', '.rank-6', '.file-e', 'black pawn'],
        ['.rank-2', '.file-g', '.rank-3', '.file-g', 'white pawn'],
        ['.rank-7', '.file-d', '.rank-5', '.file-d', 'black pawn'],
        ['.rank-1', '.file-f', '.rank-2', '.file-g', 'white bishop'],
        ['.rank-8', '.file-f', '.rank-7', '.file-e', 'black bishop'],
        ['.rank-1', '.file-g', '.rank-3', '.file-f', 'white knight'],
    ];

    /**
    * @param {Array} whichMove [fromRank, fromFile, toRank, ToFile, piece]
    * @TODO move the function to main.js
    */
    function move(whichMove) {
        $(whichMove[0] + ' > ' + whichMove[1]).removeClass(whichMove[4]);
        $(whichMove[2] + ' > ' + whichMove[3]).addClass(whichMove[4]);

    };
    window.chess = {
        "game": game,
        "move": move,
        "counter": counter

        //
        // var board = {
        //     file = ["a", "b", "c", "d"
        //             "e", "f", "g", "h"
        //         ],
        //         rank = [1, 2, 3, 4, 5, 6, 7, 8]
        // };
        // var piece = function(filePlace, rankPlace) {
        //     piece = this.piece;
        //     this.file = board.file[filePlace - 1];
        //     this.rank = board.rank[rankPlace - 1];
        //     this.move = function(a, b) {
        //         this.file = board.file[a - 1];
        //         this.rank = board.rank[b - 1];
        //     };
        // };
        //
        // var whiteRook1 = new piece(1, 1);
        // var whiteKnight1 = new piece(2, 1);
        // var whiteBishop1 = new piece(3, 1);
        // var whiteQueen = new piece(4, 1);
        // var whiteKing = new piece(5, 1);
        // var whiteBishop2 = new piece(6, 1);
        // var whiteKnight2 = new piece(7, 1);
        // var whiteRook2 = new piece(8, 1);
        // var whitePawn1 = new piece(1, 2);
        // var whitePawn2 = new piece(2, 2);
        // var whitePawn3 = new piece(3, 2);
        // var whitePawn4 = new piece(4, 2);
        // var whitePawn5 = new piece(5, 2);
        // var whitePawn6 = new piece(6, 2);
        // var whitePawn7 = new piece(7, 2);
        // var whitePawn8 = new piece(8, 2);
        //
        // var blackRook1 = new piece(1, 8);
        // var blackKnight1 = new piece(2, 8);
        // var blackBishop1 = new piece(3, 8);
        // var blackQueen = new piece(4, 8);
        // var blackKing = new piece(5, 8);
        // var blackBishop2 = new piece(6, 8);
        // var blackKnight2 = new piece(7, 8);
        // var blackRook2 = new piece(8, 8);
        // var blackPawn1 = new piece(1, 7);
        // var blackPawn2 = new piece(2, 7);
        // var blackPawn3 = new piece(3, 7);
        // var blackPawn4 = new piece(4, 7);
        // var blackPawn5 = new piece(5, 7);
        // var blackPawn6 = new piece(6, 7);
        // var blackPawn7 = new piece(7, 7);
        // var blackPawn8 = new piece(8, 7);


        // function initBoard(){
        //   return  [
        // ['R','N','B','Q','K','B','N','R'],
        // ['P','P','P','P','P','P','P','P'],
        // [' ',' ',' ',' ',' ',' ',' ',' '],
        // [' ',' ',' ',' ',' ',' ',' ',' '],
        // [' ',' ',' ',' ',' ',' ',' ',' '],
        // [' ',' ',' ',' ',' ',' ',' ',' '],
        // ['p','p','p','p','p','p','p','p'],
        // ['r','n','b','q','k','b','n','r'] ];
        // };
        //
        // function move(board, fromX, fromY, toX, toY){
        //   board[fromX][fromY] = board[toX][toY];
        //   board[toX][toY] = ' ';
        //   console.log(board.join('\n'));
        // };
        //   var moves = [
        //   move(initBoard, 6, 3, 4, 3),
        //   move(initBoard, 0, 6, 2, 5),
        //   move(initBoard, 6, 2, 4, 2),
        //   move(initBoard, 1, 4, 2, 4),
        //   move(initBoard, 6, 6, 5, 6),
        //   move(initBoard, 1, 3, 3, 3),
        //   move(initBoard, 7, 5, 6, 6),
        //   move(initBoard, 0, 5, 1, 4),
        //   move(initBoard, 7, 6, 5, 5),
        //   move(initBoard, 0, 4, 0, 6),
        //   move(initBoard, 0, 7, 0, 5),
        //   move(initBoard, 7, 4, 7, 6),
        //   move(initBoard, 7, 7, 7, 5),
        //   move(initBoard, 3, 3, 4, 2),
        //   move(initBoard, 7, 3, 6, 2),
        //   move(initBoard, 1, 0, 2, 0),
        //   move(initBoard, 6, 2, 4, 2),
        //   move(initBoard, 1, 1, 3, 1),
        //   move(initBoard, 4, 2, 6, 2),
        //   move(initBoard, 0, 2, 1, 1),
        //   move(initBoard, 7, 2, 6, 3),
        //   move(initBoard, 1, 1, 4, 4),
        //   move(initBoard, 6, 2, 7, 2),
        //   move(initBoard, 4, 4, 1, 1),
        //   move(initBoard, 6, 3, 5, 4),
        //   move(initBoard, 2, 5, 3, 3),
        //   move(initBoard, 7, 1, 5, 2),
        //   move(initBoard, 0, 1, 1, 3),
        //   move(initBoard, 7, 5, 7, 3),
        //   move(initBoard, 0, 0, 0, 2),
        //   move(initBoard, 5, 2, 3, 3),
        //   move(initBoard, 1, 1, 3, 3),
        //   move(initBoard, 5, 5, 7, 4),
        //   move(initBoard, 1, 2, 2, 2),
        //   move(initBoard, 7, 4, 5, 3),
        //   move(initBoard, 0, 3, 2, 1),
        //   move(initBoard, 7, 2, 5, 2),
        //   move(initBoard, 3, 1, 4, 1),
        //   move(initBoard, 5, 2, 6, 3),
        //   move(initBoard, 2, 0, 3, 0),
        //   move(initBoard, 7, 3, 7, 2),
        // ];




    };
})(window);
