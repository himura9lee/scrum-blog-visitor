const theme = require('./theme.js')
const locales = require('../locales/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, theme, {
  locales,
  sidebar,
  search: true,
  searchMaxSuggestions: 10
})