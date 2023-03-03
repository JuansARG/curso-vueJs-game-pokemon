module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  //la linea de abajo la agrege para que no me tire error npm
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)']
}
