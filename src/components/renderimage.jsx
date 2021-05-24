import Mail from '../images/mail.png';
import Safari from '../images/safari.png';
import Terminal from '../images/iTerm.png';
import Finder from '../images/finder.png';
import Git from '../images/git.png';
import Music from '../images/music.png';
import Notes from '../images/notes.png';
import Postman from '../images/postman.png';
import VSCode from '../images/vscode.png';
import Insta from '../images/insta.png';

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
