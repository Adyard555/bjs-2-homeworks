// Задание 1
function parseCount(n) {
   let p = Number.parseInt(n, 10);
   if (!p) {
      throw new Error("Невалидное значение");
   }
   return p;
}

function validateCount(value) {
   try {
      return parseCount(value)
   }
   catch (err) {
      return err;
   }
}
console.log(parseCount(1));
console.log(validateCount('n'));
// Задание 2
class Triangle {
   constructor(a, b, c) {
      if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
         throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
   }

   getPerimeter() {
      return this.a + this.b + this.c;
   }

   getArea() {
      const p = 0.5 * this.getPerimeter();
      return Number((p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
   }
}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   }
   catch (err) {
      const dummyTriangle = new Object();
      dummyTriangle.getArea = () => { return "Ошибка! Треугольник не существует"; };
      dummyTriangle.getPerimeter = () => { return "Ошибка! Треугольник не существует"; };
      return dummyTriangle;
   }
}
const Triangle1 = new Triangle(1, 2, 3);
console.log(Triangle1.getPerimeter());
console.log(Triangle1.getArea());
console.log(getTriangle(1, 2, 4));