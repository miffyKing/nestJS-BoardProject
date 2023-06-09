module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'temp', 'style', 'refactor', 'test', 'chore', 'hotfix', 'docs']],
    'header-max-length': [2, 'always', 50],
    'body-max-length': [2, 'never'],
    'references-empty': [2, 'never'],
  },
};
