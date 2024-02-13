const $ = (item) => document.querySelector(item)
const headers =  { "Content-Type": "application/json" }
const username = $("#username")
const password = $("#password")
const buttonLogin = $("#button-login")


const isLogged = localStorage.getItem('logged');
if (isLogged) {
  location.assign("/logged")
}


buttonLogin.addEventListener("click", () => {
  if (!username.value && !password.value) {
    $(".error-login").innerHTML = "Preencha o Login e Senha"
    $(".error-login").style.display = "block"
  }

  if (username.value && password.value) {
    axios({
      method: 'post',
      url: "/login", 
      data: {
        username: username.value,
        password: password.value
      },
      headers
    })
    .then(resp => {
      localStorage.setItem('logged', "true");
      location.assign("/logged")
    })
    .catch(err => {
      $(".error-login").innerHTML = "Erro no usuario ou senha"
      $(".error-login").style.display = "block"
    })
  }
})

