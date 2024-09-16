// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test drinking ages', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should return "1 apple"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('apple');
    mPrompt.mockReturnValueOnce(1);

    jest.isolateModules(() => {
      const { result } = require('./pluralize');
      expect(result).toBe('1 apple');
    });
  });

  test('should return "2 apples"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('apple');
    mPrompt.mockReturnValueOnce(2);

    jest.isolateModules(() => {
      const { result } = require('./pluralize');
      expect(result).toBe('2 apples');
    });
  });

  test('should return "10 baloons"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('baloon');
    mPrompt.mockReturnValueOnce(10);

    jest.isolateModules(() => {
      const { result } = require('./pluralize');
      expect(result).toBe('10 baloons');
    });
  });

  test('should return "0 degrees"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('degree');
    mPrompt.mockReturnValueOnce(0);

    jest.isolateModules(() => {
      const { result } = require('./pluralize');
      expect(result).toBe('0 degrees');
    });
  });

  test('should return "-40 degrees"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('degree');
    mPrompt.mockReturnValueOnce(-40);

    jest.isolateModules(() => {
      const { result } = require('./pluralize');
      expect(result).toBe('-40 degrees');
    });
  });
});
