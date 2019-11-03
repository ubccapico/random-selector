const parse = require('csv-parse')
const chalk = require('chalk')
const ora = require('ora')
const { readFile } = require('fs')
const { promisify } = require('util')
const readFileP = promisify(readFile)
const parseP = promisify(parse)
const log = console.log

const randomColor = () => '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)

const selectRandomName = (names, numberOfStudents) => names.sort((a, b) => a - b).slice(0, numberOfStudents)

const randomSelector = async (fileName, numberOfStudents) => {
  let delay = 1500
  const spinner = ora('Initializing random selection algorithm').start()
  setTimeout(() => (spinner.text = 'Reading student names'), delay)
  setTimeout(() => (spinner.text = 'Training ML model'), delay += 1600)
  setTimeout(() => (spinner.text = 'Accepting bribes'), delay += 2000)
  setTimeout(() => (spinner.text = 'BTC Address: 3P3Q1fgbvVK89JBNqZQvsd1t'), delay += 900)
  setTimeout(() => (spinner.text = 'Accepting better bribes'), delay += 2000)
  delay += 1000

  const names = await readFileP(fileName)
    .then(data => parseP(data, { delimiter: ',', columns: true }))
    .then(data => data.map(x => x[Object.keys(x)[0]]))

  names.forEach((name, i) => {
    setTimeout(() => (spinner.text = name), delay += 70)
  })
  setTimeout(() => spinner.stop(), delay)

  const winners = selectRandomName(names, numberOfStudents)

  setTimeout(() => log(chalk.hex(randomColor()).bold('WINNERS:')), delay += 1000)

  winners.forEach((name) => {
    setTimeout(() => log(chalk.hex(randomColor()).bold(name)), delay += 1500)
  })
}

randomSelector('./names.csv', 5)
