var util = require('util');
var VirtualNode = require('vtree/vnode');

function VNode() {
    VirtualNode.call(this);
}

util.inherits(VNode, VirtualNode);

VNode.prototype.appendChild = function(node) {
    this.children.push(node);
    return node;
};

module.exports = VNode;
