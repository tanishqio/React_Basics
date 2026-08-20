import React from "react"
// defining the context
// some where we need to attach the context provider 
// in our case todo2 needs to provide settodos to delete 
// so we need to wrap it
export const setTodocontext=React.createContext({settodo:()=>{}} as{settodo:any});