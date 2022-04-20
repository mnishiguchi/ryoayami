// https://listjs.com/
import ListSearch from 'list.js'

window.App = window.App || {}

window.App.initListSearch = (element, options) => new ListSearch(element, options)

// https://party.js.org
// Party.js is loaded from CDN because it wouldn't get loaded here for some reason.
function initConfettiEffect() {
  document.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'IMG') return

    window.party.confetti(event.target, {
      count: party.variation.range(30, 60),
      spread: party.variation.range(40, 80),
      size: 1.5
    })
  })
}

initConfettiEffect()
