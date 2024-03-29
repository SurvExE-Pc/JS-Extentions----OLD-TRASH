//UPDATED BY SURVEXE-PC ON GITHUB ON 8/8/2022
const Time = {
    Since:{
    daysSince:function(udate){
let date_1 = new Date(udate/*prompt("What Date to start at?",'1/1/1999')*/);
let date_2 = new Date();
const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return Math.abs(TotalDays);
}
//console.log(days(date_1, date_2) +" days since "+date_1);
return days(date_1, date_2);},
    mSecondsSince:function(udate){return Time.SecondsSince(udate)*1000;},
    SecondsSince:function(udate){return Time.MinutesSince(udate)*60;},
    MinutesSince:function(udate){return Time.HoursSince(udate)*60;},
    HoursSince:function(udate){return daysSince(udate)*24;},
    YearsSince:function(udate){return daysSince(udate)/365;}
    },
    Current:{
    time:function(){let date = new Date();return date.getTime()},
    date:function(){let date = new Date();return date.getDate()},
    yr2:function(){let date = new Date();return date.getYear()},
    month:function(){let date = new Date();return date.getMonth()+1},
    hour:function(){let date = new Date();return date.getHours()},
    sec:function(){let date = new Date();return date.getSeconds()},
    min:function(){let date = new Date();return date.getMinutes()},
    msec:function(){let date = new Date();return date.getMilliseconds()},
    year:function(){let date = new Date();return date.getFullYear()},
    full:function(){return `${Time.Current.month()}/${Time.Current.date()}/${Time.Current.year()} ${Time.Current.hour()}:${Time.Current.min()}:${Time.Current.sec()}:${Time.Current.msec()}`;},
    fname:function(){let date = new Date(Time.Current.full());return date;},
    now:function(){let date = new Date;return date.now;}
    },
    Conv:{
    UTCdate:function(){let date = new Date();return date.getUTCDate()},
    UTCmonth:function(){let date = new Date();return date.getUTCMonth()+1},
    UTChour:function(){let date = new Date();return date.getUTCHours()},
    UTCsec:function(){let date = new Date();return date.getUTCSeconds()},
    UTCmin:function(){let date = new Date();return date.getUTCMinutes()},
    UTCmsec:function(){let date = new Date();return date.getUTCMilliseconds()},
    UTCyear:function(){let date = new Date();return date.getUTCFullYear()},
    To:{
    toDate:function(udate){let date = new Date();return date.toDateString(udate);},
    toLocaleDate:function(udate){let date = new Date();return date.toLocaleDateString(udate);},
    toGMT:function(udate){let date = new Date();return date.toGMTString(udate);},
    toISO:function(udate){let date = new Date();return date.toISOString(udate);},
    toLocale:function(udate){let date = new Date();return date.toLocaleString(udate);},
    toLocaleTime:function(udate){let date = new Date();return date.toLocaleTimeString(udate);},
    toJSON:function(udate){let date = new Date();return date.toJSON(udate);},
    toUTC:function(udate){let date = new Date();return date.toUTCString(udate);}
    }
    },
    Set:{
    UTC:{
    setUTCMSec:function(value){let date = new Date();date.setUTCMillisecond(value);},
    setUTCSec:function(value){let date = new Date();date.setUTCSecond(value);},
    setUTCMin:function(value){let date = new Date();date.setUTCMinute(value);},
    setUTCHour:function(value){let date = new Date();date.setUTCHour(value);},
    setUTCDate:function(value){let date = new Date();date.setUTCDate(value);},
    setUTCYear:function(value){let date = new Date();date.setUTCFullYear(value);}
    },
    setMSec:function(value){let date = new Date();date.setMillisecond(value);},
    setSec:function(value){let date = new Date();date.setSecond(value);},
    setMin:function(value){let date = new Date();date.setMinute(value);},
    setHour:function(value){let date = new Date();date.setHour(value);},
    setDate:function(value){let date = new Date();date.setDate(value);},
    setYR2:function(value){let date = new Date();date.setYear(value);},
    setYear:function(value){let date = new Date();date.setFullYear(value);}
    },
    timeZoneOffset:function(){let date = new Date();return date.getTimezoneOffset();},
    constructor:undefined,
    valueOf:undefined,
    toString:undefined
};
/* If you want to add this to the normal new Date() function then you can do
Date.prototype.Time = {
    Since:{
    daysSince:function(udate){
let date_1 = new Date(udate);
let date_2 = new Date();
const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return Math.abs(TotalDays);
}
//console.log(days(date_1, date_2) +" days since "+date_1);
return days(date_1, date_2);},
    mSecondsSince:function(udate){return Time.SecondsSince(udate)*1000;},
    SecondsSince:function(udate){return Time.MinutesSince(udate)*60;},
    MinutesSince:function(udate){return Time.HoursSince(udate)*60;},
    HoursSince:function(udate){return daysSince(udate)*24;},
    YearsSince:function(udate){return daysSince(udate)/365;}
    },
    Current:{
    time:function(){let date = new Date();return date.getTime()},
    date:function(){let date = new Date();return date.getDate()},
    yr2:function(){let date = new Date();return date.getYear()},
    month:function(){let date = new Date();return date.getMonth()+1},
    hour:function(){let date = new Date();return date.getHours()},
    sec:function(){let date = new Date();return date.getSeconds()},
    min:function(){let date = new Date();return date.getMinutes()},
    msec:function(){let date = new Date();return date.getMilliseconds()},
    year:function(){let date = new Date();return date.getFullYear()},
    full:function(){return `${Date.prototype.Time.Current.month()}/${Date.prototype.Time.Current.date()}/${Date.prototype.Time.Current.year()} ${Date.prototype.Time.Current.hour()}:${Date.prototype.Time.Current.min()}:${Date.prototype.Time.Current.sec()}:${Date.prototype.Time.Current.msec()}`;},
    fname:function(){let date = new Date(Date.prototype.Time.Current.full());return date;},
    now:function(){let date = new Date;return date.now;}
    },
    Conv:{
    UTCdate:function(){let date = new Date();return date.getUTCDate()},
    UTCmonth:function(){let date = new Date();return date.getUTCMonth()+1},
    UTChour:function(){let date = new Date();return date.getUTCHours()},
    UTCsec:function(){let date = new Date();return date.getUTCSeconds()},
    UTCmin:function(){let date = new Date();return date.getUTCMinutes()},
    UTCmsec:function(){let date = new Date();return date.getUTCMilliseconds()},
    UTCyear:function(){let date = new Date();return date.getUTCFullYear()},
    To:{
    toDate:function(udate){let date = new Date();return date.toDateString(udate);},
    toLocaleDate:function(udate){let date = new Date();return date.toLocaleDateString(udate);},
    toGMT:function(udate){let date = new Date();return date.toGMTString(udate);},
    toISO:function(udate){let date = new Date();return date.toISOString(udate);},
    toLocale:function(udate){let date = new Date();return date.toLocaleString(udate);},
    toLocaleTime:function(udate){let date = new Date();return date.toLocaleTimeString(udate);},
    toJSON:function(udate){let date = new Date();return date.toJSON(udate);},
    toUTC:function(udate){let date = new Date();return date.toUTCString(udate);}
    }
    },
    Set:{
    UTC:{
    setUTCMSec:function(value){let date = new Date();date.setUTCMillisecond(value);},
    setUTCSec:function(value){let date = new Date();date.setUTCSecond(value);},
    setUTCMin:function(value){let date = new Date();date.setUTCMinute(value);},
    setUTCHour:function(value){let date = new Date();date.setUTCHour(value);},
    setUTCDate:function(value){let date = new Date();date.setUTCDate(value);},
    setUTCYear:function(value){let date = new Date();date.setUTCFullYear(value);}
    },
    setMSec:function(value){let date = new Date();date.setMillisecond(value);},
    setSec:function(value){let date = new Date();date.setSecond(value);},
    setMin:function(value){let date = new Date();date.setMinute(value);},
    setHour:function(value){let date = new Date();date.setHour(value);},
    setDate:function(value){let date = new Date();date.setDate(value);},
    setYR2:function(value){let date = new Date();date.setYear(value);},
    setYear:function(value){let date = new Date();date.setFullYear(value);}
    },
    timeZoneOffset:function(){let date = new Date();return date.getTimezoneOffset();},
    constructor:undefined,
    valueOf:undefined,
    toString:undefined
};
*/
