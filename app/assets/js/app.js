const Elements = require('./includes/Elements');
const Listeners = require('./includes/EventListeners');

Elements.lexiconLi.addEventListener('click', Listeners.getLexiconPage);
Elements.calculatorLi.addEventListener('click', Listeners.getCalculatorPage);
Elements.buttonAnalize.addEventListener('click', Listeners.analizeDocument);