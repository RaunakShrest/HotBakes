# HotBakes

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
    - [ ] password hash from bcrypt
- [ ] Register
    - [x] password hash from bcrypt
    - [x] added web tokens
- [ ] Change Password


- [x] Added Tokens

