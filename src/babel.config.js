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
		//MEMO: FIXME: "@babel/preset-typescript" //typescriptが必要になったら入れる(入れなくてもtsファイルを見つけたら自動で入るかもしれない、というか入ってる？要検証)
	],
	"plugins":[
		"emotion"
	]
}]
	

export default { configs }
