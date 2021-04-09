import { useParams } from "react-router"
import { Col, Container, Image, Row, Carousel, Form, Button, Alert} from 'react-bootstrap'
import DetailFetch from "./DetailFetch";
import Images from '../images/images'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'



const ClothDetails = (props) => {
    let { id } = useParams();

    const { data: cloth, error } = DetailFetch("http://localhost:8000/cloth", id);
    console.log(cloth);
    console.log(Images);

    const [colorNum, setColorNum] = useState(0);
    const [size, setSize] = useState("");
    const [clothColor, setClothColor] = useState(0);
    const [sizeS, setSizeS] = useState(true);
    const [sizeM, setSizeM] = useState(true);
    const [sizeL, setSizeL] = useState(true);
    const [sizeXL, setSizeXL] = useState(true);
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);
    console.log(colorNum)


    const handleClick1 = (e) => {
        setColorNum(0);
        setClothColor(0);
    }
    const handleClick2 = (e) => {
        setColorNum(2);
        setClothColor(2);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let bag = {"clothId": id, "clothColor": clothColor, "clothSize": size, "clothName": cloth[0].title, "clothNameMandarin": cloth[0].titleMandarin, "clothPrice": cloth[0].price}
        // props.setBags([...props.bags, bag])
        fetch('http://localhost:8000/bags', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bag)
        }).then(() => {
            console.log("new bag added");
            setShow(true);
        })
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setSize(e.target.value);
    }

    
    useEffect(() => {
        if(cloth!==null){
            if(cloth[0].size.indexOf('S') >= 0){
                setSizeS(false);
            }
            if(cloth[0].size.indexOf('M') >= 0){
                setSizeM(false);
            }
            if(cloth[0].size.indexOf('L') >= 0){
                setSizeL(false);
            }
            if(cloth[0].size.indexOf('XL') >= 0){
                setSizeXL(false);
            }
            setTitle(cloth[0].title)
        }
    });



    return (
        <div>
        <Container>

        <Row>
            <Col md={12} lg={8}>
            <Carousel>
                <Carousel.Item>
                    <Image
                    className="d-block w-100"
                    src={Images.images[id-1][colorNum].src}
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3 className="black">{cloth[0].title}</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    className="d-block w-100"
                    src={Images.images[id-1][colorNum+1].src}
                    alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                    <h3 className="black">{cloth[0].title}</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                </Carousel>
            </Col>
            <Col className="description" md={12} lg={4}>
                <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                    This is a alert—check it out!
                </Alert>
                <p className="clothTitle"><strong>{ cloth && ((props.language === "en") ? cloth[0].title : cloth[0].titleMandarin)}</strong></p>
                <p>${cloth && cloth[0].price}</p>
                <Row>
                <Link onClick={handleClick1}><Image className="imgButton" src={Images.images[id-1][0].src}></Image></Link>
                <Link onClick={handleClick2}><Image className="imgButton" src={Images.images[id-1][2].src}></Image></Link>
                </Row>
                <Form className="detail-form" onSubmit={handleSubmit}>
                    <div key={`custom-inline-radio`} className="mb-3">
                    <Form.Check
                        custom
                        inline
                        disabled={sizeS}
                        label="S"
                        value="S"
                        name="size"
                        type="radio"
                        id={`custom-inline-1`}
                        onChange={onValueChange}
                    />
                    <Form.Check
                        custom
                        inline
                        disabled={sizeM}
                        label="M"
                        value="M"
                        name="size"
                        type="radio"
                        id={`custom-inline-2`}
                        onChange={onValueChange}
                    />
                    <Form.Check
                        custom
                        inline
                        disabled={sizeL}
                        label="L"
                        value="L"
                        name="size"
                        type="radio"
                        id={`custom-inline-3`}
                        onChange={onValueChange}
                    />
                    <Form.Check
                        custom
                        inline
                        disabled={sizeXL}
                        label="XL"
                        value="XL"
                        name="size"
                        type="radio"
                        id={`custom-inline-4`}
                        onChange={onValueChange}
                    />
                    </div>
                    <Button variant="secondary" size="lg" block type="submit">
                        {(props.language === "en") ? "ADD TO BAG" : "加入购物车"}
                    </Button>
                </Form>
            </Col>
        </Row>




        {/* <Row>
            <Col>
                <Image className="detailImg" src={Images.images[id-1][colorNum].src}></Image>
            </Col>
            <Col>
                <p className="clothTitle"><strong>{cloth && cloth[0].title}</strong></p>
                <Row>
                <Link onClick={handleClick1}><Image className="imgButton" src={Images.images[id-1][0].src}></Image></Link>
                <Link onClick={handleClick2}><Image className="imgButton" src={Images.images[id-1][2].src}></Image></Link>
                </Row>
            </Col>
        </Row>
        <Row>
        <Image className="detailImg" src={Images.images[id-1][colorNum+1].src}></Image>
        </Row> */}
        </Container>    
        </div>
    )

}


export default ClothDetails