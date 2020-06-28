let userName = prompt("What is your name?", "")

let titleText = 'Привет, ' + userName + ' Добро пожаловать на сайт группы отелей Selly Hotels!';

let promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке