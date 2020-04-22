
let tempString = 'Hello Hello. How are all you guys doing today? Today, I am doing great!'
console.log('hi')
// Add each individual word in an input to an object
//let strObj = {}
// if word already in array key[value]++, if not key[value] == 1
const listOfWords = document.getElementById('word-list')
const freqHeader = document.getElementById('freq-header')
const formChecker = document.getElementById('doc-checker')
const formInput = document.getElementById('form-input')

//formInput.size = "50"

//take input on submit and turn into array
//string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(/\s/);

function countFreqs(e) {
    e.preventDefault()
    let newArr = []
    let strObj = {}
    listOfWords.innerHTML = ''
    let str = formInput.value
    let arr = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ')
    console.log(arr)
    arr.forEach(word => {
        if (!strObj[word]) {
            strObj[word] = 1
        } else {
            strObj[word]++
        }
    })
    console.log(strObj)
    //console.log(Object.keys(strObj).sort())
    for (let word in strObj) {
        newArr.push([word, strObj[word]])
    }
    newArr.sort((a, b) => {
        return b[1] - a[1]
    })
    console.log(newArr)
    freqHeader.textContent = `Word Frequencies (a total of ${newArr.length} different words)`
    newArr.forEach(wordPair => {
        let li = document.createElement('li')
        li.textContent = `${wordPair[0]} : ${wordPair[1]}`
        listOfWords.appendChild(li)
    })
}
// may need to trim end of words?
//countFreqs(tempString)

formChecker.addEventListener('submit', countFreqs)
//for each word in array add to object

//append each object property to ul in order of frequency