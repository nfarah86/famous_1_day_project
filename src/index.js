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
var Timer = require('famous/utilities/Timer');

// create the main context
var mainContext = Engine.createContext();

//your app here
	
	// function createSurfaces(){
	// // for(var i = 0; i < 50; i++){
	// 	var squares = new Surface({
	// 		size: [20, 20],
	// 		content: 'images/famous_logo.png'
		//});

	var surfacesArray = [];
	var modifiersArray = [];

	function createModifier() {
		var randomNumber = Math.random();
		//console.log(randomNumber);
		//var initialTime = Date.now();
		var centerSpinModifier = new Modifier({		
		  align: [.5, .5],
		  origin: [.5, .5],
		  transform: function() {
		  //return Transform.rotateY(.005 * (Date.now() - initialTime));
		  return Transform.translate(randomNumber * 300, randomNumber * 1200, randomNumber *300)
		  //	 { duration : 2000, curve: 'linear' }

		  }
	
		});
		console.log(randomNumber);
		return centerSpinModifier;
	}

	var movingSquares = function(){
	for(var i = 0; i < 50; i++){
			var surface = new Surface({
		  	size: [25, 25],
		  	properties: {
		    backgroundColor: '#FA5C4F',
		    marginTop: '100px',
		    //marginLeft: '10px'
		  }
			});




		var centerSpinModifier = createModifier();
 	
		surfacesArray.push(surface);
		modifiersArray.push(centerSpinModifier);
 	}
 
 		console.log(surfacesArray.length);
 		console.log(modifiersArray.length);

 }
movingSquares();		

			var surfaceA = new Surface({
		  	size: [100, 100],
		  	classes: ['backfaceVisibility'],
		  	properties: {
		    backgroundColor: '#FA5C4F',
		    marginTop: '100px',
		    //marginLeft: '10px'
		  	}
		});

			var surfaceB = new Surface({
		  	size: [100, 100],
		  	classes: ['backfaceVisibility'],
		  	properties: {
		    backgroundColor: 'blue',
		    marginTop: '100px',
		    //marginLeft: '10px'
			}
		});

		var initialTime = Date.now();
		var surfaceA_Modifier = new Modifier({
		  align: [.50, .50],
		  origin: [.50, .50],
		  transform: function() {
		  return Transform.rotateY(.005 * (Date.now() - initialTime));
		  }
		});

		var initialTime = Date.now();
		var surfaceB_Modifier = new Modifier({
		  align: [.52, .52],
		  origin: [.52, .52],
		  transform: function() {
		  return Transform.rotateY(.005 * (Date.now() - initialTime));
		  }
	});

		mainContext
			.add(surfaceA_Modifier)
			.add(surfaceA)
		mainContext
			.add(surfaceB_Modifier)
			.add(surfaceB)

	surfaceA.on('click', start);

	function timeoutForThing(i) {
		return function () {
			mainContext.add(modifiersArray[i]).add(surfacesArray[i]);
		}
	}

	function start() {
		//duplicate
		//move random
		for (var i = 0; i < 50; i++) {
			// setTimeout(timeoutForThing(i), i * 100);
			Timer.after(timeoutForThing(i), 20 * i)
		};

		// var i = -1;
		// setInterval(function() {
			
		// 	i++;
		// 	console.log(i);

		// }, 200);

		console.log("im working");
		//console.log(surfacesArray.length);
		//console.log(mainContext);

	}
















// 	var square2 = new ImageSurface({
// 	size: [100, 200],
//     content: 'images/famous_logo.png',
//     properties: {
//     backgroundColor: 'rgb(240, 238, 233)',
//     textAlign: 'center',
//     padding: '5px',
//     border: '2px solid rgb(210, 208, 203)',
//     marginTop: '50px',
//     marginLeft: '50px'
//   }
// });
	

// var initialTime = Date.now();
// var centerSpinModifier = new Modifier({
//   align: [3, 3],
//   origin: [3, 3],
//   transform: function() {
//   return Transform.rotateY(.005 * (Date.now() - initialTime));
//   }
// });
// 	mainContext.add(centerSpinModifier).add(square2);
 
 
 









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


