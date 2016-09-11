#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('../lib')
const ababelES2015 = require('ababel-es2015')

runTasks('shim', [
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'shim/node'
  })
], true)