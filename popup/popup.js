function storeLogin() {
	chrome.storage.sync.get(['userName', 'password'], function(login) {
		email = document.getElementById('emailInput').value;
		password = document.getElementById('passwordInput').value;
		
		if (email != '') {
			login.userName = email;
		}
		
		if (password != '') {
			login.password = password;
		}
		
		chrome.storage.sync.set(login);
	});
}

document.getElementById('submitButton').onclick = storeLogin;