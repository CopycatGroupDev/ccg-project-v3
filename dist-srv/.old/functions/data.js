const fs = require('fs');
const path = require('path');

exports.getData = function (table) {
	return JSON.parse(
		fs.readFileSync(
			path.resolve(__dirname, `./data/${table}.json`),
			'utf-8'
		)
	);
}

exports.addData = function (table, data) {
	const dataFile = exports.getData(table);
	dataFile.push(data);
	fs.writeFileSync(
		path.resolve(__dirname, `./data/${table}.json`),
		JSON.stringify(dataFile, null, 4)
	);
}