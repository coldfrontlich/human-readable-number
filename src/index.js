module.exports = function toReadable (number) {
  const dictLessThanTen = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  }

  const dictLessThanTwenty = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
  }

  const dictLessThanOneHundred = {
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
  }

  if (number < 10) {
    return dictLessThanTen[String(number)];
  }
  if (number < 20) {
    return dictLessThanTwenty[String(number)];
  }
  if (number === 20 || number === 30 || number === 40
    || number === 50 || number === 60 || number === 70
    || number === 80 || number === 90) {
      return dictLessThanOneHundred[String(number)];
  }
  if (number < 100) {
    firstNumber = String(Math.trunc(number / 10) * 10);
    secondNumber = String(number % 10);
    return dictLessThanOneHundred[firstNumber] + ' ' + dictLessThanTen[secondNumber];
  }
  if (number < 1000) {
    firstNumber = String(Math.trunc(number / 100));
    secondNumber = number % 100;
    if (secondNumber < 10) {
      if (secondNumber === 0) {
        return dictLessThanTen[firstNumber] + ' hundred';
      }
      secondNumber = String(secondNumber);
      return dictLessThanTen[firstNumber] + ' hundred ' + dictLessThanTen[secondNumber];
    }
    if (secondNumber < 20) {
      secondNumber = String(secondNumber);
      return dictLessThanTen[firstNumber] + ' hundred ' + dictLessThanTwenty[secondNumber];
    }
     if (secondNumber < 100) {
      firstPieceOfSecond = String(Math.trunc(secondNumber / 10) * 10)
      lastPieceOfSecond = String(secondNumber % 10);
      if (lastPieceOfSecond === '0') {
        return dictLessThanTen[firstNumber] + ' hundred ' + dictLessThanOneHundred[firstPieceOfSecond];
      }
      return dictLessThanTen[firstNumber] + ' hundred ' + dictLessThanOneHundred[firstPieceOfSecond] + ' ' + dictLessThanTen[lastPieceOfSecond];
    }
  }
}
