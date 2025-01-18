
function createTimer() {
    const timer = new Date();   //Predefined/Built-in object DATE 

    let hours = timer.getHours();   //predefined method to get 'only hour part' from date

    const meridiem = hours >= 12 ? "PM" : "AM";  //adding meridiem to your time
    hours = hours % 12 || 12;        //setting 24 hr clock to 12 hour one!!
    hours = hours.toString().padStart(2, 0);   //pad start is to 'add 2 numbers(digit-wise length) to hour variable' and pad its start by o(zero) if nothing available.

    const minutes = timer.getMinutes().toString().padStart(2, 0);   //toString() needs to be added before using padStart() method as it is a string method.
    const seconds = timer.getSeconds().toString().padStart(2, 0);

    const timerString = `time : ${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timerString;


}

function showDay() {
    const Clock = new Date();
    let Day = Clock.getDay();   //always gives/returns 0-6 numbers representing days like '0 = sunday'.....

    switch (Day) {
        case 0:
            Day = "Sunday";
            break;
        case 1:
            Day = "Monday";
            break;
        case 2:
            Day = "Tuesday";
            break;
        case 3:
            Day = "Wednesday";
            break;
        case 4:
            Day = "Thursday";
            break;
        case 5:
            Day = "Friday";
            break;
        case 6:
            Day = "Saturday";
    }


    document.getElementById("day").innerText = `day: ${Day}`;   //call your div id day and replace it with Day value
}

createTimer();
setInterval(createTimer, 1000);     //this function is repeatedly called in 'set intervals  of time' meaning here 1000ms = 1 sec ->otpt updated evry secnd.

showDay();
