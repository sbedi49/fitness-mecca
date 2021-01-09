const faqCard = document.querySelectorAll(".faq-card");

faqCard.forEach(card => {
    card.addEventListener("click",()=>{
        const text = card.lastElementChild
        text.classList.toggle("active")
        
    })
    
})










