const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".btnLogin");
const auth = firebase.auth();




btnLogin.addEventListener("click",()=>{

    auth.signInWithEmailAndPassword(inputEmail.value,inputPassword.value).then(
        ()=>{

            window.location.href="index.html"
        }
    )
        

})
