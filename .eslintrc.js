module.exports = {
		"parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        'semi': [2, "never"],
        'linebreak-style': 0,
	      'import/prefer-default-export': 0,
        'import/named': 0,
	      'import/no-extraneous-dependencies': 0,
	      'implicit-arrow-linebreak': 0,
	      'indent': ["error", "tab"],
	      'no-tabs': 0,
	      'react/jsx-one-expression-per-line': 0,
	      'react/jsx-wrap-multilines': 0,
	      'react/require-default-props': 0,
	      'react/jsx-indent': [2, 'tab'],
	      'react/jsx-indent-props': 0,
	      'max-len': ['error', {code:160}]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
		"env": {
			"browser": true,
			"node": true,
			"jest": true,
			"es6": true
		},
}