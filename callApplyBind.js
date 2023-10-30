
let obj1={
    firstName:"sudarshan",
    lastName:"chandra",
    printFullName:function() {
        console.log(this.firstName+ " "+ this.lastName);
    }
}
obj1.printFullName();

let obj2={

    firstName:"java",
    lastName:"script",

}
obj1.printFullName.call(obj2);
//  function borrowing =>from which object we are borrowing the function and to which object THIS should refer
   
//second approach


let objorg={
    firstName:"sudarshan",
    lastName:"chandra",

}

//here printfull name is the commom function and we are
  let printFullName= function(homeTown,state) {
        console.log(this.firstName+ "  "+ this.lastName+ " from " +homeTown + " ," +state);
    }
// printFullName.call(obj1,"coorg","karnataka")
printFullName.apply(obj1,["coorg","karnataka"])
//apply we can pass the parameters as a list
 


let objCopy={

    firstName:"java",
    lastName:"script",

}
obj1.printFullName.call(obj2);

// bind method
 let printMyname=printFullName.bind(obj1,"coorg","karnataka")
 
 printMyname();
  

 //currying

 let multiply=function(x,y)
 {
    console.log(x*y)
 }
 let multiplyByTwo=multiply.bind(this,2);
 multiplyByTwo(5);

 let multiplyByThree=multiply.bind(this,5,6)
 multiplyByThree();
//here we can pass the second arugument intentionally or else we can we can pass two arguments while invoking


