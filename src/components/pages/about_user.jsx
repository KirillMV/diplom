import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { Container } from "react-bootstrap"
import PostItem from "../aditional/post_item"


function UserInfo(){
    const userId = useParams().id
    console.log(typeof(userId))
    const allPosts = useSelector((state)=>state.posts.allPosts)
    console.log(allPosts);
    const thisUserPosts = allPosts.filter((el)=>el.userId.toString() === userId)
    console.log(thisUserPosts);
    return(
        <Container>
            {thisUserPosts.map((post)=>(
                 <PostItem key={post.id} props={post} />
            ))}
        </Container>
    )
}

export default UserInfo