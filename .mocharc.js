// 'use strict';

module.exports = {
    diff: true,
    extension: ['js','ts','tsx'],
    opts: false,
    package: './package.json',
    reporter: 'spec',
    slow: 75,
    timeout: 2000,
    ui: 'bdd',
    'watch-files': ['test/**/*.spec.js'],
    require: '@babel/register, jsdom-global/register, ts-node/register'
};
