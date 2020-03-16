const Elements = require('./Elements');

exports.getCalculatorPage = function(){
    Elements.lexiconPage.classList.add('hide-display');
    Elements.lexiconPage.classList.remove('show-display');
    Elements.calculatorPage.classList.remove('hide-display');
    Elements.calculatorPage.classList.add('show-display');
    Elements.lexiconLi.classList.remove('active');
    Elements.calculatorLi.classList.add('active');
}
exports.getLexiconPage = function(){
    Elements.calculatorPage.classList.add('hide-display');
    Elements.calculatorPage.classList.remove('show-display');
    Elements.lexiconPage.classList.add('show-display');
    Elements.lexiconPage.classList.remove('hide-display');
    Elements.lexiconLi.classList.add('active');
    Elements.calculatorLi.classList.remove('active');
}

function showLoading(){
   Elements.resultScreen.classList.add('hide-display');
   Elements.calculatorAnimation.classList.remove('hide-display');
   setTimeout(delay => showResults() ,2000);
}
function showResults(){
    Elements.calculatorAnimation.classList.add('hide-display');
    Elements.resultScreen.classList.remove('hide-display');
}


exports.analizeDocument = function(){
    let input = Elements.buttonUpload;

    if(input.files[0]){
            let reader = new FileReader();
            reader.onload = function(){
                convertTextToArray(reader.result);
            };
            reader.readAsText(input.files[0]);   
        }
    


    //Elements.calculatorMessage.textContent = message;
    showLoading();
   // return resultText;
    
}
function convertTextToArray(text){
   let newText = text.split(/[ ,]+/).filter(Boolean);
    console.log(newText);
}