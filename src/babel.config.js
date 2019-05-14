//babel.config.js

//Official Document Format
//module.exports = function (api) {
//	api.cache(true);
//
//	const preset = [];
//	const plugins = [];
//
//	return {
//		presets,
//		plugins
//	};
//
//}


// Barbatos Format

const configs = [{ 
	"presets":[
		"@babel/preset-stage-1",
		"@babel/preset-stage-2",
		"@babel/preset-stage-3"
	],
	"plugins":[
		"@babel/proposal-class-properties",
		"@babel/proposal-object-rest-spread",
		"@babel/plugin-proposal-private-methods",
		"@babel/plugin-proposal-decorators",
		"@babel/plugin-proposal-do-expressions",
		"emotion"
	]
}]
	

export default { configs }
