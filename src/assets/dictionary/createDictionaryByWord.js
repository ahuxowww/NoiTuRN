const fs = require('fs');

// Đọc file JSON
fs.readFile(
  '/Users/user/NoiTu/src/assets/dictionary/dictionary.json',
  'utf8',
  (err, data) => {
    if (err) {
      return;
    }

    const dictionary = JSON.parse(data);

    let sortedWords = {};

    let firstWords = [];

    dictionary.forEach(item => {
      if (item?.text?.includes(' ')) {
        const firstWord = item?.text?.split(' ')[0]?.toLowerCase();
        if (!sortedWords[firstWord]) {
          sortedWords[firstWord] = [];
        }
        sortedWords[firstWord].push(item?.text);

        // Add first word to firstWords
        if (
          !firstWords?.includes(firstWord) &&
          firstWord?.length > 2 &&
          !firstWord?.includes('-')
        ) {
          firstWords.push(firstWord);
        }
      }
    });

    fs.writeFile(
      '/Users/user/NoiTu/src/assets/dictionary/outdictionary.json',
      JSON.stringify(sortedWords, null, 2),
      'utf8',
      err => {
        if (err) {
          return;
        }
      },
    );

    fs.writeFile(
      '/Users/user/NoiTu/src/assets/dictionary/outwords.json',
      JSON.stringify(firstWords, null, 2),
      'utf8',
      err => {
        if (err) {
          return;
        }
      },
    );
  },
);
