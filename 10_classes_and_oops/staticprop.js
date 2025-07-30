class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return 123
    }
}

const hitesh= new User("sam")

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone", "i@iphone.com")
console.log(iphone.createId()) //static doesnt allow inheritance child to acces static property of inhertited class

