let nome: string = "Godofredo";
let idade: number = 48;
let ocupado: boolean = true;
let filhos: string[] = ["Creuza", "Zezinho"];

console.log(`Nome: ${nome}\nIdade: ${idade} anos`)
console.log(filhos)

function somar(a: number, b: number): number { return a + b; }

function multiplicar(a, b) { return a * b; }
// apresenta um erro quando o código é executado
// console.log(multiplicar("3", "Bruna"));

// enum EstadoCivil {
//     casado,
//     solteiro,
//     uniaoEstavel,
//     divorciado,
//     viuvo
// }

enum EstadoCivil {
    casado = "Casado",
    solteiro = "Solteiro",
    uniaoEstavel = "União Estável",
    divorciado = "Divorciado",
    viuvo = "Viúvo"
}

let estadoCivil: EstadoCivil
// estadoCivil = "casado"
estadoCivil = EstadoCivil.casado;
estadoCivil = EstadoCivil.solteiro;

// com o segundo modelo, não é possível atribuir pelo índice 
// estadoCivil = 3;

console.log(estadoCivil)

// let array: EstadoCivil[]; // array undefined
// let array: EstadoCivil[] = []; // array vazio

class Pessoa {

    private _nome: string;
    private _idade: number;

    public constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }


    public get idade(): number {
        return this._idade;
    }

    public get nome(): string {
        return this._nome;
    }
}

interface Produto {
    nome: string;
    categoria: number;
    id: number;
    addEstoque: (n: number) => void;
}

let shampoo: Produto = {
    nome: 'nheta',
    categoria: 3,
    id: 1,

    addEstoque: (n: number) => {
        console.log(`Adicionando ${n} unidades...`);
     }
}

class ProdutosDeViagem implements Produto {
    nome: string;
    categoria: number;
    id: number;

    addEstoque(n: number) {
        console.log(`Adicionando ${n} ao estoque`);
    }

}

let pv = new ProdutosDeViagem();