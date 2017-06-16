var express = require('express')
var app = express()

app.use('/assets',express.static(__dirname+'/assets'))
app.use('/lib',express.static(__dirname+'/lib'))

app.get('/',function(req,res,next){
	res.sendFile(__dirname+"/index.html")
})
app.get('/generate_qa/:num',function(req,res){
	var gen = require(__dirname+"/assets/js/generate_qa.js")
	var obj = {}
	let _limit = req.params.num || 200
	for(let i=0;i<_limit;i++) {
		obj[i] = gen()
	}
	res.send(obj)
})
var port = process.env.PORT || 3000
app.listen(port,function(){
	console.log('listening on port:'+port)
})