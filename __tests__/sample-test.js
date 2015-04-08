//Test for sample module
//
//

jest.dontMock('../sample.js');

describe('sum', function () {

    it('adds up all the numbers in a list', function() {

        var sum = require('../sample');

        expect(sum()).toBe(null);
        expect(sum([])).toBe(null);
        expect(sum([1])).toBe(1);
        expect(sum([1,2,3])).toBe(6);
    });
});

