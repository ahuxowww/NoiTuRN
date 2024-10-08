const fs = require('fs');

// Đọc file JSON
fs.readFile(
  '/Users/user/NoiTu/src/assets/dictionary/dictionary.json',
  'utf8',
  (err, data) => {
    if (err) {
      console.error('Lỗi khi đọc file:', err);
      return;
    }

    const dictionary = JSON.parse(data);

    let sortedWords = {};

    dictionary.forEach(item => {
      if (item?.text?.includes(' ')) {
        const firstWord = item?.text?.split(' ')[0]?.toLowerCase();
        if (!sortedWords[firstWord]) {
          sortedWords[firstWord] = [];
        }
        sortedWords[firstWord].push(item?.text);
      }
    });

    fs.writeFile(
      '/Users/user/NoiTu/src/assets/dictionary/outdictionary.json',
      JSON.stringify(sortedWords, null, 2),
      'utf8',
      err => {
        if (err) {
          console.error('Lỗi khi ghi file:', err);
          return;
        }
        console.log('File đã được phân loại và lưu thành công!');
      },
    );
  },
);
