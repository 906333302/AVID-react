import { Col, Container, Form, Row, Button } from "react-bootstrap"
// import ClothCards from "./ClothCards"
// import { useState } from 'react'

const SearchForm = (props) => {

    // const [size, setSize] = useState("S");
    // const [color, setColor] = useState("WHITE");
    // const [style, setStyle] = useState("OUTERWEAR");

    // const handleSizeSelect = (e) => {
    //     props.setSize(e.target.value);
    // }
    // const handleColorSelect = (e) => {
    //     props.setColor(e.target.value);
    // }
    // const handleStyleSelect = (e) => {
    //     props.setStyle(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSize(e.target[0].value);
        props.setColor(e.target[1].value);
        props.setStyle(e.target[2].value);
    }

    const handleClick = (e) => {
        props.setSize("");
        props.setColor("");
        props.setStyle("");
    }


    return (
        <div>
        <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Row>
                    <Col>
                    <Form.Label>{(props.language === "en") ? "SIZE" : "尺码"}</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </Form.Control>
                    </Col>
                    <Col>
                    <Form.Label>{(props.language === "en") ? "COLOUR" : "颜色"}</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option value="WHITE">{(props.language === "en") ? "WHITE" : "白色"}</option>
                        <option value="BLACK">{(props.language === "en") ? "BLACK" : "黑色"}</option>
                        <option value="PINK">{(props.language === "en") ? "PINK" : "粉色"}</option>
                        <option value="GREEN">{(props.language === "en") ? "GREEN" : "绿色"}</option>
                        <option value="GRAY">{(props.language === "en") ? "GRAY" : "灰色"}</option>
                        <option value="ORANGE">{(props.language === "en") ? "ORANGE" : "橙色"}</option>
                        <option value="MULTICOLOR">{(props.language === "en") ? "MULTICOLOR" : "多种颜色"}</option>
                    </Form.Control>
                    </Col>
                    <Col>
                    <Form.Label>{(props.language === "en") ? "STYLE" : "款式"}</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option value="OUTWERWEAR">{(props.language === "en") ? "OUTERWEAR" : "外套"}</option>
                        <option value="TEES">{(props.language === "en") ? "TEES" : "T恤"}</option>
                        <option value="SWEETS">{(props.language === "en") ? "SWEETS" : "卫衣"}</option>
                        <option value="BOTTOMS">{(props.language === "en") ? "BOTTOMS" : "裤子"}</option>
                        <option value="SOCKS">{(props.language === "en") ? "SOCKS" : "袜子"}</option>
                    </Form.Control>
                    </Col>
                    <Col>
                    <Button className="formButton" variant="secondary" type="submit">GO</Button>
                    <Button className="formButton" variant="secondary" onClick={handleClick}>RESET</Button>
                    </Col>
                </Row>
            </Form.Group>
            </Form>
        </Container>
        {/* <ClothCards clothType={clothType} size={size} color={color} style={style}/> */}
        </div>
    )
}

export default SearchForm