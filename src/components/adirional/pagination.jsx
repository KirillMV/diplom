import { Pagination } from "react-bootstrap";

function PaginationStructure({ postsPerPage, totalPosts,paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(<Pagination.Item onClick={()=>paginate(i)} key={i}>{i}</Pagination.Item>);
  }
  return (
    <div>
      <Pagination>{pageNumbers}</Pagination>
    </div>
  );
}

export default PaginationStructure;
