var assert = require('chai').assert;

var VText = require('../lib/vtext');

describe('VText facade', function () {

    var node = null;

    beforeEach(function () {
        node = new VText('foobar');
    });

    afterEach(function () {
        node = null;
    });

    describe('constructor function', function () {
        it('should create a new VText', function () {
            assert.instanceOf(node, VText);
        });
    });
});
