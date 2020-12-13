let bigImg = document.querySelector(`.bigimage`)
let imgOne= document.querySelector(`#one`)
let imgTwo= document.querySelector(`#two`)
let imgThree= document.querySelector(`#three`)

let setThumbOne = function() {
    let theNewSrcUrl = imgOne.getAttribute(`src`)
    bigImg.setAttribute(`src`, theNewSrcUrl)
}
let setThumbTwo = function() {
    let theNewSrcUrl = imgTwo.getAttribute(`src`)
    bigImg.setAttribute(`src`, theNewSrcUrl)
}
let setThumbThree = function() {
    let theNewSrcUrl = imgThree.getAttribute(`src`)
    bigImg.setAttribute(`src`, theNewSrcUrl)
}


imgOne.addEventListener(`click`,setThumbOne)
imgTwo.addEventListener(`click`,setThumbTwo)
imgThree.addEventListener(`click`,setThumbThree)