function bitwise(str) {
    let str2 = ''
    for(i=0; i< str.length; i++) {
       let charStr = str[i].charCodeAt().toString(2).padStart(8,0)
       charStr = charStr.split('')

        charStr[charStr.length - 1] = charStr[charStr.length - 1] - 0 ? 0 : 1
        charStr[charStr.length - 2] = charStr[charStr.length - 2] - 0 ? 0 : 1

        charStr = charStr.join('')

        charStr = String.fromCharCode(parseInt(charStr, 2))

        let MathRandom = (((Math.random() * 1000) | 0) + '').padStart(3,0)
        str2 +=charStr + MathRandom
    }

    return str2
}

function reBitwise(str) {
    let str2 = ''
    let str1 = ''
    for(item of str) {
        if(Number.isNaN(item - 0)) {
            str2 +=item
        }
    }

    for(i = 0; i< str2.length; i++) {
        let = charStr = str2[i].charCodeAt().toString(2).padStart(8,0)
        charStr = charStr.split('')
        charStr[charStr.length - 1] = charStr[charStr.length - 1] - 0 ? 0 : 1
        charStr[charStr.length - 2] = charStr[charStr.length - 2] - 0 ? 0 : 1

        charStr = charStr.join('')

        charStr = String.fromCharCode(parseInt(charStr, 2))

        str1 += charStr
    }

    return str1

}

let form = document.querySelector('.own-form')
let holder = document.querySelector('.card-header__text-span')
let input = document.querySelector('.input')
let form2 = document.querySelector('.own-form2')
let holder2 = document.querySelector('.card-header__text-span2')
let input2 = document.querySelector('.input2')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let inputVal = input.value
    let d = bitwise(inputVal.toString())
    holder.textContent = d
    form.reset()
})

form2.addEventListener('submit', function(e) {
    e.preventDefault()

    let inputVal2 = input2.value
    // console.log(inputVal)
    let c = reBitwise(inputVal2.toString())
    holder2.textContent = c
    form2.reset()
})