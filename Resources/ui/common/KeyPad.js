var KeyPad = {}; 

KeyPad.View = function() {
    var isIOS = (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad'),
	self = Ti.UI.createView({
	    width: '80%',
	    height: '80%',
	    top: '15%',
	    left: '10%',
	    backgroundColor:'#000'
	}),
	display = Ti.UI.createLabel({
        color:'#EEEEEE',
        backgroundColor: '#444444',
        text:'0',
        top: '1%',
        left: '1%',
        height:'8%',
        width:'98%',
        textAlign: 'right',
        font: {fontSize: 28}
    }),
    keyPad = Ti.UI.createView ({
	    width: '100%',
	    height: '90%',
	    top: '10%',
	    left: 0
	}),
	textColor = isIOS? '#000000': '#FFFFFF',
	oppositeTextColor = isIOS? '#000000': '#222222',
	backColor = '#548BBC',
	sysBackColor = '#FEE976',
	radius = 10,
	buttonC = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'C',
        top: '1%',
        left: '1%',
        height:'18%',
        width:'48%'
	}),
	buttonCE = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'CE',
        top: '1%',
        left: '51%',
        height:'18%',
        width:'48%'
    }),
    button7 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'7',
        top: '21%',
        left: '1%',
        height:'18%',
        width:'23%'
    }),
    button8 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'8',
        top: '21%',
        left: '26%',
        height:'18%',
        width:'23%'
    }),
    button9 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'9',
        top: '21%',
        left: '51%',
        height:'18%',
        width:'23%'
    }),
    buttonDivide = Ti.UI.createButton({
        color: oppositeTextColor,
        backgroundColor: sysBackColor,
        borderRadius: radius,
        title:'/',
        top: '21%',
        left: '76%',
        height:'18%',
        width:'23%'
    }),
    button4 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'4',
        top: '41%',
        left: '1%',
        height:'18%',
        width:'23%'
    }),
    button5 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'5',
        top: '41%',
        left: '26%',
        height:'18%',
        width:'23%'
    }),
    button6 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'6',
        top: '41%',
        left: '51%',
        height:'18%',
        width:'23%'
    }),
    buttonMultiply = Ti.UI.createButton({
        color: oppositeTextColor,
        backgroundColor: sysBackColor,
        borderRadius: radius,
        title:'*',
        top: '41%',
        left: '76%',
        height:'18%',
        width:'23%'
    }),
    button1 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'1',
        top: '61%',
        left: '1%',
        height:'18%',
        width:'23%'
    }),
    button2 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'2',
        top: '61%',
        left: '26%',
        height:'18%',
        width:'23%'
    }),
    button3 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'3',
        top: '61%',
        left: '51%',
        height:'18%',
        width:'23%'
    }),
    buttonSubtract = Ti.UI.createButton({
        color: oppositeTextColor,
        backgroundColor: sysBackColor,
        borderRadius: radius,
        title:'-',
        top: '61%',
        left: '76%',
        height:'18%',
        width:'23%'
    }),
    buttonDecimal = Ti.UI.createButton({
        color: oppositeTextColor,
        backgroundColor: sysBackColor,
        borderRadius: radius,
        title:'.',
        top: '81%',
        left: '1%',
        height:'18%',
        width:'23%'
    }),
    button0 = Ti.UI.createButton({
        color: textColor,
        backgroundColor: backColor,
        borderRadius: radius,
        title:'0',
        top: '81%',
        left: '26%',
        height:'18%',
        width:'23%'
    }),
    buttonEqual = Ti.UI.createButton({
        color: oppositeTextColor,
        backgroundColor: sysBackColor,
        borderRadius: radius,
        title:'=',
        top: '81%',
        left: '51%',
        height:'18%',
        width:'23%'
    }),
    buttonAdd = Ti.UI.createButton({
        color: oppositeTextColor,
        backgroundColor: sysBackColor,
        borderRadius: radius,
        title:'+',
        top: '81%',
        left: '76%',
        height:'18%',
        width:'23%'
    });
    
    keyPad.add(buttonC);
    keyPad.add(buttonCE);
    keyPad.add(button0);
    keyPad.add(button1);
    keyPad.add(button2);
    keyPad.add(button3);
    keyPad.add(button4);
    keyPad.add(button5);
    keyPad.add(button6);
    keyPad.add(button7);
    keyPad.add(button8);
    keyPad.add(button9);
    keyPad.add(buttonAdd);
    keyPad.add(buttonDecimal);
    keyPad.add(buttonDivide);
    keyPad.add(buttonEqual);
    keyPad.add(buttonMultiply);
    keyPad.add(buttonSubtract);
	
	/* Watch for a keypad event */
	keyPad.addEventListener('click', function(e) {
	    /* filter out all none keypad events */
        if(e.source.title) {
		  /* fire an event for the keypad */
          Ti.App.fireEvent('calc.keyPressed', {key: e.source.title});
		}
	});
	
    Ti.App.addEventListener('calc.updateDisplay', function(e){
        display.setText(e.display);
    });

	
    self.add(display);
    self.add(keyPad);
	return self;
}

module.exports = KeyPad;
