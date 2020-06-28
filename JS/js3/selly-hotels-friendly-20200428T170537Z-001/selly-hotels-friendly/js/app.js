var titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

let checkedBtn = document.getElementById("showAllFeedbacks");
checkedBtn.addEventListener("click",showAllFeedbacks);

function showAllFeedbacks() {
    let feedbacks = document.getElementById("hiddenFeedbacks");
    feedbacks.classList.toggle("hidden");
}

var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке