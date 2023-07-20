# HotBakes

Technology Stacks
- [x]Next JS
- [x]React Hooks 
- [x]React Props
- [x]React icons
- [x]NextJS router
- [x]Formik and Yup validation
- [x]React Redux
- [x]Persist
- [x]UI libraries- Ant Design
- [x]Tailwind css
- [x]Mongo DB
- [x]Express
- [x]Node JS
- [x]Rest Api
- [x]Middlewares
- [x]Multer for file upload features
- [x]Pagination
- [x]Cors



For form validation notes:
1) Bcrypt is used for password hashing to install this use: npm i bcrycpt
2) JWT is used for generating web tokens the secret key is not uploaded in github for security reasons so you can generate your own security keys through crypto in terminal.
3) Use npm install jsonwebtoken to install webtoken package of jwt.
4) Use dotenv for linking the secret key from env file.
5) Simply hit node in terminal and use crypto.randomBytes(64).toString('hex'); to generate secret key.
6) Crypto is an inbuilt feature of nodeJS so you don't need to install any packages for it.

Features
Auth
- [ ] Login 
    - [x] frontend form validation
    - [x] backend validation
    - [x] password hash from bcrypt
    - [x] Admin login check
    - [x] User login check
- [ ] Register
    - [x] password hash from bcrypt
    - [x] added web tokens
- [ ] Change Password

- [ ] Admin panel
    - [x] password hash from bcrypt
    - [x] added web tokens
    - [x] accessed from login dashboard

 - [x] Admin Dashboard
        -[x]  Only accessed after being logged in as admin
        -[x]  Delete the products function

- [x] Added Tokens

- [ ] User Homepage
    -[x] View Products
    -[x] View product details
    -[x] Add to cart
    -[x] View cart items
    -[x] View overall totals
    

