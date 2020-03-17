const Elements = require('./includes/Elements');
const Listeners = require('./includes/Navigation');
const LS = require('./includes/LS');
const Analize = require('./includes/Analize');
const Sorting = require('./includes/Sorting');
const Saving = require('./includes/Saving');

Elements.lexiconLi.addEventListener('click', Listeners.getLexiconPage);
Elements.calculatorLi.addEventListener('click', Listeners.getCalculatorPage);
Elements.buttonAnalize.addEventListener('click', Analize.analizeDocument);
Elements.calculatorTextArea.addEventListener('change', Analize.removeOldResult);

Elements.radioPositive.addEventListener('click', Sorting.sortLexicon);
Elements.radioNegative.addEventListener('click', Sorting.sortLexicon);
Elements.radioAll.addEventListener('click', Sorting.sortLexicon);
Elements.lexiconSave.addEventListener('click', Saving.saveLexicon);
Elements.addNew.addEventListener('click', Saving.addNew)

//init local storage
LS.initLocalStorageLexicon();
