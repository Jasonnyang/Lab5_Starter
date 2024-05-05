// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as functions from '../code-to-unit-test/unit-test-me.js';

// Tests for isPhoneNumber
describe('isPhoneNumber', () => {
  test('Valid phone number with dashes', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('Valid phone number with parentheses and space', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('Invalid phone number with letters', () => {
    expect(functions.isPhoneNumber('123-456-ABCD')).toBe(false);
  });
  test('Invalid phone number with too few digits', () => {
    expect(functions.isPhoneNumber('123-45-6789')).toBe(false);
  });
});

// Tests for isEmail
describe('isEmail', () => {
  test('Valid email', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
  });
  test('Valid email with underscore', () => {
    expect(functions.isEmail('foo_bar@example.com')).toBe(true);
  });
  test('Invalid email with no domain', () => {
    expect(functions.isEmail('test@')).toBe(false);
  });
  test('Invalid email with no @ symbol', () => {
    expect(functions.isEmail('testexample.com')).toBe(false);
  });
});

// Tests for isStrongPassword
describe('isStrongPassword', () => {
  test('Valid strong password', () => {
    expect(functions.isStrongPassword('Abc123')).toBe(true);
  });
  test('Valid strong password with underscore', () => {
    expect(functions.isStrongPassword('Abc_123')).toBe(true);
  });
  test('Invalid password, starts with number', () => {
    expect(functions.isStrongPassword('1abcd')).toBe(false);
  });
  test('Invalid password, too short', () => {
    expect(functions.isStrongPassword('Ab1')).toBe(false);
  });
});

// Tests for isDate
describe('isDate', () => {
  test('Valid date', () => {
    expect(functions.isDate('12/25/2020')).toBe(true);
  });
  test('Valid date with one digit month and day', () => {
    expect(functions.isDate('1/1/2020')).toBe(true);
  });
  test('Invalid date with wrong format', () => {
    expect(functions.isDate('2020/12/25')).toBe(false);
  });
  test('Invalid date with characters', () => {
    expect(functions.isDate('December 25, 2020')).toBe(false);
  });
});

// Tests for isHexColor
describe('isHexColor', () => {
  test('Valid hex color (3 characters)', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
  });
  test('Valid hex color (6 characters)', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
  });
  test('Invalid hex color (too many characters)', () => {
    expect(functions.isHexColor('#FFFFFFF')).toBe(false);
  });
  test('Invalid hex color (wrong characters)', () => {
    expect(functions.isHexColor('#ZZZ999')).toBe(false);
  });
});
