module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect', // For native-specific assertions
  ],
  testEnvironment: 'jsdom', // For testing DOM-based code
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|expo|@expo/vector-icons|@react-native|@react-navigation)/)',
  ],
};
