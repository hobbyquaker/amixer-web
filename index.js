#!/usr/bin/env node

const pkg = require('./package.json');
const Mixer = require('./lib/mixer');
const Webserver = require('./lib/webserver');

const config = require('yargs')
    .usage(`${pkg.name} ${pkg.version}
${pkg.description}

Usage: $0 [options]`)
    .describe('path', 'amixer path')
    .describe('port', 'webserver port')
    .describe('device', 'amixer device')
    .alias({
        a: 'path',
        p: 'port',
        D: 'device'
    })
    .default({
        path: '/usr/bin/amixer',
        port: 3000,
        device: 'equal'
    })
    .version()
    .help('help')
    .argv;

const mixer = new Mixer({path: config.path, device: config.device});
const webserver = new Webserver({port: config.port, mixer}); // eslint-disable-line no-unused-vars
