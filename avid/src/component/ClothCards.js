import { Card, Row, Col } from "react-bootstrap"
import useFetch from "./useFetch"
import Images from "../images/images"
import { Link } from "react-router-dom";

const ClothCards = ({ clothType, size, color, style, language}) => {

    console.log(size);
    console.log(color);
    console.log(style);

    console.log(clothType);
    const { data: clothes, error } = useFetch("http://localhost:8000/cloth", clothType, size, color, style)
    console.log(clothes)
    return (

        <Row>
            {clothes && (clothes.map((cloth) => (
                <Col lg={3} md={4} sm={6} key={cloth.id}>
                    <Card className="border-0" style={{ width: '18rem' }}>
                    <Link to={"/cloth/"+cloth.id}><Card.Img className="mx-auto" variant="top" src={Images.images[cloth.id-1][0].src} /></Link>
                    <Card.Body>
                        <Card.Title>{(language === "en") ? cloth.title : cloth.titleMandarin}</Card.Title>
                        <Card.Text>${cloth.price}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            )))}
        </Row>

        /* <Row>
            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src="https://sb-vue.oss-us-east-1.aliyuncs.com/avid-react/01/01.jpg" /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col> */
            /* <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m2} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m3} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m4} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m5} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m6} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m7} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m8} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>
            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m1} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>
            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m2} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m3} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m4} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m5} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m6} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m7} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col>            <Col lg={3} md={4} sm={6}>
            <Card className="border-0" style={{ width: '18rem' }}>
            <a href=""><Card.Img className="mx-auto" variant="top" src={Images.m8} /></a>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            </Card>
            </Col> */
        // </Row>
    );
}

export default ClothCards