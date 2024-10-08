const fs = require('fs');

// Đọc dữ liệu từ file input.json
fs.readFile('./src/assets/dictionary/dictionary.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Lỗi khi đọc file JSON:', err);
    return;
  }

  // Parse dữ liệu JSON
  const jsonData = JSON.parse(data);

  // Phân loại từ theo ký tự đầu tiên của text
  const result = jsonData.reduce((acc, item) => {
    const firstChar = item.text.charAt(0).toLowerCase(); // Lấy ký tự đầu tiên và chuyển về chữ thường
    if (!acc[firstChar]) {
      acc[firstChar] = [];
    }
    acc[firstChar].push(item);
    return acc;
  }, {});

  // Ghi dữ liệu phân loại vào file output.json
  fs.writeFile(
    './src/assets/dictionary/filterdictionary.json',
    JSON.stringify(result, null, 2),
    err => {
      if (err) {
        console.error('Lỗi khi ghi file JSON:', err);
      } else {
        console.log('Dữ liệu đã được lưu vào file output.json');
      }
    },
  );
});
