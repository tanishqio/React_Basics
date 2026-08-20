import { useTodos } from "./hooks/useTodos";
import { setTodocontext } from "./context";
import { useContext } from "react";
type todotype = { title: string, id: string }
export function Todo2() {
    const { todos, settodo } = useTodos();
    // now we have sended the settodo from here to the context api
    // and now i can read that variable in any of its descendant or chidren
    return <setTodocontext.Provider value={{ settodo }}>
         <div>
            {todos.map(t => <Todo title={t.title} id={t.id} />)}
        </div>
        </setTodocontext.Provider>
}

        function Todo({title, id}: todotype) {
    return <div style={{ padding: 20, margin: 10, border: "2px solid black" }}>
            <div>
                
                {title}
            </div>
            <Deletebutton id={id}></Deletebutton>
        </div>
}

function Deletebutton({id}){
    const {settodo}=useContext(setTodocontext);
    return <div onClick={() => {
                settodo(todos => todos.filter(x => x.id != id))
            }}
    style={{background:"red",border:"1px solid black",cursor:"pointer"}}>
Delete
    </div>
}