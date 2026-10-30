
const quantidades = {
    "2x2": 11,
    "3x3": 20,
    "4x4": 40,
    "5x5": 60
};

const movimentos = ["R", "L", "U", "D", "F", "B"];
const sufixos = ["", "'"];

// Gera o embaralhamento
function gerarScramble(tipo) {

    const quantidade = quantidades[tipo];

    const scramble = [];
    let movimentoAnterior = null;

    while (scramble.length < quantidade) {

        // Escolhe uma face diferente da anterior
        const opcoes = movimentos.filter(
            movimento => movimento !== movimentoAnterior
        );

        const movimento = opcoes[
            Math.floor(Math.random() * opcoes.length)
        ];

        const sufixo = sufixos[
            Math.floor(Math.random() * sufixos.length)
        ];

        const restante = quantidade - scramble.length;

        // Decide se será simples ou duplo
        const duplo = restante >= 2 && Math.random() < 0.35;

        const token = movimento + sufixo;

        if (duplo) {
            scramble.push(token, token);
        } else {
            scramble.push(token);
        }

        movimentoAnterior = movimento;
    }

    return scramble;
}

// Botão Embaralhar
document.getElementById("btnEmbaralhar")
    .addEventListener("click", function() {

        const tipo = document.getElementById("tipoCubo").value;

        const scramble = gerarScramble(tipo);

        document.getElementById("sequencia").textContent =
            scramble.join(" ");

        document.getElementById("contador").textContent =
            scramble.length + " movimentos";

        document.getElementById("mensagem").textContent = "";
    });

// Botão Copiar
document.getElementById("btnCopiar")
    .addEventListener("click", async function() {

        const sequencia = document.getElementById("sequencia").textContent;

        if (!sequencia || sequencia.startsWith("Clique em")) {
            return;
        }

        try {
            await navigator.clipboard.writeText(sequencia);

            document.getElementById("mensagem").textContent =
                "Sequência copiada com sucesso!";
        } catch (erro) {
            document.getElementById("mensagem").textContent =
                "Não foi possível copiar automaticamente.";
        }
    });
