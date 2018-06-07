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

    this.option('dialogType', {
      desc: 'Dialog type',
      type: String,
      required: false,
      default: 'Prompt'
    });

    this.namespace = this.options.name.toLowerCase();
    let [firstLetter, ...letters] = this.options.name;
    this.dialogName = `${firstLetter.toUpperCase()}${letters.join('')}`;

    this.promptType = this.options.dialogType.toLowerCase();

    if (!['void', 'base', 'default', 'qna', 'confirmation'].includes(this.promptType)) {
      this.promptType = 'default';
    }

    [firstLetter, ...letters] = this.promptType;
    this.promptType = `${firstLetter.toUpperCase()}${letters.join('')}`;

    this.entitiesJSON = {};
    if (this.options.entities) {
      console.log(this.options.entities);
      for (let entity of this.options.entities) {
        entity = entity.split(':');
        this.entitiesJSON[entity[0]] = { dim: entity[1] };
      }
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('dialog.js'),
      this.destinationPath(`src/dialogs/${this.options.name}-dialog.js`),
      {
        dialogName: this.dialogName,
        namespace: this.namespace,
        entities: JSON.stringify(this.entitiesJSON),
        promptType: this.promptType
      }
    );
  }
};
