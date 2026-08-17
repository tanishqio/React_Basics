// we will be taking somethhing as chilren in this fucntion which will i render
// inside this card and this card is a generic wrapper component


// function Childrenapp() {
//     return <div style={{ display: "flex" }}>
//         <Card innercontent={"hi there"} />
//         <Card innercontent={<div style={{
//             backgroundColor: "Green"}}>
//                 hello tanishq, what do u wnat to post?
//                 <br /> <br />
//                 <input type="text" />
//             </div>}/>
//         </div>
//         }
// created a card where i have added all the styles and have made a generic card component
// and all the innercontent have been wrapped inside this card. so i can use
// it multille times for different data 

// and now we can use a children prop for doing this

// method 1

//             function Card({innercontent}){
//     return <div style={{ backgroundColor: "yellow", borderRadius: "20px", padding: "10px", margin: "10px" }}>

//             {innercontent}

//         </div>
// }


// mehtiod 2

function Childrenapp() {
    return <div style={{ display: "flex" }}>
        <Card>
            <div style={{
                backgroundColor: "Green"
            }}>
                hello tanishq, what do u wnat to post?
                <br /> <br />
                <input type="text" />
            </div> </Card>
    </div>
}

// use children here and then in the main app and the children prop will automatically becomes all of the content
// we have wriitne inside the card tag and it is same as doing with method 1 
// and this methid using children is much more easier and readable
function Card({ children }) {
    return <div style={{ backgroundColor: "yellow", borderRadius: "20px", padding: "10px", margin: "10px" }}>
upper topar
        {children}
lower bottom footer
    </div>
}



export default Childrenapp