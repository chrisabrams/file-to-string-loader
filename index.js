module.exports = function FileToString(content) {
  if(this.cacheable) this.cacheable()

  content = content.replace(/(\r\n|\n|\r)/gm, '') // Remove new line characters
  content = content.replace(/\t+/gm, '')          // Remove tab characters

  return 'module.exports = ' + JSON.stringify(content)
}
