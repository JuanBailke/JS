//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(5, 6);
imprimirSoma(2)


//Função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(3, 4));
console.log(soma(3));