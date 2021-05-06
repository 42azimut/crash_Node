## Node.js Crash Course Tutorial

[#2 - node.js Basics](https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2)
  - global object
  - moduels & require
  - file system(creating, reading, deleting etc)
  - streams & buffers

[#3 - Clients & Servers](https://www.youtube.com/watch?v=-HPZ1leCV8k&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=3)
  - ip addresses & domains
  - creating a server
  - localhost & port numbers

## 08 Middleware
  
  1st) request to route '/'
      <in server 2번쨰 미들웨어 거치고 3번째 미들웨어 루트 주소에서 리스폰스>
      2nd) app.use(func);
      3rd) app.get('/', func)
  4th) response
  
## 10 GET, POST, DELETE, PUT Request
- GET requests to get a resource
- POST requests to create new data (eg. a new blog)
- DELETE requests to delete data (eg. delete a blog)
- PUT requests to update data  (eg. update a blog)


=================
# Node.js App From Scratch | Express, MongoDB & Google OAuth
## by Traversy Media 
[Node.js App From Scratch | Express, MongoDB & Google OAuth](https://www.youtube.com/watch?v=SBvmnHTQIPY&list=LL&index=1&t=1515s)

- installing Dependecies 
  - `npm i express dotenv mongoose connect-mongo express-session express-handlebars method-override moment morgan passport passport-google-oauth20`
  - `npm i -D nodemon cross-env`
      ```
      # package.json
        scripts:
          "start" : "cross-env NODE_ENV=production node app",
          "dev" : "cross-env NODE_ENV=development nodemon app"
      ```
      - 개발모드 실행 :  `npm run dev`
      - 배포모드 실행 :  `npm start`

## Cloud MongoDB Connection
- Clusters - connect
- `mongodb+srv://<userAccount>:<password>@cluster0.20jsw.mongodb.net/<DB_NAME>?retryWrites=true&w=majority`


## express-handlebars
```
// app.js
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
```
- 기본레이아웃 및 확장자 설정: views/layouts/main.hbs 

### main.hbs
- {{{body}}}    : 주의! 중괄호 3개  여기에 view에 작성된 컨텐츠가 디스플레이됨


## Index Routes
- `const router = express.Router()`
- app.js 에서 받아 미들웨어 연결! 
- `app.use('/', indexRouter);

## Materialize & Font Awesome
[materialize](https://materializecss.com/getting-started.html)

```
 <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
```
- main.hbs 에 연결
  - `https://cdnjs.com/` 
- font-awesome 검색
  - `https://cdnjs.com/libraries/font-awesome/5.12.0-2`


## Static folder - public
`app.use(express.static(path.join(__dirname, 'public')));`
- 위처럼 public 폴더 설정하면
-  main.hbs 에 스타일css 링크 넣을때 public 안해도 됨! 
- 기본설정으로 css는 public에 있음!
- 이미지, 자바스크립트 파일등 

## Login Layout
- routes/index.js 에서 렌더할 페이지 두번째 인자로 layout 설정
- views/layouts/index.hbs  여기views 레이아웃을 설정!
  ```
    router.get('/', (req, res) => {
      res.render('login', {
        layout: 'login'
      });
  ```

## Start Google Login APIs
- APIs & Services (사용자 동의 해야함)
- 구글+ API - create credential
-   OAuth 클라이언트 Id 만들기 
  - 애플 유형 : 웹 애플
  - 이름 : 웹 클라이언트
  - 승인된 리디렉션 URI : http:// .../auth/google/callback

## Passport Intro
- [passport strategies](http://www.passportjs.org/packages/)
- passport-google-oauth20
- 유저 정보를 디비에 저장하는 콜백 함수
```
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err,   user) {
      return cb(err, user);  
    });
  }
));

```

## User model
- function(passport) ....

## Passport Google Strategy
```
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
```

## Auth Routes
- /routes/auth.js
```
// @desc  Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: [ 'profile' ] }));

// @desc  Google auth callback
// @route GET /auth/google/callback
router.get(
  '/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), 
  (req, res) => {
  res.redirect('/dashboard')
});

```
