const Elements = require('./Elements');
const LS = require('./LS');

exports.analizeDocument = function(){
    let input = Elements.buttonUpload;
    let message = '';
    if(input.files[0]){
        message = '';
            let reader = new FileReader();
            reader.onload = function(){
                convertTextToArray(reader.result);
            };
            reader.readAsText(input.files[0]);   
        }else{
            message = 'File not selected'
        }
    Elements.calculatorMessage.textContent = message;
    showLoading();  
}
function convertTextToArray(text){
let newText = text.split(/[ ,]+/);
    LS.getStorage().then(lexicon=>{
        compareTextToLexicon(newText, lexicon);
    })
}
function showLoading(){
    Elements.resultScreen.classList.add('hide-display');
    Elements.calculatorAnimation.classList.remove('hide-display');
    setTimeout(delay => showResults() ,1000);
 }
 function showResults(){
     Elements.calculatorAnimation.classList.add('hide-display');
     Elements.resultScreen.classList.remove('hide-display');
 }
 function compareTextToLexicon(text, lexicon){
    let positive = 0;
    let negative = 0;
    let neutral = 0;
    let positiveTotal = 0;
    let negativeTotal = 0;
     text.forEach(element => {
        lexicon.forEach(lex =>{
            if(element.toUpperCase() == lex.word.toUpperCase()){
                if(lex.sentiment === 0){
                    neutral++;
                }else if (lex.sentiment > 0){
                    positive++;
                    positiveTotal += lex.sentiment;
                }else{
                    negative++;
                    negativeTotal += lex.sentiment;
                }
            }else{
               // console.log(element.toUpperCase() +'!=='+ lex.word.toUpperCase())
            }
        })
     });
     console.log('statistics')
     console.log("positive: "+positive)
     console.log("negative: "+negative)
     console.log("neutral: "+neutral)
     console.log('Positive Total: '+positiveTotal.toFixed(2))
     console.log('Negative Total: '+negativeTotal.toFixed(2))
 }