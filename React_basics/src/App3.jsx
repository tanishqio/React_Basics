import { describe } from "zod/v4/core"
import { PostComponent } from "./Post"
import { useState } from "react"
function App3() {
    // until we call setposts the app component will not re render the react will not understand the posts ahs changed
    // const Posts = [{
    //     name: "Tanishq",
    //     subtitle: "1500 followers",
    //     time: "2m ago",
    //     iamge: "https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE",
    //     description: "use this referral code to buy this"
    // }]

    const [Posts, setposts] = useState([]);


    // now we will be using an array and not writing statically about posts
    // which will contain the posts data

    // and now i have to use a for loop which iterates all over the posts array and render it ont he screen

    const postComponents = Posts.map(post => <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        time={post.time}
        imgurl={post.iamge}
        description={post.description}
    />)
    // we are makinga n array of objects and then converting it to the map of postcomponents 
    // and using it to display the posts 

    function addpost() {
        setposts([...Posts, {
            name: "Tanishq",
            subtitle: "1500 followers",
            time: "2m ago",
            iamge: "https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE",
            description: "use this referral code to buy this"
        }])
    }

    return (
        <div style={{ backgroundColor: "black", height: "100vh" }}>

            <button onClick={addpost}>Add Post</button>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    {/* if we put them two post componetns in an array and then render it will be done the smae things as 
using them differently */}

                    {/* {[ <PostComponent
                        name={"Tanishq Bhakar"}
                        subtitle={"1500 followers"}
                        time={"20m ago"}
                        imgurl={"https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE"}
                        description={"use this referral code to buy this"}
                    />,<PostComponent
                        name={"Tanishq Bhakar"}
                        subtitle={"1500 followers"}
                        time={"20m ago"}
                        imgurl={"https://media.licdn.com/dms/image/v2/D4E35AQHqq7uXUwqXZQ/profile-framedphoto-shrink_400_400/B4EZ6T0jiuK0AU-/0/1780596489070?e=1784106000&v=beta&t=ny6rGlqrUhs8Ya7qVguQoVUUZf3XkZbT6q04UDCC7uE"}
                        description={"use this referral code to buy this"}
                    />]} */}
                    {postComponents}

                    {/* now we have to convert the posts to these post components we will be usng map */}
                </div>
            </div>

        </div>
    )
}

export default App3