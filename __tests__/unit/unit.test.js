import gcd from 'C:/Users/hajlo/Downloads/Code/assignment3/node_calculator/src/modules/calculation/util/gcd.js';
import exp from 'C:/Users/hajlo/Downloads/Code/assignment3/node_calculator/src/modules/calculation/util/exp.js';
import percentage from 'C:/Users/hajlo/Downloads/Code/assignment3/node_calculator/src/modules/calculation/util/percentage.js';

describe('Utility Function Tests', () => {

    test('gcd should return correct greatest common divisor', () => {
        expect(gcd(12, 8)).toBe(4);
        expect(gcd(100, 10)).toBe(10);
        expect(gcd(7, 3)).toBe(1);
    });

    test('exp should return correct exponentiation result', () => {
        expect(exp(2, 3)).toBe(8);
        expect(exp(5, 0)).toBe(1);
        expect(exp(3, 4)).toBe(81);
    });

    test('percentage should return correct percentage result', () => {
        expect(percentage(50, 200)).toBe(25);
        expect(percentage(1, 100)).toBe(1);
        expect(percentage(30, 60)).toBe(50);
    });

});
