import numberCruncher from 'C:/Users/hajlo/Downloads/Code/assignment3/node_calculator/src/modules/calculation/numberCruncher.js';

describe('Integration Tests for numberCruncher', () => {

    test('numberCruncher should handle addition', () => {
        expect(numberCruncher({ numOne: '10', numTwo: '5', operator: 'add' })).toBe(15);
    });

    test('numberCruncher should handle subtraction', () => {
        expect(numberCruncher({ numOne: '10', numTwo: '5', operator: 'subtract' })).toBe(5);
    });

    test('numberCruncher should handle multiplication', () => {
        expect(numberCruncher({ numOne: '10', numTwo: '5', operator: 'multiply' })).toBe(50);
    });

    test('numberCruncher should handle division', () => {
        expect(numberCruncher({ numOne: '10', numTwo: '5', operator: 'divide' })).toBe(2);
    });

    test('numberCruncher should handle percentage', () => {
        expect(numberCruncher({ numOne: '50', numTwo: '200', operator: 'percentage' })).toBe(25);
    });

    test('numberCruncher should handle exponentiation', () => {
        expect(numberCruncher({ numOne: '2', numTwo: '3', operator: 'exponent' })).toBe(8);
    });

    test('numberCruncher should handle gcd', () => {
        expect(numberCruncher({ numOne: '12', numTwo: '8', operator: 'gcd' })).toBe(4);
    });

});
