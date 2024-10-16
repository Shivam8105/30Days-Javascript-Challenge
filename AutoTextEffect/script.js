const heading = document.getElementById("heading");
let count = 1;
const sentence = "My name is shivam kumar";

setInterval(writeText,150);

function writeText(){
    heading.innerHTML = sentence.slice(0,count);
    count++;
    if(count > sentence.length){
        count = 1;
    }
}