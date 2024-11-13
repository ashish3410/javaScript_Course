// class User{
//     constructor(email,password){
//         this.email=email
//         this.password=password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email=value
//     }

//     get password(){
//         return `${this._password}ashish`
//     }
//     set password(value){
//         this._password=value
//     }
// }

// const ash= new User('a@ash.com','444357')

// console.log(ash.password)



//behind the sence

function User(email,password){
    this._password=password
    this._email=email

    Object.defineProperty(this,'email',{
        get: function email(){
            return this._email.toUpperCase()
        },
        set: function email(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function password(){
            return this._password.toUpperCase()
        },
        set: function password(value){
            this._password=value
        }
    })
}
const ash= new User("a@ash.om","hdw9ge")
console.log(ash.password)