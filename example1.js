let company = {
    name: "xyz pvt. ltd.",
    location: "ahemdabad",
    hire: function () {
        console.log("You are hired");
    }
}

let intern = Object.create(company, { experiance: { value: 2 }, })

console.log(intern);