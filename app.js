const wordsTextArea = document.querySelector('.container .word');
const countbtn = document.querySelector('.container .count-btn');
const wordCount = document.querySelector('.container .word-count span');

const countWords = () => {
    let words = wordsTextArea.value;
    let wordsTrimmed = words.replace(/\s+/g, '').trim()
    let splitWords = wordsTrimmed.split('');
    let numberofWords = splitWords.length;
    if (splitWords[0] = '') {   
        numberofWords = 0
    }
    wordCount.innerText = numberofWords;
}

countbtn.addEventListener('click', countWords)

