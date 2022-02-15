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
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
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
   }
}

const picknick = new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
);

const sherlock = new PrintEditionItem(
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
);
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
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
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
         if (this.books[i].name === bookName) return this.books.splice([i], 1);
      }
      return null
   }
}
// Задание 3
class Student {
   constructor(name) {
      this.name = name;
      this.obj = {
      };
   }

   addMark(mark, subject) {
      if (mark > 5 || mark < 1) {
         console.log("Ошибка, оценка должна быть числом от 1 до 5");
         return;
      }
      this.obj[subject] ? this.obj[subject].push(mark) : this.obj[subject] = [mark];
   }

   getAverageBySubject(subjectname) {
      if (this.obj[subjectname]) {
         const sum = this.obj[subjectname].reduce((acc, mark) => acc + mark, 0);
         const length = this.obj[subjectname].length;
         console.log('Средний балл по предмету geometry ' + Number((sum / length)));
         return;
      }
      console.log("Несуществующий предмет");
   }

   getAverage() {
      const key = Object.keys(this.obj);
      let totalSum = 0;
      let totalLength = 0;
      for (const item in this.obj) {
         totalSum += this.obj[item].reduce((acc, mark) => acc + mark, 0);
         totalLength += this.obj[item].length;
      }
      console.log('Средний балл по всем предметам ' + Number((totalSum / totalLength)));
   };

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
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");