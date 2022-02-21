// Задание 1
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state = this._state * 1.5;
   }

   set state(number) {
      if (number < 0) {
         this._state = 0;
      } else if (number > 100) {
         this._state = 100;
      } else {
         this._state = number;
      }
   }

   get state() {
      return this._state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
      this.author = author;
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
      this.author = author;
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
      this.author = author;
   }
}

const picknick = new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
const myDetective = new DetectiveBook("Агата Кристи", "Десять негритят", 2019, 256);
console.log(myDetective);
// Задание 2
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state *= 1.5;
   }

   set state(number) {
      if (number < 0) {
         this._state = 0
      } else if (number > 100) {
         this._state = 100
      } else {
         return this._state = number
      }
   }

   get state() {
      return this._state
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'book';
      this.author = author;
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
      this.author = author;
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
      this.author = author;
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
      this.author = author;
   }
}

class Library {
   constructor(name, books) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
      return this.books
   }

   findBookBy(type, value) {
      for (let i = 0; this.books.length > i; i++) {
         if (this.books[i][type] === value) return this.books[i]
      }
      return null
   }
   giveBookByName(bookName) {
      for (let i = 0; this.books.length > i; i++) {
         if (this.books[i].name === bookName) return this.books.splice([i], 1)[0];
      }
      return null
   }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
   new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
   )
);
library.addBook(
   new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
   )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
const myDetective = new DetectiveBook("Агата Кристи", "Десять негритят", 2019, 256);
console.log(myDetective);
// Задание 3
class Student {
   constructor(name) {
      this.name = name;
      this.Subjects = {}
   }

   addMark(mark, subject) {
      if (mark > 5 || mark < 1) {
         console.log("Ошибка, оценка должна быть числом от 1 до 5");
         return;
      }
      this.Subjects[subject] ? this.Subjects[subject].push(mark) : this.Subjects[subject] = [mark];
   }

   getAverageBySubject(subjectname) {
      if (this.Subjects[subjectname]) {
         const sum = this.Subjects[subjectname].reduce((acc, mark) => acc + mark, 0);
         const length = this.Subjects[subjectname].length;
         console.log('Средний балл по предмету geometry ' + (sum / length));
         return (sum / length);
      }
      console.log("Несуществующий предмет");
   }

   getAverage() {
      const key = Object.keys(this.Subjects);
      let totalSum = 0;
      let totalLength = 0;
      for (const item in this.Subjects) {
         totalSum += this.Subjects[item].reduce((acc, mark) => acc + mark, 0);
         totalLength += this.Subjects[item].length;
      }
      console.log('Средний балл по всем предметам ' + (totalSum / totalLength));
      return totalSum / totalLength;
   }

   exclude(reason) {
      console.log(reason);
   }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
// student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");
console.log(student);