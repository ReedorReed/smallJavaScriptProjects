const checkBox = document.getElementById('check-box');
const passwordField = document.getElementById('passwordBox');

//function that checks if the checkbox is "checked" and changes
//the the password input field to a text field if true
function showPassword() {
	if (checkBox.checked == true) {
		passwordField.type = 'text';
	} else {
		passwordField.type = 'password';
	}
}

//eventListener for if there is a change in the checkbox
// i.e it checked then call function showPassword
checkBox.addEventListener('change', showPassword);
