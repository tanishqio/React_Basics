// exporting custom hooks
// a function is called as custom Hooks:
// 1. it starts with use im the name
// 2. it uses other hooks
// these two above are necessary conditions

// we cannot define a random function which 
// consist of hooks until it is a compponent
// but normal funcion cant have hooks

// all the complicated logic ins now moved into this function
import { useEffect, useState } from "react";
import axios from "axios";
export function useTodos() {
    const [todos, settodo] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                settodo(response.data);
                console.log(response);
            })

        let interval = setInterval(() => {
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                settodo(response.data)
            })
        }, 10 * 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return todos;

}