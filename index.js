function chess(name, x1, y1, x2, y2) {
	if (name === 'pawn') {
		return Math.abs(x1 - x2) === 1 && y1 < y2 && Math.abs(y1 - y2) === 1;
	} else if (name === 'rook') {
		return x1 === x2 || y1 === y2;
	} else if (name === 'bishop') {
		return Math.abs(x1 - x2) === Math.abs(y1 - y2);
	} else if (name === 'queen') {
		return (Math.abs(x1 - x2) === Math.abs(y1 - y2) || x1 === x2 || y1 === y2);
	} else if (name === 'king') {
		return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
	} else if (name === 'knight') {
		return Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2  || Math.abs(y1 - y2) === 1 && Math.abs(x1 - x2) === 2;
	} else {
		return false;
	}
}

module.exports = chess;
