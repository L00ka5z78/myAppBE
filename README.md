
# Hey there!
This is Backend to an  immortal task list application. 
It is a project I wrote to test my skills in actually connecting backend and fronted.
### Aplication has CRUD operations, where one can add, remove, update, list tasks and single task. 

Also there is a registration form where you have to give some required data. Login form is also built.

## Tech stack used to build this project:
JavaScript, ReactJs, TailwindCSS, MongoDB Compass, Express, NodeJS.

### Some thoughts..
This is actually my very first project written with login/register/logout feature that works. 
It took loads of time, a lot of effort, digging in docs, searching web looking for sollutions,
and watching some videos how it is made. So final result is ok, but it was a real challege for me.

The other thing is, that Im learning hard Typescript, and there is a typescript version on branch
newDevelop. Right now (20.03.23) it has one bug which need to be fixed, and I hope I will do it soon. Check it out:
https://github.com/L00ka5z78/myAppBE/tree/newDevelop

### To run this app you should clone frontend repository:

git clone https://github.com/L00ka5z78/myAppFE

### Clone the backend of this project:

git clone https://github.com/L00ka5z78/myAppBE

### Install all dependencies. To do that, run npm install in PROJECTS DIRECTORY.

## This project uses environment variables and remember to add following to your .env file
PORT
MONGO_URI
JWT_SECRET

Install mongoDB Compass on your device and remember to have mongo running in terminal.
Sometimes there are problems to run mongo, therefor i will give few hints. 
After installing on your device try to run it from terminal in your project. If it will not run,
create a script in package.json file like this: 
"start-mongo": "cd /d **your path to /MongoDb/bin/ && mongod.exe **",

and run the database in the background in your backend.
then run the project in the backend: npm run start.
If everything went right,
you will see messages that server is running and database is connected.

### Short video showing basic features of the project.
In case I will not complete deployment before deadline

https://youtu.be/QcKIlSe7fK0

### Some screenshots



![profil](https://user-images.githubusercontent.com/110019733/222970835-10476025-c3d8-437d-8e22-ce2203441c10.png)




![viewtask](https://user-images.githubusercontent.com/110019733/222970830-6ed0b5e7-b8de-4987-882c-faf4f2621525.png)


### Project structure:

![folderstructure](https://user-images.githubusercontent.com/110019733/222970176-f3baf453-e984-4fd0-8b57-9aff0f2f4391.png)

### Project databes structure if needed:

![dbstructure](https://user-images.githubusercontent.com/110019733/222970237-1126e989-f950-4561-a6db-d21b88ba703f.png)


### Dependenices: 

1. bcrypt - password hashing library for NodeJS
2.cookie-parser - middleware which parses cookies attached to the client request object
3. dotenv - zero-dependency module that loads environment variables from a .env file into process.env 
4. express -  minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
5. express-validator - express.js middleware for validation purposes. 
6. jsonwebtoken - is a proposed Internet standard for creating data with optional signature and/or optional encryption 
7. mongoose -  is a Object Data Modeling (ODM) library for MongoDB
8. nodemon - monitor script for use during development of a Node.js app

Testing application with Postman

![postmancollection](https://user-images.githubusercontent.com/110019733/222971751-dd92305a-b4bc-44b8-a5de-c010285508d3.png)

#### Wow... If you are here, and read all the way down, so maybe you will check my github account with my more or less successfull projects:
https://github.com/L00ka5z78

## LinkedIn   
https://www.linkedin.com/in/%C5%82ukasz-bolach/

## Portfolio website
https://l00ka5z78.github.io/my-portfolio-page/

