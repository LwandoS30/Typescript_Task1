"use strict";
//Object creation of first employee
let employee2 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Enginnering",
    skills: ["Javascript", "Python", "C++"],
    isActive: true
};
//Object creation of second employee
let employee3 = {
    fullName: ["Jane", "Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false
};
//function creation
function logEmployee(employee3) {
    console.log("---Employee Details---");
    for (let a = 0; a < employee3.fullName.length - 1; a++) {
        if ((employee3.fullName[a]) === ",") {
            console.log(`Name: ${employee3.fullName}`);
        }
        console.log(`Name: ${employee3.fullName}`);
    }
    console.log(`Age: ${employee3.age}`);
    console.log(`Department: ${employee3.department}`);
    console.log(`Skills: ${employee3.skills}`);
    console.log(`Active: ${employee3.isActive}`);
    console.log(`-----------------------------`);
}
;
//function call
logEmployee(employee3);
