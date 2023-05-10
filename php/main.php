<?php
// Conexão com o banco de dados
$db_host = "localhost"; // Host do banco de dados
$db_name = "nome_do_banco_de_dados"; // Nome do banco de dados
$db_user = "usuario"; // Usuário do banco de dados
$db_password = "senha"; // Senha do banco de dados

// Cria a conexão
$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Recupera os dados do aluno do banco de dados
$id = $_GET['id']; // ID do aluno obtido do formulário de login
$sql = "SELECT nome, matricula, disciplina FROM alunos WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $aluno = $result->fetch_assoc();
    // Retornar os dados do aluno em formato JSON
    echo json_encode($aluno);
} else {
    echo "Aluno não encontrado";
}

$conn->close();
?>

// avaliações 

// Insira a avaliação no banco de dados
// ... (seu código de inserção da avaliação)

// Recupere o ID da avaliação recém-inserida
$idAvaliacao = mysqli_insert_id($conexao);

// Insira a avaliação na tabela de avaliações associada ao aluno
$idAluno = $_POST['id_aluno']; // Recupere o ID do aluno do formulário
$sql = "INSERT INTO avaliacoes_aluno (id_aluno, id_avaliacao) VALUES ($idAluno, $idAvaliacao)";
$resultado = mysqli_query($conexao, $sql);

// Busque as avaliações associadas ao aluno no banco de dados
$idAluno = $_SESSION['id_aluno']; // Recupere o ID do aluno da sessão (ou de outra forma, dependendo da sua implementação)
$sql = "SELECT a.* FROM avaliacoes a INNER JOIN avaliacoes_aluno aa ON a.id_avaliacao = aa.id_avaliacao WHERE aa.id_aluno = $idAluno";
$resultado = mysqli_query($conexao, $sql);

// Crie um array para armazenar as avaliações
$avaliacoes = array();

// Percorra o resultado da consulta e adicione as avaliações ao array
while ($avaliacao = mysqli_fetch_assoc($resultado)) {
  $avaliacoes[] = $avaliacao;
}

// Envie as avaliações para a página do aluno para exibição
// ... (seu código para enviar as avaliações para a página do aluno)

