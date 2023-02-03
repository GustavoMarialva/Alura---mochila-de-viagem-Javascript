const form = document.querySelector("#novoItem");
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //com evento.target foi possível adentrar no elements e verificar nome e quantidade. Sempre ver no console.log os elementos que serão referidos. Nesse caso nome e qt
  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  criaElemento(nome.value, quantidade.value);

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual);

  localStorage.setItem("item", JSON.stringify(itens));
}
