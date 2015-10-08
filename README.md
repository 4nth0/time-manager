# Time Manager

## Timer

```javascript
var Timer       = require('../time-manager.js').Timer;
var FirstLoop   = Timer(interval, FirstProcessing);
var SecondLoop  = Timer(interval, SecondProcessing);

function FirstProcessing(index){
    console.log('['+ index +']', 'First processing ...', );

    if(FirstLoop.index() == 3){
        FirstLoop.index(0);
    }
}

FirstLoop.start();



function SecondProcessing(index){
    console.log('['+ index +']', 'Second processing ... ');
    if(SecondLoop.index() == 6){
        console.log('Stop loop.');
        SecondLoop.stop();
    }
}

SecondLoop.start();

```

## CronTab



```javascript
var CronTab = require('time-manager').CronTab;
var Cron    = new CronTab();

Cron
  .on('error-log', function(log){
    console.log('new error log: ', log);
  })
  .subscribe(['19', '*', '*/5'], function(){
    console.log('Go ! ');
  })
  .subscribe(['10,12,14,16,18', '*', '*/5'], function(){
    console.log('Go ! ');
  });
```