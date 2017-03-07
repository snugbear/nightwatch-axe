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
    this.assert.ok(response.state === 'success', 'Failed to Execute aXe Test')

    const { error, results } = response.value
    this.assert.ok(!error, error)

    const { violations } = results
    this.assert.ok(violations.length < 1, 'aXe Violations Found')
  })

  return this
}
