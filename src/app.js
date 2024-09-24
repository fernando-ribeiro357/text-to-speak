

function falarTexto() {
    let campo = document.querySelector('p');
    let input = document.querySelector('input');
    
    campo.innerHTML = input.value;
    campo.style.display = 'block';
    responsiveVoice.speak(input.value, 'Brazilian Portuguese Female', { rate: 1.2 });
    document.getElementById('reiniciar').removeAttribute('disabled');
    limparCampo();    
}

limparCampo();


function limparCampo() {
    inputTexto = document.querySelector('input');
    inputTexto.value = '';
    inputTexto.focus();
}

function reiniciar() {    
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

document.querySelector('input').addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'Enter':
                falarTexto();
                break;
            
            case 'Escape':
                // reiniciarJogo();
                document.getElementById('reiniciar').click();
                break;
        }
    }, true,
);