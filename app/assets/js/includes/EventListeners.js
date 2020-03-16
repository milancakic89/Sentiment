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
exports.analizeDocument = function(){
    showLoading();
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
exports.readFile = function(){
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function(){
      let text = reader.result;
      //console.log(text)
    };
    let output = reader.readAsText(input.files[0]);
    console.log(output);
}