/* jshint node: true */
/* global describe, it, expect */

'use strict';

var module = require('../../assets/js/component');

describe('First Component', function() {
    it('returns name', function () {
        var expectedName = 'Chris Fahey',
            output = module.nameComponent();

        expect(expectedName).toBe(output);
    });
});
