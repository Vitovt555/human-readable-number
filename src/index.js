module.exports = function toReadable (number) {
    const num = number.toString();
    const array0 = ['o','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    const array1 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  if(number > 100) {
    if(+(num[1] + num[2]) === 0) return array1[num[0]] + ' hundred'
    if(+(num[1] + num[2]) < 20) return array1[num[0]] + ' hundred ' + array1[+(num[1] + num[2])]
    if(+(num[1] + num[2]) === 20) return array1[num[0]] + ' hundred ' + array0[2]
    if(+(num[1] + num[2]) === 30) return array1[num[0]] + ' hundred ' + array0[3]
    if(+(num[1] + num[2]) === 40) return array1[num[0]] + ' hundred ' + array0[4]
    if(+(num[1] + num[2]) === 50) return array1[num[0]] + ' hundred ' + array0[5]
    if(+(num[1] + num[2]) === 60) return array1[num[0]] + ' hundred ' + array0[6]
    if(+(num[1] + num[2]) === 70) return array1[num[0]] + ' hundred ' + array0[7]
    if(+(num[1] + num[2]) === 80) return array1[num[0]] + ' hundred ' + array0[8]
    if(+(num[1] + num[2]) === 90) return array1[num[0]] + ' hundred ' + array0[9]

    return array1[num[0]] + ' hundred ' + array0[+num[1]] + ' ' + array1[+num[2]]
  }
  if(number > 19) {
    if(number === 100) return 'one hundred'
    if(+(num[0] + num[1]) === 20) return array0[2]
    if(+(num[0] + num[1]) === 30) return array0[3]
    if(+(num[0] + num[1]) === 40) return array0[4]
    if(+(num[0] + num[1]) === 50) return array0[5]
    if(+(num[0] + num[1]) === 60) return array0[6]
    if(+(num[0] + num[1]) === 70) return array0[7]
    if(+(num[0] + num[1]) === 80) return array0[8]
    if(+(num[0] + num[1]) === 90) return array0[9]
    return array0[+num[0]] + ' ' + array1[+num[1]]
  }
  else return array1[number]
}
