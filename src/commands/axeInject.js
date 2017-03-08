const fs = require('fs')
const path = require('path')

const libPath = path.join(__dirname, '..', '..', 'node_modules', 'axe-core', 'axe.min.js')
const axe = fs.readFileSync(libPath, 'utf8')

exports.command = function axeInject() {
  this.execute(function(js) { eval(js) }, [axe])

  return this
}
