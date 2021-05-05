const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log(`MongoDB Connected ${conn.connection.host}`)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// // 몽구스 사용시 노드교과서 버전! 
//   if (process.env.NODE_ENV !== 'production') {
//     mongoose.set('debug', true);
//   }
//   mongoose.connect('mongodb+srv://azimutuniverse:1234@cluster0.20jsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     dbName: 'nodeMong',
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   }, (error) => {
//     if (error) {
//       console.log('몽고 디비 연결 에러', error);
//     } else {
//       console.log('몽고디비 연결 성공');
//     }
//   });
// };
// mongoose.connection.on('error', (error) => {
//   console.error('몽고디비 연결 에러', error);
// });
// mongoose.connection.on('disconnected', () => {
//   console.log('몽고 디비 끊김. 연결 재시도');
//   connect();
// });

module.exports = connectDB;
