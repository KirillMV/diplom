import { Col, Container, Row, Image, Placeholder } from "react-bootstrap";
import { useGetAllPostsQuery } from "../../store/api/posts_api";
import PostItem from "../aditional/post_item";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../store/slices/posts_slice";
import PaginationStructure from "../aditional/pagination";
import NavMenu from "../aditional/burger_menu";

function MainPage() {
    const dispatch = useDispatch();
    const { data = [] } = useGetAllPostsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [visible,setVisible] = useState(false)
    const postsPerPage = 5;
  
    useEffect(() => {
      dispatch(getAllPosts(data));
    }, [data, dispatch]);
  
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex);
  
    const paginateSelector = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
        <Container className="d-flex flex-row" style={{'min-height':'1150px'}}>
      {visible && <NavMenu/>}
      <Container className="bg-light bg-gradient" style={{'width':'1000px'}}>
        <Row className="py-3 mx-3 " style={{ height: "70px" }}>
          <Col>
            <Image
              height={40}
              src="https://www.turbopersonaltraining.com/wp-content/uploads/2022/10/Hamburger_icon.svg_-2.png"
              onClick={()=>{setVisible(!visible)}}
            />
          </Col>
          <Col md="2">
            <Image src="" />
          </Col>
          <Col md="8">Posts</Col>
        </Row>
        <Container>
          {!data.length && <Placeholder xl={3} />}

          {currentPost.map((el) => (
            <PostItem key={el.id} props={el} />
          ))}
        </Container>
        <PaginationStructure
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginateSelector}
        />
      </Container>
    </Container>
  );
}

export default MainPage;