var obj = require('../q_a.json')
var rand = require('./random.js')
var removeArrEle = require('./removeArrElement.js')
var exports = {}


var type_choose = function(totalObj) {
	let res
	var _keys = Object.keys(totalObj)
	var _len = _keys.length
	var rand_key = _keys[rand(_len-1)]

	res = rand_key
	return res
}

var pair_choose = function(type,typeObj) {
	var res = {},
		ans = []
	var _keys = Object.keys(typeObj.q),
		_len = _keys.length
	var rand_len = rand(_len-1)


	var correct_position = rand(3),
		positions = [0,1,2,3]
	
	ans[correct_position] = typeObj['a'][rand_len]
	positions = removeArrEle(positions,correct_position)
	
	positions.forEach((v)=>{
		let another_ans = typeObj['a'][rand(_len-1)]
		while(ans.indexOf(another_ans)!==-1) {
			another_ans = typeObj['a'][rand(_len-1)]
		}

		ans[v] = another_ans
	})

	var  res = { 'ques':typeObj['q'][rand_len],
				 'ans':ans,
				 'type':type,
				 'correct_position':correct_position
				}
	return res
}


exports = generate_qa = function() {
	var res = {}
	let type = type_choose(obj)
	let pair = pair_choose(type,obj[type])
	res = pair
	return res
}

module.exports = exports