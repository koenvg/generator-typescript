'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-typescript-project:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ projectName: 'banaan', });
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
