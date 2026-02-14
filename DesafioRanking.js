// Função para calcular o nível do jogador
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo usando laço de repetição
let jogadores = [
    { vitorias: 5, derrotas: 2 },
    { vitorias: 25, derrotas: 5 },
    { vitorias: 105, derrotas: 10 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularRank(jogadores[i].vitorias, jogadores[i].derrotas);

    console.log(
        `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
    );
}
