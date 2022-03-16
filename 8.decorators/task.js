// Задание 1
function cachingDecoratorNew() {
  const hash = {}

  return function wrapper(...args) {

    if (Object.keys(hash).length > 4) delete hash[Object.keys(hash)[0]];

    if (hash[args]) return ('из кэша:' + hash[args]);

    if (!hash[args]) {
      hash[args] = [...args].reduce((acc, item) => acc + item);
      return ('вычисляем:' + hash[args]);
    }
  }
}

const upgradedAddThree = cachingDecoratorNew();
console.log(upgradedAddThree(1, 2, 3)); // вычисляем: 6
console.log(upgradedAddThree(1, 2, 3)); // из кэша: 6
console.log(upgradedAddThree(2, 2, 3)); // вычисляем: 7
console.log(upgradedAddThree(3, 2, 3)); // вычисляем: 8
console.log(upgradedAddThree(4, 2, 3)); // вычисляем: 9
console.log(upgradedAddThree(5, 2, 3)); // вычисляем: 10
console.log(upgradedAddThree(6, 2, 3)); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
console.log(upgradedAddThree(1, 2, 3)); // вычисляем: 6  (снова вычисляем, кэша нет)

// Задание 2
function debounceDecoratorNew(f, ms) {
  let isCooldown = false;
  return function wrapper() {
    if (isCooldown) return;
    f.apply(this, null);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

// Задание 3
function debounceDecorator2(f, ms) {
  let isCooldown = false;
  let count = 1;
  return function wrapper() {
    console.log('Было произведено ' + count++ + ' вызов(а)(ов)');
    if (isCooldown) return;
    f.apply(this, null);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с