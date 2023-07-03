import { Col, Container,Row,Image } from "react-bootstrap";
import { useGetAllPostsQuery } from "../../store/api/posts_api";
import PostItem from "../adirional/post_item";
import { useState } from "react";

function MainPage(){
const {data=[]} = useGetAllPostsQuery()
const [ currentPage, setCurrentPage] = useState(1)


    return(
        <Container>
            <Row>
                <Col>
                <Image src=""/>
                </Col>
                <Col md= '2'>Posts</Col>
                <Col md = '8'>About me</Col>
            </Row>
            <Container>
                {data.map((el)=>(
                    <PostItem key={el.id} props={el}/>
                ))}
            </Container>
        </Container>
    )
}

export default MainPage