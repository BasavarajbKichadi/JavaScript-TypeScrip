//primitive datatypes
let num=2025;
let val="Hello";
let undefinedvar=undefined;
let nullVar=null;
let booleanval=true;

console.log(typeof num);
console.log(typeof val);
console.log(typeof undefinedvar);
console.log(typeof nullVar);
console.log(typeof booleanval);

//non primitive datatypes

let employeDetails={
    empId:11,
    empName:"Boss",
    adress:{
        state:"New York",
        pincode:560067,
        country:"USA"

    }
}
console.log(employeDetails)
console.log(employeDetails.adress.country)

//arrays

let fruitname=["Mango","Banana","Apple","Orange"];
console.log(fruitname);
console.log(fruitname[3]);

//Date
let currentDate=new Date();
console.log("Current date is "+currentDate.getFullYear());
console.log("Current month is  "+currentDate.getMonth()+1);
console.log("Current Day is "+currentDate.getDay());
console.log("Current hour is "+currentDate.getHours());
console.log("Current time is "+currentDate.getTime());

//map
let empdetails=new Map();
empdetails.set("empname","Boss");
empdetails.set("empId",23);
empdetails.set("state","USA");
console.log(empdetails);
console.log(empdetails.size)

//set

let unique=new Set();
unique.add(20);
unique.add(30);
unique.add(20);

console.log(unique);
console.log(unique.size);

//symbol DataType
let countryOfOrigin=Symbol()

let phone={
phoneName:"Samsung",
price:23444,
[countryOfOrigin]:"South Korea"


}
console.log(phone);