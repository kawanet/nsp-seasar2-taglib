# nsp-seasar2-taglib

[![Node.js CI](https://github.com/kawanet/nsp-seasar2-taglib/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/kawanet/nsp-seasar2-taglib/actions/)
[![npm version](https://img.shields.io/npm/v/nsp-seasar2-taglib)](https://www.npmjs.com/package/nsp-seasar2-taglib)

[NSP](https://github.com/kawanet/nsp-server-pages) taglib for Seasar2 SAStruts Tag Library

- tags: `<s:form/>`, `<s:link/>` and `<s:submit/>`
- functions: `${ f:h("abc") }` etc.
- See [TypeScript declaration files](https://github.com/kawanet/nsp-seasar2-taglib/tree/main/types/) for API detail.

## SYNOPSIS

```js
import {createNSP} from "nsp-server-pages";
import {fFunctions, sTags} from "nsp-seasar2-taglib";

const nsp = createNSP();

nsp.addTagLib({ns: "f", fn: fFunctions});
nsp.addTagLib({ns: "s", tag: sTags});

const render = await nsp.loadJSP("path/to/template.jsp");

console.log(await render({...}));
```

## COMMONJS

- Both ES Modules and CommonJS supported.

```js
const {createNSP} = require("nsp-server-pages");
const {fFunctions, sTags} = require("nsp-seasar2-taglib");
```

## LINKS

- https://github.com/kawanet/nsp-server-pages
- https://github.com/kawanet/nsp-jstl-taglib
- https://github.com/kawanet/nsp-struts1-taglib
- https://github.com/kawanet/nsp-seasar2-taglib
- https://github.com/seasarorg/sa-struts
- https://github.com/seasarorg/sa-struts/tree/master/src/main/java/org/seasar/struts/taglib
- https://github.com/seasarorg/sa-struts/tree/master/src/main/resources/META-INF

## LICENSE

```js
// SPDX-License-Identifier: Apache-2.0
```
