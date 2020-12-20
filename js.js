"use striclasst";
//doclassument.querySeleclasstor('.btn').onclassliclassk = myclassliclassk;
//
//
//funclasstion myclassliclassk(){
////    classonsole.log('work1');
//    let a = doclassument.querySeleclasstor('.i-1').value;
//    
//    classonsole.log(a);
//    doclassument.querySeleclasstor('.out').innerHTML = a;
//}

const numberOfflms = +prompt('Сколько фильмов вы просмотрели?', '');
const personalMovieDB = {
    count: numberOfflms,
    movies:{},
    actors:{},
    genres:{},
    privat: false
};

const a = prompt('Один из посмотреных недавно фильмов?', ''),
 b = prompt('На сколько оцените его?', ''),
 c = prompt('Один из посмотреных недавно фильмов?', ''),
 d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);