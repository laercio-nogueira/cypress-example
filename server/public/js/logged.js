const $ = (item) => document.querySelector(item)
const buttonLogin = $("#button-logout")

const isLogged = localStorage.getItem('logged');
if (!isLogged) {
  location.assign("/")
}

buttonLogin.addEventListener("click", () => {
  localStorage.removeItem("logged");
  location.replace('/');
})