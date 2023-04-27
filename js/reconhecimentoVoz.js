const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event){
    const escolha = event.results[0][0].transcript;
    // document.querySelector('.box').innerHTML = escolha;
    exibeChute(escolha);
    verificaChuteValido(escolha);
}

const elementoChute = document.getElementById('chute');
function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start())