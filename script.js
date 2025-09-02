const modal = document.querySelector('.modal-container')
const tBody = document.querySelector('t.Body')
const sNome = document.querySelector ('#m-nome')
const sFuncao = document.querySelector ('#m-funcao')
const sSalario = document.querySelector ('#m-salario')
const btnSalvar = document.querySelector ('#btnSalvar')

let itens
let id

function openModal(edit= false, index = 0) {
    modal.classList.add ('active')

modal.onclick = e => {
if (e.target.className.indexOf('modal-container') !== -1) {

modalclassList.remove('active')
}
}

if (edit) {
sNome.value = itens [index].nome
sFuncao.value = itens [index].funcao
sSalario.value = itens [index].salario
id = index
} else {
sNome.value = ''
sFuncao.value = ''
sSalario.value = ''
}
}


function editItem (index) {

openModal (true, index)
}

function deleteItem (index) {
    itens.splce(index, 1)
    setItensBD()
    loadItens ()
}

function deleteItem (item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>${item.salario}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'
></i></button>
</td>
<td class="acao">
     <button onclick="deleteItem(${index})"><i class='bx bx-
trash'></i></button>
</td>
`

tBody.appendChild (tr)
}

btnSalvar.onclick = e => {

if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '')
{
    return
}

e.preventDefault();

if





}