//(C) 2022-2022 | SurvExE-Pc On Github
function GAVTOP(url){var rawx;
const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         rawx = data;
      });
};
let raw = getRawData(url);
//eval(rawx);
return rawx;};
