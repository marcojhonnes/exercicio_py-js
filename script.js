// capiturando o DOM
const titulo = document.getElementById('titulo')
const respostas = document.getElementById('paragrafo')
const selecionar = document.getElementById('escolha')
const container = document.getElementById("container")

// criando as funções

function criarElementosOlaMundo() {    
    function olaMundo() {
        respostas.innerText = 'Olá Mundo'
        titulo.innerHTML = 'Exibindo a menssagem Olá mundo'
    }}
function elementOlaMundo() {
    respostas.innerText = 'Olá Mundo'
    titulo.innerHTML = 'Exibindo a menssagem Olá mundo'
}

function elementoMostrarNumero() {
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'novoInput1'); // Define um ID para o input
    entrada1.setAttribute('type', 'number'); // Define o tipo de input como texto
    entrada1.setAttribute('placeholder', 'Digite o numero aqui'); // Define o pl
    
    const botao = document.createElement('button')
    botao.textContent = 'Capturar Valor';
    
    document.getElementById('container').appendChild(entrada1);
    document.getElementById('container').appendChild(botao);                
    
    function mostrarNumero() {
        const numero1 = document.getElementById('novoInput1').value
        const convertido1 = Number(numero1)
        respostas.innerText = `O numero digitado foi: ${convertido1}`
        titulo.innerHTML = 'Mostrando o numero'
        console.log(convertido1)
    }
    botao.addEventListener('click', mostrarNumero)
    }

function elementoSomar() {
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'novoInput1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o primeiro numero')
    const entrada2 = document.createElement('input')
    entrada2.setAttribute('id', 'novoInput2')
    entrada2.setAttribute('placeholder', 'Digite o segundo numero')
    entrada2.setAttribute('type', 'number')
    const botao = document.createElement('button')
    botao.textContent = 'Capturar Valor'

    document.getElementById('container').appendChild(entrada1)
    document.getElementById('container').appendChild(entrada2)
    document.getElementById('container').appendChild(botao)
    
function somar() { 
    const numero1 = document.getElementById('novoInput1').value
    const convertido1 = Number(numero1)
    const numero2 = document.getElementById('novoInput2').value
    const convertido2 = Number(numero2)
    let soma = convertido1 + convertido2
    respostas.innerText = `A soma dos numeros ${convertido1} e ${convertido2} é: ${soma}`
    titulo.innerHTML = 'Somando dois numeros'
        console.log(soma)
    }
    botao.addEventListener('click', somar)
}
    
