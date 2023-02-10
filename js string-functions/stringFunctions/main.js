// Экранирование
// Конкатенация
// toString, length
// toLowerCase, toUpperCase
// split, repeat
// charAt, indexOf, includes, startWith, endWith
// slice
// replace, replaceAll
// padStart, padEnd, trim, trimStart, trimEnd

let dengi = 'Приветкак';
const lengthdengimassiv = dengi.split('');
const dengishifr = '*'.repeat(lengthdengimassiv.length);
console.log(dengishifr);

// indexof

const a = 'Никс-';
console.log(a.indexOf('-')) //4 индекс
console.log(a.indexOf('=')) //-1 индекс
console.log(a.indexOf('и')) //1 индекс

console.log(a.charAt('1')) //и, charAt просто ищет строчку по индексу и пишет чему оно равно. кстати если оно найдет пустоту то оно выводи в консоли '' ну тоесть совсем ничего. просто пустота
console.log(a.charAt('4')) //-, думаювсе просто. (достаточно редкие функции но все равно стоит их знать)

/*includes узнает если у нас в строке какаято строка*/

const url1 = 'https://daun.com/';
const url2 = 'https://daun.ru/img/daun.png';
if (url2.includes('.com')) { //проверяет какую то часть строки в строке
    console.log('вы зашли на сайт .com')
} else if (url2.includes('.ru')) {
    console.log('вы зашли на сайт .ru')
} else {
    console.log('Бля... на какой сайт ты вообще зашел?')
}

/* .startWith .endWith, startwith проверяет строчку в строке в НАЧАЛЕ, а endwith соответственно так же проверяет но уже с начала. */

console.log(url2.startsWith('https://')) //true, потому что и вправду начиналось с https://
console.log(url2.startsWith('https:///')) //false, так как третей нету.

console.log(url1.endsWith(".com/")); //true, начало url1 это: .com/
console.log(url1.endsWith('.com')); //false, .co(m), m - не является концом url1, у переменной ur1 в конце стоит символ '/'

/* slice обрезка текста */

const login = '   nics57  ';
console.log(login.slice(3, 9) === 'nics57'); //true, slice взяла и обрезала все кроме С 3 ДО 9 ИНДЕКСА. оно считает по индексу.
console.log(login.slice(3, -2)); //мы можем считать минусовые значения. если мы попытаемся пойти ниже нуля то оно возвращается в конец строки и начинает считать минус уже оттуда.
console.log(login.slice(3, -14)); //оно вернулось в конец и захватило все буквы а потом и обрезала их.

/* trim, trimStart, trimEnd, обрезают пробелы */

const logintrim =  '   ni  c s 57  ';
console.log(logintrim.trim()); //к сожалению оно может вырезать пробелы только с начала первой буквы и с концом последней буквы.
console.log(logintrim.trimStart()); //обрезает только в начале.

/* replace, replaceAll, меняет что-то на что-то */

const phone = '+7(777)123-32-23';
console.log(phone.replace('-', '')); //+7(777)12332-23, последнее не заменлось потому что функция .replace меняет только первый найденный по условию элемент.
console.log(phone.replaceAll('-', '')); // +7(777)1233223, сменило все найденные - на пустоту и соединило строчки убрав пробелы.
console.log(phone.replaceAll('+', '').replaceAll('(', '').replaceAll(')', '').replaceAll('-', '')); //вот таким нехитрым способом мы взяли и убрали все лишнее оставив только то что нам нужно. запомни что .replace().replace() можно вот так вот стакать. да и вообще функции .funtion() всегда можно стакать.

/* .padStart, .padEnd заполняют какую то переменную чем то до определенной длинны строчки учитывая даже пробелы*/

const text = 'test';
console.log(text.padStart(6, '-')) //--test, наша переменная text имеет внутри 4 буквы но мы в padstart указали 6 и указали чем будем заполнять, в данном случае мы указали что заполним '-', ну и получается оно у нас со старта 'test' заполняло '-' до тех пор, пока длинна этого значения не составит шести символов,если строчка будет длиннее чем указанная длинна заполнения то ничего не поменяется, и ошибку в консоли не вызовет.
console.log(text.padEnd(6, '*')) //test**, тоже самое, заполняет нам '*' звездочки, с самого начала текста пока ее длинна не составит шести символов.

//Это были фукнции для строк. спасибо за чтение.