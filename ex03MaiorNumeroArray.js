function encontrarMaiorNumero(numeros) {
    let maior = numeros[0]; `<--- A variavel recebe inicia com valor zero para percorrer o (FOR)`

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > maior) { `<-----Toda vez que o for percorre a varialvel e econtrar um numero que seja maior que ele...`
            maior = numeros[i];    `Ele substitui o seu valor pelo valor maior`
        }
    }

    return maior; `Aqui retornamos o maior valor`
}

let numeros = [5, 10, 15, 30, 80];
console.log(`O maior numero do Array é ${encontrarMaiorNumero(numeros)}`);