!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){t.lexiconLi=document.getElementById("lexicon-li"),t.calculatorLi=document.getElementById("calculator-li"),t.lexiconPage=document.getElementById("lexicon-page"),t.calculatorPage=document.getElementById("calculator-screen"),t.calculatorAnimation=document.getElementById("loading_animation"),t.resultScreen=document.getElementById("analize-rezult"),t.buttonAnalize=document.getElementById("analize")},function(e,t,a){const l=a(0),n=a(2);l.lexiconLi.addEventListener("click",n.getLexiconPage),l.calculatorLi.addEventListener("click",n.getCalculatorPage),l.buttonAnalize.addEventListener("click",n.analizeDocument)},function(e,t,a){const l=a(0);t.getCalculatorPage=function(){l.lexiconPage.classList.add("hide-display"),l.lexiconPage.classList.remove("show-display"),l.calculatorPage.classList.remove("hide-display"),l.calculatorPage.classList.add("show-display"),l.lexiconLi.classList.remove("active"),l.calculatorLi.classList.add("active")},t.getLexiconPage=function(){l.calculatorPage.classList.add("hide-display"),l.calculatorPage.classList.remove("show-display"),l.lexiconPage.classList.add("show-display"),l.lexiconPage.classList.remove("hide-display"),l.lexiconLi.classList.add("active"),l.calculatorLi.classList.remove("active")},t.analizeDocument=function(){l.resultScreen.classList.add("hide-display"),l.calculatorAnimation.classList.remove("hide-display"),setTimeout(e=>(l.calculatorAnimation.classList.add("hide-display"),void l.resultScreen.classList.remove("hide-display")),2e3)},t.readFile=function(){let e=event.target,t=new FileReader;t.onload=function(){t.result};let a=t.readAsText(e.files[0]);console.log(a)}}]);