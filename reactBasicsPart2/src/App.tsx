
function App() {
  

  return( <div>
    <h1>LinkedIN</h1>
    <Posts title ={"tanishq"} content={"i am jaat"}/>
    <Posts title ={"saksham"} content={"i am pagal"}/>
    <Posts title ={"sarthka"} content={"i am yadav"}/>
    <Posts title ={"veishab"} content={"i am punjabi"}/>
  </div>)
}

function Posts(props){
  return <div style={{padding:"10px",margin:"10px",border:"1px solid black",backgroundColor:"red", borderRadius:"10px"
  }}>
    <h1>{props.title}</h1>
    {props.content}
  </div>
}

export default App;
