import Mail from '../images/mail.webp';
import Safari from '../images/safari.webp';
import Terminal from '../images/iTerm.webp';
import Finder from '../images/finder.webp';
import Git from '../images/git.webp';
import Music from '../images/music.webp';
import Notes from '../images/notes.webp';
import Postman from '../images/postman.webp';
import VSCode from '../images/vscode.webp';
import Insta from '../images/insta.webp';

const renderImage = (item) => {
  switch (item) {
    case 'finder':
      return Finder;
    case 'git':
      return Git;
    case 'iterm':
      return Terminal;
    case 'mail':
      return Mail;
    case 'music':
      return Music;
    case 'notes':
      return Notes;
    case 'postman':
      return Postman;
    case 'safari':
      return Safari;
    case 'vscode':
      return VSCode;
    case 'insta':
      return Insta;
    default:
      return null;
  }
};

export { renderImage };
