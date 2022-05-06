/*

(MIT) 2022-2022 SurvExE-Pc on github.

This is not to be taken srsly 
*/
//if you are using consolesave.js then add conadd('image'); to your code
console.image = (function(header,url,width,height,footer,debug){if(debug==true){console.time("Loading image...")};if(header!=""){console.log(header)};console.log('%c ', `font-size:${height/width*height+width/3}px; background:url(${url}) no-repeat;`);if(footer!=""){console.log(footer)};if(debug==true){console.timeEnd("Loading image...")}});