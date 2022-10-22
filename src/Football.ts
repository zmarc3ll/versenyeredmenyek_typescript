import { Result } from "./Result";

export class Football implements Result {
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