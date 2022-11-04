const chess = require("./index");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof chess('knight', 6, 7, 7, 5);

	expect(type).toBe('boolean');
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

test('Тест. name: "officer", x1: 8, y1: 2, x2: 7, y2: 1', () => {
	const res = chess('officer', 8, 2, 8, 1);

	expect(res).toBe(false);
});