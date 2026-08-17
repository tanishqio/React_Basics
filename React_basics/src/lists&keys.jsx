// what we are doing earlier was like the below code

const todos = [{ title: "eat food", done: "false" },
{ title: "go to gym", done: "true" }
]
function Todoji({title,done}){
    return (<div>
        {title}- {done?"Done":"Not Done"}
        </div>);
}
const todocomponents=todos.map(todo=> <Todoji title={todo.title} done={todo.done}/>)
const Listandkeysapp = () => {
return (
<div>
    reached here
    {todocomponents}
    {/* now among the many props we have passed in todo we will se the error
    which says that each child should have a unique key which uniquely identidfes the element
     */}

     <Todoji key={1} title={"sleep"} done={true}/>
     {/* this above one will not show the errors of key as we have declared it 
     even if we have not used it, so in react whenever we are redering a list we need to pass an key
     which should uniqurly identify that specific todo and the key should be unique
     so the identity should be maintained of a individual content
     
    //  this is a good internview questiona nd also leads to performance issues if not used*/}
</div>
);
}



export default Listandkeysapp