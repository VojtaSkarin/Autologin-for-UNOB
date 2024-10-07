function storeLogin() {
	chrome.storage.sync.get('login', function({'login': {'userName': userName, 'password': password, 'autologin': autologin}}) {
		userName.value = document.getElementById('userNameInput').value;
		userName.fill = document.getElementById('userNameCheckbox').checked;
		
		passwordNew = document.getElementById('passwordInput').value;
		password.fill = document.getElementById('passwordCheckbox').checked;
		
		if (passwordNew != '') {
			password.value = passwordNew;
		}
		
		autologin = document.getElementById('autologinCheckbox').checked;
		
		login = {'userName': userName, 'password': password, 'autologin': autologin};
		
		chrome.storage.sync.set({'login': login});
	});
};

document.getElementById('submitButton').onclick = storeLogin;
		
chrome.storage.sync.get('login', function({'login': login}) {
	if (login == undefined) {
		login = {
			userName: {fill: true, value: ''},
			password: {fill: false, value: ''},
			autologin: false,
		};
		
		chrome.storage.sync.set({'login': login});
	}
	
	document.getElementById('userNameCheckbox').checked = login.userName.fill;
	document.getElementById('userNameInput').value = login.userName.value;
	document.getElementById('passwordCheckbox').checked = login.password.fill;
	document.getElementById('autologinCheckbox').checked = login.autologin;
});
