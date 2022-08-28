
const hours = new Date().getHours();
let greeting;

if(hours < 12){
    greeting = "Good morning";
}
if(hours >= 12 && hours <= 17){
    greeting = "Good afternoon";
}
if(hours >= 17 && hours <= 24)
{
    greeting = "Good evening";
}
   

export default greeting;