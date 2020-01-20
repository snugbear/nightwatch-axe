# Nightwatch Axe Verbose

This fork of nightwatch-axe is more verbose in that it will report each passing rule run and how many elements it was run against. In addition, each rule failure will be counted individually against each failing element so downstream failures are not hidden.

Nightwatch.js custom commands for aXe.

## Install

Install using yarn or npm

```bash
yarn add nightwatch-axe
```

Update your nightwatch config file with new paths to command and assertion files

```js
{
  custom_commands_path : [
    "./node_modules/nightwatch-axe/src/commands"
  ]
}
```

## aXe Commands

#### `axeInject()`

Injects the axe-core js library into your test page

```js
module.exports = {
    '@tags': ['accessibility'],
    'ensure site is accessible': function (browser) {

        browser
            .url('https://dequeuniversity.com/demo/mars/')
            .axeInject()
            .axeRun('body', {
                rules: {'color-contrast': { enabled: false }}
            })
            .end();
    }
```
AxeRun takes as a first parameter the selector of the element you want to run the axe test against. If you do it on a larger containing element such as the body all the inner elements will be scanned.
