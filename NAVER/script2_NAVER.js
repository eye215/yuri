
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var day = today.getDay();
var yy = today.getFullYear();


if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 
if(day==0) {
    day='일'
    
} 
if(day==1) {
    day='월'
    
} 
if(day==2) {
    day='화'
    
} 
if(day==3) {
    day='수'
    
} 
if(day==4) {
    day='목'
    
} 
if(day==5) {
    day='금'
    
} 
if(day==6) {
    day='토'
    
} 

today = mm+'/'+dd+' '+day;
    
document.write(today)
  document.getElementById("today").innerHTML = today;
