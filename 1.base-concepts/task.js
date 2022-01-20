function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    arr;
  } else if (D === 0) {
    x1 = -b / (2 * a);
    arr = [x1];
  } else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  if (percentTest != Number(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount
  } else if (contributionTest != Number(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount
  } else if (amountTest != Number(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount
  }
  else {
    let credit = amount - contribution;
    let dateMonth = date.getMonth();
    let dateYear = date.getFullYear();
    let dateNow = new Date(Date.now());
    let dateNowMonth = dateNow.getMonth();
    let dateNowYear = dateNow.getFullYear();
    let month = (dateYear - dateNowYear) * 12 + (dateMonth - dateNowMonth);
    let payment = credit * (percent / 12 / 100 + (percent / 12 / 100 / (((1 + percent / 12 / 100) ** month - 1))));
    totalAmount = payment * month;
    return Number(totalAmount.toFixed(2));
  }
}
