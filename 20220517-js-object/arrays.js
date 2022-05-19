let weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
document.writeln(weekdays);

for (let i = 0; i < weekdays.length; i++) {
    document.writeln(i + ": " + weekdays[i]);
    console.log(i + ": " + weekdays[i]);
}

weekdays.push('eightday', 'nineday');

for (let item in weekdays) {
    document.writeln(item + ": " + weekdays[item]);
}

//foreach
for (let item of weekdays){
    console.log(item);
}

weekdays.pop(); //removes last elelemnt
