!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){t.lexiconLi=document.getElementById("lexicon-li"),t.calculatorLi=document.getElementById("calculator-li"),t.lexiconPage=document.getElementById("lexicon-page"),t.lexiconRow=document.querySelector(".result-single"),t.lexiconResults=document.querySelector(".lexicon__results"),t.calculatorPage=document.getElementById("calculator-screen"),t.calculatorAnimation=document.getElementById("loading_animation"),t.resultScreen=document.getElementById("analize-rezult"),t.buttonAnalize=document.getElementById("analize"),t.buttonUpload=document.getElementById("file-upload"),t.calculatorMessage=document.getElementById("calculator-message"),t.positiveResult=document.querySelector(".positive"),t.negativeResult=document.querySelector(".negative"),t.neutralResult=document.querySelector(".neutral"),t.overalResult=document.querySelector(".overal")},function(e,t,n){const o=n(4),l=n(5);async function a(){let e=localStorage.getItem("lexicon"),t=await e;return JSON.parse(t)}t.initLocalStorageLexicon=function(){localStorage.getItem("lexicon")?a().then(e=>{l.createRows(e)}):async function(){let e=JSON.stringify(o);await localStorage.setItem("lexicon",e),a().then(e=>{l.createRows(e)})}()},t.getStorage=async function(){let e=localStorage.getItem("lexicon"),t=await e;return JSON.parse(t)},t.removeOneFromStorage=function(e){e.parentElement.classList.add("removing"),setTimeout(t=>{a().then(t=>{!async function(e){let t=JSON.stringify(e);localStorage.setItem("lexicon",t)}(t.filter(t=>t.word!=e.value)),e.parentElement.remove()})},400)}},function(e,t,n){const o=n(0),l=n(1);t.getCalculatorPage=function(){o.lexiconPage.classList.add("hide-display"),o.lexiconPage.classList.remove("show-display"),o.calculatorPage.classList.remove("hide-display"),o.calculatorPage.classList.add("show-display"),o.lexiconLi.classList.remove("active"),o.calculatorLi.classList.add("active")},t.getLexiconPage=function(){o.calculatorPage.classList.add("hide-display"),o.calculatorPage.classList.remove("show-display"),o.lexiconPage.classList.add("show-display"),o.lexiconPage.classList.remove("hide-display"),o.lexiconLi.classList.add("active"),o.calculatorLi.classList.remove("active")},t.deleteWord=function(e){l.removeOneFromStorage(e.target)}},function(e,t,n){const o=n(0),l=n(2),a=n(1),i=n(6);o.lexiconLi.addEventListener("click",l.getLexiconPage),o.calculatorLi.addEventListener("click",l.getCalculatorPage),o.buttonAnalize.addEventListener("click",i.analizeDocument),a.initLocalStorageLexicon()},function(e,t){e.exports=[{word:"ugly",sentiment:-.7},{word:"great",sentiment:.4},{word:"good",sentiment:.3},{word:"bad",sentiment:-.5},{word:"exellent",sentiment:.8},{word:"preaty",sentiment:.4},{word:"beauty",sentiment:.3},{word:"small",sentiment:-.1},{word:"moderate",sentiment:0},{word:"average",sentiment:0}]},function(e,t,n){const o=n(0),l=n(2);e.exports=class{static createRows(e){e.forEach(e=>{!function(e){let t=document.createElement("article"),n=document.createElement("input"),a=document.createElement("input"),i=document.createElement("button");n.className="lexcon-input",n.type="text",n.value=e.word,a.className="lexcon-input",a.type="number",a.value=e.sentiment,i.className="delete-word",i.value=e.word,i.textContent="Delete",i.addEventListener("click",l.deleteWord),t.className="result-single",t.appendChild(n),t.appendChild(a),t.appendChild(i),o.lexiconResults.appendChild(t)}(e)})}}},function(e,t,n){const o=n(0),l=n(1);t.analizeDocument=function(){let e=o.buttonUpload,t="";if(e.files[0]){t="";let n=new FileReader;n.onload=function(){!function(e){let t=e.split(/[ ,]+/);l.getStorage().then(e=>{!function(e,t){let n=0,o=0,l=0,a=0,i=0;e.forEach(e=>{t.forEach(t=>{e.toUpperCase()==t.word.toUpperCase()&&(0===t.sentiment?l++:t.sentiment>0?(n++,a+=t.sentiment):(o++,i+=t.sentiment))})}),console.log("statistics"),console.log("positive: "+n),console.log("negative: "+o),console.log("neutral: "+l),console.log("Positive Total: "+a.toFixed(2)),console.log("Negative Total: "+i.toFixed(2))}(t,e)})}(n.result)},n.readAsText(e.files[0])}else t="File not selected";o.calculatorMessage.textContent=t,o.resultScreen.classList.add("hide-display"),o.calculatorAnimation.classList.remove("hide-display"),setTimeout(e=>(o.calculatorAnimation.classList.add("hide-display"),void o.resultScreen.classList.remove("hide-display")),1e3)}}]);