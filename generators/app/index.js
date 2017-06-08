'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const fs = require('fs');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Lets create a typescript project '
    ));
    return this.prompt([{
      type: 'input',
      name: 'projectName',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }]).then(answers => {
      this.answers = answers;
      this.log('app name', answers.name);
    });
  }

  writing() {
    const files = fs.readdirSync(this.sourceRoot())
    this._autocopy(files);

  }

  _autocopy(files) {
    files.forEach(file => {

      console.log(this);
      // A template
      if (file[0] === '_') {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(`${this.answers.projectName}/${file.substring(1)}`),
          this.answers
        )
      }

      // A normal file
      else {
        this.fs.copy(
          this.templatePath(file),
          this.destinationPath(`${this.answers.projectName}/${file}`)
        )
      }
    })
  }

  install() {
    process.chdir(`${process.cwd()}/${this.answers.projectName}`);
    this.installDependencies()
  }
};
