documentWidth = window.screen.availWidth;
girdContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

var getPosTop = function(i,j) {
	return cellSpace + i*(cellSideLength + cellSpace);
}
var getPosLeft = function(i,j) {
	return cellSpace + j*(cellSideLength + cellSpace);
}
var getNumberBackgroundColor = function(number) {
	switch(number) {
		case 2: return "#eee4da";break;
		case 4: return "#ede0c8";break;
		case 8: return "#f2b179";break;
		case 16: return "#f59563";break;
		case 32: return "#f67c5f";break;
		case 64: return "#f65e3b";break;
		case 128: return "#edcf72";break;
		case 256: return "#edcc61";break;
		case 512: return "#FFFF00";break;
		case 1024: return "#33b5e5";break;
		case 2048: return "#0099cc";break;
		case 4096: return "#1E90FF";break;
		case 8192: return "#BA55D3";break;
		case 16384: return "#9932CC";break;
		case 32768: return "#9400D3";break;
		default: break;
	}
	return "black";
}
var getNumberColor = function(number) {
	if(number <= 4) {
		return "#776a65";
	}
	return "white";
}
var nospace = function() {
	for(var i=0; i<4; i++) {
		for(var j=0; j<4; j++){
			if(board[i][j] == 0)
				return false;
		}
	}
	return true;
}
var canMoveLeft = function(board) {
	for(var i=0; i<4; i++) {
		for(var j=1; j<4; j++) {
			if(board[i][j] != 0) {
				if(board[i][j-1] == 0 || board[i][j-1]== board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
var canMoveRight = function(board) {
	for(var i=0; i<4; i++) {
		for(var j=2; j>=0; j--) {
			if(board[i][j] != 0) {
				if(board[i][j+1] == 0 || board[i][j+1]== board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
var canMoveUp = function(board) {
	for(var j=0; j<4; j++) {
		for(var i=1; i<4; i++) {
			if(board[i][j] != 0) {
				if(board[i-1][j] == 0 || board[i-1][j]== board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
var canMoveDown = function(board) {
	for(var j=0; j<4; j++) {
		for(var i=2; i>=0; i--) {
			if(board[i][j] != 0) {
				if(board[i+1][j] == 0 || board[i+1][j]== board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
var noBlockHorizontal = function(row, col1, col2, board) {
	for(var i=col1+1; i<col2; i++) {
		if(board[row][i] != 0)
			return false;
	}
	return true;
}
var noBlockVertical = function(col, row1, row2, board) {
	for(var i=row1+1; i<row2; i++) {
		if(board[i][col] != 0)
			return false;
	}
	return true;
}
var nomove = function(board) {
	if(canMoveUp(board) || canMoveDown(board) || canMoveRight(board) || canMoveLeft(board))
		return false;
	else 
		return true;
}