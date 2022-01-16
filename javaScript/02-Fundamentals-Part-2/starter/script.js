

"use strict";

// strict mode

let x = 25;
//console.log(x);

// Funksiyalar

/*function showAge() {
  // parametri mavjud bo'lmagan funksiya
  const yearOfBirth = 1998;
  const now = 2022;
  const age = now - yearOfBirth;
  console.log("My age: " + age);
}

showAge();
showAge();

function dynamicShowAge(birthYear, currentYear) { // void funksiya
  // parametrli funksiya.
  const age = currentYear - birthYear;
  console.log("Your age is " + age);
}

dynamicShowAge(2000, 2022); // funksiyaga argumentlar kiritildi.*/

/*function showAge(birthYear, currentYear) {
  // void bo'lmagan funksiyalar
  const age = currentYear - birthYear;
  return age;
}

const studentName1 = "Farid";

const studentAge1 = showAge(1999, 2022); // void bo'lmagan paramentrli funksiya

console.log(`${studentName1} ${studentAge1} yoshda`);

const studentName2 = "Ozod";

const studentAge2 = showAge(1998, 2022);

console.log(`${studentName2} ${studentAge2} yoshda`);

const studentName3 = "Hojiakbar";

const studentAge3 = showAge(2003, 2022);

console.log(`${studentName3} ${studentAge3} yoshda`);

callSomeone("Farid", 1);

console.log("Calling ... Farid");*/

/*const screen = callSomeone("Farid", 10);

console.log(screen);

function callSomeone(contact, balance) {
  let result = "";
  if (balance > 0) {
    result = "Calling ..." + contact;
  } else {
    result = "No balance !!!";
  }
  return result;
}*/

/*console.log(callSomeone("Diyorbek", 4));
console.log(callSomeone("Oyatullo", 0));*/

// Arrow function

/*const callSomeone = function () {
  console.log("Calling... Farid");
};

const calculateAmount = () => {
  // arrow function
  console.log("1 $ 10,800 so'm");
};

const cash = calculateAmount2(500);
console.log(cash);

const calculateAmount2 = (amount) => {
  // arrow function
  const total = amount * 10800;
  return total;
};*/

//const calculateAmount = (amount) => amount * 10800;

/*function calculateAmount(amount) {
    return amount * 10800;
}*/

//console.log(calculateAmount(200));

/*function checkStudent(studentName) {
  let isStudent = false;

  if (
    studentName === "Farid" ||
    studentName === "Oyatullo" ||
    studentName === "Elyorbek"
  ) {
    isStudent = true;
  }
  return isStudent;
}

const giveInfo = (studentName) => {
  const isOurStudent = checkStudent(studentName); // checkStudent bu funksiya talaba bor yoki yo'qligini aniqlaydi
  if (isOurStudent) {
    console.log(studentName + " frontend talabasi.");
  } else {
    console.log("Bunday talaba bizda mavjud emas.");
  }
};

giveInfo("Farid");*/

//Coding challenge 1

/*showName();

function showName() { // void bo'lmagan
  console.log("Farid");
  //return 25;
}*/

/*const showName = () => {
  console.log("Farid");
};

showName();*/

/*const sumNumbers = (a, b) => a + b;

const c = sumNumbers(15, 25);
console.log(c);*/

/*const calcAverage = (score1, score2, score3) => {
  const total = (score1 + score2 + score3) / 3;
  return total;
};

const score1Dolphins = 85;
const score2Dolphins = 54;
const score3Dolphins = 41;

const averageScoreDolphins = calcAverage(
  score1Dolphins,
  score2Dolphins,
  score3Dolphins
);

const score1Koalas = 23;
const score2Koalas = 34;
const score3Koalas = 27;

const averageScoreKoalas = calcAverage(
  score1Koalas,
  score2Koalas,
  score3Koalas
);

function checkWinner(averageDolphins, averageKoalas) {
  let result = "";
  if (averageDolphins >= 2 * averageKoalas) {
    result = `Delfinlar g'alaba qozonadi (${averageDolphins} va ${averageKoalas})`;
  } else if (averageKoalas >= 2 * averageDolphins) {
    result = `Koalalar g'alaba qozonadi (${averageKoalas} va ${averageDolphins})`;
  } else {
    result = `Hech kim g'alaba qozonmadi. (${averageKoalas} va ${averageDolphins})`;
  }
  return result;
}

const finalResult = checkWinner(averageScoreDolphins, averageScoreKoalas);
console.log(finalResult);*/

// Arrays (Massivlar)

/*const friend1 = "Diyorbek";
const friend2 = "Farid";
const friend3 = "Oyatullo";
const friend4 = "Elyorbek";
const friend5 = "G'iyosiddin";
const friend6 = "Shoxboz aka";
const friend7 = "Hojiakbar";
const friend8 = "Baxtiyor";

const friends = [
  // bir nechta ma'lumotlarni saqlash imkoniyati
  "Diyorbek",
  "Farid",
  "Oyatullo",
  "Elyorbek",
  "G'iyosiddin",
  "Shoxboz aka",
  "Hojiakbar",
  "Baxtiyor",
  "Akbar",
];

console.log(friends);
console.log(friends[0] + " " + friends[1]);
console.log(friends[7]);
console.log(friends.length);*/

// array - Data Structure - Non primitive (Yakka bo'lmagan ma'lumotlar)

/*const userInfo = [
  "Ozodbek Oripjonov",
  1998,
  "Software engineer",
  "Teacher",
  false,
];

console.log(userInfo);*/



/*const friends = [
  "Diyorbek",
  "Farid",
  "Oyatullo",
  "Elyorbek",
  "G'iyosiddin",
  "Shoxboz aka",
  "Hojiakbar",
  "Baxtiyor",
  "Akbar",
];

console.log(friends);

friends[9] = "Muhammad Ali";

console.log(friends);

friends[1] = "Ikrom";

console.log(friends);

friends[10] = "Doston";

console.log(friends);*/

/*let friends = ["Diyorbek", "Farid", "Oyatullo", "Elyorbek"];

// Add yangi ma'lumot qo'shish

friends.push("Baxtiyor");

console.log(friends);

// Boshidan qo'shish

friends.unshift("Hojiakbar");

console.log(friends);

// Ohiridagi ma'lumotni o'chirish

friends.pop();

console.log(friends);

// Boshidagi ma'lumotni o'chirish

friends.shift();
console.log(friends);

// Tanlab o'chirish

friends.splice(1, 1);
console.log(friends);

//friends = [];

//console.log(friends);*/

// const bills = [125, 555, 44];

//change





const birthYears = [1998,1999,2003,1996];
 console.log(birthYears);

/*const calcAge = (year) => {
    return 2021- year ;
};*/
const calcAge = (year) => 2021- year ;

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);

const ages = [age1,age2,age3];

console.log(ages);




const bills = [430,555,115,44];
console.log(`Summalar ${bills}`);

const calcTip = (bills) => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2 ;

const tips1 = calcTip(bills[0]);
const tips2 = calcTip(bills[1]);
const tips3 = calcTip(bills[2]);
const tips4 = calcTip(bills[3]);

const allTips = [tips1,tips2,tips3,tips4];
console.log(`Choychaqalar ${allTips}` );

const total = bills[1] + tips2;

console.log(
    `Hisob ${bills[1]}, choychaqa ${tips2} va umumiy ${total}`
);


