// ***** JavaScript Date Objects *****

// The JavaScript date object can be used to get year, month and day. You can display a timer on the webpage by the help of JavaScript date object.
// You can use different Date constructors to create date object. It provides methods to get and set day, month, year, hour, minute and seconds.
// JavaScript તારીખ ઑબ્જેક્ટનો ઉપયોગ વર્ષ, મહિનો અને દિવસ મેળવવા માટે થઈ શકે છે. તમે JavaScript તારીખ ઑબ્જેક્ટની મદદથી વેબપેજ પર ટાઈમર પ્રદર્શિત કરી શકો છો.
// તમે તારીખ ઑબ્જેક્ટ બનાવવા માટે વિવિધ તારીખ કન્સ્ટ્રક્ટરનો ઉપયોગ કરી શકો છો. તે દિવસ, મહિનો, વર્ષ, કલાક, મિનિટ અને સેકંડ મેળવવા અને સેટ કરવાની પદ્ધતિઓ પ્રદાન કરે છે.


// There are 9 ways to create a new date object:-

// new Date()    =  new Date() creates a date object with the current date and time: 
// new Date(date string)   =  new Date(date string) creates a date object from a date string:
// new Date(year,month)    =  2 numbers specify year and month: 
// new Date(year,month,day)  =  3 numbers specify year, month, and day:  
// new Date(year,month,day,hours)  =  4 numbers specify year, month, day, and hour:
// new Date(year,month,day,hours,minutes)  =  5 numbers specify year, month, day, hour, and minute:
// new Date(year,month,day,hours,minutes,seconds)  =  6 numbers specify year, month, day, hour, minute, second: 
// new Date(year,month,day,hours,minutes,seconds,ms)  =   7 numbers specify year, month, day, hour, minute, second, ms:
// new Date(milliseconds)   =  One parameter will be interpreted as new Date(milliseconds). 


// Note :-
// JavaScript counts months from 0 to 11:
// January = 0
// December = 11



// ---new Date()--- 
// new Date() creates a date object with the current date and time: 
// {
//     const dates = new Date();
//     console.log(dates);
// }


// ---new Date(date string)---
// new Date(date string) creates a date object from a date string:
// {
//     const dates = new Date("2022-03-25");
//     console.log(dates);
// }
// {
//     const dates = new Date("October 13, 2014 11:13:00");
//     console.log(dates);
// }


// ---new Date(year,month)---
// 2 numbers specify year and month: 
// {
//     const dates = new Date(2018, 11);
//     console.log(dates);
// }

// ---new Date(year,month,day)---
// 3 numbers specify year, month, and day:          
// {
//     const dates = new Date(2018, 11, 24);
//     console.log(dates);
// }


// ---new Date(year,month,day,hours)---
// 4 numbers specify year, month, day, and hour: 
// {
//     const dates = new Date(2018, 1, 25, 10);
//     console.log(dates);
// }

// ---new Date(year,month,day,hours,minutes)---
// 5 numbers specify year, month, day, hour, and minute: 
// {
//     const dates = new Date(2018, 1, 25, 10, 3);
//     console.log(dates);
// }

// ---new Date(year,month,day,hours,minutes,seconds)---
// 6 numbers specify year, month, day, hour, minute, second: 
// {
//     const dates = new Date(2018, 1, 25, 10, 3 ,34);
//     console.log(dates);
// }

// ---new Date(year,month,day,hours,minutes,seconds,ms)---
// 7 numbers specify year, month, day, hour, minute, second, ms:
// {
//     const dates = new Date(2018, 1, 25, 10, 3 ,34, 10000);
//     console.log(dates);
// }

// ---new Date(milliseconds)---
// One parameter will be interpreted as new Date(milliseconds). 
// {
//     const dates = new Date(2000);
//     console.log(dates);
// }


// ***** Dates method *****

// The toString() Method Convert a date to a string:
// The toDateString() method converts a date to a more readable format:
// The toUTCString() method converts a date to a string using the UTC standard:
// The toISOString() method converts a date to a string using the ISO standard:
// {
//     const dates = new Date(2023, 3, 16, 6, 15, 20);
//     console.log(dates.toString());
//     console.log(dates.toDateString());
//     console.log(dates.toUTCString());
//     console.log(dates.toISOString());
// }



// ***** javascript Date Formates ***** 

// ISO Date 	 =   "2015-03-25" (The International Standard)
// Short Date 	 =   "03/25/2015"
// Long Date     =   "Mar 25 2015" or "25 Mar 2015"


//--- ISO Date ---
// {
//     const dates = new Date("2023-5-20")
//     console.log(dates);
// }


// --- Short Date --- 
// {
//     const dates = new Date("03/25/2023")
//     console.log(dates);
// }


// --- Long Date ---
// {
//     const dates = new Date("march 25 2023")
//     console.log(dates);
// }
// {
//     const dates = new Date("25 march 2023")
//     console.log(dates);
// }


// --- Date Input - parsing Dates ---

// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

// {
//     let msec = Date.parse("september 25, 1997");
//     console.log(msec);
// }




// ***** JavaScript Get Date Methods *****


// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)

// Note :-
// The get methods above return Local time.
// Universal time (UTC) is documented at the bottom of this page.
// The get methods return information from existing date objects.
// In a date object, the time is static. The "clock" is not "running".
// The time in a date object is NOT the same as current time.

// {
//     const dates = new Date();
//     console.log(dates);

//     let getyear = dates.getFullYear();
//     console.log(getyear);

//     let getmonth = dates.getMonth();
//     console.log(getmonth);

//     let getdate = dates.getDate();
//     console.log(getdate);

//     let getday = dates.getDay();
//     console.log(getday);

//     let gethours = dates.getHours();
//     console.log(gethours);

//     let getminutes = dates.getMinutes();
//     console.log(getminutes);

//     let getseconds = dates.getSeconds();
//     console.log(getseconds);

//     let getmillisecond = dates.getMilliseconds();
//     console.log(getmillisecond);

//     let gettime = dates.getTime();
//     console.log(gettime);
// }



// ***** JavaScript Set Date Methods ***** 

// setFullYear()	   Set the year (optionally month and day)
// setMonth()	       Set the month (0-11)
// setDate()	       Set the day as a number (1-31)
// setHours()	       Set the hour (0-23)
// setMinutes()	       Set the minutes (0-59)
// setSeconds()	       Set the seconds (0-59)
// setMilliseconds()   Set the milliseconds (0-999)
// setTime()	       Set the time (milliseconds since January 1, 1970)


// ---setFullYear()---
// {
//     const dates = new Date();
//     dates.setFullYear(2023);
//     console.log(dates);
// }

// ---setMonth()---
// {
//     const dates = new Date();
//     dates.setMonth(5);
//     console.log(dates);
// }

// ---setDate()---
// {
//     const dates = new Date();
//     dates.setDate(25);
//     console.log(dates);
// }

// ---setHours()---
// {
//     const dates = new Date();
//     dates.setHours(3);
//     console.log(dates);
// }

// ---setMinutes()---	
// {
//     const dates = new Date();
//     dates.setMinutes(23);
//     console.log(dates);
// }

// ---setSeconds()---	
// {
//     const dates = new Date();
//     dates.setSeconds(2);
//     console.log(dates);
// }

// ---setMilliseconds()---
// {
//     const dates = new Date();
//     dates.setMilliseconds(999);
//     console.log(dates);
// }

// ---setTime()---
// {
//     const dates = new Date();
//     dates.setTime();
//     console.log(dates);
// }

