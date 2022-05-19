let elementTitle = document.getElementById("title").innerHTML;
document.getElementById("this-title").innerHTML = elementTitle;
console.log(elementTitle);

let text = document.getElementById("text-p").innerText;
document.getElementById("text-here").innerHTML = text;

document.getElementById("title").style.backgroundColor = "pink";
document.getElementById("this-title").style.border = "solid lightgrey 10px";