//(C) 2022 - 2022 SurvExE-Pc on github.
location.getHost = (function(){var lh = location.host;if (lh.includes("www.") == false) {lh = "www."+lh};if ((lh.replace("www.","")).length - ((lh.replace("www.","")).replaceAll(".","")).length == 2) {
var host =((lh.trimStart(lh.indexOf(".","0"))).slice(lh.indexOf(".",lh.indexOf(".","0"),lh.length)).slice(1,lh.length)).slice(0,lh.indexOf(".",0));
} else {
    var host = lh.slice(lh.indexOf(".",0)+1,lh.lastIndexOf("."))
};return host});/*This is used to get a urls name like www.google.com but without the www. or .com things,
I dont see any use of it for anyone else other than me for my IsUrl.Website function check out IsUrl.js
As i just modified the GetHost function for my needs in seeing if a url is a website.
*/
