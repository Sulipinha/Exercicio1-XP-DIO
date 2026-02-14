// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // garante que o tipo seja minúsculo
    }

    atacar() {
        let ataque = "";

        // Define o ataque de acordo com o tipo
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        // Exibe a mensagem de ataque
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso

const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Conan", 30, "guerreiro");
const heroi3 = new Heroi("Li", 25, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

// Laço para exibir ataques
const herois = [heroi1, heroi2, heroi3, heroi4];

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}