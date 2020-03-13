import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa } from "./Tarefa";
import { Prioridade } from "./Prioridade";
import { ListaTarefa } from "./ListaTarefa";

// console.log("Uêpah!");
// let tarefa01 = new Tarefa('Almoçar', Prioridade.alta);
// let tarefa02 = new Tarefa('Escovar os dentes', Prioridade.alta);
// let tarefa03 = new Tarefa('Dormir', Prioridade.alta);

// console.log(tarefa01, tarefa02, tarefa03);

let lista = new ListaTarefa;
// lista.addTarefa(tarefa01)
// lista.addTarefa(tarefa02)
// lista.addTarefa(tarefa03)
// lista.removeTarefa(tarefa02)
// console.log(lista)

// adicionando as tarefas através do rest/spread operator
// lista.addTarefas(tarefa01, tarefa02, tarefa03)
// console.log(lista)

// const form: HTMLFormElement = document.querySelector('#form')
const form: HTMLFormElement = <HTMLFormElement>document.getElementById('form')
const input: HTMLInputElement = document.querySelector('#tf_2do')
const table: HTMLTableElement = document.querySelector('#table')

function adicionarTarefa(item) {
    // const card =
    //     `<tr class="">
    //         <td><input type="checkbox"></td>
    //         <td>${item._descricao}</td>
    //         <td>[${item._prioridade}]</td>
    //         <td><i class="material-icons">delete</i></td>
    //     </tr>`
    // table.insertAdjacentHTML('beforeend', card)

    const tr = document.createElement('tr')
    tr.setAttribute('class', '')
    const td1 = document.createElement('td')
    const chkbox = document.createElement('input')
    chkbox.type="checkbox"
    const td2 = document.createElement('td')
    td2.innerHTML = `${item._descricao}`
    const td3 = document.createElement('td')
    td3.innerHTML = `[${item._prioridade}]`
    const td4 = document.createElement('td')
    td4.innerHTML = `<i class="material-icons">delete</i>`

    td1.appendChild(chkbox)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    table.appendChild(tr)

    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    checkbox.forEach(cbox => {
        cbox.addEventListener('click', () => {
            tr.classList.contains('done') ? tr.classList.remove('done') : tr.classList.add('done')
        })
    })
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let tarefa = new Tarefa(input.value, Prioridade.baixa, false)
    lista.addTarefa(tarefa)
    input.value = ''
    console.log(lista)
    adicionarTarefa(tarefa)
})
