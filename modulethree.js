var getMoney = require('./moduleone');
var toUSD = require('./moduletwo');
exports.accBal = function() {
	return 'Account balance: \n';
}
exports.money = function(min, max) {
	return toUSD(getMoney(min, max));
}
