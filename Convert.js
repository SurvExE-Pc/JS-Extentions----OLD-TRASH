/* CREATED BY SURVEXE-PC ON GITHUB AT 9/3/2020 & UPLOADED ON 6/3/2022 - (C) MIT*/
function ATB(ascii){
    //ASCII TO BINARY
    let bin = [];
    for (let i = 0;i<ascii.length;i++) {
        bin.push((ascii.charCodeAt(i)).toString(2));
    };
    bin.join("");
    return bin.toString();
};
function BTA(bin){
    //BINARY TO ASCII
    bin=bin.split(",");
    ascii=[];
    for (let i = 0;i<bin.length;i++){
        ascii.push(String.fromCharCode("0b"+parseInt(bin[i])));
    };
    ascii.join("");
    return (ascii.toString()).replaceAll(",","");
};
function ATH(ascii){
    //ASCII TO HEX
    let hex = [];
    for (let i = 0;i<ascii.length;i++) {
        hex.push((ascii.charCodeAt(i)).toString(16));
    };
    hex.join("");
    return ("0x"+hex.toString()).replaceAll(",","");
};
function HTA(hex){
    //HEX TO ASCII
    hexString = hex;
    strOut = '';
        for (x = 0; x < hex.length; x += 2) {
            strOut += String.fromCharCode(parseInt(hex.substr(x, 2), 16));
        }
    // ANY WEIRD LINE TAGS LIKE \N OR \T WILL RESULT IN A WEIRD LOOKING HTA OUTPUT SO BE CARFUL
    return (strOut).replaceAll("\x00","");    
};
