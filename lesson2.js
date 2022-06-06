/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/

for (let i = 10; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/

let Human = {
    name: "Alina",
    vorname: "Dobroskok",
    age: 22,
    myPet: true
};

console.log(Human);

/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

let text = array.join(" ");

alert( text );

/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/

let firstName = "Alina";
let lastName = "Dobroskok";

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

fullName(firstName, lastName);

/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/

let start = 21;
let finish = 67;

while (start < finish) {
    if (start % 2 !== 0) {
        console.log (start);
    }

    start++;
}


let name = "Патрик";
let secondName = "Жевтоня";
let vegetables = [
  'carrot',
  'cucumber',
  'potato'
];

console.log(`${vegetables[1]} ${vegetables[0]} ${vegetables[2]}`);

console.log(name + " " + secondName);

console.log(`${name} ${secondName}`);


