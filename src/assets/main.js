let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while(answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt = 0;
}

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }
}

