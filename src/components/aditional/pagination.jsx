import { Container, Pagination } from "react-bootstrap";

function PaginationStructure({ postsPerPage, totalPosts,paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(<Pagination.Item onClick={()=>paginate(i)} key={i}>{i}</Pagination.Item>);
  }
  return (
    <Container  className='mx-5'>
      <Pagination>{pageNumbers}</Pagination>
    </Container>
  );
}

export default PaginationStructure;
