import secret from './secret'

const userInfo = {
  "name" : "Chris" ,
  "sex" : "male"
}

export default secret.Encrypt(JSON.stringify(userInfo))