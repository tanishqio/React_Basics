import { useTodos } from "./hooks/useTodos";
type todotype={title: string, id: string,settodo:any }
export function Todo2() {
    const {todos, settodo}= useTodos();
    return <div>
        {todos.map(t => <Todo title={t.title} id={t.id} settodo={settodo}/>)}
    </div>
}

function Todo({ title, id ,settodo}: todotype) {
    return <div style={{ padding: 20, margin: 10, border: "2px solid black" }}>
        <div>
            {title}
        </div>
        <button onClick={() => {
            settodo(todos => todos.filter(x => x.id != id))
        }}>Delete</button>
    </div>
}