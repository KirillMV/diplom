import { Col, Container, Row, Image } from "react-bootstrap";
import { useGetAllPostsQuery } from "../../store/api/posts_api";
import PostItem from "../adirional/post_item";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/slices/posts_slice";
import PaginationStructure from "../adirional/pagination";

function MainPage() {
  const dispatch = useDispatch();
  const { data = [] } = useGetAllPostsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    dispatch(getAllPosts(data));
  }, [data, dispatch]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  const paginateSelector = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        <Col>
          <Image src="" />
        </Col>
        <Col md="2">Posts</Col>
        <Col md="8">About me</Col>
      </Row>
      <Container>
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
  );
}

export default MainPage;