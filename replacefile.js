var fs=require('fs');
fs.writeFile('myfile.txt','REPLACED',function(err){
	if(err) throw err;
	console.log("Replaced")
 
});