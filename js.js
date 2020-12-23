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
    privat: {}
};
//
// const a = prompt('Один из посмотреных недавно фильмов?', ''),
//     f = prompt('актер'),
//     priv1 = confirm("privat film?"),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из посмотреных недавно фильмов?', ''),
//      z = prompt('актер'),
//     priv2 = confirm("privat film?"),
//      d = prompt('На сколько оцените его?', '');
//
//
//
//
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// personalMovieDB.actors[a]= f;
// personalMovieDB.actors[c]= z;
// personalMovieDB.privat[a]= priv1;
// personalMovieDB.privat[c]= priv2;
//
//
//
//
// console.log(personalMovieDB);

// switch ('Vova') {
//     case 'Vasia':
//         console.log('NEA');
//         break;
//     case 'Vova':
//         console.log('I');
//         break;
//     default: console.log('nety vovu');
//         break;
// }
// let num = 50;
// while (num < 55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num<55);

// for(let i = 1; i<=8; i++){
//     if(i===6){
//         break;
//         // зупиняє цикл и дальше 5 не иде
//         continue;
//         // лише цивру 6 якщо вона попадає в перебори и цикл продовжується
//     }
//     console.log(num);
//     num++;
// }

for( let i = 1; i<2; i++){


        a = prompt('Один из посмотреных недавно фильмов?', ''),
        b = prompt('На сколько оцените его?', '');


    if(a != null && b != null && a != ' ' && b != ' ' && a.length < 50){

        personalMovieDB.movies[a] = b;
        console.log(personalMovieDB);

    }

    else{
        console.log('error');
        a = prompt('Один из посмотреных недавно фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        i--;
    }




}