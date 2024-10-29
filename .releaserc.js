const { dirname, join } = require('path');


function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

module.exports = {
  branches: ['main', { name: 'development', prerelease: true }],
  tagFormat: '${version}',
  plugins: [
    getAbsolutePath('@semantic-release/commit-analyzer'),
    getAbsolutePath('@semantic-release/release-notes-generator'),
    getAbsolutePath('@semantic-release/changelog'),
    getAbsolutePath('@semantic-release/github'),
    [getAbsolutePath('@semantic-release/npm'), { npmPublish: false }],
    [
      getAbsolutePath('@semantic-release/git'),
      {
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],
    getAbsolutePath('semantic-release-export-data'),
  ],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      { type: "feat",     section: ":sparkles: Features",                             hidden: false }, // MINOR
      { type: "fix",      section: ":bug: Bug Fixes",                                 hidden: false }, // PATCH
      { type: "perf",     section: ":zap: Performance Improvements",                  hidden: false }, // PATCH
      { type: "revert",   section: ":rewind: Reverts",                                hidden: true  }, // NO_RELEASE
      { type: "docs",     section: ":books: Documentation",                           hidden: true  }, // NO_RELEASE
      { type: "style",    section: ":lipstick: Styles",                               hidden: true  }, // NO_RELEASE
      { type: "chore",    section: ":octopus: Miscellaneous Chores",                  hidden: true  }, // NO_RELEASE
      { type: "refactor", section: ":recycle: Code Refactoring",                      hidden: true  }, // NO_RELEASE
      { type: "test",     section: ":white_check_mark: Tests",                        hidden: true  }, // NO_RELEASE
      { type: "build",    section: ":package: Build System",                          hidden: true  }, // NO_RELEASE
      { type: "ci",       section: ":construction_worker: Continuous Integration",    hidden: true  }, // NO_RELEASE
    ],
  },
};