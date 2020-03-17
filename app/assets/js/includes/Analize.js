const Elements = require('./Elements');
const LS = require('./LS');

exports.analizeDocument = function(){
    let input = Elements.buttonUpload;
    let textArea = Elements.calculatorTextArea.value;
    if(input.files[0]){
            let reader = new FileReader();
            reader.onload = function(){
                convertTextToArray(reader.result);
            };
            reader.readAsText(input.files[0]);   
    }
    if(textArea !== ''){
        let newText = textArea.split(/[ ,]+/);
        let words = []
        newText.forEach(element => {
            // removing . at the end, also ? and ! to get clean word
           if(element.length){
               let word = element;
                while(word[word.length - 1] === '.' || word[word.length - 1] === '!' || word[word.length - 1] === '?'){
                   word = word.slice(0, -1);
                } 
                words.push(word);     
           }
        });
        LS.getStorage().then(lexicon=>{
            compareTextAreaToLexicon(words, lexicon);
        })
    }
    showLoading(); 
}
function convertTextToArray(text){
    let newText = text.split(/[ ,]+/);
    let words = []
    newText.forEach(element => {
       if(element.length){
           let word = element;
            while(word[word.length - 1] === '.' || word[word.length - 1] === '!' || word[word.length - 1] === '?'){
               word = word.slice(0, -1);
            } 
            words.push(word);     
       }
    });

    LS.getStorage().then(lexicon=>{
        compareTextToLexicon(words, lexicon);
    })
}
function showLoading(){
    Elements.textAreaRezults.classList.add('hide-display');
    Elements.resultScreen.classList.add('hide-display');
    Elements.calculatorAnimation.classList.remove('hide-display');
    setTimeout(delay => showResults() ,1000);
 }
 function showResults(){
    Elements.textAreaRezults.classList.remove('hide-display');
     Elements.calculatorAnimation.classList.add('hide-display');
     Elements.resultScreen.classList.remove('hide-display');
 }
 function compareTextToLexicon(text, lexicon){
    let positive = 0;
    let negative = 0;
    let neutral = 0;
    let positiveTotal = 0;
    let negativeTotal = 0;
    let overal = 0;
     text.forEach(element => {
        lexicon.forEach(lex =>{
            if(element.toUpperCase() == lex.word.toUpperCase()){
                if(Number(lex.sentiment) === 0){
                    neutral++;
                }else if (Number(lex.sentiment) > 0){
                    positive++;
                    positiveTotal += Number(lex.sentiment);
                }else if(Number(lex.sentiment) < 0){
                    negative++;
                    negativeTotal -= Number(lex.sentiment);
                }
            }
        })
     });
  
     overal = (positiveTotal + (-negativeTotal)).toFixed(2);
     Elements.positiveResult.textContent = positive;
     Elements.negativeResult.textContent = negative;
     Elements.neutralResult.textContent = neutral;
     Elements.overalResult.textContent = overal;


     if(overal > 0){
         Elements.overalResult.className = 'positive-overal';
     }else if(overal === 0){
         Elements.overalResult.className = 'neutral-overal';
     }else if(overal < 0){
         Elements.overalResult.className = 'negative-overal';
     }
 }
 exports.removeOldResult = function(){
    Elements.positiveTextAreaResult.textContent = '';
    Elements.negativeTextAreaResult.textContent = '';
    Elements.neutralTextAreaResult.textContent = '';
    Elements.overalTextAreaResult.textContent = '';
    Elements.positiveResult.textContent = '';
    Elements.negativeResult.textContent = '';
    Elements.neutralResult.textContent = '';
    Elements.overalResult.textContent = '';
 }
 function compareTextAreaToLexicon(text, lexicon){
    let positive = 0;
    let negative = 0;
    let neutral = 0;
    let positiveTotal = 0;
    let negativeTotal = 0;
    let overal = 0;
     text.forEach(element => {
        lexicon.forEach(lex =>{
            if(element.toUpperCase() == lex.word.toUpperCase()){
                if(Number(lex.sentiment) === 0){
                    neutral++;
                }else if (Number(lex.sentiment) > 0){
                    positive++;
                    positiveTotal += Number(lex.sentiment);
                }else if (Number(lex.sentiment) < 0){
                    negative++;
                    negativeTotal -= Number(lex.sentiment);
                }
            }
        })
     });
   
     overal = (positiveTotal + (-negativeTotal)).toFixed(2);
     Elements.positiveTextAreaResult.textContent = positive;
     Elements.negativeTextAreaResult.textContent = negative;
     Elements.neutralTextAreaResult.textContent = neutral;
     Elements.overalTextAreaResult.textContent = overal;

     if(overal > 0){
         Elements.overalTextAreaResult.className = 'positive-overal';
     }else if(overal === 0){
         Elements.overalTextAreaResult.className = 'neutral-overal';
     }else{
         Elements.overalTextAreaResult.className = 'negative-overal';
     }
 }