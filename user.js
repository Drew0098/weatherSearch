var weather = require('weather-js');
const fs = require('fs');
// const userName = process.argv[2];
// const loc = process.argv[3];
function userSearch(user, location) {
	this.user = user;
	this.location = location;
	this.search = function() {
		weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
		  if(err) console.log(err);
		 
		  console.log(JSON.stringify(result, null, 2));
		});
		fs.appendFile('log.txt', this.user + '   ' + this.location + '   ' + Date.now() + ',', function(err) {
			if (err) {
				console.log(err);
			}
		});
	};
};

// var newSearch = new userSearch(userName, loc);
// newSearch.search();
module.exports = userSearch;