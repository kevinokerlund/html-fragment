# html-fragment

Convert a string of HTML into a DocumentFragment.

Unlike most other utilities, or general methods that return a fragment from an HTML string, **this utility will preserve
nodes that require specific parent tags, such as a `td` element**.

> Less than 1k gzipped

## Install

```bash
npm install --save html-fragment
```

## Usage

#### In the browser
If the library is directly sourced to the window, it operates on the HtmlFragment global variable:
```javascript
window.HtmlFragment
````

#### In ES6
```javascript
import HtmlFragment from 'html-fragment';
```

Once you have access to the function, just pass the HTML you want turned into a DocumentFragment into the function.

```javascript
var fragment = HtmlFragment('<div>Some crazy amount of HTML</div>');
```

# Browser support
| Chrome | Firefox | Safari | IE  | Edge |
|:------:|:-------:|:------:|:---:|:----:|
|    ✓   |    ✓    |    ✓   | 9+  |   ✓  |
