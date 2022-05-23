const card = document.querySelector(".main");
const answers = document.querySelectorAll(".question p")

//---Make the answers disappear--------- 
answers.forEach(element => {
    element.style.display = "none";
})

//-----clicking the question events--------------
card.addEventListener("click", (event)=>{
    if(event.target.classList.contains("q-statment")){
        let textAnswer = event.target.parentNode.children[1];
        let arrow = event.target.children[1];
        
        if (textAnswer.style.display == "none"){
            textAnswer.style.display = "block";
            event.target.classList.add("clicked");
            arrow.style.transform = "rotate(180deg)";
        }
        else{
            textAnswer.style.display = "none";
            event.target.classList.remove("clicked");
            arrow.style.transform = "rotate(0deg)";
        }
    }
    
})