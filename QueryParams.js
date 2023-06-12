function getParams(){var tmp2 = [];var tmp3 = 0;tmp.forEach((v,k)=>{tmp3+=1;if(tmp3==1){k=k.replace(document.location.href.split("?")[0]+'?','')};tmp2.push({key: k, value: v})});return( tmp2 )};
