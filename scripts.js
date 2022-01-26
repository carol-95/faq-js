var buttons = document.querySelectorAll(".toggle");

function handleClick(button){
    var answer = button.parentNode.nextElementSibling;
    answer.classList.toggle("show-answer");
    var isOpen = answer.classList.contains("show-answer");

    if(isOpen) {
        button.innerHTML = "-"
    } else {
        button.innerHTML = "+"
    }
}

buttons.forEach(button => {
    button.addEventListener("click", function(){ handleClick(button) });
});

