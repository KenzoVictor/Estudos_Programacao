function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function esperar(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperar('Frase 1', rand(1, 3), function(){
    esperar('Frase 2', rand(1, 3), function(){
        esperar('Frase 3', rand(1, 3));
    });
});

