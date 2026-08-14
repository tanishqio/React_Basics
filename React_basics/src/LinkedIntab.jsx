import { useEffect, useState } from "react"
function Tab(){
const [currenttab,setcurrenttab]=useState("feed");

// we will be using useeffect for sending the request to the backenf
// for getting the data of that tab and then
useEffect(()=>{
    console.log("send a request to the abckend for "+currenttab)
},[currenttab]);


return <div>
    <button onClick={()=>{setcurrenttab("feed")}} 
    style={{color:currenttab=="feed"?"red":"black"}}>Feed</button>
    <button onClick={()=>{setcurrenttab("Notification")}} 
    style={{color:currenttab=="Notification"?"red":"black"}}>Notification</button>
    <button 
    onClick={()=>{setcurrenttab("Messages")}} style={{color:currenttab=="Messages"?"red":"black"}}>Messages</button>
    <button onClick={()=>{setcurrenttab("Jobs")}} 
    style={{color:currenttab=="Jobs"?"red":"black"}}>Jobs</button>

</div>
}
export default Tab