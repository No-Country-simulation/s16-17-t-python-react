import globals from 'globals'

export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	{
		rules: {
			// With autofix
			'block-spacing': 'error',
			'no-template-curly-in-string': 'error',
			'no-implicit-coercion': 'error',
			'no-lonely-if': 'error',
			yoda: 'error',
			curly: 'error',

			// Without autofix
			'no-alert': 'error',
			'no-bitwise': 'error',
			'no-empty-function': 'error',
			'no-magic-numbers': 'error',
			'no-duplicate-imports': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			eqeqeq: ['error', 'always'],
		},
	},
]
