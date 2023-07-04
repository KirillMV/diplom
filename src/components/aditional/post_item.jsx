import { Container, Image, Stack } from "react-bootstrap";
import { useGetComentsQuery } from "../../store/api/posts_api";
import Accordion from "react-bootstrap/Accordion";

function PostItem({ props }) {
  const { data = [] } = useGetComentsQuery(props.id);
  console.log(data);
  return (
    <Container data-bs-theme='dark'>
      <Image

        height={70}
        rounded
        src="https://w7.pngwing.com/pngs/970/547/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png"
      />
      <div>{props.title}</div>
      <div>{props.body}</div>

      <Accordion defaultActiveKey="0" data-bs-theme='light'>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Coments</Accordion.Header>
          <Accordion.Body>
            {data.map((el) => (
              <Container>
                <Stack gap={3}>
                  <div className="p-1">{el.email}</div>
                  <div className="p-1">{el.name}</div>
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