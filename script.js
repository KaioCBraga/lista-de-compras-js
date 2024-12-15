const input = document.querySelector("input");
const button = document.querySelector("button");
const lista = document.querySelector("ul");

button.addEventListener("click", () => {
  const value = input.value.trim(); // Remove espaços desnecessários

  if (value === "") {
    alert("Por favor, insira um valor!");
    return;
  }

  // Cria um novo elemento <li>
  const newItem = document.createElement("li");
  newItem.classList.add("list-item");

  //Definir o texto do item
  const itemText = document.createElement("span");
  itemText.textContent = value;

  // Cria o botão de exclusão
  const deleteButton = document.createElement("div");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "x";

  //Adiciona o texto e o botão ao item da lista
  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);

  // Adiciona o item à lista
  lista.appendChild(newItem);
});

// Delegação de eventos para remover itens (incluindo os criados no HTML)
lista.addEventListener("click", (event) => {
  // Verifica se o clique foi em um botão de exclusão
  if (event.target.classList.contains("delete")) {
    const item = event.target.parentElement; // O <li> pai do botão
    lista.removeChild(item); // Remove o <li> da lista
  }
});
