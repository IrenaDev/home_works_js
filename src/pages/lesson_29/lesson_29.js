import * as bootstrap from "bootstrap";
import "./lesson_29.scss";

const sendNameBtn = document.getElementById("sendName");

sendNameBtn.addEventListener("click", () => {
  const name = document.getElementById("floatingInputName").value;

  if (name) {
  } else {
      
  }
  console.log(name);
});
