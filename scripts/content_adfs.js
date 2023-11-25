userNameInput = document.getElementById('userNameInput');
passwordInput = document.getElementById('passwordInput');

if (userNameInput !== null && passwordInput !== null) {
	chrome.storage.sync.get(['userName', 'password'], function(login) {
		userNameInput.value = login.userName;
		passwordInput.value = login.password;

		submitButton = document.getElementById("submitButton");
		submitButton.click();
    });
}
