import { useEffect, useState } from "react";


function Counter({target, suffix=""}){

const [count,setCount]=useState(0);


useEffect(()=>{

let start=0;

const duration=1500;

const increment =
target / (duration/30);


const timer=setInterval(()=>{

start += increment;


if(start >= target){

setCount(target);

clearInterval(timer);

}

else{

setCount(Math.floor(start));

}


},30);



return ()=>clearInterval(timer);


},[target]);



return (

<span>

{count}
{suffix}

</span>

)

}


export default Counter;