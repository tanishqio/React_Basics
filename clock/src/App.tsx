import { useRef, useState } from 'react'

function App() {
  // const [intervalid, setintervalid] = useState(0);
  // a better way to do this is with useref where no render happens on chage of value
  const intervalid=useRef(0);
  function startclock() {
    intervalid.current = setInterval(() => {
      // this is the second way to call the set function,
      // for some reason usecallbacks and meme it was introduced
      // earlier in 16,17 it was simple 

      // set can alwas take two types of arg:
      // 1. the final value
      // 2. pass in the function which will get the current value of 
      // the seconds and then we can change it

      setseconds(seconds => seconds + 1);
      // // same thing up and down both works
      //       setseconds(function (s) {
      //         return s + 1;
      //       })
    }, 1000)
    console.log(intervalid);
  
  }
  function stopclock() {
    console.log(intervalid);

    clearInterval(intervalid.current);
    intervalid.current=0;
  }
  // there is no re redner on start and stop beacuse we are 
  // becauses awe are settingthis var on ref and updating
  // the value of a ref and not upaating the value od the state variable
  // and acc to use ref there os no re render on change

  const [seconds, setseconds] = useState(0);

  return <div style={{
    display: "flex",
    justifyContent: "center", alignItems: "center",
    width: "100vw", height: "100vh"
  }}>
    <div style={{ fontSize: "50px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={startclock}>Start Clock</button>
        <button onClick={stopclock}>Stop Clock</button>
      </div>
      <div>
        {seconds} s
      </div>
    </div>
  </div>
}
export default App
