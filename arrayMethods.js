const number=[1,2,3,4,4,5]


//map
function double(x)
{
    return x*2;
}

function triple(x)

{
    return x*3
}


const outPutMap=number.map((x) =>

 x.toString(2)
)
console.log(outPut);

// filter

function takeOdd(x)
{
    return x%2!=0
}

function takeEven(x)
{
    return x%2===0
}
const outputFilter=number.filter(takeEven)
console.log(output); 

//reduce

const outputReduce=number.reduce(function(acc,curr)
{
    acc=acc+curr;
    return acc;

},0)
console.log(output);




//find
const birthYear=[1998,1997,2000,2001,1997]
console.log(birthYear)


const result=birthYear.find((ele)=> ele>2000
)
console.log(result)

//here find method will return the first element which satisfy the condition 
 
//includes =>  this method will return the boolean value
const birthYearIncludes=[1998,1997,2000,2001,1997]
const resultIncludes=birthYearIncludes.includes(1999
) 
console.log(result)

//SOME => this method will return true if any of the given element in an array satisfies the given condition

const birthYearSome=[2000,2001,1999,2007,2002];

const outPutSome=birthYearSome.some((x)=>x>2000)
console.log(outPutSome); 