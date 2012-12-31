//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
    var KeyPad = require('ui/common/KeyPad');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#000000'
	});
		
	//construct UI
	var keyPad = new KeyPad();
	self.add(keyPad);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
