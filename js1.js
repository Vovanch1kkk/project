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

let namberfikms;



// let a = promt('Какоф фильм вы смотрели?', ''),
//     b = +promt('Оцените фильм оценкой', '');

// const personalMovieDB = personalMovieDB.muvios[a] = b;
//
// console.log(personalMovieDB);

function namberOffikms() {
    namberfikms = +prompt('Сколько фильмов вы посмотрели?');
    while(namberfikms == '' || namberfikms == null || isNaN(namberfikms)){
        namberfikms = +prompt('Сколько фильмов вы посмотрели?');
    }
}
namberOffikms();
const personalMovieDB = {
    count: namberfikms,
    muvios: {},
    actors:{},
    genres:{},
    privat: false
}

function muvis(){
    for( let i = 0; i <1; i++) {
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
}
// muvis();


function countFilms(){
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
}
// countFilms();

function writeYourGenres(){

    for(let i = 0; i<3; i++){
        let ganrs = prompt(`Ваш лббимый жанр ${i}`);
        personalMovieDB.genres[i] = ganrs;

    }
}
writeYourGenres();

function showMyDB(hiden){
    if(!hiden){
        console.log(personalMovieDB);
    }else{
        console.log('hidenDB');
    }
}
console.log(personalMovieDB.genres);
showMyDB(personalMovieDB.privat);
