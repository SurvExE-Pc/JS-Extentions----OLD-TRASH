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
    function getProjects(usr,logoutput) {
var user = usr;
var log = logoutput;
function getData(url) {
    console.debug("Fetching info from "+url);
    httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', url, false);
    httpRequest.send();
    console.debug("Fetched info from "+url);
    return httpRequest.response;
};
projects=JSON.parse(getData(`https://api.scratch.mit.edu/users/${user}/projects`));
var lenp=projects.length;
var ids=[],titles=[],commentings=[],descs=[],historys=[],images=[],imagesfull=[],intructions=[],publisheds=[],remix=[],loves=[],visibilitys=[],authors=[],publics=[],veiws=[],favs=[],remixes=[],created=[],modified=[],shared=[];
for (let i = 0;i<lenp;i++) {
    var pd = projects[i];
    titles.push(pd.title);
    authors.push(pd.author.id);
    commentings.push(pd.comments_allowed);
    descs.push(pd.description);
    created.push(pd.history.created);modified.push(pd.history.modified);shared.push(pd.history.shared);
    ids.push(pd.id);
    images.push(pd.image);
    imagesfull.push(pd.images);
    intructions.push(pd.instructions);
    publisheds.push(pd.is_published);
    remix.push(pd.remix);
    var stats=pd.stats;
    veiws.push(stats.veiws);
    favs.push(stats.favorites);
    loves.push(stats.loves);
    remixes.push(stats.remixes);
    visibilitys.push(pd.visibility);
};
if (log == true) {
    console.log("%cUser Projects: \n","color: lightblue");
for (let i = 0;i<ids.length;i++) {
    console.log(" %cProject:","color: blue");
    console.log("  %cId: "+ids[i].toString(),"color: purple");
    console.log("    %cTitle: "+titles[i].toString(),"color: green");
    console.log("    %cAllowed to comment: "+commentings[i].toString(),"color: yellow");
    console.log("    %cDescription: "+descs[i].toString(),"color: orange");
    console.log("      %cCreation Date: "+created[i].toString(),"color: red");
    console.log("      %cLast Modification Date: "+modified[i].toString(),"color: grey");
    console.log("      %cShare Date: "+shared[i].toString(),"color: green");
    console.log("    %cAuthor id: "+authors[i].toString(),"color: purple");
    console.log("      %cImage: "+images[i].toString(),"color: red");
    console.log("      %cFull list of images: ","color: yellow",imagesfull[i]);
    console.log("    %cIntructions: "+intructions[i].toString(),"color: orange");
    console.log("    %cRemix?: ","color: grey",remix[i]);
    console.log("      %cVeiws: "+ids[i].toString(),"color: blue");
    console.log("      %cLoves: "+loves[i].toString(),"color: red");
    console.log("      %cFavorites: "+favs[i].toString(),"color: yellow");
    console.log("      %cRemixes: "+remixes[i].toString(),"color: brown");
    console.log("    %cVisibility: "+visibilitys[i].toString(),"color: orange");
    //console.log("    %cId: "+ids[i].toString(),"color: grey");
    //console.log("    %cId: "+ids[i].toString(),"color: green");
    //console.log("    %cId: "+ids[i].toString(),"color: yellow");
};
};
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
`+"\n%cStatus: %c"+x[10]+",\n\n%cJoin Date: %c"+x[11]+"; \n\nAnd thats it for "+x[0]+"'s data!, Now projects lol!","color: lightblue","","color: blue","","color: orange","","color: purple","","color: green","","color: red","","color: red","","color: red","","color: red","","color: red","","color: brown","","color: yellow","");getProjects(username,true);}),3000);
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
