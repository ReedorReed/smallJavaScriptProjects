const showPassword = document.getElementById('showPass');
const passwordField = document.getElementById('passwordBox');

showPassword.checked = false;

function letsSeePassword() {
	if ((showPassword.checked = true)) {
		passwordField.type = 'text';
	} 
}

showPassword.addEventListener('click', letsSeePassword);
