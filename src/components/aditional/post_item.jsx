import { Container, Image, Stack, Placeholder } from "react-bootstrap";
import { useGetComentsQuery } from "../../store/api/posts_api";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function PostItem({ props }) {
  const navigate = useNavigate()
  const { data = [] } = useGetComentsQuery(props.id);
  console.log(data);
  return (
    <Container className="mt-2" >
      <Image
      onClick={()=> navigate(`./user_info/${props.id}`)}
        height={70}
        rounded
        src="https://w7.pngwing.com/pngs/970/547/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png"
      />
      <div className="text-uppercase fw-bold">{props.title}</div>
      <div className="lh-sm user-select-auto mt-3 mb-3 " style={{ width: "870px" }}>{props.body}</div>

      <Accordion
      
        defaultActiveKey="0"
        data-bs-theme="light"
        style={{ width: "870px" }}
      >
        <Accordion.Item eventKey="1" >
          <Accordion.Header>Coments</Accordion.Header>
          <Accordion.Body className="p-3 mb-2 bg-info text-dark bg-opacity-50 ">
            {data.map((el) => (
              <Container key={el.id} className="mb-5">
                <Stack>
                  <div className="p-4 text-uppercase text-danger">{el.email}</div>
                  <div className="p-2">{el.body}</div>
                </Stack>
              </Container>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default PostItem;
