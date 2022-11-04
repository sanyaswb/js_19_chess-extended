const chess = require("./index");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof chess('knight', 6, 7, 7, 5);

	expect(type).toBe('boolean');
});

test('Тест. name: "pawn", x1: 6, y1: 4, x2: 7, y2: 5', () => {
	const res = chess('pawn', 6, 4, 7, 5);

	expect(res).toBe(true);
});

test('Тест. name: "pawn", x1: 6, y1: 4, x2: 7, y2: 6', () => {
	const res = chess('pawn', 6, 4, 7, 6);

	expect(res).toBe(false);
});

test('Тест. name: "pawn", x1: 7, y1: 2, x2: 8, y2: 3', () => {
	const res = chess('pawn', 7, 2, 8, 3);

	expect(res).toBe(true);
});

test('Тест. name: "pawn", x1: 4, y1: 5, x2: 3, y2: 4', () => {
	const res = chess('pawn', 4, 5, 3, 4);

	expect(res).toBe(false);
});

test('Тест. name: "pawn", x1: 4, y1: 5, x2: 4, y2: 5', () => {
	const res = chess('pawn', 4, 5, 4, 5);

	expect(res).toBe(false);
});

test('Тест. name: "pawn", x1: 2, y1: 3, x2: 2, y2: 4', () => {
	const res = chess('pawn', 2, 3, 2, 4);

	expect(res).toBe(false);
});

test('Тест. name: "rook", x1: 7, y1: 2, x2: 7, y2: 5', () => {
	const res = chess('rook', 7, 2, 7, 5);

	expect(res).toBe(true);
});

test('Тест. name: "rook", x1: 1, y1: 6, x2: 5, y2: 4', () => {
	const res = chess('rook', 1, 6, 5, 4);

	expect(res).toBe(false);
});

test('Тест. name: "rook", x1: 8, y1: 8, x2: 4, y2: 4', () => {
	const res = chess('rook', 8, 8, 4, 4);

	expect(res).toBe(false);
});

test('Тест. name: "rook", x1: 5, y1: 2, x2: 2, y2: 5', () => {
	const res = chess('rook', 5, 2, 2, 5);

	expect(res).toBe(false);
});

test('Тест. name: "rook", x1: 8, y1: 1, x2: 8, y2: 8', () => {
	const res = chess('rook', 8, 1, 8, 8);

	expect(res).toBe(true);
});

test('Тест. name: "rook", x1: 6, y1: 2, x2: 8, y2: 1', () => {
	const res = chess('rook', 6, 2, 8, 1);

	expect(res).toBe(false);
});

test('Тест. name: "bishop", x1: 3, y1: 1, x2: 7, y2: 5', () => {
	const res = chess('bishop', 3, 1, 7, 5);

	expect(res).toBe(true);
});

test('Тест. name: "bishop", x1: 2, y1: 7, x2: 8, y2: 1', () => {
	const res = chess('bishop', 2, 7, 8, 1);

	expect(res).toBe(true);
});

test('Тест. name: "bishop", x1: 8, y1: 8, x2: 5, y2: 4', () => {
	const res = chess('bishop', 8, 8, 5, 4);

	expect(res).toBe(false);
});

test('Тест. name: "bishop", x1: 5, y1: 3, x2: 4, y2: 2', () => {
	const res = chess('bishop', 5, 3, 4, 2);

	expect(res).toBe(true);
});

test('Тест. name: "bishop", x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = chess('bishop', 5, 6, 8, 8);

	expect(res).toBe(false);
});

test('Тест. name: "bishop", x1: 6, y1: 2, x2: 8, y2: 1', () => {
	const res = chess('bishop', 6, 2, 8, 1);

	expect(res).toBe(false);
});

test('Тест. name: "horse", x1: 8, y1: 2, x2: 7, y2: 1', () => {
	const res = chess('horse', 8, 2, 8, 1);

	expect(res).toBe(false);
});

test('Тест. name: "queen", x1: 4, y1: 8, x2: 7, y2: 5', () => {
	const res = chess('queen', 4, 8, 7, 5);

	expect(res).toBe(true);
});

test('Тест. name: "queen", x1: 2, y1: 7, x2: 8, y2: 1', () => {
	const res = chess('queen', 2, 7, 8, 1);

	expect(res).toBe(true);
});

test('Тест. name: "queen", x1: 8, y1: 8, x2: 5, y2: 4', () => {
	const res = chess('queen', 8, 8, 5, 4);

	expect(res).toBe(false);
});

