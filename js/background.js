chrome.app.runtime.onLaunched.addListener(function() {
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 900,
		height = 680,
		minWidth = 860,
		minHeight = 620,
		maxWidth = 1000,
		maxHeight = 724;

	chrome.app.window.create('index.html', {
		bounds: {
			width: width,
			height: height,
			left: Math.round((screenWidth - width) / 2),
			top:  Math.round((screenHeight - height) / 2)
		},
		minWidth:  minWidth,
		minHeight: minHeight,
		maxWidth:  maxWidth,
		maxHeight: maxHeight,
		frame: {
			'color': '#4a4d51'
		}
	});
});
