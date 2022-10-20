"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_homeGoals, _Football_awayGoals, _Marathon_second, _Marathon_minute, _Calvinball_endScore;
class Football {
    constructor(winner, date, homeGoal, awayGoals) {
        _Football_homeGoals.set(this, void 0);
        _Football_awayGoals.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Football_homeGoals, homeGoal, "f");
        __classPrivateFieldSet(this, _Football_awayGoals, awayGoals, "f");
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        this.winner = winner;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_homeGoals, "f") + " - " + __classPrivateFieldGet(this, _Football_awayGoals, "f");
    }
}
_Football_homeGoals = new WeakMap(), _Football_awayGoals = new WeakMap();
class Marathon {
    constructor(winner, date, minute, second) {
        _Marathon_second.set(this, void 0);
        _Marathon_minute.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Marathon_minute, minute, "f");
        __classPrivateFieldSet(this, _Marathon_second, second, "f");
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        this.winner = winner;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    result() {
        return "Marathon: " + __classPrivateFieldGet(this, _Marathon_minute, "f") + " mins " + __classPrivateFieldGet(this, _Marathon_second, "f") + " sec";
    }
}
_Marathon_second = new WeakMap(), _Marathon_minute = new WeakMap();
class Calvinball {
    constructor(winner, date) {
        _Calvinball_endScore.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Calvinball_endScore, Math.floor(Math.random() * 100 + 10), "f");
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        if (winner === "Hobbes" || winner === "Calvin") {
            this.winner = winner;
        }
        else {
            throw "Winner can only be Calvin or Hobbes";
        }
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    result() {
        return "Calvinball: " + __classPrivateFieldGet(this, _Calvinball_endScore, "f") + " points";
    }
}
_Calvinball_endScore = new WeakMap();
let fb1 = new Football("Real Madrid", new Date(Date.now()), 6, 2);
let fb2 = new Football("Sevilla", new Date(Date.now()), 3, 1);
let c1 = new Calvinball("Calvin", new Date(Date.now()));
let c2 = new Calvinball("Hobbes", new Date(Date.now()));
let m1 = new Marathon("Ndereba", new Date(Date.now()), 112, 50);
let m2 = new Marathon("Desisa", new Date(Date.now()), 117, 12);
let results = [fb1, fb2, c1, c2, m1, m2];
results.forEach((e) => {
    console.log(e.result());
});
