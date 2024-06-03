

function deMaior() {

    let idade = prompt("Digite a sua idade:");

    if(idade < 18){
        alert("Você é menor de idade");

    } else if ( idade > 18 && idade <= 64) {
        alert("Você é maior de idade!");

    }else if( idade >= 65) {
        alert("Você é idoso!")
    }

}

deMaior();