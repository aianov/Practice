/* Спасибо что читаешь мой js файл, здесь я обучался promise и тд... */



/* ========================================= Функция resolve и reject в Promise классе ============================================== */

console.log('Request data...')

const p = new Promise(function(resolve, reject) { //мы создали класс Promise, глобальный класс где передали дву функции resolve и reject
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData) //мы говорим нашему promise что он завершил свое выполнение. МЫ указываем значение переменной backendData и потом она передается нашему вызванному then() методу. записывается наша переменная в переменную data
    }, 2000)
})

//переменная p является промисом, потому что мы ее получаем из класса promise. и у каждого промиса есть определнный набор методов которые мы можем использовать.
//метод .then() работает так что, когда promise p перестает работать и заканчивает свою работу. то сразу запускается then.
p.then(data => {
    console.log('Promise resolved', data)
}) //мы можем обратиться к промису и вызвать у него метод then() - (когда выполнится).
p.then(data => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data);
        }, 2000)
    })
    p2.then(clientData => {
        console.log('Data recieved', clientData)
    })
})

let a = '';
let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a = 'DONE!');
    },5000)
})

b.then(() => {
    console.log(a);
})

const sleep = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
}
sleep(6000).then(() => console.log('spat!'))
sleep(9000).then(() => console.log('spat! cherez 9sec'))

//короче промисы используют чтобы не было вложенности от колбэков. так намного легче. (сложновато чутьчуть)
//на этом всё. reject изучу позже