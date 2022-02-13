"use strict";

//--------------------!!! GIT !!!--------------------

// $ git init
// $ git remote add origin https://github.com/kiselkov131100/aaaa.git
// $ git add .
// $ git commit -m 'init first comment'
// $ git push origin main

// $ git checkout -b example
// $ git add .
// $ git commit -m 'new branch example'
// $ git push origin example

// $ git checkout main
// $ git pull origin main

//--------------------!!! УСЛОВИЯ И ЦИКЛЫ !!!--------------------

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

/* 3. Создайте 5 чисел и найдите наибольшее при помощи условий */

/* 4. Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
Вывести в консоль. Пример: 1 это нечетное; 2 это четное; и тд. */

/* 5. У нас есть студенты: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест
и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.
Оценки рассчитываются следующим образом:
если процент > 90 - 5 если процент > 80 - 4 если процент > 70 - 3 если процент > 60 - 2
Ответ вывести следующим образом: Вася - 2, Зина - 3 и тд */

/* 6. Написать цикл, который будет итерироватся от 1 до 100.
На каждой итерации цикла нужно проверить: если число кратное 3 - то вывести в консоль строку Fizz,
если число кратное 5 - то вывести в консоль строку Buzz,
если число кратное и 3, и 5 - то вывести FizzBuzz */

//--------------------!!! ФУНКЦИИ !!!--------------------

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

/* 3. Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
которое потребовалось для достижения результата. */

function quantityIteration(num) {
  let i = 0;
  for (; num >= 10; i++) {
    num /= 2;
  }
  return console.log(`Потребовалось ${i} итераций`);
}
quantityIteration(1000);

/* 4. Напишите функцию, которая
- запрашивает у пользователя число от 1 до 10
- генерирует рандомное число от 1 до 10(именно целое число, чтобы без десятых, сотых и т.д.)
- выводит в алерт юзеру сообщение о том, что он угадал число, если числа совпали,
и, соответственно - нет, если не угадали
Требования к выполнению этой задачи:
- генерирование числа должно быть написать в функции - getRandomNumber
- сравнение числа введенного юзера и сгенерированное программой должно происходить
в функции - areNumbersEqual
- функции getRandomNumber и areNumbersEqual должны быть описаны 
в отдельном от основной программы файле 
- если юзер ввел некорректно число (> 10, или какую-нибудь строку) - 
сказать ему об этом и предложить сыграть еще раз */

/* 5. Напишите функцию, которая будет принимать строку, нужно вернуть новую строку, 
которая будет делать заглавным
первый символ каждого слова. */

/* 6. Написать функцию, которая принимает любое количество чисел и возввращает их сумму. */

function sumArg() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return console.log(result);
}
sumArg(1, 2, 3, 4, 5);

/* 7. Написать функцию которая будет принимать число ( дефолтное значение 2021) 
и вычисляет сумму цифр из которых состоит число.
Для 2021 это будет 5. */

function sumNumber(number = 2000) {
  let result = 0;
  number = String(number);
  for (let i = 0; i < number.length; i++) {
    result += Number(number[i]);
  }
  return console.log(result);
}
sumNumber();

/* 8. Написать функцию, которая преобразуем любую строку в строку написанную
кебаб кейсом(все буквы с маленькой и на месте пробелов - тире).
Например ‘Hello World’ - ‘hello - world’; */

/* 9. Написать функцию, которая из любой фразы сделает и вернёт её аббревиатуру. 
Например: ‘Республика Беларусь’ -> ‘РБ’
‘Минск’ -> ‘М’ */

function creatAbbr(str) {
  let words = str.split(" ");
  let word = "";
  let abbr = "";
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    abbr += word[0];
  }
  return console.log(abbr.toUpperCase());
}
creatAbbr("Министерство Внутренних Дел");

/* 10. Написать код, который заменит регистр каждого символа на противоположный.
Например 'Hello world' -> 'hELLO WORLD' */

//--------------------!!! ОБЪЕКТЫ !!!--------------------

/* 1. Написать ф-цию, которая принимает объект и меняет местами ключи и значения
function convertObject(obj) {}
convertObject({ a: "b", c: "d" }); // => { b: 'a', d: 'c' } */

