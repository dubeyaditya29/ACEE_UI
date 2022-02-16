const content = document.querySelector(".inp-password");
const seePassword = document.querySelector(".container");

seePassword.addEventListener(
  "click",
  (e) => {
    // Have used the concept of Event Delegation..
    var ele = e.target.parentNode.parentElement.firstElementChild;
    var type = ele.getAttribute("type") === "password" ? "text" : "password";
    ele.setAttribute("type", type);
    //console.log(e);
  },
  false
);
