module.exports = {
  '*': 'prettier --ignore-unknown --write --loglevel error',
  '*.{js,jsx}': 'eslint --quiet',
}
