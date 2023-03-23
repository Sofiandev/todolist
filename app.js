//creer un form pour taper les todos

//ajouter sur le dom ce qui est tapé dans l'input à la validation du form

//supprimer un todo losque l'on clique dessus

//stocker dans le local storage la liste

//consulter le local storage au lancement de l'application pour rajouter les todos

const todo = document.querySelector("#todo");
const todolist = document.querySelector(".todolist");
const form = document.querySelector("form");
const error = document.querySelector("span");
const list = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todo.value.length <= 3) {
    error.style.visibility = "visible";
  } else {
    todolist.innerHTML += `<li>${todo.value}</li>`;
    error.style.visibility = "hidden";
    todo.value = "";
  }
});

list.addEventListener("click", (e) => {
  if( e.target.classList = "checked"){
  e.target.classList.toggle("checked")};
  // e.target.remove();
  console.log(e.target);
});
