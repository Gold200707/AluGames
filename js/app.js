function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemDoGame = gameClicado.querySelector('.dashboard__item__img');
    let botaoGame = gameClicado.querySelector('.dashboard__item__button');

    let nomeGame = gameClicado.querySelector('.dashboard__item__name');
    console.log(nomeGame.textContent);

    if (imagemDoGame.classList.contains('dashboard__item__img--rented')) {
        imagemDoGame.classList.remove('dashboard__item__img--rented');
        botaoGame.textContent = 'Alugar';
        botaoGame.classList.remove('dashboard__item__button--return');
    } else {
        imagemDoGame.classList.add('dashboard__item__img--rented');
        botaoGame.textContent = 'Devolver';
        botaoGame.classList.add('dashboard__item__button--return');
    }
}

//Atividade1
// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagemDoGame = gameClicado.querySelector('.dashboard__item__img');
//     let botaoGame = gameClicado.querySelector('.dashboard__item__button');

//     let nomeGame = gameClicado.querySelector('.dashboard__item__name');
//     console.log(nomeGame.textContent);

//     if (imagemDoGame.classList.contains('dashboard__item__img--rented')) {
//         if (confirm(`Você tem certeza que deseja devolvero jogo ${nomeGame.textContent}?`)) {
//             imagemDoGame.classList.remove('dashboard__item__img--rented');
//             botaoGame.textContent = 'Alugar';
//             botaoGame.classList.remove('dashboard__item__button--return');
//         }
//     } else {
//         imagemDoGame.classList.add('dashboard__item__img--rented');
//         botaoGame.textContent = 'Devolver';
//         botaoGame.classList.add('dashboard__item__button--return');
//     }
// }

//Atividade2
// let gamesAlugados = 1;

// function mostrarGamesAlugados() {
//     console.log(`Total de jogos alugados: ${gamesAlugados}`);
// }

// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagemDoGame = gameClicado.querySelector('.dashboard__item__img');
//     let botaoGame = gameClicado.querySelector('.dashboard__item__button');

//     let nomeGame = gameClicado.querySelector('.dashboard__item__name');
//     console.log(nomeGame.textContent);

//     if (imagemDoGame.classList.contains('dashboard__item__img--rented')) {
//         if (confirm(`Você tem certeza que deseja devolvero jogo ${nomeGame.textContent}?`)) {
//             imagemDoGame.classList.remove('dashboard__item__img--rented');
//             botaoGame.textContent = 'Alugar';
//             botaoGame.classList.remove('dashboard__item__button--return');
//             gamesAlugados --;
//         }
//     } else {
//         imagemDoGame.classList.add('dashboard__item__img--rented');
//         botaoGame.textContent = 'Devolver';
//         botaoGame.classList.add('dashboard__item__button--return');
//         gamesAlugados++;
//     }

//     mostrarGamesAlugados();
// }

//Atividade3
// let gamesAlugados = 1;

// function mostrarGamesAlugados() {
//     console.log(`Total de jogos alugados: ${gamesAlugados}`);
// }

// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagemDoGame = gameClicado.querySelector('.dashboard__item__img');
//     let botaoGame = gameClicado.querySelector('.dashboard__item__button');

//     let nomeGame = gameClicado.querySelector('.dashboard__item__name');
//     console.log(nomeGame.textContent);

//     if (imagemDoGame.classList.contains('dashboard__item__img--rented')) {
//         if (confirm(`Você tem certeza que deseja devolvero jogo ${nomeGame.textContent}?`)) {
//             imagemDoGame.classList.remove('dashboard__item__img--rented');
//             botaoGame.textContent = 'Alugar';
//             botaoGame.classList.remove('dashboard__item__button--return');
//             gamesAlugados --;
//         }
//     } else {
//         imagemDoGame.classList.add('dashboard__item__img--rented');
//         botaoGame.textContent = 'Devolver';
//         botaoGame.classList.add('dashboard__item__button--return');
//         gamesAlugados++;
//     }

//     mostrarGamesAlugados();
// }

// const essaPalavraUmPalidromo = function(palavra) {
//     let separandoAsLetras = palavra.toUpperCase();
//     separandoAsLetras = separandoAsLetras.split('');
//     let palavraInvertida = separandoAsLetras.reverse('');
//     palavraInvertida = palavraInvertida.join('');

//     if (palavra.toUpperCase() == palavraInvertida) {
//         console.log(`A palavra ${palavra} é um palíndromo!`);
//     } else {
//         console.log(`A palavra ${palavra} não é um palíndromo!`);
//     }
// }

// essaPalavraUmPalidromo('Radar');

//Atividade4
// let gamesAlugados = 1;

// function mostrarGamesAlugados() {
//     console.log(`Total de jogos alugados: ${gamesAlugados}`);
// }

// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagemDoGame = gameClicado.querySelector('.dashboard__item__img');
//     let botaoGame = gameClicado.querySelector('.dashboard__item__button');

//     let nomeGame = gameClicado.querySelector('.dashboard__item__name');
//     console.log(nomeGame.textContent);

//     if (imagemDoGame.classList.contains('dashboard__item__img--rented')) {
//         if (confirm(`Você tem certeza que deseja devolvero jogo ${nomeGame.textContent}?`)) {
//             imagemDoGame.classList.remove('dashboard__item__img--rented');
//             botaoGame.textContent = 'Alugar';
//             botaoGame.classList.remove('dashboard__item__button--return');
//             gamesAlugados --;
//         }
//     } else {
//         imagemDoGame.classList.add('dashboard__item__img--rented');
//         botaoGame.textContent = 'Devolver';
//         botaoGame.classList.add('dashboard__item__button--return');
//         gamesAlugados++;
//     }

//     mostrarGamesAlugados();
// }

// const essaPalavraUmPalidromo = function(palavra) {
//     let separandoAsLetras = palavra.toUpperCase();
//     separandoAsLetras = separandoAsLetras.split('');
//     let palavraInvertida = separandoAsLetras.reverse('');
//     palavraInvertida = palavraInvertida.join('');

//     if (palavra.toUpperCase() == palavraInvertida) {
//         console.log(`A palavra ${palavra} é um palíndromo!`);
//     } else {
//         console.log(`A palavra ${palavra} não é um palíndromo!`);
//     }
// }

// essaPalavraUmPalidromo('Radar');

// const ordenandoNumeros = (a, b, c) => {
//     const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
//     console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
// }

// ordenandoNumeros(3, 1, 5);