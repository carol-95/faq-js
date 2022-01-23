var buttons = document.querySelectorAll(".toggle");

function handleClick(button){
    var answer = button.nextElementSibling;
    answer.classList.toggle("show-answer");
    var isOpen = answer.classList.contains("show-answer");

    if(isOpen) {
        button.innerHTML = "fechar"
    } else {
        button.innerHTML = "abrir"
    }
}

buttons.forEach(button => {
    button.addEventListener("click", function(){ handleClick(button) });
    
});