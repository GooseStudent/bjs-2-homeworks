"use strict";

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;
	let D;
	let x;
	let y;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		x = -b / (2 * a);
		D = [x];
		return D;

	} else if (discriminant > 0) {
		x = (-b + Math.sqrt(discriminant)) / (2 * a);
		y = (-b - Math.sqrt(discriminant)) / (2 * a);
		D = [x, y];
		return D;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));
	let totalPayment = monthlyPayment * countMonths;
	totalPayment = Number(totalPayment.toFixed(2));
	return totalPayment;
}