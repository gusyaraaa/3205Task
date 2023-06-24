module.exports = {
    env: {
        es2020: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'import/extensions': 0
    },
    ignorePatterns: ['dist/*']
};