function convertObject(obj) {
  for (let key in obj) {
    let oldValue = obj[key];
    let newValue = key;
    obj[oldValue] = newValue;
    delete obj[key];
  }
  return obj;
}
let obj = {
  a: "b",
  c: "d",
};
console.log(obj);
console.log(convertObject(obj));

/* 2. Написать ф-цию, которая принимает объект, где в качестве значений - числа
Функция должна проверить, есть ли среди значений четные числа и вернуть true/false
function isEvenValue(obj) {}
isEvenValue({ x: 1, y: 2 }); // => true
isEvenValue({ x: 1, y: 1 }); // => false */

function isEvenValue(objNum) {
  for (let key in objNum) {
    if (objNum[key] % 2 == 0) {
      return true;
    }
  }
  return false;
}
let objNum = {
  x: 1,
  y: 2,
  z: 3,
  k: "asdas",
  o: true,
};
console.log(isEvenValue(objNum));

//--------------------!!! МАССИВЫ !!!--------------------

/* 1. Написать функцию, которая принимает параметрами два массива
и сливает их в объект так, что элементы первого массива становятся ключами, а второго - значениями. */

function getObj(arr1, arr2) {
  let obj = {};
  for (let key of arr1) {
    let value;
    for (value of arr2) {
    }
    obj[key] = value;
  }
  console.log(obj);
}
getObj(["a", "b", "c"], [1, 2, 3]);

/* 2. Дан массив вида[1, 2, 3, 4, 5, 6, 7, 8, 9].Сделайте функцию,
которая будет разбивать его в двухмерный массив.
Первым параметром функция принимает массив для разбиения,
а вторым - сколько элементов должно быть в подмассиве. */

function getNewArray(obj, num) {
  let newArr = new Array(Math.ceil(obj.length / num));
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = obj.splice(0, num);
  }
  return console.log(newArr);
}
getNewArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

/* 3. Создать массив объектов для юзеров. Пример:
[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
Написать скрипт, который будет на выходе отдавать два массива.Первый с совершеннолетними пользователями,
второй с несовершеннолетними. */

let users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Vova", age: 4 },
];
let adultUser = users.filter(function (item) {
  return item.age >= 18;
});
let minortUser = users.filter(function (item) {
  return item.age < 18;
});
console.log(minortUser);
console.log(adultUser);

/* 4. Создайте массив из 5 любых элементов.
Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
Склонированный массив вывести в консоль */

let arrTASK_4 = ["A", "B", "C", "D", "E"];
let cloneArr = arrTASK_4.slice();
console.log(cloneArr);

/* 5. Написать функцию, которая принимает в качестве параметра массив чисел, фильтрует его и
возвращает массив нечетных чисел[1, 2, 3] -> [1, 3] */

function getUnevenNum(arr) {
  arr = arr.filter(function (item) {
    return item % 2 == 1;
  });
  return console.log(arr);
}
getUnevenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21]);

/* 6. Написать функцию, которая принимает в качестве параметра массив чисел и возвращает
массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16] */

function getSquaresNum(arr) {
  arr = arr.map(function (item) {
    return item ** 2;
  });
  return console.log(arr);
}
getSquaresNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21]);

/* 7. Написать функцию, которая в качестве параметра принимает массив с разными типами данных.
возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет */

function getBoolean(arr) {
  for (let i of arr) {
    if (typeof i == "string") {
      return console.log(true);
    }
  }
  return console.log(false);
}
getBoolean([true, 1, 2, null, " "]);

/* 8. Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
и возвращает массив значений лежащих в поле age
function getAges(array) {}
getAges([
  { name: "Sergey", age: 33 },
  { name: "Daria", age: 33 },
]); // => [33, 33] */

function getAge(arr) {
  for (let i of arr) {
    console.log(i.age);
  }
}
getAge([
  { name: "Sergey", age: 33 },
  { name: "Daria", age: 30 },
]);

/* 9. Написать функцию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
и вторым параметром ключ, по которому надо собрать массив
function getAges(array, key) {}
getAges(
  [
    { name: "Sergey", age: 33 },
    { name: "Daria", age: 33 },
  ],
  "name"
); // => ['Sergey', 'Daria']
getAges(
  [
    { name: "Sergey", age: 33 },
    { name: "Daria", age: 33 },
  ],
  "age"
); // => [33, 33] */

