history.scrollRestoration = "auto";

const modal = document.querySelector("#popup");
const openBtn = document.querySelector("#openBtn");
const closeButton = document.querySelector("#closeBtn");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const modals = document.getElementsByClassName("por_modal");
const btns = document.getElementsByClassName("a_bbtn");
const spanes = document.getElementsByClassName("close");
let funcs = [];

console.log(modals);
console.log(btns);
console.log(spanes);

function Modal(num) {
  return function() {
    btns[num].onclick = ()=>{
      modals[num].style.display = "block";
      console.log(num);
    };

    spanes[num].onclick = ()=>{
      modals[num].style.display = "none";
    };
  };
}

for(let i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

for(let j = 0; j < btns.length; j++) {
  funcs[j]();
}

window.onclick = function(event) {
  if (event.target.className == "por_modal") {
    event.target.style.display = "none";
  }
};