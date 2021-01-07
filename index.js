const faqCard = document.querySelector(".faq-card");
const span = document.querySelectorAll(".active");
const text = document.querySelector(".faq-text")

// span.addEventListener("click",() =>{
//     faqCard.classList.toggle('active');
//     text.classList.toggle('active');
// })

span.forEach(element => {
    element.addEventListener("click",()=>{
        faqCard.classList.toggle("active")
        text.classList.toggle("active");
    })
})
