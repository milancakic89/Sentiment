const Elements = require('./Elements');
const Listeners = require('./EventListeners');
class UI{
    static createRows(data){
        data.forEach(element => {
             createEl(element); 
        });
        
    }
}
function createEl(element){
            let article = document.createElement('article');
            let inputOne = document.createElement('input')
            let inputTwo = document.createElement('input')
            let button = document.createElement('button')
 
            inputOne.className = "lexcon-input";
            inputOne.type = 'text';
            inputOne.value = element.word;

            inputTwo.className = "lexcon-input";
            inputTwo.type = 'number';
            inputTwo.value = element.sentiment;

            button.className = "delete-word";
            button.value = element.word;
            button.textContent = 'Delete';
            button.addEventListener('click', Listeners.deleteWord)


            article.className = "result-single";
            article.appendChild(inputOne);
            article.appendChild(inputTwo);
            article.appendChild(button);

            Elements.lexiconResults.appendChild(article);
}

module.exports = UI;

/*
                    <article class="result-single">
                        <input class="lexcon-input" type="text" value="some input"/>
                        <input class="lexcon-input" type="number" value="0"/>
                        <button id="delete-word" value="">Delete</button>
                    </article><br>
*/