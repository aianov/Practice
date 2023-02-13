
let ptextjs = document.querySelector(".ptext");
let inputjs = document.querySelector(".input")
const loaderjs = document.querySelector(".loader");
const fakeloaderjs = document.querySelector(".fakeloader")

const loader2js = "loader2"
const spanjs = document.querySelector(".spantext");

let widthnum = 0;
let animationnumber = 0;

    const button = () => {
        if (inputjs.value > 100) {
            inputjs.value = '';
            spanjs.innerHTML = 'Вы не можете ввести число выше чем 100';
        } else if (isNaN(inputjs.value)) {
            inputjs.value = '';
            spanjs.innerHTML = 'Вы можете вводить только цифры';
            loaderjs.classList.add("loader2js")
        } else {
            spanjs.innerHTML = '';

            let animsum = setInterval(() => {
                animationnumber += 1;
                ptextjs.innerHTML = `${animationnumber}%`
                    if (animationnumber >= number) {
                        clearInterval(animsum)
                    }
                }, 10)
            
            const number = inputjs.value;
            const truenumber = number - 1
            let sum = setInterval(() => {
                widthnum += 1;
                    if (widthnum > truenumber) {
                        clearInterval(sum)
                    }
                    loaderjs.style.width = `${widthnum}%`;
                    inputjs.value = ''
            }, 10)
        }
}
const a = 'asd'
console.log(isNaN(a))