const card = document.querySelector(".main");
const answers = document.querySelectorAll(".question p")

// ---Make the answers disappear--------- 
answers.forEach(element => {
    element.style.height = "0px";
    element.style.opacity = "0";
})

//-----clicking the question events--------------
card.addEventListener("click", (event)=>{
    if(event.target.classList.contains("q-statment")){
        let textAnswer = event.target.parentNode.children[1];
        let arrow = event.target.children[1];
    
        if (textAnswer.style.height == "0px"){
            textAnswer.style.height = "100%"
            textAnswer.style.opacity = "1"
            event.target.classList.add("clicked");
            arrow.style.transform = "rotate(180deg)";
        }
        else{
            textAnswer.style.height = "0px";
            textAnswer.style.opacity = "0"
            event.target.classList.remove("clicked");
            arrow.style.transform = "rotate(0deg)";
        }
    }
    
})