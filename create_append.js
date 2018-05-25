var fs=require('fs');

fs.appendFile('myfile.txt','helloWorld',function(err){
	if(err) throw err;
	console.log("Saved");
})