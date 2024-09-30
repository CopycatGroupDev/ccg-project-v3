import fs from 'fs';

const objectWalk = (obj, cb) => {
	return Object.fromEntries(
		Object.entries(obj).map(cb)
	);
}

const defHidProps = (object, keys) => Object.defineProperties(
	object,
	objectWalk(
		keys,
		([fk, fv]) => [
			fk,
			{ value: fv }
		]
	)
)

export default (file) => {
	const $ = () => {
		const callObject = JSON.parse(fs.readFileSync(`./data/${file}.json`).toString());
	
		defHidProps(callObject, {
			add: (object) => {
				console.log(
					JSON.parse(fs.readFileSync(`./data/${file}.json`).toString()),
					"okk"
				);
				let newObj = [...callObject, ...typeof object == 'object' ? object : [object]];
				newObj = Object.keys(newObj).every(k => !isNaN(parseInt(k))) ? Object.values(newObj) : newObj;
				fs.writeFileSync(`./data/${file}.json`, JSON.stringify(newObj, null, 4));
			}
		})
	
		return callObject;
	}

	return $();
};