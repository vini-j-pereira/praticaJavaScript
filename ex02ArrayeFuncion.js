function somarArray(numeros) {
  let soma = 0; 

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];

  }
  return soma;

} 

let numeros = [5, 10, 25, 13, 100]
console.log(`A soma do Array é: ${somarArray(numeros)}`);
