"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Football_1 = require("./Football");
const Marathon_1 = require("./Marathon");
const Calvinball_1 = require("./Calvinball");
let fb1 = new Football_1.Football("Real Madrid", new Date(2001, 10, 14, 18, 30), 6, 2);
let fb2 = new Football_1.Football("Sevilla", new Date(2009, 1, 1, 7, 20), 3, 1);
let c1 = new Calvinball_1.Calvinball("Calvin", new Date(2005, 0, 4, 16, 55));
let c2 = new Calvinball_1.Calvinball("Hobbes", new Date(2006, 7, 6, 15, 15));
let m1 = new Marathon_1.Marathon("Ndereba", new Date(2017, 3, 23, 19, 30), 112, 50);
let m2 = new Marathon_1.Marathon("Desisa", new Date(2011, 11, 24, 22, 20), 117, 12);
let results = [fb1, fb2, c1, c2, m1, m2];
let results2 = [...results];
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
