import { test, expect, describe } from 'vitest';
import { game1A2B } from '../src/common/1a2b';

describe('1A2B Game Test', () => {
  const testCases = [
    {
      guess: '1234',
      answer: '1234',
      expected: { A: 4, B: 0 },
    },
    {
      guess: '1234',
      answer: '5678',
      expected: { A: 0, B: 0 },
    },
    {
      guess: '1234',
      answer: '1432',
      expected: { A: 2, B: 2 },
    },
    {
      guess: '1234',
      answer: '1532',
      expected: { A: 2, B: 1 },
    },
    {
      guess: '1234',
      answer: '2135',
      expected: { A: 1, B: 2 },
    },
  ];

  testCases.forEach((testCase, index) => {
    test(`test case ${index + 1}`, () => {
      expect(game1A2B(testCase.guess, testCase.answer)).toEqual(testCase.expected);
    });
  });
});
