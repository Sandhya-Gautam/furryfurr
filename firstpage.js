var usernameInput = document.querySelector(".inputtext");
var passwordInput = document.querySelector(".inputps");
var formText = document.querySelectorAll(".text");

usernameInput.addEventListener("blur",()=>{
    if(usernameInput.value){
            formText[0].style.top = -5+"px";
    }

});
passwordInput.addEventListener("blur",()=>{
    if(passwordInput.value){
            formText[1].style.top = -5+"px";
    }
});


