const replace = require('replace-in-file');

async function setVersion() {
  const options = {
    files: 'version',
    processor: (oldVersion) => {
      let num = parseInt(oldVersion) + 1;
      return `${num}`;
    },
  };

  try {
    const results = await replace(options);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

module.exports = setVersion;
