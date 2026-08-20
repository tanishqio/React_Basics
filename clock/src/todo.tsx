// import axios from "axios";
// import { useEffect, useState } from "react";
import {useTodos} from "./hooks/useTodos"
export function Todos() {
    // const [todos, settodo] = useState([]);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/todos")
    //         .then(response => {
    //             settodo(response.data);
    //             console.log(response);
    //         })

    //     let interval = setInterval(()=>{axios.get("https://jsonplaceholder.typicode.com/todos")
    //         .then(response => {
    //             settodo(response.data)
    //         })},10*1000)
    
    //         return()=>{
    //             clearInterval(interval);
    //         }
    //     }, [])


    // now with custom hook
    const todos=useTodos();
    return <div>
        {todos.map(t => <div style={{ padding: 20, margin: 20, border: "1px solid black" }}>
            {t.title}
        </div>)}
    </div>
}