let Colllage = {
    name: "GEC,PATAN",
    location: "Katpur",
    Code: "022",

    addmission() {
        return `The addmission process is done at Collage level by ${this.name}`
    }
}

let Student = {
    s_name: "xyz",
    branch: "CSE",
    confirm() {
        return `addmission conform by ${this.s_name} in collage ${this.name}`;
    },
    __proto__: Colllage


}
//Student.__proto__=Colllage;

console.log(Student.addmission());
console.log(Student.name);
console.log("Student name is " + Student.name);
console.log(Student.__proto__);
console.log(Colllage.__proto__);
