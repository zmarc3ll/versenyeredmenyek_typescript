import { Result } from "./Result";

export class Marathon implements Result {
    winner: String;
    date: Date;
    #second: Number;
    #minute: Number;
  
    constructor(winner: String, date: Date, minute: Number, second: Number) {
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
      return "Marathon: " + this.#minute + " mins " + this.#second + " sec";
    }
  }