module.exports = 
{
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions:
    {
        parser: 'babel-eslint'
    },
    extends:
    [
        'plugin:vue/essential',
        'plugin:prettier/recommended'
    ],
    plugins:
    [
        'vue'
    ],

    rules: {}
};