'use strict'
const {readFileSync} = require('fs'); 
//create a cache object -> To prevent duplication of module
requireCustom.cache = Object.create(null)

//requireCustom(file) ->return <module exports>
function requireCustom(filename) {
	if(!(filename in requireCustom.cache)){
		let moduleCustom = {exports:{}};
		const body = readFileSync(filename, "utf8");
		let wrapper = Function("requireCustom", "moduleCustom", "exports", body);
		wrapper(requireCustom, moduleCustom, moduleCustom.exports)
		requireCustom.cache[filename] = moduleCustom;
	}
	return requireCustom.cache[filename].exports;
}
exports.requireCustom = requireCustom;

