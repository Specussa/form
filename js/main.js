// validate form
const form = document.getElementById('form');
const username = document.getElementById('username');
const control = document.getElementById('control');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const controlValue = control.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Неверный Логин или Email');
	} else {
		setSuccessFor(username);
	}
	
	if(controlValue === '') {
		setErrorFor(control, 'Неверное контрольное слово');
	} else {
		setSuccessFor(control);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Пароль должен быть не менее 6 символов');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Пароли не совпадают');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Пароли не совпадают');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'forms__form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'forms__form-control success';
}
	
// function iscontrol(control) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
// }

function show_hide_password(target){
  var input = document.getElementById('password');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}