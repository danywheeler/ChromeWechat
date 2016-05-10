window.onload = function() {
	var webview = document.getElementById("wxview");
	webview.src = "https://wx.qq.com";

	webview.addEventListener('loadcommit', function(e) {

		webview.insertCSS({
			file: 'css/inject.css',
			runAt: 'document_start'
		});
		webview.executeScript({ file: "js/inject.js" });

	});

	webview.addEventListener('contentload', function() {
		
	});

	var mini_icon = document.querySelector(".wrap-title .min");
	mini_icon.onclick = function(){
		chrome.app.window.current().minimize();
	}

}