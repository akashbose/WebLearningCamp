var faker=require("faker")
product=[]
 for (let i = 0; i < 10; i++) {
     product[i]={
         name:faker.name.findName(),
         email:faker.internet.email(),
         avatar:faker.internet.avatar(),
        }
        console.log(product[i]);
     }