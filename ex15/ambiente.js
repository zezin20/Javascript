var num = [5, 8, 2, 9, 3]
num.sort()
num.push(0)
console.log(num)
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1 ) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
