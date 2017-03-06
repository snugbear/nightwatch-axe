# Nightwatch Axe

[![Circle CI](https://circleci.com/gh/snugbear/nightwatch-axe.svg?style=shield)](https://circleci.com/gh/snugbear/nightwatch-axe)

Nightwatch.js custom commands and assertions for aXe.

## Install

Install using yarn or npm

```bash
yarn add nightwatch-axe
```

Update your nightwatch config file with new paths to command and assertion files

```js
{
  custom_commands_path : [
    "node_modules/nightwatch-axe/src/commands"
  ],
  custom_assertions_path : [
    "node_modules/nightwatch-axe/src/assertions"
  ]
}
```

## aXe Commands

#### `axeInject()`

Injects the axe-core js library into your test page

```js
export default {
  '@tags': ['accessibility'],

  'Page Is Accessible'(browser) {
    ...
    
    browser.axeInject()
  }
}
```

#### `axeRun(options)`

Analyzes the current page against applied axe rules

Parameter Name | Parameter Type | Description
-------------  | -------------- | -----------
options        | object         | 

```js
export default {
  '@tags': ['accessibility'],

  'Page Is Accessible'(browser) {
    ...
    
    browser.axeInject()
    browser.axeRun()
  }
}
```

## aXe Assertions

coming soon
