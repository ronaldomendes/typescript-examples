let nome = "Godofredo";
let idade = 48;
let ocupado = true;
let filhos = ["Creuza", "Zezinho"];
console.log(`Nome: ${nome}\nIdade: ${idade} anos`);
console.log(filhos);
function somar(a, b) { return a + b; }
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
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil["casado"] = "Casado";
    EstadoCivil["solteiro"] = "Solteiro";
    EstadoCivil["uniaoEstavel"] = "Uni\u00E3o Est\u00E1vel";
    EstadoCivil["divorciado"] = "Divorciado";
    EstadoCivil["viuvo"] = "Vi\u00FAvo";
})(EstadoCivil || (EstadoCivil = {}));
let estadoCivil;
// estadoCivil = "casado"
estadoCivil = EstadoCivil.casado;
estadoCivil = EstadoCivil.solteiro;
// com o segundo modelo, não é possível atribuir pelo índice 
// estadoCivil = 3;
console.log(estadoCivil);
// let array: EstadoCivil[]; // array undefined
// let array: EstadoCivil[] = []; // array vazio
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    get idade() {
        return this._idade;
    }
    get nome() {
        return this._nome;
    }
}
