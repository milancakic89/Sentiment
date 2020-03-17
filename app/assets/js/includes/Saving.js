const Elements = require('./Elements');
const LS = require('./LS');
const UI = require('./UI');

exports.saveLexicon = function(){
    const lexicon = [];
    let saveAll = Elements.lexiconResults.children;
    if(saveAll){
        for(let i = 0; i < saveAll.length; i++){
            let data = {word: saveAll[i].children[0].value, sentiment: saveAll[i].children[1].value}
            lexicon.push(data);
        }
    }else{
        localStorage.setItem('lexicon', []);
    }
    LS.saveStorage(lexicon);

}
exports.addNew = function(e){
    let elementSave = e.target;
    let elementSentinel = elementSave.previousElementSibling;
    let elementWord = elementSentinel.previousElementSibling;

    let data = {word: elementWord.value, sentiment: elementSentinel.value};
    UI.createSingle(data);
   
}
exports.changing = function(e){
    let input = e.target;
    let previous = input.previousElementSibling;
    let val = input.value;
    if(val > 0){
        previous.className = "lexcon-input-positive";
        input.className = "lexcon-input-positive";
    }else if(val < 0){
        previous.className = "lexcon-input-negative";
        input.className = "lexcon-input-negative";
    }else if(val === 0){
        previous.className = "lexcon-input";
        input.className = "lexcon-input";
    }
}