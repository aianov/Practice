
/*   ПРИВЕТ ТОМУ КТО ЗДЕСЬ ОКАЗАЛСЯ. это мой первый файл добавленный на гитхаб в репозитории Practice
Здесь особо ничего нету. да и вообще не думаю что тут кто то что то найдет но все же авзвзавзав мне просто делать нечего. сейчас 00:20 11.02.2023 по казахстанскому.. на данный момент я изучаю обьекты и взаимодействия с ними. если честно очень жду когда выйду на работу. будущему мне привет! ахвхвахва мне и вправду делать нечего. оххххх я одинок поэтому пишу какую то дичь разговаривая сам с собой... похоже мне нужно завести друзей :D   Ну чтож спасибо что дочитал кем бы ты ни был. я надеюсь что поднял тебе настроение. не останавливайся в развитии и иди вперед ни смотря ни на что прямо как я! Будущему мне: просто иди вперед как ты всегда это делал, я надеюсь у тебя уже все получилось и ты успешный frontend разработчик :)   */





/* =============================================Проверка объекта на наличие значения============================================== */

//in
const some = {
    user: 'nics',
    age: 16,
    male: 'boy'
};
console.log('user' in some);
//true, In - проверяет какое то значение в переменной объекта


//Функция hasOwnProperty('')
console.log(some.hasOwnProperty('user'));
//true, проверило переменную в обьекте на наличие заданного значения


//проверка на наличие переменной бещ использования in, "hOP"
if (some.user) {
    console.log(`Найдено имя пользователя в объекте some: "${some.user}"`)
}
//если в обьекте some найдена переменная user то выполняется следующая команда:





/* =============================================Конвертация обьекта в строчку и строчку в обьект============================================== */

//Функция .toString() и JSON.stringify(), конвертация из обьекта в строчку
console.log(some.toString()); //[object Object], при попытке конвертировать обьект some в тип string, происходит вот такая ошибка. так что лучше писать вот так:
console.log(JSON.stringify(some)); //{"user":"nics","age":16}, теперь это тип данных string, давайте проверим использовав typeof:
console.log(typeof JSON.stringify(some)); //string

//Функция JSON.parse() Конвертация из строчки в объект
const str = JSON.stringify(some);
const obj = JSON.parse(str);
console.log(str); //{user: 'nics', age: 16} typeof: string
console.log(obj); //{user: 'nics', age: 16} typeof: object, все сработало, мы переделали str строчку в РЕАЛЬНЫЙ обьект





/* =============================================Цикл for in для Объектов============================================== */

for (let i in some) {
    console.log(i);
} // name, age, male. Оно вывело все переменные в нашем обьекте. короче вот такой for in работает так чтооо... если у нас в обьекте 5 переменных то оно берет и пишет их по отдельности. ВАЖНО ЗАМЕТИТЬ!: оно вывело только название переменных но не их значение внутри, чтобы вытащить значение в обьекте используем вот такую штуку:
for (let i in some) {
    const value = some[i];
    console.log(`${i}: ${value}`);
} // user: nics, age: 16, male: boy. как вы видите мы можем еще и значения доставать, это просто и логично (ага кнш я даже сам сначала не смог додуматься как значение достать ...)



const bigobj = {
    age: 16,
    psefdo: {
        nick1: 'nix',
        nick2: 'nics',
        nick3: 'nics57'
    },
    male: 'boy'
}       
for (let i in bigobj.psefdo) {
    const bigobjval = bigobj.psefdo[i];
    console.log(`${i}: ${bigobjval}`);
} //мы взяли и и достали обьект которйы находитмя в обьекте, его данные и значения.





/* ======================================Переделываем обьект в массив, метод: Object.============================================== */

console.log(Object.keys(bigobj)); //['age', 'psefdo', 'male'] Функция .keys() превращает обьект в массив и достает названия перменных из первого ряда. вложенные обьекты и переменные внутри них она не достает. как вы видите у нас вывелость только age psefdo male, то что находилось внутри объекта psefdo тупо наплевали. теперь достанем значения
console.log(Object.values(bigobj)); //[16, {…}, 'boy'] Функция .values() превращает объект в массив и достает значение внутри нашего указанного обьекта. как вы видите оно достало 2 значения и 1 ОБЪЕКТ. да. оно достало значение переменной psefdo как ОБЬЕКТ.
console.log(Object.entries(bigobj)); //[Array(2), Array(2), Array(2)] Функция .entries() берет и переменную и обьект и все это оно первращает в массив. тоесть:
/* все сложилось вот так:
    [
        ['age', 16]
        ['psefdo', {nick1: 'nix', nick2: 'nics', nick3: 'nics57'}]
        ['male', 'boy']
    ]

    3 массива в одном большом массиве. (кстати его lenght: 3, Т.к тут всего 3 массива.)
*/





/* ==============================Небольшая практика (ЗАДАНИЕ и проверка сил)========================================== */

const userInformation = {
    name: 'Дулат',
    surname: 'Аянов',
    age: 16,
    friends: {
        bestfriend: {
            name: 'Олег',
            surname: 'Тэн',
            age: undefined
        },
        justfriend: {
            name: 'Ктото',
            surname: 'Ктотов',
            age: -1
        },
        unfriend: {
            name: 'Алекс',
            surname: 'Алексов',
            age: '10'
        }
    }
}

function getInfo(info) {
    let str = '';
    const und = 'возраст неизвестен'
    
    console.log(`${info.name} ${info.surname}, ${info.age} друзей`);

    for (let key in info.friends) {
        if (key === 'bestfriend') {
            str = `${info.friends.bestfriend.name} ${info.friends.bestfriend.surname}, ${info.friends.bestfriend.age === undefined ? und : `${info.friends.bestfriend.age} лет`}`
            console.log(str);
        }
        if (key === 'justfriend') {
            if (info.friends.justfriend.age < 0) {
                console.log(`${info.friends.justfriend.name} ${info.friends.justfriend.surname}, "${info.friends.justfriend.age}" такой возраст невозможен`)
            } else {
                str = `${info.friends.justfriend.name} ${info.friends.justfriend.surname}, ${info.friends.justfriend.age === undefined ? und : `${info.friends.justfriend.age < 5 ? `${info.friends.justfriend.age} года` : `${info.friends.justfriend.age} лет`}`}`
                console.log(str);
            }
        }
        if (key === 'unfriend') {
            if (typeof info.friends.unfriend.age === 'string') {
                let norm = Number(info.friends.unfriend.age);
                str = `${info.friends.unfriend.name} ${info.friends.unfriend.surname}, ${info.friends.unfriend.age === undefined ? und : `${norm} лет`}`
                console.log(str);
            } else {
                str = `${info.friends.unfriend.name} ${info.friends.unfriend.surname}, ${info.friends.unfriend.age === undefined ? und : `${info.friends.unfriend.age} лет`}`
                console.log(str);
            }
        }
    }
}

getInfo(userInformation);

/* 
    У "Имя и фамилия" "колво друзей" друга.
    Лучший друг: "Имя и фамилия" возраст неизвестен.
    Просто друг: "Имя и фамилия" возраст неизвестен.
    Не друг: "Имя и фамилия" "возраст не друга" лет.
*/

/* ========================================== ЗАДАНИЕ УСПЕШНО ВЫПОЛНЕНО ======================================================= */

//вот и все. удачи тебе кому кто это читал. а я спать :)
//(напиздел, аниме пойду смотреть хе-хе)   02:51 - 11.02.2023