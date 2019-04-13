var altura = 720
var largura = 1280
var vidas = 1
var tempo = 15
var cont = 0;

var criaMosquitoTempo = 1500
//Posição onde o mosquito vai ser inicializado pela primeira vez
var posicaoX = largura-100
var posicaoY = Math.floor(Math.random() * altura) - 90

var nivel = window.location.search
nivel = nivel.replace('?', '')


mosquitos = [
	{
		posicaoX: largura-100,
		posicaoY: Math.floor(Math.random() * altura) - 90,
		morto: false,
		id: 'mosquito1'

	},
	{
		posicaoX: largura-100,
		posicaoY: Math.floor(Math.random() * altura) - 90,
		morto: false,
		id: 'mosquito2'

	}
]

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			//vidas++
		}
	}
	
	if(cont==0){
		console.log("Primeira vez")
		posicaoX = largura-100;
	}
	else {
		console.log("Segunda vez ou mais")
		posicaoX = posicaoX - 40
	}
	 
	posicaoY = posicaoY + (Math.random() * 100 - 50)//Math.floor(Math.random() * altura) - 90

	//posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	//mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.width = '50px'
	mosquito.style.height = '50px'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}
	cont += 1
	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

