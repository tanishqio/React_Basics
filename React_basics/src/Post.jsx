const style = {
  width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "black", padding: 20
}
// making an post component
export function PostComponent({ name, subtitle, time, imgurl, description }) {
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
