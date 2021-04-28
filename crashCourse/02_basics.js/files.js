const fs = require('fs');


/***********************************************************************  
 * reading files
 * - data 만 가져오면 버퍼 형태
 * - 따라서 toString()으로 변환
*************************************************************************/
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log('last line');  // 여기 라인이 위보다 먼저 나온다. 비동기. 

/***********************************************************************  
 * writing files
*************************************************************************/
fs.writeFile('./docs/blog1.txt',  'hello, world~', () => {
  console.log('file was written');
})

fs.writeFile('./docs/blog2.txt',  'hello, world~', () => {
  console.log('file was written');
})

/***********************************************************************  
 * directories files
*************************************************************************/
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if(err) {
    console.log(err);
    }
    console.log('folder deleted');
  })
}

/***********************************************************************  
 * deleting files
*************************************************************************/
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}

