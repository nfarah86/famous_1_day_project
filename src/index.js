// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var fs = require('fs');

// create the main context
var mainContext = Engine.createContext();


var treeData;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "files.json", true);
oReq.send();

function reqListener(e) {
    treeData = JSON.parse(this.responseText);

    var fileImageObject = new ImageSurface({
    size: [500, 600],
    content: 'file',
    classes: ['backfaceVisibility']
    
    return fileImageObject
    });

    console.log(treeData);
    console.log('IM WOROORORORORORKNG');
}



}

// your app here
var logo = new ImageSurface({
  size: [500, 600],
  content: 'images/famous_logo.png',
  classes: ['backfaceVisibility']
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
  align: [0.5, 0.5],
  origin: [0.5, 0.5],
  transform: function() {
    return Transform.rotateY(.005 * (Date.now() - initialTime));
  }
});
 



// var filesObject = function(file){
//     var fileImageObject = new ImageSurface({
//         size: [500, 600],
//         content: 'file',
//         classes: ['backfaceVisibility']
        
//         return fileImageObject
//     });
// }






mainContext.add(centerSpinModifier).add(logo);
