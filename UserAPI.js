/*
USED TO FETCH DATA FROM A USERS PROFILE
2022-2022 (C) SurvExE-Pc on github
*/
let userData = (function(username,logoutput){console.warn("%c!!STOP!!%c\nYou must run this on scratchs direct website if not you will get a error, and will be prompted to go to the scratch website","color: red","");
if (location.hostname=="scratch.mit.edu") {
/*var x = prompt("user?","USERNAME");*/
var x = username;
x="https://api.scratch.mit.edu/users/"+x+"/"
function getData(url) {
    console.debug("Fetching info from "+url);
    httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', url, false);
    httpRequest.send();
    console.debug("Fetched info from "+url);
    return httpRequest.response;
};
function createHold(json) {
    d = [];
    d.push(JSON.parse(json).username);
    d.push(JSON.parse(json).id);
    d.push(JSON.parse(json).scratchteam);
    d.push(JSON.parse(json).profile.bio);
    d.push(JSON.parse(json).profile.country);
    d.push(JSON.parse(json).profile.images['32x32']);
    d.push(JSON.parse(json).profile.images['50x50']);
    d.push(JSON.parse(json).profile.images['55x55']);
    d.push(JSON.parse(json).profile.images['60x60']);
    d.push(JSON.parse(json).profile.images['90x90']);
    d.push(JSON.parse(json).profile.status);
    d.push(JSON.parse(json).history.joined);
    return d;
};
x=getData(x);
x=createHold(x);
if (logoutput==true){
setTimeout((function(){
    console.log("%cUsername: %c"+x[0]+",\n\n%cID: %c"+x[1]+",\n\n%cScratchTeam: %c"+x[2]+",\n\n%cBio: %c"+x[3]+",\n\n%cCountry: %c"+x[4]+`
\n%cImage-32x32: ${x[5]}%c\n
%cImage-50x50: ${x[6]}%c\n
%cImage-55x55: ${x[7]}%c\n
%cImage-60x60: ${x[8]}%c\n
%cImage-90x90: ${x[9]}%c\n
`+"\n%cStatus: %c"+x[10]+",\n\n%cJoin Date: %c"+x[11]+"; \n\nAnd thats it for "+x[0]+"'s data!","color: lightblue","","color: blue","","color: orange","","color: purple","","color: green","","color: red","","color: red","","color: red","","color: red","","color: red","","color: brown","","color: yellow","");
}),3000)
console.debug("Waiting");
};
} else {
    console.error("YOU ARE NOT ON THE SCRATCH WEBSITE!!");
    var r;
    r=prompt("YOU ARE NOT CONNECTED TO THE SCRATCH SITE WOULD YOU LIKE TO GO TO IT?","y/n");
    if (r=="y") {
        location.href = "https://scratch.mit.edu/";
        alert("Redirecting...\n\n\nNOTE : you will have to rerun the script");
    } else if (r=="n") {
        alert("Please try again on the scratch site.");
        location.reload();
    } else {
        location.reload();
    };
};
});
