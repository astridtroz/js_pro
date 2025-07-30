class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //super keyword refers to the inherited class and takes this by itself to hold reference
        this.email=email
        this.password=password
    }
}