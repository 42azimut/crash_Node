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


[connect your application ]<img src="https://github.com/42azimut/node_Study/nodeZScratch/imgREADME/connect.png" width="300px">

  
