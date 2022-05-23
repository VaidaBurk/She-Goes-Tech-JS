let message = document.getElementById('message');
let dayName = document.getElementById('dayName');

const date = new Date();
let day = date.getDay();

if (day == 0) {
    dayName.innerText = 'Sunday';
    message.innerText = 'Time to chillax!';
    document.getElementById("container").style.backgroundColor = "#dff5ce";
}
else if (day == 1) {
    dayName.innerText = 'Monday';
    message.innerText = 'Monday morning blues!';
    document.getElementById("container").style.backgroundColor = "#7490d6";
}
else if (day == 2) {
    dayName.innerText = 'Tuesday';
    message.innerText = 'Taco Time!';
    document.getElementById("container").style.backgroundColor = "#f2b680";
}
else if (day == 3) {
    dayName.innerText = 'Wednesday';
    message.innerText = 'Two more days to the weekend.';
    document.getElementById("container").style.backgroundColor = "#d4abcd";
}
else if (day == 4) {
    dayName.innerText = 'Thursday';
    message.innerText = 'The weekend is almost here...';
    document.getElementById("container").style.backgroundColor = "#b7ebe5";
}
else if (day == 5) {
    dayName.innerText = 'Friday';
    message.innerText = 'Weekend is here!';
    document.getElementById("container").style.backgroundColor = "#b994d4";
}
else if (day == 6) {
    dayName.innerText = 'Saturday';
    message.innerText = 'Time to party!';
    document.getElementById("container").style.backgroundColor = "#f5a6a6";
}
