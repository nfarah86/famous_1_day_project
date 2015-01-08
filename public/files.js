var fs = require('fs');



fs.readdir("../public/images/girlPower", function(err, girlFiles){
    if(err){
        console.log(err);
        return;
    }
    

   var index = girlFiles.indexOf(".DS_Store")
   girlFiles.splice(index, 1)
    var jsonStringFile = JSON.stringify(girlFiles);
    	console.log(jsonStringFile);
           
    });

    
   