test('Тест. name: "queen", x1: 5, y1: 3, x2: 4, y2: 2', () => {
	const res = chess('queen', 5, 3, 4, 2);

	expect(res).toBe(true);
});

test('Тест. name: "queen", x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = chess('queen', 5, 6, 8, 8);

	expect(res).toBe(false);
});

test('Тест. name: "queen", x1: 6, y1: 2, x2: 8, y2: 1', () => {
	const res = chess('queen', 6, 2, 8, 1);

	expect(res).toBe(false);
});

test('Тест. name: "queen", x1: 3, y1: 2, x2: 3, y2: 7', () => {
	const res = chess('queen', 3, 2, 3, 7);

	expect(res).toBe(true);
});

test('Тест. name: "king", x1: 5, y1: 4, x2: 4, y2: 5', () => {
	const res = chess('king', 5, 4, 4, 5);

	expect(res).toBe(true);
});

test('Тест. name: "king", x1: 2, y1: 7, x2: 8, y2: 1', () => {
	const res = chess('king', 2, 7, 8, 1);

	expect(res).toBe(false);
});

test('Тест. name: "king", x1: 8, y1: 8, x2: 7, y2: 4', () => {
	const res = chess('king', 8, 8, 7, 4);

	expect(res).toBe(false);
});

test('Тест. name: "king", x1: 5, y1: 3, x2: 4, y2: 2', () => {
	const res = chess('king', 5, 3, 4, 2);

	expect(res).toBe(true);
});

test('Тест. name: "king", x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = chess('king', 5, 6, 5, 8);

	expect(res).toBe(false);
});

test('Тест. name: "king", x1: 6, y1: 2, x2: 7, y2: 1', () => {
	const res = chess('king', 6, 2, 7, 1);

	expect(res).toBe(true);
});

test('Тест. name: "king", x1: 1, y1: 1, x2: 1, y2: 2', () => {
	const res = chess('king', 1, 1, 1, 2);

	expect(res).toBe(true);
});

test('Тест. name: "knight", x1: 6, y1: 7, x2: 7, y2: 5', () => {
	const res = chess('knight', 6, 7, 7, 5);

	expect(res).toBe(true);
});

test('Тест. name: "knight", x1: 7, y1: 3, x2: 8, y2: 1', () => {
	const res = chess('knight', 7, 3, 8, 1);

	expect(res).toBe(true);
});

test('Тест. name: "knight", x1: 8, y1: 8, x2: 5, y2: 4', () => {
	const res = chess('knight', 8, 8, 5, 4);

	expect(res).toBe(false);
});

test('Тест. name: "knight", x1: 2, y1: 1, x2: 4, y2: 2', () => {
	const res = chess('knight', 2, 1, 4, 2);

	expect(res).toBe(true);
});

test('Тест. name: "knight", x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = chess('knight', 5, 6, 8, 8);

	expect(res).toBe(false);
});

test('Тест. name: "knight", x1: 6, y1: 2, x2: 3, y2: 6', () => {
	const res = chess('knight', 6, 2, 3, 6);

	expect(res).toBe(false);
});

test('Тест. name: "knight", x1: 3, y1: 4, x2: 2, y2: 2', () => {
	const res = chess('knight', 3, 4, 2, 2);

	expect(res).toBe(true);
});

test('Тест. name: "officer", x1: 8, y1: 2, x2: 7, y2: 1', () => {
	const res = chess('officer', 8, 2, 8, 1);

	expect(res).toBe(false);
});

test('Тест. name: "knight", x1: 6, y1: 7, x2: 7, y2: 5', () => {
	const res = chess('knight', 6, 7, 7, 5);

	expect(res).toBe(true);
});

test('Тест. name: "bishop", x1: 3, y1: 2, x2: 6, y2: 5', () => {
	const res = chess('bishop', 3, 2, 6, 5);

	expect(res).toBe(true);
});

test('Тест. name: "queen", x1: 3, y1: 2, x2: 1, y2: 1', () => {
	const res = chess('queen', 3, 2, 1, 1);

	expect(res).toBe(false);
});

test('Тест. name: "pawn", x1: 6, y1: 2, x2: 6, y2: 3', () => {
	const res = chess('pawn', 6, 2, 6, 3);

	expect(res).toBe(false);
});

test('Тест. name: "king", x1: 8, y1: 2, x2: 8, y2: 1', () => {
	const res = chess('king', 8, 2, 8, 1);

	expect(res).toBe(true);
});

test('Тест. name: "king", x1: 8, y1: 2, x2: 7, y2: 1', () => {
	const res = chess('king', 8, 2, 8, 1);

	expect(res).toBe(true);
});