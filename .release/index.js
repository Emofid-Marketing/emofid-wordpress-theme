const fs = require('fs');
const archiver = require('archiver');

const setVersion = require('./version');

async function release() {

  await setVersion();

  const output = fs.createWriteStream(__dirname + '../../../emofid.zip');
  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });

  archive.pipe(output);

  archive.glob('**', {
    ignore: [
      'node_modules/**',
      'pages/**/styles/**',
      'src/**',
      '.release/**',
      '.babelrc',
      '.editorconfig',
      '.gitignore',
      'composer.json',
      'composer.lock',
      'package-lock.json',
      'package.json',
      'README.md',
      'webpack.config.js',
    ]
  }, {
    prefix: 'emofid'
  });

  archive.finalize();
}

release();
