// 手番をカウントするための変数を定義
var turn = 0;　// 初ターン(ターン1)は黒、偶数ターンは白

// create play ground (8*8)
var board_el  = new Array(8)
for (var i = 0; i< board_el.length; i++) {
  board_el[i] = new Array(8)
}
// reflect board in html id(field)
// get field(id) in html
var board = document.getElementById('field')

// create board by field(id)
board_create()
// init board
newgame()

// 
for (var j= 0; j< 9; j++) {
  for (var k= 0; k< 9; k++) {
    var select_cell = board.row[j].cells[k];
    select_cell.onClick = function() {
      if (board_el[this.parentNode.rowIndex][this.cellIndex] == 0) {
        if (check_reverse(this.parentNode.rowIndex,this.cellIndex) > 0) {
          board_set()
          chenge_turn()
        }
      }
    }
  }
}

// function of create board on tabale
function board_create() {
  for (var j = 0; j < 8; j++) {
    var tr = document.createElement("tr")
    board.appendChild(tr)
    for (var k = 0; k < 8; k++) {
      var td = document.createElement("td")
      tr.appendChild(td)
    }
  }
};

// function of init board
function newgame() {
  for (var j = 0; j < 8; j++) {
    for (var k = 0; k < 8; k++) {
      board_el[j][k] = 0
    }
  }
  board_el[3][3] = -1
  board_el[4][3] = 1
  board_el[4][4] = 1
  board_el[3][4] = -1
  board_set()

  // function of init turn
  turn = 0
  chenge_turn()
};

// set of playing board and stone
function board_set() {
  var stone = ""
  for (var j= 0; j< 8; j++) {
    for (var k= 0; k< 8; k++) {
      switch (board_el[j][k]) {
        case 0:
          stone = ""
        break;
        case -1:
          stone = "○"
        break;
        case 1:
          stone = "●"
        break;
      }
      board.row[j].cells[k].innerText = stone;
    }
  }
  return true
};

// fuction if automation system
