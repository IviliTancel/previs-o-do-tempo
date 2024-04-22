let chave = 'b2aa9eecf3c0e6cb1a1d44e77b182d83'

function colocarNatela(dados){

    document.querySelector(".cidade-tela").innerHTML ="tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector(".umidade").innerHTML  = Math.floor (dados.main.humidity) +"% Umidade"
    

}

async function buscarCidade(cidade) {
    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + 
    cidade +
    '&appid=b2aa9eecf3c0e6cb1a1d44e77b182d83&units=metric',
).then((resposta) => resposta.json())

    // AWAIT = ESPERE

    //FETCH = Ferramenta do javascript para acessar servidores

    //THEN = ENTÃO

    // JSON = O FORMATO QUE O JAVASCRIPT ENTENDE !!
console.log(dados)
    colocarNatela(dados)
}



function cliqueiNobotão() {
    let cidade = document.querySelector(".input-cidade").value//value -> VALOR 

    buscarCidade(cidade)
}

/*
Clica no BOTÃO
  -> CHAMA A FUNÇÃO cliqueiNobotão()
  -> vai no INPUT e pega o que está lá dentro
   -> PASSAR a cidade para o servidor
    -> math.floor -> arredondar valores

*/


