import { Container, Image, Stack, Placeholder } from "react-bootstrap";
import { useGetComentsQuery } from "../../store/api/posts_api";
import Accordion from "react-bootstrap/Accordion";

function PostItem({ props }) {
  const { data = [] } = useGetComentsQuery(props.id);
  console.log(data);
  return (
    <Container className="mt-2">
      <Image
        height={70}
        rounded
        src="https://w7.pngwing.com/pngs/970/547/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png"
      />
      <div>{props.title}</div>
      <div>{props.body}</div>

      <Accordion
        defaultActiveKey="0"
        data-bs-theme="light"
        style={{ width: "870px" }}
      >
        <Accordion.Item eventKey="1" >
          <Accordion.Header>Coments</Accordion.Header>
          <Accordion.Body>
            {data.map((el) => (
              <Container className="mb-5">
                <Stack>
                  <div className="p-1">{el.email}</div>
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