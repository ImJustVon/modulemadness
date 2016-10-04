function toUSD(num) {
	var str = '$';
	str += num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return str;
}
module.exports = toUSD;
