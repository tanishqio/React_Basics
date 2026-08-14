
function App1() {


  // return <div>Hi there 2</div>;
  // a component can render another component and creating a component is like
  // creating a structure a useable code for our website

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <div className="posts" style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"Tanishq Bhakar"}
              subtitle={"1500 followers"}
              time={"20m ago"}
              imgurl={"https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE"}
              description={"use this referral code to buy this"}
            />

          </div>
          <br />
          <div>
            <PostComponent
              name={"Tanishq Bhakar"}
              subtitle={"prommoted"}
              imgurl={"https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE"}
              description={"use this referral code to buy this"}
            />
          </div>
          <br />
          <div>
            <PostComponent
              name={"Tanishq Bhakar"}
              subtitle={1500}
              time={"20m ago"}
              imgurl={"https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE"}
              description={"use this referral code to buy this"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const style = {
  width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "black", padding: 20
}
// making an post component
function PostComponent({ name, subtitle, time, imgurl, description }) {
  return (
    <div className="main" style={style}>
      <div className="above" style={{ display: "flex" }}>
        <img src={imgurl} style={{
          width: 20, height: 20, borderRadius: 20
        }} />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
  
          { time !==undefined &&<div className="second-subtitle" style={{ display: "flex" }}>
            <div>{time}</div>
            <div><img src="https://imgs.search.brave.com/56CMv46jF2ERcYQbF0EbHcz25AkOfEfy0N8kmkY2-oI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FudmFzY2hhbXAu/aW4vc3RhdGljL2lt/YWdlcy9sYW5kaW5n/cGFnZS93YWxsY2xv/Y2svZWxlZ2FuY2Vf/Y2xvY2suanBn" width={10} height={10} /></div>
          </div>
}          </div>

      </div>

      <div className="below">
        <div style={{ fontSize: 15 }}>
          {description}
        </div>
      </div>
    </div>

  )
}
export default App1
