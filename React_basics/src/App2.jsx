import { useState } from "react";

// each one of these are diff togglemessage and have their own state variables
function App2() {
    return (<div style={{ backgroundColor: "gray", height: "100vh" }}>
        {/* <ToggleMessage />
        <ToggleMessage />
        <ToggleMessage /> */}
        < NotificationInc/>



    </div>)

}
// we are using this toggle function and all the logic is also correct
// but still it is not rendering as the component isnt re-rendering
// because we havent used a state variable

//in react , react will handle all domm updates for u but when we are
//using  a dynamic variable or conditiinal logiv make sure u are using state variablee
// react says i am not tracking every single variable u have used, i am only
// tracking state variable 

const ToggleMessage = () => {
    // let isVisible=true;
    // react says the variable u are defining , deifne it as a state variable
    // as it will not be tracking every variable but it tracks the state variable
    let [isVisible, setIsVisible] = useState(true);
    // now whenever this variable the react re rendets the component
    // as it is rechecks that is has changed or note
    // function Toggle() {
    //     isVisible = !isVisible;
    // }
    //this how we update the state variable and not using the above function
    // we should always change or update state variables by callint the second function
    // we are caclling useState with true and it returns an array
    // [true,function] which has 2 elements
    // here we are destrucutring that array, that way it becomes 2 things
    // an actual state variable and fucntion use to change the variable
    // and then we are using the se two things to change the state where the first is the bariavle
    // and the second is the function

    // when we click toggle message thereact realized something has hapeend and it re rendered
    console.log("re-render");
    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toogle message
            </button>
            {isVisible && <p>this message is conditionally resnered</p>}
        </div>
    )
}


const NotificationInc = () => {
    let [notificationcount, incnotification] = useState(0);
    function increment() {
        incnotification(notificationcount + 1);
    }
    return (
        <div>
            hi there
            <button onClick={increment}>
                Inc Count</button>
            {notificationcount}
        </div>

        // this notification count is a state var it is contained inside the component
        // and if i rneder it mutiple times we can use it independently
    )

}

export default App2