import { Prioridade } from "./Prioridade";

// primeiro modo para criar a classe e o construtor
// class Tarefa {
//     private _descricao: string;
//     private _concluido: boolean;
//     private _prioridade: Prioridade

//     constructor(desc: string, prioridade: Prioridade, concluido: boolean = false) {
//         this._descricao = desc;
//         this._prioridade = prioridade;
//         this._concluido = concluido;
//     }
// }

// segundo modo com os atributos inseridos no construtor
export class Tarefa {
    constructor(private _descricao: string, private _prioridade: Prioridade, private _concluido: boolean = false) {
        this._descricao = _descricao;
        this._prioridade = _prioridade;
        this._concluido = _concluido;
    }

    public set setConcluido(concluido: boolean) {
        this._concluido = concluido;
    }

    public get getConcluido(): boolean {
        return this._concluido;
    }
}
