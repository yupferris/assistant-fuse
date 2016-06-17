var Observable = require("FuseJS/Observable");

var algorithms = Observable();
algorithms.replaceAll(require("algorithms"));

function clone(x) {
	return JSON.parse(JSON.stringify(x));
}

module.exports = {
	algorithms: algorithms.map(function(x) {
		var ret = clone(x);
		ret.imageFileName = "assets/" + ret.imageFileName + ".png";
		return ret;
	})
}