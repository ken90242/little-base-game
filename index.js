var express = require('express')
var app = express()

app.use('/',function(req,res){
	res.sendFile("index.html")
})
var port = 3000
app.listen(port,function(){
	console.log('listening on port:'+port)
})