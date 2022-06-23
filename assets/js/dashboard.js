const botaoGerenciar = document.getElementById("botao-gerenciar");
const botaoCadastro = document.getElementById("botao-cadastro");

botaoGerenciar.onclick = function () {
	location.href = "account.html";
};

botaoCadastro.onclick = function () {
	location.href = "register.html";
};