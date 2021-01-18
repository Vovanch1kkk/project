/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// let namberfikms;



// let a = promt('Какоф фильм вы смотрели?', ''),
//     b = +promt('Оцените фильм оценкой', '');

// const personalMovieDB = personalMovieDB.muvios[a] = b;
//
// console.log(personalMovieDB);

// function namberOffikms() {
//     namberfikms = +prompt('Сколько фильмов вы посмотрели?');
//     while(namberfikms == '' || namberfikms == null || isNaN(namberfikms)){
//         namberfikms = +prompt('Сколько фильмов вы посмотрели?');
//     }
// }
// namberOffikms();
// const personalMovieDB = {
//     count: namberfikms,
//     muvios: {},
//     actors:{},
//     genres:{},
//     privat: false
// }
//
// function muvis(){
//     for( let i = 0; i <1; i++) {
//         let a = prompt('Какой фильм вы смотрели недавно?'),
//             b = +prompt('Какую оценку вы поставите фильму');
//         if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//             personalMovieDB.muvios[a] = b;
//             console.log('done');
//         } else {
//             console.log('errors');
//             i--;
//         }
//     }
// }
// // muvis();
//
//
// function countFilms(){
//     let counF = personalMovieDB.count;
//     if(counF < 10){
//         alert('Просмотрено довольно мало фильмов');
//     }else if(counF == 10 || counF <=30){
//         alert('Вы классический зритель');
//     }else if (counF >=30){
//         alert('Вы киноман');
//     }else{
//         alert('Произошла ошибка');
//     }
// }
// // countFilms();
//
// function writeYourGenres(){
//
//     for(let i = 0; i<3; i++){
//         let ganrs = prompt(`Ваш лббимый жанр ${i}`);
//         personalMovieDB.genres[i] = ganrs;
//
//     }
// }
// writeYourGenres();
//
// function showMyDB(hiden){
//     if(!hiden){
//         console.log(personalMovieDB);
//     }else{
//         console.log('hidenDB');
//     }
// }
// console.log(personalMovieDB.genres);
// showMyDB(personalMovieDB.privat);



// function test(value, funct) {
// //     console.log(value);
// //     funct();
// // }
// //
// // function name(){
// //     console.log('Vova');
// // }
// //
// // test('privet',name);

// const option = {
//     name:'vova',
//     height: 165,
//     wdth:45,
//     colors:{
//         broder: 'whit',
//         bd: 'dark'
//     },
//
//     name: function () {
//         console.log('Vova');
// }
//
// }





// let count = 0;
//
// for(let key in option){
//
//     if(typeof(option[key]) === 'object'){
//         for(let i in option[key]){
//             console.log(`Ключ ${i} со значение ${option[key][i]}`);
//             count ++;
//         }
//     }else{
//         console.log(`Ключ ${key} со значение ${option[key]}`);
//         count++;
//     }
//
// }
//console.log(count);
//console.log(Object.keys(option).length);

// option.name();
//
// const {broder, bd} = option.colors;
// console.log(broder);



// let arr = [ 61, 23, 34, 433, 15];
// arr.sort(conpareNum);
// console.log(arr);
// function conpareNum(a,b){
//     return a-b;
// }
//
//  arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} в масиве ${arr}`);
// });

// let str = prompt('Vash produkt');
 //let produkt = str.split(", ");
 //console.log(produkt.join('; '));


// const obj1 = {
//     colore: 'red',
//     namber: 10,
//     color:{
//         r: 1,
//         b: 2
//     }
// };

// function copy(obj1 ) {
//     const newObj = {};
//
//     for(let i in obj1){
//         newObj[i] = obj1[i];
//     }
//     return newObj;
// }


// let test = copy(obj1);


// const add = {
//     d: 20,
//     c: "e"
// };
// метод assign для обєднання двох обєктів
// console.log(Object.assign(obj1, add));

//сплит оператор ... який дозволяє обєднувати два обєкта в один
// let obft = { ...obj1, ...add};
// console.log(obft);

// метод slice який дозволяє обєднувати масиви
 const art = [1,2,6,4];
const bbb = art.slice();
bbb.push(77);
console.log(bbb);

// слит оператор ... який дозволяє обєднувати масиви
// const g = [...art];
// g[2]=100;
// console.log(g);

// function namber(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
//
// namber(...art);

const personalMovieDB = {
    count: 0,
    muvios: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        }
    },
    muvis: function(){
    for( let i = 0; i <2; i++) {
        let a = prompt('Какой фильм вы смотрели недавно?'),
            b = +prompt('Какую оценку вы поставите фильму');
        if (a != null && b != null && a != '' && b != '' && a.length < 10) {
            personalMovieDB.muvios[a] = b;
            console.log('done');
        } else {
            console.log('errors');
            i--;
        }
    }
},
    countFilms: function(){
    let counF = personalMovieDB.count;
    if(counF < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if(counF == 10 || counF <=30){
        alert('Вы классический зритель');
    }else if (counF >=30){
        alert('Вы киноман');
    }else{
        alert('Произошла ошибка');
    }
},
    writeYourGenres: function(){

    for(let i = 1; i<3; i++){
        let ganrs = prompt(`Ваш лббимый жанр ${i}`);

        if(ganrs === '' || ganrs == null){
            console.log('Вы ввели некоректние данные!');
            i--;
        }else{
            personalMovieDB.genres[i-1] = ganrs;
        }

    }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })

},
    showMyDB: function(hiden){
    if(!hiden){
        console.log(personalMovieDB);
    }else{
        console.log('hidenDB');
    }
},
    toglVisiblMyDB: function (){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};

// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.genres);

let obj = {
    namber1: 25,
    namber2: 35,
    date: {
        october: 22,
        november: 14
    }
}

let obj2 ={
    color: "red",
    red: 2
}

let arr = [1,2,3];
let objClone = Object.assign(obj, obj2);
objClone = value
console.log(objClone);





















