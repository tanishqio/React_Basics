import { set } from "zod";

import { useState, useEffect } from "react";

function App4() {
    const [count, setcount] = useState(0);
    function inccnount() {
        console.log("inc count called" + count);
        setcount(count + 1);
    }
    // why the value is permanently using 0 as count ?
    // it happens becz of the dependecny aray and if we ever want to use the state var
    // inside the useeffect then we need to put that state variable in 
    // the dependency array

    // as coutn is not a dependecy and we can use some other way to call set count
    // now where we will be using a function which is taking prev value and then updating it
  function incount2(){
    console.log(count);
    setcount(function(curr){
        return curr+1;
    })
  }

//   the diff bw incount 1 and 2 is taht in 1 the count value is pinned to the 
// original value count as we have not given it as dependency in use effect
// so we will be using this approach



    // setInterval(inccnount,1000);

    // using use effect where the first arg isnthe function and th seoncd 
    // arg is the array and whatvere we code write inside it only
    // runs when the component reders for the first time or mounts
    useEffect(function () {
        console.log("above set interval")
        setInterval(incount2, 1000)
    }, [])
    // if we dont wrap it in useeffect it would run multiple clokcs exponentially
    // which would effect the code heavily

    // so useeffect make sures it only runs one time mounts
    return (
        <div>the value of count is {count}</div>
        

    )
}

export default App4