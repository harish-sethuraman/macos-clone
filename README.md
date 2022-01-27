# macosclone
Being a big fan of [macos.vercel.app](http://macos.vercel.app/) by [@puruvj](https://github.com/puruvj). I wanted to implement multiple clone apps that could run as standalone sites as well as micro frontend inside this macos flavored website. So wrote all microfrontends and this site and stiched all frontends using [module federation](https://webpack.js.org/concepts/module-federation/) 


## Development
To start developing follow these steps
To run macos clone you might want to clone other app's repo too
- https://github.com/harish-sethuraman/terminal-clone
- https://github.com/harish-sethuraman/vscode-clone
- https://github.com/harish-sethuraman/insta-portfolio
- https://github.com/harish-sethuraman/personal-site

Once these repos are cloned. Follow development instructions to setup those repos and start servers (If you change ports for clone app you might want to configure the remote in the webpack development config).

- cd into the repo
- run `yarn install` or `yarn`
- run `yarn start` to start the development server
- open `localhost:1234` in browser


Clone site -> https://clones.strek.in
  - Finder -> loads my portfolio -> https://strek.netlify.app
  - Vscode -> loads VS code clone -> https://vsclone.netlify.app
  - Insta -> loads Instagram clone -> https://strek-insta.netlify.app
  - Iterm -> loads Terminal clone -> https://terminal-clone.netlify.app
