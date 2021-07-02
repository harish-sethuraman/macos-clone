module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
      },
    ],
  ],
};
