'use strict'

function juego(jugador) {
  const juego = ['piedra', 'papel', 'tijeras']
  const computer = Math.floor(Math.random() * (3))
  console.log(computer)
  function jugar() {
    if (jugador === computer) {
      empate()
    } else {

      switch (jugador) {
        case 0 && computer === 2:
          ganar()
          break
        case 1 && computer === 0:
          ganar()
          break
        case 2 && computer === 1:
          ganar()
          break
        default: perder()
      }
    }
    function empate() {
      console.log('Empate')
    }

    function ganar() {
      console.log('Tu ganas: ' + juego[jugador] + ' vence ' + juego[computer])
    }

    function perder() {
      console.log('Tu pierdes: ' + juego[computer] + ' vence ' + juego[jugador])
    }
  }
  jugar()

}
console.log('Se juega escribiendo "juego(numero entre 0 y 2)" .')