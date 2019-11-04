const parse = require('csv-parse')
const chalk = require('chalk')
const ora = require('ora')
const { readFile } = require('fs')
const { promisify } = require('util')
const readFileP = promisify(readFile)
const parseP = promisify(parse)
const log = console.log

const randomColor = () => '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)

const selectRandomName = (names, numberOfStudents) => names
  .sort(() => Math.random() - Math.random()).slice(0, numberOfStudents)

const randomSelector = async (fileName, numberOfStudents) => {
  let delay = 2000
  const spinner = ora('Initializing initialization algorithm...').start()
  setTimeout(() => (spinner.text = 'Reading student names...'), delay)
  setTimeout(() => (spinner.text = 'Training ML models...'), delay += 1600)
  setTimeout(() => (spinner.text = 'Accepting bribes...'), delay += 1500)
  setTimeout(() => (spinner.text = 'BTC Address: 3P3Q1fgbvVK89JBNqZQvsd1t'), delay += 1200)
  setTimeout(() => (spinner.text = 'Accepting better bribes...'), delay += 2000)
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

  winners.forEach((name, i) => {
    setTimeout(() => log(chalk.hex(randomColor()).bold(`${i + 1}: ${name}`)), delay += 3000)
  })

  setTimeout(() => log(chalk.hex(randomColor()).bold(`${numberOfStudents + 1}: Justin Lee 😎`)), delay += 3000)
  setTimeout(() => log(chalk.hex(randomColor()).bold('CONGRATULATIONS!')), delay += 1000)
  setTimeout(() => log(chalk.hex(randomColor()).bold('Thank you all for coming. See you at the next hackathon!')), delay += 1000)
}

randomSelector('./names.csv', 5)
