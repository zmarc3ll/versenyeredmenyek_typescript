interface Result {
  winner: String;
  date: Date;

  getWinner(): String;
  setWinner(winner: String): void;

  getDate(): Date;
  setDate(date: Date): void;

  result(): String;
}

class Football implements Result {
  winner: String;
  date: Date;
  #homeGoals: Number;
  #awayGoals: Number;

  constructor(winner: String, date: Date, homeGoal: Number, awayGoals: Number) {
    this.winner = winner;
    this.date = date;
    this.#homeGoals = homeGoal;
    this.#awayGoals = awayGoals;
  }

  getWinner(): String {
    return this.winner;
  }
  setWinner(winner: String): void {
    this.winner = winner;
  }
  getDate(): Date {
    return this.date;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  result(): String {
    return "Football match: " + this.#homeGoals + " - " + this.#awayGoals;
  }
}

class Marathon implements Result {
  winner: String;
  date: Date;
  #second: Number;
  #minute: Number;

  constructor(winner: String, date: Date,minute: Number, second: Number) {
    this.winner = winner;
    this.date = date;
    this.#minute = minute;
    this.#second = second;
  }

  getWinner(): String {
    return this.winner;
  }
  setWinner(winner: String): void {
    this.winner = winner;
  }
  getDate(): Date {
    return this.date;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  result(): String {
    return "Marathon: " + this.#minute  + " mins " +this.#second+ " sec";
  }
}

class Calvinball implements Result {
  winner: String;
  date: Date;
  #endScore: Number;

  constructor(winner: String, date: Date) {
    
    this.winner = winner;
    this.date = date;
    this.#endScore = Math.floor(Math.random() * 100 + 10);
  }

  getWinner(): String {
    return this.winner;
  }
  setWinner(winner: String): void {

    if (winner === "Hobbes" || winner === "Calvin") {
      this.winner = winner;
    } else {
      throw "Winner can only be Calvin or Hobbes";
    }
  }
  getDate(): Date {
    return this.date;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  result(): String {
    return "Calvinball: " + this.#endScore + " points";
  }
}

let fb1: Football = new Football("Real Madrid", new Date(2001,10,14,18,30), 6, 2);
let fb2: Football = new Football("Sevilla", new Date(2009,1,1,7,20), 3, 1);

let c1: Calvinball = new Calvinball("Calvin", new Date(2005,0,4,16,55));
let c2: Calvinball = new Calvinball("Hobbes", new Date(2006,7,6,15,15));

let m1: Marathon = new Marathon("Ndereba", new Date(2017,3,23,19,30), 112, 50);
let m2: Marathon = new Marathon("Desisa", new Date(2011,11,24,22,20), 117,12);

let results: Result[] = [fb1, fb2, c1, c2, m1, m2];

results.forEach((e) => {
  console.log(e.result());
});