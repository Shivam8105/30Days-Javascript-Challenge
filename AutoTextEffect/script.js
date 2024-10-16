const heading = document.getElementById("heading");
const heading2 = document.getElementById("heading2");
let count = 1;
let count_2 = 1;
const sentence = "My name is shivam kumar";
// const sentence_2 = "My aim is to become a good Problem Solver";

setInterval(writeText,150);
// setInterval(writeText2,900);

function writeText(){
    heading.innerHTML = sentence.slice(0,count);

    count++;

    if(count > sentence.length){
        count = 1;
    }
   
}

// function writeText2(){
//     heading2.innerHTML = sentence_2.slice(0,count);
//     count_2++;
//     if(count_2 > sentence_2.length){
//         count_2 = 1;
//     }
// }