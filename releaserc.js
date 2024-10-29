module.exports = {
  branches: ['main', { name: 'development', prerelease: true }],
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],
    'semantic-release-export-data',
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