let answerBox = document.getElementById('answerBox');
let calculateButton = document.getElementById('button');

calculateButton.addEventListener('click', function(){
    let word = document.getElementById('inputWord').value;
    let answer = word.length;
    answerBox.innerText = answer;
})