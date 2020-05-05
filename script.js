// Add each individual word in an input to an object
// if word already in array key[value]++, if not key[value] == 1
const listOfWords = document.getElementById('word-list')
const freqHeader = document.getElementById('freq-header')
const formChecker = document.getElementById('doc-checker')
const formInput = document.getElementById('form-input')

//formInput.size = "50"

//take input on submit and turn into array

function countFreqs(e) {
    e.preventDefault()
    //let newArr = []
    let strObj = {}

    //Reset before each new submission
    listOfWords.innerHTML = ''

    //Remove punctuation and split input into individual words
    let str = formInput.value
    let arr = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ')


    //For each word in array add it to an object if it doesn't exist and increment if it does
    arr.forEach(word => {
        if (!strObj[word]) {
            strObj[word] = 1
        } else {
            strObj[word]++
        }
    })


    // For the entries in the object, sort them into descending order, then map them to list items
    // and append to document
    let mapped = Object.entries(strObj).sort((a, b) => {
        return b[1] - a[1]
    }).map(([k, v]) => {
        let li = document.createElement('li')
        li.textContent = `${k} : ${v}`
        listOfWords.appendChild(li)
    })


    // Include total different words in header
    freqHeader.textContent = `Word Frequencies: (a total of ${mapped.length} different words)`
}

// Count frequencies of words on form submission
formChecker.addEventListener('submit', countFreqs)


//need to trim each word?