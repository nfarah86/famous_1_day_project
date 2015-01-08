// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var Surface = require('famous/core/Surface');

// create the main context
var mainContext = Engine.createContext();

//your app here



for(var x = 1; x < 50; x++){
	for(var y = .25; y < 51; y+= .50){
	var logo = new ImageSurface({
	size: [100, 200],
    content: 'images/famous_logo.png',
    classes: ['backfaceVisibility']
});
	

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
  align: [x, y],
  origin: [x + .25, y + .25],
  transform: function() {
    return Transform.rotateY(.005 * (Date.now() - initialTime));
  }
});
	mainContext.add(centerSpinModifier).add(logo);
 }
}
 









//var treeData = require('./files.json');
//for (var i = 0; i < treeData.length; i++) {
	   // var src = '/images/girlPower/' + treeData[i];
	    //console.log(src);

	    // var fileImageObject = new ImageSurface({
     //        size: [50, 60],
     //        classes: ['backfaceVisibility']
     //    });

     //    fileImageObject.setContent(src);

     	//var fileImageObject = new Surface({
     		//content: "<img src=" + '"' + src + '"' + ">",
     		//size: [50, 60]
     	//});

          
       	//console.log(fileImageObject);
           
//}
//mainContext.add(fileImageObject);


