'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: true,
      description: 'Dialog name'
    });

    this.argument('entities', {
      type: Array,
      required: false,
      description: 'Entities'
    });
  }

  initializing() {
    this.composeWith('botfuel:view', { arguments: [this.options.name] });
    this.composeWith('botfuel:dialog', {
      arguments: [this.options.name, ...(this.options.entities || '')]
    });
  }
};
