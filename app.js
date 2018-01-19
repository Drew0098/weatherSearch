const userName = require('./user');
const admin = require('./admin');
var adminArray = ["John", "Drew"];

const args = process.argv;
const loginType = args[2];
const name = args[3];
const location = args[4];

function weatherSearch(user, loc) {
	if (loginType === 'user') {
		var newSearch = new userName(user, loc);
		newSearch.search();
	} else if (loginType === 'admin') {
		var newSearch = new admin(user);
		newSearch.search();
	} else {
		console.log('Error. Try again.');
	}
	
}
weatherSearch(name, location);