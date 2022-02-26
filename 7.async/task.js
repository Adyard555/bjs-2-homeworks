// Задание 1
class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = null;
   }

   addClock(time, callback, id) {
      if (typeof id === 'undefined') {
         throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
      } else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
         return console.error('Будильник с таким id уже существует');
      }
      return this.alarmCollection.push({ id, time, callback });
   }
   removeClock(id) {
      let inputArrLength = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
      let outputArrLength = this.alarmCollection.length;
      return outputArrLength < inputArrLength;
   }
   getCurrentFormattedTime() {
      let zeroAdd = (number) => {
         if (number < 10) {
            return '0' + number;
         }
         return number;
      }
      let actualTime = new Date();
      let minutes = zeroAdd(actualTime.getMinutes());
      let hours = zeroAdd(actualTime.getHours());
      return hours + ':' + minutes;
   }
   start() {
      let checkClock = (clock) => {
         let alarm = this.getCurrentFormattedTime();
         if (clock.time === alarm) {
            return clock.callback();
         }
      }
      if (this.timerId === null) {
         this.timerId = setInterval(() => {
            this.alarmCollection.forEach(clock => checkClock(clock));
         }, 1000);
      }
      return;
   }
   stop() {
      if (this.timerId !== null) {
         clearInterval(this.timerId);
         return this.timerId = null;
      }
   }
   printAlarms() {
      console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
      return this.alarmCollection.forEach(clock => console.log("Будильник №" + clock.id + ' заведён на ' + clock.time));
   }
   clearAlarms() {
      this.stop();
      return this.alarmCollection = [];
   }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:00", () => console.log("Пopa вставать"), 1);
phoneAlarm.addClock("09:01", () => { console.log("Дaвaй, вставай уже!"); phoneAlarm.removeClock(2) }, 2);
// phoneAlarm. addClock( "09:01", () => console.log("Иди умываться!"));
phoneAlarm.addClock("09:02", () => { console.log("Вставай, а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms(); }, 3);
phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();