/* 10. Написать ф-цию, которая принимает массив объектов.
Значения этих объектов - числа. Вернуть объект с суммами ключей
function calculate(array) {}
calculate([
  { x: 1, z: 2, y: 3 },
  { x: 10, z: 21, y: 4 },
  { x: 2, z: 3, y: 4 },
  { a: 1, b: 2 },
]);
// => { x: 13, z: 26, y: 11, a: 1, b: 2 } */

function calculate(arr) {
  let newObj = {};
  for (let obj of arr) {
    for (let i in obj) {
      if (newObj[i] == undefined) {
        newObj[i] = 0;
      }
      newObj[i] += obj[i];
    }
  }
  return console.log(newObj);
}
calculate([
  { x: 2, z: 100, y: 3 },
  { x: 10, z: 21, y: 4 },
  { x: 2, z: 3, y: 4 },
  { a: 1, b: 2 },
]);

/* 11. Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
Напишите код, который уберет эти дубликаты из созданного массива. */

let oldArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8];
let newArr = [];
oldArr.filter(function (item, index) {
  if (oldArr.indexOf(item) == index) {
    newArr.push(item);
  }
});
console.log(newArr);

/* 12. Напишите код, который подсчитает количество повторяющихся элементов в массиве.
И вывести это количество в консоль. */

let arrTask_10 = [1, 3, 4, 1, 1, 3, 4, 5];
let result = {};
for (let value of arrTask_10) {
  if (result[value] != undefined) {
    result[value]++;
  } else {
    result[value] = 1;
  }
}
console.log(result);

/* 13. Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1] */

let oldArr_TASK_11 = [1, 2, 3];
let newArr_TASK_11 = oldArr_TASK_11.reverse();
console.log(newArr_TASK_11);

/* 14. Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce) */

let arr_TASK_12 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sumElements = arr_TASK_12.reduce(function (sum, item) {
  return sum + item;
}, 0);
console.log(sumElements);

/* 15. Создать массив из 10 чисел. Необходимо создать новый массив,
в котором числа будут возведены в квадрат.
Например: [1,2,3] -> [1,4,9]. */

let oldArrTask13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArrTask13 = oldArrTask13.map(function (item) {
  return item ** 2;
});
console.log(newArrTask13);

/* 16. Создать массив объектов с полями: имя, пол.
Разделить этот массив на 2 массива (женский и мужской). Использовать reduce. */

/* 17. Написать функцию, которая принимает первым аргументом массив,
а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
(indexOf, findIndex не использовать) */

function getIndex(arr, num) {
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] == num) {
      return console.log(i);
    }
  }
  return console.log((i = -1));
}
getIndex(["a", "b", 1, 2], 0);

/* 18. Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
Для сортировки можно использовать метод sort,
но еще лучше будет если попробовать написать свою сортировку. */

function getSortArr(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return console.log(arr);
}
getSortArr([5, 2, 8, 11, 9, 27]);

/* 19. Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
одинаковые у них элементы или нет. */

function compareArr(a, b) {
  let strArr1 = a.join(",");
  let strArr2 = b.join(",");
  return console.log(strArr1 == strArr2);
}
compareArr([1, 2, 3], [1, 2, 4]);

/* 20. Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
вернет массив элементами которого являются эти части.
Пример функции:
splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] */

function splitArray(obj, num) {
  let newArr = new Array(Math.ceil(obj.length / num));
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = obj.splice(0, num);
  }
  return console.log(newArr);
}
getNewArray([1, 2, 3, 4, 5], 2);

/* 21. Напишите функцию, которая очищает массив от нежелательных значений,
таких как false, undefined, пустые строки, 0, null. */

function getCleanArr(arr) {
  let newArr = arr.filter(function (item) {
    return item != 0 && item != null;
  });
  return console.log(newArr);
}
getCleanArr([0, 1, null, 2, 3, null, undefined, false, ""]);

/* 22. Создайте 2 массива с разной длинной. Необходимо написать код, который создаёт массив элементов 
представляющих собой сумму соответствующих элементов заданных массивов.*/
