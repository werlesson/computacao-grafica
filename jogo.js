var altura = 720
var largura = 1280
var vidas = 1
var tempo = 60
var cont = 0;
var pontuacao = 0

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
		id: 'mosquito1',
		cont: 0

	},
	{
		posicaoX: largura-100,
		posicaoY: Math.floor(Math.random() * altura) - 90,
		morto: false,
		id: 'mosquito2',
		cont: 0


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


function posicaoRandomica(index) {
	if(!mosquitos[index].morto){

		//remover o mosquito anterior (caso exista)
		if(document.getElementById(mosquitos[index].id)) {
			document.getElementById(mosquitos[index].id).remove()

			//console.log('elemento selecionado foi: v' + vidas)
			
		}
		
		if(mosquitos[index].cont==0){
			console.log("Primeira vez")
			mosquitos[index].posicaoX = largura-100;
		}
		else {
			console.log("Segunda vez ou mais")
			mosquitos[index].posicaoX = mosquitos[index].posicaoX - 40
		}
		
		mosquitos[index].posicaoY = mosquitos[index].posicaoY + (Math.random() * 100 - 50)//Math.floor(Math.random() * altura) - 90
		
		//posicaoX = posicaoX < 0 ? 0 : posicaoX
		mosquitos[index].posicaoY = mosquitos[index].posicaoY < 0 ? 0 : mosquitos[index].posicaoY
		mosquitos[index].posicaoY = mosquitos[index].posicaoY > altura ? mosquitos[index].posicaoX - 40 : mosquitos[index].posicaoY
		if(	mosquitos[index].posicaoX < 400) {
			if(vidas > 3) {
				window.location.href = 'fim_de_jogo.html'
			} else {
				vidas++
				document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
				document.getElementById(mosquitos[index].id).style.display = 'none'
				if(document.getElementById(mosquitos[index].id))
					//document.getElementById(mosquitos[index].id).remove()
				mosquitos[index].morto = true	
			}
			
		}
		console.log(posicaoX, posicaoY)

		//criar o elemento html
		var mosquito = document.createElement('img')
		mosquito.src = 'imagens/mosquito.png'
		//mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		mosquito.style.width = '50px'
		mosquito.style.height = '50px'
		mosquito.style.left = mosquitos[index].posicaoX + 'px'
		mosquito.style.top = mosquitos[index].posicaoY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = mosquitos[index].id
		mosquito.onclick = function() {
			this.remove()
			mosquitos[index].morto = true
			pontuacao += 1
		}
		mosquitos[index].cont += 1
		document.body.appendChild(mosquito)
	}
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

