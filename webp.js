import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const files = imagemin(['./src/images/*.{jpg,png,JPEG,jpeg}'], {
  destination: './src/images',
  plugins: [
    imageminWebp({ quality: 50 }),
  ],
});

files.then((opt) => console.log(opt));