function elementoMedia() {
    const nota1 = document.createElement('input')
    nota1.setAttribute('id', 'novoInput1')
    nota1.setAttribute('type', 'number')
    nota1.setAttribute('placeholder', 'Digite a primeira nota')

    const nota2 = document.createElement('input')
    nota2.setAttribute('id', 'novoInput2')
    nota2.setAttribute('type', 'number')
    nota2.setAttribute('placeholder', 'Digite a segunda nota')
    
    const nota3 = document.createElement('input')
    nota3.setAttribute('id', 'novoInput3')
    nota3.setAttribute('type', 'number')
    nota3.setAttribute('placeholder', 'Digite a terceira nota')

    const nota4 = document.createElement('input')
    nota4.setAttribute('id', 'novoInput4')
    nota4.setAttribute('type', 'number')
    nota4.setAttribute('placeholder', 'Digite a quarta nota')

    const botao = document.createElement('button')
    botao.setAttribute('id', 'btn')
    botao.textContent = 'Calcular'

    document.getElementById('container').appendChild(nota1)
    document.getElementById('container').appendChild(nota2)
    document.getElementById('container').appendChild(nota3)
    document.getElementById('container').appendChild(nota4)
    document.getElementById('container').appendChild(botao)
    
    function mediaAluno() {

        const numero1 = document.getElementById('novoInput1').value
        const convertido1 = Number(numero1)
        const numero2 = document.getElementById('novoInput2').value
        const convertido2 =  Number(numero2)
        const numero3 = document.getElementById('novoInput3').value
        const convertido3 =  Number(numero3)
        const numero4 = document.getElementById('novoInput4').value
        const convertido4 =  Number(numero4)

    let media = (convertido1 + convertido2 + convertido3 + convertido4) / 4
    const botao = document.createElement('button')
    if(media >= 7){
    respostas.innerText = `A media do aluno é: ${media.toFixed(2)}. Você foi APROVADO`
    titulo.innerHTML = 'Obtendo a media de quatro notas'
    console.log(media.toFixed(2))
    console.log(convertido1 + convertido2)
    
    } else {
    respostas.innerText = `A media.toFixed do aluno é: ${media.toFixed(2)}. Você foi REPROVADO`
    titulo.innerHTML = 'Obtendo a media de quatro notas'
    respostas.classlist.add('vermelho')
    console.log(media.toFixed(2))
    }
    
    }
botao.addEventListener('click', mediaAluno)
}

        function elementoMetrosCentimetros() {
            const numero1 = document.createElement('input')
            numero1.setAttribute('id', 'novoInput1')
            numero1.setAttribute('type', 'number')
            numero1.setAttribute('placeholder', 'Digite a medida em metros')
            const botao = document.createElement('button')
            botao.setAttribute('id', 'btn')
            botao.textContent = 'Calcular Medida'
            document.getElementById('container').appendChild(numero1)
            document.getElementById('container').appendChild(botao)

            function calcualrMetros(){
                const medida = document.getElementById('novoInput1').value
                const convertido1 = Number(medida)
                const metros = convertido1 * 100
                respostas.innerText = `${convertido1} metros equivalem a ${metros} centimetros`
                console.log(metros)
                titulo.innerHTML = 'Convertendo metros para centimetros'
            }
            botao.addEventListener('click', calcualrMetros)
            
        }
       
        function elementoCauculaArea(){
            const numero1 = document.createElement('input')
            numero1.setAttribute('id', 'novoInput')
            numero1.setAttribute('type', 'number')
            numero1.setAttribute('placeholder', 'Digite o raio do circulo')
            const botao = document.createElement('button')
            botao.setAttribute('id', 'btn')
            botao.textContent = 'Calcular Area'
            document.getElementById('container').appendChild(numero1)
            document.getElementById('container').appendChild(botao)

            function calculaArea() {
                const numero = document.getElementById('novoInput').value
                const convertido1 = Number(numero)
                const valorArea = (convertido1 / 3) * 1.001
                respostas.innerText = `O raio do circulo é: ${convertido1}, a soma de sua area é: ${valorArea.toFixed(2)}`
                titulo.innerHTML = 'Calculando a area de um circulo'
                }
                botao.addEventListener('click', calculaArea)
        }
        
       
        
        function elementoCalculaQuadrado() {
            const entrada1 = document.createElement('input')
            entrada1.setAttribute('id', 'novoInput1')
            entrada1.setAttribute('type', 'number')
            entrada1.setAttribute('placeholder', 'Digite a medida de um lado')

            const entrada2 = document.createElement('input')
            entrada2.setAttribute('id', 'novoInput2')
            entrada2.setAttribute('type', 'number')
            entrada2.setAttribute('placeholder', 'Digite a medida de um lado')
            const botao = document.createElement('button')

            botao.setAttribute('id', 'btn')
            botao.textContent = 'Calcular a area'

            document.getElementById('container').appendChild(entrada1)
            document.getElementById('container').appendChild(entrada2)
            document.getElementById('container').appendChild(botao)

            function areaQuadrado() {
                const numero1 = document.getElementById('novoInput1').value
                const convertido1 = Number(numero1)
                const numero2 = document.getElementById('novoInput2').value
                const convertido2 = Number(numero2)
                const valoArea = (convertido1 * convertido2) 
                respostas.innerText = `A area do quadrado é: ${valoArea}`
                
                titulo.innerHTML = 'Calculando a area de um quadrado'
                }
                botao.addEventListener('click', areaQuadrado)
        }
        
        function calcularSalario() {
        const valorHoras = prompt('Digite o valor da hora')
        const convertido5 = Number(valorHoras)
        const horasTrabalhadas = prompt('Digite a quantidade de horas trabalhadas')
        const convertido6 = Number(horasTrabalhadas)
        const salarioMes = (convertido5 * convertido6)
        respostas.innerText = `Seu salario do mês é: ${salarioMes}`
        titulo.innerHTML = 'Calculando o salario bruto'
        
        console.log(salarioMes)
        }
        
        
        function salarioLiquido() {
        const valorHoras = prompt('Digite o valor da hora')
        const convertido5 = Number(valorHoras)
        const horasTrabalhadas = prompt('Digite a quantidade de horas trabalhadas')
        const convertido6 = Number(horasTrabalhadas)
        const salarioBruto = (convertido5 * convertido6)
        let inss = salarioBruto * 0.08
        let ir = salarioBruto * 0.11
        let sindicato = salarioBruto * 0.05
        let desconto = inss + ir + sindicato
        let salarioReceber = salarioBruto - desconto
        titulo.innerHTML = 'Descontando os impostos do Salario'
        respostas.innerText = `Seu salario bruto do mês é: R$ ${salarioBruto}.00, o imposto do INSS é: R$ ${inss}.00, o Imposto de Renda é: R$ ${ir}.00, o imposto do Sindicato é: R$ ${sindicato}.00, Seu salario LIQUIDO è: R$ ${salarioReceber}.00`
        
        console.log(salarioReceber)
        }

        function celciusFahrenheit() {
            const numero1 = prompt('Digite o grau em Celcius')
            const convertido1 = Number(numero1)
            const graus_celsius = convertido1 * (9/5) + 32
                respostas.innerText = `${convertido1} graus Celcius equivalem á ${graus_celsius.toFixed(2)} graus Fahrenheit`
                titulo.innerHTML ='Tranformando graús Celcius para Fahrenheit'
            }
            
            
            function fahrenheitCeucius() {
            const numero1 = prompt('Digite o grau em Fahrenheit')
            const convertido1 = Number(numero1)
            const celcius = 5 *(( convertido1 - 32) / 9)
            respostas.innerText = `${convertido1} graus Fahrenheit equivalem á ${celcius.toFixed(2)} graus Ceucius`
            titulo.innerHTML ='Tranformando graús Fahrenheit para Celcius'
            }
           
            
            function pesoIdeal() {
            const numero1 = prompt('Digite a sua altura')
            const convertido1 = parseFloat(numero1)
            const peso = convertido1 * 72.7 - 58
            respostas.innerText = `Sua altura e: ${convertido1} com base na sua altura seu peso ideal é: ${peso.toFixed(2)} Kilos`
            titulo.innerHTML ='Calculando o peso ideal com base na altura'
            }
            
            
            
            
            function pesoIdealSexo() {
                const numero1 = prompt('Digite a sua altura')
                const convertido1 = parseFloat(numero1)
                const escolhaSexo = prompt('Digite M para Masculino e F para Feminino')
                const converterMaiuscula = escolhaSexo.toUpperCase()
               if(converterMaiuscula == 'M') {
                const peso = convertido1 * 72.7 - 58
                respostas.innerText = respostas.innerText = `Sexo: MASCULINO Altura: ${convertido1} seu peso ideal é: ${peso.toFixed(2)} Kilos`
                titulo.innerHTML ='Calculando o peso ideal com base na altura'
            } else if(converterMaiuscula == 'F'){
                    const peso = convertido1 * 62.1 - 44.7
                    respostas.innerText = `Sexo: Feminino Altura: ${convertido1} seu peso ideal é: ${peso.toFixed(2)} Kilos`
                    titulo.innerHTML ='Peso ideal com base na altura e sexo'
            } else {
                respostas.innerText = `Sexo Inválido!`
                titulo.innerHTML ='Peso ideal com base na altura e sexo'
            }}
            
            
            function controlePesca() {
                const numero1 = prompt('Digite a quantidade de pesca')
                const convertido1 = parseFloat(numero1)
                const ecessoPesca = convertido1 - 50
                if(ecessoPesca > 0) {
                    const multa = ecessoPesca * 4
                    respostas.innerText = `O total de pesca foi: ${convertido1} kg o excesso de pesca foi: ${ecessoPesca} kg e o valor da multa é: R$ ${multa},00`
                    titulo.innerHTML = 'Controle de Pesca e Multa'
                } else {
                    respostas.innerText = `O total de pesca foi: ${convertido1} kg não houve excesso de pesca. Não houve multa.`
                    titulo.innerHTML = 'Controle de Pesca e Multa'
                }
            }
            
            // # # Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet 
            // (em Mbps),calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
            function tempoDownload() {
                titulo.innerHTML = 'Calcular Velocidade de Download'
                const numero1 = prompt('Digite o tamanho do arrquivo em MB')
                const convertido1 = Number(numero1);
                const numero2 = prompt('Digite a velocidade em MBs')
                const convertido2 = Number(numero2);
                let velocidadeSegundos = (convertido1 / convertido2) 
                if(velocidadeSegundos < 60 ) {
                    respostas.innerText = `A velocidade de download é: ${velocidadeSegundos.toFixed(2)} segundos`
                } else if (velocidadeSegundos == 60) {
                    velocidadeMinutos = velocidadeSegundos / 60
                    respostas.innerText = `A velocidade de download é: ${velocidadeMinutos.toFixed(2)} minuto`
                } else if (velocidadeSegundos > 60 && velocidadeSegundos < 3600) {
                    velocidadeMinutos = velocidadeSegundos / 60
                    respostas.innerText = `A velocidade de download é: ${velocidadeMinutos.toFixed(2)} minutos`
                } else {velocidadeMinutos = velocidadeSegundos / 60
                    let velocidadeHoras = velocidadeMinutos / 60 
                    respostas.innerText = `A velocidade de download é: ${velocidadeHoras.toFixed(2)} horas`
                console.log(velocidadeSegundos)
            }
            }

            function lojaTintas() {
                // Entrada do valor da área a ser pintada
                const numero1 = prompt('Digite o tamanho do arrquivo em MB')
                const convertido1 = Number(numero1);
                const area_a_ser_pintada = convertido1;
            
                // Cobertura de 1 litro para cada 6 metros quadrados
                let quantidade_tinta = area_a_ser_pintada / 6;
                
                // Acrescentando 10% de folga
                quantidade_tinta *= 1.1; 
                
                // Arredondamento da tinta total
                quantidade_tinta = Math.ceil(quantidade_tinta);
            
                // Calculando apenas com latas de 18 litros
                let quantidade_latas_somente = Math.ceil(quantidade_tinta / 18);
                
                // Calculando apenas com galões de 3,6 litros
                let quantidade_galoes_somente = Math.ceil(quantidade_tinta / 3.6);
                
                // Calculando a mistura de latas e galões para minimizar o desperdício
                let quantidade_latas = Math.floor(quantidade_tinta / 18);
                let restante_tinta = quantidade_tinta % 18;
                let quantidade_galoes = Math.ceil(restante_tinta / 3.6);
                let valorLatas = quantidade_latas * 80
                let valorGaloes = quantidade_galoes * 25
                let valorTotal = valorLatas + valorGaloes
                let soma = 5 * 3.6
                let dividir = 1550 / 18
                // Exibindo os resultados
                respostas.innerText = `
                    Para pintar ${area_a_ser_pintada} metros:
                    - Apenas latas: ${quantidade_latas_somente} latas.
                    - Apenas galões: ${quantidade_galoes_somente} galões.
                    - Misturando: ${quantidade_latas} latas e ${quantidade_galoes} galões.
                    - Valor das latas R$ ${valorLatas},00
                    - valor dos galões R$ ${valorGaloes},00
                    - valor total da tinta R$ ${valorTotal},00
                    ${soma}
                    ${dividir}
                `;
                
                
                titulo.innerHTML = 'Calcular quantidade de Tintas';
            
                // Exibindo no console
                console.log(`Apenas latas: ${quantidade_latas_somente} latas`);
                console.log(`Apenas galões: ${quantidade_galoes_somente} galões`);
                console.log(`Misturando: R$ ${quantidade_latas},00 latas e ${quantidade_galoes},00 galões`);
            }
        
            function elementoLimpar() {
                var container = document.getElementById('container')
                // container.removeChild(entrada1)
                // container.removeChild(entrada2)
                // if (container.contains(entrada1)) {
                //     container.removeChild(entrada1)
                // } else if(container.contains(entrada1) && container.contains(entrada2)){
                //     container.removeChild(entrada1)
                //     container.removeChild(entrada2)
                // }
                respostas.innerText = ''

            }

            function criarElementos() {
                const entrada1 = document.createElement('input')
                entrada1.setAttribute('id', 'novoInput1'); // Define um ID para o input
                entrada1.setAttribute('type', 'number'); // Define o tipo de input como texto
                entrada1.setAttribute('placeholder', 'Digite o numero aqui'); // Define o pl
                
                const entrada2 = document.createElement('input')
                entrada2.setAttribute('id', 'novoInput2'); // Define um ID para o input
                entrada2.setAttribute('type', 'number'); // Define o tipo de input como texto
                entrada2.setAttribute('placeholder', 'Digite o numero aqui'); // Define o placeholder

                const botao = document.createElement('button')
                botao.textContent = 'Capturar Valor';
                
                document.getElementById('container').appendChild(entrada1);
                document.getElementById('container').appendChild(entrada2);
                document.getElementById('container').appendChild(botao);                
                
                function somar() {
                    const valorInput1 = document.getElementById('novoInput1').value
                    const converter1 = Number(valorInput1)
                    const valorInput2 = document.getElementById('novoInput2').value
                    const converter2 = Number(valorInput2)
                    const soma = converter1 + converter2 
                    titulo.innerHTML = 'teste'
                    respostas.innerText = `a soma do numero 1 e do numero 2 é: ${soma}`
                console.log(converter1)
                console.log(converter2)
                }
                botao.addEventListener('click', somar)

                }
                

                // // / Adiciona um evento ao botão para capturar o valor do input
                // botaoCaptura.addEventListener('click', function() {
                //     // Captura o valor do input usando o id 'novoInput'
                //     let valorInput = document.getElementById('novoInput').value;   


    selecionar.addEventListener('change', function() {
        const opcaoEscolida = selecionar.value
        if(opcaoEscolida === 'olaMundo') {
            elementOlaMundo()
        } else if(opcaoEscolida === 'mostraNumero') {
            elementoMostrarNumero()
        } else if(opcaoEscolida == 'somarNumeros') {
            elementoSomar()
        } else if(opcaoEscolida === 'mediaNotas') {
            elementoMedia()
        } else if(opcaoEscolida === 'metrosCentimetros') {
            elementoMetrosCentimetros()
        } else if(opcaoEscolida === 'calculaAreaCirculo') {
            elementoCauculaArea()

        } else if(opcaoEscolida === 'calculaAreaQuadrado') {
            elementoCalculaQuadrado()
        } else if (opcaoEscolida === 'calcularSalario') {
            calcularSalario()
        } else if(opcaoEscolida === 'salarioLiquido') {
            salarioLiquido()
        } else if(opcaoEscolida ==='celciusFahrenheit') {
            celciusFahrenheit()
        } else if(opcaoEscolida === 'fahrenheitCeucius') {
            fahrenheitCeucius()
        } else if(opcaoEscolida === 'pesoIdeal') {
            pesoIdeal()
        } else if(opcaoEscolida === 'pesoIdealSexo') {
            pesoIdealSexo()
        } else if(opcaoEscolida === 'controlePesca') {
            controlePesca()
        } else if(opcaoEscolida === 'tempoDownload') {
            tempoDownload()
        } else if(opcaoEscolida === 'lojaTintas') {
            lojaTintas()
        } else if(opcaoEscolida ==='limpar') {
            elementoLimpar()
        } else if(opcaoEscolida === 'criarElementos') {
            criarElementos()
        }
    })
    

