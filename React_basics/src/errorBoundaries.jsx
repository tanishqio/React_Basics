
function Errorapp(){
return (
    <div>
<Card1/>
<Card2/>
    </div>
)
}

function Card1(){

    // throw new Error("this card is irreveat");
    // only becasue od the above error our whole website get crashed and we 
    // are notable to see anything in it 
    // and why cant we containt the error to this particluar cad only and not the whole website

    // why cant we have a fallback ui for card 1 and that is what error boundaries are used for
    // but we need to use a class basec componenet for this to use by wrapping the 
    // card in errorboundary class component and ebc will take it as a child and fallback if error has happend
    
    
    
    return (<div style={{backgroundColor:"red",padding:"10px",margin:"10px",
        borderRadius:"20px"
    }}>
        hi there
    </div>)
}

function Card2(){
    return (<div style={{backgroundColor:"red",padding:"10px",margin:"10px",
        borderRadius:"20px"
    }}>
        Hello
    </div>)
}

export default Errorapp