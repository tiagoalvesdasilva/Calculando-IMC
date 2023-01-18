const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado');
    const valorIMC = (peso / (altura * altura )).toFixed(1);
    let classificacao = '';
    resultado.textContent = valorIMC
   
    if (valorIMC < 18.5){
        classificacao = ('Abaixo do Peso')
    } else if (valorIMC >=18.5 && valorIMC <=24.9){
        classificacao = ('Normal')
    } else if (valorIMC >=25.0 && valorIMC <=29.9){
        classificacao = ('com Sobrepeso')
    } else if (valorIMC >=30.0 && valorIMC <=39.9){
        classificacao = ('com Obesidade')
    } else if (valorIMC> 40){
        classificacao = ('com Obesidade Grave')
    }
    resultado.textContent = `${nome} seu IMC é de ${valorIMC} e você está ${classificacao}`
}