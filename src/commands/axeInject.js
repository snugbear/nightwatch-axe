const fs = require('fs')
const path = require('path')

const axeCoreJS = fs.readFileSync(path.resolve('node_modules/axe-core/axe.min.js'), 'utf8')

exports.command = function axeInject(done) {
  const elId = 'nightwatch-axe'

  this.execute(function(aXe) {
    if (document.querySelector(`#${elId}`)) return

    let tag = document.createElement('script')
    tag.id = elId
    tag.text = aXe

    document.head.appendChild(tag)
  }, [axeCoreJS])

  if (typeof done === 'function') done.call(this)

  return this
}
