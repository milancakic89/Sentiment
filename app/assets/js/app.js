const Elements = require('./includes/Elements');
const Listeners = require('./includes/EventListeners');
const LS = require('./includes/LS');
const Analize = require('./includes/Analize');

Elements.lexiconLi.addEventListener('click', Listeners.getLexiconPage);
Elements.calculatorLi.addEventListener('click', Listeners.getCalculatorPage);
Elements.buttonAnalize.addEventListener('click', Analize.analizeDocument);

//init local storage
LS.initLocalStorageLexicon();
