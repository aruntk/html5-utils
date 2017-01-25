# HTML5-UTILS

helper functions to parse and manipulate html5

[![Join the chat at https://gitter.im/aruntk/projects](https://badges.gitter.im/aruntk/projects.svg)](https://gitter.im/aruntk/projects?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Check out the package on npm https://www.npmjs.com/package/html5-utils](https://img.shields.io/npm/v/html5-utils.svg)](https://www.npmjs.com/package/html5-utils)

## Attribute Helpers

### getAttrIndex
```js
.getAttrIndex(node, attributeName)
```
first index of the attribute inside attr array or -1 if attribute is not set

### hasAttr
```js
.hasAttr(node, attributeName)
```
check if attribute is set


### getAttr
```js
.getAttr(node, attributeName)
```
returns attribute value or null


### setAttr
```js
.setAttr(node, attributeName, value)
```
sets/changes attribute.


### removeAttr
```js
.removeAttr(node, attributeName)
```

## TODO

- Create nodes, fragments, comments and shadows
- Append, prepend, replace, remove, swap operations
- Query Selector for nodes. Optional Jquery operations also. like cheerio
- Operations like innerText and innerHTML.
- Extract contents of link nodes and create curresponsing tags
- Change tags
- Ancestors and children helpers
- Cleaners and minifiers
- Change value of desired attribute/s





