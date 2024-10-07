function common(userNameInput, passwordInput, submitButton) {
	if (userNameInput !== null && passwordInput !== null && submitButton !== null) {
		chrome.storage.sync.get('login', function({'login': login}) {
			if (login.userName.fill) {
				userNameInput.value = login.userName.value;
			}
			
			if (login.password.fill) {
				passwordInput.value = login.password.value;
			}

			if (login.userName.fill && login.password.fill && login.autologin) {
				submitButton.click();
			}
    });
}
}
