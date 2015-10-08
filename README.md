# Time Manager



##Install


`npm install time-manager --save`



## Timer

__Timer(interval _[float]_, method _[function]_)__

* interval : _float_ interval value in seconds
* method : _function_ function to execute every _(interval)_ seconds

This function return an object instance with the following methods :

* __start()__ : start the Timer
* __stop()__ : stop the Timer
* __index()__ : get the current index
* __index(value _[int]_)__ : set the current index

__Example__

```javascript
var Timer       = require('time-manager').Timer;
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