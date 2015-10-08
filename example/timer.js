var Timer       = require('../time-manager.js').Timer;
var interval    = 2;

var FirstLoop   = Timer(interval, FirstProcessing);
var SecondLoop  = Timer(interval, SecondProcessing);


function FirstProcessing(index){
    console.log('['+ index +']', 'First processing ... Index:', index);

    if(FirstLoop.index() == 3){
        FirstLoop.index(0);
    }
}

FirstLoop.start();



function SecondProcessing(index){
    console.log('['+ index +']', 'Second processing ... Index:', index);
    if(SecondLoop.index() == 6){
        console.log('Stop loop.');
        SecondLoop.stop();
    }
}

SecondLoop.start();
