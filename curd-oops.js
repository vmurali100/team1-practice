class CRUD {
    constructor() {
        this.getAllusers = function () {
            console.log("Hello from New CRUD ")
        }
        this.displayAllusers = function () { }
    }
}

// this is called Instance
var newCrud = new CRUD()

var person = new CRUD()

CRUD.prototype.editUser = function () {
    console.log("Hello from Prototype")
}
CRUD.prototype.students = ["Murali", "Leela"]
CRUD.prototype.deleteUser = function () {
    console.log("Hello from Delete User")
}

console.log(newCrud)

newCrud.getAllusers()
newCrud.editUser()