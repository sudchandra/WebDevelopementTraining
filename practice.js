
//reduce method

// const numbers=[5,4,3,9,2]
// const output=numbers.reduce(function(acc,curr)
// {
//     if(acc>curr)
//     {
//       return acc
//     }
//     else
//     return curr

// },numbers[0])
// console.log(output);


//find methods

// const numberValues=[5,4,3,9,2]

// let result=numberValues.find(Element=> Element>4)
// console.log(result)

//some 

// let marks=[88,99,100,96,87,90]
// const outPut=marks.some(ele =>
//     {
//         return ele>99
//     })
//     console.log(outPut);


//call method


// let details=
// {
//     firstName : "sudarshan",
//     lastName : "chandra",

// }

// let printFullname= function(score,status)
//     {
//         console.log(this.firstName + this.lastName + " scored" + score + "status is"+ status)
//     }

// let marksSheet= {
//     firstName : "java",
//     lastName : "script",
//     status :"pass"
    
// }
// printFullname.apply(marksSheet,[89,"pass"]);



//bind method

// let printMyname=printFullname.bind(marksSheet,90,"pass")
// console.log(printMyname);
// printMyname();

//cuuryying

// let multiply=function(x,y)
//  {
//     console.log(x*y)
//  }
//  let multiplyByTwo=multiply.bind(this,2);
//  multiplyByTwo(5);

//  let multiplyByThree=multiply.bind(this,)
//  multiplyByThree(6,8);

let person=function(name,gender,birthYear )
{
   this.name=name;
   this.gender=gender;
   this.birthYear=birthYear;   
   
}

person.prototype.calcAge=function()
{
   let currAge=new Date().getFullYear()-this.birthYear;
      console.log(currAge);
}

const sud=new person("sudarsan","male",2001);
sud.calcAge();
console.log(sud)

