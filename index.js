var express = require('express')
var app = express()

app.use('/',function(req,res){
	res.sendFile('index.html')
})

app.listen(80)