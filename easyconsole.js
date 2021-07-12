let consoleeasy = function consoleeasy(type=1, msg="") {if(type==3){console.error(msg);}else{if(type==2){console.warn(msg);}}if(type==1){console.log(msg);}else{if(type!="e"||"w"||"l"){console.log("Unknown value");}}};
consoleeasy(1, "Hi thank you for using Easy Console!");
consoleeasy(1, "Made by : https://github.com/SurvExE-Pc.");
consoleeasy(1, "Use consoleeasy(number 1 to 3, msg);");
consoleeasy(1, "ID`s : 1 = Log, 2 = Warn, 3 = Error.");
