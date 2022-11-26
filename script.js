/*
let fruits = ['Apple', 'Orange', 'Plum'];
// Длина массива = 3
// Последний индекс = 2(Длина массива-1)
// Массив: ['Apple', 'Orange', 'Plum'] = 3
// Индексы:    0          1         2

console.log(fruits);

fruits[1] = 'Tangerine';

console.log(fruits); 

fruits[3] = 'Pear';

//Длина массива
console.log(fruits.length); 

let arr = ['Apple', {name: 'John'}, true, function() {console.log('Hello!'); }];

console.log(arr[1].name); 
arr[3] ();
// function sum() = {
    2+3; 
// } 
// sum();

console.log(fruits[fruits.length - 1]); 
console.log(fruits.at(-1)); 
//Метод at() - возвращает элемент массива с заданыым индексом
//array.at(-1) - возврщает последний элемент в массиве

//Очередь
//shift <= /*****/

//Стек
/*
|||||| <= push pop=>
||||||
||||||
*/
/*
console.log(fruits);

// pop - удаляет последний элемент из массива и возвращает его 

let temp = fruits.pop();
console.log(fruits);
console.log(temp);

//push - добавляет элементы в конец массива 

fruits.push('Mango');
console.log(fruits);

//shift - удаляет из массива первй элемент и возвращает его
fruits.shift();
console.log(fruits);

//unshift - добавляет лемент в начало массива 
fruits.unshift('Peach', 'Grape');
console.log(fruits);



let fruits2 = fruits;
fruits2.pop();

console.log(fruits === fruits2);
console.log(fruits2);

// Массив: [1 2 3 4 5]
// Индексы: 0 1 2 3 4 

// let fruits = ['Apple', 'Orange', 'Plum'];
// Apple, Orange, Plum
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//key - перебирает все элементы массива
for (let key of fruits) {
    console.log(key);
}
*/

/*
let newArray = [20, 30];
newArray.push(1, 3, 10, -10);
console.log(newArray);

//10 - 30

let numbers = [];
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// let i= 1; // i=1

// i<=3; // 4<=3 == false
// {console.log(i); } // 1 2 3
// i++ // 1+1=2+1=3+1=4

for (let i = 10; i <= 30; i++) {
    numbers.push(i);
}

console.log(numbers);


for (let i = 80; i <= 100; i++) {
    if (i % 2 === 0){
    numer.push(i);
    }
}
console.log(numer);



// Вывести все элементы массива пока не встретится элемент -1

let newNumb = [10, 20, 5, -1, 15, -10, 2];

for (let key of newNumb) {
    if (key ===-1) {
        break
    } else {
    console.log(key);
}
}
*/
/*
let names = 'Вася , Петя , Миша';

let arr = names.split(', ');
console.log(arr);


let input = 'Иван Петров';
let info = input.split(' '); //['Иван', 'Петров']
console.log(info);

let [a, b] = [1, 2];

console.log(a, b);

let [name, lastName] = ['Иван', 'Петров'];
console.log(name);
console.log(lastName);
*/


let input = 'Петров Иван Степанович';

let [lastName, name, secondName] = input.split(' ');
// console.log(lastName); 
console.log(lastName);
console.log(name);
console.log(secondName);


function hi(userInfo) {
let [ , name, secondName] = userInfo;
    console.log(`Привет, меня зовут ${name} ${secondName}`);
}

hi(input.split(' '));