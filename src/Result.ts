export interface Result {
    winner: String;
    date: Date;
  
    getWinner(): String;
    setWinner(winner: String): void;
  
    getDate(): Date;
    setDate(date: Date): void;
  
    result(): String;
  }