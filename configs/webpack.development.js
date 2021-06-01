const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = () => ({
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: 'PORTFOLIO',
      filename: 'remoteEntry.js',
      remotes: {
        PORTFOLIO: 'PORTFOLIO@http://localhost:8080/remoteEntry.js',
        VSCODE: 'VSCODE@http://localhost:1235/remoteEntry.js',
        INSTA: 'INSTA@http://localhost:8081/remoteEntry.js',
        ITERM: 'ITERM@http://localhost:1236/remoteEntry.js',
      },
      shared: [{ react: { singleton: true } }],
    }),
  ],
});
