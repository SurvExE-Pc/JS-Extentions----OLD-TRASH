//(C) 2022-2022 Under MIT Licence | SurvExE-Pc on github.
console.image = (function(header,url,width,height,footer,debug){if(debug==true){console.time("Loading image...")};if(header!=""){console.log(header)};console.log('%c ', `font-size:${height/width*height+width/3}px; background:url(${url}) no-repeat;`);if(footer!=""){console.log(footer)};if(debug==true){console.timeEnd("Loading image...")}});
window.alertTxt=[];
try {
let len = document.getElementsByClassName("Layout-sc-nxg1ff-0 center-window")[0].childNodes.length,len2 = document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect").length,ids=[],urls=[],messages=[],Finished=[];
for (let i = 0;i<len;i++){console.log(document.getElementsByClassName("Layout-sc-nxg1ff-0 center-window")[0].childNodes[i].innerText);messages.push(document.getElementsByClassName("Layout-sc-nxg1ff-0 center-window")[0].childNodes[i].innerText);};
for (let i = 0;i<len2;i++){if(document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].innerHTML.includes("Notification center item thumbnail")){console.log(i);ids.push(i);console.log("",`background-url: ${document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].children[1].src};`);/*console.image("",document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].children[1].src,999,999,"",false);*/urls.push(document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].children[1].src)}};
messages.shift();
Finished.push("-------NOTIFICATIONS-------");
for(let i = 0;i<urls.length;i++){
    Finished.push({"Message": btoa(messages[i]),"Image_URL": btoa(urls[i]),"ID": btoa(ids[i])});
};console.log(Finished);window.getMessages = (function(){for(let i = 1;i<Finished.length;i++){
    Message=atob(Finished[i].Message);
    ImgUri=atob(Finished[i].Image_URL);
    ID=atob(Finished[i].ID);
    Message.split("\n");
    console.log("Message: \n",Message);
    alertTxt.push("Message: \n"+Message);
    console.log("Img_Url: \n",ImgUri);
    alertTxt.push("Img_Url: \n"+ImgUri);
    console.log("Class-Id-Index: \n",ID);
    alertTxt.push("Class-Id-Index: \n"+ID+"\n");
};});document.getElementById("NOTIFICLICKDIV-FORAPI").click();
} catch {
(document.getElementsByClassName("ScIconSVG-sc-1bgeryd-1 ifdSJl")[4].appendChild((document.createElement("div"))).id="NOTIFICLICKDIV-FORAPI");
document.getElementById("NOTIFICLICKDIV-FORAPI").click();
let len = document.getElementsByClassName("Layout-sc-nxg1ff-0 center-window")[0].childNodes.length,len2 = document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect").length,ids=[],urls=[],messages=[],Finished=[];
for (let i = 0;i<len;i++){console.log(document.getElementsByClassName("Layout-sc-nxg1ff-0 center-window")[0].childNodes[i].innerText);messages.push(document.getElementsByClassName("Layout-sc-nxg1ff-0 center-window")[0].childNodes[i].innerText);};
for (let i = 0;i<len2;i++){if(document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].innerHTML.includes("Notification center item thumbnail")){console.log(i);ids.push(i);console.log("",`background-url: ${document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].children[1].src};`);/*console.image("",document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].children[1].src,999,999,"",false);*/urls.push(document.getElementsByClassName("ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect")[i].children[1].src)}};
messages.shift();
Finished.push("-------NOTIFICATIONS-------");
for(let i = 0;i<urls.length;i++){
    Finished.push({"Message": btoa(messages[i]),"Image_URL": btoa(urls[i]),"ID": btoa(ids[i])});
};console.log(Finished);window.getMessages = (function(){for(let i = 1;i<Finished.length;i++){
    Message=atob(Finished[i].Message);
    ImgUri=atob(Finished[i].Image_URL);
    ID=atob(Finished[i].ID);
    Message.split("\n");
    console.log("Message: \n",Message);
    alertTxt.push("Message: \n"+Message);
    console.log("Img_Url: \n",ImgUri);
    alertTxt.push("Img_Url: \n"+ImgUri);
    console.log("Class-Id-Index: \n",ID);
    alertTxt.push("Class-Id-Index: \n"+ID+"\n");
};});document.getElementById("NOTIFICLICKDIV-FORAPI").click();
} finally {alertTxt.join("\n");console.log("Finished!\nRun the getMessages function to read your messages.")};
//Uncomment the below line if used in a bookmarklet.
//try{getMessages();alert(alertTxt);}catch{alert(alertTxt)};
