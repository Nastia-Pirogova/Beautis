const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text-show-more");

readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "ПОКАЗАТЬ БОЛЬШЕ") {
        readMoreBtn.innerText = "СКРЫТЬ";
    } else {
        readMoreBtn.innerText = "ПОКАЗАТЬ БОЛЬШЕ";
    }
});


const reviewsReadMoreBtn = document.querySelector(".reviews__read-more-btn");
const reviewsText = document.querySelector(".reviews__text-show-more");

reviewsReadMoreBtn.addEventListener("click", (e) => {
    reviewsText.classList.toggle("reviews__show-more");
    if (reviewsReadMoreBtn.innerText === "ПОКАЗАТЬ БОЛЬШЕ") {
        reviewsReadMoreBtn.innerText = "СКРЫТЬ";
    } else {
        reviewsReadMoreBtn.innerText = "ПОКАЗАТЬ БОЛЬШЕ";
    }
});
