function Calcular() { 
    const peso = document.getElementById("input-peso").value
    const altura = document.getElementById("input-altura").value
    const resultado = document.getElementById("resultado")

    //calculando o imc
    const imc = Number(peso/(altura*altura)).toFixed(2)
    console.log("seu imc é de: "+imc)

    //Printando o imc na tela
    if(imc < 18.5){ 
        resultado.innerHTML = "Seu imc é de: " + imc + " <br>Você está <b>Abaixo</b> do peso"
    } else if (imc >= 18.5 && imc <= 24.9) { 
        resultado.innerHTML = "Seu imc é de: " + imc + " <br>Você está com o peso <b>Normal</b>"
    } else if (imc > 24.9 && imc <= 29.9) { 
        resultado.innerHTML = "Seu imc é de: " + imc + " <br>Você está com <b>Sobrepeso</b>"
    } else if (imc > 29.9 && imc <= 34.9) { 
        resultado.innerHTML = "Seu imc é de: " + imc + " <br>Você está com o peso <b>Obesidade Grau |</b>"
    } else if (imc > 34.9 && imc <= 39.9) {
        resultado.innerHTML = "Seu imc é de: " + imc + " <br>Você está com o peso <b>Obesidade Grau ||</b>"
    } else if (imc >= 40.0) { 
        resultado.innerHTML = "Seu imc é de: " + imc + " <br>Você está com o peso <b>Obesidade Grau ||| OU Obesidade Mórbida</b>"
    } 
}   

/*

< 18,5 Abaixo do peso
check>= 18,5 && < 24,9 Peso Normal
check>= 24,9 && < 29,9 Sobrepeso
>= 29,9 && < 34,9 Obesidade Grau 1
>= 34,9 && < 39,9 Obesidade Grau 2
>= 40 Obesidade Grau 3 OU Mórbida 
*/ 