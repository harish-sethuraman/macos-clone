const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Harish Kumar',
      template: 'src/public/dev.html',
    }),
    new ModuleFederationPlugin({
      name: 'PORTFOLIO',
      filename: 'remoteEntry.js',
      remotes: {
        PORTFOLIO: 'PORTFOLIO@http://localhost:8080/remoteEntry.js',
        VSCODE: 'VSCODE@http://localhost:1235/remoteEntry.js',
        INSTA: 'INSTA@http://localhost:8081/remoteEntry.js',
        ITERM: 'ITERM@http://localhost:1236/remoteEntry.js',
      },
      shared: [
        {
          react: {
            requiredVersion: '^17.0.2',
            singleton: true,
          },
        },
      ],
    }),
  ],
});
