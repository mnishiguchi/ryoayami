// https://listjs.com/
import ListJS from 'list.js'

window.ListJS = ListJS

// https://party.js.org
document.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'IMG') return

  window.party.confetti(event.target, {
    count: party.variation.range(30, 60),
    spread: party.variation.range(40, 80),
    size: 1.5
  })
})
