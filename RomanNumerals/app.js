
//3999

const buttonClick = document.getElementById("onclick")
const post = document.getElementById("post")

const I = 1
const IV = 4
const V = 5
const IX = 9
const X = 10
const XL = 40
const L = 50
const C = 100
const CD = 400
const D = 500

const num = { I: 1, IV: 4, V: 5 }

//console.log(num.IV)

buttonClick.addEventListener("click", function () {
    const inPutText = document.getElementById("input").value

    checkRoman(inPutText)
})

function checkRoman(inPutText) {
    //const inPutText = document.getElementById("input").value
    //const postText = document.createElement("p")
    // postText.innerText = inPutText
    // post.append(postText)
    // if (inPutText.toUpperCase() === "X") {
    //     console.log("10")
    // }
    //romanLength = inPutText.length
    let romanNumber = []
    for (let i = 0; i < inPutText.length; i++) {
        romanNumber[i] = inPutText.toUpperCase().charAt(i);
    }
    postRoman(countNumbers(romanNumber))
}

function countNumbers(romanNumber) {

    let arabic = 0
    let letter = ""
    for (let i = 0; i < romanNumber.length; i++) {
        letter = romanNumber[i]
        if ((romanNumber[i] + romanNumber[i + 1]) === "IV") {
            console.log(num.IV)
            //console.log(num.`${ letter }`)
            arabic = arabic + IV
            i++
        } else if (romanNumber[i] + romanNumber[i + 1] === "IX") {
            arabic = arabic + IX
            i++
        } else if (romanNumber[i] + romanNumber[i + 1] === "XL") {
            arabic = arabic + XL
            i++
        } else if (romanNumber[i] + romanNumber[i + 1] === "CD") {
            arabic = arabic + CD
            i++
        } else if (romanNumber[i] === "I") {
            arabic = arabic + IV
        } else if (romanNumber[i] === "V") {
            arabic = arabic + V
        } else if (romanNumber[i] === "X") {
            arabic = arabic + X
        } else if (romanNumber[i] === "L") {
            arabic = arabic + L
        } else if (romanNumber[i] === "C") {
            arabic = arabic + C
        } else if (romanNumber[i] === "D") {
            arabic = arabic + D
        } else alert("Not Valid")
    }
    return arabic
}

function postRoman(item) {

    const postText = document.createElement("p")

    postText.innerText = item
    post.prepend(postText)
}
