const Elements = require('./Elements');
const LS = require("./LS");

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
exports.deleteWord = function(e){
    LS.removeOneFromStorage(e.target)
}

