
//Create custom type of Employee
type Employee = {
    fullName:[firstname:string,lastName:string],
    age: number,
    department: string, 
    skills:string[], 
    isActive:boolean
};

let employee2 : Employee = {
    fullName: ["John","Doe"],
    age: 30,
    department: "Engineering",
    skills:["Javascript", "Python", "C++"],
    isActive: true
};

let employee3 : Employee = {
    fullName: ["Jane","Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO","Social Media", "Content Creation"],
    isActive: false
};

function logEmployee2(employee2 :Employee) : void {
    
    console.log("---Employee Details---");
    console.log(`Name: ${employee2.fullName[0]} ${employee2.fullName[1]}`);

    
    console.log(`Age: ${employee2.age}`);
    console.log(`Department: ${employee2.department}`);
   
    console.log(`Skills: ${employee2.skills.join(", ")}`);

    if(employee2.isActive === true){
        console.log(`Active: Yes`);
    }
    else{
        console.log(`Active: No`);
    }
    console.log(`----------------------------------`);
};

logEmployee2(employee2);
