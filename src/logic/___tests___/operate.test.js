import operate from '../operate';
import '@testing-library/jest-dom/extend-expect';

describe('tests for All operations', () => {
    test('it expects 1 + 3 to be 4', () => {
      expect(operate(1, 3, '+')).toEqual('4');
    });
    test('it expects 4 - 2 to be 2', () => {
      expect(operate(4, 2, '-')).toEqual('2');
    });
    test('it expects 4 x 2 to be 8', () => {
      expect(operate(4, 2, 'x')).toEqual('8');
    });
    test('it expects 4 ÷ 4 to be 1', () => {
      expect(operate(4, 4, '÷')).toEqual('1');
    });
  });