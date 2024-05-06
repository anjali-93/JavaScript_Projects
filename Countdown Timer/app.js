const endDate = "25 March 2024 10:00 PM";
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");


function clock(){

    // used to get endDate
    const end = new Date(endDate);

    // find the today Date
    const now = new Date();

// find the difference in seconds
    const diff = (end - now)/1000;
    if(diff<0)
        return;

// find the days
input[0].value=Math.floor(diff/3600/24);

// find the hours
input[1].value=Math.floor(diff/3600) %24;

// find the minutes
input[2].value=Math.floor(diff/60)%60;

// find the seconds
input[3].value=Math.floor(diff)%60;

}

setInterval(
    ()=>{
        clock()
    },1000
)