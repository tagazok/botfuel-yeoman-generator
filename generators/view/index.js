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
      description: 'View name'
    });

    const [firstLetter, ...letters] = this.options.name;
    this.viewName = `${firstLetter.toUpperCase()}${letters.join('')}`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('view.js'),
      this.destinationPath(`src/views/${this.options.name}-view.js`),
      {
        viewName: this.viewName
      }
    );
  }
};
