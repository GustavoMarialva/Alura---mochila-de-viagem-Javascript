const form = document.querySelector("#novoItem");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log(evento.target.elements["nome"].value);
  console.log(evento.target.elements["quantidade"].value);
  //com evento.target foi possível adentrar no elements e verificar nome e quantidade. Sempre ver no console.log os elementos que serão referidos. Nesse caso nome e qt
});
