const faqCard = document.querySelectorAll(".faq-card");
const toggle = document.getElementById("toggle");
const nav = document.getElementById("resp_nav")

faqCard.forEach(card => {
    card.addEventListener("click",()=>{
        const text = card.lastElementChild
        text.classList.toggle("active")
    })
})

toggle.addEventListener("click",()=>{
    nav.classList.toggle("active");
})















