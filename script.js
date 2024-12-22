var produtos = [
  { id: 1, name: "Bife com Batata", price: 30.0 },
  { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
  { id: 3, name: "Carne de Panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Salada", price: 8.0 },
  { id: 6, name: "Torresmo", price: 12.0 },
];

const formulario = document.getElementById("formDadosCliente");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const getModal = document.getElementById("modalResultado");

  const modal = new bootstrap.Modal(getModal);

  var nome = null;
  nome = document.getElementById("InputNome");
  var saida = null;

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  var arrayCardsSum = document.getElementsByName("quantity");
  saida = document.getElementById("resultadoDoPedido");
  var totalCompra = 0;
  var stringSaida = "";
  saida.innerHTML = "";
  stringSaida += `Caro ${nome.value} <br><br> Seguem os dados do seu pedido  <br><br>`;
  stringSaida += `O seu pedido é: <br><br>`;
  stringSaida += "<ul>";
  console.log(arrayCardsSum.length);
  for (var i = 0; i < arrayCardsSum.length; i++) {
    if (arrayCardsSum[i].value > 0) {
      var id = arrayCardsSum[i].id;
      var produto = produtos[id - 1].name;
      var precoUn = produtos[id - 1].price;
      var total = precoUn * arrayCardsSum[i].value;
      stringSaida += `<li>Prato: ${produto} - `;
      stringSaida += `Preço unitário=${formatter.format(precoUn)} - `;
      stringSaida += `Quantidade ${arrayCardsSum[i].value} - `;
      stringSaida += `Total: ${formatter.format(total)}</li>`;
      totalCompra += total;
    }
  }
  stringSaida += `<br><br><strong>Preço total ${formatter.format(
    totalCompra
  )}</strong>`;
  saida.innerHTML = stringSaida;
  console.log(stringSaida);
  modal.show();
});
