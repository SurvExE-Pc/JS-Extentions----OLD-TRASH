var tin=[],con=console;
Object.keys(con).forEach(function (key, index) {
    tin.push(con[key].name);
  });
tin.pop()
tin.pop()
function conadd(id='') {
    tin.push(id);
};
/*
run conadd to add your custom console type

-----WARNING-----
but beware it will show up as type: log instead
as what it actully, is the way it checks for 
console write ins makes it so custom console 
functions will show up as type: log instad of
say type: image.
*/
if (console.everything === undefined) {
    console.everything = [];
    function TS(){
      return (new Date).toLocaleString("sv", { timeZone: 'UTC' }) + "Z"
    }
    window.onerror = function (error, url, line) {
      console.everything.push({
        type: "exception",
        timeStamp: TS(),
        value: { error, url, line }
      })
      return false;
    }
    window.onunhandledrejection = function (e) {
      console.everything.push({
        type: "promiseRejection",
        timeStamp: TS(),
        value: e.reason
      })
    } 
  
    function hookLogType(logType) {
      const original= console[logType].bind(console)
      return function(){
        console.everything.push({ 
          type: logType, 
          timeStamp: TS(), 
          value: Array.from(arguments) 
        })
        original.apply(console, arguments)
      }
    }
  
    tin.forEach(logType=>{
      console[logType] = hookLogType(logType)
    })
}