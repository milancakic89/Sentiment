const Elements = require('./Elements');
const Listeners = require('./Navigation');
const Saving = require('./Saving');


class UI{
      //creating lexicon rows
    static createRows(data){
        data.forEach(element => {
             createEl(element);
        });  
    }

}
exports.createSingle = function(element){
    createEl(element);
}
function createEl(element){
            let article = document.createElement('article');
            let inputOne = document.createElement('input')
            let inputTwo = document.createElement('input')
            let button = document.createElement('button')
 
            inputOne.type = 'text';
            inputOne.value = element.word;
            inputOne.addEventListener('change', Saving.saveLexicon);

            inputTwo.type = 'number';
            inputTwo.value = element.sentiment;
            inputTwo.addEventListener('change', Saving.changing);
            

            button.className = "delete-word";
            button.value = element.word;
            button.textContent = 'Delete';
            button.addEventListener('click', Listeners.deleteWord)

            if(element.sentiment === 0){
                inputOne.className = "lexcon-input";
                inputTwo.className = "lexcon-input";
            }else if(element.sentiment > 0){
                inputOne.className = "lexcon-input-positive";
                inputTwo.className = "lexcon-input-positive";
            }else if(element.sentiment < 0){
                inputOne.className = "lexcon-input-negative";
                inputTwo.className = "lexcon-input-negative";
            }
            article.appendChild(inputOne);
            article.appendChild(inputTwo);
            article.appendChild(button);

            Elements.lexiconResults.appendChild(article);
}

module.exports = UI;
