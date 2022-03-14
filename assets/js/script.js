let detalhe = document.querySelector('#detalhe'); 
let som = document.querySelector('#som');
let imagem = document.querySelector('#imagem');
let botao = document.querySelector('#alteracao');

function alterarPagina() {
botao.addEventListener('click', () =>{
    if(botao.value == '1'){
        detalhe.innerText = '2 Tomoe: Segundo nível'
        som.play(); 
        imagem.src = './assets/img/Sharingan-2.jpeg'
        botao.value = '2' 
    } else if(botao.value == '2') { 
        detalhe.innerText = '3 Tomoe: Terceiro nível' 
        som.play();
        imagem.src = './assets/img/Sharingan-3.jpg'
        botao.value = '3'  
    } else if(botao.value == '3') { 
        detalhe.innerText = 'Mangekyo Sharingan: Quarto nível' 
        som.play();
        imagem.src = './assets/img/Sharingan-4.jpg' 
        botao.value = '4' 
    } else if(botao.value == '4') { 
        detalhe.innerText = 'Mangekyo Sharingan Eterno: Quinto nível' 
        som.play();
        imagem.src = './assets/img/Sharingan-5.webp' 
        botao.value = '5' 
    } else { 
        detalhe.innerText = '1 Tomoe: Primeiro nível' 
        som.play();
        imagem.src = './assets/img/Sharingan-1.jpg' 
        botao.value = '1' 
    }
});
}

alterarPagina();