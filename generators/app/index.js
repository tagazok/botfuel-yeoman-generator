'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

var cloneOrPull = require('git-clone-or-pull');
var path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the delightful ${chalk.red('generator-botfuel')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Enter your project name (i.e.: myAwesomeChatbot): '
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const repo = `https://github.com/Botfuel/botfuel-sample-starter.git`;
    console.log(repo);

    cloneOrPull(repo, path.join(process.cwd(), this.props.name), function(err) {
      if (err) console.log(err);
    });
  }

  install() {
    // This.installDependencies();
  }
};
