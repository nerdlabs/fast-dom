var assert = require('chai').assert;

var VNode = require('../lib/vnode');


describe('VNode facade', function () {

    var node = null;

    beforeEach(function () {
        node = new VNode('div');
    });

    afterEach(function () {
        node = null;
    });

    describe('constructor function', function () {
        it('should return a VNode', function () {
            assert.instanceOf(node, VNode);
        });
    });

    describe('appendChild method', function () {

        var child = null;

        beforeEach(function () {
            child = node.appendChild(new VNode('span'));
        });

        afterEach(function () {
            child = null;
        });

        it('should create a now VNode', function () {
            assert.instanceOf(child, VNode);
        });

        it('should append the childNode to the node\'s children', function () {
            assert.lengthOf(node.children, 1);
            assert.equal(node.children[0], child);
        });
    });
});
