import { useEffect, useState } from "react"

function Cleanup() {
    const [showtimer, setshowtimer] = useState(true);
    useEffect(()=>{const id=setInterval(() => {
        setshowtimer(value=>!value);
    }, 5000);
 return ()=>clearInterval(id);}, []);
   
    return ( <div>
        {showtimer && <Timer />}
    </div>);

}


const Timer = () => {
    const [seconds, setseconds] = useState(0);
    useEffect(() => {
        let clock = setInterval(() => { setseconds(prev => prev + 1) }, 1000);

        return () => {
            clearInterval(clock);
        };

    }, []);
    console.log(seconds);

    return (<div>{seconds} seconds</div>);
}

export default Cleanup