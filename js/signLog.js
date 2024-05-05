var sign = document.getElementById('signIn')
var login = document.getElementById('logIn')
var loginForm = document.getElementById('registracija')
var signForm = document.getElementById('prijava')

function signIn(){
    sign.classList.toggle('inactive')
    sign.classList.toggle('active')
    login.classList.toggle('inactive')
    login.classList.toggle('active')

    if(sign.className.match('active')){
        loginForm.style.display = "inline"
        signForm.style.display = "none"
        login.disabled = false
        sign.disabled = true
    }
    if(sign.className.match('inactive')){
        signForm.style.display = "inline"
        loginForm.style.display = "none"
        login.disabled = true
        sign.disabled = false
    }
}