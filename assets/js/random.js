var exports = {}

exports = random = function(min, max){
	if(!max) {
		var max = min
		min = 0
	}
	var n = Math.floor(Math.random() * (max - min + 1)) + min;
	return n;
}

module.exports = exports
