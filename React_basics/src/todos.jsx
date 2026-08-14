import { useState, useEffect } from "react";

function todo() {

    const [currenttodo,setTodo]=useState(1);
    const [tabdata,settabdata]=useState({});
    const [loading,setloading]=useState(true);

useEffect(()=>{
    setloading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/'+currenttodo).then(async res=>{
        const json=await res.json();
        settabdata(json);
        setloading(false);
    })
},[currenttodo])


return <div>
    <button onClick={()=>{setTodo(1)}} 
    style={{color:currenttodo==1?"red":"black"}}
    >Todo #1</button>
     <button onClick={()=>{setTodo(2)}} 
    style={{color:currenttodo==2?"red":"black"}}
    >Todo #2</button>
     <button onClick={()=>{setTodo(3)}} 
    style={{color:currenttodo==3?"red":"black"}}
    >Todo #3</button>
     <button onClick={()=>{setTodo(4)}} 
    style={{color:currenttodo==4?"red":"black"}}
    >Todo #4</button>


    <div>
        {loading==false?tabdata.title:"Loading....."}</div>
</div>
}
export default todo