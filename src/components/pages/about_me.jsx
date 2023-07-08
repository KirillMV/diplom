import { useState } from "react"
import NavMenu from "../aditional/burger_menu"
import { Container,Col,Image,Row } from "react-bootstrap"

function AboutMe(){
const [visible,setVisible] = useState(false)

    return(

        <Container className="d-flex flex-row" style={{'min-height':'1000px'}}>
        {visible && <NavMenu/>}
        <Container className="bg-light bg-gradient" style={{'width':'1000px'}}>
          <Row className="py-3 mx-3 " style={{ 'height': "70px" }}>
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
            <Col md="8"><div>
            Я килилл и мне тлидцать 7
        </div></Col>
          </Row>
          </Container>
        </Container>
        
    )
}

export default AboutMe