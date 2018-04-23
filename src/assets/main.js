let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function setHiddenFields() {
    answer = Math.floor(Math.random() * 10000);
    while(answer.length < 4) {
        answer = "0" + answer;
    }
    attempt = 0;
}

function guess() {
    let input = document.getElementById('user-guess');
    if(answer === "" || attempt === "") {
        setHiddenFields();
    }
}

