/*this is for hasOwnProperty chek the use of it iss it return true if 
properrty present in object other wisereturn false */

let user = [1, 1, 2, 12, 13, 13]; //array
console.log(user.constructor);

//object
let company = {
    name: "info pvt.ltd",
    type: "it"
}
console.log(company.hasOwnProperty("type"));



//the  prototype chain 

let student = {
    id: 1
}

let tution = {
    id: 2
}

let school = {
    id: 3
}

student.__proto__ = school; //level1 inheritance
student.__proto__.__proto__ = tution; //level2 inheritance

console.log(student.id);
console.log(student.__proto__.id);
//console.log(student.__proto__.__proto__.id);


let baseUser = {
    read: true,
    job: "",
    showreaddetails: function () {
        console.log(baseUser.read);
    },
    //setter method to set details of job

    set details(value) {
        this.job = value;
    },
    get details() {
        return `${this.job}`;
    }

}

let subUser = {
    write: true
}

subUser.__proto__ = baseUser;
subUser.showreaddetails();
subUser.details = "web developer"


console.log(subUser.details);