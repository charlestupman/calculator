module.exports = {
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/mock-stubs.js',
		'\\.(css||scss)$': 'identity-obj-proxy',
	},
	setupTestFrameworkScriptFile: '<rootDir>/tools/test-adapter.js',
}
