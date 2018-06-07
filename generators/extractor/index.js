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
      description: 'Extractor name',
    });

    this.argument('type', {
      type: String,
      required: false,
      description: 'Extractor type (WsExtractor or CorpusExtractor)',
      default: 'ws'
    });

    let [firstLetter, ...letters] = this.options.name;
    this.extractorName = `${firstLetter.toUpperCase()}${letters.join('')}`;

    this.extractorType = this.options.type;
    if (!['ws', 'corpus'].includes(this.options.type.toLowerCase())) {
      this.extractorType = 'ws';
    }
    [firstLetter, ...letters] = this.extractorType;
    this.extractorType = `${firstLetter.toUpperCase()}${letters.join('')}`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('extractor.js'),
      this.destinationPath(`src/extractors/${this.options.name}-extractor.js`),
      {
        extractorName: this.extractorName,
        extractorType: this.extractorType
      }
    );
  }
};
