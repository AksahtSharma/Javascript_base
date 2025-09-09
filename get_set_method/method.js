// getter = when you want value
// setter = when you set a value

class User1{
      constructor(email,pass){
          this.email = email;
          this.pass = pass;
      }
      get pass(){
            return `${this._pass}ATOR`;
      }
      set pass(value){
            this._pass = value;
      }
}

const newUser = new User1 ("akshat@123","08070605");
console.log(newUser.email);
console.log(newUser.pass);
