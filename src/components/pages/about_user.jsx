import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { Container } from "react-bootstrap"
import PostItem from "../aditional/post_item"
import { Button } from "react-bootstrap"


function UserInfo(){
    const navigate = useNavigate()
    const userId = useParams().id
    const allPosts = useSelector((state)=>state.posts.allPosts)
    const thisUserPosts = allPosts.filter((el)=>el.userId.toString() === userId)
    
    return(
        
        <Container style={{'width':'920px'}} className="p-3 mb-2 bg-warning-subtle text-emphasis-warning"> 
        <Button onClick={()=>navigate('/')} variant="outline-warning">Назад</Button>{' '}
            {thisUserPosts.map((post)=>(
                 <PostItem key={post.id} props={post} />
            ))}
        </Container>
    )
}

export default UserInfo