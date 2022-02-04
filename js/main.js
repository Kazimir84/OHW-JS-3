// --створити масив з:
// - з 5 числових значень
let arrNum = [1,5,10,15,20];
// - з 5 стічкових значень
let arrStr = ['Java', 'Script', 'JS', 'ECMAScript', 'HTML'];
// - з 5 значень стрічкового, числового та булевого типу
let arrMix = [5, 'JS', true, 'HTML', 'CSS'];
// - та вивести його в консоль
console.log('Array Number = ', arrNum);
console.log('Array String = ', arrStr);
console.log('Array Mix = ', arrMix);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpt = [];
    arrEmpt[0] = 'JS';
    arrEmpt[1] = true;
    arrEmpt[2] = 2022;
    arrEmpt[3] = null;
    arrEmpt.push('CSS');
    arrEmpt.unshift('HTML');
    arrEmpt.push('Node JS');
    arrEmpt.push(false);
    arrEmpt.push(2021n);
    arrEmpt.push(undefined);
console.log('Array Empty = ', arrEmpt);
console.log('Array Empty0 = ', arrEmpt[0]);
console.log('Array Empty1 = ', arrEmpt[1]);
console.log('Array Empty2 = ', arrEmpt[2]);
console.log('Array Empty3 = ', arrEmpt[3]);
console.log('Array Empty4 = ', arrEmpt[4]);
console.log('Array Empty5 = ', arrEmpt[5]);
console.log('Array Empty6 = ', arrEmpt[6]);
console.log('Array Empty7 = ', arrEmpt[7]);
console.log('Array Empty8 = ', arrEmpt[8]);
console.log('Array Empty9 = ', arrEmpt[9]);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < arrEmpt.length; i++) {
    const arrEmptElement = arrEmpt[i];
    document.write(`<div>${arrEmptElement}</div>`);
};
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < arrEmpt.length; i++) {
    const arrEmptElement = arrEmpt[i];
    document.write(`<div>${i} ${arrEmptElement}</div>`);
};

for (let arrEmptElement of arrEmpt) {
    console.log('Array Empty V2 = ', arrEmptElement);
    document.write(`<div>${arrEmptElement}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let text = 0;
while (text <= 20) {
    document.write(`<h1>Number ${text}</h1>`);
    text++;
};
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let text2 = 0;
while (text2 <= 20) {
    let i = text2;
    document.write(`<h1>${i} Number ${text2}</h1>`);
    text2++;
};
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumber = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
for (let i = 0; i < arrNumber.length; i++) {
    const arrNumberElement = arrNumber[i];
    console.log('Array Number', arrNumberElement);
};

for (let number of arrNumber) {
    console.log('Array Number V2 = ', number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrString = ['CSS', 'NodeJS', 'WebPack', 'OKTEN','JSON', 'Java', 'Script', 'JS', 'ECMAScript', 'HTML'];
for (let i = 0; i < arrString.length; i++) {
    const arrStringElement = arrString[i];
    console.log('Array String = ', arrStringElement);
};

for (let string of arrString) {
    console.log('Array String V2 = ', string)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrMixed = [5, 'JS', true, 'HTML', 'CSS', 'OKTEN', false, 2022n, null, undefined];
for (let i = 0; i < arrMixed.length; i++) {
    const arrMixedElement = arrMixed[i];
    console.log('Array Mixed = ', arrMixedElement);
};

for (let arrMixedElement of arrMixed) {
    console.log('Array Mixed V2 = ', arrMixedElement)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arrMixed2 = [5, 'JS', true, 'HTML', 'CSS', 'OKTEN', false, 2022n, null, undefined];
for (let i = 0; i < arrMixed2.length; i++) {
    const arrMixed2Element = arrMixed2[i];
    if (typeof arrMixed2Element === "boolean") {
        console.log('Boollean only = ', arrMixed2Element);
    };
};
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arrMixed3 = [5, 'JS', true, 'HTML', 'CSS', 'OKTEN', false, 2022n, null, undefined];
for (let i = 0; i < arrMixed3.length; i++) {
    const arrMixed3Element = arrMixed3[i];
    if (typeof arrMixed3Element === "number") {
        console.log('Number only = ', arrMixed3Element);
    };
};
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let arrMixed4 = [5, 'JS', true, 'HTML', 'CSS', 'OKTEN', false, 2022n, null, undefined];
for (let i = 0; i < arrMixed4.length; i++) {
    const arrMixed4Element = arrMixed4[i];
    if (typeof arrMixed4Element === "string") {
        console.log('String only = ', arrMixed4Element);
    };
};
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let emptyArr = [];
emptyArr[0] = 'JS';
emptyArr[1] = true;
emptyArr[2] = 2022;
emptyArr[3] = null;
emptyArr[4] = 'CSS';
emptyArr[5] = 'HTML';
emptyArr[6] = 'Node JS';
emptyArr[7] = false;
emptyArr[8] = 2021n;
emptyArr[9] = undefined;
for (let i = 0; i < emptyArr.length; i++) {
    const emptyArrElement = emptyArr[i];
    console.log('Ampty Array = ', emptyArrElement);
};
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <= 10; i++) {
    console.log('Cicle = ', i);
    document.write(`<p>Cicle = ${i}</p>`);
};
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <= 100; i++) {
    console.log('Cicle2 = ', i);
    document.write(`<p>Cicle2 = ${i}</p>`);
};
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let step = 0;
for (let i = 0; i < 51; i++) {
    console.log('Cicle3 = ', step);
    document.write(`<p>Cicle3 = ${step}</p>`);
    step += 2;
};

for (let i = 0; i <= 100; i++) {
    console.log('Cicle3.2 = ', i);
    document.write(`<p>Cicle3.2 = ${i}</p>`);
    i = i+1;
};
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if (i%2 === 0) {
        console.log('Cicle4 = ', i);
        document.write(`<p>Cicle4 = ${i}</p>`);
    };
};
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if (i%2) {
        console.log('Cicle5 = ', i);
        document.write(`<p>Cicle5 = ${i}</p>`);
    };
};