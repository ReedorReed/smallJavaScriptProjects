const alertBtn = document.getElementById('btn');

//function that opens an alert.
function alertMsg() {
    alert('Hello, how are you?');
}

//eventListener that calls alertMsg when a click is registered. 
alertBtn.addEventListener('click', alertMsg);
