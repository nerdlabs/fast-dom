# fast-dom [![Build Status][0]][1] [![Coverage Status][2]][3]



# braindump

## tree-construction
```js
var parser = require('fast-html')({ parseAttributes: true });
var VNode = require('./lib/vnode.js');
var VText = require('./lib/vtext.js');


var element_stack = [];
var children_stack = [];
var children = [];

parser.on('start', function (tag, attributes) {
    children_stack.push(children);
    children = [];
    element_stack.push({ tag: tag, attributes: attributes });
});

parser.on('data', function (data) {
    children.push(new VText(data));
});

parser.on('end', function (tag) {
    var element = element_stack.pop();
    var node = new VNode(element.tag, element.attributes, children);

    children = children_stack.pop();
    children.push(node);
});


/*
  <html> []
  <head> [[]]
  <title> [[[]]]
  test [[[test]]]
  </title> [[title([test])]]
  </head> [head([title([test])])]
  <body> [head([title([test])])],[]]
  <p> [head([title([test])])],[[]]]
  fooo [head([title([test])])],[[foo]]]
  </p> [head([title([test])])],[p([foo])]]
  test [head([title([test])])],[p([foo]),test]]
  <p> [head([title([test])])],[p([foo]),test,[]]]
  bar [head([title([test])])],[p([foo]),test,[bar]]]
  </p> [head([title([test])])],[p([foo]),test,p([bar])]]
  </body> [head([title([test])])],body([p([foo]),test,p([bar])])]
  </html> html([head([title([test])])],body([p([foo]),test,p([bar])])])
*/

parser.parse('<html><head><title>test</title></head><body><p>foo</p>test<p>bar</p></body></html>');

console.log('children:', JSON.stringify(children[0], null, 4));
```

## usage
```js
var dom = require('fast-dom');

dom.install(this);

document.body.innerHTML = '<div><h1>test</h1><span id="foo"></span></div>';
document.body.innerHTML = '<div><h2>test</h2><span id="foo"></span></div>';

var vNode = document.getElementById('foo');
vNode.innerHTML = '<h3>foo</h3>';
vNode.setAttribute('class', 'bar');
```


## methods that need a new facade

### on `document` object
* document.createElement
* document.createTextNode
* document.createDocumentFragment

### on `Element.prototype`
* Element.innerHTML
* Element.innerText
* Element.textContent
* Element.get/setAttribute
* Element.classList
* Element.dataset
* Element.appendChild

### shared between `document` and `Element.prototype`
* document.getElementById
* document.getElementsByName
* document.getElementsByTagName
* document.getElementsByClassName
* document.querySelector
* document.querySelectorAll


## how dom nodes are constructed / how the dom node prototype chain works
* null
* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
* [Node](https://developer.mozilla.org/en/docs/Web/API/Node)
* [Element](https://developer.mozilla.org/en/docs/Web/API/Element)
* [HTMLElement](https://developer.mozilla.org/en/docs/Web/API/HTMLElement)
* ... specialized nodes (HTMLMediaElement -> HTMLAudioElement)



[0]: https://img.shields.io/travis/nerdlabs/fast-dom.svg
[1]: https://travis-ci.org/nerdlabs/fast-dom
[2]: https://img.shields.io/coveralls/nerdlabs/fast-dom.svg
[3]: https://coveralls.io/r/nerdlabs/fast-dom
