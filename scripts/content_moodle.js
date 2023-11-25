userNameInput = document.getElementById('login_username');
passwordInput = document.getElementById('login_password');

if (userNameInput !== null && passwordInput !== null) {
	chrome.storage.sync.get(['userName', 'password'], function(login) {
		userNameInput.value = login.userName;
		passwordInput.value = login.password;

		submitButton = document.getElementsByClassName("btn btn-primary btn-block")[0];
		submitButton.click();
    });
}
