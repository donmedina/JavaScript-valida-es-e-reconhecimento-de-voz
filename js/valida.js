function verificaChuteValido(chute) {
    const numero = +chute

    if (validaChute(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if (numeroPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Número deve estar entre: ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era ${numeroSecreto} !</h3>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa fa-chevron-circle-up" aria-hidden="true"></i></div>
        `        
    }

}

function validaChute(numero) {
    return Number.isNaN(numero);
}

function numeroPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}
