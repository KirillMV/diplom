import { useState } from "react"
import NavMenu from "../aditional/burger_menu"
import { Container,Col,Image,Row } from "react-bootstrap"
import iam from '../../assets/img/iam.jpg'
function AboutMe(){
const [visible,setVisible] = useState(false)

    return(

        <Container className="d-flex flex-row" style={{'min-height':'1000px'}}>
        {visible && <NavMenu/>}
        <Container className="p-3 mb-2 bg-body-secondary" style={{'width':'1000px'}}>
          <Row className="py-3 mx-3 " style={{ 'height': "70px" }}>
            <Col>
              <Image
                height={40}
                src="https://www.turbopersonaltraining.com/wp-content/uploads/2022/10/Hamburger_icon.svg_-2.png"
                onClick={()=>{setVisible(!visible)}}
              />
            </Col>
            <Col md="2">
              <Image height={700} src={iam}/>
            </Col>

            <Col><div>
           
        </div></Col>
          </Row> <div className="mt-5 mr-5"  >Привет меня зовут Кирилл и я очень классный</div>
          </Container>
        </Container>
        
    )
}

export default AboutMe