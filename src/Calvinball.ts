import { Result } from "./Result";

export class Calvinball implements Result {
    winner: String;
    date: Date;
    #endScore: Number;
  
    constructor(winner: String, date: Date) {
  
      this.winner = winner;
      this.date = date;
      //                                          ((max+1)-min)+ min
      this.#endScore = Math.floor(Math.random() * ((100 + 1) - 10) + 10);
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