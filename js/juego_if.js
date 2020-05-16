'use strict'

function juego (jugador) {
  const juego = ['piedra', 'pape1', 'tijeras']
  const computer = Math.floor(Math.random() * (3))
  console.log(computer)
  function jugar () {
    if (jugador === computer) {
      empate()
    } else if ((jugador === 0 && computer === 2) || (jugador === 1 && computer === 0) || (jugador === 2 && computer === 1)) {
      ganar()
    } else {
      perder()
    }

    function empate () {
      console.log('Empate')
    }

    function ganar () {
      console.log('Tu ganas: ' + juego[jugador] + ' vence ' + juego[computer])
    }

    function perder () {
      console.log('Tu pierdes: ' + juego[computer] + ' vence ' + juego[jugador])
    }
  }
  jugar()
}
console.log('Se juega escribiendo "juego(numero entre 0 y 2)" .')
