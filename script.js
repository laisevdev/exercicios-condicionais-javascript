function verificar () {                                // função de clique add la no html
    var data = new Date()                             // data de hoje- atual
    var ano_atual = data.getFullYear()                // método de ano atual com 4 dígitos
    var fano = document.getElementById('txtano')    // método seletor por ID TXTANO lá no html- (fano) > variável p guardar no input - o que for digitado por uma pessoa 
    var res = document.querySelector ('div#res')    // outra forma de escrever método seletor de ID, através do QUERYSELECTOR - (res) > variável p guardar resultados
    if (fano.value == 0 || fano.value > ano_atual) {                          // condicional para verificar se ano inserido é = 0 ou > que ano atual. 
            alert('[ERRO]. VERIFIQUE OS DADOS DIGITADOS E TENTE NOVAMENTE.') // caixa de alert exibindo erro de digitação do usuário
    } else {                                                                 // condicional caso esteja tudo OK
        var fsex = document.getElementsByName('radsex')                   // variável criada para captar o sexo escolhido. Seletor de documento do input SEXO pelo NAME. 
        var idade = ano_atual - Number(fano.value)                       // variável criada para calcular idade 
        var gênero = ''                                                 // varável de gênero criada vazia 
        var img = document.createElement('img')                        //variável criada para exibição de imagem 
        img.setAttribute('id', 'foto')                                // inserindo atributos para o elemento IMG criado
        if (fsex[0].checked) {                                       // condicional para verificar o sexo selecionado [0]= masculino
            gênero = 'masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute ('src','foto-bb-menino.jpg')         // inserindo imagem de acordo com gênero e idade         
            } else if (idade < 18) {
                img.setAttribute ('src', 'foto-menino-adol.jpg')
            } else if (idade > 18 && idade < 60) {
                img.setAttribute ('src', 'foto-homem-ad.png')
            } else if (idade >= 60) {
                img.setAttribute ('src', 'foto-homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {                                 // condicional para verificar o sexo selecionado [1]= feminino                  
            gênero = 'feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute ('src', 'foto-bebe-menina.jpg')     // inserindo imagem de acordo com gênero e idade            
            } else if (idade < 18) {
                img.setAttribute ('src', 'foto-adol-girl.jpg')
            } else if (idade > 18 && idade < 60) {
                img.setAttribute ('src', 'foto-adult-woman.jpg')
            } else {
                img.setAttribute ('src', 'foto-idosa-woman.jpg')                
            }
        }
        res.style.textAlign = 'center'                               // centralizando RESULTADO (res)
        res.style.backgroundColor = 'white'                         // inserindo cor de fundo no RESULTADO (res)
        res.innerHTML = `Detectamos uma pessoa do sexo ${gênero} com ${idade} anos de idade.`       // inserindo mensagem no RESULTADO (res)
        res.appendChild(img)                                                             // acrescentando imagem no elemento filho no RESULTADO através do metodo append
    }
}