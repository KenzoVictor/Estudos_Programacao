// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// function esperar(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if(typeof msg !== 'string'){
//             reject(false);
//             return;
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise');
//         }, tempo);
//     });
// }

// // Promese.all

// const promises = [
//     'Primeiro valor',
//     esperar('Promise 1', 750),
//     esperar('Promise 2', 500),
//     esperar('Promise 3', 250),
//     esperar(1000, 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor) {
//     console.log(valor);
// }).catch(function(erro) {
//     console.log('ERRO: ', erro);
// });




// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// function esperar(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if(typeof msg !== 'string'){
//             reject('Erro: msg não é uma string');
//             return;
//         }
//         resolve(msg.toUpperCase() + ' - Passei na promise');
//         return;
//     }, tempo);
//     });
// }

// // Promise.race

// const promises = [
//     esperar('Promise 1', rand(1, 5)),
//     esperar('Promise 2', rand(1, 5)),
//     esperar('Promise 3', rand(1, 5)),
//     esperar(1000, rand(1, 5))
// ];

// Promise.race(promises)
// .then(function(valor) {
//     console.log(valor);
// }).catch(function(erro) {
//     console.log('ERRO: ', erro);
// });



function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string'){
            reject('Erro: msg não é uma string');
            return;
        }
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return;
    }, tempo);
    });
}

// Promise.resolve/reject

function baixaPagina() {
    const emCache = false; // alterar manualmente para testar as promisses

    if(emCache) {
        return Promise.resolve('Página em cache'); // alterar resolve/reject para testar as promisses
    } else {
        return esperar('Baixando página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO: ', e));