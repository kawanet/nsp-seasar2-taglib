# nsp-seasar2-taglib

[![Node.js CI](https://github.com/kawanet/nsp-seasar2-taglib/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/kawanet/nsp-seasar2-taglib/actions/)
[![npm version](https://img.shields.io/npm/v/nsp-seasar2-taglib)](https://www.npmjs.com/package/nsp-seasar2-taglib)

[NSP](https://github.com/kawanet/nsp-server-pages) taglib for Seasar2 SAStruts Tag Functions

- tags: `<s:form/>`, `<s:link/>` and `<s:submit/>`
- functions: `${ f:h("abc") }` etc.
- See [TypeScript declaration files](https://github.com/kawanet/nsp-seasar2-taglib/tree/main/types/) for API detail.

## SYNOPSIS

```js
import {createNSP} from "nsp-server-pages";
import {fFunctions} from "nsp-seasar2-taglib";

const nsp = createNSP();

nsp.addTagLib({ns: "f", fn: fFunctions});

const render = await nsp.loadJSP("path/to/template.jsp");

const context = {};

const html = await render(context);

console.log(html);
```

## COMMONJS

- Both ES Modules and CommonJS supported.

```js
const {createNSP} = require("nsp-server-pages");
const {fFunctions, sTags} = require("nsp-seasar2-taglib");
```

## COMPATIBILITY

SA-Struts' `${f:xxx()}` functions are implemented.
`<s:form/>`, `<s:link/>` and `<s:submit/>` tags are not implemented yet.
Contributions for missing features are welcome here!

| Function                                            | Status            | Note                         |
|-----------------------------------------------------|-------------------|------------------------------|
| `${f:h(input)}`                                     | 👍 OK             |                              |
| `${f:u(input)}`                                     | 👍 OK             |                              |
| `${f:date(input, pattern)}`                         | 🕑 Not yet        | `yyyyMMdd` is only supported |
| `${f:number(input, pattern)}`                       | 👍 OK             |                              |
| `${f:br(input)}`                                    | 👍 OK             |                              |
| `${f:nbsp(input)}`                                  | 👍 OK             |                              |
| `${f:url(input)}`                                   | 🕑 Not yet        |                              |
| `${f:label(value, dataList, valueName, labelName)}` | 👍 OK             |                              |
\
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
