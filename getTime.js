

const myTime = new Date();
const hours = myTime.getHours();
let greeting;

if(hours < 12){
    greeting = "Good Morning";
}
if(hours >= 12 && hours <= 17){
    greeting = "Good Afternoon";
}
if(hours >= 17 && hours <= 24)
{
    greeting = "Good Evening";
}
   

export default greeting;