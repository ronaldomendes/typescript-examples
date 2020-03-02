import { Tarefa } from "./Tarefa";

export class ListaTarefa {
    private _lista: Tarefa[] = [];
    // constructor() {}

    // adicionando uma única tarefa
    addTarefa(tarefa: Tarefa): Tarefa {
        this._lista.push(tarefa);
        return tarefa;
    }

    // adicionando múltiplas tarefas
    addTarefas(...tarefas: Tarefa[]) {
        this._lista.push(... tarefas)
        return tarefas
    }

    removeTarefa(tarefa: Tarefa) {
        let posicao:number = this._lista.indexOf(tarefa);
        if (posicao > -1) {
            this._lista.splice(posicao, 1);
        }
    }
}