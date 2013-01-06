/* Application Window Component Constructor */
function ApplicationWindow() {
	/* create component instance */
	var self = Ti.UI.createWindow({
		backgroundColor:'#000000',
		navBarHidden:true,
		exitOnClose:true
	});
	
	return self;
}

/* make constructor function the public component interface */
module.exports = ApplicationWindow;
