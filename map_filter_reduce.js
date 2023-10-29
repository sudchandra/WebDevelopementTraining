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

//filter

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

