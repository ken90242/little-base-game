var express = require('express')
var app = express()

app.use('/assets',express.static(__dirname+'/assets'))
app.use('/lib',express.static(__dirname+'/lib'))

app.get('/',function(req,res){
	res.sendFile(__dirname+"/index.html")
})
app.get('/generate_qa',function(req,res){
	var gen = require(__dirname+"/assets/js/generate_qa.js")
	res.send(gen())
})
var port = process.env.PORT || 3000
app.listen(port,function(){
	console.log('listening on port:'+port)
})