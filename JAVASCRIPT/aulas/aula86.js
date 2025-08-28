function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string')reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperar('Frase 1', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperar('Frase 2', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperar('Frase 3', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log('ERRO: ', e);
})

console.log('Isso vem antes do promise');

