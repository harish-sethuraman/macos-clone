## Introduction

Tetris is a singular component library that provides all the bootstrap components under the same roof. Me as a frontend developer have always been writing numerous lines of code to create components such as tab or accordion. So i wanted to simplify the effort to write code thereby providing the data in form of JSON. This is how tetris was born !😄

## Why use Tetris ? 
You may know the game Tetris from your childhood. Smaller Tetromino blocks combine to form a bigger block. Same way tetris-components library contains the smaller core components of bootstrap that can be combined to form bigger components without any hassle.

Tetris contains all the bootstrap components that are available from buttons to tabs. Tetris is being transformed into a library where one can build card or a section or even a whole website for them just by providing the JSON data. You can also style the component as per your wish since all the components contain bootstrap classes.

## About
Tetris is written in reactJS with prop validation. It contains bootstrap css. Tetris is bundled with webpack. Almost all the smaller components that you see in my website from the progress bar in the home page to the buttons everything are rendered using tetris. You can see how the Tetris components have gel into the website CSS that I have written.

## How to use ? 
The approach for using tetris is very simple
 1. Install tetris-components library using the command npm install tetris-components
 2. From the package import Tetris using `import Tetris from 'tetris-components'`
 3. Then you just have to pass the data to be rendered inside the `tetromino` prop.
 4. The tetromino prop generally takes an object or array of objects.
 5. To specify the component that needs to be rendered you need to pass the object with the key `type` and the component that you need to render as the value.
 6. Some bigger sized components such as Cards, Accordion, Tab, Contaienr ( in progress) requires array of objects as tetromino values.
 
 I have provided some examples of code snippets and the output at the top 
To see all the available components and the props and keys that can be sent [see this](https://60260ca0aab4a60023ec3667-nnwwcgmxox.chromatic.com/) storybook link.


