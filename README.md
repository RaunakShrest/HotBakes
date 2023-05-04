# HotBakes 
HotBakes is an online ecommerce website for ordering the bakery products online. 
User can add the selected items it to his shopping cart.
User can view the products but  needs to register on the site inorder to order the products.
In addition, MONGODB serves as a backend to store bakery products lists data thus, the online bakery shopping project brings an entire bakery shop online, making it easy for both buyer and seller.

The codes are distributed in different branches.
**
**For Form validations : feature/form
**
1) Bcrypt is used for password hashing to install this use: npm i bcrycpt
2) JWT is used for generating web tokens the secret key is not uploaded in github for security reasons so you can generate your own security keys through crypto in terminal.
a) Use npm install jsonwebtoken to install webtoken package of jwt.
b) Use dotenv for linking the secret key from env file.
c) Simply hit node in terminal and use crypto.randomBytes(64).toString('hex'); to generate secret key.
3) Crypto is an inbuilt feature of nodeJS so you don't need to install any packages for it.
