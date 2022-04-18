// https://www.chartjs.org/docs/3.6.1/getting-started/integration.html#bundlers-webpack-rollup-etc
import ChartJS from 'chart.js/auto'
import Navbar from './navbar'
// https://listjs.com/
import ListJS from 'list.js'

Navbar.init()

window.ChartJS = ChartJS
window.ListJS = ListJS
