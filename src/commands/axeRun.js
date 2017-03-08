exports.command = function axeRun(selector='html', options={}) {
  this.executeAsync(function(selector, options, done) {

    (function(axe) {
      if (!axe) done({ error: 'aXe not found. Make sure it has been injected' })
      var el = document.querySelector(selector)

      axe.run(el, options, function(err, results) {
        if (err) { done({ error: err.toString() }) }
        done({ results: results })
      })
    })(window.axe)

  }, [selector, options], function(response) {
    this.assert.ok(response.state === 'success', 'axeRun command executed')

    const { error, results } = response.value
    this.assert.ok(!error, error || 'executing aXe tests')

    const { passes=[], violations=[] } = results

    this.assert.ok(true, `${passes.length} aXe Tests Passed`)

    for (const violation of violations) {
      const { help } = violation

      for (const node of violation.nodes) {
        const { target } = node
        this.assert.ok(false, `${help} on element ${target}`)
      }
    }
  })

  return this
}
