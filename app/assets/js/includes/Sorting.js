const UI = require('./UI');
const Elements = require('./Elements');
const LS = require("./LS");

exports.sortLexicon = function(e){
    //remove all current screen lexicon elements before showing sort
    while(Elements.lexiconResults.firstElementChild){
        Elements.lexiconResults.firstElementChild.remove();
    }
    let sort = e.target.value;
    let result;

    //sorting by value
    switch(sort){
        case 'Positive':
            LS.getStorage().then(results=>{
                result = results.filter(row=>{
                    return row.sentiment > 0;
                })
                UI.createRows(result)
            })
            break;

        case 'Negative':
            LS.getStorage().then(results=>{
                result = results.filter(row=>{
                    return row.sentiment < 0;

                })
                UI.createRows(result)
            })
            break;

        case 'All':
            LS.getStorage().then(results=>{
                result = results;
                UI.createRows(result)
            })
            break;
        default:
            LS.getStorage().then(results=>{
                result = results;
                UI.createRows(result)
            })
         break;
    }
}
exports.sortNegative = function(){
    
}
exports.showAll = function(){
    
}