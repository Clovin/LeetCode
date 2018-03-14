/**
 * Created by Clovin on 15/03/2018.
 */
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  let result = []

  // two
  while (s.includes('w')) {
    result.push(2)
    let temp = s.indexOf('t')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('w')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('o')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // zero
  while (s.includes('z')) {
    result.push(0)
    let temp = s.indexOf('z')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('r')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('o')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // six
  while (s.includes('x')) {
    result.push(6)
    let temp = s.indexOf('s')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('i')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('x')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // seven
  while (s.includes('s')) {
    result.push(7)
    let temp = s.indexOf('s')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('v')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('n')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // five
  while (s.includes('v')) {
    result.push(5)
    let temp = s.indexOf('f')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('i')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('v')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // four
  while (s.includes('f')) {
    result.push(4)
    let temp = s.indexOf('f')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('o')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('u')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('r')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // one
  while (s.includes('o')) {
    result.push(1)
    let temp = s.indexOf('o')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('n')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // nine
  while (s.includes('n')) {
    result.push(9)
    let temp = s.indexOf('n')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('i')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('n')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // three
  while (s.includes('r')) {
    result.push(3)
    let temp = s.indexOf('t')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('h')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('r')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  // eight
  while (s.includes('e')) {
    result.push(8)
    let temp = s.indexOf('e')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('i')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('g')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('h')
    s = s.slice(0, temp) + s.slice(temp + 1)
    temp = s.indexOf('t')
    s = s.slice(0, temp) + s.slice(temp + 1)
  }

  result.sort((a, b) => a - b)
  return result.join('')
}
