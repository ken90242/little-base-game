var exports = {}

exports = removeArrSameElement = function(array, ele){
	var arr = [],
		res = []
	arr = array.slice()

	arr.forEach((v)=>{
		if(v!==ele) res.push(v)
	})

	return res
}

module.exports = exports
