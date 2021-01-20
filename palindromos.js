let str = 'afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood'
encontrarPalindromos = (str) => {
    let arrChars = str.split('')
    let palindromos = []
    for (let i = 0; i < arrChars.length; i++) {
        for (let y = 2; y < arrChars.length; y++){
            let a = arrChars.slice(i, y).join('').toLowerCase()
            let b = arrChars.slice(i, y).reverse().join('').toLowerCase()
            if (a.indexOf(b) >= 0 && a.length >= 3) {
                palindromos.push(a)
            }
        }
    }
    return palindromos
}

console.log(encontrarPalindromos(str))

esPalindromo = (str) => {
    let v = str.replace(/ /g, '').toLowerCase()
    return v == v.split('').reverse().join('')
}

console.log(esPalindromo('Amad a la dama'))

casiEsPalindromo = (str) => {
    let v = str.replace(/ /g, '').toLowerCase()
    let x = v.split('').filter((w, i)=> w== v.split('').reverse()[i])
    return x.length + 2 >= v.length
}

console.log(casiEsPalindromo('amad ale dama'))