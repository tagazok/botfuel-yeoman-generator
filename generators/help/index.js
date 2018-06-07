'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  run() {
    const help = {
      dialog: {
        description: 'Generate a new Dialog with built-in entities. Default type is prompt',
        usage: 'yo botfuel:dialog travel [location:city date:time] [--type={void, base, default, qna, confirmation, prompt}]'
      },
      view: {
        description: 'Generate a new View',
        usage: 'yo botfuel:view travel',
      }, 
      intent: {
        description: 'Generate a new Dialog and a new View with 1 command',
        usage: 'yo botfuel:intent travel [location:city date:time]',
      },
      extractor: {
        description: 'Generate a new Extractor. Default type is ws',
        usage: 'yo botfuel:extractor xaxis [ws, corpus]'
      }
    };

    for (const [key, value] of Object.entries(help)) {
      console.log(`${value.description} :`);
      console.log(`\t${value.usage}`);
    }
  }
};
