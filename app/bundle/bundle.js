!function(e){var t={};function l(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t){t.lexiconLi=document.getElementById("lexicon-li"),t.calculatorLi=document.getElementById("calculator-li"),t.lexiconPage=document.getElementById("lexicon-page"),t.calculatorPage=document.getElementById("calculator-screen"),t.calculatorAnimation=document.getElementById("loading_animation"),t.resultScreen=document.getElementById("analize-rezult"),t.buttonAnalize=document.getElementById("analize"),t.buttonUpload=document.getElementById("file-upload"),t.calculatorMessage=document.getElementById("calculator-message")},function(e,t,l){const a=l(0),n=l(2);a.lexiconLi.addEventListener("click",n.getLexiconPage),a.calculatorLi.addEventListener("click",n.getCalculatorPage),a.buttonAnalize.addEventListener("click",n.analizeDocument)},function(e,t,l){const a=l(0);function n(){a.resultScreen.classList.add("hide-display"),a.calculatorAnimation.classList.remove("hide-display"),setTimeout(e=>(a.calculatorAnimation.classList.add("hide-display"),void a.resultScreen.classList.remove("hide-display")),2e3)}t.getCalculatorPage=function(){a.lexiconPage.classList.add("hide-display"),a.lexiconPage.classList.remove("show-display"),a.calculatorPage.classList.remove("hide-display"),a.calculatorPage.classList.add("show-display"),a.lexiconLi.classList.remove("active"),a.calculatorLi.classList.add("active")},t.getLexiconPage=function(){a.calculatorPage.classList.add("hide-display"),a.calculatorPage.classList.remove("show-display"),a.lexiconPage.classList.add("show-display"),a.lexiconPage.classList.remove("hide-display"),a.lexiconLi.classList.add("active"),a.calculatorLi.classList.remove("active")},t.analizeDocument=function(){let e=a.buttonUpload;if(e.files[0]){let t=new FileReader;t.onload=function(){!function(e){let t=e.split(/[ ,]+/).filter(Boolean);console.log(t)}(t.result)},t.readAsText(e.files[0])}n()}}]);