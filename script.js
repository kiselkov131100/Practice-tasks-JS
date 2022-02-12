"use strict";

//             !!! УСЛОВИЯ И ЦИКЛЫ !!!

/* 1. Записаться на курсы, отучиться и получить оффер */

let chatToTMS = false;
let pay = false;
const WISH = true;
let classes = 0;
const CLASSES_END = 52;
let interview = 0;
const MAX_NUMBER_INTERVIEW_IN_MONTH = 5;
let offer = false;

if (chatToTMS && WISH) {
  pay = true;
} else {
  chatToTMS = true;
  pay = true;
}

function lessons() {
  for (let i = classes; i < CLASSES_END; i++) {
    classes++;
  }
}

if (pay) {
  lessons();
} else {
  pay = true;
  lessons();
}

if (classes === 52) {
  for (let i = interview; i < MAX_NUMBER_INTERVIEW_IN_MONTH; i++) {
    interview++;
  }
}

if (interview > 0) {
  offer = true;
  console.log("i have offer");
} else {
  offer = false;
  console.log("i have not offer");
}

if (offer) {
  console.log("ya molodets, tms super");
} else {
  console.log("poprobuyu v sled mesyace!");
}

/* 2. Сдать цт, поступить в универ, закрыть все сессии и получить диплом */

const SERTIFICATE = prompt("skolko ballov v atteatate?");
const MAT = prompt("skolko ballov po matematike?");
const FIZ = prompt("skolko ballov po fizike?");
const RUS = prompt("skolko ballov po russkomu?");
const SUMM_TESTS = +SERTIFICATE + +MAT + +FIZ + +RUS;
const MIN_SUMM_TESTS = 300;
let univercity = false;
let sessions = 0;
let passedSessions;

if (SUMM_TESTS > MIN_SUMM_TESTS) {
  univercity = true;
  console.log("ya postupil");
} else {
  univercity = false;
  console.log("privet armia");
}

if (univercity) {
  passedSessions = prompt("skolko sessiy sdal?");
  for (let i = sessions; i < passedSessions; i++) {
    sessions++;
  }
}

switch (sessions) {
  case 8:
    console.log("ya vypusknik univera");
    break;
  default:
    console.log("vsyo-taki armia");
}

//             !!! ФУНКЦИИ !!!

/* 1. Напишите функцию, которая при вызове будет принимать переменную name
(например, «Василий») и выводить строку (в нашем случае «Привет, Василий»). В случае
отсутствующего аргумента выводить «Привет, гость» */

function sayHello(name = "гость") {
  console.log("Привет, " + name);
}
sayHello("Василий");

/* 2. Создайте функцию rgb(), которая будет принимать три числовых аргумента и
возвращать строку вида «rgb(23;100;134)». Если аргументы не заданы, считать их (1; 2; 3) */

function createRgb(a = 0, b = 1, c = 2) {
  console.log(`rgb(${String(a)}; ${String(b)}; ${String(c)})`);
}
createRgb();
