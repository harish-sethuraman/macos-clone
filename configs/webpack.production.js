const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = () => ({
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name: 'PORTFOLIO',
      filename: 'remoteEntry.js',
      remotes: {
        PORTFOLIO: 'PORTFOLIO@http://strek.netlify.app/remoteEntry.js',
        VSCODE: 'VSCODE@http://vsclone.netlify.app/remoteEntry.js',
      },
      shared: [{ react: { singleton: true } }],
    }),
  ],
});
