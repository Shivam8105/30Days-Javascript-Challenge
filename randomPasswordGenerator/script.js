const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+=|}{[]/-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password +=  upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=  lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=  number[Math.floor(Math.random() * number.length)];
    password +=  symbol[Math.floor(Math.random() * symbol.length)];
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value).then(() => {
        const message = document.createElement('div');
        message.textContent = 'Copied to clipboard!';
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.backgroundColor = '#019f55';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '5px';
        message.style.zIndex = '1000';
        document.body.appendChild(message);
        setTimeout(() => {
            document.body.removeChild(message);
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}