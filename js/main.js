const form = document.querySelector("#novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //com evento.target foi possível adentrar no elements e verificar nome e quantidade. Sempre ver no console.log os elementos que serão referidos. Nesse caso nome e qt
  criaElemento(
    evento.target.elements["nome"].value,
    evento.target.elements["quantidade"].value
  );
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}
