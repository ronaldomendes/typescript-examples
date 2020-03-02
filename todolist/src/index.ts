import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa } from "./Tarefa";
import { Prioridade } from "./Prioridade";
import { ListaTarefa } from "./ListaTarefa";

// console.log("Uêpah!");
let tarefa01 = new Tarefa('Almoçar', Prioridade.alta);
let tarefa02 = new Tarefa('Escovar os dentes', Prioridade.alta);
let tarefa03 = new Tarefa('Dormir', Prioridade.alta);

// console.log(tarefa01, tarefa02, tarefa03);

let lista = new ListaTarefa;
// lista.addTarefa(tarefa01)
// lista.addTarefa(tarefa02)
// lista.addTarefa(tarefa03)
// lista.removeTarefa(tarefa02)
// console.log(lista)

// adicionando as tarefas através do rest/spread operator
lista.addTarefas(tarefa01, tarefa02, tarefa03)
// console.log(lista)

// const form: HTMLFormElement = document.querySelector('#form')
const form: HTMLFormElement = <HTMLFormElement>document.getElementById('form')
const input: HTMLInputElement = document.querySelector('#tf_2do')
const table: HTMLTableElement = document.querySelector('#table')

function adicionarTarefa(item) {
    const card = 
        `<tr class="done">
			<td>
				<input type="checkbox">
			</td>
			<td>
				${item._descricao}
			</td>
			<td>
				<i class="material-icons">delete</i>
			</td>
        </tr>`
        table.insertAdjacentHTML('beforeend', card)
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let tarefa = new Tarefa(input.value, Prioridade.baixa)
    lista.addTarefa(tarefa)
    input.value = ''
    console.log(lista)
    adicionarTarefa(tarefa)
})