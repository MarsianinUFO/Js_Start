alert('Hello')
const money = prompt('How much money do you have ?')
const periode = prompt('What priode ypu want to keep your money in our bank ?')
const presantage = prompt('Precentage of a year')

console.log(money, periode, presantage)


result = money*(1+presantage/100) **periode 
profit = result - money

alert(result.toFixed(2))
alert(profit.toFixed(2))
