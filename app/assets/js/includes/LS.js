const Lexicon = require('./Lexicon');
const UI = require('./UI');

//first time storage is empty
exports.initLocalStorageLexicon = function(){
    let currentLS = localStorage.getItem('lexicon');
        if(currentLS){
            getStorage().then(result=>{
                UI.createRows(result);
            })
        }else{
            setInitialStorage()
        }
}
//getting storage asynchronous
async function getStorage(){
    let data = localStorage.getItem('lexicon');
    let lex = await data;
    return JSON.parse(lex);
}
exports.getStorage = async function(){
    let data = localStorage.getItem('lexicon');
    let lex = await data;
    return JSON.parse(lex);
}
async function setInitialStorage(){
    let data = JSON.stringify(Lexicon);
    await localStorage.setItem('lexicon', data);
    getStorage().then(results=>{
        UI.createRows(results)
    })
}

exports.removeOneFromStorage = function(removed){
    removed.parentElement.classList.add('removing');
    
    setTimeout(animation=>{
        getStorage().then(result=>{
            let newStorage = result.filter(row => row.word != removed.value);
            newStorageToSet(newStorage);
            removed.parentElement.remove();
        })
    },400)
  
}
async function newStorageToSet(newStorage){
    let data = JSON.stringify(newStorage);
    localStorage.setItem('lexicon', data);
}