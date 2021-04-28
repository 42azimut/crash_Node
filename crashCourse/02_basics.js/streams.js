const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//   console.log('--------   new Chunk   -------');
//   console.log(chunk);
//   writeStream.write('\n\nNew Chunk\n\n');
//   writeStream.write(chunk);
// });

// piping  --> 위의 코드를 한줄로 간략하게 사용
// 읽을파일.pipe(생성파일);
readStream.pipe(writeStream);
