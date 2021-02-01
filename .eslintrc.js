module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
        'import/extensions': [
            'error',
            {
                js: 'never',
                ts: 'never',
                tsx: 'never',
                jsx: 'never',
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
        ],
        'no-param-reassign': 'off',
        'no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
    },
}
