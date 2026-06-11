const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  describe('addition', () => {
    test('adds two positive integers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative and positive number', () => {
      expect(add(-5, 2)).toBe(-3);
    });

    test('adds floats with precision', () => {
      expect(add(2.5, 1.2)).toBeCloseTo(3.7);
    });

    test('accepts numeric strings', () => {
      expect(add('4', '6')).toBe(10);
    });
  });

  describe('subtraction', () => {
    test('subtracts two integers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('resulting negative', () => {
      expect(subtract(3, 7)).toBe(-4);
    });

    test('accepts numeric strings', () => {
      expect(subtract('10', '4')).toBe(6);
    });
  });

  describe('multiplication', () => {
    test('multiplies two integers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('multiplies by zero', () => {
      expect(multiply(123, 0)).toBe(0);
    });

    test('accepts numeric strings', () => {
      expect(multiply('3', '7')).toBe(21);
    });
  });

  describe('division', () => {
    test('divides two integers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('divides to fractional result', () => {
      expect(divide(7, 2)).toBeCloseTo(3.5);
    });

    test('division by zero throws', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });

    test('accepts numeric strings', () => {
      expect(divide('9', '3')).toBe(3);
    });
  });

  describe('extended operations', () => {
    describe('modulo', () => {
      test('computes remainder of integers', () => {
        expect(modulo(5, 2)).toBe(1);
      });

      test('modulo with negative numbers', () => {
        expect(modulo(-5, 2)).toBe(-1);
      });

      test('modulo by zero throws', () => {
        expect(() => modulo(5, 0)).toThrow('Division by zero');
      });
    });

    describe('power', () => {
      test('power with positive exponent', () => {
        expect(power(2, 3)).toBe(8);
      });

      test('power with zero exponent', () => {
        expect(power(5, 0)).toBe(1);
      });

      test('power with negative exponent', () => {
        expect(power(2, -1)).toBeCloseTo(0.5);
      });
    });

    describe('squareRoot', () => {
      test('square root of perfect square', () => {
        expect(squareRoot(16)).toBe(4);
      });

      test('square root of non-perfect square', () => {
        expect(squareRoot(2)).toBeCloseTo(Math.SQRT2);
      });

      test('square root of negative number throws', () => {
        expect(() => squareRoot(-4)).toThrow('Square root of negative number');
      });
    });
  });

  describe('input validation', () => {
    test('non-numeric input throws TypeError', () => {
      expect(() => add('foo', 2)).toThrow(TypeError);
      expect(() => divide(1, 'bar')).toThrow(TypeError);
    });
  });
});
