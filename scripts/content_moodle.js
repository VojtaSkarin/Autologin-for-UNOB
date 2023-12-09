userNameInputFirst = document.getElementById('login_username');
userNameInputSecond = document.getElementById('username');
userNameInput = userNameInputFirst ?? userNameInputSecond;

passwordInputFirst = document.getElementById('login_password');
passwordInputSecond = document.getElementById('password');
passwordInput = passwordInputFirst ?? passwordInputSecond;

submitButtonFirst = document.getElementsByClassName("btn btn-primary btn-block")[0];
submitButtonSecond = document.getElementById('loginbtn');
submitButton = submitButtonFirst ?? submitButtonSecond;

if (userNameInput !== null && passwordInput !== null) {
	chrome.storage.sync.get(['userName', 'password'], function(login) {
		userNameInput.value = login.userName;
		passwordInput.value = login.password;

		submitButton.click();
    });
}
