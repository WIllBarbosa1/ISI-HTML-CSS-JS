let dados = [];

function PopularTabelas(params) {
    localStorage.setItem(('__dados__'), JSON.stringify(dados));
}

function AtualizaCadastro(params) {

}

function DeletarCadastro(params) {

}

$(() => {
    dados = JSON.parse(localStorage.getItem('__dados__'));
});