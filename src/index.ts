import { Result } from "./Result";
import { Football } from "./Football";
import { Marathon } from "./Marathon";
import { Calvinball } from "./Calvinball";

let fb1: Football = new Football("Real Madrid", new Date(2001, 10, 14, 18, 30), 6, 2);
let fb2: Football = new Football("Sevilla", new Date(2009, 1, 1, 7, 20), 3, 1);

let c1: Calvinball = new Calvinball("Calvin", new Date(2005, 0, 4, 16, 55));
let c2: Calvinball = new Calvinball("Hobbes", new Date(2006, 7, 6, 15, 15));

let m1: Marathon = new Marathon("Ndereba", new Date(2017, 3, 23, 19, 30), 112, 50);
let m2: Marathon = new Marathon("Desisa", new Date(2011, 11, 24, 22, 20), 117, 12);

let results: Result[] = [fb1, fb2, c1, c2, m1, m2];
let results2: Result[] = [...results];
results.forEach((e) => {
  console.log(e.result());
});

console.log('Calvin 1');

for (const result of results) {
  if (result.winner === 'Calvin') {
    console.log(result.result());
  }
}

console.log('Calvin 2');

for (const result of results.filter(r => r.winner === 'Calvin')) {
  console.log(result.result());
}

results2.sort((a, b) => {
  if (a.getDate() > b.getDate()) {
    return 1;
  }
  if (b.getDate() > a.getDate()) {
    return -1;
  }
  return 0;
});

results2.forEach((e) => {
  console.log(e.getDate());
});
