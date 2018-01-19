const fs = require('fs');
// const userName = process.argv[2];
// const loc = process.argv[3];
var adminArray = ["John", "Drew"];
function adminSearch(user) {
	this.user = user;
	this.search = function() {
		if (adminArray.includes(this.user)) {
			fs.readFile('log.txt', 'utf8', function(err, data) {
				if (err) {
					return console.log(err);
				}
				var dataArray = data.split(',');
				console.log(dataArray);
			});
		} else {
			console.log("You do not have admin priveleges.")
		}
	};
}

// var newSearch = new adminSearch(userName);
// newSearch.search();

module.exports = adminSearch;