//Armazenar função em variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)

//Armazenar função arrow em variável
const Soma = (a, b) => {
    return a + b;
}

console.log(Soma(3, 4));

//Retorno implícito
const subtração = (a, b) => a - b;

console.log(subtração(6, 3));

const imprimir2 = a => console.log(a);
imprimir2("String");