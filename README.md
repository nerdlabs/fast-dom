# DOM2 [![Build Status][0]][1] [![Coverage Status][2]][3]



# braindump


## usage

var dom = require('dom2');

dom.install(this);

document.body.innerHTML = '<div><h1>test</h1><span id="foo"></span></div>';
document.body.innerHTML = '<div><h2>test</h2><span id="foo"></span></div>';

var vNode = document.getElementById('foo');
vNode.innerHTML = '<h3>foo</h3>';
vNode.setAttribute('class', 'bar');



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



[0]: https://travis-ci.org/nerdlabs/DOM2.svg?branch=master
[1]: https://travis-ci.org/nerdlabs/DOM2
[2]: https://img.shields.io/coveralls/nerdlabs/DOM2.svg
[3]: https://coveralls.io/r/nerdlabs/DOM2
