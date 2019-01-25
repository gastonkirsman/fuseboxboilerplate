const { FuseBox } = require("fuse-box");
const watch = require('node-watch');


const fuse = FuseBox.init({
   homeDir: __dirname,
   output: "./$name.js",
   log: {
       showBundledFiles: false, // Don't list all the bundled files every time we bundle
   },
});

fuse
   .bundle("app")
   .instructions('> ' + './src/Main.ts')
   .completed(proc => {
       console.log('\x1b[42m%s\x1b[0m', '[SUCCESS] Bundle completed successfully.');
       if (true) console.log('\x1b[46m%s\x1b[0m', '[WATCHING]');
   })

fuse.run();

if (true) {
   watch('./src', { recursive: true }, (evt, name) => {
       fuse.run();
   });
}