// botao login
document.getElementById("loginForm").addEventListener("submit", function (event) {
  // Evita o envio do formulário
  event.preventDefault();

  // Obtém os valores de usuário e senha do formulário
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Verifica se o login está correto (exemplo de validação simples)
  if (username === "user" && password === "password") {
    window.location.href = "aluno.html";
  } else if (username === "prof" && password === "1234") {
    window.location.href = "prof.html";
  } else {
    // Exibe mensagem de erro
    alert("Usuário ou senha incorretos. Por favor, tente novamente.");
  }
});

// enviar avaliação

function mostrarCaixaTexto() {
  document.getElementById("avaliacao").style.display = "block";
  document.getElementById("cadastrarBtn").style.display = "none";
  document.getElementById("enviarBtn").style.display = "inline";
  document.getElementById("fecharBtn").style.display = "inline";

}


function enviarAvaliacao() {
  // Recupere o texto da avaliação
  var textoAvaliacao = document.getElementById('avaliacao').value;

  // Faça a requisição AJAX para enviar a avaliação para o servidor
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'cadastrar_avaliacao.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Exiba a avaliação na página do aluno após o envio bem-sucedido
      var aluno = window.opener;
      aluno.mostrarAvaliacao(textoAvaliacao);
      window.close();
    }
  };
  xhr.send('avaliacao=' + encodeURIComponent(textoAvaliacao));
}

// MOSTRAR AVALIAÇÃO

function mostrarAvaliacao(avaliacao) {
  // Recupere a lista de avaliações do aluno
  var ulAvaliacoesAluno = document.getElementById('avaliacoesAluno');

  // Crie um elemento de lista para a avaliação
  var liAvaliacao = document.createElement('li');
  liAvaliacao.textContent = 'Avaliação do Professor: ' + avaliacao;

  // Adicione o elemento de lista à lista de avaliações do aluno
  ulAvaliacoesAluno.appendChild(liAvaliacao);

  // Esconda o botão "Cadastrar Avaliação"
  document.getElementById("cadastrarBtn").style.display = "none";
}

// Enviar avaliação
function enviarAvaliacao() {
  // Verificar se o campo de texto de avaliação está vazio
  var avaliacaoTexto = document.getElementById("avaliacao").value;
  if (avaliacaoTexto === "") {
    // Exibir alerta caso o campo esteja vazio
    alert("Descreva a sua avaliação!");
    return;
  }

  // Lógica para enviar a avaliação

  // Mostrar novamente o botão "Cadastrar Avaliação"
  document.getElementById("cadastrarBtn").style.display = "inline";

  // Esconder a caixa de texto de avaliação e o botão "Enviar Avaliação"
  document.getElementById("avaliacao").style.display = "none";
  document.getElementById("enviarBtn").style.display = "none";
  document.getElementById("fecharBtn").style.display = "none";

  // Exibir um alerta com a mensagem de sucesso
  alert("Sua avaliação foi cadastrada com sucesso!");
}


// cadastro


document.getElementById("cadastroForm").addEventListener("submit", function (event) {
  // Evita o envio do formulário
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;

  // Verifica se todos os campos estão preenchidos
  if (nome !== "" && email !== "" && senha !== "" && confirmarSenha !== "") {
    // Exibe mensagem de sucesso
    alert("Seu cadastro foi feito com sucesso!");
    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";
  } else {
    // Exibe mensagem de erro
    alert("Por favor, preencha todos os campos do formulário.");
  }
});

// notas

function registrarNotas() {
  var table = document.querySelector("#notas");

  if (!table) {
    table = document.createElement("table");
    table.setAttribute("id", "notas");

    var thead = table.createTHead();
    var row = thead.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = "<strong>Nome do Aluno</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Nota 1</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Nota 2</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Nota 3</strong>";

    var tbody = table.createTBody();
    var tr = tbody.insertRow();
    var td = tr.insertCell();
    td.innerHTML = "João";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota1'>";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota2'>";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota3'>";

    tr = tbody.insertRow();
    td = tr.insertCell();
    td.innerHTML = "Maria";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota1'>";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota2'>";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota3'>";

    tr = tbody.insertRow();
    td = tr.insertCell();
    td.innerHTML = "Carlos";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota1'>";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota2'>";
    td = tr.insertCell();
    td.innerHTML = "<input type='text' name='nota3'>";

    var chamada = document.querySelector(".chamada");
    chamada.appendChild(table);
  }

  document.getElementById("enviarNotas").style.display = "inline";
  document.getElementById("abrirNotas").style.display = "none";
  document.getElementById("notas").style.display = "table"; // exibe a tabela
}




function enviarNotas() {
  // Lógica para enviar as notas

  // Exibir um alerta com a mensagem de sucesso
  alert("As notas foram cadastradas com sucesso!");

  // Ocultar a tabela novamente
  document.getElementById("notas").style.display = "none";

  // Mostrar novamente o botão "Cadastrar Avaliação" e ocultar o botão "Enviar Notas"
  document.getElementById("enviarNotas").style.display = "none";
  document.getElementById("abrirNotas").style.display = "inline";
}


function fecharAvaliacao (){
  document.getElementById("enviarBtn").style.display = "none";
  document.getElementById("avaliacao").style.display = "none";
  document.getElementById("cadastrarBtn").style.display = "inline";
  document.getElementById("fecharBtn").style.display = "none";
}