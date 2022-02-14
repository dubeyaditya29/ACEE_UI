const content = document.querySelector("#inp-password");
const seePassword = document.querySelector("#pass-icon");

seePassword.addEventListener("click", () => {
  const type =
    content.getAttribute("type") === "password" ? "text" : "password";
  content.setAttribute("type", type);
});
