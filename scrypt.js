function generateNumber() {

    const min =  Math.ceil(document.querySelector(".input-min").value)
    const max =  Math.floor(document.querySelector(".input-max").value)
    const resultFinal = document.querySelector(".result")

    const numberGenerate = Math.floor(Math.random() * (max - min + 1)) + min;

    resultFinal.innerHTML = `O seu número sorteado é: ${numberGenerate}`
}