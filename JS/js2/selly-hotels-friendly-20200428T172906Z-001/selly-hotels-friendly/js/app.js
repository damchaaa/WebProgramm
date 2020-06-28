let titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

let userAge = prompt("You age?", "");
let promoWrapper = document.getElementById("promoWrapper");
if (userAge < 16){
    promoWrapper.classList.add("aquapark");
}
else{
    if (userAge > 15 && userAge < 36 ){
        promoWrapper.classList.add("club");
    }
}

let promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке