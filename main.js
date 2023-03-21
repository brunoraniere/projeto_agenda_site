const form = document.getElementById("form-cadastro");
const inpNome = document.getElementById("input-nome");
const inpTelefone = document.getElementById("input-telefone");
let linhas = '';
let arrayTelefones = [];
let arrayNomes = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(isNaN(inpTelefone.value) || inpTelefone.value.length < 8){
        alert("Digite um telefone válido");
    }
    else{
        if(arrayNomes.includes(inpNome.value) || arrayTelefones.includes(inpTelefone.value)){
            alert('Nome ou telefone já cadastrado');
        }
        else{
            atualizaTabela();
            inpNome.value = '';
            inpTelefone.value = '';
            arrayNomes.push(inpNome.value);
            arrayTelefones.push(inpTelefone.value);
        }
    }
});

function atualizaTabela(){
    let linha = '<tr>';
    linha += `<td>${inpNome.value}</td>`;
    linha += `<td>${inpTelefone.value}</td>`;
    linha += '</tr>';
    linhas += linha;

    const linhaTabela = document.querySelector('tbody');
    linhaTabela.innerHTML = linhas;
}