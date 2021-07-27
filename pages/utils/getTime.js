const myTime = new Date();
const hours = myTime.getHours();
let message;

if(hours < 12){
    message = "Good Morning";
}
if(hours >= 12 && hours <= 17){
    message = "Good Afternoon";
}
if(hours >= 17 && hours <= 24)
{
    message = "Good Evening";
}
   

export default message;