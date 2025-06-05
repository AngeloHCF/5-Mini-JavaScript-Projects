
const screenMessage = document.querySelector('.message');
const input = document.querySelector('.input-message');

let message = "My name is Angelo";
screenMessage.innerHTML = message;

let timer = 0;
let intervalId;

input.addEventListener('keypress', function() {
    if(!intervalId) {
        intervalId = setInterval(() => {
            console.log(timer++);
            check();
        }, 1000);
    }
})






function check() {
    if(input.value.toLowerCase() == message.toLocaleLowerCase()) {
        console.log('hello');
        clearInterval(intervalId);
        screenMessage.innerHTML = `${message} Time: ${timer}`
    } else {
        console.log('hello4');
    }
}