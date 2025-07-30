class User{
    constructor(email,password){
      this.email=email
      this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }
}

const sam= new User("sam@jb.com", "abs")

console.log(sam.email)