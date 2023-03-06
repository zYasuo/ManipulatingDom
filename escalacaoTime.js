function addJogador() {

    const posicao = document.getElementById("posicao").value;
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;

    const confirmation = confirm("Escalar " + nome + " como " + posicao + "?");
    
    if(confirmation) {
        
        const jogadoresList = document.getElementById("jogadores");
        const li = document.createElement("li");
        li.id = 'player-' + numero
        li.innerText = posicao + ": " + nome + "(" + numero + ")";

        jogadoresList.appendChild(li)

        

        document.getElementById("posicao").value = ""
        document.getElementById("nome").value = ""
        document.getElementById("numero").value = ""
    }
}

function removeJogador() {
    const numero = document.getElementById("remover").value;
    const playerRemove = document.getElementById('player-' + numero)

    const confirmation = confirm("Remover o jogador " + playerRemove.innerText + "?")

    if(confirmation) {
        document.getElementById("jogadores").removeChild(playerRemove);
        document.getElementById("remover").value = ""
    }
}
