function parOuImpar() {
    let numeros = prompt("Digite um numero:")

    if(numeros % 2 === 0) {
        alert(`${numeros} é par!`);
    } else {
        alert(`${numeros} é Impar!`);
    }
}

parOuImpar();