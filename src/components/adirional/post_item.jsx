import { Container, Image } from "react-bootstrap"

function PostItem({props}){
    return(
        <Container>
            <Image height={70} rounded src="https://w7.pngwing.com/pngs/970/547/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png"/>
            <div>{props.id}</div>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </Container>
    )
}

export default PostItem