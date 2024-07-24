import { readFileSync, writeFileSync } from "fs";
import __dirname from "../config/__dirname.js";
import path from "path";

export function getData (table) {
	return JSON.parse(
		readFileSync(
			path.resolve(__dirname, `./data/${table}.json`),
			'utf-8'
		)
	);
}

export function addData (table, data) {
	const dataFile = getData(table);
	dataFile.push(data);
	writeFileSync(
		path.resolve(__dirname, `./data/${table}.json`),
		JSON.stringify(dataFile, null, 4)
	);
}